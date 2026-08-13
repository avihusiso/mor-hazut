import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly mobileOpen = signal(false);
  private readonly mobileToggle = viewChild<ElementRef<HTMLButtonElement>>('mobileToggle');

  protected readonly navLinks = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/collection', labelKey: 'nav.collection' },
    { path: '/villa', labelKey: 'nav.villa' },
    { path: '/testimonials', labelKey: 'nav.testimonials' },
    { path: '/faq', labelKey: 'nav.faq' },
  ];

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    if (this.mobileOpen()) {
      this.mobileOpen.set(false);
      this.mobileToggle()?.nativeElement.focus();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobile();
  }
}
