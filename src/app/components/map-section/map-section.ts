import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LucideMapPin, LucideNavigation, LucidePhone } from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-map-section',
  imports: [LucideMapPin, LucideNavigation, LucidePhone, RevealDirective],
  templateUrl: './map-section.html',
  styleUrl: './map-section.scss',
})
export class MapSection {
  readonly hotelService = inject(HotelService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly mapUrl = computed(() => {
    const h = this.hotelService.selected();
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${h.lng - 0.02}%2C${h.lat - 0.015}%2C${h.lng + 0.02}%2C${h.lat + 0.015}&layer=mapnik&marker=${h.lat}%2C${h.lng}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  readonly directionsUrl = computed(() => {
    const h = this.hotelService.selected();
    return `https://www.google.com/maps/dir/?api=1&destination=${h.lat},${h.lng}`;
  });
}
