import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImgSkeletonDirective } from '../../core/animations/img-skeleton.directive';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconComponent, ImgSkeletonDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class FooterComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly year = new Date().getFullYear();

  protected readonly navLinks = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/collection', labelKey: 'nav.collection' },
    { path: '/villa', labelKey: 'nav.villa' },
    { path: '/testimonials', labelKey: 'nav.testimonials' },
    { path: '/faq', labelKey: 'nav.faq' },
  ];

  protected readonly socialLinks: { name: string; icon: 'instagram' | 'facebook'; href: string }[] = [
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/morhazut.bridal/' },
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/mor.biton7/' },
  ];
}
