<!-- Trust Badges Section -->
<template>
  <section class="py-12">
    <div class="container-luxe">
      <div class="grid md:grid-cols-4 gap-6">
        <div v-for="(badge, index) in badges"
             :key="badge.title"
             class="flex flex-col items-center text-center space-y-3 py-6 px-4 rounded-sm border border-white/5 hover:border-[#4a90d9]/30 transition-colors duration-300 reveal"
             :class="`reveal-delay-${(index % 4) + 1}`">
          
          <!-- Icon -->
          <div class="w-12 h-12 rounded-full bg-[#4a90d9]/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="badge.icon === 'verified'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <path v-else-if="badge.icon === 'award'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <path v-else-if="badge.icon === 'shield'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m7 0a10 10 0 11-20 0 10 10 0 0120 0z"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h-2m2 0h2m-2 0v2m0-2v-2m-2 0H10m2 0h2m0 8H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2z"/>
            </svg>
          </div>

          <!-- Content -->
          <div class="space-y-1">
            <p class="text-[#f5f5f7] font-display text-sm font-bold">{{ badge.title }}</p>
            <p class="text-[#8b8b9a] font-light text-xs">{{ badge.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const badges = ref([
  {
    icon: 'verified',
    title: 'RGPD Compliant',
    description: 'Données sécurisées et chiffrées'
  },
  {
    icon: 'award',
    title: 'ISO Certified',
    description: 'Processus qualifiés'
  },
  {
    icon: 'shield',
    title: 'HTTPS & SSL',
    description: 'Sécurité maximale'
  },
  {
    icon: 'checkmark',
    title: 'Support 24/7',
    description: 'Disponible pour vous'
  }
])
</script>