import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p class="eyebrow mb-3">{{ eyebrow() }}</p>
      <h2 class="text-3xl font-semibold text-charcoal md:text-4xl">{{ title() }}</h2>
      <div class="mx-auto my-5 h-px w-12 bg-gold-deep/60"></div>
      @if (subtitle()) {
        <p class="text-base leading-relaxed text-charcoal-soft">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
