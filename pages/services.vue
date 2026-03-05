<!--
  Page Services - Design Minimaliste Luxe
  Inspiré des meilleures agences (Locomotive, Noomo)
-->
<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/10 via-transparent to-[#4a90d9]/5"></div>
      
      <div class="container-luxe relative z-10 py-32">
        <div class="max-w-4xl">
          <span class="text-[#4a90d9] uppercase tracking-[0.3em] text-sm mb-6 block animate-fadeIn">
            Nos Expertises
          </span>
          <h1 class="text-5xl md:text-7xl lg:text-8xl text-[#f5f5f7] leading-[0.9] mb-8 animate-fadeInUp">
            Des solutions<br>
            <span class="text-gradient">sur-mesure</span>
          </h1>
          <p class="text-xl md:text-2xl text-[#8b8b9a] font-light max-w-2xl leading-relaxed animate-fadeInUp delay-200">
            Chaque projet est une opportunité de créer l'exceptionnel. 
            Une approche artisanale du développement web.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Detail Section -->
    <section class="section-luxe border-t border-white/5">
      <div class="container-luxe">
        <div class="space-y-32">
          
          <!-- Service 1: Création de sites -->
          <div class="grid-luxe grid-luxe-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <div class="relative">
                <div class="aspect-[4/3] bg-gradient-to-br from-[#1e3a5f]/20 to-[#4a90d9]/10 rounded-sm border border-white/5"></div>
                <div class="absolute -bottom-6 -right-6 text-[8rem] font-display text-[#4a90d9]/10 leading-none">01</div>
              </div>
            </div>
            <div class="order-1 lg:order-2 space-y-6">
              <div class="line-accent"></div>
              <h2 class="text-4xl md:text-5xl text-[#f5f5f7]">
                Création de sites web
              </h2>
              <p class="text-lg text-[#8b8b9a] font-light leading-relaxed">
                Nous concevons des expériences digitales uniques qui captivent vos utilisateurs 
                et convertissent vos visiteurs en clients. Chaque site est pensé comme une 
                œuvre sur-mesure, reflétant parfaitement votre identité de marque.
              </p>
              <ul class="space-y-4 pt-4">
                <li v-for="item in service1Features" :key="item" class="flex items-center gap-4 text-[#f5f5f7]">
                  <span class="w-1.5 h-1.5 bg-[#4a90d9] rounded-full"></span>
                  <span class="font-light">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Service 2: E-commerce -->
          <div class="grid-luxe grid-luxe-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="line-accent"></div>
              <h2 class="text-4xl md:text-5xl text-[#f5f5f7]">
                E-commerce
              </h2>
              <p class="text-lg text-[#8b8b9a] font-light leading-relaxed">
                Des boutiques en ligne qui vendent. Nous créons des expériences d'achat 
                fluides et sécurisées qui maximisent votre taux de conversion et fidélisent 
                vos clients.
              </p>
              <ul class="space-y-4 pt-4">
                <li v-for="item in service2Features" :key="item" class="flex items-center gap-4 text-[#f5f5f7]">
                  <span class="w-1.5 h-1.5 bg-[#4a90d9] rounded-full"></span>
                  <span class="font-light">{{ item }}</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="relative">
                <div class="aspect-[4/3] bg-gradient-to-bl from-[#4a90d9]/10 to-[#1e3a5f]/20 rounded-sm border border-white/5"></div>
                <div class="absolute -bottom-6 -left-6 text-[8rem] font-display text-[#4a90d9]/10 leading-none">02</div>
              </div>
            </div>
          </div>

          <!-- Service 3: SEO & Performance -->
          <div class="grid-luxe grid-luxe-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <div class="relative">
                <div class="aspect-[4/3] bg-gradient-to-tr from-[#1e3a5f]/20 to-[#4a90d9]/5 rounded-sm border border-white/5"></div>
                <div class="absolute -bottom-6 -right-6 text-[8rem] font-display text-[#4a90d9]/10 leading-none">03</div>
              </div>
            </div>
            <div class="order-1 lg:order-2 space-y-6">
              <div class="line-accent"></div>
              <h2 class="text-4xl md:text-5xl text-[#f5f5f7]">
                SEO & Performance
              </h2>
              <p class="text-lg text-[#8b8b9a] font-light leading-relaxed">
                Un beau site ne suffit pas. Nous optimisons chaque aspect technique 
                pour que vous apparaissiez en tête des résultats Google et offriez 
                une expérience utilisateur irréprochable.
              </p>
              <ul class="space-y-4 pt-4">
                <li v-for="item in service3Features" :key="item" class="flex items-center gap-4 text-[#f5f5f7]">
                  <span class="w-1.5 h-1.5 bg-[#4a90d9] rounded-full"></span>
                  <span class="font-light">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingPlans />

    <!-- Comparison Table -->
    <ComparisonTable />

    <!-- Process Section -->
    <section class="section-luxe bg-[#12121a] border-t border-white/5">
      <div class="container-luxe">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="text-[#4a90d9] uppercase tracking-[0.3em] text-sm mb-6 block">Notre Processus</span>
          <h2 class="text-4xl md:text-5xl text-[#f5f5f7] mb-6">
            Une méthodologie éprouvée
          </h2>
          <p class="text-lg text-[#8b8b9a] font-light">
            De la découverte à la livraison, chaque étape est pensée pour garantir 
            l'excellence du résultat final.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          <div v-for="(step, index) in process" :key="step.title" 
               class="bg-[#12121a] p-12 space-y-4 group hover:bg-[#1a1a24] transition-colors duration-500">
            <div class="text-5xl font-display text-[#4a90d9]/30 group-hover:text-[#4a90d9] transition-colors duration-500">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            <h3 class="text-xl text-[#f5f5f7] font-display">{{ step.title }}</h3>
            <p class="text-[#8b8b9a] font-light text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-luxe relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 to-transparent"></div>
      <div class="container-luxe relative z-10 text-center">
        <div class="line-accent mx-auto mb-8"></div>
        <h2 class="text-4xl md:text-6xl text-[#f5f5f7] mb-8 max-w-4xl mx-auto">
          Prêt à transformer<br>votre présence digitale ?
        </h2>
        <NuxtLink to="/contact" class="btn-luxe text-lg px-12 py-4 shine inline-flex items-center gap-3">
          Démarrer votre projet
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Services | Pure Web Agency',
  meta: [
    {
      name: 'description',
      content: 'Création de sites web, e-commerce et SEO. Des solutions sur-mesure pour votre excellence digitale.'
    }
  ]
});

const service1Features = [
  'Sites vitrines élégants et performants',
  'Applications web complexes sur-mesure',
  'Design responsive et mobile-first',
  'Code propre et maintenable'
];

const service2Features = [
  'Boutiques Shopify & WooCommerce',
  'Expérience d\'achat optimisée',
  'Paiement sécurisé intégré',
  'Gestion des stocks et commandes'
];

const service3Features = [
  'Audit SEO complet et stratégique',
  'Optimisation des performances',
  'Core Web Vitals excellence',
  'Suivi et amélioration continue'
];

const process = [
  {
    title: 'Découverte',
    description: 'Nous prenons le temps de comprendre votre business, vos objectifs et votre vision.'
  },
  {
    title: 'Stratégie',
    description: 'Nous définissons ensemble la direction artistique et technique du projet.'
  },
  {
    title: 'Création',
    description: 'Nous construisons votre site avec une attention méticuleuse aux détails.'
  },
  {
    title: 'Lancement',
    description: 'Nous déployons votre site et assurons sa performance optimale.'
  }
];
</script>