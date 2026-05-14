<script lang="ts">
  let className: string = '';
  export { className as class };
</script>

<h2
  class="font-sans text-xl font-medium tracking-tight text-[var(--color-ink)] sm:text-2xl md:text-3xl dark:text-[var(--color-ink-dark)] {className}"
>
  <slot />
</h2>
