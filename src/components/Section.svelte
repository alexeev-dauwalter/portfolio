<script lang="ts">
  export let number: string = '',
    title: string = '',
    meta: string = '',
    id: string = '';
</script>

<section
  {id}
  class="scroll-mt-24 border-t border-ink/12 px-4 pt-8 pb-16 sm:px-8 sm:pt-12 2xl:px-12 2xl:pt-16 2xl:pb-24 dark:border-ink-dark/15"
>
  <header
    class="mb-8 flex items-baseline justify-between gap-4 sm:mb-12 md:mb-16"
  >
    <hgroup class="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
      {#if number}
        <span
          class="font-jetbrains-mono text-xs text-muted sm:text-sm dark:text-ink-dark-soft"
        >
          {number}
        </span>
        <span class="text-muted dark:text-ink-dark-soft">—</span>
      {/if}
      <h2
        class="font-inter text-lg font-medium tracking-tight text-ink sm:text-xl md:text-2xl 2xl:text-3xl dark:text-ink-dark"
      >
        {title}
      </h2>
      {#if meta}
        <span
          class="font-jetbrains-mono text-2xs tracking-meta text-muted/80 uppercase sm:text-xs dark:text-ink-dark-soft/80"
        >
          — {meta}
        </span>
      {/if}
    </hgroup>
    <slot name="aside" />
  </header>
  <section class="space-y-8 sm:space-y-12">
    <slot />
  </section>
</section>
