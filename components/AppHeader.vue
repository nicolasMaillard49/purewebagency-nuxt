<!--
  Header de navigation avec menu responsive
  Utilise Nuxt UI pour les composants (UButton, USlideover)
-->
<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 
           backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo et lien vers l'accueil -->
        <NuxtLink 
          to="/" 
          class="flex items-center space-x-2 text-xl font-bold text-primary-600 
                 hover:text-primary-700 transition-colors"
        >
          <UIcon name="i-heroicons-code-bracket" class="w-8 h-8" />
          <span class="hidden sm:inline">Pure Web Agency</span>
          <span class="sm:hidden">Pure Web</span>
        </NuxtLink>

        <!-- Navigation desktop avec liens de page -->
        <nav class="hidden md:flex items-center space-x-1">
          <UButton
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            variant="ghost"
            color="gray"
            class="font-medium"
          >
            {{ item.label }}
          </UButton>
        </nav>

        <!-- Actions: Devis et menu mobile -->
        <div class="flex items-center space-x-2">
          <!-- Bouton devis (visible sur desktop) -->
          <UButton
            to="/contact"
            color="primary"
            class="hidden sm:inline-flex"
            icon="i-heroicons-rocket-launch"
          >
            Devis gratuit
          </UButton>
          
          <!-- Bouton menu mobile -->
          <UButton
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            class="md:hidden"
            @click="isMenuOpen = true"
            aria-label="Ouvrir le menu"
          />
        </div>
      </div>
    </div>

    <!-- Menu mobile (Slideover de Nuxt UI) -->
    <USlideover v-model="isMenuOpen" side="right">
      <div class="p-4 flex flex-col h-full">
        <!-- En-tete du menu mobile -->
        <div class="flex items-center justify-between mb-8">
          <span class="text-xl font-bold text-primary-600">Pure Web Agency</span>
          <UButton
            icon="i-heroicons-x-mark"
            color="gray"
            variant="ghost"
            @click="isMenuOpen = false"
            aria-label="Fermer le menu"
          />
        </div>
        
        <!-- Liens de navigation mobile -->
        <nav class="flex flex-col space-y-2">
          <UButton
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            variant="ghost"
            color="gray"
            size="lg"
            class="justify-start"
            @click="isMenuOpen = false"
          >
            <UIcon :name="item.icon" class="w-5 h-5 mr-2" />
            {{ item.label }}
          </UButton>
        </nav>
        
        <!-- Bouton CTA en bas du menu -->
        <div class="mt-auto pt-4">
          <UButton
            to="/contact"
            color="primary"
            size="lg"
            block
            icon="i-heroicons-rocket-launch"
            @click="isMenuOpen = false"
          >
            Devis gratuit
          </UButton>
        </div>
      </div>
    </USlideover>
  </header>
</template>

<script setup>
// Etat du menu mobile (ouvert/ferme)
const isMenuOpen = ref(false);

// Items de navigation avec leurs icones
const navItems = [
  { 
    label: 'Accueil', 
    to: '/', 
    icon: 'i-heroicons-home' 
  },
  { 
    label: 'Services', 
    to: '/services', 
    icon: 'i-heroicons-wrench-screwdriver' 
  },
  { 
    label: 'Realisations', 
    to: '/portfolio', 
    icon: 'i-heroicons-briefcase' 
  },
  { 
    label: 'Contact', 
    to: '/contact', 
    icon: 'i-heroicons-envelope' 
  }
];
</script>
