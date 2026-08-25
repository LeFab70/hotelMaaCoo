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

## Déploiement sur Netlify (recommandé)

1. Va sur [https://app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Connecte GitHub et choisis `LeFab70/hotelMaaCoo`
3. Netlify lit déjà `netlify.toml`. Vérifie :
   - **Build command** : `npm ci && npm run build`
   - **Publish directory** : `dist/maaco-hotel/browser`
4. **Deploy site**
5. Teste :
   - `https://TON-SITE.netlify.app/`
   - `https://TON-SITE.netlify.app/contact` (doit marcher en lien direct)

Le fichier `netlify.toml` gère le rewrite SPA (`/contact` → `index.html`).

### Domaine custom (optionnel)

Site settings → **Domain management** → Add custom domain.

## Déploiement sur Render (Static Site)

### Réglage obligatoire (sinon `/contact` = Not Found)

Sur [dashboard.render.com](https://dashboard.render.com) → ton Static Site → **Redirects/Rewrites** → **Add Rule** :

| Champ | Valeur |
| --- | --- |
| Source | `/*` |
| Destination | `/index.html` |
| Action | **Rewrite** |

Sans cette règle : la home marche, mais un lien direct ou un refresh sur `/contact` échoue pour certains visiteurs.

### Création du service

1. **New +** → **Static Site**
2. Repo GitHub `LeFab70/hotelMaaCoo`
3. **Build Command** : `npm ci && npm run build`
4. **Publish Directory** : `dist/maaco-hotel/browser`
5. Ajouter le **Rewrite** ci-dessus
6. (Re)déployer

### Pourquoi certains ont accès et d’autres non ?

1. **Rewrite manquant** : accès via le menu (Angular) OK ; lien direct `/contact` en échec.
2. **Plan Free Render** : le site s’endort après inactivité ; le 1er chargement peut être long ou sembler “inaccessible”.
3. Cloudflare / CDN : utile en plus, **après** avoir corrigé le Rewrite.

### Option Cloudflare (après le fix Render)

1. Compte [Cloudflare](https://dash.cloudflare.com)
2. Ajouter un domaine (ou utiliser un sous-domaine)
3. Proxy orange vers `hotelmaacoo.onrender.com`
4. SSL/TLS : mode **Full**
5. Ne remplace pas le Rewrite Render pour `/contact`

### Alternative plus stable (gratuit, toujours allumé)

**Cloudflare Pages** ou **Netlify** : pas d’endormissement comme le free Render, et fallback SPA facile.
