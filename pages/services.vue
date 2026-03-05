<!--
  Page Services - Detail des prestations de l'agence
-->
<template>
  <div>
    <!-- Header de page -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">
          Des solutions web completes pour votre reussite en ligne
        </p>
      </div>
    </section>

    <!-- Liste detaillee des services -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-16">
          
          <!-- Service 1: Creation de sites -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl">
                <UIcon name="i-heroicons-computer-desktop" class="w-16 h-16 text-primary-600" />
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Creation de sites web
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Nous concevons des sites modernes, rapides et adaptes a vos besoins. 
                Que vous ayez besoin dun site vitrine, dune boutique en ligne ou dune 
                application web complexe, nous avons la solution.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Sites vitrines professionnels
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  E-commerce (boutiques en ligne)
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Applications web sur-mesure
                </li>
              </ul>
              <UButton to="/contact" color="primary">Demander un devis</UButton>
            </div>
          </div>

          <UDivider />

          <!-- Service 2: SEO -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                SEO & Referencement
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Ameliorez votre visibilite sur Google et attirez plus de clients 
                grace a nos strategies de referencement naturel optimisees.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Audit SEO complet
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Optimisation on-page
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Strategie de contenu
                </li>
              </ul>
              <UButton to="/contact" color="primary">Demander un devis</UButton>
            </div>
            <div>
              <div class="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
                <UIcon name="i-heroicons-magnifying-glass" class="w-16 h-16 text-green-600" />
              </div>
            </div>
          </div>

          <UDivider />

          <!-- Service 3: Maintenance -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl">
                <UIcon name="i-heroicons-wrench" class="w-16 h-16 text-orange-600" />
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Maintenance & Support
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Gardez votre site performant et securise avec nos forfaits de 
                maintenance mensuelle. Mises a jour, sauvegardes, monitoring.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Mises a jour regulieres
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Sauvegardes automatiques
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Support technique reactif
                </li>
              </ul>
              <UButton to="/contact" color="primary">Demander un devis</UButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Nos Services',
  meta: [
    {
      name: 'description',
      content: 'Creation de sites web, SEO et maintenance. Des solutions completes pour votre presence en ligne.'
    }
  ]
});
</script>
