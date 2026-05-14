<script lang="ts">
  import TechIcon from './TechIcon.svelte';
  import type { Skill } from '../data';

  export let name: string;
  export let description: string;
  export let stack: Skill[] = [];
  export let github: string | undefined = undefined;
  export let gitlab: string | undefined = undefined;
  export let index: number;

  $: indexLabel = `№${String(index).padStart(2, '0')}`;
</script>

<article
  class="group flex h-full flex-col gap-4 rounded-md border border-[var(--color-ink)]/12 bg-[var(--color-cream-soft)]/40 p-5 transition hover:border-[var(--color-rust)]/40 dark:border-[var(--color-ink-dark)]/18 dark:bg-[var(--color-cream-dark-soft)]/50 dark:hover:border-[var(--color-rust-soft)]/45"
>
  <div class="flex items-baseline justify-between">
    <span
      class="font-mono text-[0.7rem] tracking-[0.12em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
    >
      {indexLabel}
    </span>
    <div class="flex items-center gap-3 text-[var(--color-ink-soft)] dark:text-[var(--color-ink-dark-soft)]">
      {#if github}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="transition hover:text-[var(--color-rust)] dark:hover:text-[var(--color-rust-soft)]"
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
          class="transition hover:text-[var(--color-rust)] dark:hover:text-[var(--color-rust-soft)]"
        >
          <TechIcon slug="gitlab" title="GitLab" size={18} />
        </a>
      {/if}
    </div>
  </div>

  <h3
    class="font-sans text-lg leading-tight font-medium text-[var(--color-ink)] dark:text-[var(--color-ink-dark)]"
  >
    {name}
  </h3>

  <p
    class="grow text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[var(--color-ink-dark-soft)]"
  >
    {description}
  </p>

  {#if stack?.length}
    <ul class="flex flex-wrap gap-x-3 gap-y-2">
      {#each stack as { title }}
        <li
          class="font-mono text-[0.65rem] tracking-[0.1em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
        >
          {title}
        </li>
      {/each}
    </ul>
  {/if}
</article>
