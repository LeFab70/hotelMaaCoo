import { Component, inject } from '@angular/core';
import {
  LucidePhone,
  LucideMail,
  LucideMapPin,
  LucideChevronDown,
} from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';

@Component({
  selector: 'app-hero',
  imports: [LucidePhone, LucideMail, LucideMapPin, LucideChevronDown],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly hotelService = inject(HotelService);
}
