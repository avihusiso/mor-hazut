import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appScrollToFragment]',
})
export class ScrollToFragmentDirective {
  readonly appScrollToFragment = input.required<string>();

  private readonly document = inject(DOCUMENT);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.document.location.pathname !== '/') {
      return;
    }
    event.preventDefault();
    this.document.getElementById(this.appScrollToFragment())?.scrollIntoView({ block: 'start' });
  }
}
