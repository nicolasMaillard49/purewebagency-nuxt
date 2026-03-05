<!-- Advanced CTA Section -->
<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div data-parallax="0.3" class="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 via-transparent to-[#4a90d9]/20"></div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4a90d9]/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1e3a5f]/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="container-luxe relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#4a90d9]/10 border border-[#4a90d9]/30 rounded-full">
          <div class="w-2 h-2 bg-[#4a90d9] rounded-full animate-pulse"></div>
          <span class="text-[#4a90d9] text-xs uppercase tracking-widest">Prêt à démarrer ?</span>
        </div>

        <!-- Heading -->
        <div class="space-y-4 reveal">
          <h2 class="text-5xl md:text-6xl text-[#f5f5f7] leading-tight">
            Transformez votre<br>
            <span class="text-gradient-animated">vision en réalité</span>
          </h2>
          <p class="text-xl text-[#8b8b9a] font-light max-w-2xl mx-auto">
            Parlons de votre projet. Découvrez comment Pure Web Agency peut vous aider 
            à atteindre vos objectifs digitaux.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 reveal reveal-delay-2">
          <NuxtLink to="/contact" class="btn-luxe text-lg px-12 py-4 shine magnetic-btn">
            Démarrer un projet
          </NuxtLink>
          <NuxtLink to="/services" class="px-12 py-4 border border-white/20 text-[#f5f5f7] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300 text-lg uppercase tracking-widest font-light">
            Voir nos services
          </NuxtLink>
        </div>

        <!-- Social proof -->
        <div class="pt-12 reveal reveal-delay-3 border-t border-white/5">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="space-y-2">
              <div class="text-3xl font-display text-[#f5f5f7]">50+</div>
              <p class="text-[#8b8b9a] text-sm">Projets livrés</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-display text-[#f5f5f7]">100%</div>
              <p class="text-[#8b8b9a] text-sm">Clients satisfaits</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-display text-[#f5f5f7]">5+</div>
              <p class="text-[#8b8b9a] text-sm">Années d'expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const { initScrollReveal } = useScrollReveal()
  const { initParallax } = useParallax()
  
  initScrollReveal()
  initParallax()
})
</script>