import { Component, inject } from '@angular/core';
import {
  LucideMapPin,
  LucidePhone,
  LucideArrowRight,
  LucideStar,
  LucideCircleParking,
  LucideWifi,
} from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { MagneticDirective } from '../../shared/magnetic.directive';

@Component({
  selector: 'app-hotels',
  imports: [
    LucideMapPin,
    LucidePhone,
    LucideArrowRight,
    LucideStar,
    LucideCircleParking,
    LucideWifi,
    RevealDirective,
    MagneticDirective,
  ],
  templateUrl: './hotels.html',
  styleUrl: './hotels.scss',
})
export class Hotels {
  readonly hotelService = inject(HotelService);

  select(id: string): void {
    this.hotelService.select(id);
    document.getElementById('localisation')?.scrollIntoView({ behavior: 'smooth' });
  }
}
