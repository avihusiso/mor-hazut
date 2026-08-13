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
    featured: false,
    src: 'assets/photos/gallery/model-1.png',
    alt: {
      he: 'כלה בשמלת תחרה קלאסית עם שרוולים ארוכים וחצאית רקומה בפרחי תחרה',
      en: 'Bride in a classic long-sleeve lace gown with a rose-embroidered skirt',
    },
  },
  {
    id: 2,
    name: 'Celine',
    featured: true,
    src: 'assets/photos/gallery/model-2.png',
    alt: {
      he: 'כלה בשמלת בוהו שיק עם תחרה עדינה ומחשוף עדין',
      en: 'Bride in a boho-chic gown with delicate lace and a soft neckline',
    },
  },
  {
    id: 3,
    name: 'Maeve',
    featured: true,
    src: 'assets/photos/gallery/model-3.png',
    alt: {
      he: 'כלה בשמלת נסיכה מלאה עם חצאית נפוחה ופרטי תחרה עדינים',
      en: 'Bride in a full princess-style gown with a voluminous skirt and delicate lace detailing',
    },
  },
  {
    id: 4,
    name: 'Willow',
    featured: false,
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
    featured: true,
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
    featured: false,
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
  {
    id: 26,
    name: 'Noelle',
    featured: false,
    src: 'assets/photos/gallery/gown-21.jpeg',
    alt: {
      he: 'כלה בשמלת תחרה צמודה עם שרוולים ארוכים וצווארון מרובע, לצד מזנון עתיק',
      en: 'Bride in a fitted lace gown with long sleeves and a square neckline, beside an antique dresser',
    },
  },
  {
    id: 27,
    name: 'Genevieve',
    featured: false,
    src: 'assets/photos/gallery/gown-22.jpeg',
    alt: {
      he: 'כלה בשמלת תחרה עם הינומה קתדרלית, לצד מזנון עתיק',
      en: 'Bride in a lace gown with a cathedral-length veil, beside an antique dresser',
    },
  },
  {
    id: 28,
    name: 'Seraphine',
    featured: false,
    src: 'assets/photos/gallery/gown-23.jpeg',
    alt: {
      he: 'כלה בשמלה נוצצת עם כתפיים בולטות וחריץ בחצאית, לצד מראה מוזהבת',
      en: 'Bride in a sequined gown with statement shoulders and a leg slit, beside a gilded mirror',
    },
  },
  {
    id: 29,
    name: 'Wren',
    featured: false,
    src: 'assets/photos/gallery/gown-24.jpeg',
    alt: {
      he: 'כלה בשמלת רשת פנינים צמודה עם צווארון גבוה, על רקע וילונות',
      en: 'Bride in a fitted pearl-mesh gown with a high neckline, against a curtained backdrop',
    },
  },
  {
    id: 30,
    name: 'Briar',
    featured: false,
    src: 'assets/photos/gallery/gown-25.jpeg',
    alt: {
      he: 'כלה בשמלת רשת פנינים צמודה עם צווארון גבוה, בפתח קמור',
      en: 'Bride in a fitted pearl-mesh gown with a high neckline, standing at an archway',
    },
  },
  {
    id: 31,
    name: 'Corinne',
    featured: false,
    src: 'assets/photos/gallery/gown-26.jpeg',
    alt: {
      he: 'כלה בפרופיל צד לובשת שמלת סאטן עם מותן מקופל ושיער פזור',
      en: 'Bride in profile wearing a satin gown with a folded peplum waist and loose hair',
    },
  },
  {
    id: 32,
    name: 'Vesper',
    featured: false,
    src: 'assets/photos/gallery/gown-27.jpeg',
    alt: {
      he: 'כלה בשמלה מובנית עם כתפיים מודגשות ומותן פפלום',
      en: 'Bride in a structured gown with statement shoulders and a peplum waist',
    },
  },
  {
    id: 33,
    name: 'Marguerite',
    featured: false,
    src: 'assets/photos/gallery/gown-28.jpeg',
    alt: {
      he: 'כלה בשמלת תחרה פרחונית בגזרת A, בחדר מחופה פאנלים',
      en: 'Bride in a floral lace A-line gown, in a wood-paneled room',
    },
  },
  {
    id: 34,
    name: 'Solene',
    featured: false,
    src: 'assets/photos/gallery/gown-29.jpeg',
    alt: {
      he: 'כלה בשמלת תחרה פרחונית לצד מזנון עתיק ווילון מואר',
      en: 'Bride in a floral lace gown beside an antique dresser and a sunlit curtain',
    },
  },
  {
    id: 35,
    name: 'Imogen',
    featured: false,
    src: 'assets/photos/gallery/gown-30.jpeg',
    alt: {
      he: 'כלה בשמלת כדור עם גוף תחרה וצווארון גבוה',
      en: 'Bride in a ball gown with a lace bodice and a high neckline',
    },
  },
  {
    id: 36,
    name: 'Rosalind',
    featured: false,
    src: 'assets/photos/gallery/gown-31.jpeg',
    alt: {
      he: 'כלה בשמלת תחרה עם צווארון סאטן גבוה וחצאית קפלים, לצד כורסה מפוארת',
      en: 'Bride in a lace gown with a high satin collar and a pleated skirt, beside an ornate armchair',
    },
  },
];

const FEATURED_ORDER = ['Maeve', 'Celine', 'Noor'];
export const FEATURED_GOWNS = FEATURED_ORDER.map((name) => GALLERY.find((g) => g.name === name)!);
