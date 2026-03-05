# Déploiement Rapide sur Vercel

## Option 1: Déploiement One-Click (Recommandé)

1. Va sur https://vercel.com/new
2. Connecte ton compte GitHub
3. Importe le repo `purewebagency-nuxt`
4. Clique sur "Deploy"
5. Ton site est en ligne !

## Option 2: CLI (Si tu as Vercel CLI)

```bash
# Login (une fois)
vercel login

# Deploy
cd purewebagency-nuxt
vercel --prod
```

## Option 3: Netlify (Alternative)

1. Va sur https://app.netlify.com/start
2. Connecte GitHub
3. Sélectionne le repo
4. Build command: `npm run generate`
5. Publish directory: `dist`
6. Deploy

## Configuration Formulaire

Pour que le formulaire de contact fonctionne:

### Sur Vercel:
- Le formulaire utilise Netlify Forms
- Tu dois activer "Forms" dans le dashboard Vercel (payant)
- OU utiliser Formspree (gratuit): changer l'action du form

### Avec Formspree (Gratuit):
1. Crée un compte sur https://formspree.io
2. Crée un nouveau formulaire
3. Remplace dans `contact.vue`:
   ```html
   <form action="https://formspree.io/f/TON_ID" method="POST">
   ```

## URL Finale

Une fois déployé, ton site sera accessible sur:
- `https://purewebagency-nuxt.vercel.app` (Vercel)
- OU `https://purewebagency-nuxt.netlify.app` (Netlify)

Tu pourras ensuite ajouter ton domaine personnalisé.

---

**Temps estimé:** 2 minutes avec l'Option 1
