import { Component, DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, skip } from 'rxjs';
import { I18nService } from './core/i18n/i18n.service';
import { BackToTopComponent } from './shared/back-to-top/back-to-top';
import { FooterComponent } from './shared/footer/footer';
import { NavbarComponent } from './shared/navbar/navbar';
import { WhatsAppButtonComponent } from './shared/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsAppButtonComponent, BackToTopComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly i18n = inject(I18nService);

  constructor() {
    const router = inject(Router);
    const destroyRef = inject(DestroyRef);

    const subscription = router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        skip(1),
      )
      .subscribe(() => {
        const fragment = router.parseUrl(router.url).fragment;
        if (fragment) {
          setTimeout(() => document.getElementById(fragment)?.scrollIntoView({ block: 'start' }));
        }
      });

    destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
