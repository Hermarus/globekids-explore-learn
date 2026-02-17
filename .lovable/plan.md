

# Add Beautiful Background to Hero Section

## What changes
Replace the plain white background of the hero section with a visually appealing nature-inspired background that fits the Borovoe camp theme.

## Technical approach in `src/components/HeroSection.tsx`

1. **Add a subtle nature gradient background** -- use a warm-to-teal gradient inspired by Borovoe's forests and lakes
2. **Add a decorative pattern or texture** using CSS -- subtle dot pattern or radial gradient for depth
3. **Apply a layered background** combining:
   - A soft gradient from warm beige to light teal (forest/nature feel)
   - A subtle radial glow accent behind the content
   - Keep text readable with proper contrast

## Specific changes

- Change the section's `bg-background` class to a custom gradient background using inline styles or Tailwind classes
- Add decorative CSS elements (blurred circles/shapes) positioned absolutely behind the content for a modern, layered look
- Colors will stay within the existing design system (trust teal, accent terracotta, nature olive tones)

No new images or assets needed -- pure CSS/Tailwind styling.

