import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'maaco_visit_count';
const BASE_COUNT = 1847;

@Injectable({ providedIn: 'root' })
export class VisitCounterService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly count = signal(BASE_COUNT);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY);
      const current = stored ? Number(stored) : BASE_COUNT;
      const next = Number.isFinite(current) ? current + 1 : BASE_COUNT + 1;
      localStorage.setItem(STORAGE_KEY, String(next));
      this.count.set(next);
    }
  }
}
