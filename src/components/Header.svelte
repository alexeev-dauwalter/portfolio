<script>
  import H1 from './H1.svelte';
</script>

<header class="duration-200 sm:m-auto sm:my-6 p-4 sm:p-6 grid sm:grid-cols-5 gap-8 text-center">
    <slot name="avatar"/>
    <section class="sm:col-span-3 gap-y-2 md:gap-y-8 grid self-center">
        <H1 bold>
            <slot name="name"/>
        </H1>
        <p class="text-lg sm:text-xl text-neutral-700 dark:text-neutral-400 italic">
            <slot name="position"/>
        </p>
        <slot/>
    </section>
</header>