<script>
  export let bold = false;
</script>

<h1
  class="font-mono text-2xl text-neutral-500 uppercase sm:text-3xl xl:text-6xl 2xl:text-7xl {$$props.class}"
  class:font-bold={bold}
>
  <slot />
</h1>
