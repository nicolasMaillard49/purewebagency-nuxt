<!--
  Page d'accueil - Hero section avec presentation de l'agence
-->
<template>
  <div>
    <!-- Section Hero principale -->
    <section class="relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div class="text-center max-w-3xl mx-auto">
          <!-- Badge de confiance -->
          <UBadge 
            color="primary" 
            variant="soft" 
            size="lg"
            class="mb-6"
          >
            <UIcon name="i-heroicons-sparkles" class="w-4 h-4 mr-1" />
            Agence web a Bordeaux
          </UBadge>
          
          <!-- Titre principal -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Sites web modernes, 
            <span class="text-primary-600">performants</span> 
            et SEO-friendly
          </h1>
          
          <!-- Sous-titre -->
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Nous creons des sites sur-mesure pour professionnels. 
            Heberges en France, conformes RGPD, optimises pour le referencement.
          </p>
          
          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              to="/contact"
              size="xl"
              color="primary"
              icon="i-heroicons-rocket-launch"
            >
              Demander un devis gratuit
            </UButton>
            <UButton
              to="/services"
              size="xl"
              color="gray"
              variant="outline"
              icon="i-heroicons-arrow-right"
            >
              Decouvrir nos services
            </UButton>
          </div>
          
          <!-- Stats de confiance -->
          <div class="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-500 mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Services rapides -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos services
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des solutions web completes pour faire grandir votre activite en ligne
          </p>
        </div>
        
        <!-- Grille de services -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="service in services"
            :key="service.title"
            class="card-hover"
          >
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <UIcon 
                    :name="service.icon" 
                    class="w-6 h-6 text-primary-600 dark:text-primary-400" 
                  />
                </div>
                <h3 class="text-xl font-semibold">{{ service.title }}</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              {{ service.description }}
            </p>
          </UCard>
        </div>
        
        <!-- CTA vers page services -->
        <div class="text-center mt-12">
          <UButton
            to="/services"
            size="lg"
            color="primary"
            variant="outline"
            icon="i-heroicons-arrow-right"
          >
            Voir tous nos services
          </UButton>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi nous choisir -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi choisir Pure Web Agency ?
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Nous mettons un point d'honneur a valoriser le savoir-faire francais, 
              tant dans la conception que dans la qualite du service.
            </p>
            <ul class="space-y-4">
              <li 
                v-for="advantage in advantages" 
                :key="advantage"
                class="flex items-start"
              >
                <UIcon 
                  name="i-heroicons-check-circle" 
                  class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" 
                />
                <span class="text-gray-700 dark:text-gray-300">{{ advantage }}</span>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
              <UIcon name="i-heroicons-rocket-launch" class="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Configuration SEO de la page
useHead({
  title: 'Agence Web Bordeaux | Creation de sites modernes',
  meta: [
    {
      name: 'description',
      content: 'Agence web specialisee dans la creation de sites modernes et performants. Devis gratuit. Hebergement en France.'
    }
  ]
});

// Statistiques de confiance
const stats = [
  { value: '50+', label: 'Projets realises' },
  { value: '100%', label: 'Clients satisfaits' },
  { value: '5+', label: 'Annees dexperience' }
];

// Services presentes sur l'accueil
const services = [
  {
    title: 'Creation de sites',
    description: 'Sites vitrines, e-commerce et applications web sur-mesure avec les dernieres technologies.',
    icon: 'i-heroicons-computer-desktop'
  },
  {
    title: 'SEO & Referencement',
    description: 'Optimisation pour les moteurs de recherche pour ameliorer votre visibilite en ligne.',
    icon: 'i-heroicons-magnifying-glass'
  },
  {
    title: 'Maintenance',
    description: 'Suivi et maintenance de votre site pour garantir sa securite et ses performances.',
    icon: 'i-heroicons-wrench'
  }
];

// Avantages de l'agence
const advantages = [
  'Hebergement en France avec conformite RGPD',
  'Sites 100% sur-mesure, pas de templates generiques',
  'Support reactif et accompagnement personnalise',
  'Tarifs transparents sans frais caches',
  'Code propre et maintenable pour lavenir'
];
</script>
