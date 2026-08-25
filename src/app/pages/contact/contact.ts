import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucidePhone,
  LucideMail,
  LucideMapPin,
  LucideSend,
  LucideMessageCircle,
} from '@lucide/angular';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    Navbar,
    Footer,
    LucidePhone,
    LucideMail,
    LucideMapPin,
    LucideSend,
    LucideMessageCircle,
    RevealDirective,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly hotelService = inject(HotelService);

  name = '';
  phone = '';
  city = 'Dschang';
  message = '';
  sent = false;

  submit(event: Event): void {
    event.preventDefault();
    const hotel =
      this.hotelService.hotels.find((h) => h.city === this.city) ??
      this.hotelService.selected();
    this.hotelService.select(hotel.id);

    const subject = encodeURIComponent(`Contact site — ${hotel.name}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nNom : ${this.name}\nTéléphone : ${this.phone}\nVille souhaitée : ${this.city}\n\nMessage :\n${this.message}\n`
    );
    window.location.href = `mailto:${hotel.email}?subject=${subject}&body=${body}`;
    this.sent = true;
  }
}
