<!--
  Page Mentions legales
-->
<template>
  <div class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Mentions legales</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <h2>Identite</h2>
        <p>
          Pure Web Agency<br>
          Adresse: Bordeaux, France<br>
          Email: contact@purewebagency.com
        </p>

        <h2>Hebergement</h2>
        <p>
          Ce site est heberge par Vercel Inc.<br>
          340 S Lemon Ave #4133<br>
          Walnut, CA 91789<br>
          Etats-Unis
        </p>

        <h2>Propriete intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site est protege par les lois francaises 
          et internationales relatives a la propriete intellectuelle.
        </p>

        <h2>Donnees personnelles</h2>
        <p>
          Les donnees collectees via le formulaire de contact sont utilisees 
          uniquement pour repondre a votre demande. Conformement au RGPD, 
          vous disposez d'un droit d'acces, de rectification et de suppression 
          de vos donnees.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Mentions legales',
  meta: [
    {
      name: 'description',
      content: 'Mentions legales de Pure Web Agency'
    }
  ]
});
</script>
