<script lang="ts">
  export let year: number,
    title: string,
    subtitle: string = '',
    tag: string = '';
</script>

<article
  class="grid gap-x-6 gap-y-2 border-t border-ink/12 py-5 sm:grid-cols-[5rem_1fr_auto] sm:gap-x-8 sm:py-6 2xl:grid-cols-[6rem_1fr_auto] 2xl:gap-x-12 2xl:py-8 dark:border-ink-dark/15"
>
  <time
    class="font-jetbrains-mono text-base text-ink tabular-nums sm:text-lg 2xl:text-xl dark:text-ink-dark"
  >
    {year}
  </time>
  <hgroup class="space-y-1">
    <p
      class="flex gap-2.5 text-sm font-medium text-ink sm:text-base dark:text-ink-dark"
    >
      <span class="text-rust dark:text-rust-soft" aria-hidden="true">•</span>
      <span>{title}</span>
    </p>
    {#if subtitle}
      <p class="pl-5 text-sm text-ink-soft dark:text-ink-dark-soft">
        {subtitle}
      </p>
    {/if}
  </hgroup>
  {#if tag}
    <span
      class="font-jetbrains-mono text-3xs tracking-meta text-muted/80 uppercase sm:self-start sm:text-right dark:text-ink-dark-soft/80"
    >
      {tag}
    </span>
  {/if}
</article>
