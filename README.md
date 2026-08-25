# Hôtel MA'ACO

Site vitrine Angular pour les hôtels MA'ACO (Bertoua, Douala, Nkong-Ni).

## Développement local

```bash
npm install
npm start
```

Ouvrir [http://127.0.0.1:4200](http://127.0.0.1:4200).

## Build production

```bash
npm run build
```

Sortie : `dist/maaco-hotel/browser`

## Déploiement sur Render (Static Site)

1. Aller sur [https://dashboard.render.com](https://dashboard.render.com)
2. **New +** → **Static Site**
3. Connecter le repo GitHub `LeFab70/hotelMaaCoo`
4. Configurer :
   - **Build Command** : `npm ci && npm run build`
   - **Publish Directory** : `dist/maaco-hotel/browser`
5. Créer le service, attendre le build
6. (Optionnel) dans **Redirects/Rewrites**, ajouter :
   - Source `/*` → Destination `/index.html` → **Rewrite**

Le fichier `render.yaml` à la racine permet aussi un déploiement Blueprint automatique.
