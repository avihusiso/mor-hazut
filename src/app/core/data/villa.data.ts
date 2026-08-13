import { IconName } from '../../shared/icon/icon';

export interface VillaAmenity {
  icon: IconName;
  title: { he: string; en: string };
  body: { he: string; en: string };
}

export interface VillaPhoto {
  id: number;
  src: string;
  alt: { he: string; en: string };
}

export const VILLA_GALLERY: VillaPhoto[] = [
  {
    id: 1,
    src: 'assets/photos/gallery/villa/villa-01.jpg',
    alt: { he: 'סלון אירוח כפרי-אלגנטי בוילה עם תקרת עץ גבוהה ונברשת חבלים', en: 'Rustic-elegant lounge at the villa with a high wood-beamed ceiling and rope chandelier' },
  },
  {
    id: 2,
    src: 'assets/photos/gallery/villa/villa-02.jpg',
    alt: { he: 'פינת ישיבה רומנטית עם כיסאות מרופדים ותאורה חמימה', en: 'A romantic seating nook with upholstered chairs and warm lighting' },
  },
  {
    id: 3,
    src: 'assets/photos/gallery/villa/villa-03.jpg',
    alt: { he: 'חדר אוכל מפואר עם נברשת מרכזית', en: 'A grand dining room with a statement chandelier' },
  },
  {
    id: 4,
    src: 'assets/photos/gallery/villa/villa-04.jpg',
    alt: { he: 'פינת ישיבה מוצלת במרפסת עם כיסאות קלועים', en: 'A shaded patio corner with woven seating' },
  },
  {
    id: 5,
    src: 'assets/photos/gallery/villa/villa-05.jpg',
    alt: { he: 'חצר פרטית עם פינת ישיבה תלויה ופינת אוכל', en: 'A private courtyard with a hanging chair and outdoor dining area' },
  },
  {
    id: 6,
    src: 'assets/photos/gallery/villa/villa-06.jpg',
    alt: { he: 'מטבח מעוצב ומאובזר בוילה', en: "The villa's beautifully appointed kitchen" },
  },
  {
    id: 7,
    src: 'assets/photos/gallery/villa/villa-07.jpg',
    alt: { he: 'שביל גינה ירוק בכניסה לוילה', en: 'A lush garden path at the villa entrance' },
  },
  {
    id: 8,
    src: 'assets/photos/gallery/villa/villa-08.jpg',
    alt: { he: 'מדרגות אבן בכניסה לוילה', en: 'The stone entrance staircase' },
  },
];

export const VILLA_AMENITIES: VillaAmenity[] = [
  {
    icon: 'sparkle',
    title: { he: 'חלל מעוצב ומפנק', en: 'A Beautifully Styled Space' },
    body: {
      he: 'חדר התארגנות פרטי ומעוצב באווירה רגועה ואלגנטית, מושלם לתיעוד הרגעים הראשונים של היום.',
      en: 'A private, beautifully styled getting-ready room with a calm, elegant atmosphere — perfect for capturing the first moments of your day.',
    },
  },
  {
    icon: 'star',
    title: { he: 'מקום לכל הצוות', en: 'Room for Your Whole Team' },
    body: {
      he: 'מקום נוח לאיפור, שיער וצילום, לצד מקום ישיבה נעים למלוות הקרובות שלך.',
      en: 'Comfortable space for hair, makeup and photography, alongside cozy seating for your closest companions.',
    },
  },
  {
    icon: 'clock',
    title: { he: 'זמן פרטי ושקט', en: 'Private, Unhurried Time' },
    body: {
      he: 'שעות פרטיות המוקדשות רק לך, כדי להתכונן בנחת וליהנות מכל רגע לפני הכניסה לחופה.',
      en: 'Private hours dedicated just to you, to get ready at ease and savour every moment before the ceremony.',
    },
  },
  {
    icon: 'pin',
    title: { he: 'מיקום נוח', en: 'A Convenient Location' },
    body: {
      he: 'ממוקמת בבית שמש, בסמיכות לסטודיו, לתיאום נוח של יום ההכנות.',
      en: 'Located in Beit Shemesh, close to the studio, for easy coordination of your prep day.',
    },
  },
];
