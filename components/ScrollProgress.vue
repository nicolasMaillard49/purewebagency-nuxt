<!-- Scroll Progress Bar -->
<template>
  <div class="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
    <div 
      class="h-full bg-gradient-to-r from-[#1e3a5f] to-[#4a90d9] transition-all duration-100"
      :style="{ width: `${scrollProgress}%` }"
    ></div>
  </div>
</template>

<script setup>
const scrollProgress = ref(0)

onMounted(() => {
  const updateProgress = () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = (scrollTop / docHeight) * 100
  }
  
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})
</script>