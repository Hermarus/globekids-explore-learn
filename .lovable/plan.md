
# Part 1: Header and Hero Section Redesign

## Overview

This plan covers the complete redesign of the Header and Hero sections to match the BalQaragai Family Forest Resort visual style - a premium, calm, nature-oriented aesthetic with clean typography and structured layouts.

---

## Visual Style Reference Analysis

Based on the provided BalQaragai reference images:

**Color Palette**:
- Background: White (#FFFFFF) / Light Beige (#F7F5F2)
- Primary Text: Dark Blue-Gray (#1E2D3B)
- Accent Color: Terracotta/Coral (#C45C4A) for buttons
- Secondary Elements: Warm gray tones

**Typography**:
- Clean sans-serif (Inter already used)
- Large, bold uppercase headings with letter-spacing
- Stylistic taglines with mixed case (e.g., "LEARNING." / "adventure")

**Layout Characteristics**:
- Ample whitespace
- Horizontal booking/selector blocks with light background
- Minimal decorative elements
- Rectangular buttons with subtle border-radius

---

## Files to Modify

### 1. src/index.css
**Purpose**: Update CSS variables to match BalQaragai color palette

**Changes**:
- Background: Change to pure white/light beige (#F7F5F2)
- Foreground: Dark blue-gray (#1E2D3B)
- Accent: Terracotta (#C45C4A) for CTA buttons
- Remove green nature tints
- Update shadows to neutral gray tones
- Add new utility classes for the BalQaragai style typography

### 2. src/components/Header.tsx
**Purpose**: Complete redesign to match BalQaragai header style

**Current Layout** (to be replaced):
- Logo with icon + text
- Navigation links (Направления, Преимущества, etc.)
- CTA button

**New Layout**:
```
+------------------------------------------------------------------+
| # EduCampGlobal          +7 775 007 00 30  WhatsApp  [Забронировать путевку] |
+------------------------------------------------------------------+
```

**Structure**:
- Left: Text logo "EduCampGlobal" (no icon, text-based)
- Right: Phone number, WhatsApp link, CTA button (terracotta color)
- Clean white/beige background
- No backdrop blur, simpler border

### 3. src/components/HeroSection.tsx
**Purpose**: Complete redesign to match BalQaragai hero layout

**Current Layout** (to be replaced):
- Two-column grid (content + hero image)
- Badge, headline, stats with icons
- Floating cards with animations

**New Layout**:
```
+------------------------------------------------------------------+
|                                                                   |
|            LEARNING.                                              |
|            adventure                                              |
|                                                                   |
|        АНГЛИЙСКИЙ ЯЗЫК БЕЗ ГРАНИЦ                                 |
|                                                                   |
|   Международные лагеря для детей 7-17 лет в Дубае и Вьетнаме.    |
|                                                                   |
|        2500+ учеников  |  8 лет опыта  |  4.9 рейтинг            |
|                                                                   |
|     [Оставить заявку]     [▷ Смотреть видео]                     |
|                                                                   |
|   +----------------------------------------------------------+   |
|   | Выберите направление                                      |   |
|   |   ДУБАЙ · от 24 905₽        ВЬЕТНАМ · от 18 905₽         |   |
|   +----------------------------------------------------------+   |
|                                                                   |
+------------------------------------------------------------------+
```

**Structure**:
- Full-width, centered layout (no two-column grid)
- Stylistic tagline at top: "LEARNING." (bold, uppercase) + "adventure" (lowercase, elegant)
- Main headline: "АНГЛИЙСКИЙ ЯЗЫК БЕЗ ГРАНИЦ" (uppercase, bold, letter-spaced)
- Sub-headline with description
- Statistics in elegant inline format with pipe separators
- Two buttons: Primary (terracotta) and Secondary (outline)
- Direction selector block: Horizontal card with light beige background
  - Label: "Выберите направление"
  - Two clickable options: ДУБАЙ and ВЬЕТНАМ with prices

---

## Technical Implementation Details

### CSS Variables Update (src/index.css)

```css
:root {
  /* BalQaragai-inspired palette */
  --background: 40 20% 98%;        /* Light beige-white */
  --foreground: 210 25% 18%;       /* Dark blue-gray #1E2D3B */
  --card: 40 15% 96%;              /* Slightly warmer white */
  --accent: 10 60% 53%;            /* Terracotta #C45C4A */
  --muted-foreground: 210 10% 45%; /* Softer text */
  --border: 40 15% 88%;            /* Warm gray border */
}
```

### Header Component Structure

```tsx
// Simplified, clean header
<header className="bg-white border-b border-border">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo - text only */}
    <span className="text-xl font-bold text-foreground tracking-tight">
      EduCampGlobal
    </span>
    
    {/* Right side: contacts + CTA */}
    <div className="flex items-center gap-6">
      <a href="tel:+77750070030">+7 775 007 00 30</a>
      <a href="...">WhatsApp</a>
      <button className="bg-accent text-white px-6 py-3 rounded">
        Забронировать путевку
      </button>
    </div>
  </div>
</header>
```

### Hero Section Component Structure

```tsx
<section className="bg-background py-24">
  <div className="max-w-4xl mx-auto text-center px-6">
    {/* Stylistic tagline */}
    <div className="mb-8">
      <p className="text-4xl font-bold tracking-widest uppercase">LEARNING.</p>
      <p className="text-3xl font-light italic">adventure</p>
    </div>
    
    {/* Main headline */}
    <h1 className="text-5xl font-bold uppercase tracking-wide mb-6">
      АНГЛИЙСКИЙ ЯЗЫК БЕЗ ГРАНИЦ
    </h1>
    
    {/* Sub-headline */}
    <p className="text-xl text-muted-foreground mb-8">
      Международные лагеря для детей 7-17 лет в Дубае и Вьетнаме.
    </p>
    
    {/* Stats - inline with separators */}
    <div className="flex justify-center gap-8 mb-10 text-lg">
      <span>2500+ учеников</span>
      <span className="text-border">|</span>
      <span>8 лет опыта</span>
      <span className="text-border">|</span>
      <span>4.9 рейтинг</span>
    </div>
    
    {/* Buttons */}
    <div className="flex justify-center gap-4 mb-12">
      <button className="bg-accent ...">Оставить заявку</button>
      <button className="border border-foreground ...">Смотреть видео</button>
    </div>
    
    {/* Direction selector block */}
    <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto">
      <p className="text-sm text-muted-foreground mb-4">Выберите направление</p>
      <div className="flex justify-center gap-8">
        <button className="...">ДУБАЙ · от 24 905₽</button>
        <button className="...">ВЬЕТНАМ · от 18 905₽</button>
      </div>
    </div>
  </div>
</section>
```

---

## Key Design Decisions

1. **Remove hero background image**: The BalQaragai style uses clean, solid backgrounds rather than photo backgrounds in the hero. The nature imagery will be used in other sections.

2. **Center-aligned layout**: Unlike the current two-column grid, the BalQaragai reference uses centered, single-column content for maximum impact.

3. **Typography hierarchy**: 
   - Stylistic tagline creates visual interest
   - Main headline is bold, uppercase, letter-spaced
   - Sub-headline is regular weight, readable

4. **Direction selector**: Styled like the date picker in the BalQaragai reference - a horizontal block with light background, clear labels, and interactive options.

5. **Remove floating cards and animations**: The BalQaragai style is more static and premium-feeling, without playful floating elements.

---

## Mobile Responsiveness

- Header: Stack phone/WhatsApp vertically on small screens, or use hamburger menu
- Hero: Reduce font sizes proportionally
- Direction selector: Stack options vertically on mobile
- Maintain generous padding and whitespace

---

## Summary of Changes

| Component | Current | New (BalQaragai Style) |
|-----------|---------|------------------------|
| Color Palette | Green/nature tints, coral accent | White/beige, terracotta accent |
| Header | Icon logo, navigation, gradient button | Text logo, contacts, solid button |
| Hero Layout | Two-column with image | Single column, centered |
| Typography | Mixed styles | Uppercase headings, stylistic tagline |
| Background | Forest photo with overlay | Solid light beige/white |
| Decorative | Floating cards, blur effects | Clean, minimal |
| Selector Block | N/A | New horizontal direction picker |
