import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser, DecimalPipe } from '@angular/common';
import {
  LucideBedDouble,
  LucideBuilding2,
  LucidePresentation,
  LucideUsers,
} from '@lucide/angular';
import { HOTEL_STATS } from '../../core/stats.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-stats',
  imports: [
    LucideBedDouble,
    LucideBuilding2,
    LucidePresentation,
    LucideUsers,
    DecimalPipe,
    RevealDirective,
  ],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private timers: number[] = [];

  readonly stats = HOTEL_STATS;
  readonly displayed = signal<number[]>(HOTEL_STATS.map(() => 0));
  private started = false;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.displayed.set(this.stats.map((s) => s.value));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.animate();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.timers.forEach((id) => window.clearInterval(id));
  }

  private animate(): void {
    if (this.started) return;
    this.started = true;

    this.stats.forEach((stat, index) => {
      const duration = 1400;
      const steps = 40;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;
      const id = window.setInterval(() => {
        step += 1;
        current = Math.min(stat.value, Math.round(increment * step));
        this.displayed.update((arr) => {
          const next = [...arr];
          next[index] = current;
          return next;
        });
        if (step >= steps) {
          window.clearInterval(id);
        }
      }, duration / steps);
      this.timers.push(id);
    });
  }
}
