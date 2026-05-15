<script lang="ts">
  import TechIcon from './TechIcon.svelte';
  import type { Skill } from '../data';

  export let name: string,
    description: string,
    stack: Skill[] = [],
    github: string | undefined = undefined,
    gitlab: string | undefined = undefined,
    index: number;

  $: indexLabel = `№${String(index).padStart(2, '0')}`;
</script>

<article
  class="group flex h-full flex-col gap-4 rounded-md border border-ink/12 bg-cream-soft/40 p-5 transition hover:border-rust/40 dark:border-ink-dark/18 dark:bg-cream-dark-soft/50 dark:hover:border-rust-soft/45"
>
  <header class="flex items-baseline justify-between">
    <span
      class="font-jetbrains-mono text-2xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
    >
      {indexLabel}
    </span>
    <nav
      class="flex items-center gap-3 text-ink-soft dark:text-ink-dark-soft"
    >
      {#if github}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="transition hover:text-rust dark:hover:text-rust-soft"
        >
          <TechIcon slug="github" title="GitHub" size={18} />
        </a>
      {/if}
      {#if gitlab}
        <a
          href={gitlab}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitLab"
          class="transition hover:text-rust dark:hover:text-rust-soft"
        >
          <TechIcon slug="gitlab" title="GitLab" size={18} />
        </a>
      {/if}
    </nav>
  </header>

  <h3
    class="font-inter text-lg leading-tight font-medium text-ink dark:text-ink-dark"
  >
    {name}
  </h3>

  <p
    class="grow text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft"
  >
    {description}
  </p>

  {#if stack?.length}
    <ul class="flex flex-wrap gap-x-3 gap-y-2">
      {#each stack as { title }}
        <li
          class="font-jetbrains-mono text-3xs tracking-label text-muted uppercase dark:text-ink-dark-soft"
        >
          {title}
        </li>
      {/each}
    </ul>
  {/if}
</article>
