<script lang="ts">
  export let bold: boolean = false;
</script>

<h1
  class="font-inter text-3xl leading-hero tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl dark:text-ink-dark"
  class:font-semibold={bold}
  class:font-medium={!bold}
>
  <slot />
</h1>
