<!-- Pricing Carousel - Cards with peek effect -->
<template>
  <section class="section-luxe overflow-hidden">
    <div class="container-luxe">
      <div class="space-y-12">
        <!-- Header -->
        <div class="max-w-2xl mx-auto text-center space-y-4 reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Tarifs</span>
          <h2 class="text-[#f5f5f7]">Investissement transparent</h2>
        </div>

        <!-- Carousel container -->
        <div class="relative reveal reveal-delay-2">
          <!-- Navigation buttons -->
          <button 
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#12121a] border border-white/10 flex items-center justify-center hover:border-[#4a90d9] transition-colors"
          >
            <svg class="w-5 h-5 text-[#f5f5f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button 
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#12121a] border border-white/10 flex items-center justify-center hover:border-[#4a90d9] transition-colors"
          >
            <svg class="w-5 h-5 text-[#f5f5f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Cards container with peek effect -->
          <div class="px-16 overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-out"
              :style="{ transform: `translateX(calc(-${currentSlide * 33.333}% + 33.333% / 2))` }"
            >
              <div 
                v-for="(plan, index) in plans" 
                :key="plan.name"
                class="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div 
                  class="h-full p-6 rounded-sm border transition-all duration-300"
                  :class="[
                    currentSlide === index 
                      ? 'border-[#4a90d9] bg-gradient-to-b from-[#1e3a5f]/10 to-[#0a0a0f] scale-100 opacity-100' 
                      : 'border-white/5 bg-[#12121a] scale-95 opacity-60'
                  ]"
                >
                  <!-- Featured badge -->
                  <div v-if="plan.featured" class="mb-4">
                    <span class="bg-gradient-to-r from-[#1e3a5f] to-[#4a90d9] px-3 py-1 rounded-full text-white text-xs uppercase tracking-widest">Populaire</span>
                  </div>

                  <h3 class="text-xl text-[#f5f5f7] font-display mb-1">{{ plan.name }}</h3>
                  <p class="text-[#8b8b9a] text-sm mb-4">{{ plan.description }}</p>

                  <div class="mb-6">
                    <span class="text-3xl font-display text-[#f5f5f7]">{{ plan.price }}€</span>
                    <p class="text-[#8b8b9a] text-xs mt-1">{{ plan.period }}</p>
                  </div>

                  <ul class="space-y-2 mb-6">
                    <li v-for="feature in plan.features.slice(0, 4)" :key="feature" class="flex items-start gap-2 text-sm text-[#f5f5f7]">
                      <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span class="font-light">{{ feature }}</span>
                    </li>
                  </ul>

                  <NuxtLink 
                    to="/contact"
                    :class="currentSlide === index ? 'btn-luxe w-full text-center block' : 'w-full block py-3 border border-white/20 text-center text-[#f5f5f7] hover:border-[#4a90d9]'"
                  >
                    Choisir
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Dots indicator -->
          <div class="flex justify-center gap-2 mt-6">
            <button 
              v-for="(plan, index) in plans" 
              :key="index"
              @click="currentSlide = index"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentSlide === index ? 'bg-[#4a90d9] w-6' : 'bg-white/20 hover:bg-white/40'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentSlide = ref(1) // Start with middle card

const plans = ref([
  {
    name: 'Vitrine',
    description: 'Parfait pour se lancer',
    price: 2500,
    period: 'Projet unique',
    features: [
      'Site 5 à 10 pages',
      'Design responsive',
      'SEO basique',
      '3 mois de support',
      'Hébergement inclus',
      'SSL & RGPD'
    ],
    featured: false
  },
  {
    name: 'E-commerce',
    description: 'Pour vendre en ligne',
    price: 5500,
    period: 'Projet unique',
    features: [
      'Catalogue illimité',
      'Panier & paiement Stripe',
      'Gestion commandes',
      'Email marketing',
      'Analytics avancé',
      '6 mois de support'
    ],
    featured: true
  },
  {
    name: 'Custom',
    description: 'Pour les ambitieux',
    price: 'Sur devis',
    period: 'Selon projet',
    features: [
      'Architecture sur-mesure',
      'API & intégrations',
      'Dashboard admin',
      'Multi-langue',
      'Support prioritaire',
      'Infrastructure Cloud'
    ],
    featured: false
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % plans.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + plans.value.length) % plans.value.length
}

// Auto-play
let autoplayInterval
onMounted(() => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>