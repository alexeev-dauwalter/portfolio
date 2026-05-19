import { en } from './strings/en';
import { ru } from './strings/ru';
import type { Locale } from './locales';
import type { Dictionary } from './strings/en';

const DICTIONARIES: Record<Locale, Dictionary> = { en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export { LOCALES, DEFAULT_LOCALE, isLocale } from './locales';
export type { Locale } from './locales';
export type { Dictionary, PluralForms } from './strings/en';
export {
  formatMonthYear,
  formatYearsMonths,
  monthsBetween,
  totalExperienceMonths,
  parseIsoMonth,
  plural
} from './format';
