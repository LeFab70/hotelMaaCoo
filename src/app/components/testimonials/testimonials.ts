import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { LucideStar, LucideEye } from '@lucide/angular';
import { TESTIMONIALS } from '../../core/hotel.data';
import { VisitCounterService } from '../../core/visit-counter.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [LucideStar, LucideEye, DecimalPipe, RevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly testimonials = TESTIMONIALS;
  readonly visits = inject(VisitCounterService);
}
