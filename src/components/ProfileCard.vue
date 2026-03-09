<script setup>
defineProps({
  ecData: {
    type: Object,
  }
})
</script>

<template>
  <div class="dashboard-card p-8 mb-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      <div class="flex items-center gap-8">
        <div class="relative">
          <div class="h-32 w-32 rounded-2xl bg-cover bg-center border border-border-light shadow-sm"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZCeJEtdlOWmGdbBCZpepapkarF-3ZuqtJZx4fBwMdpf0ePl8Hfk7BB_gfDy1hL2na9NfzWf1cdv9qFATY3J3e6Vb2WH4dWR1bye1UEApkJEnGPgbWA2cjZSL3KA3sU1gYFcKEiz0gGdxGQi4L7dUxlbOcMt02wLPju73wRffe0YkP2QJ4fUuIcHbgffjB4skCdDzhUXml5K856bG1hLfSBvllA1DKeRodIksRW7JbIENswqo-Q3wTBNQCwBvhjSq0c3Nqj1c1jyla')">
          </div>
          <div
            class="absolute -bottom-2 -right-2 bg-leafy-green text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm">
            Active
          </div>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-2">
            <h1 class="text-3xl font-bold text-navy-blue">EC-Id: #{{ ecData?.s_ec?.ec_id }}</h1>
          </div>
          <div class="flex items-center gap-3 mb-2">
            <h1 class="text-2xl font-bold text-navy-blue">Citizen Energy Community</h1>

          </div>
          <div class="flex flex-wrap gap-y-2 gap-x-6 text-slate-500 text-sm font-medium">
            <span class="flex items-center gap-1.5"><span
                class="material-symbols-outlined text-base">calendar_month</span>since 08.03.2026</span>
            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-base">input</span>12
              Generation PoDs</span>
            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-base">output</span>36
              Consumption PoDs</span>
          </div>
        </div>
      </div>
      <div class="flex bg-soft-gray p-1 rounded-xl border border-border-light">
        <button class="px-6 py-2 rounded-lg text-xs font-bold bg-white text-navy-blue shadow-sm">24H</button>
        <button class="px-6 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-navy-blue transition-colors">7
          Days</button>
        <button class="px-6 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-navy-blue transition-colors">30
          Days</button>
      </div>
    </div>
  </div>
</template>
