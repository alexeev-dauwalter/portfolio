<script lang="ts">
  export let shortName: string = '',
    position: string = '',
    email: string = '',
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
      class="font-jetbrains-mono tracking-meta text-ink dark:text-ink-dark text-xs 2xl:text-sm"
    >
      {shortName}
    </span>
    <nav
      class="order-3 flex w-full flex-wrap items-center gap-x-3 gap-y-2 sm:order-none sm:w-auto sm:gap-x-4 2xl:gap-x-6"
    >
      {#each sections as { title, id }, i}
        {#if i > 0}
          <span
            class="font-jetbrains-mono text-2xs text-muted/60 dark:text-ink-dark-soft/50 2xl:text-sm"
            aria-hidden="true">·</span
          >
        {/if}
        <a
          href={`#${id}`}
          class="font-jetbrains-mono text-2xs tracking-meta text-ink-soft hover:text-rust dark:text-ink-dark-soft dark:hover:text-rust-soft lowercase transition 2xl:text-sm"
        >
          {title.toLowerCase()}
        </a>
      {/each}
    </nav>
    {#if email}
      <a
        href={`mailto:${email}`}
        class="font-jetbrains-mono text-2xs tracking-meta text-ink hover:text-rust dark:text-ink-dark dark:hover:text-rust-soft transition 2xl:text-sm"
      >
        {email}
      </a>
    {/if}
  </section>

  <p
    class="font-jetbrains-mono text-2xs tracking-meta text-muted dark:text-ink-dark-soft flex flex-wrap items-center gap-x-2 gap-y-1 uppercase sm:text-xs 2xl:text-sm"
  >
    <span>01</span>
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
    class="font-inter leading-hero text-ink dark:text-ink-dark mt-6 max-w-5xl text-4xl font-medium tracking-tight sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl 2xl:mt-12 2xl:text-8xl"
  >
    Программирование —
    <em class="font-lora text-rust dark:text-rust-soft font-normal italic"
      >не профессия,</em
    ><br />
    а образ жизни.
  </h1>

  <p
    class="text-ink-soft dark:text-ink-dark-soft mt-6 max-w-2xl text-base leading-relaxed sm:mt-8 sm:text-lg 2xl:mt-10 2xl:max-w-3xl 2xl:text-xl"
  >
    Меня зовут Пётр Алексеев. Пишу софт уже четырнадцатый год — от школьного
    <code
      class="bg-cream-soft/60 font-jetbrains-mono text-ink dark:bg-cream-dark-soft/60 dark:text-ink-dark rounded-sm px-1 py-0.5 text-[0.92em]"
      >PascalABC.NET</code
    >
    до асинхронного
    <code
      class="bg-cream-soft/60 font-jetbrains-mono text-ink dark:bg-cream-dark-soft/60 dark:text-ink-dark rounded-sm px-1 py-0.5 text-[0.92em]"
      >Rust</code
    >. Делаю продукты, в которых видно работу: код, который не стыдно показать,
    и интерфейсы, которые не стыдно отдать людям.
  </p>

  <aside
    class="border-ink/10 dark:border-ink-dark/15 mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-6 sm:mt-16 md:grid-cols-4 2xl:mt-20 2xl:gap-x-12 2xl:pt-10"
  >
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted sm:text-2xs dark:text-ink-dark-soft uppercase 2xl:text-xs"
      >
        Сейчас
      </p>
      <p
        class="font-lora text-ink dark:text-ink-dark text-base sm:text-lg 2xl:text-2xl"
      >
        {currentJobs.join(' · ')}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted sm:text-2xs dark:text-ink-dark-soft uppercase 2xl:text-xs"
      >
        Роль
      </p>
      <p
        class="font-lora text-ink dark:text-ink-dark text-base sm:text-lg 2xl:text-2xl"
      >
        {currentRole}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted sm:text-2xs dark:text-ink-dark-soft uppercase 2xl:text-xs"
      >
        Стек
      </p>
      <p
        class="font-lora text-ink dark:text-ink-dark text-base sm:text-lg 2xl:text-2xl"
      >
        {stackShort.join(' · ')}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted sm:text-2xs dark:text-ink-dark-soft uppercase 2xl:text-xs"
      >
        Связь
      </p>
      <p class="flex flex-wrap items-baseline gap-x-2">
        {#each contactLinks as { href, label }, i}
          {#if i > 0}
            <span
              class="font-lora text-muted/70 dark:text-ink-dark-soft/60 text-base sm:text-lg 2xl:text-2xl"
              aria-hidden="true">·</span
            >
          {/if}
          <a
            {href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            class="font-lora text-ink hover:text-rust dark:text-ink-dark dark:hover:text-rust-soft text-base transition sm:text-lg 2xl:text-2xl"
          >
            {label}
          </a>
        {/each}
      </p>
    </section>
  </aside>
</header>
