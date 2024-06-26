<script>
  import H1 from './H1.svelte';

  export let avatar;
</script>

<header class="info-section grid sm:grid-cols-5 gap-8 text-center">
    <img
        class="m-auto dark:border-neutral-600 shadow-md rounded-xl sm:col-span-2"
        src={avatar}
        alt="Avatar"
    >
    <section class="sm:col-span-3 space-y-2 md:space-y-8 self-center">
        <H1 bold>
            <slot name="name"/>
        </H1>
        <p class="text-lg sm:text-xl text-neutral-700 dark:text-neutral-400 italic">
            <slot name="position"/>
        </p>
        <slot/>
    </section>
</header>