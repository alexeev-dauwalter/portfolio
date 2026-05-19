export interface Skill {
  title: string;
  slug: string;
  description?: string;
}

export interface Link {
  href: string;
  slug: string;
  title: string;
}

export interface Language {
  title: string;
  level: string;
}

export interface Experience {
  company: string;
  position: string;
  /** ISO YYYY-MM */
  begin: string;
  /** ISO YYYY-MM */
  end?: string;
  description?: string;
  skills?: Skill[];
  shortLabel?: string;
}

export interface Project {
  name: string;
  description: string;
  stack: Skill[];
  github?: string;
  gitlab?: string;
}

export interface TimelineRow {
  year: number;
  title: string;
  subtitle: string;
}

export interface Education {
  institution: string;
  faculty: string;
  specialty: string;
  graduation: number;
}

export interface AdditionalEducation {
  organization: string;
  name: string;
  graduation: number;
}

export interface Book {
  name: string;
  author: string;
}

export interface SectionMeta {
  number: string;
  /** Dictionary key under `sections.*` */
  key:
    | 'about'
    | 'longPath'
    | 'experience'
    | 'personalProjects'
    | 'commercialProjects'
    | 'timeline'
    | 'stack'
    | 'reading';
  id: string;
}

export interface Hero {
  /** First line of the heading, before the accented part. */
  titleStart: string;
  /** Italic-accent phrase inside the heading. */
  titleAccent: string;
  /** Second line of the heading, after the accented part. */
  titleEnd: string;
  /** Intro paragraph rendered as raw HTML (allows inline <code> blocks). */
  introHtml: string;
}

export interface Content {
  fullName: string;
  email: string;
  location?: string;
  desiredPositions: string[];
  hero: Hero;
  skills: {
    main: Skill[];
    hard: {
      languages: Skill[];
      technologies: Skill[];
      patterns: string[];
    };
    soft: string[];
    other: { name: string }[];
    tools: { name: string }[];
  };
  education: {
    main: Education[];
    additional: AdditionalEducation[];
  };
  experience: Experience[];
  projects: Project[];
  commercialProjects: Project[];
  about: string[];
  books: Book[];
  languages: Language[];
  links: Link[];
  nav: Link[];
  sections: SectionMeta[];
}
