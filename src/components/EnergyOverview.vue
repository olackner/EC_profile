<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-leafy-green/5 rounded-full -mr-16 -mt-16"></div>
      <p class="text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">Generation</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">42.5</span>
        <span class="text-leafy-green font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-leafy-green text-sm font-bold">
        <span class="material-symbols-outlined text-lg">trending_up</span>
        <span>12.4% better than average</span>
      </div>
    </div>

    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-sky-blue/5 rounded-full -mr-16 -mt-16"></div>
      <p class="text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">Consumption</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">18.2</span>
        <span class="text-sky-blue font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">check_circle</span>
        <span>Optimized efficiency</span>
      </div>
    </div>

    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full -mr-16 -mt-16"></div>
      <p class="text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">Net Exchange</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">24.3</span>
        <span class="text-slate-400 font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">arrow_forward</span>
        <span>Surplus shared with neighbors</span>
      </div>
    </div>
  </div>
</template>
