<script setup>
import { ref, onMounted } from 'vue'
import ProfileHeader from './components/ProfileHeader.vue'
import ProfileCard from './components/ProfileCard.vue'
import EnergyOverview from './components/EnergyOverview.vue'
import EnergyChart from './components/EnergyChart.vue'
import ImpactSummary from './components/ImpactSummary.vue'
import { ec_data_get } from './services/api.js'

const ecId = ref(null)
const dateFrom = ref(null)
const dateTo = ref(null)
const isLoading = ref(true)
const ecData = ref(null)

onMounted(async () => {
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  ecId.value = urlParams.get('ec_id')
  dateFrom.value = urlParams.get('date_from')
  dateTo.value = urlParams.get('date_to')

  try {
    // Fetch data using the parsed parameters
    ecData.value = await ec_data_get(ecId.value, dateFrom.value, dateTo.value)
    console.log('Successfully fetched EC data:', ecData.value)
  } catch (error) {
    console.error('Failed to fetch EC data:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col">
    <ProfileHeader />
    
    <main class="flex-1 max-w-7xl mx-auto w-full px-6 py-10 lg:px-24">
      <div class="flex items-center gap-2 mb-8 text-sm font-medium text-slate-400 uppercase tracking-wide">
        <a class="hover:text-navy-blue" href="#">Dashboard</a>
        <span class="material-symbols-outlined text-xs">chevron_right</span>
        <span class="text-navy-blue">Energy Community Details</span>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <p class="text-slate-400 font-medium">Loading Energy Community Data...</p>
      </div>
      <div v-else>
        <ProfileCard :data="ecData" />
        <EnergyOverview :data="ecData" />
        <EnergyChart :data="ecData" />
        <ImpactSummary :data="ecData" />
      </div>
    </main>

    <footer class="bg-white border-t border-border-light py-10 px-6 lg:px-24 mt-10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2 text-slate-400">
          <span class="material-symbols-outlined text-xl">eco</span>
          <span class="font-bold text-sm">Energy Data Services</span>
        </div>
        <div class="flex gap-10 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <a class="hover:text-navy-blue" href="#">Privacy Policy</a>
          <a class="hover:text-navy-blue" href="#">Terms of Service</a>
          <a class="hover:text-navy-blue" href="#">Network Security</a>
        </div>
        <p class="text-slate-400 text-xs font-medium">© 2026 eQuanticum • Energy Data Services</p>
      </div>
    </footer>
  </div>
</template>
