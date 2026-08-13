export interface LegalListItem {
  label?: { he: string; en: string };
  text: { he: string; en: string };
}

export interface LegalSection {
  heading: { he: string; en: string };
  body?: { he: string; en: string }[];
  list?: LegalListItem[];
}

export interface LegalPage {
  title: { he: string; en: string };
  intro: { he: string; en: string };
  lastUpdated: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalPage = {
  title: { he: 'מדיניות פרטיות', en: 'Privacy Policy' },
  intro: {
    he: 'אנו בסטודיו "מור חזות" מתחייבים לשמור על פרטיות הלקוחות המבקרים באתר. מסמך זה נועד לפרט את מדיניות הפרטיות הנהוגה באתר.',
    en: 'We at the "Mor Hazut" studio are committed to protecting the privacy of visitors to our website. This document details the privacy policy in effect on this site.',
  },
  lastUpdated: '12.08.2026',
  sections: [
    {
      heading: { he: 'איסוף מידע ומסירתו:', en: 'Collecting and Sharing Information:' },
      body: [
        {
          he: 'האתר אינו אוסף מידע או נתונים אישיים על המשתמשים בו. פרטים אישיים (כגון שם, מספר טלפון ותאריך חתונה) הנמסרים מרצון דרך טופס יצירת הקשר או קביעת הפגישה באתר, אינם נשמרים במאגר מידע כלשהו, אלא מועברים ישירות למייל או לווטסאפ של הסטודיו לצורך מענה לפנייתך בלבד.',
          en: "This site does not collect information or personal data about its users. Personal details (such as name, phone number, and wedding date) voluntarily submitted through the contact or appointment-booking form are not stored in any database — they are sent directly to the studio's email or WhatsApp solely for the purpose of responding to your inquiry.",
        },
      ],
    },
    {
      heading: { he: 'עוגיות (Cookies) וכלי מעקב:', en: 'Cookies and Tracking Tools:' },
      body: [
        {
          he: 'האתר אינו עושה שימוש בקבצי עוגיות (Cookies) או בכלי מעקב חיצוניים לצורך איסוף מידע על גולשים.',
          en: 'This site does not use cookies or external tracking tools to collect information about visitors.',
        },
      ],
    },
    {
      heading: { he: 'אבטחת מידע:', en: 'Data Security:' },
      body: [
        {
          he: 'הסטודיו נוקט באמצעי זהירות מקובלים כדי לשמור על סודיות הפניות המגיעות דרך האתר.',
          en: 'The studio takes reasonable precautions to maintain the confidentiality of inquiries submitted through this site.',
        },
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalPage = {
  title: { he: 'תקנון האתר', en: 'Terms of Service' },
  intro: {
    he: 'אתר זה משמש ככרטיס ביקור דיגיטלי ופלטפורמה להצגת קולקציית שמלות הכלה של סטודיו "מור חזות". השימוש באתר ובכלל זה הפנייה לקביעת פגישות מעיד על הסכמתך לתנאים המפורטים בתקנון זה.',
    en: 'This website serves as a digital business card and platform showcasing the bridal gown collection of the "Mor Hazut" studio. Use of this site, including reaching out to schedule an appointment, constitutes agreement to the terms set out in these Terms of Service.',
  },
  lastUpdated: '12.08.2026',
  sections: [
    {
      heading: { he: 'קניין רוחני:', en: 'Intellectual Property:' },
      body: [
        {
          he: 'כל זכויות היוצרים, העיצובים, הדגמים, התמונות וחומרי המדיה המוצגים באתר הינם רכושו הבלעדי של הסטודיו "מור חזות". חל איסור מוחלט להעתיק, לשכפל, להפיץ או לעשות בהם שימוש מסחרי או פרטי כלשהו ללא אישור מראש ובכתב מהסטודיו.',
          en: 'All copyrights, designs, patterns, photographs, and media displayed on this site are the exclusive property of the "Mor Hazut" studio. Copying, reproducing, distributing, or making any commercial or private use of them without prior written consent from the studio is strictly prohibited.',
        },
      ],
    },
    {
      heading: { he: 'תיאור השירותים והתקשרות:', en: 'Description of Services & Contact:' },
      body: [
        {
          he: 'האתר מציג את השירותים הניתנים בסטודיו ואת דרכי ההתקשרות לקביעת פגישות ייעודיות. יצירת קשר דרך האתר נועדה לתאם פגישת היכרות ומדידה בסטודיו.',
          en: 'This site presents the services offered at the studio and the ways to get in touch to schedule dedicated appointments. Contacting us through the site is intended to arrange an introductory and fitting appointment at the studio.',
        },
      ],
    },
    {
      heading: { he: 'תנאים והתקשרויות פרטניות:', en: 'Individual Terms & Engagements:' },
      body: [
        {
          he: 'כל התהליך המקצועי, לרבות מדיניות תשלומים, מקדמות, ביטולים, שינויים ותנאי אחריות על השמלות, מוסדר בצורה פרטנית ומלאה מול הלקוחה באמצעות חוזה עבודה מפורט ונפרד הנחתם בסטודיו בעת הגעתה. חוזה הסטודיו הוא המחייב בכל נושא הנוגע לתהליך העבודה בפועל.',
          en: "The full professional process — including payment policy, deposits, cancellations, changes, and warranty terms for the gowns — is arranged individually and in full with the client via a separate, detailed work contract signed at the studio upon her arrival. The studio's contract is binding on all matters relating to the actual work process.",
        },
      ],
    },
    {
      heading: { he: 'סמכות שיפוט:', en: 'Jurisdiction:' },
      body: [
        {
          he: 'על תקנון זה יחולו אך ורק דיני מדינת ישראל, ובמקרה הצורך סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים.',
          en: 'These Terms of Service are governed solely by the laws of the State of Israel, and, where necessary, exclusive jurisdiction is granted to the competent courts.',
        },
      ],
    },
  ],
};

export const ACCESSIBILITY_STATEMENT: LegalPage = {
  title: { he: 'הצהרת נגישות', en: 'Accessibility Statement' },
  intro: {
    he: 'מור חזות אולפן שמלות כלה פועלת להנגשת השירות והאתר לכלל הלקוחות, לרבות אנשים עם מוגבלות.',
    en: 'Mor Hazut Bridal Atelier works to make its service and website accessible to all customers, including people with disabilities.',
  },
  lastUpdated: '12.08.2026',
  sections: [
    {
      heading: { he: '1. הסדרי נגישות במבנה הסטודיו:', en: '1. Accessibility Arrangements at the Studio:' },
      list: [
        {
          label: { he: 'חניה', en: 'Parking' },
          text: {
            he: 'אין במקום חניות נכים ייעודיות, אך קיימות חניות רגילות צמודות למקום.',
            en: 'There are no designated accessible parking spaces on site, but regular parking is available adjacent to the studio.',
          },
        },
        {
          label: { he: 'דרכי הגעה', en: 'Access Route' },
          text: {
            he: 'קיימת מדרכה רציפה מהחניה ועד לפתח הסטודיו.',
            en: 'There is a continuous pavement from the parking area to the studio entrance.',
          },
        },
        {
          label: { he: 'כניסה', en: 'Entrance' },
          text: {
            he: 'דלת הכניסה רחבה (מעל 80 ס"מ) ומאפשרת מעבר של כיסא גלגלים. עם זאת, יש לקחת בחשבון כי קיימת מדרגה אחת בכניסה. נשמח לסייע ככל הניתן בעת ההגעה.',
            en: "The entrance door is wide (over 80 cm) and allows wheelchair access. Please note, however, that there is one step at the entrance. We're happy to assist as much as possible upon arrival.",
          },
        },
        {
          label: { he: 'התניידות פנימית ותאי מדידה', en: 'Internal Mobility & Fitting Rooms' },
          text: {
            he: 'חלל הסטודיו כולו בנוי במפלס אחד, ללא מדרגות פנימיות. כמו כן, קיים בסטודיו תא מדידה גדול ומרווח המאפשר כניסה והסתובבות נוחה עם כיסא גלגלים.',
            en: 'The entire studio is built on a single level, with no internal steps. The studio also has a large, spacious fitting room that allows comfortable entry and manoeuvring with a wheelchair.',
          },
        },
        {
          label: { he: 'שירותים', en: 'Restrooms' },
          text: {
            he: 'נכון לעדכון הצהרה זו, אין בסטודיו שירותי נכים תקניים.',
            en: 'As of this statement\'s last update, the studio does not have a standard accessible restroom.',
          },
        },
      ],
    },
    {
      heading: { he: '2. שירות לקוחות נגיש:', en: '2. Accessible Customer Service:' },
      list: [
        {
          label: { he: 'חיות שירות', en: 'Service Animals' },
          text: {
            he: 'אנו מקבלים בברכה לקוחות המסתייעים בכלבי נחייה או חיות שירות.',
            en: 'We warmly welcome customers accompanied by guide dogs or service animals.',
          },
        },
      ],
    },
    {
      heading: { he: '3. נגישות אתר האינטרנט:', en: '3. Website Accessibility:' },
      body: [
        {
          he: 'אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013.',
          en: 'This website complies with the requirements of the Equal Rights for Persons with Disabilities Regulations (Service Accessibility Adjustments), 5773-2013.',
        },
        {
          he: 'התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.',
          en: 'The accessibility adjustments were made in accordance with the recommendations of the Israeli Standard (IS 5568) for web content accessibility at Level AA and the international WCAG 2.0 document.',
        },
        {
          he: 'האתר מותאם לתצוגה בדפדפנים הנפוצים ולשימוש בטלפון הסלולרי, מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם מקלדת (חצים, Enter ו-Esc ליציאה מתפריטים וחלונות).',
          en: 'The site is optimised for display in common browsers and for use on mobile phones, provides semantic structure for assistive technologies, and supports the standard keyboard operation pattern (arrow keys, Enter, and Esc to exit menus and dialogs).',
        },
        {
          he: 'לשם קבלת חווית גלישה מיטבית עם תוכנת הקראת מסך, אנו ממליצים לשימוש בתוכנת NVDA העדכנית ביותר.',
          en: 'For the best browsing experience with screen-reading software, we recommend using the latest version of NVDA.',
        },
      ],
    },
    {
      heading: { he: '4. פרטי התקשרות לנושא נגישות:', en: '4. Accessibility Contact Details:' },
      body: [
        {
          he: 'אם נתקלתם בבעיה, או שיש לכם שאלה בנוגע להתאמות נגישות ספציפיות לקראת פגישת המדידה, אנו זמינים ונשמח לעזרה:',
          en: "If you encounter a problem, or have a question about specific accessibility accommodations ahead of your fitting appointment, we're available and happy to help:",
        },
      ],
      list: [
        {
          label: { he: 'אימייל', en: 'Email' },
          text: { he: 'mor.biton7@gmail.com', en: 'mor.biton7@gmail.com' },
        },
        {
          label: { he: 'טלפון', en: 'Phone' },
          text: { he: '052-6526616', en: '052-6526616' },
        },
      ],
    },
  ],
};
