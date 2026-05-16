<script lang="ts">
  export let shortName: string = '',
    position: string = '',
    email: string = '',
    location: string = '',
    currentJobs: string[] = [],
    currentRole: string = '',
    stackShort: string[] = [],
    contactLinks: { href: string; label: string }[] = [],
    sections: { number: string; title: string; id: string }[] = [];
</script>

<header class="px-4 pt-8 pb-12 sm:px-8 sm:pt-12 md:pt-16 2xl:px-12 2xl:pt-20">
  <section
    class="mb-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 sm:mb-16"
  >
    <span
      class="font-jetbrains-mono text-xs tracking-meta text-ink 2xl:text-sm dark:text-ink-dark"
    >
      {shortName}
    </span>
    <nav
      class="order-3 flex w-full flex-wrap items-center gap-x-3 gap-y-2 sm:order-none sm:w-auto sm:gap-x-4 2xl:gap-x-6"
    >
      {#each sections as { title, id }, i}
        {#if i > 0}
          <span
            class="font-jetbrains-mono text-2xs text-muted/60 2xl:text-sm dark:text-ink-dark-soft/50"
            aria-hidden="true">·</span
          >
        {/if}
        <a
          href={`#${id}`}
          class="font-jetbrains-mono text-2xs tracking-meta text-ink-soft lowercase transition hover:text-rust 2xl:text-sm dark:text-ink-dark-soft dark:hover:text-rust-soft"
        >
          {title.toLowerCase()}
        </a>
      {/each}
    </nav>
    {#if email}
      <a
        href={`mailto:${email}`}
        class="font-jetbrains-mono text-2xs tracking-meta text-ink transition hover:text-rust 2xl:text-sm dark:text-ink-dark dark:hover:text-rust-soft"
      >
        {email}
      </a>
    {/if}
  </section>

  <p
    class="flex flex-wrap items-center gap-x-2 gap-y-1 font-jetbrains-mono text-2xs tracking-meta text-muted uppercase sm:text-xs 2xl:text-sm dark:text-ink-dark-soft"
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
    Программирование —
    <em class="font-lora font-normal text-rust italic dark:text-rust-soft"
      >не профессия,</em
    ><br />
    а образ жизни.
  </h1>

  <p
    class="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:mt-8 sm:text-lg 2xl:mt-10 2xl:max-w-3xl 2xl:text-xl dark:text-ink-dark-soft"
  >
    Меня зовут Пётр Алексеев. Пишу софт уже четырнадцатый год — от школьного
    <code
      class="rounded-sm bg-cream-soft/60 px-1 py-0.5 font-jetbrains-mono text-[0.92em] text-ink dark:bg-cream-dark-soft/60 dark:text-ink-dark"
      >PascalABC.NET</code
    >
    до асинхронного
    <code
      class="rounded-sm bg-cream-soft/60 px-1 py-0.5 font-jetbrains-mono text-[0.92em] text-ink dark:bg-cream-dark-soft/60 dark:text-ink-dark"
      >Rust</code
    >. Делаю продукты, в которых видно работу: код, который не стыдно показать,
    и интерфейсы, которые не стыдно отдать людям.
  </p>

  <aside
    class="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-6 sm:mt-16 md:grid-cols-4 2xl:mt-20 2xl:gap-x-12 2xl:pt-10 dark:border-ink-dark/15"
  >
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase sm:text-2xs 2xl:text-xs dark:text-ink-dark-soft"
      >
        Сейчас
      </p>
      <p
        class="font-lora text-base text-ink sm:text-lg 2xl:text-2xl dark:text-ink-dark"
      >
        {currentJobs.join(' · ')}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase sm:text-2xs 2xl:text-xs dark:text-ink-dark-soft"
      >
        Роль
      </p>
      <p
        class="font-lora text-base text-ink sm:text-lg 2xl:text-2xl dark:text-ink-dark"
      >
        {currentRole}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase sm:text-2xs 2xl:text-xs dark:text-ink-dark-soft"
      >
        Стек
      </p>
      <p
        class="font-lora text-base text-ink sm:text-lg 2xl:text-2xl dark:text-ink-dark"
      >
        {stackShort.join(' · ')}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted uppercase sm:text-2xs 2xl:text-xs dark:text-ink-dark-soft"
      >
        Связь
      </p>
      <p class="flex flex-wrap items-baseline gap-x-2">
        {#each contactLinks as { href, label }, i}
          {#if i > 0}
            <span
              class="font-lora text-base text-muted/70 sm:text-lg 2xl:text-2xl dark:text-ink-dark-soft/60"
              aria-hidden="true">·</span
            >
          {/if}
          <a
            {href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            class="font-lora text-base text-ink transition hover:text-rust sm:text-lg 2xl:text-2xl dark:text-ink-dark dark:hover:text-rust-soft"
          >
            {label}
          </a>
        {/each}
      </p>
    </section>
  </aside>
</header>
