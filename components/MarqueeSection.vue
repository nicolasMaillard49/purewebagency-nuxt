<!-- Marquee Section - Défilement infini -->
<template>
  <section class="py-12 border-t border-b border-white/5 overflow-hidden bg-[#12121a]">
    <div class="marquee">
      <div class="marquee-content flex items-center gap-12">
        <span v-for="(item, index) in items" :key="index" class="flex items-center gap-12 text-2xl font-display text-[#8b8b9a] whitespace-nowrap">
          <span>{{ item }}</span>
          <span class="w-2 h-2 bg-[#4a90d9] rounded-full"></span>
        </span>
        <!-- Duplicate pour boucle infinie -->
        <span v-for="(item, index) in items" :key="`dup-${index}`" class="flex items-center gap-12 text-2xl font-display text-[#8b8b9a] whitespace-nowrap">
          <span>{{ item }}</span>
          <span class="w-2 h-2 bg-[#4a90d9] rounded-full"></span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  'Design Sur-mesure',
  'Développement Web',
  'E-commerce',
  'SEO & Performance',
  'Brand Identity',
  'UI/UX Design',
  'Maintenance'
]
</script>

<style scoped>
.marquee {
  overflow: hidden;
}

.marquee-content {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee:hover .marquee-content {
  animation-play-state: paused;
}
</style>