import { Component, inject } from '@angular/core';
import { LucideUtensilsCrossed, LucidePhone } from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-restaurant',
  imports: [LucideUtensilsCrossed, LucidePhone, RevealDirective],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.scss',
})
export class Restaurant {
  readonly hotelService = inject(HotelService);
}
