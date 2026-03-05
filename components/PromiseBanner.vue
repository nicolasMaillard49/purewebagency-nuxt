<!-- Promise Banner -->
<template>
  <section class="bg-gradient-to-r from-[#1e3a5f]/20 via-[#0a0a0f] to-[#4a90d9]/10 py-16 border-y border-white/5">
    <div class="container-luxe">
      <div class="grid md:grid-cols-3 gap-12">
        <div v-for="(promise, index) in promises" 
             :key="promise.title"
             class="flex gap-4 reveal"
             :class="`reveal-delay-${index + 1}`">
          
          <!-- Icon -->
          <div class="w-12 h-12 rounded-sm border border-[#4a90d9]/30 flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="promise.icon === 'checkmark'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              <path v-else-if="promise.icon === 'shield'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              <path v-else-if="promise.icon === 'clock'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          <!-- Content -->
          <div class="space-y-1 flex-1">
            <h3 class="text-lg text-[#f5f5f7] font-display">{{ promise.title }}</h3>
            <p class="text-[#8b8b9a] font-light text-sm leading-relaxed">{{ promise.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const promises = ref([
  {
    icon: 'checkmark',
    title: '100% Satisfait ou Remboursé',
    description: 'Si vous n\'êtes pas satisfait dans les 30 jours, nous remboursons 100% du projet.'
  },
  {
    icon: 'shield',
    title: 'Confidentialité Garantie',
    description: 'NDA complet. Vos données et projets sont 100% confidentiels et sécurisés.'
  },
  {
    icon: 'clock',
    title: 'Délais Respectés',
    description: 'Planification rigoureuse. Si délai dépassé, réduction prorata de la facture.'
  }
])
</script>