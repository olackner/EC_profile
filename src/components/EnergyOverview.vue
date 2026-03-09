<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const generationValue = computed(() => {
  if (props.data && props.data.length > 0 && props.data[0].s_prof_value) {
    return props.data[0].s_prof_value.prof_value
  }
  return 42.5
})
</script>


<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
    <div class="dashboard-card p-8 bg-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-leafy-green/10 rounded-full -mr-16 -mt-16"></div>
      <p class="text-leafy-green text-xs font-bold mb-4 uppercase tracking-widest">Generation</p>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-navy-blue">{{ generationValue }}</span>
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
        <span class="text-4xl font-bold text-navy-blue">18.2</span>
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
        <span class="text-4xl font-bold text-navy-blue">24.3</span>
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
        <span class="text-4xl font-bold text-navy-blue">8.8</span>
        <span class="text-orange-800 font-bold text-lg uppercase">kWh</span>
      </div>
      <div class="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">trending_down</span>
        <span>1.4% than average</span>
      </div>
    </div>
  </div>
</template>
