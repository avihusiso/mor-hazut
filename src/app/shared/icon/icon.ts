import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'calendar'
  | 'ruler'
  | 'sparkle'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'whatsapp'
  | 'menu'
  | 'close'
  | 'chevron-down'
  | 'arrow'
  | 'star'
  | 'quote'
  | 'check'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'clock';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('calendar') {
          <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
          <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
        }
        @case ('ruler') {
          <path
            d="M4.5 15.5 15.5 4.5a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L8.5 19.5a1.4 1.4 0 0 1-2 0l-2-2a1.4 1.4 0 0 1 0-2Z"
          />
          <path d="m13 7 2 2M10 10l2 2M7 13l2 2" />
        }
        @case ('sparkle') {
          <path
            d="M12 3.5c.6 3 2.1 4.5 5 5-2.9.5-4.4 2-5 5-.6-3-2.1-4.5-5-5 2.9-.5 4.4-2 5-5Z"
          />
          <path d="M18.5 15.5c.3 1.4 1 2.1 2.4 2.4-1.4.3-2.1 1-2.4 2.4-.3-1.4-1-2.1-2.4-2.4 1.4-.3 2.1-1 2.4-2.4Z" />
        }
        @case ('instagram') {
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        }
        @case ('facebook') {
          <path
            d="M14.5 21v-7h2.3l.4-3H14.5V9.1c0-.9.2-1.5 1.6-1.5h1.7V5c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V11H9v3h2.3v7Z"
            fill="currentColor"
            stroke="none"
          />
        }
        @case ('tiktok') {
          <path
            d="M14 3.5c.4 2.2 1.8 3.6 4 3.9v2.5a6.6 6.6 0 0 1-4-1.4v6.3a4.9 4.9 0 1 1-4.9-4.9c.3 0 .6 0 .9.1v2.6a2.3 2.3 0 1 0 1.6 2.2V3.5Z"
            fill="currentColor"
            stroke="none"
          />
        }
        @case ('whatsapp') {
          <g transform="scale(1.5)">
            <path
              d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.006-.247-.006-.38-.006a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
              fill="currentColor"
              stroke="none"
            />
          </g>
        }
        @case ('menu') {
          <path d="M4 6.5h16M4 12h16M4 17.5h16" />
        }
        @case ('close') {
          <path d="m5 5 14 14M19 5 5 19" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" />
        }
        @case ('arrow') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('star') {
          <path
            d="m12 3.5 2.6 5.4 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9Z"
            fill="currentColor"
            stroke="none"
          />
        }
        @case ('quote') {
          <path
            d="M8.5 8.5c-2 .6-3 2-3 4.3 0 2 1.2 3.2 2.8 3.2 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.3-2.4h-.4c.1-1.2.9-2.1 2.1-2.6ZM17 8.5c-2 .6-3 2-3 4.3 0 2 1.2 3.2 2.8 3.2 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.3-2.4h-.4c.1-1.2.9-2.1 2.1-2.6Z"
            fill="currentColor"
            stroke="none"
          />
        }
        @case ('check') {
          <path d="m5 13 4 4 10-10" />
        }
        @case ('mail') {
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        }
        @case ('phone') {
          <path
            d="M7 4.5h2.2c.4 0 .8.3.9.7l.8 2.6c.1.4 0 .8-.3 1L9.2 10c.9 2 2.6 3.7 4.6 4.6l1.2-1.4c.3-.3.7-.4 1-.3l2.6.8c.4.1.7.5.7.9V17c0 1-1 1.8-2 1.6-5.3-1-9.5-5.2-10.5-10.5-.2-1 .6-2 1.7-2Z"
          />
        }
        @case ('pin') {
          <path
            d="M12 21s6.5-5.6 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5.4 6.5 11 6.5 11Z"
          />
          <circle cx="12" cy="10" r="2.2" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
