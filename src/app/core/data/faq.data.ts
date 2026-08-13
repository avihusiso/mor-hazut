export interface FaqItem {
  id: number;
  question: { he: string; en: string };
  answer: { he: string; en: string };
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: { he: 'למה לבחור בסטודיו מור חזות?', en: 'Why choose Mor Hazut studio?' },
    answer: {
      he: 'כי כאן לא מתחילים משמלה - מתחילים ממך. התהליך בסטודיו נועד להבין מי את, מה את רוצה להרגיש ביום שלך, מה מחמיא לך ומה מדויק לאופי שלך. מתוך ההיכרות הזו נבנית שמלה שהיא לא רק יפה, אלא מרגישה שלך.',
      en: "Because here, we don't start with a dress — we start with you. The studio's process is about understanding who you are, how you want to feel on your day, what flatters you, and what truly fits your personality. From that connection, we build a gown that isn't just beautiful — it feels like you.",
    },
  },
  {
    id: 2,
    question: {
      he: 'כמה זמן לפני החתונה כדאי להגיע לסטודיו?',
      en: 'How long before the wedding should I visit the studio?',
    },
    answer: {
      he: 'מומלץ להגיע לסטודיו לבחירת שמלה כחודש וחצי עד ארבעה חודשים לפני החתונה.',
      en: 'We recommend visiting the studio to choose your gown around one and a half to four months before the wedding.',
    },
  },
  {
    id: 3,
    question: { he: 'האם אפשר לבצע שינויים בשמלה?', en: 'Can changes be made to the gown?' },
    answer: {
      he: 'כן כמובן, אפשר לבצע מגוון תיקונים והתאמות לטעם האישי ולגדרי הצניעות של הכלה.',
      en: 'Yes, of course — a range of alterations and adjustments can be made to suit your personal taste and modesty preferences.',
    },
  },
  {
    id: 4,
    question: {
      he: 'האם השמלות הן בעיצוב אישי או שיש קולקציה מוכנה?',
      en: 'Are the gowns custom-designed, or is there a ready-made collection?',
    },
    answer: {
      he: 'בסטודיו יש מגוון שמלות כלה קיימות וקולקציות מתחלפות, ניתן לבחור בין שמלה קיימת לבין עיצוב בתפירה אישית.',
      en: 'The studio has a range of existing gowns and rotating collections — you can choose between an existing gown or a fully custom design.',
    },
  },
  {
    id: 5,
    question: {
      he: 'כמה זמן נמשכת פגישה בסטודיו והאם ניתן להגיע לפגישה עם מלוות?',
      en: 'How long does a studio appointment last, and can I bring guests?',
    },
    answer: {
      he: 'פגישת היכרות בסטודיו אורכת כ45 דק׳ בה תקבלי ייעוץ והתאמה אישית של שמלה למבנה הגוף ולטעם האישי שלך. מומלץ להגיע עם עד שתי מלוות לפגישה.',
      en: "An introductory studio appointment lasts about 45 minutes, during which you'll receive personal styling advice matched to your body shape and taste. We recommend bringing up to two guests with you.",
    },
  },
  {
    id: 6,
    question: {
      he: 'כמה פגישות צריך עד שמגיעים לשמלה הסופית?',
      en: 'How many appointments are needed to finalize the gown?',
    },
    answer: {
      he: 'הסטודיו עובד מתוך סטנדרט מקצועי ומדויק, כמות המדידות המומלצת בסטודיו היא 3, לעיתים יש צורך במדידה נוספת.',
      en: 'The studio works to a precise, professional standard — the recommended number of fittings is 3, though an additional fitting is sometimes needed.',
    },
  },
  {
    id: 7,
    question: {
      he: 'האם אפשר להגיע עם רעיון או תמונות של שמלות שאהבתי?',
      en: 'Can I bring inspiration or photos of gowns I love?',
    },
    answer: {
      he: 'כדאי ומומלץ להגיע מראש עם קו סגנוני וגזרות שאת אוהבת, אבל גם אם אין לך רעיון ואין לך מושג איפה להתחיל, אנחנו כאן בדיוק בשבילך, לבצע התאמה מדויקת של סגנון וגזרה מדויקת עבורך.',
      en: "It's a great idea to come with a sense of the style and cuts you love, but if you have no idea where to start, that's exactly what we're here for — to find the precise style and cut that's right for you.",
    },
  },
  {
    id: 8,
    question: { he: 'מה זו וילה ג׳ולייט?', en: 'What is Villa Juliet?' },
    answer: {
      he: 'וילה פרטית ומפנקת להתארגנות הכלה ומלוותיה ביום החתונה, עם חלל מעוצב הנוח גם לצוותי האיפור, השיער והצילום.',
      en: "A private, indulgent villa for the bride and her companions to get ready on the wedding day, with a beautifully styled space that's also comfortable for hair, makeup, and photography teams.",
    },
  },
  {
    id: 9,
    question: {
      he: 'האם ההתארגנות בוילה כלולה במחיר השמלה?',
      en: 'Is getting ready at the villa included in the price of the gown?',
    },
    answer: {
      he: 'לא, ההתארגנות בוילה ג׳ולייט מתומחרת בנפרד משמלת הכלה. נשמח להכין עבורך הצעת מחיר ייעודית בהתאם לצרכים שלך.',
      en: "No — getting ready at Villa Juliet is priced separately from the gown. We'd love to prepare a dedicated quote for you based on your needs.",
    },
  },
  {
    id: 10,
    question: {
      he: 'האם אפשר להזמין את הוילה בלי לרכוש שמלה בסטודיו?',
      en: 'Can I book the villa without purchasing a gown from the studio?',
    },
    answer: {
      he: 'כן, ניתן לתאם התארגנות בוילה גם באופן עצמאי. מוזמנת לפנות אלינו לבדיקת זמינות ותיאום פרטים.',
      en: "Yes, the villa can also be booked independently. Feel free to contact us to check availability and coordinate the details.",
    },
  },
];
