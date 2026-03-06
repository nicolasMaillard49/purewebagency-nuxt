<!--
  Header Ultra-Premium - Sonnet 4.6 Edition
  Animations complexes, effets cursor-aware, morphing menu
  Inspiré: Locomotive, Noomo, Awwwards Agency of the Year
-->
<template>
  <header 
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out"
    :class="headerClasses"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <!-- Progress bar indiquant la position de scroll -->
    <div 
      class="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#1e3a5f] to-[#4a90d9] transition-all duration-100"
      :style="{ width: `${scrollProgress}%` }"
    ></div>

    <!-- Background avec effet de profondeur -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        class="absolute inset-0 transition-all duration-700"
        :class="scrolled 
          ? 'bg-[#0a0a0f]/98 backdrop-blur-2xl' 
          : 'bg-transparent'"
      ></div>
      
      <!-- Gradient subtil qui suit le scroll -->
      <div 
        class="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/50 to-transparent transition-opacity duration-500"
        :class="scrolled ? 'opacity-0' : 'opacity-100'"
      ></div>
      
      <!-- Bordure animée -->
      <div 
        class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a90d9]/30 to-transparent transition-all duration-500"
        :class="scrolled ? 'opacity-100' : 'opacity-0'"
      ></div>
    </div>

    <div class="container-luxe relative">
      <div class="flex items-center justify-between h-20 lg:h-24">
        
        <!-- Logo avec animation complexe -->
        <NuxtLink 
          to="/" 
          class="group relative flex items-center gap-4 z-10"
          @mouseenter="logoHover = true"
          @mouseleave="logoHover = false"
        >
          <!-- Logo container avec effets multiples -->
          <div class="relative w-12 h-12">
            <!-- Bordure externe animée -->
            <div 
              class="absolute inset-0 border border-[#4a90d9]/40 transition-all duration-500"
              :class="logoHover ? 'scale-110 border-[#4a90d9] rotate-3' : 'scale-100'"
            ></div>
            
            <!-- Bordure interne -->
            <div 
              class="absolute inset-1 border border-[#4a90d9]/20 transition-all duration-500 delay-75"
              :class="logoHover ? 'scale-95 border-[#4a90d9]/60 -rotate-3' : 'scale-100'"
            ></div>
            
            <!-- Letter P avec animation -->
            <div class="absolute inset-0 flex items-center justify-center">
              <span 
                class="font-display text-2xl text-[#4a90d9] transition-all duration-300"
                :class="logoHover ? 'scale-110 text-white' : ''"
              >P</span>
            </div>
            
            <!-- Glow effect au hover -->
            <div 
              class="absolute inset-0 bg-[#4a90d9]/0 blur-xl transition-all duration-500"
              :class="logoHover ? 'bg-[#4a90d9]/20' : ''"
            ></div>
          </div>
          
          <!-- Texte logo avec reveal staggered -->
          <div class="hidden sm:flex flex-col">
            <span 
              class="font-display text-lg text-[#f5f5f7] transition-all duration-300 transform translate-x-0"
              :class="logoHover ? 'translate-x-1 text-[#4a90d9]' : 'translate-x-0'"
            >
              Pure
            </span>
            <span 
              class="text-[#5a5a6a] text-[10px] uppercase tracking-[0.3em] transition-all duration-300 delay-75 translate-x-0"
              :class="logoHover ? 'translate-x-2 text-[#8b8b9a]' : 'translate-x-0 text-[#5a5a6a]'"
            >
              Web Agency
            </span>
          </div>
        </NuxtLink>

        <!-- Navigation Desktop - Effet magnétique sur les liens -->
        <nav class="hidden lg:flex items-center gap-10">
          <div 
            v-for="(item, index) in navItems" 
            :key="item.to" 
            class="relative group"
            @mouseenter="activeNav = index"
            @mouseleave="activeNav = null"
          >
            <NuxtLink 
              :to="item.to"
              class="relative py-2 text-xs uppercase tracking-[0.25em] transition-all duration-300"
              :class="isActive(item.to) ? 'text-[#4a90d9]' : 'text-[#8b8b9a] group-hover:text-[#f5f5f7]'"
            >
              {{ item.label }}
              
              <!-- Effet de highlight au hover -->
              <span 
                class="absolute inset-0 -mx-3 -my-1 bg-[#4a90d9]/5 rounded-sm scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"
              ></span>
            </NuxtLink>
            
            <!-- Underline animé avec dégradé -->
            <div class="absolute -bottom-1 left-0 right-0 h-[2px] overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r from-[#4a90d9] via-[#6bb3ff] to-[#4a90d9] transition-transform duration-500 ease-out"
                :class="(isActive(item.to) || activeNav === index) ? 'translate-x-0' : '-translate-x-full'"
              ></div>
            </div>
            
            <!-- Dot indicator pour active -->
            <div 
              class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4a90d9] transition-all duration-300"
              :class="isActive(item.to) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
            ></div>
          </div>
        </nav>

        <!-- Actions droite avec micro-interactions -->
        <div class="flex items-center gap-3 lg:gap-5">
          
          <!-- Search icon (decorative) -->
          <button 
            class="hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-white/5 text-[#8b8b9a] hover:text-[#4a90d9] hover:border-[#4a90d9]/30 transition-all duration-300 hover:scale-110"
            aria-label="Search"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- CTA Button avec effet de brillance -->
          <NuxtLink 
            to="/contact" 
            class="relative hidden sm:inline-flex items-center gap-2 px-6 py-3 overflow-hidden group"
            :class="scrolled ? 'bg-[#4a90d9] text-[#0a0a0f]' : 'border border-[#4a90d9]/50 text-[#4a90d9]'"
          >
            <!-- Background shine effect -->
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <span class="relative text-xs uppercase tracking-widest font-medium">Commencer</span>
            <svg 
              class="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
          
          <!-- Menu mobile button - Animation morphing -->
          <button 
            @click="toggleMenu"
            class="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-[#4a90d9]/50 transition-all duration-300"
            :class="isMenuOpen ? 'bg-[#4a90d9]/10 border-[#4a90d9]' : ''"
            aria-label="Toggle menu"
            aria-expanded="isMenuOpen"
          >
            <div class="relative w-5 h-5">
              <!-- Ligne du haut -->
              <span 
                class="absolute left-0 top-1 w-5 h-[2px] bg-current transition-all duration-300"
                :class="isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45 bg-[#4a90d9]' : 'bg-[#f5f5f7]'"
              ></span>
              <!-- Ligne du milieu -->
              <span 
                class="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-current transition-all duration-300"
                :class="isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 bg-[#f5f5f7]'"
              ></span>
              <!-- Ligne du bas -->
              <span 
                class="absolute left-0 bottom-1 w-5 h-[2px] bg-current transition-all duration-300"
                :class="isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45 bg-[#4a90d9]' : 'bg-[#f5f5f7]'"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile - Full screen overlay avec animations staggered -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMenuOpen" 
        class="lg:hidden fixed inset-0 top-20 z-40"
        @click.self="closeMenu"
      >
        <!-- Backdrop (optimized - no blur for performance) -->
        <div class="absolute inset-0 bg-[#0a0a0f]"></div>
        
        <!-- Contenu menu -->
        <nav class="relative h-full flex flex-col justify-center px-8">
          <div class="space-y-2">
            <NuxtLink 
              v-for="(item, index) in navItems" 
              :key="item.to"
              :to="item.to"
              @click="closeMenu"
              class="block py-4 overflow-hidden group"
              :style="{ transitionDelay: `${index * 75}ms` }"
            >
              <div class="flex items-center gap-4">
                <!-- Numéro -->
                <span class="text-[#4a90d9]/40 text-xs font-mono">0{{ index + 1 }}</span>
                
                <!-- Label avec animation -->
                <span 
                  class="text-3xl font-display transition-all duration-300 transform"
                  :class="isActive(item.to) 
                    ? 'text-[#4a90d9] translate-x-4' 
                    : 'text-[#f5f5f7] group-hover:text-[#4a90d9] group-hover:translate-x-4'"
                >
                  {{ item.label }}
                </span>
                
                <!-- Arrow qui apparaît au hover -->
                <svg 
                  class="w-6 h-6 text-[#4a90d9] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
              
              <!-- Underline animée -->
              <div class="h-px bg-gradient-to-r from-[#4a90d9]/50 to-transparent mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </NuxtLink>
          </div>
          
          <!-- CTA en bas -->
          <div class="mt-12 pt-8 border-t border-white/10">
            <NuxtLink 
              to="/contact"
              @click="closeMenu"
              class="inline-flex items-center gap-3 text-[#4a90d9] group"
            >
              <span class="text-lg">Commencer un projet</span>
              <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
            
            <!-- Info contact -->
            <div class="mt-8 space-y-2 text-[#5a5a6a] text-sm">
              <p>contact@purewebagency.com</p>
              <p>Bordeaux, France</p>
            </div>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
// Refs
const headerRef = ref(null)
const scrolled = ref(false)
const isMenuOpen = ref(false)
const isHovering = ref(false)
const logoHover = ref(false)
const activeNav = ref(null)
const scrollProgress = ref(0)

// Navigation items
const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' }
]

// Computed classes for header
const headerClasses = computed(() => ({
  'border-b border-white/5': scrolled.value && !isMenuOpen.value,
  'border-transparent': !scrolled.value || isMenuOpen.value
}))

// Check if route is active
const isActive = (path) => {
  const route = useRoute()
  return route.path === path
}

// Toggle menu with animation lock
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevent body scroll when menu is open
  if (process.client) {
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }
}

// Close menu
const closeMenu = () => {
  isMenuOpen.value = false
  if (process.client) {
    document.body.style.overflow = ''
  }
}

// Scroll handler with throttling
let ticking = false
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY
      scrolled.value = scrollY > 50
      
      // Calculate scroll progress (0-100)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.value = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
      
      ticking = false
    })
    ticking = true
  }
}

// Watch for route changes
watch(() => useRoute().path, () => {
  closeMenu()
})

// Lifecycle
onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = '' // Cleanup
  }
})

// Close menu on escape key
onMounted(() => {
  if (process.client) {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen.value) {
        closeMenu()
      }
    }
    window.addEventListener('keydown', handleEscape)
    
    onUnmounted(() => {
      window.removeEventListener('keydown', handleEscape)
    })
  }
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(74, 144, 217, 0.3); }
  50% { box-shadow: 0 0 40px rgba(74, 144, 217, 0.5); }
}

/* Smooth transitions for all interactive elements */
a, button {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom easing for premium feel */
.ease-out-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

/* Prevent layout shift during menu transition */
:global(body.menu-open) {
  overflow: hidden;
}
</style>