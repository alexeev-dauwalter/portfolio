<script lang="ts">
  export let year: number;
  export let title: string;
  export let subtitle: string = '';
</script>

<div
  class="hairline grid gap-3 py-5 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-6"
>
  <span
    class="font-mono text-base text-[var(--color-ink)] tabular-nums sm:text-lg dark:text-[var(--color-ink-dark)]"
  >
    {year}
  </span>
  <div class="space-y-1">
    <p
      class="text-sm font-medium text-[var(--color-ink)] sm:text-base dark:text-[var(--color-ink-dark)]"
    >
      {title}
    </p>
    {#if subtitle}
      <p
        class="text-sm text-[var(--color-ink-soft)] dark:text-[var(--color-ink-dark-soft)]"
      >
        {subtitle}
      </p>
    {/if}
  </div>
</div>
