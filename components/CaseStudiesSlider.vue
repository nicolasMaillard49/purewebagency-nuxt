<!-- Case Studies Slider -->
<template>
  <section class="section-luxe">
    <div class="container-luxe">
      <div class="space-y-16">
        <!-- Header -->
        <div class="max-w-2xl reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Cas d'étude</span>
          <h2 class="text-[#f5f5f7] mt-4">
            Les réussites<br>de nos clients
          </h2>
        </div>

        <!-- Case Studies Carousel -->
        <div class="reveal reveal-delay-2">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Image/Content -->
            <div class="space-y-6">
              <div class="bg-gradient-to-br from-[#1e3a5f]/30 to-[#4a90d9]/10 rounded-sm aspect-video flex items-center justify-center border border-white/5">
                <div class="text-6xl font-display text-[#4a90d9]/40">{{ currentStudy.initials }}</div>
              </div>

              <!-- Meta -->
              <div class="flex items-center gap-6 text-sm">
                <span class="text-[#4a90d9] uppercase tracking-widest">{{ currentStudy.category }}</span>
                <span class="text-[#5a5a6a]">{{ currentStudy.duration }}</span>
              </div>
            </div>

            <!-- Details -->
            <div class="space-y-8">
              <div class="space-y-4">
                <h3 class="text-4xl text-[#f5f5f7] font-display">{{ currentStudy.title }}</h3>
                <p class="text-lg text-[#8b8b9a] font-light leading-relaxed">
                  {{ currentStudy.description }}
                </p>
              </div>

              <!-- Metrics -->
              <div class="grid grid-cols-2 gap-6">
                <div class="space-y-2">
                  <div class="text-3xl font-display text-[#f5f5f7]">{{ currentStudy.metric1.value }}</div>
                  <p class="text-[#8b8b9a] text-sm">{{ currentStudy.metric1.label }}</p>
                </div>
                <div class="space-y-2">
                  <div class="text-3xl font-display text-[#f5f5f7]">{{ currentStudy.metric2.value }}</div>
                  <p class="text-[#8b8b9a] text-sm">{{ currentStudy.metric2.label }}</p>
                </div>
              </div>

              <!-- Stack -->
              <div class="space-y-3">
                <p class="text-[#f5f5f7] font-display text-sm uppercase tracking-widest">Stack technique</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in currentStudy.stack" 
                        :key="tech"
                        class="px-3 py-1.5 bg-[#12121a] border border-white/10 text-[#f5f5f7] text-xs rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Navigation -->
              <div class="flex items-center gap-4 pt-4">
                <button 
                  @click="previousStudy"
                  class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#4a90d9] text-[#f5f5f7] hover:text-[#4a90d9] transition-all duration-300">
                  ←
                </button>
                
                <div class="flex gap-2">
                  <button 
                    v-for="(study, index) in caseStudies"
                    :key="index"
                    @click="currentIndex = index"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentIndex === index ? 'bg-[#4a90d9] w-8' : 'bg-white/20 hover:bg-white/40'">
                  </button>
                </div>
                
                <button 
                  @click="nextStudy"
                  class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#4a90d9] text-[#f5f5f7] hover:text-[#4a90d9] transition-all duration-300">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentIndex = ref(0)

const caseStudies = ref([
  {
    initials: 'RLN',
    title: 'Restaurant Le Négociant',
    category: 'Refonte de site',
    duration: '8 semaines',
    description: 'Refonte complète du site d\'un restaurant gastronomique. Nouvelle identité visuelle, réservation en ligne, menu digitalisé. Résultat : +60% de visiteurs, +35% de réservations en ligne.',
    metric1: { value: '+60%', label: 'Trafic' },
    metric2: { value: '+35%', label: 'Réservations' },
    stack: ['Nuxt 3', 'Tailwind', 'Node.js', 'PostgreSQL', 'Stripe']
  },
  {
    initials: 'ELD',
    title: 'E-shop Luxe Bordeaux',
    category: 'Plateforme e-commerce',
    duration: '12 semaines',
    description: 'Création d\'une boutique en ligne premium. Intégration Stripe, gestion des stocks, email marketing. Objectif atteint : chiffre d\'affaires multiplié par 3 en 6 mois.',
    metric1: { value: 'x3', label: 'Chiffre d\'affaires' },
    metric2: { value: '45%', label: 'Conversion rate' },
    stack: ['Vue 3', 'Nuxt', 'Firebase', 'Stripe', 'SendGrid']
  },
  {
    initials: 'AIM',
    title: 'Agence Immobilière',
    category: 'Plateforme de recherche',
    duration: '10 semaines',
    description: 'Développement d\'une plateforme immobilière avec moteur de recherche avancé, galeries 3D et notifications. Augmentation des leads qualifiés.',
    metric1: { value: '+150%', label: 'Leads' },
    metric2: { value: '8.5/10', label: 'Score SEO' },
    stack: ['React', 'Next.js', 'Map API', 'WebGL', 'Redis']
  }
])

const currentStudy = computed(() => caseStudies.value[currentIndex.value])

const nextStudy = () => {
  currentIndex.value = (currentIndex.value + 1) % caseStudies.value.length
}

const previousStudy = () => {
  currentIndex.value = (currentIndex.value - 1 + caseStudies.value.length) % caseStudies.value.length
}
</script>