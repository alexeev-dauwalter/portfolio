import type { SvelteComponent } from 'svelte';
import NpmSvg from './svg/NpmSvg.svelte';
import GithubSvg from './svg/GithubSvg.svelte';
import GitlabSvg from './svg/GitlabSvg.svelte';
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
    company: '41T',
    position: 'Founder | CEO | Full stack engineer',
    begin: 'Февраль 2023',
    description: 'Frontend разработка на Astro, Svelte с Tailwindcss.\n' +
      'Backend разработка на NestJS и Tokio.',
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
    description: 'Frontend разработка на JS, React с Next.js.\n' +
      'Backend разработка на NodeJS и Laravel.',
    skills: [
      Technology.react,
      Technology.nextjs,
      Technology.nodejs,
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
  languages: Language[] = [{
    title: 'Русский — Родной',
    level: 'Родной'
  }, {
    title: 'Английский — Родной',
    level: 'A2 — Элементарный'
  }],
  about = [
    'Меня всегда увлекала веб-разработка, и я совершенствую свои навыки в этой области уже около 6 лет. В настоящее время я являюсь частью команды Antares Software Group, где работаю над увлекательными проектами и сотрудничаю с талантливыми коллегами.',
    'Помимо своей профессиональной деятельности, я уделяю внимание образованию и в данный момент продолжаю учебу в институте. Как активный обучающийся, я верю в важность постоянного роста и развития.',
    'Кроме того, у меня есть возможность делиться своими знаниями и опытом как преподаватель по совместительству, помогая другим осваивать мир веб-разработки.',
    'Благодаря целеустремленности и желанию совершенствоваться, я использую свободное время для выполнения фриланс-проектов и постоянного развития своих навыков.',
    'Недавно я отправился в предпринимательское путешествие, основав свою собственную компанию, 41T. Наша миссия - разрабатывать проекты с открытым исходным кодом, которые доступны каждому. Я твердо верю в силу открытых решений для творчества и инноваций в мире технологий.',
    'Давайте свяжемся и исследуем возможности совместной работы, обмена знаний и разработки проектов. Я с нетерпением жду возможности стать частью динамичной и постоянно развивающейся области веб-разработки.'
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
