<template>
  <div class="dashboard-card p-8 mb-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      <div class="flex items-center gap-8">
        <div class="relative">
          <div 
            class="h-32 w-32 rounded-2xl bg-cover bg-center border border-border-light shadow-sm"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZCeJEtdlOWmGdbBCZpepapkarF-3ZuqtJZx4fBwMdpf0ePl8Hfk7BB_gfDy1hL2na9NfzWf1cdv9qFATY3J3e6Vb2WH4dWR1bye1UEApkJEnGPgbWA2cjZSL3KA3sU1gYFcKEiz0gGdxGQi4L7dUxlbOcMt02wLPju73wRffe0YkP2QJ4fUuIcHbgffjB4skCdDzhUXml5K856bG1hLfSBvllA1DKeRodIksRW7JbIENswqo-Q3wTBNQCwBvhjSq0c3Nqj1c1jyla')"
          ></div>
          <div class="absolute -bottom-2 -right-2 bg-leafy-green text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm">
            Premium
          </div>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-2">
            <h1 class="text-3xl font-bold text-navy-blue">Citizen Energy Community</h1>
            <span class="material-symbols-outlined text-sky-blue" title="Verified Community Member">verified</span>
          </div>
          <div class="flex flex-wrap gap-y-2 gap-x-6 text-slate-500 text-sm font-medium">
            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-base">location_on</span> Berlin, Germany</span>
            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-base">energy_savings_leaf</span> Member since 2022</span>
            <span class="flex items-center gap-1.5 text-leafy-green font-bold"><span class="material-symbols-outlined text-base">star</span> Top Contributor</span>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <button class="px-8 py-3 bg-white border border-border-light rounded-xl font-bold text-sm text-navy-blue hover:bg-soft-gray transition-all shadow-sm">Message</button>
        <button class="px-8 py-3 bg-navy-blue text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-md">Follow Community</button>
      </div>
    </div>
  </div>
</template>
