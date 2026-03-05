<!-- FAQ Accordion -->
<template>
  <section class="section-luxe bg-[#12121a]">
    <div class="container-luxe">
      <div class="max-w-3xl mx-auto space-y-16">
        <!-- Header -->
        <div class="text-center space-y-6 reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">FAQ</span>
          <h2 class="text-[#f5f5f7]">
            Vos questions<br>nos réponses
          </h2>
          <div class="line-accent mx-auto"></div>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-3">
          <div v-for="(item, index) in faqs"
               :key="item.question"
               class="reveal"
               :class="`reveal-delay-${(index % 3) + 1}`">
            
            <!-- Button -->
            <button 
              @click="toggleItem(index)"
              class="w-full flex items-center justify-between py-6 px-6 bg-[#0a0a0f] border border-white/5 hover:border-[#4a90d9]/30 transition-all duration-300 text-left group">
              
              <span class="text-lg text-[#f5f5f7] font-display group-hover:text-[#4a90d9] transition-colors duration-300">
                {{ item.question }}
              </span>
              
              <div class="w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4">
                <svg 
                  class="w-6 h-6 text-[#4a90d9] transition-transform duration-300"
                  :class="openIndex === index ? 'rotate-180' : ''"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </div>
            </button>

            <!-- Content -->
            <Transition
              enter-active-class="transition-all duration-300"
              leave-active-class="transition-all duration-300"
              enter-from-class="max-h-0 overflow-hidden"
              enter-to-class="max-h-[500px]"
              leave-from-class="max-h-[500px]"
              leave-to-class="max-h-0 overflow-hidden">
              
              <div v-if="openIndex === index" class="overflow-hidden">
                <div class="px-6 py-6 bg-[#0a0a0f]/50 border-b border-white/5">
                  <p class="text-[#8b8b9a] font-light leading-relaxed">
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center pt-8 reveal reveal-delay-3">
          <p class="text-[#8b8b9a] mb-4">Vous ne trouvez pas votre réponse ?</p>
          <NuxtLink to="/contact" class="btn-luxe">
            Contactez-nous
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openIndex = ref(-1)

const toggleItem = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = ref([
  {
    question: 'Quel est votre délai de livraison ?',
    answer: 'Les délais dépendent de la complexité du projet. Pour un site vitrine : 4 à 6 semaines. Pour un e-commerce : 6 à 10 semaines. Pour une application : sur devis. Nous vous proposons un planning détaillé dès le départ.'
  },
  {
    question: 'Comment ça marche, le support après livraison ?',
    answer: 'Nous incluons 3 mois de support gratuit après livraison. Ensuite, offre de maintenance optionnelle : mises à jour, monitoring, corrections de bugs. Support réactif garanti (réponse 24h maxi).'
  },
  {
    question: 'Quels sont les délais de paiement ?',
    answer: '50% à la signature du devis, 50% à la livraison. Possible pour les projets longs : versements échelonnés. Nous acceptons virement bancaire, CB et Stripe.'
  },
  {
    question: 'Vous travaillez avec quel CMS ?',
    answer: 'Pour la plupart de nos projets, nous développons des sites custom sans CMS, c\'est plus performant. Possible intégration WordPress/Strapi si vous avez une équipe capable de maintenir.'
  },
  {
    question: 'Est-ce que vous assurez la migration d\'un ancien site ?',
    answer: 'Oui, nous gérons les migrations complètes : sauvegarde, redirections 301, tests de compatibilité, DNS. Zéro downtime possible selon votre infrastructure.'
  },
  {
    question: 'Comment vous formez mon équipe ?',
    answer: 'Nous fournissons documentation complète + sessions de formation. Possible formation à distance ou sur site selon vos besoins.'
  }
])
</script>