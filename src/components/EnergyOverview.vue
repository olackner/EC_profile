<script setup>
import { computed } from 'vue'

const props = defineProps({
  ecData: {
    type: Object,
    default: () => ({})
  }
})

const stats = computed(() => {
  const gStr = props.ecData?.s_ec?.g_values?.[0] || ""
  const cStr = props.ecData?.s_ec?.c_values?.[0] || ""

  const gArr = gStr ? gStr.split(',').map(Number) : []
  const cArr = cStr ? cStr.split(',').map(Number) : []

  let generation = 0
  let consumption = 0
  let surplus = 0
  let residual = 0

  const length = Math.max(gArr.length, cArr.length)

  for (let i = 0; i < length; i++) {
    const valG = gArr[i] || 0
    const valC = cArr[i] || 0

    generation += valG
    consumption += valC

    if (valG > valC) {
      surplus += (valG - valC)
    } else {
      residual += (valC - valG)
    }
  }

  return {
    generation: (generation / 4).toFixed(2),
    consumption: (consumption / 4).toFixed(2),
    surplus: (surplus / 4).toFixed(2),
    residual: (residual / 4).toFixed(2)
  }
})
</script>


<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-leafy-green/10 rounded-full -mr-16 -mt-16"></div>
      <p class="text-leafy-green text-xs font-bold mb-4 uppercase tracking-widest">Generation</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">{{ stats.generation }}</span>
        <span class="text-leafy-green font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">trending_up</span>
        <span>12.4% than average</span>
      </div>
    </div>

    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-sky-blue/10 rounded-full -mr-16 -mt-16"></div>
      <p class="text-sky-blue text-xs font-bold mb-4 uppercase tracking-widest">Consumption</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">{{ stats.consumption }}</span>
        <span class="text-sky-blue font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">trending_down</span>
        <span>4.8% than average</span>
      </div>
    </div>

    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-800/10 rounded-full -mr-16 -mt-16"></div>
      <p class="text-green-800 text-xs font-bold mb-4 uppercase tracking-widest">Generation Surplus</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">{{ stats.surplus }}</span>
        <span class="text-green-800 font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">trending_up</span>
        <span>28.5% than average</span>
      </div>
    </div>

    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-orange-800/10 rounded-full -mr-16 -mt-16"></div>
      <p class="text-orange-800 text-xs font-bold mb-4 uppercase tracking-widest">Grid Residual</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">{{ stats.residual }}</span>
        <span class="text-orange-800 font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">trending_down</span>
        <span>1.4% than average</span>
      </div>
    </div>
  </div>
</template>
