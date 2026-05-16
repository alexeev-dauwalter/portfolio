<script lang="ts" module>
  const svgModules = import.meta.glob('../assets/*.svg', {
    eager: true,
    query: '?raw',
    import: 'default'
  }) as Record<string, string>;

  const svgMap: Record<string, string> = {};
  for (const [path, raw] of Object.entries(svgModules)) {
    const name = path.split('/').pop()?.replace(/\.svg$/, '').toLowerCase();
    if (name) svgMap[name] = raw;
  }

  const slugAliases: Record<string, string> = {
    vuedotjs: 'vuejs',
    nextdotjs: 'nextjs',
    nodedotjs: 'nodejs',
    cplusplus: 'cpp',
    openjdk: 'java',
    apachetomcat: 'tomcat',
    intellijidea: 'intellij',
    gnubash: 'zsh',
    visualstudiocode: 'vscode',
    warp: 'warpterminal'
  };

  function lookup(slug: string | undefined): string | undefined {
    if (!slug) return undefined;
    const key = slug.toLowerCase();
    return svgMap[key] ?? svgMap[slugAliases[key] ?? ''];
  }
</script>

<script lang="ts">
  export let slug: string,
    title: string = '',
    size: number = 24;

  $: svg = lookup(slug);
  $: monogram = title
    ? title.replace(/[^a-zA-Zа-яА-Я0-9+#.]/g, '').slice(0, 2)
    : '?';
</script>

{#if svg}
  <span
    class="inline-flex shrink-0 items-center justify-center"
    style="width: {size}px; height: {size}px;"
    role="img"
    aria-label={title || slug}
  >
    {@html svg}
  </span>
{:else}
  <span
    class="inline-flex shrink-0 items-center justify-center rounded-sm border border-current/30 font-jetbrains-mono text-3xs leading-none font-medium uppercase select-none"
    style="width: {size}px; height: {size}px;"
    aria-label={title || slug}
  >
    {monogram}
  </span>
{/if}

<style>
  span :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
