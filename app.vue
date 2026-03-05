<!--
  Layout principal de l'application
  Structure: Header fixe + Contenu dynamique + Footer
-->
<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">
    <!-- Header de navigation fixe -->
    <AppHeader />
    
    <!-- Contenu principal avec espacement pour le header fixe -->
    <main class="flex-grow pt-16">
      <NuxtPage />
    </main>
    
    <!-- Footer avec liens et informations -->
    <AppFooter />
  </div>
</template>

<script setup>
// Configuration des meta tags pour le SEO
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Pure Web Agency` : 'Pure Web Agency | Agence Web Bordeaux';
  }
});
</script>
