<script>
  import H1 from './H1.svelte';

  export let title = '';
</script>

<section class="duration-200 sm:m-auto sm:my-6 p-4 sm:p-6 grid lg:grid-cols-5 gap-8">
    <hgroup class="lg:col-span-2">
        <H1 class="lg:sticky lg:top-8" bold>{title}</H1>
    </hgroup>
    <article class="lg:col-span-3">
        <slot/>
    </article>
</section>