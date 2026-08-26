import { Component, inject } from '@angular/core';
import { LucidePhone, LucideMail, LucideMessageCircle } from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { MagneticDirective } from '../../shared/magnetic.directive';

@Component({
  selector: 'app-cta-banner',
  imports: [LucidePhone, LucideMail, LucideMessageCircle, RevealDirective, MagneticDirective],
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.scss',
})
export class CtaBanner {
  readonly hotelService = inject(HotelService);
}
