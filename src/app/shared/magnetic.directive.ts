import { Directive, ElementRef, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class MagneticDirective {
  private readonly el = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly strength = 0.28;

  private get enabled(): boolean {
    return (
      isPlatformBrowser(this.platformId) &&
      window.matchMedia('(hover: hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    if (!this.enabled) return;
    const rect = this.el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * this.strength;
    const y = (e.clientY - rect.top - rect.height / 2) * this.strength;
    this.el.style.transition = 'transform 0.15s ease-out';
    this.el.style.transform = `translate(${x}px, ${y}px)`;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    if (!this.enabled) return;
    this.el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
    this.el.style.transform = '';
  }
}
