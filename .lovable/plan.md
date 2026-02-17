

# Update Hero Section Headline

## What Changes

Replace the current hero section content with the new headline and description about Lingvo Camp in Borovoe.

## File to Modify

### src/components/HeroSection.tsx

**Current text to replace:**
- Tagline block ("LEARNING." / "adventure") -- remove
- Headline: "АНГЛИЙСКИЙ ЯЗЫК БЕЗ ГРАНИЦ" -- replace with "ЯЗЫКОВОЙ ЛАГЕРЬ В БОРОВОМ"
- Sub-headline: "Международные лагеря для детей 7-17 лет в Дубае и Вьетнаме." -- replace with the new Lingvo Camp description
- Stats line: keep as-is (general credibility markers)
- Direction selector (Dubai/Vietnam block): remove, as the camp is now specifically in Borovoe

**New content:**
- Main headline: "ЯЗЫКОВОЙ ЛАГЕРЬ В БОРОВОМ"
- Description: "Lingvo Camp — международный языковой лагерь для детей от 8 до 15 лет с полным погружением в английскую среду, авторской образовательной программой и насыщенной культурной программой в Боровом."

## Technical Details

1. Remove the stylistic tagline block ("LEARNING." / "adventure")
2. Update the `<h1>` text to "ЯЗЫКОВОЙ ЛАГЕРЬ В БОРОВОМ"
3. Update the `<p>` sub-headline to the Lingvo Camp description
4. Remove the direction selector card (Dubai/Vietnam) since there is now a single location
5. Remove the `selectedDestination` state as it is no longer needed
6. Keep the CTA buttons and stats row unchanged

