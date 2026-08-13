import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FadeInDirective } from '../../core/animations/fade-in.directive';
import { PRESS_MENTIONS } from '../../core/data/press.data';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../../shared/icon/icon';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [FadeInDirective, IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly testimonials = TESTIMONIALS;
  protected readonly press = PRESS_MENTIONS;
  protected readonly stars = [1, 2, 3, 4, 5];
}
