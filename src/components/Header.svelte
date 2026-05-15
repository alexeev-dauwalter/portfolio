<script lang="ts">
  export let shortName: string = '',
    position: string = '',
    positionAccent: string = '',
    email: string = '',
    location: string = '',
    mainStack: string[] = [],
    stats: { value: string; label: string }[] = [],
    sections: { number: string; title: string; id: string }[] = [];

  $: positionPrefix = positionAccent
    ? position.replace(new RegExp(`\\s*${positionAccent}\\.?$`), '')
    : position;
</script>

<header class="px-4 pt-8 pb-12 sm:px-8 sm:pt-12 md:pt-16">
  <section
    class="mb-12 flex flex-wrap items-center justify-between gap-y-4 sm:mb-16"
  >
    <span
      class="font-jetbrains-mono text-xs tracking-[0.12em] text-ink uppercase dark:text-ink-dark"
    >
      {shortName}
    </span>
    <nav class="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
      {#each sections as { number, title, id }}
        <a
          href={`#${id}`}
          class="font-jetbrains-mono text-[0.7rem] tracking-[0.12em] text-ink-soft uppercase transition hover:text-rust dark:text-ink-dark-soft dark:hover:text-rust-soft"
        >
          <span class="text-muted dark:text-ink-dark-soft/70">{number}</span>
          <span class="ml-1.5">{title}</span>
        </a>
      {/each}
      {#if email}
        <a
          href={`mailto:${email}`}
          class="rounded-full border border-ink/20 px-3.5 py-1 font-jetbrains-mono text-[0.7rem] tracking-[0.12em] text-ink uppercase transition hover:border-rust hover:text-rust dark:border-ink-dark/25 dark:text-ink-dark dark:hover:border-rust-soft dark:hover:text-rust-soft"
        >
          Связаться
        </a>
      {/if}
    </nav>
  </section>

  <p
    class="font-jetbrains-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase dark:text-ink-dark-soft"
  >
    portfolio / 2026
  </p>

  <h1
    class="mt-6 max-w-4xl font-inter text-4xl leading-[1.02] font-medium tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl dark:text-ink-dark"
  >
    {positionPrefix}
    <em class="font-lora font-normal text-rust italic dark:text-rust-soft"
      >{positionAccent}</em
    >.
  </h1>

  <aside
    class="mt-12 grid grid-cols-2 gap-y-6 border-t border-ink/10 pt-6 sm:mt-16 md:grid-cols-4 dark:border-ink-dark/15"
  >
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase dark:text-ink-dark-soft"
      >
        Имя
      </p>
      <p class="text-sm text-ink dark:text-ink-dark">{shortName}</p>
    </section>
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase dark:text-ink-dark-soft"
      >
        Стек
      </p>
      <p class="text-sm text-ink dark:text-ink-dark">
        {mainStack.slice(0, 3).join(' · ')}
      </p>
    </section>
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase dark:text-ink-dark-soft"
      >
        Локация
      </p>
      <p class="text-sm text-ink dark:text-ink-dark">{location}</p>
    </section>
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase dark:text-ink-dark-soft"
      >
        Почта
      </p>
      <a
        href={`mailto:${email}`}
        class="text-sm text-ink underline decoration-rust/30 underline-offset-4 transition hover:decoration-rust dark:text-ink-dark dark:decoration-rust-soft/40"
      >
        {email}
      </a>
    </section>
  </aside>

  {#if stats?.length}
    <ul
      class="mt-10 grid grid-cols-2 gap-y-6 border-t border-ink/10 pt-6 sm:grid-cols-3 md:grid-cols-5 dark:border-ink-dark/15"
    >
      {#each stats as { value, label }}
        <li class="space-y-1">
          <p
            class="font-jetbrains-mono text-3xl text-ink tabular-nums sm:text-4xl dark:text-ink-dark"
          >
            {value}
          </p>
          <p
            class="font-jetbrains-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase dark:text-ink-dark-soft"
          >
            {label}
          </p>
        </li>
      {/each}
    </ul>
  {/if}
</header>
