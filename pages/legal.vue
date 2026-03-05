<!--
  Page Mentions Légales - Design Minimaliste Luxe
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <section class="section-luxe">
      <div class="container-luxe max-w-4xl">
        <h1 class="text-4xl md:text-5xl text-[#f5f5f7] mb-12 font-display">
          Mentions légales
        </h1>
        
        <div class="prose prose-invert prose-lg max-w-none space-y-12">
          <div class="space-y-4">
            <h2 class="text-2xl text-[#f5f5f7] font-display">Éditeur du site</h2>
            <p class="text-[#8b8b9a] font-light leading-relaxed">
              Pure Web Agency<br>
              Adresse : Bordeaux, France<br>
              Email : contact@purewebagency.com
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl text-[#f5f5f7] font-display">Hébergement</h2>
            <p class="text-[#8b8b9a] font-light leading-relaxed">
              Ce site est hébergé par Vercel Inc.<br>
              340 S Lemon Ave #4133<br>
              Walnut, CA 91789<br>
              États-Unis
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl text-[#f5f5f7] font-display">Propriété intellectuelle</h2>
            <p class="text-[#8b8b9a] font-light leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) 
              est protégé par les lois françaises et internationales relatives à la 
              propriété intellectuelle. Toute reproduction, représentation, modification, 
              publication, transmission, dénaturation, totale ou partielle du site ou 
              de son contenu, par quelque procédé que ce soit, et sur quelque support 
              que ce soit est interdite sans l'autorisation écrite préalable de Pure Web Agency.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl text-[#f5f5f7] font-display">Données personnelles</h2>
            <p class="text-[#8b8b9a] font-light leading-relaxed">
              Les données collectées via le formulaire de contact sont utilisées uniquement 
              pour répondre à votre demande. Conformément au Règlement Général sur la 
              Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
              de suppression et de portabilité de vos données. Pour exercer ces droits, 
              contactez-nous à l'adresse email indiquée ci-dessus.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl text-[#f5f5f7] font-display">Cookies</h2>
            <p class="text-[#8b8b9a] font-light leading-relaxed">
              Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques 
              essentiels au fonctionnement du site peuvent être utilisés.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Mentions légales',
  meta: [
    {
      name: 'description',
      content: 'Mentions légales de Pure Web Agency'
    }
  ]
});
</script>