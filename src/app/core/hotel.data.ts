import { Hotel, Testimonial, Amenity } from './hotel.model';

export const CONTACT_EMAIL = 'reservations@hotelmaaco.cm';

export const HOTELS: Hotel[] = [
  {
    id: 'dschang',
    name: "Hôtel MA'ACO Nkong-Ni",
    city: 'Dschang',
    region: 'Ouest Cameroun',
    tagline: 'À 7 km de Dschang, route Dschang–Bafoussam',
    address:
      "À environ 7 km de Dschang sur la route Dschang–Bafoussam, à côté de la Sous-préfecture et à seulement 80 m de l’entrée de la brigade de gendarmerie",
    landmark: 'Nkong-Ni — près de la Sous-préfecture',
    phones: ['672758667', '691915835'],
    email: CONTACT_EMAIL,
    lat: 5.466,
    lng: 10.118,
    roomCount: 17,
    image: 'assets/hotel/exteriors/nkong-facade.jpg',
    gallery: [
      'assets/hotel/rooms/room-pro-standing.jpg',
      'assets/hotel/rooms/room-pro-vert.jpg',
      'assets/hotel/rooms/room-pro-suite.jpg',
      'assets/hotel/reception/reception-desk.jpg',
    ],
    rooms: [
      {
        name: 'Chambre Économique',
        price: 10000,
        count: 2,
        description: 'Chambre confortable, idéale pour un séjour simple et reposant.',
        image: 'assets/hotel/rooms/room-pro-vert.jpg',
      },
      {
        name: 'Chambre Standard',
        price: 12000,
        count: 10,
        description: 'Notre formule la plus demandée — lit douillet, climatisation et calme.',
        image: 'assets/hotel/rooms/room-pro-standing.jpg',
      },
      {
        name: 'Chambre Confort',
        price: 15000,
        count: 2,
        description: 'Plus d’espace et de standing pour un séjour agréable.',
        image: 'assets/hotel/rooms/room-confort.jpg',
      },
      {
        name: 'Studio',
        price: 30000,
        count: 1,
        description: 'Chambre + salon et coin cuisine — parfait pour un séjour prolongé.',
        image: 'assets/hotel/rooms/studio-kitchen.jpg',
      },
    ],
  },
  {
    id: 'douala',
    name: "Hôtel MA'ACO Logpom",
    city: 'Douala',
    region: 'Littoral',
    tagline: 'En face du Collège Le Nil, Logpom',
    address: 'Logpom, en face du Collège Le Nil',
    landmark: 'Douala — Quartier Logpom',
    phones: ['699406002'],
    email: CONTACT_EMAIL,
    lat: 4.0852,
    lng: 9.7614,
    roomCount: 20,
    image: 'assets/hotel/exteriors/douala-facade.jpg',
    gallery: [
      'assets/hotel/exteriors/nkong-facade.jpg',
      'assets/hotel/reception/reception-tarif.jpg',
      'assets/hotel/rooms/room-pro-suite.jpg',
      'assets/hotel/common/hallway.jpg',
    ],
    rooms: [
      {
        name: 'Chambre Standing',
        price: 15000,
        description: 'Chambre soignée avec literie confortable et climatisation.',
        image: 'assets/hotel/rooms/room-pro-standing.jpg',
      },
      {
        name: 'Chambre Haut Standing',
        price: 25000,
        description: 'Plus d’espace, finitions soignées et ambiance chaleureuse.',
        image: 'assets/hotel/rooms/room-pro-vert.jpg',
      },
      {
        name: 'Suite',
        price: 35000,
        description: 'Espace généreux pour voyageurs exigeants ou séjours en famille.',
        image: 'assets/hotel/rooms/room-suite.jpg',
      },
      {
        name: 'Appartement',
        price: 40000,
        description: 'Séjour autonome avec espace salon — idéal pour les longs passages.',
        image: 'assets/hotel/rooms/appartement.jpg',
      },
    ],
  },
  {
    id: 'bertoua',
    name: "Hôtel MA'ACO Bertoua",
    city: 'Bertoua',
    region: 'Est Cameroun',
    tagline: 'Bamvele — entrée des Brasseries du Cameroun',
    address: 'Quartier Bamvele, entrée des Brasseries du Cameroun, Bertoua',
    landmark: 'Non loin du centre de distribution des Brasseries du Cameroun, avant Congelcam',
    phones: ['691908740'],
    email: CONTACT_EMAIL,
    lat: 4.5740601,
    lng: 13.6741286,
    roomCount: 15,
    image: 'assets/hotel/exteriors/nkong-facade.jpg',
    gallery: [
      'assets/hotel/rooms/room-pro-standing.jpg',
      'assets/hotel/rooms/room-pro-vert.jpg',
      'assets/hotel/common/salon-zebra.jpg',
      'assets/hotel/common/corridor.jpg',
    ],
    rooms: [
      {
        name: 'Chambre Standard',
        price: 12000,
        description: 'Chambre propre et accueillante pour un repos bien mérité.',
        image: 'assets/hotel/rooms/room-standing.jpg',
      },
      {
        name: 'Chambre Confort',
        price: 15000,
        description: 'Confort renforcé avec climatisation et literie soignée.',
        image: 'assets/hotel/rooms/room-classic.jpg',
      },
      {
        name: 'Studio',
        price: 30000,
        description: 'Espace salon et coin cuisine pour plus d’indépendance.',
        image: 'assets/hotel/rooms/room-rose.jpg',
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Regina',
    city: 'Yaoundé',
    rating: 5,
    text: 'Accueil chaleureux, chambres propres et vraiment calmes. Je me suis sentie en sécurité dès mon arrivée à Nkong-Ni.',
  },
  {
    name: 'Gisèle',
    city: 'Douala',
    rating: 5,
    text: 'Parking sécurisé et personnel attentionné. Le restaurant sur place m’a évité de sortir le soir — parfait.',
  },
  {
    name: 'Collette',
    city: 'Bafoussam',
    rating: 5,
    text: 'Excellent rapport qualité-prix. Le studio était spacieux, avec coin cuisine très pratique pour mon séjour.',
  },
  {
    name: 'Colins',
    city: 'Bertoua',
    rating: 4,
    text: 'Confort simple et efficace. Facile à localiser, et l’équipe répond vite au téléphone pour réserver.',
  },
  {
    name: 'Christian',
    city: 'Douala',
    rating: 5,
    text: 'Séjour pro à Logpom : chambre climatisée, wifi correct, et proximité du Collège Le Nil très pratique.',
  },
  {
    name: 'Martine',
    city: 'Dschang',
    rating: 5,
    text: 'On sent que l’hôtel est bien tenu. Literie confortable, espaces propres, je reviendrai sans hésiter.',
  },
];

export const AMENITIES: Amenity[] = [
  {
    icon: 'reception',
    title: 'Réception & accueil',
    description: 'Salle de réception et accueil pour vous orienter dès votre arrivée.',
  },
  {
    icon: 'bed',
    title: 'Chambres & suites',
    description: 'Chambres, suites et appartements haut standing pour tous les types de séjour.',
  },
  {
    icon: 'utensils',
    title: 'Bar & restaurant',
    description: 'Bar/restaurant sur place, pouvant aussi servir de salle de conférence.',
  },
  {
    icon: 'conference',
    title: 'Salle de conférence',
    description: 'Espace modulable pour réunions, séminaires et présentations professionnelles.',
  },
  {
    icon: 'parking',
    title: 'Parking sécurisé',
    description: 'Parking sécurisé, aménageable en salle de fête pour vos événements.',
  },
  {
    icon: 'wedding',
    title: 'Mariages & fêtes',
    description: 'Cadre adapté pour mariages, réceptions et cérémonies en toute sérénité.',
  },
  {
    icon: 'laundry',
    title: 'Laverie gratuite',
    description: 'Laverie moderne gratuite pour les clients pendant leur séjour.',
  },
  {
    icon: 'wifi',
    title: 'Wi-Fi gratuit',
    description: 'Connexion Wi-Fi gratuite pour rester en contact famille, travail ou loisirs.',
  },
  {
    icon: 'cuisine',
    title: 'Cuisine sur place',
    description: 'Coin cuisine dans les studios et restauration pour un séjour autonome.',
  },
];
