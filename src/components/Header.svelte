<script lang="ts">
  export let shortName: string = '';
  export let position: string = '';
  export let positionAccent: string = '';
  export let email: string = '';
  export let location: string = '';
  export let mainStack: string[] = [];
  export let stats: { value: string; label: string }[] = [];
  export let sections: { number: string; title: string; id: string }[] = [];

  $: positionPrefix = positionAccent
    ? position.replace(new RegExp(`\\s*${positionAccent}\\.?$`), '')
    : position;
</script>

<header class="px-4 pt-8 pb-12 sm:px-8 sm:pt-12 md:pt-16">
  <div
    class="mb-12 flex flex-wrap items-center justify-between gap-y-4 sm:mb-16"
  >
    <span
      class="font-mono text-xs tracking-[0.12em] text-[var(--color-ink)] uppercase dark:text-[var(--color-ink-dark)]"
    >
      {shortName}
    </span>
    <nav class="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
      {#each sections as { number, title, id }}
        <a
          href={`#${id}`}
          class="group font-mono text-[0.7rem] tracking-[0.12em] text-[var(--color-ink-soft)] uppercase transition hover:text-[var(--color-rust)] dark:text-[var(--color-ink-dark-soft)] dark:hover:text-[var(--color-rust-soft)]"
        >
          <span
            class="text-[var(--color-muted)] dark:text-[var(--color-ink-dark-soft)]/70"
            >{number}</span
          >
          <span class="ml-1.5">{title}</span>
        </a>
      {/each}
      {#if email}
        <a
          href={`mailto:${email}`}
          class="rounded-full border border-[var(--color-ink)]/20 px-3.5 py-1 font-mono text-[0.7rem] tracking-[0.12em] text-[var(--color-ink)] uppercase transition hover:border-[var(--color-rust)] hover:text-[var(--color-rust)] dark:border-[var(--color-ink-dark)]/25 dark:text-[var(--color-ink-dark)] dark:hover:border-[var(--color-rust-soft)] dark:hover:text-[var(--color-rust-soft)]"
        >
          Связаться
        </a>
      {/if}
    </nav>
  </div>

  <p
    class="font-mono text-[0.7rem] tracking-[0.12em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
  >
    portfolio / 2026
  </p>

  <h1
    class="mt-6 max-w-4xl font-sans text-4xl leading-[1.02] font-medium tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl lg:text-7xl dark:text-[var(--color-ink-dark)]"
  >
    {positionPrefix}
    <em
      class="font-serif font-normal text-[var(--color-rust)] italic dark:text-[var(--color-rust-soft)]"
      >{positionAccent}</em
    >.
  </h1>

  <dl
    class="mt-12 grid grid-cols-2 gap-y-4 border-t border-[var(--color-ink)]/10 pt-6 sm:mt-16 md:grid-cols-4 dark:border-[var(--color-ink-dark)]/15"
  >
    <div class="space-y-1">
      <dt
        class="font-mono text-[0.65rem] tracking-[0.14em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
      >
        Имя
      </dt>
      <dd class="text-sm text-[var(--color-ink)] dark:text-[var(--color-ink-dark)]">
        {shortName}
      </dd>
    </div>
    <div class="space-y-1">
      <dt
        class="font-mono text-[0.65rem] tracking-[0.14em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
      >
        Стек
      </dt>
      <dd class="text-sm text-[var(--color-ink)] dark:text-[var(--color-ink-dark)]">
        {mainStack.slice(0, 3).join(' · ')}
      </dd>
    </div>
    <div class="space-y-1">
      <dt
        class="font-mono text-[0.65rem] tracking-[0.14em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
      >
        Локация
      </dt>
      <dd class="text-sm text-[var(--color-ink)] dark:text-[var(--color-ink-dark)]">
        {location}
      </dd>
    </div>
    <div class="space-y-1">
      <dt
        class="font-mono text-[0.65rem] tracking-[0.14em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
      >
        Почта
      </dt>
      <dd class="text-sm">
        <a
          href={`mailto:${email}`}
          class="text-[var(--color-ink)] underline decoration-[var(--color-rust)]/30 underline-offset-4 transition hover:decoration-[var(--color-rust)] dark:text-[var(--color-ink-dark)] dark:decoration-[var(--color-rust-soft)]/40"
        >
          {email}
        </a>
      </dd>
    </div>
  </dl>

  {#if stats?.length}
    <ul
      class="mt-10 grid grid-cols-2 gap-y-6 border-t border-[var(--color-ink)]/10 pt-6 sm:grid-cols-3 md:grid-cols-5 dark:border-[var(--color-ink-dark)]/15"
    >
      {#each stats as { value, label }}
        <li class="space-y-1">
          <div
            class="font-mono text-3xl text-[var(--color-ink)] tabular-nums sm:text-4xl dark:text-[var(--color-ink-dark)]"
          >
            {value}
          </div>
          <div
            class="font-mono text-[0.65rem] tracking-[0.12em] text-[var(--color-muted)] uppercase dark:text-[var(--color-ink-dark-soft)]"
          >
            {label}
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</header>
