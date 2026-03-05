<!--
  Page Article Blog - En construction
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <section class="section-luxe">
      <div class="container-luxe py-32">
        <div class="max-w-4xl mx-auto text-center space-y-8 reveal">
          <h1 class="text-5xl md:text-7xl text-[#f5f5f7]">Article en construction</h1>
          <p class="text-xl text-[#8b8b9a] font-light">
            Cet article sera disponible prochainement.
          </p>
          <NuxtLink to="/blog" class="btn-luxe">
            Retour au blog
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Article',
  meta: [
    {
      name: 'description',
      content: 'Article blog'
    }
  ]
})
</script>