import {
  Component,
  PLATFORM_ID,
  effect,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LucidePhone, LucideMail } from '@lucide/angular';
import { HotelService } from '../../core/hotel.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-rooms',
  imports: [LucidePhone, LucideMail, RevealDirective],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms {
  readonly hotelService = inject(HotelService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly switching = signal(false);
  private timer?: ReturnType<typeof setTimeout>;
  private first = true;

  constructor() {
    effect(() => {
      this.hotelService.selectedId();
      if (this.first || !isPlatformBrowser(this.platformId)) {
        this.first = false;
        return;
      }
      this.switching.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.switching.set(false), 220);
    });
  }
}
