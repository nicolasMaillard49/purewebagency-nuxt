<!-- Testimonials Carousel - Version courte -->
<template>
  <section class="py-16 border-t border-white/5">
    <div class="container-luxe">
      <div class="space-y-8">
        <!-- Header compact -->
        <div class="text-center max-w-2xl mx-auto reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Témoignages</span>
          <h2 class="text-[#f5f5f7] mt-2 text-3xl">Ils nous font confiance</h2>
        </div>

        <!-- Carousel compact - 2 cards seulement -->
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div v-for="(testimonial, index) in testimonials.slice(0, 2)" 
               :key="index"
               class="bg-[#12121a] border border-white/10 p-6 space-y-4 hover:border-[#4a90d9]/30 transition-colors reveal"
               :class="`reveal-delay-${index + 1}`">
            <!-- Stars -->
            <div class="flex gap-0.5">
              <span v-for="n in 5" :key="n" class="text-[#4a90d9]">★</span>
            </div>

            <!-- Quote -->
            <p class="text-[#f5f5f7] font-light leading-relaxed italic text-sm">
              "{{ testimonial.quote }}"
            </p>

            <!-- Author compact -->
            <div class="flex items-center gap-3 pt-2 border-t border-white/5">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#4a90d9]"></div>
              <div>
                <p class="text-[#f5f5f7] font-display text-sm">{{ testimonial.author }}</p>
                <p class="text-[#8b8b9a] text-xs">{{ testimonial.role }}</p>
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
    quote: 'Pure Web Agency a transformé notre présence digitale. Site magnifique, équipe réactive.',
    author: 'Marie Dubois',
    role: 'CEO, Atelier Design'
  },
  {
    quote: 'Excellence dans chaque détail. Pas de template, du vrai sur-mesure.',
    author: 'Jean Moreau',
    role: 'Directeur, Restaurant'
  },
  {
    quote: 'Support réactif, délais respectés. Une agence sur laquelle on peut compter.',
    author: 'Sophie Martin',
    role: 'Fondatrice, E-commerce'
  },
  {
    quote: 'Nos ventes ont augmenté de 45% après le redesign.',
    author: 'Laurent Petit',
    role: 'Manager, Boutique'
  }
]
</script>