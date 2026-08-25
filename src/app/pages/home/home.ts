import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Hotels } from '../../components/hotels/hotels';
import { Rooms } from '../../components/rooms/rooms';
import { Amenities } from '../../components/amenities/amenities';
import { Restaurant } from '../../components/restaurant/restaurant';
import { Testimonials } from '../../components/testimonials/testimonials';
import { MapSection } from '../../components/map-section/map-section';
import { CtaBanner } from '../../components/cta-banner/cta-banner';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Hero,
    Hotels,
    Rooms,
    Amenities,
    Restaurant,
    Testimonials,
    MapSection,
    CtaBanner,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
