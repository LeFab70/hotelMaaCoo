import { Injectable, signal, computed } from '@angular/core';
import { HOTELS, CONTACT_EMAIL, TESTIMONIALS } from './hotel.data';
import { Hotel } from './hotel.model';

@Injectable({ providedIn: 'root' })
export class HotelService {
  readonly hotels = HOTELS;
  readonly email = CONTACT_EMAIL;
  readonly selectedId = signal<string>(HOTELS[0].id);

  readonly averageRating = computed(() => {
    const sum = TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0);
    return Math.round((sum / TESTIMONIALS.length) * 10) / 10;
  });

  readonly selected = computed(() => {
    const id = this.selectedId();
    return this.hotels.find((h) => h.id === id) ?? this.hotels[0];
  });

  select(id: string): void {
    if (this.hotels.some((h) => h.id === id)) {
      this.selectedId.set(id);
    }
  }

  phoneLink(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    return `tel:+237${digits}`;
  }

  whatsappLink(phone: string, hotel?: Hotel): string {
    const digits = phone.replace(/\D/g, '');
    const name = hotel?.name ?? "Hôtel MA'ACO";
    const text = encodeURIComponent(
      `Bonjour, je souhaite réserver une chambre à ${name}.`
    );
    return `https://wa.me/237${digits}?text=${text}`;
  }

  mailLink(hotel?: Hotel): string {
    const h = hotel ?? this.selected();
    const subject = encodeURIComponent(`Réservation — ${h.name}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite réserver une chambre à ${h.name} (${h.city}).\n\nDates souhaitées :\nNombre de personnes :\nType de chambre :\n\nMerci.`
    );
    return `mailto:${h.email}?subject=${subject}&body=${body}`;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR').format(price) + ' Fcfa';
  }

  startingPrice(hotel: Hotel): number {
    return Math.min(...hotel.rooms.map((r) => r.price));
  }
}
