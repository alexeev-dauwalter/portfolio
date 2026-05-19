<script lang="ts">
  export let year: number,
    title: string,
    description: string = '',
    bullets: string[] = [],
    isLast: boolean = false;
</script>

<article
  class="grid gap-x-6 sm:grid-cols-[5rem_auto_1fr] 2xl:grid-cols-[6rem_auto_1fr] 2xl:gap-x-10"
>
  <time
    class="pt-1 font-jetbrains-mono text-base text-ink tabular-nums sm:text-lg 2xl:text-xl dark:text-ink-dark"
  >
    {year}
  </time>
  <div class="relative flex flex-col items-center pt-2.5">
    <span
      class="block h-2 w-2 shrink-0 rounded-full bg-rust dark:bg-rust-soft"
    ></span>
    {#if !isLast}
      <span class="mt-1 w-px flex-1 bg-ink/15 dark:bg-ink-dark/20"></span>
    {/if}
  </div>
  <div class="space-y-1 pb-8 2xl:pb-12">
    <h3
      class="font-inter text-base font-medium text-ink sm:text-lg 2xl:text-xl dark:text-ink-dark"
    >
      {title}
    </h3>
    {#if description}
      <p
        class="text-sm leading-relaxed text-ink-soft sm:text-base 2xl:text-lg dark:text-ink-dark-soft"
      >
        {description}
      </p>
    {/if}
    {#if bullets.length > 0}
      <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-soft sm:text-base 2xl:text-lg dark:text-ink-dark-soft">
        {#each bullets as bullet}
          <li class="flex gap-2.5">
            <span
              class="flex h-[1.625em] shrink-0 items-center"
              aria-hidden="true"
            >
              <span class="block h-1 w-1 rounded-full bg-rust/70 dark:bg-rust-soft/70"></span>
            </span>
            <span>{bullet}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</article>
