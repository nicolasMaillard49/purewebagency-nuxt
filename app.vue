<template>
  <div class="min-h-screen bg-[#0a0a0f] text-[#f5f5f7] relative overflow-x-hidden">
    <!-- Scroll Progress Bar -->
    <ScrollProgress />
    
    <!-- Grain overlay -->
    <div class="grain-overlay"></div>
    
    <!-- Page Loader -->
    <Transition 
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-700"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isLoading" class="page-loader">
        <div class="text-center space-y-4">
          <div class="text-4xl font-display text-[#f5f5f7] animate-pulse">Pure Web Agency</div>
          <div class="w-32 h-px bg-gradient-to-r from-transparent via-[#4a90d9] to-transparent mx-auto"></div>
        </div>
      </div>
    </Transition>
    
    <!-- Custom Cursor -->
    <ClientOnly>
      <div v-if="isDesktop" class="custom-cursor" :class="{ 'hover': isHovering }" :style="cursorStyle"></div>
      <div v-if="isDesktop" class="cursor-dot" :style="dotStyle"></div>
    </ClientOnly>
    
    <!-- Social Proof Widget -->
    <SocialProofWidget />
    
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const isLoading = ref(true)
const isDesktop = ref(false)
const isHovering = ref(false)

// Cursor
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

onMounted(() => {
  // Check device
  isDesktop.value = window.matchMedia('(pointer: fine)').matches
  
  // Page loader
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
  
  // Custom cursor
  if (isDesktop.value) {
    let rafId = null
    
    const updateCursor = (e) => {
      cursorX.value = e.clientX
      cursorY.value = e.clientY
      
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          dotX.value = e.clientX
          dotY.value = e.clientY
          rafId = null
        })
      }
    }
    
    document.addEventListener('mousemove', updateCursor, { passive: true })
    
    // Hover detection
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, .btn-luxe, .card-luxe, .magnetic-btn')
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => isHovering.value = true)
        el.addEventListener('mouseleave', () => isHovering.value = false)
      })
    }
    
    // Run after DOM is ready
    setTimeout(addHoverListeners, 100)
    
    // Re-run on page change
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })
  }
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
    { name: 'theme-color', content: '#0a0a0f' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Pure Web Agency' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})
</script>