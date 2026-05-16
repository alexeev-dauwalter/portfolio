<script lang="ts">
  export let shortName: string = '',
    position: string = '',
    positionAccent: string = '',
    email: string = '',
    location: string = '',
    mainStack: string[] = [],
    stats: { value: string; label: string; subLabel?: string }[] = [],
    sections: { number: string; title: string; id: string }[] = [];

  $: positionPrefix = positionAccent
    ? position.replace(new RegExp(`\\s*${positionAccent}\\.?$`), '')
    : position;
</script>

<header class="px-4 pt-8 pb-12 sm:px-8 sm:pt-12 md:pt-16 2xl:px-12 2xl:pt-20">
  <section
    class="mb-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 sm:mb-16"
  >
    <span
      class="font-jetbrains-mono text-xs tracking-meta text-ink dark:text-ink-dark"
    >
      {shortName}
    </span>
    <nav
      class="order-3 flex w-full flex-wrap items-center gap-x-3 gap-y-2 sm:order-none sm:w-auto sm:gap-x-4 2xl:gap-x-6"
    >
      {#each sections as { title, id }, i}
        {#if i > 0}
          <span
            class="font-jetbrains-mono text-2xs text-muted/60 dark:text-ink-dark-soft/50"
            aria-hidden="true">·</span
          >
        {/if}
        <a
          href={`#${id}`}
          class="font-jetbrains-mono text-2xs tracking-meta text-ink-soft lowercase transition hover:text-rust dark:text-ink-dark-soft dark:hover:text-rust-soft"
        >
          {title.toLowerCase()}
        </a>
      {/each}
    </nav>
    {#if email}
      <a
        href={`mailto:${email}`}
        class="font-jetbrains-mono text-2xs tracking-meta text-ink transition hover:text-rust dark:text-ink-dark dark:hover:text-rust-soft"
      >
        {email}
      </a>
    {/if}
  </section>

  <p
    class="flex flex-wrap items-center gap-x-2 gap-y-1 font-jetbrains-mono text-2xs tracking-meta text-muted uppercase sm:text-xs dark:text-ink-dark-soft"
  >
    <span>01</span>
    <span class="text-muted/60 dark:text-ink-dark-soft/50" aria-hidden="true"
      >·</span
    >
    <span>{location}</span>
    <span class="text-muted/60 dark:text-ink-dark-soft/50" aria-hidden="true"
      >·</span
    >
    <span>{position}</span>
    <span class="text-muted/60 dark:text-ink-dark-soft/50" aria-hidden="true"
      >·</span
    >
    <span>2026</span>
  </p>

  <h1
    class="mt-6 max-w-5xl font-inter text-4xl leading-hero font-medium tracking-tight text-ink sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl 2xl:mt-12 2xl:text-8xl dark:text-ink-dark"
  >
    {positionPrefix}
    <em class="font-lora font-normal text-rust italic dark:text-rust-soft"
      >{positionAccent}</em
    >.
  </h1>

  <aside
    class="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/10 pt-6 sm:mt-16 md:grid-cols-4 2xl:mt-20 2xl:gap-x-12 dark:border-ink-dark/15"
  >
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
      >
        Имя
      </p>
      <p class="text-sm text-ink dark:text-ink-dark">{shortName}</p>
    </section>
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
      >
        Стек
      </p>
      <p class="text-sm text-ink dark:text-ink-dark">
        {mainStack.slice(0, 3).join(' · ')}
      </p>
    </section>
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
      >
        Локация
      </p>
      <p class="text-sm text-ink dark:text-ink-dark">{location}</p>
    </section>
    <section class="space-y-1">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
      >
        Почта
      </p>
      <a
        href={`mailto:${email}`}
        class="block text-sm break-all text-ink underline decoration-rust/30 underline-offset-4 transition hover:decoration-rust dark:text-ink-dark dark:decoration-rust-soft/40"
      >
        {email}
      </a>
    </section>
  </aside>

  {#if stats?.length}
    <ul
      class="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/10 pt-6 sm:grid-cols-3 md:grid-cols-5 2xl:grid-cols-6 2xl:gap-x-10 dark:border-ink-dark/15"
    >
      {#each stats as { value, label, subLabel }}
        <li class="space-y-1">
          <p
            class="font-jetbrains-mono text-3xl text-ink tabular-nums sm:text-4xl 2xl:text-5xl dark:text-ink-dark"
          >
            {value}
          </p>
          <p
            class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase dark:text-ink-dark-soft"
          >
            {label}
          </p>
          {#if subLabel}
            <p
              class="font-jetbrains-mono text-3xs tracking-meta text-muted/70 uppercase dark:text-ink-dark-soft/70"
            >
              {subLabel}
            </p>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</header>
