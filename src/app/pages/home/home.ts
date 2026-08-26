import { Component, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Hotels } from '../../components/hotels/hotels';
import { Stats } from '../../components/stats/stats';
import { Rooms } from '../../components/rooms/rooms';
import { Amenities } from '../../components/amenities/amenities';
import { Restaurant } from '../../components/restaurant/restaurant';
import { Testimonials } from '../../components/testimonials/testimonials';
import { MapSection } from '../../components/map-section/map-section';
import { CtaBanner } from '../../components/cta-banner/cta-banner';
import { Footer } from '../../components/footer/footer';
import { BackToTop } from '../../components/back-to-top/back-to-top';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Hero,
    Hotels,
    Stats,
    Rooms,
    Amenities,
    Restaurant,
    Testimonials,
    MapSection,
    CtaBanner,
    Footer,
    BackToTop,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor() {
    const platformId = inject(PLATFORM_ID);

    afterNextRender(() => {
      if (!isPlatformBrowser(platformId)) return;
      const id = window.location.hash?.replace('#', '');
      if (!id) return;

      requestAnimationFrame(() => requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const navH =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
            10
          ) || 76;
        const top = el.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'auto' });
      }));
    });
  }
}
