<!--
  Pure Web Agency - Minimaliste Luxe
  Theme: Dark avec nuances de bleu profond
  Animations: Parallaxe, compteurs, reveals
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Arrière-plan avec parallaxe -->
      <div data-parallax="0.3" class="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1e3a5f]/20"></div>
      
      <!-- Formes décoratives avec parallaxe -->
      <div data-parallax="0.5" class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1e3a5f]/10 to-transparent rounded-full blur-3xl"></div>
      <div data-parallax="0.2" class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#4a90d9]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div class="container-luxe relative z-10 py-32">
        <div class="grid-luxe grid-luxe-2 items-center gap-16">
          <!-- Contenu gauche -->
          <div class="space-y-8 reveal">
            <div class="line-accent"></div>
            
            <h1 class="text-[#f5f5f7] leading-[0.95]">
              Pure<br>
              <span class="text-gradient">Web Agency</span>
            </h1>
            
            <p class="text-xl text-[#8b8b9a] font-light max-w-md leading-relaxed">
              Nous créons des expériences digitales d'exception. 
              Design sur-mesure, performances optimales, élégance intemporelle.
            </p>
            
            <div class="flex items-center gap-6 pt-4">
              <NuxtLink to="/contact" class="btn-luxe shine magnetic-btn">
                Commencer un projet
              </NuxtLink>
              <NuxtLink to="/portfolio" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-400 text-sm tracking-wider uppercase line-draw">
                Voir nos réalisations →
              </NuxtLink>
            </div>
          </div>
          
          <!-- Espace droite avec élément visuel -->
          <div class="relative h-[600px] hidden lg:block reveal reveal-delay-3">
            <div class="absolute inset-0 border border-[#4a90d9]/20 rounded-sm">
              <div class="absolute top-8 left-8 right-8 bottom-8 border border-[#4a90d9]/10"></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center space-y-4">
                <div class="text-7xl font-display text-[#4a90d9]">5+</div>
                <div class="text-[#8b8b9a] uppercase tracking-widest text-sm">Années d'excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator avec animation -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 reveal reveal-delay-5">
        <div class="w-px h-16 bg-gradient-to-b from-[#4a90d9] to-transparent animate-pulse"></div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-luxe border-t border-white/5">
      <div class="container-luxe">
        <div class="grid-luxe grid-luxe-2 gap-16">
          <!-- Titre section -->
          <div class="lg:sticky lg:top-32 lg:self-start space-y-6 reveal">
            <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Nos services</span>
            <h2 class="text-[#f5f5f7]">
              L'excellence<br>à chaque pixel
            </h2>
            <div class="line-accent"></div>
            <p class="text-[#8b8b9a] text-lg font-light">
              Une approche artisanale du développement web. 
              Chaque projet est une œuvre sur-mesure.
            </p>
          </div>
          
          <!-- Cartes services avec reveal staggered -->
          <div class="space-y-6">
            <div v-for="(service, index) in services" :key="service.title" 
                 class="card-luxe group reveal"
                 :class="`reveal-delay-${index + 1}`">
              <div class="flex items-start gap-6">
                <div class="text-5xl font-display text-[#4a90d9]/30 group-hover:text-[#4a90d9] transition-colors duration-600">
                  0{{ index + 1 }}
                </div>
                <div class="flex-1 space-y-3">
                  <h3 class="text-2xl text-[#f5f5f7] group-hover:text-[#4a90d9] transition-colors duration-400">
                    {{ service.title }}
                  </h3>
                  <p class="text-[#8b8b9a] font-light leading-relaxed">
                    {{ service.description }}
                  </p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span class="text-[#4a90d9] text-2xl">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section avec compteurs animés -->
    <section class="py-24 border-t border-white/5">
      <div class="container-luxe">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          <div v-for="(stat, index) in stats" :key="stat.label" 
               class="bg-[#0a0a0f] p-12 text-center space-y-2 reveal"
               :class="`reveal-delay-${index + 1}`">
            <div class="text-4xl lg:text-5xl font-display text-[#f5f5f7]">
              <span :data-counter="stat.value">0</span>{{ stat.suffix || '' }}
            </div>
            <div class="text-[#8b8b9a] uppercase tracking-widest text-xs">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir -->
    <section class="section-luxe bg-[#12121a]">
      <div class="container-luxe">
        <div class="grid-luxe grid-luxe-2 gap-16 items-center">
          <div class="space-y-6 reveal">
            <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Pourquoi nous</span>
            <h2 class="text-[#f5f5f7]">
              L'excellence<br>à la française
            </h2>
            <div class="line-accent"></div>
            <p class="text-lg text-[#8b8b9a] font-light leading-relaxed">
              Nous mettons un point d'honneur à valoriser le savoir-faire français, 
              tant dans la conception que dans la qualité du service.
            </p>
            
            <ul class="space-y-4 pt-4">
              <li v-for="(advantage, index) in advantages" :key="advantage" 
                  class="flex items-start gap-4 reveal"
                  :class="`reveal-delay-${index + 1}`">
                <div class="w-6 h-6 rounded-full bg-[#4a90d9]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div class="w-1.5 h-1.5 bg-[#4a90d9] rounded-full"></div>
                </div>
                <span class="text-[#f5f5f7] font-light">{{ advantage }}</span>
              </li>
            </ul>
            
            <div class="pt-8 reveal reveal-delay-3">
              <NuxtLink to="/contact" class="btn-luxe magnetic-btn">
                Commencer un projet
              </NuxtLink>
            </div>
          </div>
          
          <!-- Illustration avec parallaxe -->
          <div class="relative reveal reveal-delay-2">
            <div data-parallax="0.1" class="aspect-square rounded-sm bg-gradient-to-br from-[#1e3a5f]/30 to-[#4a90d9]/10 p-1">
              <div class="w-full h-full bg-[#0a0a0f] flex items-center justify-center">
                <div class="text-center space-y-4">
                  <div class="text-6xl font-display text-[#4a90d9]">100%</div>
                  <div class="text-[#8b8b9a] uppercase tracking-widest text-sm">Projets livrés dans les délais</div>
                </div>
              </div>
            </div>
            <!-- Badge flottant avec parallaxe inverse -->
            <div data-parallax="-0.2" class="absolute -bottom-6 -left-6 bg-[#12121a] rounded-sm border border-white/10 p-6 flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[#4a90d9]/20 flex items-center justify-center">
                <svg class="w-6 h-6 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <p class="font-display text-lg text-[#f5f5f7]">RGPD Compliant</p>
                <p class="text-sm text-[#8b8b9a]">100% sécurisé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Highlights -->
    <FeatureHighlights />

    <!-- Marquee Section -->
    <MarqueeSection />

    <!-- Feature Highlights 2 -->
    <section class="section-luxe bg-gradient-to-r from-[#1a1a24] to-[#12121a]">
      <div class="container-luxe">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-6 reveal">
            <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Pourquoi Pure Web</span>
            <h2 class="text-[#f5f5f7]">
              Plus qu'une agence,<br>un partenaire
            </h2>
            <div class="line-accent"></div>
            <p class="text-[#8b8b9a] font-light leading-relaxed text-lg">
              Nous croyons au design stratégique et au code de qualité. 
              Chaque projet est traité avec rigueur et passion.
            </p>
          </div>
          <div class="space-y-4 reveal reveal-delay-2">
            <div v-for="(point, index) in whyPoints"
                 :key="point"
                 class="flex gap-4 p-6 bg-[#12121a] border border-white/5 hover:border-[#4a90d9]/30 rounded-sm transition-colors duration-300">
              <div class="w-6 h-6 rounded-full bg-[#4a90d9] flex-shrink-0 flex items-center justify-center">
                <svg class="w-4 h-4 text-[#0a0a0f]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span class="text-[#f5f5f7] font-light">{{ point }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <ProcessTimeline />

    <!-- Testimonials -->
    <TestimonialsSection />

    <!-- Team Section -->
    <TeamSection />

    <!-- Blog Section -->
    <BlogSection />

    <!-- FAQ Section -->
    <FAQSection />

    <!-- Newsletter -->
    <NewsletterSignup />

    <!-- CTA Section -->
    <section class="section-luxe relative overflow-hidden">
      <div data-parallax="0.2" class="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 to-transparent"></div>
      <div class="container-luxe relative z-10">
        <div class="max-w-3xl mx-auto text-center space-y-8 reveal">
          <div class="line-accent mx-auto"></div>
          <h2 class="text-4xl md:text-5xl text-[#f5f5f7]">
            Prêt à créer quelque chose d'exceptionnel ?
          </h2>
          <p class="text-xl text-[#8b8b9a] font-light">
            Discutons de votre vision. Première consultation gratuite.
          </p>
          <div class="pt-4">
            <NuxtLink to="/contact" class="btn-luxe text-lg px-12 py-4 shine magnetic-btn">
              Démarrer votre projet
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Agence Web Bordeaux | Création de sites modernes',
  meta: [
    {
      name: 'description',
      content: 'Agence web spécialisée dans la création de sites modernes et performants. Design sur-mesure, excellence technique.'
    }
  ]
})

// Services
const services = [
  {
    title: 'Création de sites',
    description: 'Sites vitrines, e-commerce et applications web sur-mesure avec les dernières technologies.'
  },
  {
    title: 'E-commerce',
    description: 'Boutiques en ligne élégantes et convertissantes avec expérience d\'achat optimale.'
  },
  {
    title: 'SEO & Performance',
    description: 'Optimisation pour les moteurs de recherche et performances web excellence.'
  }
]

// Stats avec compteurs animés
const stats = [
  { value: 50, suffix: '+', label: 'Projets livrés' },
  { value: 100, suffix: '%', label: 'Satisfaction client' },
  { value: 5, suffix: '+', label: 'Années d\'expertise' },
  { value: 24, suffix: 'h', label: 'Temps de réponse' }
]

// Avantages
const advantages = [
  'Hébergement en France, conformité RGPD',
  'Sites 100% sur-mesure, pas de templates',
  'Support réactif et accompagnement personnalisé',
  'Code propre et maintenable pour l\'avenir',
  'Tarifs transparents sans frais cachés'
]

// Initialize animations
onMounted(() => {
  const { initScrollReveal } = useScrollReveal()
  const { initCounters } = useAnimatedCounter()
  const { initParallax } = useParallax()
  const { initTilt } = useTiltEffect()
  
  initScrollReveal()
  initCounters()
  initParallax()
  initTilt()
})
</script>