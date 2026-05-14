<script lang="ts">
  export let number: string = '';
  export let title: string = '';
  export let id: string = '';
</script>

<section {id} class="hairline scroll-mt-24 px-4 pt-8 pb-16 sm:px-8 sm:pt-12">
  <header
    class="mb-8 flex items-baseline justify-between gap-4 sm:mb-12 md:mb-16"
  >
    <div class="flex items-baseline gap-3 sm:gap-4">
      {#if number}
        <span
          class="font-mono text-xs text-[var(--color-muted)] sm:text-sm dark:text-[var(--color-ink-dark-soft)]"
        >
          {number}
        </span>
        <span class="text-[var(--color-muted)] dark:text-[var(--color-ink-dark-soft)]">—</span>
      {/if}
      <h2
        class="font-sans text-lg font-medium tracking-tight text-[var(--color-ink)] sm:text-xl md:text-2xl dark:text-[var(--color-ink-dark)]"
      >
        {title}
      </h2>
    </div>
    <slot name="aside" />
  </header>
  <div class="space-y-8 sm:space-y-12">
    <slot />
  </div>
</section>
