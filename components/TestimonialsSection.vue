<!-- Testimonials Carousel -->
<template>
  <section class="section-luxe">
    <div class="container-luxe">
      <div class="space-y-16">
        <!-- Header -->
        <div class="max-w-2xl reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Témoignages</span>
          <h2 class="text-[#f5f5f7] mt-4">
            Ce que disent<br>nos clients
          </h2>
        </div>

        <!-- Carousel -->
        <div class="relative">
          <!-- Testimonial Cards -->
          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="(testimonial, index) in testimonials" 
                 :key="index"
                 class="bg-[#12121a] border border-white/10 p-8 lg:p-12 space-y-6 hover:border-[#4a90d9]/30 transition-colors duration-400 reveal"
                 :class="`reveal-delay-${index + 1}`"
                 data-tilt>
              <!-- Stars -->
              <div class="flex gap-1">
                <span v-for="n in 5" :key="n" class="text-[#4a90d9] text-lg">★</span>
              </div>

              <!-- Quote -->
              <p class="text-lg text-[#f5f5f7] font-light leading-relaxed italic">
                "{{ testimonial.quote }}"
              </p>

              <!-- Author -->
              <div class="pt-4 border-t border-white/5 flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#4a90d9]"></div>
                <div>
                  <p class="text-[#f5f5f7] font-display text-sm">{{ testimonial.author }}</p>
                  <p class="text-[#8b8b9a] text-xs">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: 'Pure Web Agency a transformé notre présence digitale. Site magnifique, équipe réactive, résultats immédiats.',
    author: 'Marie Dubois',
    role: 'CEO, Atelier Design'
  },
  {
    quote: 'L\'excellence dans chaque détail. Pas de template, du vrai sur-mesure. À recommander vivement.',
    author: 'Jean Moreau',
    role: 'Directeur, Restaurant Étoilé'
  },
  {
    quote: 'Support réactif, délais respectés, performance optimale. Une agence sur laquelle on peut compter.',
    author: 'Sophie Martin',
    role: 'Fondatrice, E-commerce Luxe'
  },
  {
    quote: 'Nos ventes ont augmenté de 45% après le redesign. L\'équipe comprend vraiment nos besoins.',
    author: 'Laurent Petit',
    role: 'Manager, Boutique En Ligne'
  }
]

onMounted(() => {
  const { initTilt } = useTiltEffect()
  initTilt()
})
</script>