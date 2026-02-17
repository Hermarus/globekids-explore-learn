

# Improve Hero Section Design

## Problems
- Image aspect ratio (4/5 on mobile, 3/4 on desktop) makes it look too tall and awkward — Dubai cityscape needs a wider crop
- Left column text lacks vertical centering polish
- Overall section feels sparse and unbalanced

## Changes in src/components/HeroSection.tsx

1. **Fix image aspect ratio**: Change from `aspect-[4/5] md:aspect-[3/4]` to `aspect-[4/3] md:aspect-[4/5]` — wider on mobile, slightly tall on desktop but better framed
2. **Add subtle gradient overlay** on the image bottom for depth (dark gradient fading up)
3. **Add decorative background element** — a soft teal/accent circle blur behind the image for visual interest
4. **Improve text column spacing**: Better vertical rhythm with adjusted margins
5. **Enhance stats row**: Add background pills to each stat for more visual weight
6. **Add shadow to image**: `shadow-medium` and slight border for a card-like feel
7. **Vertically center content** with `items-center` (already present) and adjust padding

No color, font, or CSS variable changes — purely layout and styling improvements within existing design system.

