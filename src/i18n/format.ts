import type { Locale } from './locales';
import type { Dictionary, PluralForms } from './strings/en';

const MONTH_NAMES: Record<Locale, string[]> = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]
};

const PLURAL_RULES: Record<Locale, Intl.PluralRules> = {
  en: new Intl.PluralRules('en'),
  ru: new Intl.PluralRules('ru')
};

export function parseIsoMonth(
  value: string
): { year: number; month: number } | null {
  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  if (Number.isNaN(year) || month < 0 || month > 11) return null;
  return { year, month };
}

export function formatMonthYear(iso: string, locale: Locale): string {
  const parsed = parseIsoMonth(iso);
  if (!parsed) return iso;
  return `${MONTH_NAMES[locale][parsed.month]} ${parsed.year}`;
}

export function plural(
  n: number,
  locale: Locale,
  forms: PluralForms
): string {
  const category = PLURAL_RULES[locale].select(n);
  return (
    (forms[category as keyof PluralForms] as string | undefined) ??
    forms.other
  );
}

export function formatYearsMonths(
  months: number,
  locale: Locale,
  dict: Dictionary
): string {
  if (months <= 0) return '';
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${plural(years, locale, dict.duration.year)}`);
  if (rest) parts.push(`${rest} ${plural(rest, locale, dict.duration.month)}`);
  return parts.join(' · ');
}

export function monthsBetween(beginIso: string, endIso?: string): number {
  const start = parseIsoMonth(beginIso);
  const stop = endIso ? parseIsoMonth(endIso) : null;
  const now = new Date();
  const stopY = stop?.year ?? now.getFullYear();
  const stopM = stop?.month ?? now.getMonth();
  if (!start) return 0;
  const months = (stopY - start.year) * 12 + (stopM - start.month) + 1;
  return months > 0 ? months : 0;
}

export function totalExperienceMonths(
  items: { begin: string; end?: string }[]
): number {
  const intervals = items
    .map(({ begin, end }) => {
      const start = parseIsoMonth(begin);
      const stop = end ? parseIsoMonth(end) : null;
      const now = new Date();
      const stopY = stop?.year ?? now.getFullYear();
      const stopM = stop?.month ?? now.getMonth();
      if (!start) return null;
      const startIdx = start.year * 12 + start.month;
      const stopIdx = stopY * 12 + stopM;
      if (stopIdx < startIdx) return null;
      return [startIdx, stopIdx] as [number, number];
    })
    .filter((x): x is [number, number] => x !== null)
    .sort((a, b) => a[0] - b[0]);

  let total = 0;
  let curStart: number | null = null;
  let curEnd = 0;
  for (const [s, e] of intervals) {
    if (curStart === null) {
      curStart = s;
      curEnd = e;
    } else if (s > curEnd + 1) {
      total += curEnd - curStart + 1;
      curStart = s;
      curEnd = e;
    } else {
      curEnd = Math.max(curEnd, e);
    }
  }
  if (curStart !== null) total += curEnd - curStart + 1;
  return total;
}
