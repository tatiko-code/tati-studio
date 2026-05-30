# Tati Studio — Bridal & Evening Couture

אתר מינימליסטי-יוקרתי בהשראת `galialahav.com`, `alonlivne.com`, `lihihod.com`.
לוקאלי בלבד. שפה: אנגלית (קהל מיאמי). אין backend — רק HTML/CSS/JS.

## איך מריצים

```bash
cd "tali-studio"
python3 -m http.server 8080
# פתחי בדפדפן: http://localhost:8080
```

או פשוט פתחי `index.html` בדאבל-קליק.

## מבנה

```
tali-studio/
├── index.html          → דף הבית (Hero וידאו, קולקציה, atelier, real brides, IG)
├── collection.html     → רשת קולקציה מלאה (filters)
├── dress.html          → דף דגם בודד (גלריה + מפרט)
├── real-brides.html    → גלריית masonry של כלות אמיתיות
├── about.html          → סיפור המעצבת + תהליך 4 שלבים
├── contact.html        → טופס Book Appointment + פרטי הגעה
├── css/style.css
├── js/main.js          → תפריט המבורגר, scroll header, reveal animations
├── images/             → להכניס לכאן תמונות מקומיות
└── videos/             → להכניס לכאן את hero.mp4 (וידאו רקע לדף הבית)
```

## איפה להחליף תוכן

כל המקומות עם `[PLACEHOLDER — ...]` מסומנים בטקסט עצמו.
תמונות placeholder לקוחות מ-Unsplash — כשיהיו תמונות אמיתיות:

1. שמרי את התמונות ב-`images/` (שמות באנגלית, לא רווחים)
2. החליפי את ה-URL של Unsplash ב-path מקומי, לדוגמה:
   ```html
   style="background-image: url('images/aria-01.jpg');"
   ```

## וידאו ב-Hero

הניחי קובץ וידאו דחוס היטב (10-15MB max, 1080p, 8-12 שניות בלופ) בנתיב:
```
videos/hero.mp4
```
האתר כבר מצפה לקובץ הזה. עד שיש וידאו — מוצגת תמונת fallback.

## עיצוב

- צבעים: רקע off-white (`#fdfcfa`), טקסט (`#1a1a1a`), אקסנט champagne (`#b29469`)
- פונטים: Cormorant Garamond (serif לכותרות) + Inter (sans-serif לגוף)
- לוגו: `Tati · Studio` בטיפוגרפיה — אם יש לוגו רשמי כתמונה,
  החליפי את ה-`.brand` בכל הקבצים ב-`<img src="images/logo.svg" alt="Tati Studio">`

## דגשים שכבר מובנים באתר

- ✅ Hero מסך מלא (וידאו או תמונה fallback)
- ✅ תפריט המבורגר (overlay מסך מלא)
- ✅ Mobile-first responsive
- ✅ אזור Real Brides נפרד
- ✅ קריאה לפעולה Book Appointment בכל עמוד
- ✅ Instagram feed בתחתית דף הבית
- ✅ אנימציות reveal עדינות בגלילה
- ✅ iPhone safe-area insets
- ✅ הדר שקוף מעל ה-Hero, נהיה אטום בגלילה

## שלב הבא (אחרי שהתוכן יוכנס)

1. אינטגרציית טופס (Formspree / Resend / Netlify Forms)
2. אינטגרציית Instagram אמיתית (Instagram Basic Display API או widget)
3. SEO: meta tags, Open Graph, sitemap
4. Deploy (Netlify / Vercel / Cloudflare Pages — חינם)
