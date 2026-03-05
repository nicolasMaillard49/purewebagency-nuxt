<!-- Animated Background Gradients -->
<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <!-- Gradient blobs -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3a5f]/5 rounded-full blur-3xl animate-float" style="animation-delay: 0s"></div>
    <div class="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#4a90d9]/5 rounded-full blur-3xl animate-float" style="animation-delay: 2s"></div>
    <div class="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#1e3a5f]/3 rounded-full blur-3xl animate-float" style="animation-delay: 4s"></div>
  </div>
</template>

<style>
@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(30px, -50px);
  }
  66% {
    transform: translate(-20px, 30px);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}
</style>