<!--
  Page Portfolio - Design Minimaliste Luxe
  Showcase des réalisations avec style éditorial
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center">
      <div class="container-luxe py-32">
        <div class="max-w-4xl">
          <span class="text-[#4a90d9] uppercase tracking-[0.3em] text-sm mb-6 block animate-fadeIn">
            Nos Réalisations
          </span>
          <h1 class="text-5xl md:text-7xl lg:text-8xl text-[#f5f5f7] leading-[0.9] mb-8 animate-fadeInUp">
            L'excellence<br>en action
          </h1>
          <p class="text-xl text-[#8b8b9a] font-light max-w-2xl leading-relaxed animate-fadeInUp delay-200">
            Une sélection de projets qui illustrent notre approche du design 
            et notre exigence technique.
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid - Style éditorial -->
    <section class="section-luxe border-t border-white/5">
      <div class="container-luxe">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          
          <!-- Projet 1 - Grand format -->
          <div class="lg:col-span-2 bg-[#0a0a0f] group cursor-pointer">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div class="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-[#1e3a5f]/30 to-[#4a90d9]/10 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-32 h-32 border border-[#4a90d9]/30 flex items-center justify-center">
                    <span class="text-[#4a90d9] font-display text-4xl">R</span>
                  </div>
                </div>
                <div class="absolute inset-0 bg-[#0a0a0f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span class="text-[#f5f5f7] text-sm uppercase tracking-widest">Voir le projet</span>
                </div>
              </div>
              <div class="p-12 lg:p-16 flex flex-col justify-center space-y-6">
                <div class="flex items-center gap-4">
                  <span class="text-[#4a90d9] text-sm uppercase tracking-widest">Site Vitrine</span>
                  <span class="w-12 h-px bg-white/20"></span>
                  <span class="text-[#5a5a6a] text-sm">2024</span>
                </div>
                <h2 class="text-3xl lg:text-4xl text-[#f5f5f7] font-display group-hover:text-[#4a90d9] transition-colors duration-300">
                  Restaurant Le Négociant
                </h2>
                <p class="text-[#8b8b9a] font-light leading-relaxed">
                  Refonte complète du site web d'un restaurant gastronomique bordelais. 
                  Design élégant, réservation en ligne et expérience mobile optimisée.
                </p>
                <div class="flex gap-3 pt-4">
                  <span class="px-4 py-2 border border-white/10 text-[#8b8b9a] text-xs uppercase tracking-wider">Vue.js</span>
                  <span class="px-4 py-2 border border-white/10 text-[#8b8b9a] text-xs uppercase tracking-wider">Nuxt</span>
                  <span class="px-4 py-2 border border-white/10 text-[#8b8b9a] text-xs uppercase tracking-wider">SEO</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Projet 2 - Format standard -->
          <div class="bg-[#0a0a0f] group cursor-pointer border-r border-white/5">
            <div class="aspect-[4/3] bg-gradient-to-br from-[#4a90d9]/10 to-[#1e3a5f]/20 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 border border-[#4a90d9]/30 flex items-center justify-center">
                  <span class="text-[#4a90d9] font-display text-3xl">B</span>
                </div>
              </div>
              <div class="absolute inset-0 bg-[#0a0a0f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span class="text-[#f5f5f7] text-sm uppercase tracking-widest">Voir le projet</span>
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-[#4a90d9] text-xs uppercase tracking-widest">E-commerce</span>
                <span class="text-[#5a5a6a] text-xs">2024</span>
              </div>
              <h3 class="text-2xl text-[#f5f5f7] font-display group-hover:text-[#4a90d9] transition-colors duration-300">
                Boutique Épure
              </h3>
              <p class="text-[#8b8b9a] font-light text-sm leading-relaxed">
                Boutique en ligne pour une marque de mode durable. Design minimaliste 
                et expérience d'achat fluide.
              </p>
            </div>
          </div>

          <!-- Projet 3 - Format standard -->
          <div class="bg-[#0a0a0f] group cursor-pointer">
            <div class="aspect-[4/3] bg-gradient-to-bl from-[#1e3a5f]/20 to-[#4a90d9]/5 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 border border-[#4a90d9]/30 flex items-center justify-center">
                  <span class="text-[#4a90d9] font-display text-3xl">A</span>
                </div>
              </div>
              <div class="absolute inset-0 bg-[#0a0a0f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span class="text-[#f5f5f7] text-sm uppercase tracking-widest">Voir le projet</span>
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-[#4a90d9] text-xs uppercase tracking-widest">Application</span>
                <span class="text-[#5a5a6a] text-xs">2023</span>
              </div>
              <h3 class="text-2xl text-[#f5f5f7] font-display group-hover:text-[#4a90d9] transition-colors duration-300">
                ArchiVision
              </h3>
              <p class="text-[#8b8b9a] font-light text-sm leading-relaxed">
                Plateforme de visualisation 3D pour architectes. Interface immersive 
                et performances optimales.
              </p>
            </div>
          </div>

          <!-- Projet 4 - Grand format alterné -->
          <div class="lg:col-span-2 bg-[#0a0a0f] group cursor-pointer border-t border-white/5">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div class="p-12 lg:p-16 flex flex-col justify-center space-y-6 order-2 lg:order-1">
                <div class="flex items-center gap-4">
                  <span class="text-[#4a90d9] text-sm uppercase tracking-widest">Corporate</span>
                  <span class="w-12 h-px bg-white/20"></span>
                  <span class="text-[#5a5a6a] text-sm">2023</span>
                </div>
                <h2 class="text-3xl lg:text-4xl text-[#f5f5f7] font-display group-hover:text-[#4a90d9] transition-colors duration-300">
                  Cabinet Devaux & Associés
                </h2>
                <p class="text-[#8b8b9a] font-light leading-relaxed">
                  Site institutionnel pour un cabinet d'avocats d'affaires. 
                  Design sérieux et élégant, conformité RGPD optimale.
                </p>
                <div class="flex gap-3 pt-4">
                  <span class="px-4 py-2 border border-white/10 text-[#8b8b9a] text-xs uppercase tracking-wider">WordPress</span>
                  <span class="px-4 py-2 border border-white/10 text-[#8b8b9a] text-xs uppercase tracking-wider">Sur-mesure</span>
                </div>
              </div>
              <div class="aspect-[16/10] lg:aspect-auto bg-gradient-to-bl from-[#4a90d9]/10 to-[#1e3a5f]/30 relative overflow-hidden order-1 lg:order-2">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-32 h-32 border border-[#4a90d9]/30 flex items-center justify-center">
                    <span class="text-[#4a90d9] font-display text-4xl">D</span>
                  </div>
                </div>
                <div class="absolute inset-0 bg-[#0a0a0f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span class="text-[#f5f5f7] text-sm uppercase tracking-widest">Voir le projet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="section-luxe bg-[#12121a] border-t border-white/5">
      <div class="container-luxe">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <div class="text-6xl text-[#4a90d9]/30 font-display">"</div>
          <blockquote class="text-2xl md:text-3xl text-[#f5f5f7] font-light leading-relaxed">
            Pure Web Agency a transformé notre vision en réalité digitale. 
            Leur attention aux détails et leur exigence technique ont dépassé 
            toutes nos attentes.
          </blockquote>
          <div class="pt-4">
            <div class="text-[#f5f5f7] font-display text-lg">Marie Dubois</div>
            <div class="text-[#8b8b9a] text-sm">Fondatrice, Boutique Épure</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-luxe border-t border-white/5">
      <div class="container-luxe text-center">
        <div class="line-accent mx-auto mb-8"></div>
        <h2 class="text-4xl md:text-5xl text-[#f5f5f7] mb-8">
          Votre projet mérite l'excellence
        </h2>
        <NuxtLink to="/contact" class="btn-luxe text-lg px-12 py-4 shine inline-flex items-center gap-3">
          Commencer votre projet
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Réalisations | Pure Web Agency',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos projets web sélectionnés. Sites vitrines, e-commerce et applications sur-mesure.'
    }
  ]
});
</script>