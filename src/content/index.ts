import type { Locale } from '../i18n/locales';
import type { Content, TimelineRow } from './types';
import { enContent } from './en';
import { ruContent } from './ru';

const CONTENT: Record<Locale, Content> = {
  en: enContent,
  ru: ruContent
};

export function getContent(locale: Locale): Content {
  return CONTENT[locale];
}

export function buildTimeline(content: Content): TimelineRow[] {
  return [
    ...content.education.main.map((e) => ({
      year: e.graduation,
      title: e.institution,
      subtitle: `${e.faculty} — ${e.specialty}`
    })),
    ...content.education.additional.map((e) => ({
      year: e.graduation,
      title: e.organization,
      subtitle: e.name
    }))
  ].sort((a, b) => a.year - b.year);
}

export type { Content } from './types';
