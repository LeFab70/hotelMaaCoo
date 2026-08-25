import { Component, inject } from '@angular/core';
import { LucidePhone, LucideMail } from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-rooms',
  imports: [LucidePhone, LucideMail, RevealDirective],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms {
  readonly hotelService = inject(HotelService);
}
