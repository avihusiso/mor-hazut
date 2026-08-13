import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../core/animations/fade-in.directive';
import { FAQ_ITEMS } from '../../core/data/faq.data';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../../shared/icon/icon';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FadeInDirective, IconComponent, SectionHeadingComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.html',
})
export class FaqComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly items = FAQ_ITEMS;
  protected readonly openIds = signal<ReadonlySet<number>>(new Set());

  isOpen(id: number): boolean {
    return this.openIds().has(id);
  }

  toggle(id: number): void {
    this.openIds.update((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }
}
