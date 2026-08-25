import { Component, HostListener, inject, signal } from '@angular/core';
import {
  LucideMenu,
  LucideX,
  LucidePhone,
  LucideMail,
} from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';

@Component({
  selector: 'app-navbar',
  imports: [LucideMenu, LucideX, LucidePhone, LucideMail],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly hotelService = inject(HotelService);
  readonly open = signal(false);
  readonly scrolled = signal(false);

  readonly links = [
    { href: '#hotels', label: 'Nos hôtels' },
    { href: '#chambres', label: 'Chambres' },
    { href: '#services', label: 'Services' },
    { href: '#restaurant', label: 'Restaurant' },
    { href: '#temoignages', label: 'Avis' },
    { href: '#localisation', label: 'Localisation' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
