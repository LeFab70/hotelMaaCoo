import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  PLATFORM_ID,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly appReveal = input<'up' | 'left' | 'right' | 'scale' | ''>('');
  readonly revealDelay = input(0);

  ngOnInit(): void {
    const node = this.el.nativeElement;
    const direction = this.appReveal() || 'up';
    node.setAttribute('data-reveal', direction === 'up' ? '' : direction);
    if (this.revealDelay()) {
      node.style.transitionDelay = `${this.revealDelay()}ms`;
    }

    if (!isPlatformBrowser(this.platformId)) {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
