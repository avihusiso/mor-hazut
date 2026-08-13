import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../icon/icon';

export const WHATSAPP_NUMBER = '972526526616';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [href]="href()"
      target="_blank"
      rel="noopener noreferrer"
      class="group fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-charcoal/20 transition-transform duration-300 hover:scale-105 focus-visible:scale-105 md:bottom-8 md:end-8"
      [attr.aria-label]="i18n.t('whatsapp.label')"
    >
      <span
        class="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:hidden"
        aria-hidden="true"
      ></span>
      <app-icon name="whatsapp" class="h-6 w-6" />
    </a>
  `,
})
export class WhatsAppButtonComponent {
  protected readonly i18n = inject(I18nService);

  protected readonly href = computed(() => {
    const message = encodeURIComponent(this.i18n.t('whatsapp.message'));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  });
}
