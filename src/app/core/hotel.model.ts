export interface RoomType {
  name: string;
  price: number;
  count?: number;
  description: string;
  image: string;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  region: string;
  tagline: string;
  address: string;
  landmark: string;
  phones: string[];
  email: string;
  lat: number;
  lng: number;
  roomCount: number;
  image: string;
  gallery: string[];
  rooms: RoomType[];
}

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}
