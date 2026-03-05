<!-- Client Logos Section -->
<template>
  <section class="py-16 border-y border-white/5 overflow-hidden">
    <div class="container-luxe">
      <div class="space-y-8">
        <p class="text-[#8b8b9a] uppercase tracking-widest text-xs text-center">
          Nos partenaires et clients en confiance
        </p>
        
        <!-- Logos Marquee -->
        <div class="marquee">
          <div class="marquee-content flex items-center gap-16">
            <div v-for="(logo, index) in logos" :key="index" class="flex items-center justify-center">
              <div class="h-12 flex items-center justify-center text-[#5a5a6a] font-display text-lg hover:text-[#4a90d9] transition-colors duration-300 cursor-pointer">
                {{ logo }}
              </div>
            </div>
            <!-- Duplicate -->
            <div v-for="(logo, index) in logos" :key="`dup-${index}`" class="flex items-center justify-center">
              <div class="h-12 flex items-center justify-center text-[#5a5a6a] font-display text-lg hover:text-[#4a90d9] transition-colors duration-300 cursor-pointer">
                {{ logo }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = ref([
  'Airbnb',
  'Tesla',
  'Spotify',
  'Netflix',
  'Apple',
  'Google',
  'Meta',
  'Amazon'
])
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