<!-- Footer Premium - Minimaliste Luxe -->
<template>
  <footer class="relative bg-[#12121a] border-t border-white/5">
    <!-- Background accent -->
    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4a90d9]/5 rounded-full blur-3xl -z-10"></div>
    
    <div class="container-luxe py-20">
      <!-- Main footer content -->
      <div class="grid md:grid-cols-4 gap-12 mb-16">
        
        <!-- Brand -->
        <div class="space-y-4 reveal">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 border border-[#4a90d9]/30 flex items-center justify-center">
              <span class="text-[#4a90d9] font-display text-xl">P</span>
            </div>
            <span class="font-display text-lg text-[#f5f5f7]">Pure</span>
          </div>
          <p class="text-[#8b8b9a] font-light leading-relaxed">
            Agence web spécialisée dans les expériences digitales d'exception.
          </p>
          <!-- Social links -->
          <div class="flex gap-3 pt-4">
            <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8b8b9a] hover:text-[#4a90d9] hover:border-[#4a90d9] transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8b8b9a] hover:text-[#4a90d9] hover:border-[#4a90d9] transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="space-y-4 reveal reveal-delay-1">
          <h3 class="text-[#f5f5f7] font-display uppercase tracking-widest text-sm">Services</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">Sites vitrines</a></li>
            <li><a href="#" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">E-commerce</a></li>
            <li><a href="#" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">Applications web</a></li>
            <li><a href="#" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">SEO & Performance</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="space-y-4 reveal reveal-delay-2">
          <h3 class="text-[#f5f5f7] font-display uppercase tracking-widest text-sm">Entreprise</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">Accueil</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">Services</NuxtLink></li>
            <li><NuxtLink to="/legal" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">Mentions légales</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-4 reveal reveal-delay-3">
          <h3 class="text-[#f5f5f7] font-display uppercase tracking-widest text-sm">Contact</h3>
          <div class="space-y-3">
            <div>
              <p class="text-[#5a5a6a] text-xs uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:contact@purewebagency.com" class="text-[#8b8b9a] hover:text-[#4a90d9] transition-colors duration-300 text-sm font-light">
                contact@purewebagency.com
              </a>
            </div>
            <div>
              <p class="text-[#5a5a6a] text-xs uppercase tracking-widest mb-1">Localisation</p>
              <p class="text-[#8b8b9a] text-sm font-light">Bordeaux, France</p>
            </div>
            <div>
              <p class="text-[#5a5a6a] text-xs uppercase tracking-widest mb-1">Disponibilité</p>
              <p class="text-[#8b8b9a] text-sm font-light">Lun - Ven : 9h - 18h</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/5 pt-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-[#5a5a6a] text-xs">
          <p>© {{ currentYear }} Pure Web Agency. Tous droits réservés.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-[#4a90d9] transition-colors duration-300">Politique de confidentialité</a>
            <a href="#" class="hover:text-[#4a90d9] transition-colors duration-300">Conditions d'utilisation</a>
          </div>
          <div class="flex gap-2 text-[#8b8b9a]">
            <span>Conçu avec</span>
            <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span>par Pure Web</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

onMounted(() => {
  const { initScrollReveal } = useScrollReveal()
  initScrollReveal()
})
</script>