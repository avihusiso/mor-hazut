import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  host: {
    class: 'fade-section',
  },
})
export class FadeInDirective implements AfterViewInit {
  readonly appFadeInDelay = input<number>(0, { alias: 'appFadeInDelay' });

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    const win = this.document.defaultView;

    if (!win || !('IntersectionObserver' in win)) {
      this.reveal(element);
      return;
    }

    const delay = this.appFadeInDelay();
    if (delay) {
      this.renderer.setStyle(element, 'animation-delay', `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private reveal(element: HTMLElement): void {
    this.renderer.addClass(element, 'is-visible');
  }
}
