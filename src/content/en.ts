import type { Content } from './types';
import { techCatalog, languageCatalog } from './tech';

const T = techCatalog('en');
const L = languageCatalog('en');

const education = {
  main: [
    {
      institution:
        'Institute of Electronic and Information Systems (NovSU)',
      faculty: 'Computer Science and Engineering',
      specialty:
        'Software for computing systems and automated systems',
      graduation: 2026
    },
    {
      institution:
        'Polytechnic College of Yaroslav-the-Wise Novgorod State University',
      faculty: 'Programming for computer systems',
      specialty: 'Software engineering technician',
      graduation: 2020
    }
  ],
  additional: [
    {
      organization:
        'Yaroslav-the-Wise Novgorod State University',
      name: 'Enterprise protection from internal information-security threats with modern DLP technologies',
      graduation: 2020
    },
    {
      organization:
        'Yaroslav-the-Wise Novgorod State University',
      name: 'Computer Operator',
      graduation: 2018
    }
  ]
};

const codeClass =
  'bg-cream-soft/60 font-jetbrains-mono text-ink dark:bg-cream-dark-soft/60 dark:text-ink-dark rounded-sm px-1 py-0.5 text-[0.92em]';

export const enContent: Content = {
  fullName: 'Peter Alexeev',
  email: 'alexeev.dauwalter@gmail.com',
  desiredPositions: ['Team Lead', 'Full Stack Engineer'],
  hero: {
    titleStart: 'Programming is',
    titleAccent: 'not a profession,',
    titleEnd: "it's a way of life.",
    introHtml:
      `My name is Peter Alexeev. I have been writing software for fourteen ` +
      `years now — from school-day ` +
      `<code class="${codeClass}">PascalABC.NET</code> to async ` +
      `<code class="${codeClass}">Rust</code>. I build products where you can ` +
      `see the work: code that is not embarrassing to show, and interfaces ` +
      `that are not embarrassing to ship to people.`
  },
  skills: {
    main: [
      L.rust,
      T.svelte,
      T.tailwindcss,
      T.nestjs,
      T.tokio,
      L.javascript
    ],
    hard: {
      languages: Object.values(L),
      technologies: Object.values(T),
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
  education,
  experience: [
    {
      company: 'SKOLKOVO Moscow School of Management',
      shortLabel: 'SKOLKOVO',
      position: 'Product Manager | Team Lead | Full Stack Engineer',
      begin: '2024-11',
      description:
        'About the company:\n' +
        'SKOLKOVO Moscow School of Management is one of the leading private business schools in Russia and the CIS, founded in 2006 on the initiative of the business community. The School holds the international EQUIS accreditation (held by about 1% of business schools worldwide) and has its own campus near Moscow. The portfolio of educational programs covers every stage of business development — from startups to large corporations — including MBA, Executive MBA and corporate education programs. More than 12,000 students go through the School\'s corporate programs every year.\n' +
        'Responsibilities:\n' +
        'Development: design and delivery of the company\'s internal and external web services and systems.\n' +
        'Architecture: designing system architecture with the C4 notation, planning integrations between services, preparing diagrams (sequence, use-case, BPMN, flowchart, c4).\n' +
        'Analytics and product work: gathering requirements from stakeholders, functional and product modeling of systems, mapping out user scenarios.\n' +
        'Team management: led several teams (up to 8 people), handled planning, task setting and prioritization, code review, quality and deadline control.\n' +
        'Estimation: estimated effort, timelines and architectural risks.\n' +
        'DevOps: deploying systems, configuring servers, integrating services.\n' +
        'AI: building and embedding AI agents and agentic systems into the company\'s workflows.\n' +
        'Achievements:\n' +
        '- "AI Champion" award — Leader of AI Innovation at the School (2025).\n' +
        '- Skolkovo ID — designed and owned the single-sign-on identification product to improve customer experience and integrate user data with the School\'s internal systems. Responsible for architecture, task setting and acceptance. Stack: PHP (Laravel), Vue 3, Inertia, Reka UI.\n' +
        '- Alumni clubs platform — designed and owned the product for the Alumni Community: members apply to join clubs, club heads handle the applications and manage the roster, including external experts. Stack: Telegram client, Next.js admin panel.\n' +
        '- Chart rendering microservice — designed and built a service to render charts on the School\'s landing pages, integrated into Twill as a custom CMS block. Stack: PHP, React.\n' +
        '- Gift-management system — designed and built an internal product for the School\'s managers: composing gift orders for clients and partners, tracking inventory, keeping counterparty data up to date. Stack: Next.js, shadcn/ui.\n' +
        '- Corporate appreciation system — designed and built an internal service for ~600 employees of the School: colleagues and managers thank each other through the year and the results are summarized and awarded at year end. Stack: PHP (Laravel).\n' +
        '- Verification of private Telegram-channel users — service that vets clients of the School for access to closed channels. Stack: TypeScript, Next.js.\n' +
        '- Random Coffee — designed and led development of an internal Telegram service for employees: automatic random pairings of colleagues for coffee meetings at a chosen cadence, for networking inside the School. Stack: Go.\n' +
        '- Agentic platform for the corporate Teamly knowledge base — designed and built an agent platform letting employees create their own agents and granularly scope access to knowledge spaces and agents. Refactored the system in parallel, extracting a shared core. Stack: Python, FastAPI, CI/CD, bash.\n' +
        '- AI search across the School website — participated in the design of intelligent search across the corporate website.\n' +
        '- Grant application processing automation — designed and led a project to automatically process grant applications for the School\'s educational programs with AI agents. Stack: Go.\n' +
        '- Professional development: completed the SKOLKOVO × ScrumTrek "Agile and hybrid project-management approaches" program.\n' +
        'Reason for leaving:\n' +
        'Organizational changes within the company.',
      skills: [
        T.react,
        T.nextjs,
        T.vuejs,
        T.laravel,
        T.tailwindcss,
        L.javascript,
        L.typescript,
        L.php,
        L.python,
        L.go
      ]
    },
    {
      company: '41T',
      shortLabel: '41T',
      position: 'Founder | CEO | Full Stack Engineer',
      begin: '2023-02',
      end: '2024-10',
      description:
        'About the company:\n' +
        'Founded my own company specialised in project-based product development.\n' +
        'Responsibilities:\n' +
        'Managed and delivered projects end to end — from concept to launch — including planning, development and rolling out solutions for clients.\n' +
        'Frontend: built interfaces and features in JavaScript (TypeScript) and SvelteKit for modern web apps.\n' +
        'Backend: built high-throughput asynchronous services with Rust and the Tokio runtime. Worked on server-side logic and architecture with NestJS and Prisma over PostgreSQL.\n' +
        'Deployment: used Docker for containerisation and GitLab CI for build and deploy automation.',
      skills: [
        T.svelte,
        T.astro,
        T.tailwindcss,
        T.nestjs,
        T.tokio,
        T.hyper,
        T.tonic,
        T.tracing,
        L.javascript,
        L.rust
      ]
    },
    {
      company: 'Antares Software Group',
      position: 'Full Stack Engineer | Team Lead',
      begin: '2023-05',
      end: '2024-10',
      description:
        'About the company:\n' +
        'The company develops, supports and tests software across a wide range — from mobile apps to websites.\n' +
        'Responsibilities:\n' +
        'Expertise: estimated effort and elicited requirements for information systems.\n' +
        'Architecture design and implementation: designed and implemented architectures for various web apps, including admin panels and user interfaces. Participated in the full development cycle — from design to deployment.\n' +
        'Frontend: used JavaScript (TypeScript) with React and Next.js to build interactive and responsive user interfaces.\n' +
        'Backend: worked with PHP (Laravel), Java (Spring), and JavaScript (TypeScript) with NestJS and Express to build reliable, scalable server solutions. Used PostgreSQL for data.\n' +
        'Achievements:\n' +
        'Built the backend, API and admin panel for an events-management system.\n' +
        'Took part in designing a large high-load e-commerce platform.\n' +
        'Designed and built an admin panel for a small online shop.\n' +
        'Participated in design, made architectural decisions and built an internal electronic document workflow and assignments management system.\n' +
        'Reason for leaving:\n' +
        'Persistent salary payment delays.',
      skills: [
        T.react,
        T.nextjs,
        T.nodejs,
        T.laravel,
        T.tailwindcss,
        L.javascript,
        L.kotlin,
        L.java,
        L.php
      ]
    },
    {
      company: 'Sirius.IS LLC',
      position: 'Junior Software Developer',
      begin: '2021-08',
      end: '2022-06',
      description:
        'About the company:\n' +
        'The company has been building information systems and software products for more than 20 years, providing a complete approach to automating large, high-complexity systems thanks to built-in self-regulation and a unique data organisation and storage model.\n' +
        'Responsibilities:\n' +
        'Frontend: development in JavaScript with React and Ant Design to build usable, functional UIs.\n' +
        'Backend: development in Java with Apache Tomcat and GraphQL to build reliable server solutions and APIs.\n' +
        'Achievements:\n' +
        'Maintained legacy code in JavaScript ES5.\n' +
        'Built a navigation menu in JavaScript (TypeScript) and Next.js.\n' +
        'Took part in building an educational platform, both frontend and backend.\n' +
        'Reason for leaving:\n' +
        'Decided to switch jobs to seek new professional challenges and growth opportunities.',
      skills: [T.react, T.tomcat, L.javascript, L.java]
    },
    {
      company:
        'Polytechnic College of Yaroslav-the-Wise Novgorod State University',
      position: 'Lecturer',
      begin: '2020-09',
      end: '2023-09',
      description:
        'Taught students programming and development. My students are successfully employed in various roles, including frontend and backend developers — PHP, Java, JavaScript, Kotlin engineers, as well as UI/UX designers and other specialists.\n' +
        'Responsibilities:\n' +
        'Taught students in a variety of subjects, including:\n' +
        '- Designing and building web applications;\n' +
        '- Internet technologies and publishing data on the Internet;\n' +
        '- Database design and protection;\n' +
        '- Fundamentals of programming;\n' +
        '- Machine learning and big data;\n' +
        '- Mobile app development;\n' +
        '- Information systems code development;\n' +
        '- Fundamentals of information systems design and development.\n' +
        'Developed curricula, ran lectures and practical sessions, evaluated student results and provided feedback for their professional growth.\n' +
        'Taught the following technologies:\n' +
        '- Programming languages: PHP, C++, C#, Java, Kotlin, JavaScript, TypeScript, Python;\n' +
        '- Databases: SQL, MongoDB, PostgreSQL, OracleDB, MySQL, SQLite;\n' +
        '- Tools and frameworks: Figma, WordPress, Laravel, NestJS, Express, React, Next.js, Vue.js, Svelte, SvelteKit, Mocha, Jest, Vite, Docker.\n' +
        'Reason for leaving:\n' +
        'Decided to switch jobs to focus on my own professional growth and expand my developer skill set.',
      skills: [
        T.vuejs,
        T.svelte,
        T.react,
        T.jest,
        T.laravel,
        T.nextjs,
        T.express,
        T.nestjs,
        T.mysql,
        T.postgresql,
        T.mongodb,
        T.docker,
        T.nodejs,
        L.php,
        L.cpp,
        L.csharp,
        L.javascript,
        L.typescript,
        L.python,
        L.java,
        L.kotlin
      ]
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      begin: '2017-12',
      end: '2021-07',
      description:
        'Freelance web development: delivered many projects of varying scale — from landing pages and online stores to corporate sites and information platforms.'
    }
  ],
  projects: [
    {
      name: 'Kinsward',
      description:
        '2D colony sim in the spirit of Dwarf Fortress: z-levels, dual game modes and deep procedural world generation.',
      stack: [L.rust],
      github: 'https://github.com/alexeev-dauwalter/kinsward-site'
    },
    {
      name: 'Granite',
      description:
        'Local Obsidian-style desktop notes app: fast full-text search, link graph, fully offline.',
      stack: [L.rust]
    },
    {
      name: 'Plekt',
      description:
        'TUI orchestrator for AI agents: spawn, monitor and switch between multiple agents from the terminal.',
      stack: [L.rust]
    },
    {
      name: 'Self Coin Lane',
      description:
        'Personal budgeting app: accounts, goals, recurring payments, expense analytics.',
      stack: [L.typescript, T.svelte]
    },
    {
      name: 'Mini OS',
      description:
        'Study micro-OS in Rust: bootloader, interrupts, a simple scheduler and device drivers.',
      stack: [L.rust, T.linux]
    },
    {
      name: 'Selectel CLI',
      description:
        'CLI for managing Selectel cloud resources from the terminal: VMs, K8s, DBaaS, buckets, DNS.',
      stack: [L.go]
    },
    {
      name: 'AI D&D',
      description:
        'AI Dungeon Master for Dungeons & Dragons tabletop sessions: scenarios, party state, inventory.',
      stack: [L.python]
    },
    {
      name: 'Claude plugins',
      description:
        'Custom plugins for Claude Code: slash commands, MCP servers, routine automation.',
      stack: [L.python]
    },
    {
      name: 'Shorten Link',
      description:
        'URL shortener service: backend, Svelte frontend, docs, containerised deploy.',
      stack: [T.nodejs, T.svelte, T.docker, L.javascript],
      github: 'https://github.com/alexeev-dauwalter/shorten-link'
    },
    {
      name: 'DiceCalc',
      description:
        'Dice-roll calculator supporting complex expressions and modifiers.',
      stack: [L.rust],
      github: 'https://github.com/alexeev-dauwalter/dicecalc'
    }
  ],
  commercialProjects: [
    {
      name: 'Skolkovo ID',
      description:
        'Single sign-on identification platform integrating user data with the School\'s internal systems.',
      stack: [L.php, T.laravel, T.vuejs]
    },
    {
      name: 'Alumni clubs platform',
      description:
        'Alumni community: applications to join clubs, roster management for club heads and external experts.',
      stack: [T.nextjs, L.typescript]
    },
    {
      name: 'Chart rendering microservice',
      description:
        'Service rendering interactive charts on landing pages, integrated into Twill as a custom CMS block.',
      stack: [L.php, T.react]
    },
    {
      name: 'Gift management system',
      description:
        'Internal product for managers: composing gift orders for clients and partners, inventory tracking.',
      stack: [T.nextjs, L.typescript]
    },
    {
      name: 'Corporate appreciation system',
      description:
        'Internal service for ~600 employees: year-round thanks between colleagues with year-end summaries and awards.',
      stack: [L.php, T.laravel]
    },
    {
      name: 'Telegram channel verification',
      description:
        'Service vetting users before they get access to private corporate Telegram channels.',
      stack: [L.typescript, T.nextjs]
    },
    {
      name: 'Random Coffee',
      description:
        'Internal Telegram service for networking: automatic random colleague pairings for coffee meetings.',
      stack: [L.go]
    },
    {
      name: 'Agentic knowledge-base platform',
      description:
        'Platform letting employees build their own AI agents with granular access control over knowledge spaces.',
      stack: [L.python]
    },
    {
      name: 'Grant application automation',
      description:
        'Automatic processing of grant applications for educational programs using AI agents.',
      stack: [L.go]
    },
    {
      name: 'Events management system',
      description:
        'Backend, API and admin panel for corporate events: schedule, registrations, reports.',
      stack: [T.nestjs, T.postgresql, T.react]
    },
    {
      name: 'High-load e-commerce platform',
      description:
        'Architecture of a large online shop: NestJS API, queues, cache, faceted catalog, admin panel.',
      stack: [T.nestjs, T.react, T.postgresql, T.tailwindcss]
    },
    {
      name: 'EDM system',
      description:
        'Internal electronic document workflow: document versions, assignments and approval routing.',
      stack: [T.nextjs, T.nestjs, T.postgresql]
    },
    {
      name: 'Educational platform',
      description:
        'LMS with student profiles, assignments and server-side code grading.',
      stack: [T.nextjs, T.nestjs, T.react, L.java, T.tomcat]
    }
  ],
  books: [
    {
      name: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
      author: 'Robert C. Martin'
    }
  ],
  languages: [
    { title: 'Russian', level: 'Native' },
    { title: 'English', level: 'B1 — Intermediate' },
    { title: 'French', level: 'A1 — Beginner' }
  ],
  about: [
    'Programming is not just my profession but a passion. I find satisfaction both in delivering work and in building my own projects and learning new technologies.\n' +
      'For work I use Linux, which lets me operate and manage projects effectively.\n' +
      'A long road in development:\n' +
      'I have been writing code for many years, and that experience shaped my professional path and skills.\n' +
      'Self-study:\n' +
      'I constantly invest time in self-study to maintain and grow my knowledge. In 2025 I completed the SKOLKOVO × ScrumTrek "Project and product management — Agile and hybrid approaches" program, which helped me approach team and project management systematically. Earlier I worked through UC Berkeley CS 61A "The Structure and Interpretation of Computer Programs" to deepen my understanding of programming theory. In my free time I am learning English and French.\n' +
      'My road in programming:\n' +
      '2012:my interest in programming started with Pascal in school CS classes. I wrote code enthusiastically, filling notebooks with examples and exercises.\n' +
      '2015:a need for a deeper understanding pushed me into C++ and C#. This period brought a significant expansion of my software-development knowledge and skills.\n' +
      '2017:before college I started learning Python. I experimented with various frameworks and tools, including PyQt for GUIs, Django and Flask for web apps. I was initially drawn to game development, so I also worked with Unreal Engine and Unity in parallel.\n' +
      '2018:I went deeper into web development, picking up HTML, CSS, JavaScript and PHP, plus WordPress, Bitrix, jQuery, Vue.js, SASS, SCSS and Bootstrap. I built a project in C# WPF. I started taking small commercial jobs — information platforms and online shops.\n' +
      '2020:ran small programming courses for school students and pre-retirement adults. Actively explored new technologies, including TailwindCSS.\n' +
      '2021:due to job requirements I switched to React for frontend development.\n' +
      '2022:started learning Rust and C for low-level work — drivers, tools and web applications. Got interested in Docker, which led me into Podman and Kubernetes.\n' +
      '2023:dived deeply into programming theory. Studied high-load web applications and wrote server-side apps in Rust with Tokio. Built a small operating system in Rust and studied microcontrollers. Also attended GP Days 2023.\n' +
      '2024:bought a server to study hardware in detail. Continued growing in low-level work and refined my skills in building web applications of various sizes. In my free time I explored new technologies such as Go and Angular.\n' +
      '2025:moved from a developer position to team-lead / product-manager. Actively studied team and process management, Agile and hybrid methodologies. Went deep on applying AI agents in both work and everyday development: picked up Claude Code, Codex, GitHub Copilot, JetBrains Junie. Experimented with agentic patterns, RAG, MCP, prompt engineering. Ended the year with the "AI Innovation Leader" award at SKOLKOVO.\n' +
      '2026:dived deep into the Cloudflare ecosystem (Workers, Containers, R2, KV, D1, Browser Rendering, AI Gateway, Zero Trust, Tunnels). Compared serverless platforms for Rust/Go workloads (Cloudflare Containers, Fly.io, Cloud Run, Modal, Daytona). Experimenting with Astro and SvelteKit. Stood up a self-hosted stack built on NousResearch\'s Hermes Agent with OpenRouter and Cloudflare Browser Rendering over MCP. Launched several personal projects:\n' +
      '- A 2D colony sim in the spirit of Dwarf Fortress with z-levels, two play modes and procedural world generation. Stack: Rust, Bevy, Avian2D.\n' +
      '- A local Obsidian-style notes app. Stack: Rust, Tauri.\n' +
      '- An AI-agent orchestrator with a TUI. Stack: Rust, Ratatui.\n' +
      '- A personal budgeting system. Stack: SvelteKit.'
  ],
  links: [],
  nav: [
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
      href: 'https://x.com/alxv_dwltr',
      slug: 'x',
      title: 'X'
    },
    {
      href: 'https://linkedin.com/in/alexeev-dauwalter/',
      slug: 'linkedin',
      title: 'LinkedIn'
    }
  ],
  sections: [
    { number: '01', key: 'about', id: 'about' },
    { number: '02', key: 'longPath', id: 'longpath' },
    { number: '03', key: 'experience', id: 'experience' },
    { number: '04', key: 'personalProjects', id: 'projects' },
    { number: '05', key: 'commercialProjects', id: 'commercial' },
    { number: '06', key: 'timeline', id: 'timeline' },
    { number: '07', key: 'stack', id: 'stack' },
    { number: '08', key: 'reading', id: 'reading' }
  ]
};
