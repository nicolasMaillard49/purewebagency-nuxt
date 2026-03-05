<template>
  <div class="min-h-screen bg-[#0a0a0f] text-[#f5f5f7] relative">
    <!-- Grain overlay pour texture subtile -->
    <div class="grain-overlay"></div>
    
    <!-- Page Loader -->
    <div v-if="isLoading" class="page-loader">
      <div class="loader-text">Pure Web Agency</div>
    </div>
    
    <!-- Custom Cursor (desktop only) -->
    <ClientOnly>
      <div 
        v-if="isDesktop" 
        class="custom-cursor"
        :class="{ 'hover': isHovering }"
        :style="cursorStyle"
      ></div>
      <div 
        v-if="isDesktop" 
        class="cursor-dot"
        :style="dotStyle"
      ></div>
    </ClientOnly>
    
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Page loader
const isLoading = ref(true)
const isDesktop = ref(false)
const isHovering = ref(false)

// Cursor position
const cursorX = ref(0)
const cursorY = ref(0)
const dotX = ref(0)
const dotY = ref(0)

const cursorStyle = computed(() => ({
  transform: `translate(${cursorX.value - 10}px, ${cursorY.value - 10}px)`
}))

const dotStyle = computed(() => ({
  transform: `translate(${dotX.value - 2}px, ${dotY.value - 2}px)`
}))

// Initialize on client
onMounted(() => {
  // Check if desktop
  isDesktop.value = window.matchMedia('(pointer: fine)').matches
  
  // Page loader
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
  
  // Custom cursor
  if (isDesktop.value) {
    document.addEventListener('mousemove', (e) => {
      cursorX.value = e.clientX
      cursorY.value = e.clientY
      
      // Dot follows with slight delay
      setTimeout(() => {
        dotX.value = e.clientX
        dotY.value = e.clientY
      }, 50)
    })
    
    // Hover detection
    const hoverElements = document.querySelectorAll('a, button, .btn-luxe, .card-luxe')
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => isHovering.value = true)
      el.addEventListener('mouseleave', () => isHovering.value = false)
    })
  }
  
  // Initialize scroll reveal
  const { initScrollReveal } = useScrollReveal()
  initScrollReveal()
})

// SEO
useHead({
  titleTemplate: '%s | Pure Web Agency',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { 
      name: 'description', 
      content: 'Agence web créative spécialisée dans les expériences digitales d\'exception. Design sur-mesure, performances optimales.'
    },
    { name: 'theme-color', content: '#0a0a0f' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})
</script>