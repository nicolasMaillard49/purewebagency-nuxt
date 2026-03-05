<!--
  Pure Web Agency - Minimaliste Luxe
  Theme: Dark avec nuances de bleu profond
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <!-- Hero Section - Asymétrique et luxueux -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Arrière-plan avec gradient subtil -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1e3a5f]/20"></div>
      
      <!-- Forme décorative bleue -->
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1e3a5f]/10 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#4a90d9]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div class="container-luxe relative z-10 py-32">
        <div class="grid-luxe grid-luxe-2 items-center gap-16">
          <!-- Contenu gauche -->
          <div class="space-y-8 animate-fadeInUp">
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
              <NuxtLink to="/contact" class="btn-luxe shine">
                Commencer un projet
              </NuxtLink>
              <NuxtLink to="/portfolio" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-400 text-sm tracking-wider uppercase">
                Voir nos réalisations →
              </NuxtLink>
            </div>
          </div>
          
          <!-- Espace droite avec élément visuel -->
          <div class="relative h-[600px] hidden lg:block animate-fadeIn delay-400">
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
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fadeIn delay-600">
        <div class="w-px h-16 bg-gradient-to-b from-[#4a90d9] to-transparent"></div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-luxe border-t border-white/5">
      <div class="container-luxe">
        <div class="grid-luxe grid-luxe-2 gap-16">
          <!-- Titre section -->
          <div class="lg:sticky lg:top-32 lg:self-start space-y-6">
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
          
          <!-- Cartes services -->
          <div class="space-y-6">
            <div v-for="(service, index) in services" :key="service.title" 
                 class="card-luxe group animate-fadeInUp"
                 :class="`delay-${(index + 1) * 200}`">
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

    <!-- Stats Section -->
    <section class="py-24 border-t border-white/5">
      <div class="container-luxe">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          <div v-for="stat in stats" :key="stat.label" class="bg-[#0a0a0f] p-12 text-center space-y-2">
            <div class="text-4xl lg:text-5xl font-display text-[#f5f5f7]">{{ stat.value }}</div>
            <div class="text-[#8b8b9a] uppercase tracking-widest text-xs">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-luxe relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/20 to-transparent"></div>
      <div class="container-luxe relative z-10">
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <h2 class="text-4xl lg:text-5xl text-[#f5f5f7]">
            Prêt à créer quelque chose d'exceptionnel ?
          </h2>
          <p class="text-xl text-[#8b8b9a] font-light">
            Discutons de votre vision. Première consultation gratuite.
          </p>
          <div class="pt-4">
            <NuxtLink to="/contact" class="btn-luxe text-lg px-12 py-4 shine">
              Démarrer votre projet
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Pure Web Agency | Excellence Web',
  meta: [
    {
      name: 'description',
      content: 'Agence web créative spécialisée dans les expériences digitales d\'exception. Design sur-mesure, performances optimales.'
    }
  ]
});

const services = [
  {
    title: 'Création de sites',
    description: 'Sites vitrines et applications web sur-mesure. Design unique, code propre, performances optimales.'
  },
  {
    title: 'E-commerce',
    description: 'Boutiques en ligne élégantes et convertissantes. Expérience d\'achat fluide et sécurisée.'
  },
  {
    title: 'Référencement',
    description: 'SEO technique et stratégique. Visibilité accrue, trafic qualifié, croissance durable.'
  }
];

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '100%', label: 'Satisfaction' },
  { value: '5+', label: 'Années' },
  { value: '24h', label: 'Réponse' }
];
</script>
