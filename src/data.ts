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
  begin: string;
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

const Technology = {
  jest: {
    title: 'Jest',
    slug: 'jest',
    description: 'Тест-фреймворк для JavaScript и TypeScript.'
  },
  git: {
    title: 'Git',
    slug: 'git',
    description: 'Распределённая система контроля версий.'
  },
  linux: {
    title: 'Linux',
    slug: 'linux',
    description: 'Основная рабочая ОС с 2018 года.'
  },
  vuejs: {
    title: 'Vue.js',
    slug: 'vuedotjs',
    description: 'Прогрессивный фреймворк для UI.'
  },
  tailwindcss: {
    title: 'TailwindCSS',
    slug: 'tailwindcss',
    description: 'Utility-first CSS для быстрой вёрстки.'
  },
  svelte: {
    title: 'Svelte',
    slug: 'svelte',
    description: 'Компилятор UI, без рантайма-фреймворка.'
  },
  astro: {
    title: 'Astro',
    slug: 'astro',
    description: 'Контентный фреймворк со server-first рендером.'
  },
  nextjs: {
    title: 'Next.js',
    slug: 'nextdotjs',
    description: 'Полноценный React-фреймворк с SSR и app-router.'
  },
  react: {
    title: 'React',
    slug: 'react',
    description: 'Библиотека для построения интерфейсов.'
  },
  nodejs: {
    title: 'Node.js',
    slug: 'nodedotjs',
    description: 'Серверный рантайм JavaScript.'
  },
  nestjs: {
    title: 'NestJS',
    slug: 'nestjs',
    description: 'Бэкенд-фреймворк на TypeScript с DI и модулями.'
  },
  mysql: {
    title: 'MySQL',
    slug: 'mysql',
    description: 'Реляционная СУБД, использую в продакшене.'
  },
  mariadb: {
    title: 'MariaDB',
    slug: 'mariadb',
    description: 'Форк MySQL с расширенным набором фич.'
  },
  mongodb: {
    title: 'MongoDB',
    slug: 'mongodb',
    description: 'Документная NoSQL-БД для гибких схем.'
  },
  postgresql: {
    title: 'PostgreSQL',
    slug: 'postgresql',
    description: 'Основная СУБД в проектах последних лет.'
  },
  fastify: {
    title: 'Fastify',
    slug: 'fastify',
    description: 'Быстрый HTTP-фреймворк для Node.js.'
  },
  express: {
    title: 'Express',
    slug: 'express',
    description: 'Минималистичный фреймворк для Node.js.'
  },
  laravel: {
    title: 'Laravel',
    slug: 'laravel',
    description: 'PHP-фреймворк с богатой экосистемой.'
  },
  wordpress: {
    title: 'WordPress',
    slug: 'wordpress',
    description: 'CMS, с которой начинал коммерческую веб-разработку.'
  },
  tomcat: {
    title: 'Apache Tomcat',
    slug: 'apachetomcat',
    description: 'Сервлет-контейнер для Java-веба.'
  },
  spring: {
    title: 'Spring',
    slug: 'spring',
    description: 'Бэкенд-фреймворк на Java.'
  },
  tokio: {
    title: 'Tokio',
    slug: 'tokio',
    description: 'Асинхронный рантайм для Rust.'
  },
  mio: {
    title: 'Mio',
    slug: 'mio',
    description: 'Низкоуровневое I/O для Rust.'
  },
  tower: {
    title: 'Tower',
    slug: 'tower',
    description: 'Композируемые сервисы и middleware на Rust.'
  },
  bytes: {
    title: 'Bytes',
    slug: 'bytes',
    description: 'Эффективная работа с буферами в Rust.'
  },
  hyper: {
    title: 'Hyper',
    slug: 'hyper',
    description: 'HTTP-стек для Rust.'
  },
  tonic: {
    title: 'Tonic',
    slug: 'tonic',
    description: 'gRPC-фреймворк на Rust.'
  },
  tracing: {
    title: 'Tracing',
    slug: 'tracing',
    description: 'Инструментирование и логирование для Rust.'
  },
  nginx: {
    title: 'Nginx',
    slug: 'nginx',
    description: 'Веб-сервер и обратный прокси.'
  },
  phpstorm: {
    title: 'PhpStorm',
    slug: 'phpstorm',
    description: 'IDE для PHP от JetBrains.'
  },
  webstorm: {
    title: 'WebStorm',
    slug: 'webstorm',
    description: 'IDE для JS/TS от JetBrains.'
  },
  rustrover: {
    title: 'RustRover',
    slug: 'rustrover',
    description: 'IDE для Rust от JetBrains.'
  },
  intellij: {
    title: 'IntelliJ Idea',
    slug: 'intellijidea',
    description: 'Универсальная IDE от JetBrains.'
  },
  clion: {
    title: 'CLion',
    slug: 'clion',
    description: 'IDE для C/C++ от JetBrains.'
  },
  goland: {
    title: 'GoLand',
    slug: 'goland',
    description: 'IDE для Go от JetBrains.'
  },
  pycharm: {
    title: 'PyCharm',
    slug: 'pycharm',
    description: 'IDE для Python от JetBrains.'
  },
  vscode: {
    title: 'Visual Studio Code',
    slug: 'visualstudiocode',
    description: 'Лёгкий редактор с экосистемой расширений.'
  },
  vim: {
    title: 'Vim',
    slug: 'vim',
    description: 'Модальный текстовый редактор.'
  },
  neovim: {
    title: 'NeoVim',
    slug: 'neovim',
    description: 'Современный форк Vim с Lua-конфигом.'
  },
  docker: {
    title: 'Docker',
    slug: 'docker',
    description: 'Контейнеризация приложений.'
  },
  podman: {
    title: 'Podman',
    slug: 'podman',
    description: 'Daemonless-альтернатива Docker.'
  },
  zsh: {
    title: 'Zsh',
    slug: 'gnubash',
    description: 'POSIX-шелл с расширенным синтаксисом и автодополнением.'
  },
  tmux: {
    title: 'Tmux',
    slug: 'tmux',
    description: 'Терминал-мультиплексор.'
  },
  warp: {
    title: 'Warp Terminal',
    slug: 'warpterminal',
    description: 'Современный терминал с блок-историей.'
  },
  k8s: {
    title: 'Kubernetes',
    slug: 'kubernetes',
    description: 'Оркестрация контейнеров на масштабе.'
  }
} satisfies Record<string, Skill>;

const ProgrammingLanguage = {
  javascript: {
    title: 'JavaScript',
    slug: 'javascript',
    description: 'Основной язык фронтенда и Node.js-бэкенда.'
  },
  typescript: {
    title: 'TypeScript',
    slug: 'typescript',
    description: 'Строгая типизация для JS-проектов.'
  },
  php: {
    title: 'PHP',
    slug: 'php',
    description: 'Серверный язык, с которого начал коммерческую разработку.'
  },
  cpp: {
    title: 'C++',
    slug: 'cplusplus',
    description: 'Системное программирование и алгоритмы.'
  },
  csharp: {
    title: 'C#',
    slug: 'csharp',
    description: 'WPF, .NET и Unity-разработка.'
  },
  c: {
    title: 'C',
    slug: 'c',
    description: 'Низкоуровневая разработка и драйверы.'
  },
  kotlin: {
    title: 'Kotlin',
    slug: 'kotlin',
    description: 'JVM-язык для backend и Android.'
  },
  java: {
    title: 'Java',
    slug: 'openjdk',
    description: 'Серверная разработка на Spring и Tomcat.'
  },
  rust: {
    title: 'Rust',
    slug: 'rust',
    description: 'Системный язык для надёжных и быстрых сервисов.'
  },
  lua: {
    title: 'Lua',
    slug: 'lua',
    description: 'Скриптинг для NeoVim и embedded.'
  },
  go: {
    title: 'Go',
    slug: 'go',
    description: 'Простой и быстрый язык для бэкенда.'
  },
  python: {
    title: 'Python',
    slug: 'python',
    description: 'Скрипты, ML-эксперименты, веб на Django/Flask.'
  }
} satisfies Record<string, Skill>;

export const fullName = 'Алексеев Пётр Сергеевич',
  shortName = 'Алексеев П.С.',
  position = 'Full stack developer',
  positionAccent = 'developer',
  currentRole = 'Full-stack · CEO',
  email = 'alexeev.dauwalter@gmail.com',
  location = 'Великий Новгород, Россия';

export const skills = {
  main: [
    Technology.svelte,
    Technology.astro,
    Technology.tailwindcss,
    Technology.nestjs,
    Technology.tokio,
    ProgrammingLanguage.javascript,
    ProgrammingLanguage.rust
  ] as Skill[],
  hard: {
    languages: Object.values(ProgrammingLanguage) as Skill[],
    technologies: Object.values(Technology) as Skill[],
    patterns: [
      'Decorator',
      'Factory',
      'Singleton',
      'Flyweight',
      'Mediator',
      'Observer',
      'Module',
      'Builder'
    ]
  },
  soft: [] as string[],
  other: [] as { name: string }[],
  tools: [] as { name: string }[]
};

export const education = {
  main: [
    {
      institution: 'Институт электронных и информационных систем',
      faculty: 'Информатика и вычислительная техника',
      specialty:
        'Программное обеспечение вычислительной техники и автоматизированных систем',
      graduation: 2025
    },
    {
      institution:
        'Политехнический колледж Новгородского государственного университета имени Ярослава Мудрого',
      faculty: 'Программирование в компьютерных системах',
      specialty: 'Техник-программист',
      graduation: 2020
    }
  ] as Education[],
  additional: [
    {
      organization:
        'ФГБОУ ВО "Новгородский государственный университет имени Ярослава Мудрого"',
      name: 'Корпоративная защита от внутренних угроз информационной безопасности с использованием современных DLP технологий',
      graduation: 2020
    },
    {
      organization:
        'ФГБОУ ВО "Новгородский государственный университет имени Ярослава Мудрого"',
      name: 'Оператор ЭВМ',
      graduation: 2018
    }
  ] as AdditionalEducation[]
};

export const experience: Experience[] = [
  {
    company: 'Московская Школа Управления СКОЛКОВО',
    shortLabel: 'Сколково',
    position: 'Разработчик',
    begin: 'Ноябрь 2024',
    skills: [
      Technology.vuejs,
      Technology.laravel,
      Technology.tailwindcss,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.go
    ]
  },
  {
    company: '41T',
    shortLabel: '41T',
    position: 'Founder | CEO | Full stack engineer',
    begin: 'Февраль 2023',
    description:
      'О компании:\n' +
      'Основал собственную компанию, специализирующуюся на проектной разработке.\n' +
      'Мои обязанности:\n' +
      'В рамках деятельности компании занимался руководством и реализацией проектов от концепции до завершения, включая планирование, разработку и внедрение решений для клиентов.\n' +
      'Frontend разработка: разрабатывал интерфейсы и функционал с использованием JavaScript (TypeScript) и SvelteKit для создания современных веб-приложений.\n' +
      'Backend разработка: создавал высокопроизводительные асинхронные приложения с использованием Rust и фреймворка Tokio. Работал над серверной логикой и архитектурой приложений с использованием NestJS и Prisma для работы с базой данных. Использовал PostgreSQL в качестве системы управления базами данных для хранения и обработки данных.\n' +
      'Развертывание: использовал Docker для контейнеризации приложений и GitLab CI для автоматизации процессов сборки и развертывания.',
    skills: [
      Technology.svelte,
      Technology.astro,
      Technology.tailwindcss,
      Technology.nestjs,
      Technology.tokio,
      Technology.hyper,
      Technology.tonic,
      Technology.tracing,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.rust
    ]
  },
  {
    company: 'Antares Software Group',
    position: 'Full stack engineer | Team lead',
    begin: 'Май 2023',
    end: 'Октябрь 2024',
    description:
      'О компании:\n' +
      'Компания занимается разработкой, поддержкой и тестированием программного обеспечения широкого спектра от мобильных приложений до сайтов.\n' +
      'Мои обязанности:\n' +
      'Экспертиза: проводил оценку трудозатрат и формировал требования к информационным системам.\n' +
      'Проектирование и реализация архитектуры: Проектировал и реализовывал архитектуру различных веб-приложений, включая админ-панели и пользовательские интерфейсы. Участвовал в полном цикле разработки — от проектирования до развертывания.\n' +
      'Frontend разработка: использовал JavaScript (TypeScript) с применением React и Next.js для создания интерактивных и отзывчивых пользовательских интерфейсов.\n' +
      'Backend разработка: работал с PHP (Laravel), Java (Spring), а также JavaScript (TypeScript) с использованием NestJS и Express для создания надежных и масштабируемых серверных решений. Использовал PostgreSQL для работы с базами данных.\n' +
      'Достижения:\n' +
      'Разработал backend, API и админ-панель для системы проведения мероприятий.\n' +
      'Участвовал в проектировании крупной высоконагруженной e-commerce платформы.\n' +
      'Спроектировал и разработал административную панель для небольшого магазина.\n' +
      'Участвовал в проектировании, принимал архитектурные решения и разрабатывал внутреннюю систему электронного документооборота и управления поручениями.',
    skills: [
      Technology.react,
      Technology.nextjs,
      Technology.nodejs,
      Technology.laravel,
      Technology.tailwindcss,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.kotlin,
      ProgrammingLanguage.java,
      ProgrammingLanguage.php
    ]
  },
  {
    company: 'ООО "Сириус.ИС"',
    position: 'Младший разработчик программного обеспечения',
    begin: 'Август 2021',
    end: 'Июнь 2022',
    description:
      'О компании:\n' +
      'Компания занимаемся разработкой информационных систем и программных продуктов более 20 лет. Обеспечивает комплексный подход к автоматизации больших систем высокого класса и уровня сложности за счёт встроенных механизмов саморегуляции и уникальной модели организации и хранения данных.\n' +
      'Мои обязанности:\n' +
      'Frontend разработка: разработка на JavaScript с использованием React и Ant Design для создания удобных и функциональных пользовательских интерфейсов.\n' +
      'Backend разработка: разработка на Java с использованием Apache Tomcat и GraphQL для создания надежных серверных решений и API.\n' +
      'Достижения:\n' +
      'Дорабатывал устаревший код (legacy) на JavaScript ES5.\n' +
      'Разработал навигационное меню с использованием JavaScript (TypeScript) и Next.js.\n' +
      'Участвовал в разработке образовательной платформы, включая как frontend, так и backend части.\n' +
      'Причина ухода:\n' +
      'Решил сменить работу в поисках новых профессиональных вызовов и возможностей для карьерного роста.',
    skills: [
      Technology.react,
      Technology.tomcat,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.java
    ]
  },
  {
    company:
      'Политехнический колледж Новгородского государственного университета имени Ярослава Мудрого',
    position: 'Преподаватель',
    begin: 'Сентябрь 2020',
    end: 'Сентябрь 2023',
    description:
      'Проводил обучение студентов в области программирования и разработки. Мои ученики успешно трудоустроены на различных позициях, включая frontend и backend разработчиков. Среди них есть PHP разработчики, Java разработчики, JavaScript разработчики, Kotlin разработчики, а также UI/UX-дизайнеры и другие специалисты.\n' +
      'Мои обязанности:\n' +
      'Обучал студентов по различным дисциплинам, включая:\n' +
      '- Проектирование и разработка веб-приложений;\n' +
      '- Интернет технологии и публикация данных в сети Интернет;\n' +
      '- Технология разработки и защиты баз данных;\n' +
      '- Основы программирования;\n' +
      '- Машинное обучение и большие данные;\n' +
      '- Разработка мобильных приложений;\n' +
      '- Разработка кода информационных систем;\n' +
      '- Основы проектирования и разработки информационных систем.\n' +
      'Разрабатывал учебные планы, проводил лекции и практические занятия, оценивал результаты студентов и предоставлял обратную связь для их профессионального роста.\n' +
      'Обучал студентов следующим технологиям:\n' +
      '- Языки программирования: PHP, C++, C#, Java, Kotlin, JavaScript, TypeScript, Python;\n' +
      '- Базы данных: SQL, MongoDB, PostgreSQL, OracleDB, MySQL, SQLite;\n' +
      '- Инструменты и фреймворки: Figma, WordPress, Laravel, NestJS, Express, React, Next.js, Vue.js, Svelte, SvelteKit, Mocha, Jest, Vite, Docker.\n' +
      'Причина ухода:\n' +
      'Решил сменить работу, чтобы сосредоточиться на собственном профессиональном развитии и расширении навыков как разработчика.',
    skills: [
      Technology.vuejs,
      Technology.svelte,
      Technology.react,
      Technology.jest,
      Technology.laravel,
      Technology.nextjs,
      Technology.express,
      Technology.nestjs,
      Technology.mysql,
      Technology.postgresql,
      Technology.mongodb,
      Technology.docker,
      Technology.nodejs,
      ProgrammingLanguage.php,
      ProgrammingLanguage.cpp,
      ProgrammingLanguage.csharp,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.typescript,
      ProgrammingLanguage.python,
      ProgrammingLanguage.java,
      ProgrammingLanguage.kotlin
    ]
  }
];

export const projects: Project[] = [
  {
    name: 'Mini OS на Rust',
    description:
      'Учебная микро-ОС на Rust: загрузчик, прерывания, простой шедулер и драйверы устройств.',
    stack: [ProgrammingLanguage.rust, Technology.linux],
    github: 'https://github.com/alexeev-dauwalter/mini-os'
  },
  {
    name: 'Серверная лаборатория',
    description:
      'Домашний кластер с Kubernetes и Docker: эксперименты с networking, observability и self-hosted сервисами.',
    stack: [Technology.k8s, Technology.docker, Technology.linux, Technology.nginx],
    github: 'https://github.com/alexeev-dauwalter/homelab'
  },
  {
    name: 'E-commerce платформа',
    description:
      'Высоконагруженный магазин: NestJS API, очереди, кеш, админка на React и каталог с фасетной фильтрацией.',
    stack: [Technology.nestjs, Technology.react, Technology.postgresql, Technology.tailwindcss],
    gitlab: 'https://gitlab.com/alexeev-dauwalter/ecommerce'
  },
  {
    name: 'Система ЭДО',
    description:
      'Внутренний электронный документооборот: версии документов, поручения и роутинг согласований.',
    stack: [Technology.nextjs, Technology.nestjs, Technology.postgresql],
    gitlab: 'https://gitlab.com/alexeev-dauwalter/edo'
  },
  {
    name: 'Система мероприятий',
    description:
      'Бэкенд и админ-панель для проведения корпоративных мероприятий: расписание, регистрации, отчёты.',
    stack: [Technology.nestjs, Technology.postgresql, Technology.react],
    gitlab: 'https://gitlab.com/alexeev-dauwalter/events'
  },
  {
    name: 'Образовательная платформа',
    description:
      'LMS со студенческими профилями, заданиями и проверкой кода на стороне сервера.',
    stack: [Technology.nextjs, Technology.nestjs, Technology.mongodb, Technology.tailwindcss],
    github: 'https://github.com/alexeev-dauwalter/lms'
  }
];

export const timeline: TimelineRow[] = [
  ...education.main.map((e) => ({
    year: e.graduation,
    title: e.institution,
    subtitle: `${e.faculty} — ${e.specialty}`
  })),
  ...education.additional.map((e) => ({
    year: e.graduation,
    title: e.organization,
    subtitle: e.name
  }))
].sort((a, b) => a.year - b.year);

export const books = [
    {
      name: 'Чистая архитектура. Искусство разработки программного обеспечения',
      author: 'Роберт Мартин'
    }
  ],
  languages: Language[] = [
    { title: 'Русский', level: 'Родной' },
    { title: 'Английский', level: 'A2 — Элементарный' }
  ];

export const about = [
  'Программирование является не только моей профессией, но и увлечением. Я нахожу удовлетворение как в выполнении профессиональных задач, так и в реализации собственных проектов и изучении новых технологий.\n' +
    'В своей профессиональной деятельности я использую операционную систему Linux, которая позволяет мне эффективно работать и управлять проектами.\n' +
    'Долгий путь в разработке:\n' +
    'Я занимаюсь разработкой уже много лет, и этот опыт сформировал мой профессиональный путь и навыки.\n' +
    'Самообразование:\n' +
    'Постоянно уделяю время самообразованию, чтобы поддерживать и расширять свои знания. Например, я изучал курс UC Berkeley CS 61A "The Structure and Interpretation of Computer Programs", который помог мне углубить понимание теории программирования и разработать более комплексные решения.\n' +
    'Мой путь в программировании:\n' +
    '2012 год: интерес к программированию начал развиваться с изучения Pascal на уроках информатики в школе. Увлечённо писал код, заполняя тетради примерами и задачами.\n' +
    '2015 год: потребность в более глубоком понимании программирования привела к изучению C++ и C#. Этот период ознаменовался значительным расширением знаний и навыков в разработке программного обеспечения.\n' +
    '2017 год: перед поступлением в колледж начал изучать Python. Экспериментировал с различными фреймворками и инструментами, включая PyQt для создания графических интерфейсов, Django и Flask для разработки веб-приложений. Изначально увлекался разработкой игр, поэтому параллельно изучал работу с Unreal Engine и Unity.\n' +
    '2018 год: углубился в веб-разработку, освоив HTML, CSS, JavaScript и PHP, а также использовал WordPress, Bitrix, jQuery, Vue.js, SASS, SCSS и Bootstrap. Реализовал проект на C# WPF. Начал подрабатывать, разрабатывая небольшие информационные платформы и интернет-магазины.\n' +
    '2020 год: проводил небольшие курсы по программированию для школьников и предпенсионеров. Активно занимался изучением новых технологий, в том числе TailwindCSS.\n' +
    '2021 год: из-за требований работы перешёл на использование React для frontend-разработки.\n' +
    '2022 год: Начал изучать Rust и C для низкоуровневой разработки, включая драйверы, инструменты и веб-приложения. Заинтересовался Docker, что привело к изучению Podman и Kubernetes.\n' +
    '2023 год: глубоко погрузился в теорию программирования. Изучал разработку высоконагруженных веб-приложений и писал серверные приложения на Rust с использованием Tokio. Создал небольшую операционную систему на Rust и изучал микроконтроллеры. Также посетил GP Days 2023.\n' +
    '2024 год: купил сервер для детального изучения работы с железом. Продолжаю развиваться в низкоуровневой разработке и совершенствую навыки в создании веб-приложений различной сложности. В свободное время изучаю новые технологии, такие как Go и Angular.'
];

export const links: Link[] = [
    {
      href: 'https://teletype.in/@alexeev.dauwalter',
      slug: 'teletype',
      title: 'Teletype'
    },
    {
      href: 'https://www.npmjs.com/~ishi-inanis',
      slug: 'npm',
      title: 'Npm'
    }
  ],
  nav: Link[] = [
    {
      href: 'https://github.com/alexeev-dauwalter',
      slug: 'github',
      title: 'GitHub'
    },
    {
      href: 'https://gitlab.com/alexeev-dauwalter',
      slug: 'gitlab',
      title: 'GitLab'
    },
    {
      href: 'https://t.me/alexeev_dauwalter',
      slug: 'telegram',
      title: 'Telegram'
    },
    {
      href: 'https://linkedin.com/in/alexeev-dauwalter/',
      slug: 'linkedin',
      title: 'LinkedIn'
    }
  ],
  sections = [
    { number: '01', title: 'Обо мне', id: 'about' },
    { number: '02', title: 'Долгий путь', id: 'longpath' },
    { number: '03', title: 'Опыт работы', id: 'experience' },
    { number: '04', title: 'Проекты', id: 'projects' },
    { number: '05', title: 'Хронология', id: 'timeline' },
    { number: '06', title: 'Стек', id: 'stack' },
    { number: '07', title: 'Чтение и языки', id: 'reading' }
  ];
