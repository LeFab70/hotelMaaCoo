export interface ChatFaq {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
}

export const CHAT_FAQS: ChatFaq[] = [
  {
    id: 'villes',
    keywords: ['ville', 'villes', 'où', 'ou', 'localisation', 'adresse', 'situé', 'situer', 'dschang', 'douala', 'bertoua', 'nkong'],
    question: 'Où se trouvent vos hôtels ?',
    answer:
      "Nous avons 3 adresses : Nkong-Ni (près de Dschang, Ouest), Douala Logpom (face au Collège Le Nil) et Bertoua (Est). Sur le site, choisissez une ville pour voir la carte et les tarifs.",
  },
  {
    id: 'nkong',
    keywords: ['nkong', 'dschang', 'bafoussam', 'gendarmerie', 'sous-préfecture', '7 km', '7km'],
    question: 'Où est l’hôtel de Nkong-Ni ?',
    answer:
      "Hôtel MA'ACO Nkong-Ni est à environ 7 km de Dschang, sur la route Dschang–Bafoussam, à côté de la Sous-préfecture et à 80 m de la brigade de gendarmerie. Tél. : 672758667 / 691915835.",
  },
  {
    id: 'douala',
    keywords: ['douala', 'logpom', 'nil', 'collège'],
    question: 'Où est l’hôtel de Douala ?',
    answer:
      "Hôtel MA'ACO Logpom se trouve à Douala, en face du Collège Le Nil. Contact : 699406002.",
  },
  {
    id: 'tarifs',
    keywords: ['prix', 'tarif', 'tarifs', 'coût', 'cout', 'combien', 'fcfa', 'chambre', 'studio', 'suite', 'appartement'],
    question: 'Quels sont vos tarifs ?',
    answer:
      "À Nkong-Ni : chambres dès 10 000 Fcfa, standard 12 000, confort 15 000, studio 30 000. À Douala : standing 15 000, haut standing 25 000, suite 35 000, appartement 40 000. Sélectionnez une ville dans “Chambres” pour le détail.",
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'prestation', 'parking', 'wifi', 'laverie', 'sécurité', 'securite', 'confort'],
    question: 'Quels services proposez-vous ?',
    answer:
      "Réception & accueil, chambres/suites/appartements, bar/restaurant (aussi salle de conférence), parking sécurisé (aménageable en salle de fête), laverie gratuite, Wi-Fi gratuit et cuisine sur place dans les studios.",
  },
  {
    id: 'restaurant',
    keywords: ['restaurant', 'bar', 'manger', 'petit-déjeuner', 'petit dejeuner', 'cuisine', 'repas'],
    question: 'Y a-t-il un restaurant ?',
    answer:
      "Oui : bar/restaurant sur place, avec possibilité d’utiliser l’espace comme salle de conférence. Idéal pour se restaurer sans sortir de l’hôtel.",
  },
  {
    id: 'evenements',
    keywords: ['mariage', 'fête', 'fete', 'conférence', 'conference', 'événement', 'evenement', 'salle'],
    question: 'Pouvez-vous accueillir mariages ou conférences ?',
    answer:
      "Oui. Le bar/restaurant peut servir de salle de conférence, et le parking sécurisé peut être aménagé en salle de fête pour mariages et cérémonies. Contactez-nous pour organiser votre événement.",
  },
  {
    id: 'reservation',
    keywords: ['réserver', 'reserver', 'réservation', 'reservation', 'disponible', 'disponibilité', 'booking'],
    question: 'Comment réserver ?',
    answer:
      "Réservez par téléphone ou e-mail (ou WhatsApp). Indiquez la ville, les dates et le type de chambre. Nous confirmons rapidement selon les disponibilités.",
  },
  {
    id: 'contact',
    keywords: ['contact', 'téléphone', 'telephone', 'appeler', 'mail', 'email', 'e-mail', 'whatsapp'],
    question: 'Comment vous contacter ?',
    answer:
      "Nkong-Ni / Dschang : 672758667 / 691915835. Douala : 699406002. E-mail : reservations@hotelmaaco.cm. Vous pouvez aussi ouvrir la page Contactez-nous.",
  },
  {
    id: 'wifi',
    keywords: ['wifi', 'wi-fi', 'internet', 'connexion'],
    question: 'Le Wi-Fi est-il gratuit ?',
    answer: 'Oui, le Wi-Fi est gratuit pour les clients dans nos établissements.',
  },
  {
    id: 'parking',
    keywords: ['parking', 'voiture', 'stationnement', 'garer'],
    question: 'Y a-t-il un parking ?',
    answer:
      "Oui, parking sécurisé sur place. Il peut aussi servir de salle de fête aménagée pour vos événements.",
  },
];

export const CHAT_QUICK_QUESTIONS = [
  'Où se trouvent vos hôtels ?',
  'Quels sont vos tarifs ?',
  'Comment réserver ?',
  'Y a-t-il un parking ?',
];
