<!--
  Page Contact - Formulaire de contact
  Utilise Netlify Forms pour la gestion des soumissions
-->
<template>
  <div>
    <!-- Header -->
    <section class="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
        <p class="text-xl text-green-100 max-w-2xl mx-auto">
          Discutons de votre projet. Devis gratuit et sans engagement.
        </p>
      </div>
    </section>

    <!-- Formulaire de contact -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Informations de contact -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Parlons de votre projet
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8">
              Remplissez le formulaire ci-contre et nous vous repondrons sous 24h. 
              Vous pouvez aussi nous contacter directement par email ou telephone.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a 
                    href="mailto:contact@purewebagency.com" 
                    class="text-primary-600 hover:text-primary-700"
                  >
                    contact@purewebagency.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Adresse</h3>
                  <p class="text-gray-600 dark:text-gray-400">Bordeaux, France</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <UIcon name="i-heroicons-clock" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Horaires</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Lundi - Vendredi: 9h - 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire -->
          <div>
            <UCard>
              <!-- 
                Formulaire Netlify 
                name="contact" permet a Netlify de traiter les soumissions
              -->
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                class="space-y-6"
              >
                <!-- Champ honeypot anti-spam (cache) -->
                <p class="hidden">
                  <label>
                    Ne pas remplir: <input name="bot-field" />
                  </label>
                </p>
                
                <input type="hidden" name="form-name" value="contact" />
                
                <!-- Nom -->
                <UFormGroup label="Nom complet" required>
                  <UInput
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                  />
                </UFormGroup>

                <!-- Email -->
                <UFormGroup label="Email" required>
                  <UInput
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                  />
                </UFormGroup>

                <!-- Telephone -->
                <UFormGroup label="Telephone">
                  <UInput
                    name="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                  />
                </UFormGroup>

                <!-- Type de projet -->
                <UFormGroup label="Type de projet">
                  <USelect
                    name="project-type"
                    :options="projectTypes"
                    placeholder="Selectionnez un type"
                  />
                </UFormGroup>

                <!-- Message -->
                <UFormGroup label="Votre message" required>
                  <UTextarea
                    name="message"
                    rows="5"
                    placeholder="Decrivez votre projet..."
                    required
                  />
                </UFormGroup>

                <!-- Bouton d'envoi -->
                <UButton
                  type="submit"
                  color="primary"
                  size="lg"
                  block
                  icon="i-heroicons-paper-airplane"
                >
                  Envoyer le message
                </UButton>

                <p class="text-xs text-gray-500 text-center">
                  En envoyant ce formulaire, vous acceptez notre politique de confidentialite.
                </p>
              </form>
            </UCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: 'Contactez Pure Web Agency pour discuter de votre projet web. Devis gratuit.'
    }
  ]
});

// Options pour le select type de projet
const projectTypes = [
  { label: 'Site vitrine', value: 'vitrine' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Application web', value: 'application' },
  { label: 'Refonte de site', value: 'refonte' },
  { label: 'Autre', value: 'autre' }
];
</script>
