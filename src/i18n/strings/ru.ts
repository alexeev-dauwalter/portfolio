import type { Dictionary } from './en';

export const ru: Dictionary = {
  header: {
    connect: 'связаться',
    contactWaysHeader: 'Способы связи',
    jobSearch: 'В поиске работы',
    panel: {
      current: 'Сейчас',
      role: 'Роль',
      stack: 'Стек',
      contact: 'Связь'
    }
  },
  sections: {
    about: 'Обо мне',
    longPath: 'Долгий путь',
    experience: 'Опыт работы',
    personalProjects: 'Личные проекты',
    commercialProjects: 'Коммерческий опыт',
    timeline: 'Хронология',
    stack: 'Стек',
    reading: 'Чтение и языки'
  },
  stack: {
    main: 'Основной стек',
    langsTech: 'Языки и технологии',
    patterns: 'Паттерны',
    tools: 'Инструменты',
    softSkills: 'Гибкие навыки',
    other: 'Другое'
  },
  reading: {
    languages: 'Языки',
    books: 'Прочитано'
  },
  duration: {
    year: { one: 'год', few: 'года', many: 'лет', other: 'лет' },
    month: { one: 'месяц', few: 'месяца', many: 'месяцев', other: 'месяцев' },
    presentTime: 'настоящее время'
  },
  parse: {
    yearKeyword: 'год',
    bulletedHeaders: /достижения|обязанности/i
  },
  count: {
    project: {
      one: 'проект',
      few: 'проекта',
      many: 'проектов',
      other: 'проектов'
    }
  },
  footer: {
    contactLabel: 'Связаться'
  }
};
