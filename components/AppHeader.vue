<!-- Header - Style Minimaliste Luxe -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
    <div class="container-luxe">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 border border-[#4a90d9]/30 flex items-center justify-center group-hover:border-[#4a90d9] transition-colors duration-400">
            <span class="text-[#4a90d9] font-display text-xl">P</span>
          </div>
          <span class="font-display text-xl text-[#f5f5f7] hidden sm:block">Pure Web Agency</span>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            class="text-sm uppercase tracking-widest text-[#8b8b9a] hover:text-[#f5f5f7] transition-colors duration-300"
            :class="{ 'text-[#4a90d9]': $route.path === item.to }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA & Menu Mobile -->
        <div class="flex items-center gap-6">
          <NuxtLink to="/contact" class="btn-luxe hidden sm:inline-flex text-xs py-3 px-6">
            Contact
          </NuxtLink>
          
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden text-[#f5f5f7] p-2"
            aria-label="Menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <Transition 
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-[#0a0a0f] border-b border-white/5">
        <nav class="container-luxe py-6 space-y-4">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            @click="isMenuOpen = false"
            class="block text-lg text-[#8b8b9a] hover:text-[#f5f5f7] transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink to="/contact" @click="isMenuOpen = false" class="btn-luxe inline-flex mt-4">
            Contact
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
  <div class="h-20"></div>
</template>

<script setup>
const isMenuOpen = ref(false);

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/portfolio' }
];
</script>
