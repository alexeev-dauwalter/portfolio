<script lang="ts">
  import { getIcon } from './icons';

  export let slug: string;
  export let title: string = '';
  export let size: number = 24;

  $: icon = getIcon(slug);
  $: monogram = title
    ? title.replace(/[^a-zA-Zа-яА-Я0-9+#.]/g, '').slice(0, 2)
    : '?';
</script>

{#if icon}
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-label={title || slug}
    fill="currentColor"
  >
    <path d={icon.path} />
  </svg>
{:else}
  <span
    class="inline-flex shrink-0 items-center justify-center rounded-sm border border-current/30 text-[0.55em] leading-none font-medium uppercase select-none"
    style="width: {size}px; height: {size}px;"
    aria-label={title || slug}
  >
    {monogram}
  </span>
{/if}
