<script lang="ts">
  export let bold: boolean = false;
  let className: string = '';
  export { className as class };
</script>

<h1
  class="font-sans text-3xl leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl lg:text-6xl dark:text-[var(--color-ink-dark)] {className}"
  class:font-semibold={bold}
  class:font-medium={!bold}
>
  <slot />
</h1>
