<!--
  Pure Web Agency - Minimaliste Luxe
  Theme: Dark avec nuances de bleu profond
  Animations: Parallaxe, compteurs, reveals
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <!-- Hero Section - Ultra Impact -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background layers -->
      <div class="absolute inset-0 bg-[#0a0a0f]"></div>
      
      <!-- Animated gradient orbs -->
      <div class="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#4a90d9]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#1e3a5f]/30 rounded-full blur-[100px]"></div>
      
      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%234a90d9%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <!-- Content -->
      <div class="container-luxe relative z-10 pt-32 pb-20">
        <div class="max-w-5xl mx-auto text-center">
          
          <!-- Eyebrow -->
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4a90d9]/30 rounded-full reveal">
            <span class="w-2 h-2 bg-[#4a90d9] rounded-full animate-pulse"></span>
            <span class="text-[#4a90d9] text-xs uppercase tracking-widest">Agence Web Bordeaux</span>
          </div>
          
          <!-- Main headline -->
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-display text-[#f5f5f7] leading-[0.9] mb-8 reveal reveal-delay-1">
            On crée des<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#4a90d9] via-[#6bb3ff] to-[#4a90d9]">sites qui vendent</span>
          </h1>
          
          <!-- Subheadline -->
          <p class="text-xl md:text-2xl text-[#8b8b9a] font-light max-w-2xl mx-auto mb-12 leading-relaxed reveal reveal-delay-2">
            Design premium, performances optimales, résultats mesurables. 
            Votre site web devient votre meilleur commercial.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal reveal-delay-3">
            <NuxtLink to="/contact" class="btn-luxe text-lg px-10 py-5 shine">
              Démarrer votre projet
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
            <NuxtLink to="/portfolio" class="group flex items-center gap-2 text-[#f5f5f7] hover:text-[#4a90d9] transition-colors duration-300 text-lg">
              <span class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#4a90d9] group-hover:bg-[#4a90d9]/10 transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </span>
              <span>Voir nos réalisations</span>
            </NuxtLink>
          </div>
          
          <!-- Stats row -->
          <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto reveal reveal-delay-4">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-display text-[#f5f5f7] mb-2">50+</div>
              <div class="text-[#8b8b9a] text-xs uppercase tracking-widest">Projets</div>
            </div>
            <div class="text-center border-x border-white/10">
              <div class="text-4xl md:text-5xl font-display text-[#f5f5f7] mb-2">100%</div>
              <div class="text-[#8b8b9a] text-xs uppercase tracking-widest">Satisfaction</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-display text-[#f5f5f7] mb-2">5+</div>
              <div class="text-[#8b8b9a] text-xs uppercase tracking-widest">Années</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom gradient fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
    </section>

    <!-- Promise Banner -->
    <PromiseBanner />

    <!-- Trust Badges -->
    <TrustBadges />

    <!-- Client Logos -->
    <ClientLogos />

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
          <div class="space-y-4 md:space-y-6">
            <div v-for="(service, index) in services" :key="service.title" 
                 class="card-luxe group reveal w-full"
                 :class="`reveal-delay-${index + 1}`">
              <div class="flex items-start gap-4 md:gap-6">
                <div class="text-3xl md:text-5xl font-display text-[#4a90d9]/30 group-hover:text-[#4a90d9] transition-colors duration-600 flex-shrink-0">
                  0{{ index + 1 }}
                </div>
                <div class="flex-1 space-y-2 md:space-y-3 min-w-0">
                  <h3 class="text-xl md:text-2xl text-[#f5f5f7] group-hover:text-[#4a90d9] transition-colors duration-400">
                    {{ service.title }}
                  </h3>
                  <p class="text-[#8b8b9a] font-light leading-relaxed text-sm md:text-base">
                    {{ service.description }}
                  </p>
                </div>
                <div class="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex-shrink-0">
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
          
          <!-- Stats visuelles fixes -->
          <div class="relative reveal reveal-delay-2">
            <!-- Card principale -->
            <div class="bg-[#1a1a24] rounded-sm p-8 border border-white/5">
              <div class="grid grid-cols-2 gap-8">
                <div class="text-center">
                  <div class="text-5xl font-display text-[#4a90d9] mb-2">100%</div>
                  <div class="text-[#8b8b9a] text-xs uppercase tracking-widest">Délais respectés</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-display text-[#4a90d9] mb-2">50+</div>
                  <div class="text-[#8b8b9a] text-xs uppercase tracking-widest">Projets livrés</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-display text-[#4a90d9] mb-2">5+</div>
                  <div class="text-[#8b8b9a] text-xs uppercase tracking-widest">Années exp.</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-display text-[#4a90d9] mb-2">24h</div>
                  <div class="text-[#8b8b9a] text-xs uppercase tracking-widest">Support</div>
                </div>
              </div>
            </div>
            
            <!-- Badge RGPD -->
            <div class="mt-6 bg-[#12121a] rounded-sm border border-white/5 p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-[#4a90d9]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <p class="font-display text-[#f5f5f7]">RGPD Compliant</p>
                <p class="text-xs text-[#8b8b9a]">100% sécurisé · Hébergement France</p>
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

    <!-- FAQ Section -->
    <FAQSection />

    <!-- Pricing Carousel -->
    <PricingCarousel />

    <!-- Newsletter -->
    <NewsletterSignup />

    <!-- Advanced CTA -->
    <AdvancedCTA />
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