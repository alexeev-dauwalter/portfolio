<script lang="ts">
  import H2 from './H2.svelte';

  export let title: string,
    subtitle: string = '',
    dateLabel: string = '',
    index: number | undefined = undefined;

  $: indexLabel = index !== undefined ? `#${String(index).padStart(2, '0')}` : '';
</script>

<article
  class="grid gap-6 border-t border-ink/12 py-8 md:grid-cols-[8rem_1fr_4rem] md:gap-8 dark:border-ink-dark/15"
>
  <time
    class="font-jetbrains-mono text-xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
  >
    {dateLabel}
  </time>
  <section class="space-y-3 md:space-y-4">
    <H2>{title}</H2>
    {#if subtitle}
      <p class="font-lora text-base text-ink-soft italic dark:text-ink-dark-soft">
        {subtitle}
      </p>
    {/if}
    <slot />
  </section>
  <aside
    class="font-jetbrains-mono text-xs text-muted md:text-right dark:text-ink-dark-soft"
  >
    {indexLabel}
  </aside>
</article>
