import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucidePhone, LucideMail, LucideMapPin } from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { VisitCounterService } from '../../core/visit-counter.service';

@Component({
  selector: 'app-footer',
  imports: [LucidePhone, LucideMail, LucideMapPin, DecimalPipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly hotelService = inject(HotelService);
  readonly visits = inject(VisitCounterService);
  readonly year = new Date().getFullYear();
}
