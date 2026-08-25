import {
  Component,
  HostListener,
  inject,
  signal,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
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
} from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';

@Component({
  selector: 'app-navbar',
  imports: [
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
    { href: '#hotels', label: 'Nos hôtels', icon: 'hotels' },
    { href: '#chambres', label: 'Chambres', icon: 'rooms' },
    { href: '#services', label: 'Services', icon: 'services' },
    { href: '#restaurant', label: 'Restaurant', icon: 'restaurant' },
    { href: '#temoignages', label: 'Avis', icon: 'reviews' },
    { href: '#localisation', label: 'Localisation', icon: 'map' },
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
