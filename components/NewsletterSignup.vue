<!-- Newsletter Signup -->
<template>
  <section class="section-luxe bg-gradient-to-r from-[#12121a] to-[#1a1a24]">
    <div class="container-luxe">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="space-y-6 reveal">
          <span class="text-[#4a90d9] uppercase tracking-widest text-sm">Newsletter</span>
          <h2 class="text-3xl md:text-4xl text-[#f5f5f7] font-display">
            Restez à jour<br>avec nos news
          </h2>
          <p class="text-[#8b8b9a] font-light leading-relaxed">
            Recevez nos derniers articles, insights et actualités du web design. 
            Pas de spam, juste de l'excellence.
          </p>
          
          <div class="flex gap-4 pt-4">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-[#4a90d9]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span class="text-[#f5f5f7] text-sm">Articles hebdomadaires</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-[#4a90d9]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span class="text-[#f5f5f7] text-sm">Cas d'études exclusifs</span>
            </div>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="subscribe" class="space-y-4 reveal reveal-delay-2">
          <div class="space-y-2">
            <input 
              v-model="form.email"
              type="email"
              placeholder="votre@email.com"
              required
              class="w-full bg-transparent border-b border-white/20 py-3 text-[#f5f5f7] font-light focus:border-[#4a90d9] focus:outline-none transition-colors duration-300 placeholder-[#5a5a6a]"
            />
            <div v-if="error" class="text-red-400 text-sm">{{ error }}</div>
            <div v-if="success" class="text-green-400 text-sm">Email enregistré ✓</div>
          </div>

          <button 
            type="submit"
            class="btn-luxe w-full justify-center text-lg py-4 shine"
            :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi...' : 'S\'abonner' }}
          </button>

          <p class="text-[#5a5a6a] text-xs text-center">
            Désinscription possible en un clic. Nous respectons votre vie privée.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({ email: '' })
const error = ref('')
const success = ref(false)
const isSubmitting = ref(false)

const subscribe = async () => {
  error.value = ''
  success.value = false
  isSubmitting.value = true

  try {
    // Validation simple
    if (!form.value.email || !form.value.email.includes('@')) {
      error.value = 'Email invalide'
      isSubmitting.value = false
      return
    }

    // Simulation appel API
    await new Promise(resolve => setTimeout(resolve, 1000))

    success.value = true
    form.value.email = ''
    
    // Reset message après 3 secondes
    setTimeout(() => {
      success.value = false
    }, 3000)
  } catch (e) {
    error.value = 'Erreur lors de l\'inscription'
  } finally {
    isSubmitting.value = false
  }
}
</script>