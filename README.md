# Hôtel MA'ACO — Site web

Site vitrine des hôtels **MA'ACO** au Cameroun : **Bertoua**, **Douala (Logpom)** et **Nkong-Ni (près de Dschang)**.

**Lien du site :** [https://hotelsmaacoo.netlify.app](https://hotelsmaacoo.netlify.app)

---

## Objectif

Rendre les hôtels **MA'ACO visibles sur internet** : présenter les établissements, les chambres, les tarifs et les services, et permettre aux clients de **réserver facilement** (appel, e-mail, WhatsApp).

Une **connexion internet** est nécessaire pour ouvrir et utiliser le site.

---

## Guide d’utilisation (visiteurs)

1. **Ouvrir le site** dans un navigateur (téléphone ou ordinateur), avec internet.
2. **Menu en haut** : Hôtels, Chambres, Services, Restaurant, Avis, Localisation, Contactez-nous.
3. **Choisir une ville** (Dschang / Douala / Bertoua) pour voir les tarifs et la carte de cet hôtel.
4. **Appeler** : toucher / cliquer un numéro → l’appel se lance (surtout sur téléphone).
5. **Écrire un e-mail** : cliquer sur E-mail / Contactez-nous → un message de réservation se prépare dans votre messagerie.
6. **WhatsApp** : cliquer sur le bouton WhatsApp → la discussion s’ouvre avec un message de réservation déjà préparé.
7. **Chatbot (bulle en bas à droite)** : assistant automatique qui répond aux questions fréquentes (prix, adresse, parking, réservation…). S’il ne peut pas répondre, il propose d’appeler ou d’écrire.
8. **Flèche en bas à droite** : remonter en haut de la page.

Le site peut aussi servir de base pour renforcer la visibilité sur les réseaux (Facebook, etc.) en partageant le lien.

---

## Contacts

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
