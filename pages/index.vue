<!--
  Page d'accueil - Design moderne et professionnel
-->
<template>
  <div>
    <!-- Section Hero avec gradient subtil -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <!-- Elements decoratifs en arriere-plan -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div class="container-custom relative z-10 py-20 lg:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge premium -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-8 animate-fadeIn">
            <span class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Agence web a Bordeaux
          </div>
          
          <!-- Titre principal avec typographie amelioree -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-fadeInUp">
            Sites web <span class="gradient-text">modernes</span> & performants
          </h1>
          
          <!-- Sous-titre -->
          <p class="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-100">
            Nous creons des experiences digitales sur-mesure pour faire grandir votre activite. 
            Heberges en France, conformes RGPD.
          </p>
          
          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-200">
            <NuxtLink to="/contact" class="btn-primary">
              <span>Demander un devis</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
            <NuxtLink to="/portfolio" class="btn-secondary">
              Voir nos realisations
            </NuxtLink>
          </div>
          
          <!-- Stats de confiance -->
          <div class="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeInUp delay-300">
            <div class="text-center">
              <div class="text-4xl font-bold text-slate-900 mb-1">50+</div>
              <div class="text-sm text-slate-500">Projets livres</div>
            </div>
            <div class="text-center border-x border-slate-200">
              <div class="text-4xl font-bold text-slate-900 mb-1">100%</div>
              <div class="text-sm text-slate-500">Satisfaction client</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-slate-900 mb-1">5+</div>
              <div class="text-sm text-slate-500">Annees d'expertise</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Vague decorative en bas -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Section Services avec cartes modernes -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nos services</span>
          <h2 class="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Solutions web completes
          </h2>
          <p class="mt-4 text-lg text-slate-600">
            Du site vitrine a l'application complexe, nous accompagnons votre projet de A a Z
          </p>
        </div>
        
        <!-- Grille de services -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="service.title" 
               class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            <!-- Icone avec fond degrade -->
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="service.icon" class="w-7 h-7 text-white" />
            </div>
            
            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ service.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ service.description }}</p>
            
            <NuxtLink :to="service.link" class="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              En savoir plus
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi nous choisir -->
    <section class="section-padding bg-slate-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Pourquoi nous</span>
            <h2 class="mt-4 text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              L'excellence a la francaise
            </h2>
            <p class="text-lg text-slate-600 mb-8">
              Nous mettons un point d'honneur a valoriser le savoir-faire francais, 
              tant dans la conception que dans la qualite du service. Chaque projet 
              est une opportunite de creer quelque chose d'exceptionnel.
            </p>
            
            <ul class="space-y-4">
              <li v-for="advantage in advantages" :key="advantage" class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600" />
                </div>
                <span class="text-slate-700">{{ advantage }}</span>
              </li>
            </ul>
            
            <NuxtLink to="/contact" class="btn-primary mt-8 inline-flex">
              Commencer un projet
            </NuxtLink>
          </div>
          
          <!-- Illustration ou image -->
          <div class="relative">
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div class="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                <div class="text-center p-8">
                  <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <UIcon name="i-heroicons-rocket-launch" class="w-16 h-16 text-blue-600" />
                  </div>
                  <p class="text-3xl font-bold text-slate-900 mb-2">100%</p>
                  <p class="text-slate-600">Projets livres dans les delais</p>
                </div>
              </div>
            </div>
            <!-- Badge flottant -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p class="font-bold text-slate-900">RGPD Compliant</p>
                <p class="text-sm text-slate-500">100% securise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Pret a demarrer votre projet ?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Discutons de vos besoins et obtenez un devis gratuit en moins de 24h.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
          Demander un devis gratuit
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Agence Web Bordeaux | Creation de sites modernes',
  meta: [
    {
      name: 'description',
      content: 'Agence web specialisee dans la creation de sites modernes et performants. Devis gratuit. Hebergement en France.'
    }
  ]
});

const services = [
  {
    title: 'Creation de sites',
    description: 'Sites vitrines, e-commerce et applications web sur-mesure avec les dernieres technologies.',
    icon: 'i-heroicons-computer-desktop',
    link: '/services'
  },
  {
    title: 'SEO & Referencement',
    description: 'Optimisation pour les moteurs de recherche pour ameliorer votre visibilite en ligne.',
    icon: 'i-heroicons-magnifying-glass',
    link: '/services'
  },
  {
    title: 'Maintenance',
    description: 'Suivi et maintenance de votre site pour garantir sa securite et ses performances.',
    icon: 'i-heroicons-wrench',
    link: '/services'
  }
];

const advantages = [
  'Hebergement en France avec conformite RGPD',
  'Sites 100% sur-mesure, pas de templates generiques',
  'Support reactif et accompagnement personnalise',
  'Tarifs transparents sans frais caches',
  'Code propre et maintenable pour lavenir'
];
</script>
