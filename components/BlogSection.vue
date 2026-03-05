<!-- Blog Section -->
<template>
  <section class="section-luxe">
    <div class="container-luxe">
      <div class="space-y-16">
        <!-- Header -->
        <div class="max-w-2xl reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Blog</span>
          <h2 class="text-[#f5f5f7] mt-4">
            Insights & tendances<br>du web design
          </h2>
        </div>

        <!-- Articles Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <article v-for="(article, index) in articles"
                   :key="article.slug"
                   class="group reveal"
                   :class="`reveal-delay-${(index % 3) + 1}`">
            
            <!-- Image -->
            <div class="aspect-video rounded-sm overflow-hidden bg-[#12121a] border border-white/5 group-hover:border-[#4a90d9]/30 transition-colors duration-300 mb-6">
              <div class="w-full h-full bg-gradient-to-br from-[#1e3a5f]/20 to-[#4a90d9]/10 flex items-center justify-center group-hover:from-[#1e3a5f]/30 group-hover:to-[#4a90d9]/20 transition-colors duration-500">
                <div class="text-4xl font-display text-[#4a90d9]/40">{{ article.slug.charAt(0).toUpperCase() }}</div>
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-3">
              <div class="flex items-center gap-4 text-sm">
                <span class="text-[#4a90d9] uppercase tracking-widest">{{ article.category }}</span>
                <span class="text-[#5a5a6a]">{{ article.date }}</span>
              </div>
              
              <h3 class="text-xl text-[#f5f5f7] font-display group-hover:text-[#4a90d9] transition-colors duration-300">
                <NuxtLink :to="`/blog/${article.slug}`">
                  {{ article.title }}
                </NuxtLink>
              </h3>

              <p class="text-[#8b8b9a] font-light leading-relaxed text-sm">
                {{ article.excerpt }}
              </p>

              <!-- Meta -->
              <div class="flex items-center justify-between pt-4 border-t border-white/5">
                <span class="text-[#5a5a6a] text-xs">{{ article.readTime }} min de lecture</span>
                <NuxtLink 
                  :to="`/blog/${article.slug}`"
                  class="text-[#4a90d9] hover:text-[#f5f5f7] transition-colors duration-300 flex items-center gap-2 text-xs uppercase tracking-widest">
                  Lire →
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- CTA -->
        <div class="text-center reveal reveal-delay-3">
          <NuxtLink to="/blog" class="btn-luxe">
            Voir tous les articles
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const articles = ref([
  {
    slug: 'web-design-2025',
    title: 'Tendances Web Design 2025',
    category: 'Design',
    date: '5 Mar 2025',
    excerpt: 'Découvrez les tendances qui façonnent le web en 2025 : dark mode, animations subtiles, et design inclusif.',
    readTime: 8
  },
  {
    slug: 'performance-core-web-vitals',
    title: 'Optimiser les Core Web Vitals',
    category: 'Performance',
    date: '28 Feb 2025',
    excerpt: 'Guide complet pour améliorer vos scores de performance. LCP, FID, CLS expliqués et optimisés.',
    readTime: 12
  },
  {
    slug: 'seo-modern-techniques',
    title: 'Techniques SEO Modernes',
    category: 'SEO',
    date: '21 Feb 2025',
    excerpt: 'Au-delà des mots-clés. Stratégies SEO pour 2025 : contenu, E-E-A-T, et expérience utilisateur.',
    readTime: 10
  },
  {
    slug: 'vue3-nuxt-best-practices',
    title: 'Vue 3 et Nuxt 3 : Bonnes pratiques',
    category: 'Dev',
    date: '14 Feb 2025',
    excerpt: 'Composables, setup syntaxe, et patterns modernes pour construire des applications Vue 3 performantes.',
    readTime: 15
  },
  {
    slug: 'accessibility-wcag',
    title: 'Accessibilité Web (WCAG 2.1)',
    category: 'Accessibilité',
    date: '7 Feb 2025',
    excerpt: 'Normes WCAG 2.1 et comment les implémenter. L\'accessibilité comme fondation, pas comme ajout.',
    readTime: 11
  },
  {
    slug: 'design-systems',
    title: 'Construire un Design System',
    category: 'Design',
    date: '31 Jan 2025',
    excerpt: 'Architecture de design system scalable. Composants, tokens, et documentation pour l\'équipe.',
    readTime: 13
  }
])
</script>