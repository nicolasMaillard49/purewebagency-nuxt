<!--
  Footer avec informations de contact et liens
  Structure en 3 colonnes sur desktop
-->
<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Section principale du footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Colonne 1: A propos -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Pure Web Agency</h3>
          <p class="text-sm leading-relaxed mb-4">
            Equipe passionnee par le web, specialisee dans la creation de sites 
            modernes, performants et adaptes a vos besoins. Savoir-faire francais 
            et hebergement en France.
          </p>
          <!-- Icones sociaux -->
          <div class="flex space-x-4">
            <UButton
              v-for="social in socialLinks"
              :key="social.name"
              :to="social.url"
              target="_blank"
              color="gray"
              variant="ghost"
              size="sm"
              :icon="social.icon"
              :aria-label="social.name"
            />
          </div>
        </div>

        <!-- Colonne 2: Liens rapides -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Liens rapides</h3>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item.to">
              <NuxtLink 
                :to="item.to" 
                class="text-sm hover:text-white transition-colors
                       flex items-center"
              >
                <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 mr-1" />
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Colonne 3: Contact -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
              <span class="text-sm">Bordeaux, France</span>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-2 flex-shrink-0" />
              <a 
                href="mailto:contact@purewebagency.com" 
                class="text-sm hover:text-white transition-colors"
              >
                contact@purewebagency.com
              </a>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 mr-2 flex-shrink-0" />
              <span class="text-sm">Lun-Ven: 9h-18h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Barre de copyright -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {{ currentYear }} Pure Web Agency. Tous droits reserves.</p>
          <p class="mt-2 md:mt-0">
            Heberge en France avec 
            <UIcon name="i-heroicons-heart" class="w-4 h-4 inline text-red-500" />
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Annee courante pour le copyright
const currentYear = new Date().getFullYear();

// Liens vers les reseaux sociaux
const socialLinks = [
  { name: 'LinkedIn', url: '#', icon: 'i-heroicons-linkedin' },
  { name: 'Twitter', url: '#', icon: 'i-heroicons-twitter' },
  { name: 'Instagram', url: '#', icon: 'i-heroicons-instagram' }
];

// Liens rapides de navigation
const quickLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Realisations', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
  { label: 'Mentions legales', to: '/legal' }
];
</script>
