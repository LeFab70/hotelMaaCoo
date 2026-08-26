import {
  Component,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  private readonly platformId = inject(PLATFORM_ID);
  readonly switching = signal(false);
  private timer?: ReturnType<typeof setTimeout>;
  private first = true;

  constructor() {
    effect(() => {
      this.hotelService.selectedId();
      if (this.first || !isPlatformBrowser(this.platformId)) {
        this.first = false;
        return;
      }
      this.switching.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.switching.set(false), 220);
    });
  }

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
