<!-- Header Premium - Minimaliste Luxe avec animations -->
<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled 
      ? 'bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-[#4a90d9]/20' 
      : 'bg-transparent border-b border-transparent'"
  >
    <div class="container-luxe">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo avec animation -->
        <NuxtLink to="/" class="group flex items-center gap-3 relative">
          <!-- Animated logo box -->
          <div class="relative w-10 h-10 flex items-center justify-center">
            <div class="absolute inset-0 border border-[#4a90d9]/30 group-hover:border-[#4a90d9] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#4a90d9]/20"></div>
            <div class="relative z-10 text-[#4a90d9] font-display text-xl group-hover:scale-110 transition-transform duration-300">P</div>
          </div>
          
          <!-- Logo text -->
          <div class="hidden sm:flex flex-col">
            <span class="font-display text-sm text-[#f5f5f7] group-hover:text-[#4a90d9] transition-colors duration-300">Pure</span>
            <span class="text-[#5a5a6a] text-xs uppercase tracking-widest">Web Agency</span>
          </div>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <nav class="hidden lg:flex items-center gap-12">
          <div v-for="item in navItems" :key="item.to" class="relative group">
            <NuxtLink 
              :to="item.to"
              class="text-xs uppercase tracking-[0.2em] text-[#8b8b9a] group-hover:text-[#f5f5f7] transition-colors duration-300 pb-2"
              :class="isActive(item.to) ? 'text-[#4a90d9]' : ''"
            >
              {{ item.label }}
            </NuxtLink>
            
            <!-- Underline animation -->
            <div 
              class="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#4a90d9] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              :class="isActive(item.to) ? 'scale-x-100' : ''"
            ></div>
          </div>
        </nav>

        <!-- Right side actions -->
        <div class="flex items-center gap-4 lg:gap-6">
          <!-- CTA Button -->
          <NuxtLink 
            to="/contact" 
            class="hidden sm:inline-flex btn-luxe text-xs py-3 px-6 shine magnetic-btn"
          >
            Commencer
          </NuxtLink>
          
          <!-- Theme toggle (future) -->
          <button 
            class="hidden md:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center hover:border-[#4a90d9] transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <svg class="w-5 h-5 text-[#8b8b9a] hover:text-[#4a90d9] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          
          <!-- Mobile menu button -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#4a90d9] transition-colors duration-300"
            :class="isMenuOpen ? 'bg-[#4a90d9]/10 border-[#4a90d9]' : ''"
            aria-label="Menu"
          >
            <svg 
              class="w-5 h-5 text-[#f5f5f7] transition-transform duration-300"
              :class="isMenuOpen ? 'rotate-90' : ''"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <nav v-if="isMenuOpen" class="lg:hidden border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-lg">
        <div class="container-luxe py-6 space-y-4">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            @click="isMenuOpen = false"
            class="block px-4 py-3 text-sm uppercase tracking-widest text-[#8b8b9a] hover:text-[#4a90d9] hover:bg-[#12121a] rounded-sm transition-all duration-300"
            :class="isActive(item.to) ? 'text-[#4a90d9] bg-[#12121a]' : ''"
          >
            {{ item.label }}
          </NuxtLink>
          
          <NuxtLink 
            to="/contact"
            @click="isMenuOpen = false"
            class="block w-full btn-luxe text-center py-3 mt-4"
          >
            Contact
          </NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
const scrolled = ref(false)
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' }
]

const isActive = (path) => {
  return useRoute().path === path
}

// Scroll detection
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
  
  // Close menu on route change
  watch(() => useRoute().path, () => {
    isMenuOpen.value = false
  })
})
</script>

<style scoped>
/* Glow effect on hover */
:deep(.btn-luxe) {
  position: relative;
}

:deep(.btn-luxe)::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(74, 144, 217, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
}

:deep(.btn-luxe):hover::before {
  opacity: 1;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>