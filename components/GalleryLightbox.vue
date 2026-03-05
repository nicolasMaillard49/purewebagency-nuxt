<!-- Gallery with Lightbox -->
<template>
  <div>
    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(image, index) in images"
           :key="index"
           class="relative group cursor-pointer overflow-hidden rounded-sm reveal"
           :class="`reveal-delay-${(index % 3) + 1}`"
           @click="openLightbox(index)">
        
        <div class="aspect-video bg-[#12121a] border border-white/10 overflow-hidden">
          <img 
            :src="image.thumb" 
            :alt="image.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
          />
        </div>
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
          <div class="space-y-1">
            <h3 class="text-lg font-display text-[#f5f5f7]">{{ image.title }}</h3>
            <p class="text-sm text-[#8b8b9a]">{{ image.category }}</p>
          </div>
        </div>
        
        <!-- Icon -->
        <div class="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#4a90d9] transition-all duration-400">
          <svg class="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div v-if="showLightbox" 
           class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
           @click="closeLightbox">
        
        <!-- Image Container -->
        <div class="relative max-w-4xl w-full aspect-video" @click.stop>
          <img 
            :src="currentImage.full || currentImage.thumb" 
            :alt="currentImage.title"
            class="w-full h-full object-contain"
          />
          
          <!-- Info -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 class="text-2xl font-display text-[#f5f5f7]">{{ currentImage.title }}</h3>
            <p class="text-[#8b8b9a] mt-1">{{ currentImage.description }}</p>
          </div>
          
          <!-- Navigation -->
          <button 
            @click.stop="previousImage"
            class="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 hover:border-[#4a90d9] flex items-center justify-center text-white hover:text-[#4a90d9] transition-all duration-300">
            ← 
          </button>
          
          <button 
            @click.stop="nextImage"
            class="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 hover:border-[#4a90d9] flex items-center justify-center text-white hover:text-[#4a90d9] transition-all duration-300">
            →
          </button>
          
          <!-- Close -->
          <button 
            @click="closeLightbox"
            class="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 hover:border-[#4a90d9] flex items-center justify-center text-white hover:text-[#4a90d9] transition-all duration-300">
            ✕
          </button>
          
          <!-- Counter -->
          <div class="absolute top-6 left-6 text-white/60 text-sm">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true
  }
})

const showLightbox = ref(false)
const currentIndex = ref(0)

const currentImage = computed(() => images.value[currentIndex.value])

const openLightbox = (index) => {
  currentIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const previousImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

// Keyboard navigation
onMounted(() => {
  const handleKeydown = (e) => {
    if (!showLightbox.value) return
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') previousImage()
    if (e.key === 'Escape') closeLightbox()
  }
  
  window.addEventListener('keydown', handleKeydown)
  return () => window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>