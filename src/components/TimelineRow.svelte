<script lang="ts">
  export let year: number,
    title: string,
    subtitle: string = '';
</script>

<article
  class="grid gap-3 border-t border-ink/12 py-5 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-6 dark:border-ink-dark/15"
>
  <time
    class="font-jetbrains-mono text-base text-ink tabular-nums sm:text-lg dark:text-ink-dark"
  >
    {year}
  </time>
  <hgroup class="space-y-1">
    <p class="text-sm font-medium text-ink sm:text-base dark:text-ink-dark">
      {title}
    </p>
    {#if subtitle}
      <p class="text-sm text-ink-soft dark:text-ink-dark-soft">
        {subtitle}
      </p>
    {/if}
  </hgroup>
</article>
