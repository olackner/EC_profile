<template>
  <header class="bg-white border-b border-border-light sticky top-0 z-50 px-6 py-4 lg:px-24">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-12">
        <div class="flex items-center gap-2 text-leafy-green">
          <span class="material-symbols-outlined text-3xl font-bold">eco</span>
          <h2 class="text-xl font-bold tracking-tight text-navy-blue">EnergyCommunity</h2>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a class="nav-link" href="#">Dashboard</a>
          <a class="nav-link nav-link-active" href="#">Details</a>
          <a class="nav-link" href="#">Marketplace</a>
          <a class="nav-link" href="#">Sustainability</a>
        </nav>
      </div>
      <div class="flex items-center gap-6">
        <div class="hidden sm:flex items-center bg-soft-gray rounded-full px-4 py-2 border border-border-light">
          <span class="material-symbols-outlined text-slate-400 text-sm">search</span>
          <input 
            class="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400 w-48" 
            placeholder="Search neighbors..." 
            type="text"
          />
        </div>
        <button class="relative p-2 text-slate-500 hover:text-navy-blue">
          <span class="material-symbols-outlined">notifications</span>
          <span class="absolute top-2 right-2 w-2 h-2 bg-sky-blue rounded-full"></span>
        </button>
        <div 
          class="h-10 w-10 rounded-full border border-border-light bg-cover bg-center shadow-sm"
          style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0Br49kjBn--op7r2soWsBXsqprN7rra2htDT3rN4Zhs3LvnsFmzubwVcq9177YpPYNuwmar6WSpcSSKS1jTIXn1kjiYTtFS3-2fyIU9rDIFUMnoBTvL61onhF28A0bl-viqoepV6UJmLDBzqi2y9Mu_yRQNRAAf6YM2Cj9XvzctOfAxoy-749hJQFZpYYPoGuz8wa3yGqe506Y-4XxAu5q3djxQ5-G2vMjvUwNmiSy0YLIHYGphnUnPb8MYG-XAoxdpUrMbMuMmBB')"
        ></div>
      </div>
    </div>
  </header>
</template>
