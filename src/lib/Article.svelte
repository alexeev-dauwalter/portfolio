<script>
  import H2 from './H2.svelte';

  export let title;
</script>

<article class="info-article">
  <H2>{title}</H2>
  <slot/>
</article>