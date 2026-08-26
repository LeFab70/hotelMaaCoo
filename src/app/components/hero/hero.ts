import {
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  LucidePhone,
  LucideMapPin,
  LucideChevronDown,
} from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { MagneticDirective } from '../../shared/magnetic.directive';

@Component({
  selector: 'app-hero',
  imports: [LucidePhone, LucideMapPin, LucideChevronDown, MagneticDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly hotelService = inject(HotelService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly reducedMotion =
    isPlatformBrowser(this.platformId) &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private ticking = false;

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.reducedMotion || this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      const media = this.host.nativeElement.querySelector(
        '.hero__media'
      ) as HTMLElement | null;
      if (media) {
        const y = Math.min(window.scrollY, 320);
        media.style.transform = `translate3d(0, ${y * 0.055}px, 0)`;
      }
      this.ticking = false;
    });
  }
}
