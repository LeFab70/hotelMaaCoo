export interface HotelStat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const HOTEL_STATS: HotelStat[] = [
  {
    value: 100,
    suffix: '+',
    label: 'Chambres',
    icon: 'bed',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Appartements',
    icon: 'building',
  },
  {
    value: 3,
    suffix: '',
    label: 'Salles de conférence',
    icon: 'conference',
  },
  {
    value: 40000,
    suffix: '+',
    label: 'Clients accueillis',
    icon: 'users',
  },
];
