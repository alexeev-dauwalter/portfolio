<script lang="ts">
  import TechIcon from './TechIcon.svelte';
  import type { Skill } from '../data';

  export let name: string,
    description: string,
    stack: Skill[] = [],
    github: string | undefined = undefined,
    gitlab: string | undefined = undefined,
    year: string | number | undefined = undefined,
    tag: string = '',
    index: number;

  $: indexLabel = `/ ${String(index).padStart(2, '0')}`;
</script>

<article
  class="group flex h-full flex-col gap-4 rounded-md border border-ink/12 bg-cream-soft/40 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-rust/40 2xl:p-6 dark:border-ink-dark/18 dark:bg-cream-dark-soft/50 dark:hover:border-rust-soft/45"
>
  <header class="flex items-baseline justify-between gap-3">
    <span
      class="font-jetbrains-mono text-2xs tracking-meta text-muted/80 uppercase dark:text-ink-dark-soft/80"
    >
      {indexLabel}
    </span>
    {#if year}
      <time
        class="font-jetbrains-mono text-2xs tracking-meta text-muted/80 tabular-nums uppercase dark:text-ink-dark-soft/80"
      >
        {year}
      </time>
    {/if}
  </header>

  <hgroup class="space-y-1.5">
    <h3
      class="font-inter text-lg leading-tight font-medium text-ink 2xl:text-xl dark:text-ink-dark"
    >
      {name}
    </h3>
    {#if tag}
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
      >
        {tag}
      </p>
    {/if}
  </hgroup>

  <p
    class="grow text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft"
  >
    {description}
  </p>

  {#if stack?.length}
    <ul class="flex flex-wrap gap-1.5">
      {#each stack as { title }}
        <li
          class="rounded-sm border border-ink/12 px-2 py-0.5 font-jetbrains-mono text-3xs tracking-label text-muted uppercase dark:border-ink-dark/20 dark:text-ink-dark-soft"
        >
          {title}
        </li>
      {/each}
    </ul>
  {/if}

  {#if github || gitlab}
    <footer
      class="mt-auto flex items-center justify-end gap-3 border-t border-ink/8 pt-3 text-ink-soft dark:border-ink-dark/12 dark:text-ink-dark-soft"
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
    </footer>
  {/if}
</article>
