

# Content Management System for Landing Page

## Overview

Create a `landing_content` database table to store all editable texts, headings, button labels, image URLs, and links. Build two backend functions (edge functions) to serve and update this content, and a React hook to load content into components.

## Database

### New table: `landing_content`

| Column | Type | Notes |
|--------|------|-------|
| key | text (PK) | Unique content identifier, e.g. `hero.title` |
| value | text | The actual content value |
| type | text | One of: `text`, `image`, `link` |
| updated_at | timestamptz | Auto-updated on change |

### RLS Policies
- **SELECT**: Public (anyone can read content for the landing page)
- **UPDATE**: Admin only (`is_admin(auth.uid())`)
- **INSERT**: Admin only
- **DELETE**: Admin only

### Seed Data
Pre-populate with all current hardcoded content from components, organized by section:

```
hero.tagline          = "Лето 2025 — набор открыт!"
hero.title            = "ЯЗЫКОВОЙ ЛАГЕРЬ"
hero.title_highlight  = "В БОРОВОМ"
hero.description      = "Lingvo Camp — международный языковой лагерь..."
hero.stat_students    = "2500+ учеников"
hero.stat_experience  = "8 лет опыта"
hero.stat_rating      = "4.9 рейтинг"
hero.cta_primary      = "Забронировать место"
hero.cta_secondary    = "Смотреть видео"
footer.phone          = "+7 (778) 439-91-62"
footer.email          = "info@educamp.ru"
footer.address        = "Москва, ул. Пресненская, 10"
form.phone            = "+7 (800) 123-45-67"
form.title            = "Оставить заявку"
...
```

(Approximately 30-40 key-value entries covering all sections)

## Backend Functions (Edge Functions)

### 1. `GET` content -- `get-content`
- Public, no auth required
- Returns all rows from `landing_content` as a key-value map
- Response: `{ "hero.title": { value: "...", type: "text" }, ... }`

### 2. `PUT` content -- `update-content`
- Admin only (validates JWT via `getClaims()`, checks `is_admin`)
- Body: `{ key: string, value: string }`
- Updates the specified key in `landing_content`
- Returns updated record

### Config (`supabase/config.toml`)
```toml
[functions.get-content]
verify_jwt = false

[functions.update-content]
verify_jwt = false
```

## Frontend

### New hook: `src/hooks/useLandingContent.tsx`
- Fetches all content on mount via `get-content` edge function
- Returns `{ content, isLoading, getContent(key, fallback) }` helper
- `getContent("hero.title", "Default")` returns DB value or fallback
- Caches in React Query for performance

### Component Updates
Update each section component (HeroSection, DestinationsSection, BenefitsSection, ProcessSection, TrustSection, ApplicationForm, Footer, Header) to:
1. Import and use `useLandingContent` hook
2. Replace hardcoded strings with `getContent("key", "fallback")`
3. Keep current hardcoded values as fallbacks so the page works even if DB is empty

### Admin Dashboard Update
Add a "Content" tab/section to AdminDashboard where admin can:
- See all content keys grouped by section
- Edit values inline
- Save changes via the `update-content` edge function

## Technical Details

### Files to create (4):
- `supabase/functions/get-content/index.ts`
- `supabase/functions/update-content/index.ts`
- `src/hooks/useLandingContent.tsx`
- `src/components/AdminContentEditor.tsx`

### Files to modify (9):
- `supabase/config.toml` -- add function configs
- `src/components/HeroSection.tsx` -- use dynamic content
- `src/components/DestinationsSection.tsx` -- use dynamic content
- `src/components/BenefitsSection.tsx` -- use dynamic content
- `src/components/ProcessSection.tsx` -- use dynamic content
- `src/components/TrustSection.tsx` -- use dynamic content
- `src/components/ApplicationForm.tsx` -- use dynamic content
- `src/components/Footer.tsx` -- use dynamic content
- `src/pages/AdminDashboard.tsx` -- add content editor tab

### Database migration:
- Create `landing_content` table with RLS
- Seed initial content data

