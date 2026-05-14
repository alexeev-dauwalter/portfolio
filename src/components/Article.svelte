<script lang="ts">
  import H2 from './H2.svelte';

  export let title: string;
  export let subtitle: string = '';
  export let dateLabel: string = '';
  export let index: number | undefined = undefined;

  $: indexLabel = index !== undefined ? `#${String(index).padStart(2, '0')}` : '';
</script>

<article class="hairline grid gap-6 py-8 md:grid-cols-[8rem_1fr_4rem] md:gap-8">
  <div
    class="font-mono text-xs tracking-[0.12em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
  >
    {dateLabel}
  </div>
  <div class="space-y-3 md:space-y-4">
    <H2>{title}</H2>
    {#if subtitle}
      <p
        class="text-base text-[var(--color-ink-soft)] italic dark:text-[var(--color-ink-dark-soft)]"
      >
        {subtitle}
      </p>
    {/if}
    <slot />
  </div>
  <div
    class="font-mono text-xs text-[var(--color-muted)] md:text-right dark:text-[var(--color-ink-dark-soft)]"
  >
    {indexLabel}
  </div>
</article>
