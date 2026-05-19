import type { Locale } from '../i18n/locales';
import type { Skill } from './types';

type TechDef = {
  title: string;
  slug: string;
  d: Record<Locale, string>;
};

export const TECH = {
  jest: {
    title: 'Jest',
    slug: 'jest',
    d: {
      en: 'Test framework for JavaScript and TypeScript.',
      ru: 'Тест-фреймворк для JavaScript и TypeScript.'
    }
  },
  git: {
    title: 'Git',
    slug: 'git',
    d: {
      en: 'Distributed version control.',
      ru: 'Распределённая система контроля версий.'
    }
  },
  linux: {
    title: 'Linux',
    slug: 'linux',
    d: {
      en: 'My primary OS since 2018.',
      ru: 'Основная рабочая ОС с 2018 года.'
    }
  },
  vuejs: {
    title: 'Vue.js',
    slug: 'vuedotjs',
    d: {
      en: 'Progressive framework for UIs.',
      ru: 'Прогрессивный фреймворк для UI.'
    }
  },
  tailwindcss: {
    title: 'TailwindCSS',
    slug: 'tailwindcss',
    d: {
      en: 'Utility-first CSS for fast styling.',
      ru: 'Utility-first CSS для быстрой вёрстки.'
    }
  },
  svelte: {
    title: 'Svelte',
    slug: 'svelte',
    d: {
      en: 'UI compiler, runtime-free.',
      ru: 'Компилятор UI, без рантайма-фреймворка.'
    }
  },
  astro: {
    title: 'Astro',
    slug: 'astro',
    d: {
      en: 'Content framework with server-first rendering.',
      ru: 'Контентный фреймворк со server-first рендером.'
    }
  },
  nextjs: {
    title: 'Next.js',
    slug: 'nextdotjs',
    d: {
      en: 'Full-stack React framework with SSR and the app router.',
      ru: 'Полноценный React-фреймворк с SSR и app-router.'
    }
  },
  react: {
    title: 'React',
    slug: 'react',
    d: {
      en: 'Library for building user interfaces.',
      ru: 'Библиотека для построения интерфейсов.'
    }
  },
  nodejs: {
    title: 'Node.js',
    slug: 'nodedotjs',
    d: {
      en: 'JavaScript server runtime.',
      ru: 'Серверный рантайм JavaScript.'
    }
  },
  nestjs: {
    title: 'NestJS',
    slug: 'nestjs',
    d: {
      en: 'TypeScript backend framework with DI and modules.',
      ru: 'Бэкенд-фреймворк на TypeScript с DI и модулями.'
    }
  },
  mysql: {
    title: 'MySQL',
    slug: 'mysql',
    d: {
      en: 'Relational database, used in production.',
      ru: 'Реляционная СУБД, использую в продакшене.'
    }
  },
  mariadb: {
    title: 'MariaDB',
    slug: 'mariadb',
    d: {
      en: 'MySQL fork with extra features.',
      ru: 'Форк MySQL с расширенным набором фич.'
    }
  },
  mongodb: {
    title: 'MongoDB',
    slug: 'mongodb',
    d: {
      en: 'Document NoSQL database for flexible schemas.',
      ru: 'Документная NoSQL-БД для гибких схем.'
    }
  },
  postgresql: {
    title: 'PostgreSQL',
    slug: 'postgresql',
    d: {
      en: 'Primary RDBMS in my recent projects.',
      ru: 'Основная СУБД в проектах последних лет.'
    }
  },
  fastify: {
    title: 'Fastify',
    slug: 'fastify',
    d: {
      en: 'Fast HTTP framework for Node.js.',
      ru: 'Быстрый HTTP-фреймворк для Node.js.'
    }
  },
  express: {
    title: 'Express',
    slug: 'express',
    d: {
      en: 'Minimal HTTP framework for Node.js.',
      ru: 'Минималистичный фреймворк для Node.js.'
    }
  },
  laravel: {
    title: 'Laravel',
    slug: 'laravel',
    d: {
      en: 'PHP framework with a rich ecosystem.',
      ru: 'PHP-фреймворк с богатой экосистемой.'
    }
  },
  wordpress: {
    title: 'WordPress',
    slug: 'wordpress',
    d: {
      en: 'CMS where my commercial web work started.',
      ru: 'CMS, с которой начинал коммерческую веб-разработку.'
    }
  },
  tomcat: {
    title: 'Apache Tomcat',
    slug: 'apachetomcat',
    d: {
      en: 'Servlet container for Java web apps.',
      ru: 'Сервлет-контейнер для Java-веба.'
    }
  },
  spring: {
    title: 'Spring',
    slug: 'spring',
    d: {
      en: 'Java backend framework.',
      ru: 'Бэкенд-фреймворк на Java.'
    }
  },
  tokio: {
    title: 'Tokio',
    slug: 'tokio',
    d: {
      en: 'Async runtime for Rust.',
      ru: 'Асинхронный рантайм для Rust.'
    }
  },
  mio: {
    title: 'Mio',
    slug: 'mio',
    d: {
      en: 'Low-level I/O for Rust.',
      ru: 'Низкоуровневое I/O для Rust.'
    }
  },
  tower: {
    title: 'Tower',
    slug: 'tower',
    d: {
      en: 'Composable services and middleware in Rust.',
      ru: 'Композируемые сервисы и middleware на Rust.'
    }
  },
  bytes: {
    title: 'Bytes',
    slug: 'bytes',
    d: {
      en: 'Efficient buffer manipulation in Rust.',
      ru: 'Эффективная работа с буферами в Rust.'
    }
  },
  hyper: {
    title: 'Hyper',
    slug: 'hyper',
    d: {
      en: 'HTTP stack for Rust.',
      ru: 'HTTP-стек для Rust.'
    }
  },
  tonic: {
    title: 'Tonic',
    slug: 'tonic',
    d: {
      en: 'gRPC framework in Rust.',
      ru: 'gRPC-фреймворк на Rust.'
    }
  },
  tracing: {
    title: 'Tracing',
    slug: 'tracing',
    d: {
      en: 'Instrumentation and logging for Rust.',
      ru: 'Инструментирование и логирование для Rust.'
    }
  },
  nginx: {
    title: 'Nginx',
    slug: 'nginx',
    d: {
      en: 'Web server and reverse proxy.',
      ru: 'Веб-сервер и обратный прокси.'
    }
  },
  phpstorm: {
    title: 'PhpStorm',
    slug: 'phpstorm',
    d: {
      en: 'PHP IDE by JetBrains.',
      ru: 'IDE для PHP от JetBrains.'
    }
  },
  webstorm: {
    title: 'WebStorm',
    slug: 'webstorm',
    d: {
      en: 'JS/TS IDE by JetBrains.',
      ru: 'IDE для JS/TS от JetBrains.'
    }
  },
  rustrover: {
    title: 'RustRover',
    slug: 'rustrover',
    d: {
      en: 'Rust IDE by JetBrains.',
      ru: 'IDE для Rust от JetBrains.'
    }
  },
  intellij: {
    title: 'IntelliJ Idea',
    slug: 'intellijidea',
    d: {
      en: 'JetBrains all-purpose IDE.',
      ru: 'Универсальная IDE от JetBrains.'
    }
  },
  clion: {
    title: 'CLion',
    slug: 'clion',
    d: {
      en: 'C/C++ IDE by JetBrains.',
      ru: 'IDE для C/C++ от JetBrains.'
    }
  },
  goland: {
    title: 'GoLand',
    slug: 'goland',
    d: {
      en: 'Go IDE by JetBrains.',
      ru: 'IDE для Go от JetBrains.'
    }
  },
  pycharm: {
    title: 'PyCharm',
    slug: 'pycharm',
    d: {
      en: 'Python IDE by JetBrains.',
      ru: 'IDE для Python от JetBrains.'
    }
  },
  vscode: {
    title: 'Visual Studio Code',
    slug: 'visualstudiocode',
    d: {
      en: 'Lightweight editor with a rich extension ecosystem.',
      ru: 'Лёгкий редактор с экосистемой расширений.'
    }
  },
  vim: {
    title: 'Vim',
    slug: 'vim',
    d: {
      en: 'Modal text editor.',
      ru: 'Модальный текстовый редактор.'
    }
  },
  neovim: {
    title: 'NeoVim',
    slug: 'neovim',
    d: {
      en: 'Modern Vim fork with Lua config.',
      ru: 'Современный форк Vim с Lua-конфигом.'
    }
  },
  docker: {
    title: 'Docker',
    slug: 'docker',
    d: {
      en: 'Application containerization.',
      ru: 'Контейнеризация приложений.'
    }
  },
  podman: {
    title: 'Podman',
    slug: 'podman',
    d: {
      en: 'Daemonless alternative to Docker.',
      ru: 'Daemonless-альтернатива Docker.'
    }
  },
  zsh: {
    title: 'Zsh',
    slug: 'gnubash',
    d: {
      en: 'POSIX shell with extended syntax and completion.',
      ru: 'POSIX-шелл с расширенным синтаксисом и автодополнением.'
    }
  },
  tmux: {
    title: 'Tmux',
    slug: 'tmux',
    d: {
      en: 'Terminal multiplexer.',
      ru: 'Терминал-мультиплексор.'
    }
  },
  warp: {
    title: 'Warp Terminal',
    slug: 'warpterminal',
    d: {
      en: 'Modern terminal with a block-based history.',
      ru: 'Современный терминал с блок-историей.'
    }
  },
  k8s: {
    title: 'Kubernetes',
    slug: 'kubernetes',
    d: {
      en: 'Container orchestration at scale.',
      ru: 'Оркестрация контейнеров на масштабе.'
    }
  }
} satisfies Record<string, TechDef>;

export const PROGRAMMING_LANGUAGE = {
  javascript: {
    title: 'JavaScript',
    slug: 'javascript',
    d: {
      en: 'Main language for frontend and Node.js backends.',
      ru: 'Основной язык фронтенда и Node.js-бэкенда.'
    }
  },
  typescript: {
    title: 'TypeScript',
    slug: 'typescript',
    d: {
      en: 'Strict typing for JS projects.',
      ru: 'Строгая типизация для JS-проектов.'
    }
  },
  php: {
    title: 'PHP',
    slug: 'php',
    d: {
      en: 'Server-side language where my commercial work began.',
      ru: 'Серверный язык, с которого начал коммерческую разработку.'
    }
  },
  cpp: {
    title: 'C++',
    slug: 'cplusplus',
    d: {
      en: 'Systems programming and algorithms.',
      ru: 'Системное программирование и алгоритмы.'
    }
  },
  csharp: {
    title: 'C#',
    slug: 'csharp',
    d: {
      en: 'WPF, .NET and Unity development.',
      ru: 'WPF, .NET и Unity-разработка.'
    }
  },
  c: {
    title: 'C',
    slug: 'c',
    d: {
      en: 'Low-level programming and drivers.',
      ru: 'Низкоуровневая разработка и драйверы.'
    }
  },
  kotlin: {
    title: 'Kotlin',
    slug: 'kotlin',
    d: {
      en: 'JVM language for backend and Android.',
      ru: 'JVM-язык для backend и Android.'
    }
  },
  java: {
    title: 'Java',
    slug: 'openjdk',
    d: {
      en: 'Server-side work with Spring and Tomcat.',
      ru: 'Серверная разработка на Spring и Tomcat.'
    }
  },
  rust: {
    title: 'Rust',
    slug: 'rust',
    d: {
      en: 'Systems language for reliable, fast services.',
      ru: 'Системный язык для надёжных и быстрых сервисов.'
    }
  },
  lua: {
    title: 'Lua',
    slug: 'lua',
    d: {
      en: 'Scripting for NeoVim and embedded.',
      ru: 'Скриптинг для NeoVim и embedded.'
    }
  },
  go: {
    title: 'Go',
    slug: 'go',
    d: {
      en: 'Simple, fast backend language.',
      ru: 'Простой и быстрый язык для бэкенда.'
    }
  },
  python: {
    title: 'Python',
    slug: 'python',
    d: {
      en: 'Scripting, ML experiments, web on Django/Flask.',
      ru: 'Скрипты, ML-эксперименты, веб на Django/Flask.'
    }
  }
} satisfies Record<string, TechDef>;

function mapCatalog<T extends Record<string, TechDef>>(
  source: T,
  locale: Locale
): { [K in keyof T]: Skill } {
  const out = {} as { [K in keyof T]: Skill };
  for (const key of Object.keys(source) as (keyof T)[]) {
    const def = source[key];
    out[key] = {
      title: def.title,
      slug: def.slug,
      description: def.d[locale]
    };
  }
  return out;
}

export function techCatalog(locale: Locale) {
  return mapCatalog(TECH, locale);
}

export function languageCatalog(locale: Locale) {
  return mapCatalog(PROGRAMMING_LANGUAGE, locale);
}
