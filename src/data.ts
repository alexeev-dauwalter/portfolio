import type { SvgComponent } from 'astro/types';
import GolandSvg from '@assets/goland.svg';
import GoSvg from '@assets/go.svg';
import KubernetesSvg from '@assets/kubernetes.svg';
import NpmSvg from '@assets/npm.svg';
import GithubSvg from '@assets/github.svg';
import GitlabSvg from '@assets/gitlab.svg';
import PycharmSvg from '@assets/pycharm.svg';
import PythonSvg from '@assets/python.svg';
import TeletypeSvg from '@assets/teletype.svg';
import TelegramSvg from '@assets/telegram.svg';
import LinkedInSvg from '@assets/linkedIn.svg';
import GitSvg from '@assets/git.svg';
import SvelteSvg from '@assets/svelte.svg';
import AstroSvg from '@assets/astro.svg';
import NextjsSvg from '@assets/nextjs.svg';
import ReactSvg from '@assets/react.svg';
import NodejsSvg from '@assets/nodejs.svg';
import NestjsSvg from '@assets/nestjs.svg';
import LaravelSvg from '@assets/laravel.svg';
import SpringSvg from '@assets/spring.svg';
import JavascriptSvg from '@assets/javascript.svg';
import TypescriptSvg from '@assets/typescript.svg';
import KotlinSvg from '@assets/kotlin.svg';
import JavaSvg from '@assets/java.svg';
import RustSvg from '@assets/rust.svg';
import VuejsSvg from '@assets/vuejs.svg';
import JestSvg from '@assets/jest.svg';
import LinuxSvg from '@assets/linux.svg';
import TailwindcssSvg from '@assets/tailwindcss.svg';
import MysqlSvg from '@assets/mysql.svg';
import MariadbSvg from '@assets/mariadb.svg';
import MongodbSvg from '@assets/mongodb.svg';
import PostgresqlSvg from '@assets/postgresql.svg';
import FastifySvg from '@assets/fastify.svg';
import ExpressSvg from '@assets/express.svg';
import WarpTerminalSvg from '@assets/warpterminal.svg';
import WordpressSvg from '@assets/wordpress.svg';
import TomcatSvg from '@assets/tomcat.svg';
import TokioSvg from '@assets/tokio.svg';
import MioSvg from '@assets/mio.svg';
import TowerSvg from '@assets/tower.svg';
import BytesSvg from '@assets/bytes.svg';
import HyperSvg from '@assets/hyper.svg';
import TonicSvg from '@assets/tonic.svg';
import TracingSvg from '@assets/tracing.svg';
import NginxSvg from '@assets/nginx.svg';
import PhpstormSvg from '@assets/phpstorm.svg';
import WebstormSvg from '@assets/webstorm.svg';
import RustroverSvg from '@assets/rustrover.svg';
import IntellijSvg from '@assets/intellij.svg';
import ClionSvg from '@assets/clion.svg';
import VscodeSvg from '@assets/vscode.svg';
import VimSvg from '@assets/vim.svg';
import NeovimSvg from '@assets/neovim.svg';
import DockerSvg from '@assets/docker.svg';
import PodmanSvg from '@assets/podman.svg';
import ZshSvg from '@assets/zsh.svg';
import TmuxSvg from '@assets/tmux.svg';
import PhpSvg from '@assets/php.svg';
import CsharpSvg from '@assets/csharp.svg';
import CppSvg from '@assets/cpp.svg';
import LuaSvg from '@assets/lua.svg';
import CSvg from '@assets/c.svg';

interface Link {
  href: string;
  Icon: SvgComponent;
  title: string;
}

interface Language {
  title: string;
  level: string;
}

interface Skill {
  title: string;
  Icon: SvgComponent;
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
      Icon: JestSvg
    },
    git: {
      title: 'Git',
      Icon: GitSvg
    },
    linux: {
      title: 'Linux',
      Icon: LinuxSvg
    },
    vuejs: {
      title: 'Vue.js',
      Icon: VuejsSvg
    },
    tailwindcss: {
      title: 'TailwindCSS',
      Icon: TailwindcssSvg
    },
    svelte: {
      title: 'Svelte',
      Icon: SvelteSvg
    },
    astro: {
      title: 'Astro',
      Icon: AstroSvg
    },
    nextjs: {
      title: 'Next.js',
      Icon: NextjsSvg
    },
    react: {
      title: 'React',
      Icon: ReactSvg
    },
    nodejs: {
      title: 'Node.js',
      Icon: NodejsSvg
    },
    nestjs: {
      title: 'NestJS',
      Icon: NestjsSvg
    },
    mysql: {
      title: 'MySQL',
      Icon: MysqlSvg
    },
    mariadb: {
      title: 'MariaDB',
      Icon: MariadbSvg
    },
    mongodb: {
      title: 'MongoDB',
      Icon: MongodbSvg
    },
    postgresql: {
      title: 'PostgreSQL',
      Icon: PostgresqlSvg
    },
    fastify: {
      title: 'Fastify',
      Icon: FastifySvg
    },
    express: {
      title: 'Express',
      Icon: ExpressSvg
    },
    laravel: {
      title: 'Laravel',
      Icon: LaravelSvg
    },
    wordpress: {
      title: 'WordPress',
      Icon: WordpressSvg
    },
    tomcat: {
      title: 'Apache Tomcat',
      Icon: TomcatSvg
    },
    spring: {
      title: 'Spring',
      Icon: SpringSvg
    },
    tokio: {
      title: 'Tokio',
      Icon: TokioSvg
    },
    mio: {
      title: 'Mio',
      Icon: MioSvg
    },
    tower: {
      title: 'Tower',
      Icon: TowerSvg
    },
    bytes: {
      title: 'Bytes',
      Icon: BytesSvg
    },
    hyper: {
      title: 'Hyper',
      Icon: HyperSvg
    },
    tonic: {
      title: 'Tonic',
      Icon: TonicSvg
    },
    tracing: {
      title: 'Tracing',
      Icon: TracingSvg
    },
    nginx: {
      title: 'Nginx',
      Icon: NginxSvg
    },
    phpstorm: {
      title: 'PhpStorm',
      Icon: PhpstormSvg
    },
    webstorm: {
      title: 'WebStorm',
      Icon: WebstormSvg
    },
    rustrover: {
      title: 'RustRover',
      Icon: RustroverSvg
    },
    intellij: {
      title: 'IntelliJ Idea',
      Icon: IntellijSvg
    },
    clion: {
      title: 'CLion',
      Icon: ClionSvg
    },
    goland: {
      title: 'GoLand',
      Icon: GolandSvg
    },
    pycharm: {
      title: 'PyCharm',
      Icon: PycharmSvg
    },
    vscode: {
      title: 'Visual Studio Code',
      Icon: VscodeSvg
    },
    vim: {
      title: 'Vim',
      Icon: VimSvg
    },
    neovim: {
      title: 'NeoVim',
      Icon: NeovimSvg
    },
    docker: {
      title: 'Docker',
      Icon: DockerSvg
    },
    podman: {
      title: 'Podman',
      Icon: PodmanSvg
    },
    zsh: {
      title: 'Zsh',
      Icon: ZshSvg
    },
    tmux: {
      title: 'Tmux',
      Icon: TmuxSvg
    },
    warp: {
      title: 'Warp Terminal',
      Icon: WarpTerminalSvg
    },
    k8s: {
      title: 'Kubernetes',
      Icon: KubernetesSvg
    }
  },
  ProgrammingLanguage: { [key: string]: Skill } = {
    javascript: {
      title: 'JavaScript',
      Icon: JavascriptSvg
    },
    typescript: {
      title: 'TypeScript',
      Icon: TypescriptSvg
    },
    php: {
      title: 'PHP',
      Icon: PhpSvg
    },
    cpp: {
      title: 'C++',
      Icon: CppSvg
    },
    csharp: {
      title: 'C#',
      Icon: CsharpSvg
    },
    c: {
      title: 'C',
      Icon: CSvg
    },
    kotlin: {
      title: 'Kotlin',
      Icon: KotlinSvg
    },
    java: {
      title: 'Java',
      Icon: JavaSvg
    },
    rust: {
      title: 'Rust',
      Icon: RustSvg
    },
    lua: {
      title: 'Lua',
      Icon: LuaSvg
    },
    go: {
      title: 'Go',
      Icon: GoSvg
    },
    python: {
      title: 'Python',
      Icon: PythonSvg
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
    ],
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
    ]
  },
  experience: Experience[] = [
    {
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
    },
    {
      company: '41T',
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
  ],
  books = [
    {
      name: 'Чистая архитектура. Искусство разработки программного обеспечения',
      author: 'Роберт Мартин'
    }
  ],
  languages: Language[] = [
    {
      title: 'Русский',
      level: 'Родной'
    },
    {
      title: 'Английский',
      level: 'A2 — Элементарный'
    }
  ],
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
  links: Link[] = [
    {
      href: 'https://teletype.in/@alexeev.dauwalter',
      Icon: TeletypeSvg,
      title: 'Teletype'
    },
    {
      href: 'https://www.npmjs.com/~ishi-inanis',
      Icon: NpmSvg,
      title: 'Npm'
    }
  ],
  nav: Link[] = [
    {
      href: 'https://github.com/alexeev-dauwalter',
      Icon: GithubSvg,
      title: 'Github'
    },
    {
      href: 'https://gitlab.com/alexeev-dauwalter',
      Icon: GitlabSvg,
      title: 'Gitlab'
    },
    {
      href: 'https://t.me/alexeev_dauwalter',
      Icon: TelegramSvg,
      title: 'Telegram'
    },
    {
      href: 'https://linkedin.com/in/alexeev-dauwalter/',
      Icon: LinkedInSvg,
      title: 'LinkedIn'
    }
  ];
