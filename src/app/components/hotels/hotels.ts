import { Component, inject } from '@angular/core';
import { LucideMapPin, LucidePhone, LucideArrowRight } from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hotels',
  imports: [LucideMapPin, LucidePhone, LucideArrowRight, RevealDirective],
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
