<script lang="ts">
  export let number: string = '',
    title: string = '',
    id: string = '';
</script>

<section
  {id}
  class="scroll-mt-24 border-t border-ink/12 px-4 pt-8 pb-16 sm:px-8 sm:pt-12 dark:border-ink-dark/15"
>
  <header
    class="mb-8 flex items-baseline justify-between gap-4 sm:mb-12 md:mb-16"
  >
    <hgroup class="flex items-baseline gap-3 sm:gap-4">
      {#if number}
        <span
          class="font-jetbrains-mono text-xs text-muted sm:text-sm dark:text-ink-dark-soft"
        >
          {number}
        </span>
        <span class="text-muted dark:text-ink-dark-soft">—</span>
      {/if}
      <h2
        class="font-inter text-lg font-medium tracking-tight text-ink sm:text-xl md:text-2xl dark:text-ink-dark"
      >
        {title}
      </h2>
    </hgroup>
    <slot name="aside" />
  </header>
  <section class="space-y-8 sm:space-y-12">
    <slot />
  </section>
</section>
