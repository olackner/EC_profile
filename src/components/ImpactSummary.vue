<script setup>
defineProps({
  data: {
    type: Array,
    default: () => null
  }
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="dashboard-card p-8 flex items-center gap-8">
      <div class="w-16 h-16 rounded-2xl bg-leafy-green/10 text-leafy-green flex items-center justify-center">
        <span class="material-symbols-outlined text-3xl">battery_charging_full</span>
      </div>
      <div class="flex-1">
        <h4 class="text-base font-bold text-navy-blue mb-2">Storage Capacity</h4>
        <div class="w-full bg-soft-gray rounded-full h-2 mb-3 border border-border-light">
          <div class="bg-leafy-green h-full rounded-full w-[88%]"></div>
        </div>
        <div class="flex justify-between items-center text-xs font-bold">
          <span class="text-leafy-green">88% Charged</span>
          <span class="text-slate-400 font-medium">12.4kWh ready</span>
        </div>
      </div>
    </div>

    <div class="dashboard-card p-8 flex items-center gap-8">
      <div class="w-16 h-16 rounded-2xl bg-sky-blue/10 text-sky-blue flex items-center justify-center">
        <span class="material-symbols-outlined text-3xl">energy_savings_leaf</span>
      </div>
      <div>
        <h4 class="text-base font-bold text-navy-blue mb-1">Impact This Month</h4>
        <p class="text-2xl font-bold text-navy-blue">4.2 <span class="text-sm font-medium text-slate-400">Tons CO2 saved</span></p>
        <p class="text-sky-blue text-[11px] font-bold flex items-center gap-1.5 mt-2">
          <span class="material-symbols-outlined text-base">psychology</span>
          <span>Better than 92% of local members</span>
        </p>
      </div>
    </div>
  </div>
</template>
