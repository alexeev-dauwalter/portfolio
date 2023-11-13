import type { SvelteComponent } from 'svelte';
import Npm from './svg/Npm.svg.svelte';
import Github from './svg/Github.svg.svelte';
import Gitlab from './svg/Gitlab.svg.svelte';
import Teletype from './svg/Teletype.svg.svelte';
import Telegram from './svg/Telegram.svg.svelte';
import LinkedIn from './svg/LinkedIn.svg.svelte';

interface Link {
  href: string;
  component: typeof SvelteComponent;
}

interface Skill {
  name: string;
  color: string;
}

interface Experience {
  company: string;
  position: string;
  begin: string;
  end?: string;
  description?: string;
  skills?: Skill[];
}

const Technology = {
    jest: { name: 'Jest', color: 'rose' },
    git: { name: 'Git', color: 'red' },
    linux: { name: 'Linux', color: 'amber' },
    sass: { name: 'Sass', color: 'pink' },
    scss: { name: 'Scss', color: 'pink' },
    bootstrap: { name: 'Bootstrap', color: 'purple' },
    vuejs: { name: 'Vue.js', color: 'emerald' },
    tailwindcss: { name: 'TailwindCSS', color: 'sky' },
    svelte: { name: 'Svelte', color: 'red' },
    astro: { name: 'Astro', color: 'pink' },
    nextjs: { name: 'Next.js', color: 'neutral' },
    react: { name: 'React', color: 'cyan' },
    mysql: { name: 'MySQL', color: 'teal' },
    nodejs: { name: 'Node.js', color: 'green' },
    nestjs: { name: 'NestJS', color: 'red' },
    postgresql: { name: 'PostgreSQL', color: 'blue' },
    fastify: { name: 'Fastify', color: 'neutral' },
    express: { name: 'Express', color: 'green' },
    laravel: { name: 'Laravel', color: 'red' },
    wordpress: { name: 'WordPress', color: 'sky' },
    tomcat: { name: 'Apache Tomcat', color: 'yellow' }
  },
  ProgrammingLanguage = {
    javascript: { name: 'JavaScript', color: 'yellow' },
    html: { name: 'HTML', color: 'orange' },
    css: { name: 'CSS', color: 'sky' },
    typescript: { name: 'TypeScript', color: 'blue' },
    php: { name: 'PHP', color: 'violet' },
    cpp: { name: 'C++', color: 'blue' },
    csharp: { name: 'C#', color: 'fuchsia' },
    kotlin: { name: 'Kotlin', color: 'purple' },
    java: { name: 'Java', color: 'orange' },
    rust: { name: 'Rust', color: 'red' },
    pascal: { name: 'Pascal', color: 'blue' }
  };

export const fullname = 'Алексеев Пётр Сергеевич',
  position = 'Full stack developer',
  email = 'alexeev.dauwalter@gmail.com',
  skills = {
    main: [
      Technology.svelte,
      Technology.astro,
      Technology.tailwindcss,
      Technology.nestjs,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.rust
    ],
    hard: {
      languages: Object.values(ProgrammingLanguage),
      technologies: Object.values(Technology),
      patterns: [{
        name: 'Decorator',
        color: ''
      }, {
        name: 'Factory',
        color: ''
      }, {
        name: 'Singleton',
        color: ''
      }, {
        name: 'Flyweight',
        color: ''
      }, {
        name: 'Mediator',
        color: ''
      }, {
        name: 'Observer',
        color: ''
      }, {
        name: 'Module',
        color: ''
      }, {
        name: 'Builder',
        color: ''
      }]
    },
    soft: [{
      name: 'Умею находить общий язык с командой',
      color: ''
    }, {
      name: 'Способен самообучаться',
      color: ''
    }],
    other: [],
    tools: [{
      name: 'PhpStorm',
      color: 'purple'
    }, {
      name: 'WebStorm',
      color: 'blue'
    }, {
      name: 'RustRover',
      color: 'orange'
    }, {
      name: 'IntelliJ Idea',
      color: 'rose'
    }, {
      name: 'CLion',
      color: 'teal'
    }, {
      name: 'Visual Studio Code',
      color: 'sky'
    }, {
      name: 'Vim',
      color: 'lime'
    }, {
      name: 'NeoVim',
      color: 'emerald'
    }, {
      name: 'Docker',
      color: 'sky'
    }, {
      name: 'Podman',
      color: 'purple'
    }, {
      name: 'Zsh',
      color: 'orange'
    }, {
      name: 'Tmux',
      color: 'emerald'
    }, {
      name: 'Git',
      color: 'red'
    }]
  },
  education = {
    main: [{
      institution: 'Институт электронных и информационных систем',
      faculty: 'Информатика и вычислительная техника',
      specialty: 'Программное обеспечение вычислительной техники и автоматизированных систем',
      graduation: 2025
    }, {
      institution: 'Политехнический колледж Новгородского государственного университета имени Ярослава Мудрого',
      faculty: 'Программирование в компьютерных системах',
      specialty: 'Техник-программист',
      graduation: 2020
    }],
    additional: [{
      organization: 'ФГБОУ ВО "Новгородский государственный университет имени Ярослава Мудрого"',
      name: 'Корпоративная защита от внутренних угроз информационной безопасности с использованием современных DLP технологий',
      graduation: 2020
    }, {
      organization: 'ФГБОУ ВО "Новгородский государственный университет имени Ярослава Мудрого"',
      name: 'Оператор ЭВМ',
      graduation: 2018
    }]
  },
  experience: Experience[] = [{
    company: '41T',
    position: 'Founder | CEO | Full stack engineer',
    begin: 'Февраль 2023',
    description: 'Frontend разработка на Astro, Svelte с Tailwindcss.\n' +
      'Backend разработка на NestJS.',
    skills: [
      Technology.svelte,
      Technology.astro,
      Technology.tailwindcss,
      Technology.nestjs,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.rust
    ]
  }, {
    company: 'Antares Software Group',
    position: 'Full stack engineer | Team lead',
    begin: 'Май 2023',
    description: 'Frontend разработка на JS, React с Next.js.',
    skills: [
      Technology.react,
      Technology.nextjs,
      Technology.laravel,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.kotlin,
      ProgrammingLanguage.php
    ]
  }, {
    company: 'Политехнический колледж Новгородского государственного университета имени Ярослава Мудрого',
    position: 'Преподаватель',
    begin: 'Сентябрь 2020',
    end: 'Сентябрь 2023',
    description: 'Преподаватель по дисциплинам:\n' +
      'Проектирование и разработка веб-приложений;\n' +
      'Интернет технологии и публикация данных в сети Интернет;\n' +
      'Технология разработки и защиты баз данных;\n' +
      'Основы программирования;\n' +
      'Машинное обучение и большие данные;\n' +
      'Разработка мобильных приложений;\n' +
      'Разработка кода информационных систем;\n' +
      'Основы проектирования и разработки информационных систем.'
  }, {
    company: 'ООО "Сириус.ИС"',
    position: 'Младший разработчик программного обеспечения',
    begin: 'Август 2021',
    end: 'Июнь 2022',
    description: 'Frontend разработка на JS, React с Ant Design.\n' +
      'Backend разработка на Java и Apache Tomcat.',
    skills: [
      Technology.react,
      Technology.tomcat,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.java
      ]
  }],
  books = [{
    name: 'Чистая архитектура. Искусство разработки программного обеспечения',
    author: 'Роберт Мартин'
  }],
  languages = [
    'Русский — Родной',
    'Английский — A2 — Элементарный'
  ],
  about = [
    'Меня всегда увлекала веб-разработка, и я совершенствую свои навыки в этой области уже около 5 лет. В настоящее время я являюсь частью команды Antares Software Group, где работаю над увлекательными проектами и сотрудничаю с талантливыми коллегами.',
    'Помимо своей профессиональной деятельности, я уделяю внимание образованию и в данный момент продолжаю учебу в институте. Как активный обучающийся, я верю в важность постоянного роста и развития.',
    'Кроме того, у меня есть возможность делиться своими знаниями и опытом как преподаватель по совместительству, помогая другим осваивать мир веб-разработки.',
    'Благодаря целеустремленности и желанию совершенствоваться, я использую свободное время для выполнения фриланс-проектов и постоянного развития своих навыков.',
    'Недавно я отправился в предпринимательское путешествие, основав свою собственную компанию, 41T. Наша миссия - разрабатывать проекты с открытым исходным кодом, которые доступны каждому. Я твердо верю в силу открытых решений для творчества и инноваций в мире технологий.',
    'Давайте свяжемся и исследуем возможности совместной работы, обмена знаний и разработки проектов. Я с нетерпением жду возможности стать частью динамичной и постоянно развивающейся области веб-разработки.'
  ],
  links = [{
    href: 'https://teletype.in/@alexeev.dauwalter',
    component: Teletype
  }, {
    href: 'https://www.npmjs.com/~ishi-inanis',
    component: Npm
  }],
  nav: Link[] = [{
    href: 'https://github.com/alexeev-dauwalter',
    component: Github
  }, {
    href: 'https://gitlab.com/alexeev-dauwalter',
    component: Gitlab
  }, {
    href: 'https://t.me/alexeev_dauwalter',
    component: Telegram
  }, {
    href: 'https://linkedin.com/in/alexeev-dauwalter/',
    component: LinkedIn
  }];
