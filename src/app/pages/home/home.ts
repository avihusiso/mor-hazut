import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../core/animations/fade-in.directive';
import { FEATURED_GOWNS } from '../../core/data/gallery.data';
import { PROCESS_STEPS } from '../../core/data/process.data';
import { I18nService } from '../../core/i18n/i18n.service';
import { ScrollToFragmentDirective } from '../../core/navigation/scroll-to-fragment.directive';
import { IconComponent } from '../../shared/icon/icon';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { WHATSAPP_NUMBER } from '../../shared/whatsapp-button/whatsapp-button';

function israeliPhoneValidator(): ValidatorFn {
  return (control): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const digitsOnly = String(control.value).replace(/[\s-]/g, '');
    return /^0\d{8,9}$/.test(digitsOnly) ? null : { israeliPhone: true };
  };
}

interface ContactForm {
  fullName: FormControl<string>;
  phone: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FadeInDirective,
    IconComponent,
    SectionHeadingComponent,
    ScrollToFragmentDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class HomeComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly featuredGowns = FEATURED_GOWNS;
  protected readonly processSteps = PROCESS_STEPS;

  protected readonly submitted = signal(false);

  protected readonly form = new FormGroup<ContactForm>({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, israeliPhoneValidator()],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  get fullName() {
    return this.form.controls.fullName;
  }
  get phone() {
    return this.form.controls.phone;
  }
  get email() {
    return this.form.controls.email;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { fullName, phone, email } = this.form.getRawValue();
    const lines = [
      this.i18n.t('home.contact.whatsappIntro'),
      '',
      `${this.i18n.t('home.contact.fullNameLabel')}: ${fullName}`,
      `${this.i18n.t('home.contact.phoneLabel')}: ${phone}`,
      `${this.i18n.t('home.contact.emailLabel')}: ${email}`,
    ];
    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');

    this.submitted.set(true);
    this.form.reset();
  }

  sendAnother(): void {
    this.submitted.set(false);
  }
}
