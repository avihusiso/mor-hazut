import { IconName } from '../../shared/icon/icon';

export interface ProcessStep {
  icon: IconName;
  title: { he: string; en: string };
  body: { he: string; en: string };
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: 'calendar',
    title: { he: 'ייעוץ ומדידה ראשונה', en: 'Consultation & Styling' },
    body: {
      he: 'נכיר אותך, את הסגנון והחזון שלך, נמדוד דגמים ונמצא יחד את השמלה והגזרה המדוייקת עבורך.',
      en: "We'll get to know you, your style and vision, measure sample styles, and find the exact dress and cut for you together.",
    },
  },
  {
    icon: 'ruler',
    title: { he: 'התאמות מדויקות', en: 'Precise Fittings' },
    body: {
      he: 'ניפגש למספר פגישות בסטודיו, בהן ניקח מידות מדויקות של כל פרט ופרט כדי להבטיח שהשמלה תשב עלייך בשלמות.',
      en: 'Over 3–4 appointments, we tailor the gown to your exact measurements for a flawless fit.',
    },
  },
  {
    icon: 'sparkle',
    title: { he: 'היום הגדול', en: 'The Big Day' },
    body: {
      he: 'לוקחת איתך הביתה שמלה מושלמת ומותאמת אישית, מוכנה ליום הבלתי נשכח שלך.',
      en: 'Take home your pristine, custom-fitted gown, ready for your unforgettable day.',
    },
  },
];
