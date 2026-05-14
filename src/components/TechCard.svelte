<script lang="ts">
  import TechIcon from './TechIcon.svelte';

  export let title: string;
  export let slug: string;
  export let description: string = '';
</script>

<article
  class="group flex flex-col gap-3 rounded-md border border-[var(--color-ink)]/10 bg-[var(--color-cream-soft)]/40 p-4 transition hover:border-[var(--color-rust)]/40 hover:bg-[var(--color-cream-soft)] dark:border-[var(--color-ink-dark)]/15 dark:bg-[var(--color-cream-dark-soft)]/50 dark:hover:border-[var(--color-rust-soft)]/40 dark:hover:bg-[var(--color-cream-dark-soft)]"
>
  <div class="flex items-center gap-3">
    <span
      class="flex h-8 w-8 shrink-0 items-center justify-center text-[var(--color-ink-soft)] transition group-hover:text-[var(--color-rust)] dark:text-[var(--color-ink-dark-soft)] dark:group-hover:text-[var(--color-rust-soft)]"
    >
      <TechIcon {slug} {title} size={28} />
    </span>
    <h3
      class="text-base font-medium text-[var(--color-ink)] dark:text-[var(--color-ink-dark)]"
    >
      {title}
    </h3>
  </div>
  {#if description}
    <p
      class="text-sm leading-snug text-[var(--color-ink-soft)] dark:text-[var(--color-ink-dark-soft)]"
    >
      {description}
    </p>
  {/if}
</article>
