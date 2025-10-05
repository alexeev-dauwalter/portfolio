<script>
  export let bold = false;
</script>

<h1 class="text-2xl uppercase sm:text-3xl xl:text-6xl 2xl:text-7xl text-neutral-500 font-mono {$$props.class}" class:font-bold={bold}>
    <slot/>
</h1>
