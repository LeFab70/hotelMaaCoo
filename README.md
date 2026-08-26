# Hôtel MA'ACO — Site web

Site vitrine des hôtels **MA'ACO** au Cameroun : **Bertoua**, **Douala (Logpom)** et **Nkong-Ni (près de Dschang)**.

Site en ligne (Netlify) : après déploiement, l’URL du projet Netlify.

---

## À quoi sert le site ?

- Présenter les 3 hôtels (photos, adresses, services)
- Afficher les **tarifs** des chambres selon la ville
- Montrer **parking**, restaurant, conférence, Wi‑Fi, laverie, etc.
- Permettre de **réserver** par téléphone, e-mail ou WhatsApp
- Répondre aux questions via un **chatbot**
- Contacter l’équipe via la page **Contactez-nous**

---

## Navigation (pour les visiteurs)

1. Menu en haut : Hôtels, Chambres, Services, Restaurant, Avis, Localisation, Contact
2. Bouton **Réserver** / **Appeler** : contact direct
3. Choisir une **ville** (Dschang / Douala / Bertoua) pour tarifs + carte
4. Bulle de chat en bas à droite : questions (prix, parking, adresse…)
5. Page **Contactez-nous** : formulaire + numéros des 3 hôtels
6. Flèche en bas à droite : retour en haut de page

---

## Contacts principaux

| Ville | Téléphones |
| --- | --- |
| Nkong-Ni / Dschang | 672758667 / 691915835 |
| Douala Logpom | 699406002 |
| E-mail | reservations@hotelmaaco.cm |

---

## Développement (équipe technique)

```bash
npm install
npm start          # http://127.0.0.1:4200
npm run build      # dist/maaco-hotel/browser
```

Stack : **Angular 21**, icônes Lucide, déploiement **Netlify** (`netlify.toml`).

### Netlify

- Build : `npm ci && npm run build`
- Publish : `dist/maaco-hotel/browser`
- SPA : rewrite `/*` → `/index.html` (pour `/contact`)

### Render (optionnel)

Ajouter un **Rewrite** `/*` → `/index.html`, sinon `/contact` renvoie Not Found.
