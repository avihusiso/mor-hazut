import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

const SKELETON_CLASSES = ['animate-pulse', 'bg-beige-dark/30'];

@Directive({
  selector: 'img',
})
export class ImgSkeletonDirective {
  private readonly renderer = inject(Renderer2);

  constructor(elementRef: ElementRef<HTMLImageElement>) {
    const img = elementRef.nativeElement;

    for (const className of SKELETON_CLASSES) {
      this.renderer.addClass(img, className);
    }

    const clearSkeleton = (): void => {
      for (const className of SKELETON_CLASSES) {
        this.renderer.removeClass(img, className);
      }
      img.removeEventListener('load', clearSkeleton);
      img.removeEventListener('error', clearSkeleton);
    };

    img.addEventListener('load', clearSkeleton);
    img.addEventListener('error', clearSkeleton);
  }
}
