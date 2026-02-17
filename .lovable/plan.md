

# Redesign Homepage to Match Reference Screenshot

## Overview

Rebuild the Header and Hero Section to match the original EduCampGlobal design from the screenshot. Keep all existing colors and fonts unchanged.

## Changes

### 1. Header (src/components/Header.tsx)

Replace the current header (logo + phone/WhatsApp + CTA) with the design from the screenshot:

- **Logo**: "EduCampGlobal" with a globe icon (colored in teal/accent)
- **Navigation links**: "Направления", "Преимущества", "Как это работает", "Безопасность" -- each scrolls to the respective section
- **CTA button**: "Оставить заявку" (orange/accent rounded button) on the right
- Remove phone number and WhatsApp links from the header (they can stay in footer)
- Mobile menu remains with hamburger toggle

### 2. Hero Section (src/components/HeroSection.tsx)

Complete redesign from centered single-column to a **two-column layout** matching the screenshot:

**Left column:**
- Tagline badge: star icon + "Лето 2025 --- набор открыт!" in a green/teal pill
- Large headline: "Английский язык **в лучших странах** мира" -- the words "в лучших странах" are highlighted in the accent/teal color
- Description: "Международные образовательные лагеря для детей 7--17 лет. Погружение в языковую среду, новые друзья и незабываемые приключения."
- Stats row with icons: "2500+ учеников", "8 лет опыта", "4.9 рейтинг" (with Users, Award, Star icons)
- Two CTA buttons: "Забронировать место" (filled accent with arrow) and "Смотреть видео" (outlined with play icon)

**Right column:**
- Hero image (using existing `hero-children.jpg`) with rounded corners
- Two floating destination cards overlaid on the image:
  - "AE" badge + "Дубай / от 2490$" (top-left area of image)
  - "VN" badge + "Вьетнам / от 1890$" (bottom-right area of image)
- Cards have subtle shadow and white background

### 3. No CSS/Font/Color Changes

All existing CSS variables, fonts (Inter, Playfair Display), and color tokens remain untouched.

## Technical Details

- The hero uses `grid md:grid-cols-2` for the two-column layout
- Floating destination cards use `absolute` positioning over the image container
- The tagline badge uses `bg-trust-light text-trust` for the teal pill style
- Headline accent words use `text-trust` (teal color) to match the screenshot
- Stats row uses Lucide icons (Users, Award, Star)
- The image container has `relative` positioning with `rounded-2xl overflow-hidden`
- On mobile, columns stack vertically (image below text)

