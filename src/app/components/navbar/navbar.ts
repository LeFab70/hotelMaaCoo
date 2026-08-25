import {
  Component,
  HostListener,
  inject,
  signal,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  LucideMenu,
  LucideX,
  LucidePhone,
  LucideMail,
  LucideBuilding2,
  LucideBedDouble,
  LucideSparkles,
  LucideUtensilsCrossed,
  LucideStar,
  LucideMapPin,
  LucideMessageSquare,
} from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    LucideMenu,
    LucideX,
    LucidePhone,
    LucideMail,
    LucideBuilding2,
    LucideBedDouble,
    LucideSparkles,
    LucideUtensilsCrossed,
    LucideStar,
    LucideMapPin,
    LucideMessageSquare,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  readonly hotelService = inject(HotelService);
  readonly open = signal(false);
  readonly scrolled = signal(false);

  readonly links = [
    { path: '/', fragment: 'hotels', label: 'Nos hôtels', icon: 'hotels' },
    { path: '/', fragment: 'chambres', label: 'Chambres', icon: 'rooms' },
    { path: '/', fragment: 'services', label: 'Services', icon: 'services' },
    { path: '/', fragment: 'restaurant', label: 'Restaurant', icon: 'restaurant' },
    { path: '/', fragment: 'temoignages', label: 'Avis', icon: 'reviews' },
    { path: '/', fragment: 'localisation', label: 'Localisation', icon: 'map' },
    { path: '/contact', fragment: null, label: 'Contactez-nous', icon: 'contact' },
  ] as const;

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.document.body.classList.toggle('nav-locked', this.open());
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 16);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.close();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 1024) {
      this.close();
    }
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
