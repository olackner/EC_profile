<script setup>
import ProfileHeader from './components/ProfileHeader.vue'
import ProfileCard from './components/ProfileCard.vue'
import EnergyOverview from './components/EnergyOverview.vue'
import EnergyChart from './components/EnergyChart.vue'
import ImpactSummary from './components/ImpactSummary.vue'
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

      <ProfileCard />
      <EnergyOverview />
      <EnergyChart />
      <ImpactSummary />
    </main>

    <footer class="bg-white border-t border-border-light py-10 px-6 lg:px-24 mt-10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2 text-slate-400">
          <span class="material-symbols-outlined text-xl">eco</span>
          <span class="font-bold text-sm">EnergyCommunity</span>
        </div>
        <div class="flex gap-10 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <a class="hover:text-navy-blue" href="#">Privacy Policy</a>
          <a class="hover:text-navy-blue" href="#">Terms of Service</a>
          <a class="hover:text-navy-blue" href="#">Network Security</a>
        </div>
        <p class="text-slate-400 text-xs font-medium">© 2024 Energy Dynamics • Community First</p>
      </div>
    </footer>
  </div>
</template>
