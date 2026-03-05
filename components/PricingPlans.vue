<!-- Pricing Plans -->
<template>
  <section class="section-luxe">
    <div class="container-luxe">
      <div class="space-y-16">
        <!-- Header -->
        <div class="max-w-2xl mx-auto text-center space-y-6 reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Tarifs</span>
          <h2 class="text-[#f5f5f7]">
            Investissement transparent<br>sans surprise
          </h2>
          <p class="text-[#8b8b9a] font-light text-lg">
            Des formules adaptées à tous les projets, du starter au premium.
          </p>
          <div class="line-accent mx-auto"></div>
        </div>

        <!-- Plans Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(plan, index) in plans"
               :key="plan.name"
               class="relative group reveal"
               :class="`reveal-delay-${index + 1}`"
               :data-featured="plan.featured">
            
            <!-- Featured badge -->
            <div v-if="plan.featured" class="absolute -top-4 left-6 bg-gradient-to-r from-[#1e3a5f] to-[#4a90d9] px-4 py-1 rounded-full">
              <span class="text-white text-xs uppercase tracking-widest">Populaire</span>
            </div>

            <!-- Card -->
            <div class="h-full p-8 rounded-sm border transition-all duration-300"
                 :class="plan.featured 
                   ? 'border-[#4a90d9] bg-gradient-to-b from-[#1e3a5f]/10 to-[#0a0a0f]'
                   : 'border-white/5 bg-[#12121a] group-hover:border-[#4a90d9]/30'">
              
              <!-- Name -->
              <h3 class="text-2xl text-[#f5f5f7] font-display mb-2">{{ plan.name }}</h3>
              <p class="text-[#8b8b9a] font-light text-sm mb-6">{{ plan.description }}</p>

              <!-- Price -->
              <div class="mb-8">
                <div class="text-4xl text-[#f5f5f7] font-display">{{ plan.price }}€</div>
                <p class="text-[#8b8b9a] text-sm mt-2">{{ plan.period }}</p>
              </div>

              <!-- Features -->
              <ul class="space-y-4 mb-8">
                <li v-for="feature in plan.features"
                    :key="feature"
                    class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#4a90d9] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span class="text-[#f5f5f7] font-light text-sm">{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA -->
              <NuxtLink 
                to="/contact"
                :class="plan.featured ? 'btn-luxe text-center block' : 'btn-luxe--outline text-center block border border-white/20 hover:border-[#4a90d9]'">
                Démarrer
              </NuxtLink>

              <!-- Note -->
              <p class="text-[#5a5a6a] text-xs text-center mt-6">
                {{ plan.note }}
              </p>
            </div>
          </div>
        </div>

        <!-- Additional info -->
        <div class="max-w-3xl mx-auto bg-[#12121a] border border-white/5 p-12 rounded-sm space-y-4 reveal reveal-delay-3">
          <h3 class="text-xl text-[#f5f5f7] font-display">Vous avez un projet unique ?</h3>
          <p class="text-[#8b8b9a] font-light leading-relaxed">
            Nous proposons aussi des devis sur-mesure pour les projets complexes. 
            Parlons de vos besoins spécifiques, nous vous proposerons la meilleure approche.
          </p>
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#f5f5f7] transition-colors duration-300 text-sm uppercase tracking-widest pt-4">
            Demander un devis
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
    note: 'Délai : 4-6 semaines',
    featured: false
  },
  {
    name: 'E-commerce',
    description: 'Pour vendre en ligne',
    price: 5500,
    period: 'Projet unique',
    features: [
      'Catalogue produits illimité',
      'Panier & paiement Stripe',
      'Gestion commandes',
      'Email marketing',
      'Analytics avancé',
      '6 mois de support'
    ],
    note: 'Délai : 6-10 semaines',
    featured: true
  },
  {
    name: 'Custom',
    description: 'Pour les ambitieux',
    price: 'Sur devis',
    period: 'Selon votre projet',
    features: [
      'Architecture sur-mesure',
      'API & intégrations',
      'Dashboard admin',
      'Multi-langue',
      'Support prioritaire',
      'Infrastructure Cloud'
    ],
    note: 'Parlons de vos besoins',
    featured: false
  }
])
</script>

<style scoped>
[data-featured="false"] {
  scale: 1;
  transition: scale 0.3s ease;
}

.group:hover [data-featured="false"] {
  scale: 0.95;
}

.group:has([data-featured="true"]):hover [data-featured="false"] {
  scale: 0.95;
}
</style>