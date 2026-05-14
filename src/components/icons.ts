import {
  siApachetomcat,
  siAstro,
  siC,
  siClion,
  siCplusplus,
  siDocker,
  siExpress,
  siFastify,
  siGit,
  siGithub,
  siGitlab,
  siGnubash,
  siGo,
  siGoland,
  siHyper,
  siIntellijidea,
  siJavascript,
  siJest,
  siKotlin,
  siKubernetes,
  siLaravel,
  siLinux,
  siLua,
  siMariadb,
  siMongodb,
  siMysql,
  siNestjs,
  siNeovim,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siNpm,
  siOpenjdk,
  siPhp,
  siPhpstorm,
  siPodman,
  siPostgresql,
  siPycharm,
  siPython,
  siReact,
  siRust,
  siSpring,
  siSvelte,
  siTailwindcss,
  siTelegram,
  siTmux,
  siTokio,
  siTypescript,
  siVim,
  siVuedotjs,
  siWebstorm,
  siWordpress
} from 'simple-icons';

export interface IconData {
  path: string;
  hex: string;
  title: string;
}

export const iconMap: Record<string, IconData> = {
  // Languages
  javascript: siJavascript,
  typescript: siTypescript,
  php: siPhp,
  cplusplus: siCplusplus,
  c: siC,
  kotlin: siKotlin,
  openjdk: siOpenjdk,
  rust: siRust,
  lua: siLua,
  go: siGo,
  python: siPython,

  // Frameworks / libs
  jest: siJest,
  git: siGit,
  linux: siLinux,
  vuedotjs: siVuedotjs,
  tailwindcss: siTailwindcss,
  svelte: siSvelte,
  astro: siAstro,
  nextdotjs: siNextdotjs,
  react: siReact,
  nodedotjs: siNodedotjs,
  nestjs: siNestjs,
  mysql: siMysql,
  mariadb: siMariadb,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  fastify: siFastify,
  express: siExpress,
  laravel: siLaravel,
  wordpress: siWordpress,
  apachetomcat: siApachetomcat,
  spring: siSpring,
  tokio: siTokio,
  hyper: siHyper,
  nginx: siNginx,

  // IDEs / tools
  phpstorm: siPhpstorm,
  webstorm: siWebstorm,
  intellijidea: siIntellijidea,
  clion: siClion,
  goland: siGoland,
  pycharm: siPycharm,
  vim: siVim,
  neovim: siNeovim,
  docker: siDocker,
  podman: siPodman,
  gnubash: siGnubash,
  tmux: siTmux,
  kubernetes: siKubernetes,

  // Links
  github: siGithub,
  gitlab: siGitlab,
  telegram: siTelegram,
  npm: siNpm
};

export function getIcon(slug: string | undefined): IconData | undefined {
  if (!slug) return undefined;
  return iconMap[slug];
}
