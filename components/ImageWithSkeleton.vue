<!-- Image with Loading Skeleton -->
<template>
  <div class="relative overflow-hidden rounded-sm bg-[#12121a] border border-white/5">
    <!-- Skeleton Loading -->
    <div v-if="!loaded" class="absolute inset-0 bg-gradient-to-r from-[#12121a] via-[#1a1a24] to-[#12121a] animate-pulse"></div>
    
    <!-- Image -->
    <img 
      :src="src" 
      :alt="alt"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      class="w-full h-full object-cover transition-opacity duration-300"
      @load="onLoad"
      @error="onError"
    />
    
    <!-- Error fallback -->
    <div v-if="error" class="absolute inset-0 flex items-center justify-center bg-[#12121a]">
      <p class="text-[#5a5a6a] text-sm">Image non disponible</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Image'
  }
})

const loaded = ref(false)
const error = ref(false)

const onLoad = () => {
  loaded.value = true
}

const onError = () => {
  error.value = true
  loaded.value = true
}
</script>