<script>
  import H2 from './H2.svelte';

  export let title;
</script>

<article class="grid gap-y-6 p-6 border-y border-neutral-200 dark:border-neutral-800">
    <H2>{title}</H2>
    <slot/>
</article>