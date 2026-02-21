

## Plan: Back Buttons, "View All" Link, and New Article

### 1. Add "Back to home" button to category and info pages

The following pages are missing the back button that already exists on Article and legal pages: **Web Dev, SEO, Tech, Career, About, Contact**.

Each page will get a consistent "Back to home" link (ArrowLeft icon + text) added right after `<main>` opens, matching the existing pattern from Privacy/Terms pages.

### 2. Add "View all" button on the homepage

Below the article grid on the home page (when not filtering), a centered "View all" link will be added. It will point to a new `/articles` route that shows every article.

A new **`src/pages/Articles.tsx`** page will be created that displays all articles in a grid, with the same back button and layout conventions.

A new route `/articles` will be added to `App.tsx`.

### 3. Add new Tech article

A new article (id "011") titled **"Building AI Tools Using Prompt Engineering: A Student's Approach"** will be added to `src/data/articles.ts` under the "Tech" category. The uploaded image will be copied to `src/assets/thumbnails/` and imported as its thumbnail.

---

### Technical Details

**Files to create:**
- `src/assets/thumbnails/ai-prompt-engineering.png` -- copied from uploaded image
- `src/pages/Articles.tsx` -- all-articles listing page with back button

**Files to modify:**
- `src/pages/WebDev.tsx` -- add back button
- `src/pages/Seo.tsx` -- add back button
- `src/pages/Tech.tsx` -- add back button
- `src/pages/Career.tsx` -- add back button
- `src/pages/About.tsx` -- add back button
- `src/pages/Contact.tsx` -- add back button
- `src/pages/Index.tsx` -- add "View all" link below article grid
- `src/data/articles.ts` -- add article 011 with new thumbnail import
- `src/App.tsx` -- add `/articles` route

