export interface GownItem {
  id: number;
  name: string;
  featured: boolean;
  src: string;
  alt: { he: string; en: string };
}

export const GALLERY: GownItem[] = [
  {
    id: 1,
    name: 'Elara',
    featured: true,
    src: 'assets/photos/gallery/model-1.png',
    alt: {
      he: 'כלה בשמלת תחרה קלאסית עם שרוולים ארוכים וחצאית רקומה בפרחי תחרה',
      en: 'Bride in a classic long-sleeve lace gown with a rose-embroidered skirt',
    },
  },
  {
    id: 2,
    name: 'Celine',
    featured: false,
    src: 'assets/photos/gallery/model-2.png',
    alt: {
      he: 'כלה בשמלת בוהו שיק עם תחרה עדינה ומחשוף עדין',
      en: 'Bride in a boho-chic gown with delicate lace and a soft neckline',
    },
  },
  {
    id: 3,
    name: 'Maeve',
    featured: false,
    src: 'assets/photos/gallery/model-3.png',
    alt: {
      he: 'כלה בשמלת נסיכה מלאה עם חצאית נפוחה ופרטי תחרה עדינים',
      en: 'Bride in a full princess-style gown with a voluminous skirt and delicate lace detailing',
    },
  },
  {
    id: 4,
    name: 'Willow',
    featured: true,
    src: 'assets/photos/gallery/gown-01.png',
    alt: {
      he: 'תקריב על גזרת שמלת ערב עם תחרה רקומה ושרוולים שקופים',
      en: 'Close-up of an evening gown bodice with embroidered lace and sheer sleeves',
    },
  },
  {
    id: 5,
    name: 'Sloane',
    featured: false,
    src: 'assets/photos/gallery/gown-02.png',
    alt: {
      he: 'תקריב על מחשוף שמלת כלה קלאסית עם תחרה עדינה',
      en: 'Close-up of a classic bridal neckline with fine lace texture',
    },
  },
  {
    id: 6,
    name: 'Arabella',
    featured: false,
    src: 'assets/photos/gallery/gown-03.png',
    alt: {
      he: 'שמלת כלה בסגנון בוהו עם בד זורם ותחרה פרחונית',
      en: 'Boho-style bridal gown with flowing fabric and floral lace',
    },
  },
  {
    id: 7,
    name: 'Noor',
    featured: false,
    src: 'assets/photos/gallery/gown-04.png',
    alt: {
      he: 'שמלת כלה מלכותית עם שובל ארוך ותחרה עשירה',
      en: 'Regal bridal gown with a long train and rich lace detailing',
    },
  },
  {
    id: 8,
    name: 'Liora',
    featured: false,
    src: 'assets/photos/gallery/gown-05.png',
    alt: {
      he: 'שמלת ערב אלגנטית עם קווים נקיים וגזרה מחמיאה',
      en: 'Elegant evening gown with clean lines and a flattering silhouette',
    },
  },
  {
    id: 9,
    name: 'Camille',
    featured: false,
    src: 'assets/photos/gallery/gown-06.png',
    alt: {
      he: 'שמלת כלה קלאסית בגזרת A עם תחרה עדינה על פני כל השמלה',
      en: 'Classic A-line bridal gown with delicate lace throughout',
    },
  },
  {
    id: 10,
    name: 'Romy',
    featured: false,
    src: 'assets/photos/gallery/gown-07.png',
    alt: {
      he: 'שמלת כלה קלילה בסגנון בוהו עם שרוולי תחרה פתוחים',
      en: 'Lightweight boho bridal gown with open lace sleeves',
    },
  },
  {
    id: 11,
    name: 'אדל',
    featured: true,
    src: 'assets/photos/gallery/gown-08.png',
    alt: {
      he: 'שמלת נסיכה מרשימה עם חצאית רחבה ופרטי תפירה עדינים',
      en: 'A striking princess gown with a full skirt and fine tailoring details',
    },
  },
  {
    id: 12,
    name: 'Selene',
    featured: false,
    src: 'assets/photos/gallery/gown-09.png',
    alt: {
      he: 'שמלת ערב מינימליסטית עם בד משי חלק ונפילה רכה',
      en: 'Minimalist evening gown in smooth silk with a soft drape',
    },
  },
  {
    id: 13,
    name: 'Talia',
    featured: false,
    src: 'assets/photos/gallery/gown-10.png',
    alt: {
      he: 'שמלת כלה קלאסית עם מחשוף לב ותחרה רקומה ביד',
      en: 'Classic bridal gown with a sweetheart neckline and hand-embroidered lace',
    },
  },
  {
    id: 14,
    name: 'Yaelle',
    featured: false,
    src: 'assets/photos/gallery/gown-11.png',
    alt: {
      he: 'שמלת כלה בוהו שיק עם מרקם תחרה עדין ונופך רומנטי',
      en: 'Boho-chic bridal gown with fine lace texture and a romantic feel',
    },
  },
  {
    id: 15,
    name: 'Ophira',
    featured: false,
    src: 'assets/photos/gallery/gown-12.png',
    alt: {
      he: 'שמלת כלה מפוארת עם שכבות טול ותחרה עדינה',
      en: 'Opulent bridal gown with layered tulle and delicate lace',
    },
  },
  {
    id: 16,
    name: 'Aurora',
    featured: false,
    src: 'assets/photos/gallery/gown-13.png',
    alt: {
      he: 'שמלת ערב חגיגית עם פרטי תחרה עדינים וגזרה זורמת',
      en: 'Festive evening gown with delicate lace detailing and a flowing cut',
    },
  },
  {
    id: 17,
    name: 'Studio - Mirror Room',
    featured: false,
    src: 'assets/photos/gallery/studio-01.jpg',
    alt: {
      he: 'חדר המראה בסטודיו מור חזות עם שטיח ממותג ושמלות כלה ברקע',
      en: 'The mirror room at Mor Hazut studio, with a branded rug and bridal gowns in the background',
    },
  },
  {
    id: 18,
    name: 'Studio - Mirror Detail',
    featured: false,
    src: 'assets/photos/gallery/studio-02.jpg',
    alt: {
      he: 'תקריב על מראת הסטודיו ושטיח מור חזות הממותג',
      en: "Close-up of the studio's mirror and the branded Mor Hazut rug",
    },
  },
  {
    id: 19,
    name: 'Studio - Gown Wall',
    featured: false,
    src: 'assets/photos/gallery/studio-03.jpg',
    alt: {
      he: 'קיר שמלות הכלה בסטודיו לצד פינת ישיבה נעימה',
      en: "The studio's wall of bridal gowns beside a cozy seating area",
    },
  },
  {
    id: 20,
    name: 'Freya',
    featured: false,
    src: 'assets/photos/gallery/gown-14.png',
    alt: {
      he: 'תקריב על שרוולי תחרה עדינים בשמלת כלה, עם טבעת אירוסין',
      en: 'Close-up of delicate lace cuff sleeves on a bridal gown, with an engagement ring',
    },
  },
  {
    id: 21,
    name: 'Isabeau',
    featured: false,
    src: 'assets/photos/gallery/gown-15.jpeg',
    alt: {
      he: 'כלה בפרופיל צד לובשת שמלה נוצצת וצמודה עם שובל, על מדרגות בגינה',
      en: 'Bride in profile wearing a fitted, sparkling gown with a train, on garden steps',
    },
  },
  {
    id: 22,
    name: 'Marielle',
    featured: false,
    src: 'assets/photos/gallery/gown-17.jpeg',
    alt: {
      he: 'כלה יושבת על ספה מפוארת בשמלת תחרה עם שרוולי בלון',
      en: 'Bride seated on an ornate sofa in a lace gown with puffed sleeves',
    },
  },
  {
    id: 23,
    name: 'Odette',
    featured: false,
    src: 'assets/photos/gallery/gown-18.jpeg',
    alt: {
      he: 'כלה בפתח קמור מאבן, לובשת שמלת תחרה עם צווארון גבוה',
      en: 'Bride at a stone archway entrance, wearing a high-neck lace gown',
    },
  },
  {
    id: 24,
    name: 'Verena',
    featured: false,
    src: 'assets/photos/gallery/gown-19.jpeg',
    alt: {
      he: 'כלה בגינה ירוקה לובשת שמלת תחרה רקומה בגזרת A',
      en: 'Bride in a lush garden wearing an embroidered A-line lace gown',
    },
  },
  {
    id: 25,
    name: 'Lucienne',
    featured: false,
    src: 'assets/photos/gallery/gown-20.jpeg',
    alt: {
      he: 'כלה ליד קיר אבן, לובשת שמלת תחרה עם מותן מוגדר',
      en: 'Bride against a stone wall, wearing a lace gown with a defined waist',
    },
  },
];

export const FEATURED_GOWNS = GALLERY.filter((g) => g.featured);
