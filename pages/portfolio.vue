<!--
  Page Portfolio - Realisations de l'agence
-->
<template>
  <div>
    <!-- Header -->
    <section class="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nos Realisations</h1>
        <p class="text-xl text-purple-100 max-w-2xl mx-auto">
          Decouvrez quelques-uns de nos projets recents
        </p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Projet 1 -->
          <UCard class="overflow-hidden card-hover">
            <div class="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <UIcon name="i-heroicons-building-storefront" class="w-16 h-16 text-white" />
            </div>
            <template #header>
              <h3 class="text-xl font-semibold">Site Restaurant</h3>
              <p class="text-sm text-gray-500">Bordeaux</p>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Site vitrine moderne pour un restaurant bordelais avec reservation en ligne.
            </p>
            <template #footer>
              <div class="flex gap-2">
                <UBadge color="blue" size="sm">Vue.js</UBadge>
                <UBadge color="green" size="sm">Nuxt</UBadge>
              </div>
            </template>
          </UCard>

          <!-- Projet 2 -->
          <UCard class="overflow-hidden card-hover">
            <div class="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <UIcon name="i-heroicons-shopping-bag" class="w-16 h-16 text-white" />
            </div>
            <template #header>
              <h3 class="text-xl font-semibold">Boutique E-commerce</h3>
              <p class="text-sm text-gray-500">E-commerce</p>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Boutique en ligne complete avec paiement securise et gestion des stocks.
            </p>
            <template #footer>
              <div class="flex gap-2">
                <UBadge color="purple" size="sm">Shopify</UBadge>
                <UBadge color="orange" size="sm">Stripe</UBadge>
              </div>
            </template>
          </UCard>

          <!-- Projet 3 -->
          <UCard class="overflow-hidden card-hover">
            <div class="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <UIcon name="i-heroicons-briefcase" class="w-16 h-16 text-white" />
            </div>
            <template #header>
              <h3 class="text-xl font-semibold">Site Corporate</h3>
              <p class="text-sm text-gray-500">Entreprise</p>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Site institutionnel pour une entreprise avec espace client et actualites.
            </p>
            <template #footer>
              <div class="flex gap-2">
                <UBadge color="blue" size="sm">WordPress</UBadge>
                <UBadge color="primary" size="sm">Sur-mesure</UBadge>
              </div>
            </template>
          </UCard>

        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Vous avez un projet en tete ?
          </p>
          <UButton
            to="/contact"
            size="xl"
            color="primary"
            icon="i-heroicons-rocket-launch"
          >
            Commencer votre projet
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Nos Realisations',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de nos projets web: sites vitrines, e-commerce et applications.'
    }
  ]
});
</script>
