<!-- Process Timeline -->
<template>
  <section class="section-luxe bg-[#12121a]">
    <div class="container-luxe">
      <div class="max-w-3xl mx-auto space-y-20">
        <!-- Header -->
        <div class="text-center space-y-6 reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Notre processus</span>
          <h2 class="text-[#f5f5f7]">
            De l'idée<br>à la réalité
          </h2>
          <div class="line-accent mx-auto"></div>
        </div>

        <!-- Timeline -->
        <div class="space-y-12">
          <div v-for="(step, index) in steps" 
               :key="index"
               class="relative reveal"
               :class="`reveal-delay-${(index % 3) + 1}`">
            
            <!-- Connecting line -->
            <div v-if="index < steps.length - 1" 
                 class="absolute left-6 top-20 w-0.5 h-20 bg-gradient-to-b from-[#4a90d9] to-transparent"></div>
            
            <div class="flex gap-8">
              <!-- Number circle -->
              <div class="relative">
                <div class="w-12 h-12 rounded-full bg-[#0a0a0f] border-2 border-[#4a90d9] flex items-center justify-center flex-shrink-0">
                  <span class="text-[#4a90d9] font-display text-lg">{{ index + 1 }}</span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 pt-1 space-y-3">
                <h3 class="text-2xl text-[#f5f5f7] font-display">{{ step.title }}</h3>
                <p class="text-[#8b8b9a] font-light leading-relaxed">{{ step.description }}</p>
                
                <!-- Icons list -->
                <div class="flex flex-wrap gap-3 pt-4">
                  <span v-for="(item, idx) in step.items" 
                        :key="idx"
                        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a24] border border-white/10 text-[#f5f5f7] text-sm hover:border-[#4a90d9]/50 transition-colors duration-300">
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center pt-12 reveal reveal-delay-3">
          <NuxtLink to="/contact" class="btn-luxe shine">
            Commencer maintenant
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Découverte',
    description: 'Nous écoutons vos besoins, vos objectifs et votre vision. Analyse approfondie de votre marché et de vos concurrents.',
    items: ['Entretien', 'Audit', 'Stratégie']
  },
  {
    title: 'Conception',
    description: 'Création des maquettes et prototypes. Design responsive, approche mobile-first, respect des standards d\'accessibilité.',
    items: ['Wireframes', 'Design', 'Prototype']
  },
  {
    title: 'Développement',
    description: 'Développement avec les dernières technologies. Code propre, sécurisé et performant. Tests rigoureux à chaque étape.',
    items: ['Frontend', 'Backend', 'Tests']
  },
  {
    title: 'Lancement',
    description: 'Mise en ligne, optimisation SEO, monitoring de performance. Support et maintenance continue pour la pérennité.',
    items: ['Déploiement', 'SEO', 'Monitoring']
  }
]
</script>