<!-- Social Proof Widget - Dismissible -->
<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div 
      v-if="!isDismissed && showAfterScroll"
      class="fixed bottom-6 right-6 z-40 space-y-3 max-w-xs"
    >
      <!-- Close button -->
      <button 
        @click="dismiss"
        class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4a90d9] text-white flex items-center justify-center text-xs hover:bg-[#6bb3ff] transition-colors z-50"
        aria-label="Fermer"
      >
        ✕
      </button>

      <!-- Trust badges -->
      <div class="bg-[#12121a] border border-white/10 rounded-sm p-4 backdrop-blur-sm hover:border-[#4a90d9]/30 transition-all duration-300 cursor-pointer group">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#4a90d9] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <div class="flex-1 space-y-1">
            <p class="text-[#f5f5f7] font-display text-sm">RGPD Compliant</p>
            <p class="text-[#8b8b9a] text-xs">100% sécurisé, données chiffrées</p>
          </div>
        </div>
      </div>

      <!-- Recent client -->
      <div class="bg-[#12121a] border border-white/10 rounded-sm p-4 backdrop-blur-sm hover:border-[#4a90d9]/30 transition-all duration-300">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#4a90d9]"></div>
          <div>
            <p class="text-[#f5f5f7] font-display text-xs font-bold">{{ recentClient.name }}</p>
            <p class="text-[#8b8b9a] text-xs">{{ recentClient.role }}</p>
          </div>
        </div>
        <p class="text-[#f5f5f7] text-xs italic leading-relaxed">
          "{{ recentClient.quote }}"
        </p>
        <div class="flex gap-1 mt-2">
          <span v-for="n in 5" :key="n" class="text-[#4a90d9] text-xs">★</span>
        </div>
      </div>

      <!-- Response time -->
      <div class="bg-[#12121a] border border-white/10 rounded-sm p-4 backdrop-blur-sm">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span class="text-[#f5f5f7] text-xs">Réponse en moins de 24h</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isDismissed = ref(false)
const showAfterScroll = ref(false)

const recentClient = ref({
  name: 'Marie Dubois',
  role: 'CEO, Atelier Design',
  quote: 'Agence exceptionnelle. Site magnifique et équipe réactive !'
})

const clients = ref([
  { name: 'Sophie Martin', role: 'E-shop Manager', quote: 'Nos ventes ont +45% !' },
  { name: 'Jean Moreau', role: 'Chef Restaurant', quote: 'Sur-mesure, c\'est du vrai travail' },
  { name: 'Laurent Petit', role: 'Founder Startup', quote: 'Support réactif, très professionnel' }
])

const dismiss = () => {
  isDismissed.value = true
  // Save to localStorage so it stays dismissed
  if (process.client) {
    localStorage.setItem('socialProofDismissed', 'true')
  }
}

onMounted(() => {
  // Check if previously dismissed
  if (process.client) {
    isDismissed.value = localStorage.getItem('socialProofDismissed') === 'true'
    
    // Show after scrolling 300px
    const handleScroll = () => {
      showAfterScroll.value = window.scrollY > 300
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial
  }
  
  // Rotate client testimonials
  let index = 0
  setInterval(() => {
    index = (index + 1) % clients.value.length
    recentClient.value = clients.value[index]
  }, 5000)
})
</script>