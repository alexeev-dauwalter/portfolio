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

  export let connectLinks: {
      href: string;
      label: string;
      handle: string;
      slug: string;
    }[] = [],
    connectLabel: string = 'connect',
    contactWaysHeader: string = 'Contacts',
    otherLocale: string = 'ru',
    otherLocaleHref: string = '/ru/';

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

<div
  class="sticky top-0 z-40 border-b border-transparent bg-cream/85 backdrop-blur-md dark:bg-cream-dark/85"
>
  <div
    class="mx-auto w-full max-w-[1280px] 2xl:max-w-[1440px] px-4 sm:px-8 2xl:px-12"
  >
    <div class="flex items-center justify-end gap-3 py-3 sm:gap-4 sm:py-4">
      <a
        href={otherLocaleHref}
        aria-label={`Switch language to ${otherLocale.toUpperCase()}`}
        class="font-jetbrains-mono text-2xs tracking-meta text-ink-soft hover:text-rust dark:text-ink-dark-soft dark:hover:text-rust-soft uppercase transition 2xl:text-sm"
      >
        {otherLocale}
      </a>
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
            <span
              class="block h-1.5 w-1.5 rounded-full bg-rust/80 dark:bg-rust-soft/80"
              aria-hidden="true"
            ></span>
            <span>{connectLabel}</span>
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
              class="absolute top-full right-0 z-20 mt-2 w-72 overflow-hidden rounded-md border border-ink/12 bg-cream shadow-lg shadow-ink/5 2xl:w-80 dark:border-ink-dark/20 dark:bg-cream-dark dark:shadow-black/30"
            >
              <p
                class="font-jetbrains-mono text-3xs tracking-meta text-muted border-b border-ink/8 px-4 pt-3 pb-2 uppercase 2xl:text-2xs dark:border-ink-dark/15 dark:text-ink-dark-soft"
              >
                {contactWaysHeader}
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
                      class="group/item hover:bg-cream-soft/70 dark:hover:bg-cream-dark-soft/60 flex items-baseline justify-between gap-4 px-4 py-2.5 transition"
                    >
                      <span class="flex min-w-0 flex-col gap-0.5">
                        <span
                          class="font-jetbrains-mono text-2xs tracking-meta text-ink group-hover/item:text-rust uppercase transition 2xl:text-xs dark:text-ink-dark dark:group-hover/item:text-rust-soft"
                        >
                          {label}
                        </span>
                        <span
                          class="font-lora text-ink-soft truncate text-sm italic 2xl:text-base dark:text-ink-dark-soft"
                        >
                          {handle}
                        </span>
                      </span>
                      <span
                        class="font-jetbrains-mono text-2xs text-muted/60 group-hover/item:translate-x-0.5 group-hover/item:text-rust shrink-0 transition dark:text-ink-dark-soft/60 dark:group-hover/item:text-rust-soft"
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
    </div>
  </div>
</div>
