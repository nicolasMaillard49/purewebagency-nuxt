<!-- Team Section -->
<template>
  <section class="section-luxe bg-[#12121a]">
    <div class="container-luxe">
      <div class="space-y-16">
        <!-- Header -->
        <div class="max-w-2xl reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Équipe</span>
          <h2 class="text-[#f5f5f7] mt-4">
            L'excellence<br>au service de vos projets
          </h2>
        </div>

        <!-- Team Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(member, index) in team"
               :key="member.name"
               class="group reveal"
               :class="`reveal-delay-${(index % 4) + 1}`"
               data-tilt>
            
            <!-- Card -->
            <div class="space-y-4">
              <!-- Avatar -->
              <div class="aspect-square rounded-sm bg-gradient-to-br from-[#1e3a5f]/40 to-[#4a90d9]/20 overflow-hidden relative">
                <div class="absolute inset-0 bg-[#0a0a0f]/40 group-hover:bg-[#0a0a0f]/20 transition-colors duration-400 flex items-center justify-center">
                  <div class="text-center space-y-2">
                    <div class="text-4xl font-display text-[#4a90d9]">{{ member.initials }}</div>
                  </div>
                </div>
              </div>

              <!-- Info -->
              <div class="space-y-1">
                <h3 class="text-lg text-[#f5f5f7] font-display group-hover:text-[#4a90d9] transition-colors duration-300">
                  {{ member.name }}
                </h3>
                <p class="text-[#8b8b9a] text-sm font-light">{{ member.role }}</p>
              </div>

              <!-- Bio -->
              <p class="text-[#5a5a6a] text-sm font-light leading-relaxed">
                {{ member.bio }}
              </p>

              <!-- Social -->
              <div class="flex gap-3 pt-2">
                <a 
                  v-for="social in member.socials"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8b8b9a] hover:text-[#4a90d9] hover:border-[#4a90d9] transition-all duration-300">
                  <span class="text-xs">{{ social.icon }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = ref([
  {
    name: 'Nicolas Maillard',
    role: 'Founder & Lead Dev',
    initials: 'NM',
    bio: 'Passion pour le code propre et l\'UX. 5+ ans d\'expérience web.',
    socials: [
      { name: 'github', icon: '→', url: '#' },
      { name: 'linkedin', icon: 'in', url: '#' }
    ]
  },
  {
    name: 'Marie Dubois',
    role: 'Designer UX/UI',
    initials: 'MD',
    bio: 'Design minimaliste et interfaces intuitives. Pensée utilisateur.',
    socials: [
      { name: 'behance', icon: 'B', url: '#' },
      { name: 'linkedin', icon: 'in', url: '#' }
    ]
  },
  {
    name: 'Jean Moreau',
    role: 'Backend Developer',
    initials: 'JM',
    bio: 'Architecture robuste et APIs scalables. Expert database.',
    socials: [
      { name: 'github', icon: '→', url: '#' },
      { name: 'linkedin', icon: 'in', url: '#' }
    ]
  },
  {
    name: 'Sophie Martin',
    role: 'Project Manager',
    initials: 'SM',
    bio: 'Organisation, rigueur et communication. Garant des délais.',
    socials: [
      { name: 'linkedin', icon: 'in', url: '#' },
      { name: 'twitter', icon: 'X', url: '#' }
    ]
  }
])

onMounted(() => {
  const { initTilt } = useTiltEffect()
  initTilt()
})
</script>