import { Component } from '@angular/core';
import {
  LucideConciergeBell,
  LucideBedDouble,
  LucideUtensilsCrossed,
  LucidePresentation,
  LucideCircleParking,
  LucidePartyPopper,
  LucideWashingMachine,
  LucideWifi,
  LucideChefHat,
} from '@lucide/angular';
import { AMENITIES } from '../../core/hotel.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-amenities',
  imports: [
    LucideConciergeBell,
    LucideBedDouble,
    LucideUtensilsCrossed,
    LucidePresentation,
    LucideCircleParking,
    LucidePartyPopper,
    LucideWashingMachine,
    LucideWifi,
    LucideChefHat,
    RevealDirective,
  ],
  templateUrl: './amenities.html',
  styleUrl: './amenities.scss',
})
export class Amenities {
  readonly amenities = AMENITIES;
}
