<script lang="ts">
  import TechIcon from './TechIcon.svelte';

  export let title: string,
    slug: string,
    description: string = '';
</script>

<article
  class="group flex flex-col gap-3 rounded-md border border-ink/10 bg-cream-soft/40 p-4 transition hover:border-rust/40 hover:bg-cream-soft dark:border-ink-dark/15 dark:bg-cream-dark-soft/50 dark:hover:border-rust-soft/40 dark:hover:bg-cream-dark-soft"
>
  <header class="flex items-center gap-3">
    <i
      class="flex h-8 w-8 shrink-0 items-center justify-center text-ink-soft transition group-hover:text-rust dark:text-ink-dark-soft dark:group-hover:text-rust-soft"
    >
      <TechIcon {slug} {title} size={28} />
    </i>
    <h3 class="font-inter text-base font-medium text-ink dark:text-ink-dark">
      {title}
    </h3>
  </header>
  {#if description}
    <p class="text-sm leading-snug text-ink-soft dark:text-ink-dark-soft">
      {description}
    </p>
  {/if}
</article>
