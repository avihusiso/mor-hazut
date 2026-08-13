import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FadeInDirective } from '../../core/animations/fade-in.directive';
import { GALLERY } from '../../core/data/gallery.data';
import { I18nService } from '../../core/i18n/i18n.service';
import { IconComponent } from '../../shared/icon/icon';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';

const GRID_SPAN_PATTERN = ['lg:row-span-2', '', '', 'lg:row-span-2'];

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [FadeInDirective, IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collection.html',
})
export class CollectionComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly gowns = GALLERY;

  protected readonly lightboxIndex = signal<number | null>(null);
  protected readonly currentGown = computed(() => {
    const idx = this.lightboxIndex();
    return idx === null ? null : this.gowns[idx];
  });

  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  private triggerEl: HTMLElement | null = null;

  constructor() {
    effect(() => {
      if (this.lightboxIndex() !== null) {
        this.dialog()?.nativeElement.focus();
      }
    });
  }

  gridSpanClass(index: number): string {
    return GRID_SPAN_PATTERN[index % GRID_SPAN_PATTERN.length];
  }

  openLightbox(index: number, event: MouseEvent): void {
    this.triggerEl = event.currentTarget as HTMLElement;
    this.lightboxIndex.set(index);
  }

  closeLightbox(): void {
    this.lightboxIndex.set(null);
    this.triggerEl?.focus();
    this.triggerEl = null;
  }

  next(): void {
    const total = this.gowns.length;
    this.lightboxIndex.update((idx) => (idx === null ? null : (idx + 1) % total));
  }

  prev(): void {
    const total = this.gowns.length;
    this.lightboxIndex.update((idx) => (idx === null ? null : (idx - 1 + total) % total));
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightboxIndex() !== null) {
      this.closeLightbox();
    }
  }

  onDialogKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    } else if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  }

  private trapFocus(event: KeyboardEvent): void {
    const container = this.dialog()?.nativeElement;
    if (!container) return;
    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
