<!--
  Page Portfolio - Design Minimaliste Luxe
  Showcase des réalisations avec galerie interactive
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center">
      <div class="container-luxe py-32">
        <div class="max-w-4xl reveal">
          <span class="text-[#4a90d9] uppercase tracking-[0.3em] text-sm mb-6 block">
            Nos Réalisations
          </span>
          <h1 class="text-5xl md:text-7xl text-[#f5f5f7] leading-[0.9] mb-8">
            Portfolio<br>d'excellence
          </h1>
          <p class="text-xl text-[#8b8b9a] font-light max-w-2xl leading-relaxed">
            Nos projets illustrent notre approche du design et notre exigence technique.
            Chaque création est unique, sur-mesure, pensée pour performer.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="section-luxe border-t border-white/5">
      <div class="container-luxe">
        <div class="space-y-16">
          <!-- Filter/Info -->
          <div class="flex items-center justify-between reveal">
            <div>
              <p class="text-[#8b8b9a] text-sm">{{ projects.length }} projets affichés</p>
            </div>
            <div class="flex gap-2">
              <button 
                v-for="filter in filters"
                :key="filter"
                @click="activeFilter = filter"
                class="px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300"
                :class="activeFilter === filter 
                  ? 'bg-[#4a90d9] text-[#0a0a0f]' 
                  : 'border border-white/10 text-[#8b8b9a] hover:border-[#4a90d9]'">
                {{ filter }}
              </button>
            </div>
          </div>

          <!-- Gallery Grid with Lightbox -->
          <GalleryLightbox :images="filteredProjects" />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 border-t border-white/5 bg-[#12121a]">
      <div class="container-luxe">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          <div v-for="(stat, index) in stats" 
               :key="stat.label"
               class="bg-[#0a0a0f] p-12 text-center space-y-3 reveal"
               :class="`reveal-delay-${index + 1}`">
            <div class="text-4xl font-display text-[#f5f5f7]">
              <span :data-counter="stat.value">0</span>{{ stat.suffix }}
            </div>
            <div class="text-[#8b8b9a] uppercase tracking-widest text-xs">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="section-luxe">
      <div class="container-luxe">
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(testimonial, index) in testimonials"
               :key="index"
               class="bg-[#12121a] border border-white/10 p-8 space-y-6 hover:border-[#4a90d9]/30 transition-colors reveal"
               :class="`reveal-delay-${(index % 2) + 1}`">
            <div class="flex gap-1">
              <span v-for="n in 5" :key="n" class="text-[#4a90d9]">★</span>
            </div>
            <p class="text-[#f5f5f7] font-light leading-relaxed italic">
              "{{ testimonial.quote }}"
            </p>
            <div class="pt-4 border-t border-white/5">
              <p class="text-[#f5f5f7] font-display text-sm">{{ testimonial.author }}</p>
              <p class="text-[#8b8b9a] text-xs mt-1">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-luxe relative overflow-hidden">
      <div data-parallax="0.2" class="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 to-transparent"></div>
      <div class="container-luxe relative z-10">
        <div class="max-w-3xl mx-auto text-center space-y-8 reveal">
          <h2 class="text-4xl md:text-5xl text-[#f5f5f7]">
            Envie de créer ensemble ?
          </h2>
          <p class="text-xl text-[#8b8b9a] font-light">
            Parlons de votre projet. Première consultation gratuite.
          </p>
          <div class="pt-4">
            <NuxtLink to="/contact" class="btn-luxe text-lg px-12 py-4 shine">
              Démarrer un projet
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Portfolio | Nos réalisations',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos réalisations : sites web, e-commerce, applications. Projets sur-mesure de qualité.'
    }
  ]
})

const activeFilter = ref('Tous')
const filters = ref(['Tous', 'Site Vitrine', 'E-commerce', 'Application'])

const projects = ref([
  {
    title: 'Restaurant Le Négociant',
    category: 'Site Vitrine',
    description: 'Refonte complète avec réservation en ligne',
    thumb: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop',
    full: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=1200&fit=crop'
  },
  {
    title: 'E-shop Luxe Bordeaux',
    category: 'E-commerce',
    description: 'Boutique en ligne avec intégration Stripe',
    thumb: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    full: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1200&fit=crop'
  },
  {
    title: 'Agence Immobilière Digitale',
    category: 'Site Vitrine',
    description: 'Plateforme de recherche immobilière',
    thumb: 'https://images.unsplash.com/photo-1460925895917-aaf4b91c7670?w=800&h=600&fit=crop',
    full: 'https://images.unsplash.com/photo-1460925895917-aaf4b91c7670?w=1600&h=1200&fit=crop'
  },
  {
    title: 'Dashboard Analytics',
    category: 'Application',
    description: 'Tableau de bord en temps réel',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    full: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1200&fit=crop'
  },
  {
    title: 'Plateforme SaaS',
    category: 'Application',
    description: 'Solution collaborative multi-utilisateurs',
    thumb: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    full: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=1200&fit=crop'
  },
  {
    title: 'Magazine Digital',
    category: 'Site Vitrine',
    description: 'Plateforme éditoriale avec abonnement',
    thumb: 'https://images.unsplash.com/photo-1553744512-d4526485b79f?w=800&h=600&fit=crop',
    full: 'https://images.unsplash.com/photo-1553744512-d4526485b79f?w=1600&h=1200&fit=crop'
  }
])

const stats = ref([
  { value: 50, suffix: '+', label: 'Projets' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
  { value: 5, suffix: '+', label: 'Années' },
  { value: 24, suffix: 'h', label: 'Support' }
])

const testimonials = ref([
  {
    quote: 'Agence professionnelle, réactive et compétente. Notre site a transformé nos ventes.',
    author: 'Marie Dubois',
    company: 'Restaurant Étoilé'
  },
  {
    quote: 'Excellent suivi, délais respectés, résultats visibles. À recommander.',
    author: 'Jean Moreau',
    company: 'E-commerce Luxe'
  },
  {
    quote: 'L\'équipe comprend notre métier et nous propose des solutions innovantes.',
    author: 'Sophie Martin',
    company: 'Agence Immobilière'
  },
  {
    quote: 'Support réactif, migrations fluides, performances optimales. Parfait !',
    author: 'Laurent Petit',
    company: 'Startup Tech'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects.value
  return projects.value.filter(p => p.category === activeFilter.value)
})

onMounted(() => {
  const { initScrollReveal } = useScrollReveal()
  const { initCounters } = useAnimatedCounter()
  const { initParallax } = useParallax()
  
  initScrollReveal()
  initCounters()
  initParallax()
})
</script>