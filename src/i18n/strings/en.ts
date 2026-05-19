export type PluralForms = {
  one?: string;
  two?: string;
  few?: string;
  many?: string;
  other: string;
};

export type Dictionary = {
  header: {
    connect: string;
    contactWaysHeader: string;
    jobSearch: string;
    panel: {
      current: string;
      role: string;
      stack: string;
      contact: string;
    };
  };
  sections: {
    about: string;
    longPath: string;
    experience: string;
    projects: string;
    timeline: string;
    stack: string;
    reading: string;
  };
  stack: {
    main: string;
    langsTech: string;
    patterns: string;
    tools: string;
    softSkills: string;
    other: string;
  };
  reading: {
    languages: string;
    books: string;
  };
  duration: {
    year: PluralForms;
    month: PluralForms;
    presentTime: string;
  };
  parse: {
    /** Token following the year prefix in longPath lines (e.g. "2024 year:"). */
    yearKeyword: string;
    /** Regex matching section labels that should render items as bullets. */
    bulletedHeaders: RegExp;
  };
  count: {
    project: PluralForms;
  };
  footer: {
    contactLabel: string;
  };
};

export const en: Dictionary = {
  header: {
    connect: 'get in touch',
    contactWaysHeader: 'Ways to reach me',
    jobSearch: 'Open to work',
    panel: {
      current: 'Now',
      role: 'Role',
      stack: 'Stack',
      contact: 'Contacts'
    }
  },
  sections: {
    about: 'About',
    longPath: 'The long road',
    experience: 'Experience',
    projects: 'Projects',
    timeline: 'Timeline',
    stack: 'Stack',
    reading: 'Reading & languages'
  },
  stack: {
    main: 'Main stack',
    langsTech: 'Languages & technologies',
    patterns: 'Patterns',
    tools: 'Tools',
    softSkills: 'Soft skills',
    other: 'Other'
  },
  reading: {
    languages: 'Languages',
    books: 'Books'
  },
  duration: {
    year: { one: 'year', other: 'years' },
    month: { one: 'month', other: 'months' },
    presentTime: 'present'
  },
  parse: {
    yearKeyword: '',
    bulletedHeaders: /achievements|responsibilities/i
  },
  count: {
    project: { one: 'project', other: 'projects' }
  },
  footer: {
    contactLabel: 'Get in touch'
  }
};
