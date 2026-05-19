<script lang="ts">
  export let email: string = '',
    currentJobs: string[] = [],
    currentRoles: string[] = [],
    desiredPositions: string[] = [],
    stackShort: string[] = [],
    contactLinks: { href: string; label: string }[] = [],
    sections: { number: string; title: string; id: string }[] = [],
    avatarSrc: string = '',
    avatarAlt: string = '',
    jobSearchLabel: string = 'Open to work',
    panelLabels: {
      current: string;
      role: string;
      stack: string;
      contact: string;
    } = { current: 'Now', role: 'Role', stack: 'Stack', contact: 'Contacts' },
    heroTitleStart: string = '',
    heroTitleAccent: string = '',
    heroTitleEnd: string = '',
    heroIntroHtml: string = '';
</script>

<header class="px-4 pt-8 pb-12 sm:px-8 sm:pt-12 md:pt-16 2xl:px-12 2xl:pt-20">
  <section
    class="mb-12 flex flex-wrap items-center justify-end gap-x-6 gap-y-3 sm:mb-16"
  >
    <nav
      class="order-3 flex w-full flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4 2xl:gap-x-6"
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
  </section>

  <div
    class="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 lg:gap-16 2xl:gap-20"
  >
    <div class="order-2 md:order-1">
      <h1
        class="font-inter leading-hero text-ink dark:text-ink-dark max-w-5xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
      >
        {heroTitleStart}
        <em class="font-lora text-rust dark:text-rust-soft font-normal italic"
          >{heroTitleAccent}</em
        ><br />
        {heroTitleEnd}
      </h1>

      <p
        class="text-ink-soft dark:text-ink-dark-soft mt-6 max-w-2xl text-base leading-relaxed sm:mt-8 sm:text-lg 2xl:mt-10 2xl:max-w-3xl 2xl:text-xl"
      >
        {@html heroIntroHtml}
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
        {panelLabels.current}
      </p>
      <p
        class="font-lora text-ink dark:text-ink-dark flex flex-wrap items-baseline gap-x-2 text-base sm:text-lg 2xl:text-2xl"
      >
        {#if currentJobs.length === 0}
          <span class="italic text-rust dark:text-rust-soft">{jobSearchLabel}</span>
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
        {panelLabels.role}
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
        {panelLabels.stack}
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
        {panelLabels.contact}
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
