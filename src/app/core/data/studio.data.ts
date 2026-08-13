export interface StudioPhoto {
  src: string;
  alt: { he: string; en: string };
}

export const STUDIO_PHOTOS: StudioPhoto[] = [
  {
    src: 'assets/photos/gallery/studio-01.jpg',
    alt: {
      he: 'חדר המראה בסטודיו מור חזות עם שטיח ממותג ושמלות כלה ברקע',
      en: 'The mirror room at Mor Hazut studio, with a branded rug and bridal gowns in the background',
    },
  },
  {
    src: 'assets/photos/gallery/studio-02.jpg',
    alt: {
      he: 'תקריב על מראת הסטודיו ושטיח מור חזות הממותג',
      en: "Close-up of the studio's mirror and the branded Mor Hazut rug",
    },
  },
  {
    src: 'assets/photos/gallery/studio-03.jpg',
    alt: {
      he: 'קיר שמלות הכלה בסטודיו לצד פינת ישיבה נעימה',
      en: "The studio's wall of bridal gowns beside a cozy seating area",
    },
  },
];
