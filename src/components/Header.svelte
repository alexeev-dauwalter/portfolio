<script lang="ts">
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';

  function dropdown(_node: HTMLElement, { duration = 160 } = {}) {
    return {
      duration,
      easing: cubicOut,
      css: (t: number) => `
        opacity: ${t};
        transform: translateY(${(1 - t) * -6}px) scale(${0.96 + 0.04 * t});
      `
    };
  }

  export let email: string = '',
    currentJobs: string[] = [],
    currentRoles: string[] = [],
    desiredPositions: string[] = [],
    stackShort: string[] = [],
    contactLinks: { href: string; label: string }[] = [],
    connectLinks: {
      href: string;
      label: string;
      handle: string;
      slug: string;
    }[] = [],
    sections: { number: string; title: string; id: string }[] = [],
    avatarSrc: string = '',
    avatarAlt: string = '';

  let open = false;
  let triggerRef: HTMLButtonElement;
  let menuRef: HTMLDivElement;

  function toggle() {
    open = !open;
  }

  function onDocPointer(event: PointerEvent) {
    if (!open) return;
    const target = event.target as Node | null;
    if (!target) return;
    if (triggerRef?.contains(target)) return;
    if (menuRef?.contains(target)) return;
    open = false;
  }

  function onKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      open = false;
      triggerRef?.focus();
    }
  }

  onMount(() => {
    document.addEventListener('pointerdown', onDocPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDocPointer);
      document.removeEventListener('keydown', onKey);
    };
  });
</script>

<header class="px-4 pt-8 pb-12 sm:px-8 sm:pt-12 md:pt-16 2xl:px-12 2xl:pt-20">
  <section
    class="mb-12 flex flex-wrap items-center justify-end gap-x-6 gap-y-3 sm:mb-16 sm:justify-between"
  >
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
    {#if connectLinks.length > 0}
      <div class="relative">
        <button
          bind:this={triggerRef}
          type="button"
          on:click={toggle}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-controls="connect-menu"
          class="group inline-flex items-center gap-2 rounded-sm border border-ink/15 bg-cream-soft/50 px-3 py-1.5 font-jetbrains-mono text-2xs tracking-meta text-ink uppercase transition hover:border-rust/40 hover:text-rust 2xl:text-sm dark:border-ink-dark/20 dark:bg-cream-dark-soft/50 dark:text-ink-dark dark:hover:border-rust-soft/45 dark:hover:text-rust-soft"
        >
          <span class="block h-1.5 w-1.5 rounded-full bg-rust/80 dark:bg-rust-soft/80" aria-hidden="true"></span>
          <span>связаться</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden="true"
            class="transition-transform duration-200"
            class:rotate-180={open}
          >
            <path
              d="M2 3.5l3 3 3-3"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {#if open}
          <div
            bind:this={menuRef}
            id="connect-menu"
            role="menu"
            transition:dropdown
            style="transform-origin: top right;"
            class="absolute right-0 top-full z-20 mt-2 w-72 overflow-hidden rounded-md border border-ink/12 bg-cream shadow-lg shadow-ink/5 2xl:w-80 dark:border-ink-dark/20 dark:bg-cream-dark dark:shadow-black/30"
          >
            <p
              class="border-b border-ink/8 px-4 pt-3 pb-2 font-jetbrains-mono text-3xs tracking-meta text-muted uppercase 2xl:text-2xs dark:border-ink-dark/15 dark:text-ink-dark-soft"
            >
              Способы связи
            </p>
            <ul class="py-1">
              {#each connectLinks as { href, label, handle }}
                <li role="none">
                  <a
                    role="menuitem"
                    {href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined}
                    on:click={() => (open = false)}
                    class="group/item flex items-baseline justify-between gap-4 px-4 py-2.5 transition hover:bg-cream-soft/70 dark:hover:bg-cream-dark-soft/60"
                  >
                    <span class="flex flex-col gap-0.5 min-w-0">
                      <span
                        class="font-jetbrains-mono text-2xs tracking-meta text-ink uppercase transition group-hover/item:text-rust 2xl:text-xs dark:text-ink-dark dark:group-hover/item:text-rust-soft"
                      >
                        {label}
                      </span>
                      <span
                        class="truncate font-lora text-sm text-ink-soft italic 2xl:text-base dark:text-ink-dark-soft"
                      >
                        {handle}
                      </span>
                    </span>
                    <span
                      class="shrink-0 font-jetbrains-mono text-2xs text-muted/60 transition group-hover/item:text-rust group-hover/item:translate-x-0.5 dark:text-ink-dark-soft/60 dark:group-hover/item:text-rust-soft"
                      aria-hidden="true">→</span
                    >
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/if}
  </section>

  <div
    class="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 lg:gap-16 2xl:gap-20"
  >
    <div class="order-2 md:order-1">
      <h1
        class="font-inter leading-hero text-ink dark:text-ink-dark max-w-5xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
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
        >. Делаю продукты, в которых видно работу: код, который не стыдно
        показать, и интерфейсы, которые не стыдно отдать людям.
      </p>
    </div>

    {#if avatarSrc}
      <div class="order-1 shrink-0 md:order-2">
        <img
          src={avatarSrc}
          alt={avatarAlt}
          width="320"
          height="320"
          loading="eager"
          decoding="async"
          class="ring-ink/10 dark:ring-ink-dark/15 h-40 w-40 rounded-full object-cover ring-1 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64 2xl:h-80 2xl:w-80"
        />
      </div>
    {/if}
  </div>

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
        class="font-lora text-ink dark:text-ink-dark flex flex-wrap items-baseline gap-x-2 text-base sm:text-lg 2xl:text-2xl"
      >
        {#if currentJobs.length === 0}
          <span class="italic text-rust dark:text-rust-soft">В поиске работы</span>
        {:else}
          {#each currentJobs as job, i}
            {#if i > 0}
              <span
                class="text-muted/70 dark:text-ink-dark-soft/60"
                aria-hidden="true">·</span
              >
            {/if}
            <span>{job}</span>
          {/each}
        {/if}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted sm:text-2xs dark:text-ink-dark-soft uppercase 2xl:text-xs"
      >
        Роль
      </p>
      <p
        class="font-lora text-ink dark:text-ink-dark flex flex-wrap items-baseline gap-x-2 text-base sm:text-lg 2xl:text-2xl"
      >
        {#if currentRoles.length === 0}
          {#if desiredPositions.length === 0}
            <span
              class="text-muted/70 dark:text-ink-dark-soft/60"
              aria-hidden="true">—</span
            >
          {:else}
            {#each desiredPositions as role, i}
              {#if i > 0}
                <span
                  class="text-muted/70 dark:text-ink-dark-soft/60"
                  aria-hidden="true">·</span
                >
              {/if}
              <span>{role}</span>
            {/each}
          {/if}
        {:else}
          {#each currentRoles as role, i}
            {#if i > 0}
              <span
                class="text-muted/70 dark:text-ink-dark-soft/60"
                aria-hidden="true">·</span
              >
            {/if}
            <span>{role}</span>
          {/each}
        {/if}
      </p>
    </section>
    <section class="space-y-2">
      <p
        class="font-jetbrains-mono text-3xs tracking-meta text-muted sm:text-2xs dark:text-ink-dark-soft uppercase 2xl:text-xs"
      >
        Стек
      </p>
      <p
        class="font-lora text-ink dark:text-ink-dark flex flex-wrap items-baseline gap-x-2 text-base sm:text-lg 2xl:text-2xl"
      >
        {#each stackShort as item, i}
          {#if i > 0}
            <span
              class="text-muted/70 dark:text-ink-dark-soft/60"
              aria-hidden="true">·</span
            >
          {/if}
          <span>{item}</span>
        {/each}
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
