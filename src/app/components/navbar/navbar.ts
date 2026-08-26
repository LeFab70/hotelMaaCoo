import {
  Component,
  HostListener,
  inject,
  signal,
  effect,
  afterNextRender,
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
  readonly activeFragment = signal<string | null>(null);

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

    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const ids = this.links
        .map((link) => link.fragment)
        .filter((f): f is Exclude<typeof f, null> => !!f);

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible[0]) {
            this.activeFragment.set(visible[0].target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      ids.forEach((id) => {
        const el = this.document.getElementById(id);
        if (el) observer.observe(el);
      });
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
