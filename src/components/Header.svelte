<script>
  import H1 from './H1.svelte';
</script>

<header
  class="grid gap-8 p-4 text-center duration-200 sm:m-auto sm:my-6 sm:grid-cols-5 sm:p-6"
>
  <slot name="avatar" />
  <section class="grid gap-y-2 self-center sm:col-span-3 md:gap-y-8">
    <H1 bold>
      <slot name="name" />
    </H1>
    <p class="text-lg text-neutral-700 italic sm:text-xl dark:text-neutral-400">
      <slot name="position" />
    </p>
    <slot />
  </section>
</header>
