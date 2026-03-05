<!-- Detailed Comparison Table -->
<template>
  <section class="section-luxe bg-[#12121a]">
    <div class="container-luxe">
      <div class="space-y-12">
        <!-- Header -->
        <div class="max-w-2xl mx-auto text-center space-y-6 reveal">
          <h2 class="text-[#f5f5f7]">Comparez les plans</h2>
          <p class="text-[#8b8b9a] font-light">
            Choisissez le plan qui correspond à vos besoins.
          </p>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto reveal reveal-delay-2">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-white/10">
                <th class="py-4 px-6 text-[#f5f5f7] font-display text-lg">Feature</th>
                <th class="py-4 px-6 text-center">
                  <div class="text-[#f5f5f7] font-display">Vitrine</div>
                  <div class="text-[#8b8b9a] text-xs mt-1">2500€</div>
                </th>
                <th class="py-4 px-6 text-center border-l border-r border-[#4a90d9]/30 bg-[#1a1a24]">
                  <div class="text-[#4a90d9] font-display">E-commerce</div>
                  <div class="text-[#8b8b9a] text-xs mt-1">5500€</div>
                </th>
                <th class="py-4 px-6 text-center">
                  <div class="text-[#f5f5f7] font-display">Custom</div>
                  <div class="text-[#8b8b9a] text-xs mt-1">Devis</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(feature, index) in features" :key="feature.name" class="border-b border-white/5 hover:bg-white/2 transition-colors duration-300">
                <td class="py-4 px-6 text-[#f5f5f7] font-light">{{ feature.name }}</td>
                <td class="py-4 px-6 text-center">
                  <svg v-if="feature.vitrine" class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span v-else class="text-[#5a5a6a]">—</span>
                </td>
                <td class="py-4 px-6 text-center border-l border-r border-[#4a90d9]/30 bg-[#1a1a24]">
                  <svg v-if="feature.ecommerce" class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span v-else class="text-[#5a5a6a]">—</span>
                </td>
                <td class="py-4 px-6 text-center">
                  <svg v-if="feature.custom" class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span v-if="!feature.custom" class="text-[#5a5a6a]">—</span>
                  <span v-else-if="typeof feature.custom === 'string'" class="text-[#f5f5f7] text-sm">{{ feature.custom }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Note -->
        <div class="text-center text-[#8b8b9a] text-sm font-light reveal reveal-delay-3">
          <p>Tous les plans incluent hébergement, SSL, domaine et support. Au-delà de 1 an, tarif maintenance réduit de 50%.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = ref([
  { name: 'Pages', vitrine: true, ecommerce: true, custom: true },
  { name: 'Design responsive', vitrine: true, ecommerce: true, custom: true },
  { name: 'SEO de base', vitrine: true, ecommerce: true, custom: true },
  { name: 'Blog/Articles', vitrine: false, ecommerce: true, custom: true },
  { name: 'Panier & paiement', vitrine: false, ecommerce: true, custom: true },
  { name: 'Gestion produits', vitrine: false, ecommerce: true, custom: true },
  { name: 'Catalogue illimité', vitrine: false, ecommerce: true, custom: true },
  { name: 'Email marketing', vitrine: false, ecommerce: true, custom: true },
  { name: 'Analytics avancé', vitrine: false, ecommerce: true, custom: true },
  { name: 'API / Intégrations', vitrine: false, ecommerce: false, custom: true },
  { name: 'Dashboard admin', vitrine: false, ecommerce: false, custom: 'Oui' },
  { name: 'Multi-langue', vitrine: false, ecommerce: false, custom: true },
  { name: 'Mois de support', vitrine: '3', ecommerce: '6', custom: '12+' },
  { name: 'Support prioritaire', vitrine: false, ecommerce: false, custom: true },
  { name: 'Formations incluses', vitrine: false, ecommerce: false, custom: true }
])
</script>