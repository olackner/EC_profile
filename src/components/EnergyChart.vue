<script setup>
import { ref } from 'vue'

const hours = ref([
  { label: '00:00', generation: 18, consumption: 35 },
  { label: '01:00', generation: 16, consumption: 32 },
  { label: '02:00', generation: 14, consumption: 30 },
  { label: '03:00', generation: 13, consumption: 28 },
  { label: '04:00', generation: 12, consumption: 25 },
  { label: '05:00', generation: 25, consumption: 27 },
  { label: '06:00', generation: 38, consumption: 30 },
  { label: '07:00', generation: 52, consumption: 32 },
  { label: '08:00', generation: 65, consumption: 30 },
  { label: '09:00', generation: 70, consumption: 29 },
  { label: '10:00', generation: 75, consumption: 28 },
  { label: '11:00', generation: 80, consumption: 27 },
  { label: '12:00', generation: 85, consumption: 28 },
  { label: '13:00', generation: 88, consumption: 29 },
  { label: '14:00', generation: 90, consumption: 30 },
  { label: '15:00', generation: 93, consumption: 31 },
  { label: '16:00', generation: 95, consumption: 32 },
  { label: '17:00', generation: 82, consumption: 34 },
  { label: '18:00', generation: 70, consumption: 36 },
  { label: '19:00', generation: 58, consumption: 38 },
  { label: '20:00', generation: 45, consumption: 40 },
  { label: '21:00', generation: 35, consumption: 38 },
  { label: '22:00', generation: 25, consumption: 35 },
  { label: '23:59', generation: 15, consumption: 30 }
])

// For a full 24h chart, we can generate mock data for missing hours if needed
// but let's stick to the design's specific points for now.
</script>

<template>
  <div class="dashboard-card p-10 mb-10">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div>
        <h3 class="text-2xl font-bold text-navy-blue">24-Hour Activity</h3>
        <p class="text-slate-400 text-sm mt-1">Comparing clean energy generation vs household consumption</p>
      </div>
      <div class="flex bg-soft-gray p-1 rounded-xl border border-border-light">
        <button class="px-6 py-2 rounded-lg text-xs font-bold bg-white text-navy-blue shadow-sm">24H</button>
        <button class="px-6 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-navy-blue transition-colors">7 Days</button>
        <button class="px-6 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-navy-blue transition-colors">30 Days</button>
      </div>
    </div>

    <div class="relative h-96 w-full flex flex-col justify-end">
      <!-- Chart Area -->
      <div class="ml-16 flex items-end justify-between h-[300px] gap-1 md:gap-2 relative border-b border-l border-border-light mb-8">
        <!-- Y-Axis Labels (now absolute to the chart area) -->
        <div class="absolute right-full top-0 bottom-0 flex flex-col justify-between text-[11px] text-slate-400 font-bold pr-4 pointer-events-none">
          <div class="h-0 flex items-center justify-end"><span class="-translate-y-2">100kWh</span></div>
          <div class="h-0 flex items-center justify-end"><span class="-translate-y-2">80kWh</span></div>
          <div class="h-0 flex items-center justify-end"><span class="-translate-y-2">60kWh</span></div>
          <div class="h-0 flex items-center justify-end"><span class="-translate-y-2">40kWh</span></div>
          <div class="h-0 flex items-center justify-end"><span class="-translate-y-2">20kWh</span></div>
          <div class="h-0 flex items-center justify-end"><span class="-translate-y-2">0kWh</span></div>
        </div>

        <!-- Horizontal Grid Lines -->
        <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div class="w-full border-t border-border-light/50 h-0"></div>
          <div class="w-full border-t border-border-light/50 h-0"></div>
          <div class="w-full border-t border-border-light/50 h-0"></div>
          <div class="w-full border-t border-border-light/50 h-0"></div>
          <div class="w-full border-t border-border-light/50 h-0"></div>
          <div class="h-0"></div> <!-- Bottom line is handled by border-b -->
        </div>

        <div v-for="(hour, index) in hours" :key="hour.label" class="flex flex-col items-center flex-1 h-full justify-end relative group">
          <div class="flex items-end justify-center w-full h-full gap-[1px]">
            <!-- Generation Bar (Green) -->
            <div 
              class="flex-1 bg-leafy-green rounded-t-[1px] z-10 transition-all duration-500 flex items-center justify-center overflow-hidden hover:brightness-110 cursor-help min-w-[4px]" 
              :style="{ height: hour.generation + '%' }"
              :title="`Generation: ${hour.generation}kWh`"
            >
              <span class="text-[7px] md:text-[8px] font-bold text-white leading-none rotate-270 md:rotate-0 mb-1 pointer-events-none">{{ hour.generation }}</span>
            </div>
            <!-- Consumption Bar (Blue) -->
            <div 
              class="flex-1 bg-[#D1EEFD] rounded-t-[1px] transition-all duration-500 flex items-center justify-center overflow-hidden hover:brightness-105 cursor-help min-w-[4px]" 
              :style="{ height: hour.consumption + '%' }"
              :title="`Consumption: ${hour.consumption}kWh`"
            >
              <span class="text-[7px] md:text-[8px] font-bold text-navy-blue leading-none rotate-270 md:rotate-0 mb-1 pointer-events-none">{{ hour.consumption }}</span>
            </div>
          </div>
          <span v-if="index % 4 === 0 || index === hours.length - 1" class="absolute -bottom-6 text-[9px] text-slate-400 font-bold whitespace-nowrap">{{ hour.label }}</span>
        </div>
      </div>

      <!-- Legend -->
      <div class="flex flex-wrap items-center justify-between ml-16">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded bg-leafy-green"></div>
            <span class="text-xs font-bold text-navy-blue">Solar Generation</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded bg-[#D1EEFD]"></div>
            <span class="text-xs font-bold text-navy-blue">Total Consumption</span>
          </div>
        </div>
        <div class="flex items-center gap-2 text-slate-400 text-[10px] font-medium uppercase tracking-wider">
          <span class="material-symbols-outlined text-sm">info</span>
          <span>Updates every 15 minutes</span>
        </div>
      </div>
    </div>
  </div>
</template>
