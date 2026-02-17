

# Add Nature Background Image to Hero Section

## What changes
Replace the pale CSS gradient background with a real nature photo (bg-forest.jpg from existing assets) as the hero section background, with a semi-transparent overlay to keep text readable.

## Technical changes in `src/components/HeroSection.tsx`

1. **Import background image**: Add `import bgForest from "@/assets/bg-forest.jpg"`
2. **Set as background**: Apply the forest image as a `backgroundImage` via inline style with `background-size: cover` and `background-position: center`
3. **Add dark/light overlay**: Place an absolute overlay div with a semi-transparent white or gradient (e.g., `bg-white/70` or a gradient from white/80 to white/50) so text remains readable
4. **Remove old gradient**: Delete the current `linear-gradient` inline style
5. **Keep decorative blurs**: Optionally keep or remove the blurred circles -- they add depth even on top of the photo

Result: A beautiful nature photo visible behind the hero content, with enough overlay to maintain text contrast and readability.
