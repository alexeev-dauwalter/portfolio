import type { SvelteComponent } from 'svelte';
import GolandSvg from './svg/GolandSvg.svelte';
import GoSvg from './svg/GoSvg.svelte';
import KubernetesSvg from './svg/KubernetesSvg.svelte';
import NpmSvg from './svg/NpmSvg.svelte';
import GithubSvg from './svg/GithubSvg.svelte';
import GitlabSvg from './svg/GitlabSvg.svelte';
import PycharmSvg from './svg/PycharmSvg.svelte';
import PythonSvg from './svg/PythonSvg.svelte';
import TeletypeSvg from './svg/TeletypeSvg.svelte';
import TelegramSvg from './svg/TelegramSvg.svelte';
import LinkedInSvg from './svg/LinkedInSvg.svelte';
import GitSvg from './svg/GitSvg.svelte';
import SvelteSvg from './svg/SvelteSvg.svelte';
import AstroSvg from './svg/AstroSvg.svelte';
import NextjsSvg from './svg/NextjsSvg.svelte';
import ReactSvg from './svg/ReactSvg.svelte';
import NodejsSvg from './svg/NodejsSvg.svelte';
import NestjsSvg from './svg/NestjsSvg.svelte';
import LaravelSvg from './svg/LaravelSvg.svelte';
import SpringSvg from './svg/SpringSvg.svelte';
import JavascriptSvg from './svg/JavascriptSvg.svelte';
import TypescriptSvg from './svg/TypescriptSvg.svelte';
import KotlinSvg from './svg/KotlinSvg.svelte';
import JavaSvg from './svg/JavaSvg.svelte';
import RustSvg from './svg/RustSvg.svelte';
import VuejsSvg from './svg/VuejsSvg.svelte';
import JestSvg from './svg/JestSvg.svelte';
import LinuxSvg from './svg/LinuxSvg.svelte';
import TailwindcssSvg from './svg/TailwindcssSvg.svelte';
import MysqlSvg from './svg/MysqlSvg.svelte';
import MariadbSvg from './svg/MariadbSvg.svelte';
import MongodbSvg from './svg/MongodbSvg.svelte';
import PostgresqlSvg from './svg/PostgresqlSvg.svelte';
import FastifySvg from './svg/FastifySvg.svelte';
import ExpressSvg from './svg/ExpressSvg.svelte';
import WarpTerminalSvg from './svg/WarpTerminalSvg.svelte';
import WordpressSvg from './svg/WordpressSvg.svelte';
import TomcatSvg from './svg/TomcatSvg.svelte';
import TokioSvg from './svg/TokioSvg.svelte';
import MioSvg from './svg/MioSvg.svelte';
import TowerSvg from './svg/TowerSvg.svelte';
import BytesSvg from './svg/BytesSvg.svelte';
import HyperSvg from './svg/HyperSvg.svelte';
import TonicSvg from './svg/TonicSvg.svelte';
import TracingSvg from './svg/TracingSvg.svelte';
import NginxSvg from './svg/NginxSvg.svelte';
import PhpstormSvg from './svg/PhpstormSvg.svelte';
import WebstormSvg from './svg/WebstormSvg.svelte';
import RustroverSvg from './svg/RustroverSvg.svelte';
import IntellijSvg from './svg/IntellijSvg.svelte';
import ClionSvg from './svg/ClionSvg.svelte';
import VscodeSvg from './svg/VscodeSvg.svelte';
import VimSvg from './svg/VimSvg.svelte';
import NeovimSvg from './svg/NeovimSvg.svelte';
import DockerSvg from './svg/DockerSvg.svelte';
import PodmanSvg from './svg/PodmanSvg.svelte';
import ZshSvg from './svg/ZshSvg.svelte';
import TmuxSvg from './svg/TmuxSvg.svelte';
import PhpSvg from './svg/PhpSvg.svelte';
import CsharpSvg from './svg/CsharpSvg.svelte';
import CppSvg from './svg/CppSvg.svelte';
import LuaSvg from './svg/LuaSvg.svelte';
import CSvg from './svg/CSvg.svelte';

interface Link {
  href: string;
  component: typeof SvelteComponent;
  title: string;
}

interface Language {
  title: string;
  level: string;
}

interface Skill {
  title: string;
  component: typeof SvelteComponent;
}

interface Experience {
  company: string;
  position: string;
  begin: string;
  end?: string;
  description?: string;
  skills?: Skill[];
}

const Technology: { [key: string]: Skill } = {
    jest: {
      title: 'Jest',
      component: JestSvg
    },
    git: {
      title: 'Git',
      component: GitSvg
    },
    linux: {
      title: 'Linux',
      component: LinuxSvg
    },
    vuejs: {
      title: 'Vue.js',
      component: VuejsSvg
    },
    tailwindcss: {
      title: 'TailwindCSS',
      component: TailwindcssSvg
    },
    svelte: {
      title: 'Svelte',
      component: SvelteSvg
    },
    astro: {
      title: 'Astro',
      component: AstroSvg
    },
    nextjs: {
      title: 'Next.js',
      component: NextjsSvg
    },
    react: {
      title: 'React',
      component: ReactSvg
    },
    nodejs: {
      title: 'Node.js',
      component: NodejsSvg
    },
    nestjs: {
      title: 'NestJS',
      component: NestjsSvg
    },
    mysql: {
      title: 'MySQL',
      component: MysqlSvg
    },
    mariadb: {
      title: 'MariaDB',
      component: MariadbSvg
    },
    mongodb: {
      title: 'MongoDB',
      component: MongodbSvg
    },
    postgresql: {
      title: 'PostgreSQL',
      component: PostgresqlSvg
    },
    fastify: {
      title: 'Fastify',
      component: FastifySvg
    },
    express: {
      title: 'Express',
      component: ExpressSvg
    },
    laravel: {
      title: 'Laravel',
      component: LaravelSvg
    },
    wordpress: {
      title: 'WordPress',
      component: WordpressSvg
    },
    tomcat: {
      title: 'Apache Tomcat',
      component: TomcatSvg
    },
    spring: {
      title: 'Spring',
      component: SpringSvg
    },
    tokio: {
      title: 'Tokio',
      component: TokioSvg
    },
    mio: {
      title: 'Mio',
      component: MioSvg
    },
    tower: {
      title: 'Tower',
      component: TowerSvg
    },
    bytes: {
      title: 'Bytes',
      component: BytesSvg
    },
    hyper: {
      title: 'Hyper',
      component: HyperSvg
    },
    tonic: {
      title: 'Tonic',
      component: TonicSvg
    },
    tracing: {
      title: 'Tracing',
      component: TracingSvg
    },
    nginx: {
      title: 'Nginx',
      component: NginxSvg
    },
    phpstorm: {
      title: 'PhpStorm',
      component: PhpstormSvg
    },
    webstorm: {
      title: 'WebStorm',
      component: WebstormSvg
    },
    rustrover: {
      title: 'RustRover',
      component: RustroverSvg
    },
    intellij: {
      title: 'IntelliJ Idea',
      component: IntellijSvg
    },
    clion: {
      title: 'CLion',
      component: ClionSvg
    },
    goland: {
      title: 'GoLand',
      component: GolandSvg
    },
    pycharm: {
      title: 'PyCharm',
      component: PycharmSvg
    },
    vscode: {
      title: 'Visual Studio Code',
      component: VscodeSvg
    },
    vim: {
      title: 'Vim',
      component: VimSvg
    },
    neovim: {
      title: 'NeoVim',
      component: NeovimSvg
    },
    docker: {
      title: 'Docker',
      component: DockerSvg
    },
    podman: {
      title: 'Podman',
      component: PodmanSvg
    },
    zsh: {
      title: 'Zsh',
      component: ZshSvg
    },
    tmux: {
      title: 'Tmux',
      component: TmuxSvg
    },
    warp: {
      title: 'Warp Terminal',
      component: WarpTerminalSvg
    },
    k8s: {
      title: 'Kubernetes',
      component: KubernetesSvg
    }
  },
  ProgrammingLanguage: { [key: string]: Skill } = {
    javascript: {
      title: 'JavaScript',
      component: JavascriptSvg
    },
    typescript: {
      title: 'TypeScript',
      component: TypescriptSvg
    },
    php: {
      title: 'PHP',
      component: PhpSvg
    },
    cpp: {
      title: 'C++',
      component: CppSvg
    },
    csharp: {
      title: 'C#',
      component: CsharpSvg
    },
    c: {
      title: 'C',
      component: CSvg
    },
    kotlin: {
      title: 'Kotlin',
      component: KotlinSvg
    },
    java: {
      title: 'Java',
      component: JavaSvg
    },
    rust: {
      title: 'Rust',
      component: RustSvg
    },
    lua: {
      title: 'Lua',
      component: LuaSvg
    },
    go: {
      title: 'Go',
      component: GoSvg
    },
    python: {
      title: 'Python',
      component: PythonSvg
    }
  };

export const fullName = 'Алексеев Пётр Сергеевич',
  position = 'Full stack developer',
  email = 'alexeev.dauwalter@gmail.com',
  skills = {
    main: [
      Technology.svelte,
      Technology.astro,
      Technology.tailwindcss,
      Technology.nestjs,
      Technology.tokio,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.rust
    ],
    hard: {
      languages: Object.values(ProgrammingLanguage),
      technologies: Object.values(Technology),
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
    soft: [],
    other: [],
    tools: []
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
    company: 'Московская Школа Управления СКОЛКОВО',
    position: 'Разработчик',
    begin: 'Ноябрь 2024',
    skills: [
      Technology.vuejs,
      Technology.laravel,
      Technology.tailwindcss,
      ProgrammingLanguage.javascript,
      ProgrammingLanguage.go
    ]
  },{
    company: '41T',
    position: 'Founder | CEO | Full stack engineer',
    begin: 'Февраль 2023',
    description: 'О компании:\n' +
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
  }, {
    company: 'Antares Software Group',
    position: 'Full stack engineer | Team lead',
    begin: 'Май 2023',
    end: 'Октябрь 2024',
    description: 'О компании:\n' +
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
      ProgrammingLanguage.php
    ]
  }, {
    company: 'ООО "Сириус.ИС"',
    position: 'Младший разработчик программного обеспечения',
    begin: 'Август 2021',
    end: 'Июнь 2022',
    description: 'О компании:\n' +
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
  }, {
    company: 'Политехнический колледж Новгородского государственного университета имени Ярослава Мудрого',
    position: 'Преподаватель',
    begin: 'Сентябрь 2020',
    end: 'Сентябрь 2023',
    description: 'Проводил обучение студентов в области программирования и разработки. Мои ученики успешно трудоустроены на различных позициях, включая frontend и backend разработчиков. Среди них есть PHP разработчики, Java разработчики, JavaScript разработчики, Kotlin разработчики, а также UI/UX-дизайнеры и другие специалисты.\n' +
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
  }],
  books = [{
    name: 'Чистая архитектура. Искусство разработки программного обеспечения',
    author: 'Роберт Мартин'
  }],
  languages: Language[] = [{
    title: 'Русский',
    level: 'Родной'
  }, {
    title: 'Английский',
    level: 'A2 — Элементарный'
  }],
  about = [
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
  ],
  links: Link[] = [{
    href: 'https://teletype.in/@alexeev.dauwalter',
    component: TeletypeSvg,
    title: 'Teletype'
  }, {
    href: 'https://www.npmjs.com/~ishi-inanis',
    component: NpmSvg,
    title: 'Npm'
  }],
  nav: Link[] = [{
    href: 'https://github.com/alexeev-dauwalter',
    component: GithubSvg,
    title: 'Github'
  }, {
    href: 'https://gitlab.com/alexeev-dauwalter',
    component: GitlabSvg,
    title: 'Gitlab'
  }, {
    href: 'https://t.me/alexeev_dauwalter',
    component: TelegramSvg,
    title: 'Telegram'
  }, {
    href: 'https://linkedin.com/in/alexeev-dauwalter/',
    component: LinkedInSvg,
    title: 'LinkedIn'
  }];
