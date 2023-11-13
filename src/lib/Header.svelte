<script>
  import H1 from './H1.svelte';

  export let avatar;
</script>

<header
    class="max-w-screen-sm info-section text-center">
  <img class="w-32 h-32 m-auto border border-neutral-50 dark:border-neutral-600 shadow-md rounded-full"
       src={avatar} alt="Avatar">
  <H1 bold>
    <slot name="name"/>
  </H1>
  <p class="text-lg sm:text-xl text-neutral-700 dark:text-neutral-400 italic">
    <slot name="position"/>
  </p>
  <slot/>
</header>