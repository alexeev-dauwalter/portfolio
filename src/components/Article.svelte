<script lang="ts">
  import H2 from './H2.svelte';

  export let title: string,
    subtitle: string = '',
    dateLabel: string = '',
    durationLabel: string = '',
    index: number | undefined = undefined;

  $: indexLabel =
    index !== undefined ? `/ ${String(index).padStart(2, '0')}` : '';
</script>

<article
  class="grid gap-x-6 gap-y-4 border-t border-ink/12 py-8 sm:py-10 md:grid-cols-[10rem_1fr_3rem] md:gap-x-8 2xl:grid-cols-[12rem_1fr_4rem] 2xl:gap-x-12 2xl:py-12 dark:border-ink-dark/15"
>
  <header class="space-y-2">
    <time
      class="block font-jetbrains-mono text-xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
    >
      {dateLabel}
    </time>
    {#if durationLabel}
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted/70 uppercase dark:text-ink-dark-soft/70"
      >
        {durationLabel}
      </p>
    {/if}
  </header>
  <section class="space-y-4 md:space-y-5">
    <hgroup class="space-y-1.5">
      <H2>{title}</H2>
      {#if subtitle}
        <p
          class="font-lora text-base text-ink-soft italic dark:text-ink-dark-soft"
        >
          {subtitle}
        </p>
      {/if}
    </hgroup>
    <slot />
  </section>
  <aside
    class="hidden font-jetbrains-mono text-3xs tracking-meta text-muted/70 uppercase md:block md:text-right dark:text-ink-dark-soft/70"
  >
    {indexLabel}
  </aside>
</article>
