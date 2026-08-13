import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalPage } from '../../core/data/legal-content.data';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../../shared/icon/icon';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './legal-page.html',
})
export class LegalPageComponent {
  protected readonly i18n = inject(I18nService);
  readonly content = input.required<LegalPage>();
}
