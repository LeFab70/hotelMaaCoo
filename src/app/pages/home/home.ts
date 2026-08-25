import { Component } from '@angular/core';
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
export class Home {}
