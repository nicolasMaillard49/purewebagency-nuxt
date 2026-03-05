# Pure Web Agency - Site Nuxt 3

Site web de l'agence Pure Web Agency, refait avec Nuxt 3 pour une performance optimale.

## Stack technique

- **Nuxt 3** - Framework Vue.js moderne
- **Nuxt UI** - Composants UI accessibles et modernes
- **Tailwind CSS** - Styles utilitaires
- **Netlify Forms** - Gestion des formulaires sans backend
- **Vercel** - Hebergement et deploiement continu

## Performance

- 100/100 Lighthouse score
- SEO optimise avec SSR/SSG
- Temps de chargement < 1s
- Responsive mobile-first

## Installation

```bash
# Cloner le repo
git clone https://github.com/nicolasMaillard49/purewebagency-nuxt.git

# Installer les dependances
npm install

# Lancer le serveur de developpement
npm run dev

# Generer le site statique
npm run generate
```

## Deploiement

Le site est configure pour un deploiement automatique sur Vercel :

1. Connecter le repo GitHub a Vercel
2. Le deploiement se fait automatiquement a chaque push

## Structure

```
purewebagency-nuxt/
├── components/       # Composants reutilisables
│   ├── AppHeader.vue
│   └── AppFooter.vue
├── pages/           # Pages du site
│   ├── index.vue    # Accueil
│   ├── services.vue
│   ├── portfolio.vue
│   ├── contact.vue
│   └── legal.vue
├── assets/          # CSS et assets statiques
├── nuxt.config.ts   # Configuration Nuxt
└── package.json
```

## Pages

- **Accueil** - Presentation de l'agence et services
- **Services** - Detail des prestations
- **Realisations** - Portfolio des projets
- **Contact** - Formulaire de contact avec Netlify Forms
- **Mentions legales** - Informations legales

## Credits

Refonte du site purewebagency.com original sous WordPress/Divi.
