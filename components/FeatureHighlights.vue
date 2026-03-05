<!-- Feature Highlights -->
<template>
  <section class="section-luxe">
    <div class="container-luxe">
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features"
             :key="feature.title"
             class="space-y-4 reveal"
             :class="`reveal-delay-${(index % 3) + 1}`">
          
          <!-- Icon -->
          <div class="w-14 h-14 rounded-sm border border-[#4a90d9]/30 flex items-center justify-center group hover:border-[#4a90d9] hover:bg-[#4a90d9]/5 transition-all duration-300">
            <div class="w-8 h-8 flex items-center justify-center text-[#4a90d9]">
              <svg v-if="feature.icon === 'lightning'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <svg v-else-if="feature.icon === 'shield'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <svg v-else-if="feature.icon === 'rocket'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-2">
            <h3 class="text-xl text-[#f5f5f7] font-display">{{ feature.title }}</h3>
            <p class="text-[#8b8b9a] font-light leading-relaxed">{{ feature.description }}</p>
          </div>

          <!-- Link -->
          <NuxtLink 
            v-if="feature.link"
            :to="feature.link"
            class="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#f5f5f7] transition-colors duration-300 text-sm uppercase tracking-widest pt-2">
            En savoir plus
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = ref([
  {
    icon: 'lightning',
    title: 'Haute Performance',
    description: 'Sites ultra-rapides optimisés pour les Core Web Vitals. Lighthouse 95+.',
    link: null
  },
  {
    icon: 'shield',
    title: 'Sécurité Totale',
    description: 'RGPD compliant, HTTPS, protection contre les attaques. Hébergement France.',
    link: null
  },
  {
    icon: 'rocket',
    title: 'Évolutif',
    description: 'Architecture moderne, code maintenable. Prêt pour la croissance future.',
    link: null
  }
])
</script>