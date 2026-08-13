import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../icon/icon';

const SHOW_AFTER_PX = 400;

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <button
        type="button"
        (click)="scrollToTop()"
        class="fixed bottom-5 start-5 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-ivory text-charcoal shadow-lg ring-1 ring-beige-dark/50 transition-transform duration-300 hover:scale-105 focus-visible:scale-105 md:bottom-8 md:start-8"
        [attr.aria-label]="i18n.pick({ he: 'חזרה לראש העמוד', en: 'Back to top' })"
      >
        <app-icon name="chevron-up-double" class="h-6 w-6" />
      </button>
    }
  `,
})
export class BackToTopComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > SHOW_AFTER_PX);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
