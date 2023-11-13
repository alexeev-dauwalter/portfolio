<script>
  export let name = '',
      color = '';

  const colors = {
    neutral: 'bg-neutral-500/60 border-neutral-500 hover:shadow-neutral-500',
    red: 'bg-red-500/60 border-red-500 hover:shadow-red-500',
    orange: 'bg-orange-500/60 border-orange-500 hover:shadow-orange-500',
    amber: 'bg-amber-500/60 border-amber-500 hover:shadow-amber-500',
    yellow: 'bg-yellow-500/60 border-yellow-500 hover:shadow-yellow-500',
    lime: 'bg-lime-500/60 border-lime-500 hover:shadow-lime-500',
    green: 'bg-green-500/60 border-green-500 hover:shadow-green-500',
    emerald: 'bg-emerald-500/60 border-emerald-500 hover:shadow-emerald-500',
    teal: 'bg-teal-500/60 border-teal-500 hover:shadow-teal-500',
    cyan: 'bg-cyan-500/60 border-cyan-500 hover:shadow-cyan-500',
    sky: 'bg-sky-500/60 border-sky-500 hover:shadow-sky-500',
    blue: 'bg-blue-500/60 border-blue-500 hover:shadow-blue-500',
    indigo: 'bg-indigo-500/60 border-indigo-500 hover:shadow-indigo-500',
    violet: 'bg-violet-500/60 border-violet-500 hover:shadow-violet-500',
    purple: 'bg-purple-500/60 border-purple-500 hover:shadow-purple-500',
    fuchsia: 'bg-fuchsia-500/60 border-fuchsia-500 hover:shadow-fuchsia-500',
    pink: 'bg-pink-500/60 border-pink-500 hover:shadow-pink-500',
    rose: 'bg-rose-500/60 border-rose-500 hover:shadow-rose-500'
  };
</script>

<span
    class={`${colors[color]} inline-block px-2 py-1 rounded border hover:shadow-md select-none duration-100`}>{name}</span>