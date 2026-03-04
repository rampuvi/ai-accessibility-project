# Design System: AI Co-Design Project
**Project ID:** 7786716446446758811

## 1. Visual Theme & Atmosphere

The AI Co-Design Project embodies a **warm, approachable clarity** that prioritizes cognitive accessibility above all else. The interface feels like a trusted community space — spacious, unhurried, and welcoming — where people of all abilities can navigate with confidence. The design philosophy is **accessibility-first and content-forward**, using generous whitespace and large, readable text to reduce cognitive load.

The overall mood is **calm yet purposeful**, balancing professional research credibility with the friendly warmth of community collaboration. Every element serves readability and comprehension first. The atmosphere evokes a well-organized community center bulletin board: organized, inviting, and never overwhelming.

**Key Characteristics:**
- Generous breathing room with large text sizes (18px+ body copy) for effortless reading
- Warm, slightly cream-toned backgrounds that feel softer and more inviting than clinical white
- Accessibility-first font pairing: Atkinson Hyperlegible for maximum readability in body text
- Clean card-based layouts with clear visual hierarchy and predictable interaction patterns
- Frosted-glass navigation bars that maintain context without visual heaviness
- Full dark mode support throughout, with carefully tuned contrast ratios
- Material Symbols iconography for universally understood visual cues

## 2. Color Palette & Roles

### Primary Foundation
- **Parchment Cream** (#FDFBF7 / #FDFCF7) — Primary background color. A barely-there warm tint that feels like soft natural paper, more inviting and less sterile than pure white. Creates a gentle, calming canvas.
- **Cool Mist Gray** (#F8FAFC / #FAFAFA / #F9FAFB) — Alternate light background used on some screens. A cooler neutral that still feels open and airy.
- **Deep Slate Night** (#0F172A / #111827) — Dark mode background. A rich, blue-tinted dark that feels deep without being harsh on the eyes.

### Primary Accent & Interactive
- **Confident Blue** (#2563EB) — The primary brand and interaction color. Used for the nav logo badge, primary CTA buttons, active navigation indicators, link text, icon tints, and card hover borders. A strong, accessible blue that conveys trust and reliability.
- **Bold Sapphire** (#1D4ED8 / #1E40AF) — A deeper blue variant used in some screens for primary elements. Provides slightly more weight and formality.
- **Sky Blue** (#3B82F6) — A lighter, friendlier blue used for primary accents on content-heavy screens. Feels slightly more approachable while maintaining strong contrast.

### Semantic Category Colors (Icon Backgrounds & Depth Layer Cards)
- **Soft Blue Wash** (bg-blue-100 / bg-blue-50) with **Confident Blue** icons — Used for primary/research-related content cards
- **Warm Amber Glow** (bg-amber-100) with **Harvest Amber** (#F59E0B) icons — Used for discovery, search, and exploration content
- **Fresh Emerald Tint** (bg-emerald-100 / bg-emerald-50) with **Verdant Green** (emerald-600) icons — Used for building, family, and growth content
- **Gentle Purple Haze** (bg-purple-100 / bg-purple-50) with **Creative Purple** (purple-600) icons — Used for emergence, design, and creative content
- **Blush Rose Wash** (bg-rose-100) with **Warm Rose** (rose-600) icons — Used for resources and download content

### Typography & Text Hierarchy
- **Rich Charcoal** (slate-900 / gray-900) — Primary text color for headlines, body copy, and card titles. Warm and readable, softer than pure black.
- **Quiet Slate** (slate-600 / gray-600) — Secondary text for descriptions, supporting copy, and metadata. Maintains readability while visually receding.
- **Muted Silver** (slate-400 / gray-400) — Tertiary text for timestamps, footer links, partner labels, and subtle metadata.
- **Pure White** (#FFFFFF) — Text on dark/primary backgrounds, button labels on blue CTAs.

### Structural & Border
- **Whisper Gray** (slate-200 / gray-200) — Light borders on cards, navigation bar bottom edge, and table cells. Subtle enough to define space without creating visual noise.
- **Midnight Edge** (slate-700 / slate-800 / gray-800) — Dark mode borders and dividers.

## 3. Typography Rules

**Display Font Family:** Lexend
**Character:** A modern, rounded sans-serif specifically designed for reading ease. Its even spacing and open letterforms reduce visual crowding — chosen deliberately for cognitive accessibility.

**Body Font Family:** Atkinson Hyperlegible
**Character:** Created by the Braille Institute, this typeface maximizes character distinction and legibility. Each letter is designed to be as different as possible from every other letter, reducing misreading. This is the project's most important accessibility decision.

### Hierarchy & Weights
- **Hero Headlines (H1):** Lexend, extra-bold (800), tight tracking, 3rem-3.75rem (text-5xl to text-6xl). Commanding presence that anchors each page.
- **Section Headers (H2):** Lexend, bold (700), 1.875rem (text-3xl). Establishes clear content zones.
- **Card Titles (H3):** Lexend, bold (700), 1.25rem-1.5rem (text-xl to text-2xl). Scannable and distinct.
- **Body Text:** Atkinson Hyperlegible, regular (400), 1.125rem (text-lg) with relaxed line-height (1.6-1.7). Deliberately large for comfortable reading.
- **Supporting Text:** Atkinson Hyperlegible, regular (400), 1rem (text-base). Descriptions and secondary content.
- **Meta/Labels:** Lexend or Atkinson, bold, uppercase with wide letter-spacing (tracking-widest). Used for category badges, timeline dates, and partner labels.
- **Navigation Links:** Medium weight (500-600), 0.875rem (text-sm). Compact but accessible.

### Accessibility-Specific Choices
- Body text never falls below 1rem (16px); most content text is 1.125rem (18px) or larger
- Line-height stays at 1.6 or higher for comfortable reading pace
- Bold weight (700) used generously for scannable key information within paragraphs
- Category badges use uppercase + wide tracking for clear visual distinction from body text

## 4. Component Stylings

### Buttons
- **Primary CTA:** Pill-shaped (rounded-full), Confident Blue background with white text, comfortable padding (py-2.5 to py-4, px-6 to px-8). Bold font weight. Hover darkens to deeper blue (blue-700). Often paired with a Material Symbol icon.
- **Large CTA (hero/sections):** Same pill shape but larger: py-4 to py-5, px-8 to px-10, text-lg to text-xl. May include shadow (shadow-lg shadow-primary/20) for visual lift.
- **Secondary/Outline:** Pill-shaped, white/transparent background with subtle border (slate-200), font-display bold. Hover shifts to light gray fill.
- **Inverted CTA (on primary backgrounds):** White background with Confident Blue text, pill-shaped. Used in banner sections.
- **Accent CTA:** Warm Amber (#F59E0B) background with white text, pill-shaped. Used for standout actions like "Submit Your Idea." Hover scales up slightly (hover:scale-105).
- **Icon Buttons:** Circular (rounded-full), p-2 padding, subtle hover background. Used for dark mode toggle and utility actions.

### Cards & Content Containers
- **Standard Cards:** Generously rounded corners (rounded-xl / 1rem to 1.5rem), white background (dark: slate-800/900), 1px border in Whisper Gray, whisper-soft shadow (shadow-sm). Internal padding of 2rem (p-8). On hover: elevated shadow (shadow-xl), optional border color shift to Confident Blue, and gentle lift (-translate-y-1 to translateY(-4px)).
- **Category Cards (Depth Layers):** Extra-rounded corners (rounded-3xl), tinted background matching category color (e.g., bg-blue-50), transparent 2px border that fills with category color on hover.
- **Icon Badge:** 3.5rem square (w-14 h-14), rounded-xl corners, tinted background matching category, centered Material Symbol icon. Some hover with scale-110 animation.
- **Feature/CTA Banners:** Full-bleed Confident Blue background, rounded-3xl, generous padding (p-12 to p-16), white text. Creates visual anchors between content sections.
- **Informational Callout:** Light blue tint (bg-blue-50 / bg-primary/5), rounded-3xl with subtle blue border. Used for support worker sections and newsletter signup.

### Navigation
- **Style:** Sticky top, frosted glass effect (bg-white/80 backdrop-blur-md), 1px bottom border. Height of h-16 to h-20.
- **Logo:** Square badge (w-8 to w-10, rounded-lg) in Confident Blue with white Material Symbol icon, paired with bold Lexend brand name.
- **Links:** Lexend medium weight, text-sm, generous spacing (gap-6 to gap-8). Default state in Quiet Slate, hover transitions to Confident Blue. Active page indicated by primary color text with underline (underline-offset-8) or border-bottom.
- **CTA in Nav:** Pill-shaped primary button at the far right.

### Inputs & Forms
- **Text Inputs:** Rounded corners (rounded-lg), subtle slate border (border-slate-300), focus state shifts border to Confident Blue with ring highlight (focus:ring-primary). Dark mode uses darker background.
- **Tables:** Clean bordered cells (border-gray-200), bold Lexend headers on gray-100 background. Rows hover with subtle gray tint. Rounded corners on first/last header cells.
- **Accordions:** Rounded-xl container with 1px border. Full-width clickable header with bold text and expand/collapse Material Symbol. Content panel has tinted background (gray-50).

### Timeline
- **Vertical Line:** Centered 1px or 4px line in Whisper Gray, hidden on mobile.
- **Nodes:** Small circles (w-4 h-4 or w-8 h-8) in Confident Blue with white ring (ring-4). Alternating left-right content cards on desktop, stacked on mobile.
- **Cards:** Rounded-2xl, shadow-sm, 1px border. Hover adds shadow-md. Phase titles in primary blue.

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** 1280px (max-w-7xl) for full layouts, 1024px (max-w-5xl) for reading-focused pages, 896px (max-w-4xl) for article-style content.
- **Grid System:** Responsive columns — 3 columns on desktop (lg:grid-cols-3), 2 on tablet (md:grid-cols-2), single column on mobile. Gap of 2rem (gap-8) between cards.
- **Edge Padding:** Consistent 1.5rem (px-6) on all breakpoints for comfortable framing.

### Whitespace Strategy (Critical to Accessibility)
- **Page Top Padding:** Generous 4rem-6rem (py-16 to py-24) creating calm entry into content.
- **Section Spacing:** 5rem-6rem (mb-20 to mb-24) between major content sections. Deliberate, dramatic breathing room.
- **Card Internal Padding:** 2rem (p-8) standard, creating generous reading space within cards.
- **Header to Content Gap:** 4rem-5rem (mb-16 to mb-20) after page headers.
- **Element Spacing:** Consistent 1rem-1.5rem (mb-4 to mb-6) between heading, description, and CTA within cards.

### Responsive Behavior
- **Mobile-First Foundation:** Single-column layouts with full-width cards.
- **Touch Targets:** All interactive elements use generous padding (min py-2.5 px-5 for buttons, p-6 for accordion triggers).
- **Navigation:** Full nav links hidden on mobile (hidden md:flex), suggesting hamburger menu at smaller breakpoints.
- **Timeline:** Collapses from alternating to stacked layout on mobile with left-aligned nodes.
- **Content Width:** Narrower max-width on text-heavy pages (max-w-4xl) to maintain comfortable line lengths.

### Dark Mode Strategy
- Toggled via class strategy on the `<html>` element
- Every component has explicit dark mode variants using Tailwind's `dark:` prefix
- Background shifts from warm cream to deep slate, text inverts from charcoal to light gray
- Cards shift from white to slate-800/900 with darker borders
- Primary blue remains consistent across modes; some screens add an amber accent for dark mode interactive states
- Subtle opacity adjustments on images (dark:opacity-80) to reduce glare

## 6. Design System Notes for Stitch Generation

When creating new screens for this project using Stitch, reference these specific instructions:

### Language to Use
- **Atmosphere:** "Warm, approachable community space with accessibility-first design"
- **Button Shapes:** "Pill-shaped buttons" (rounded-full) for primary actions, "generously rounded corners" (rounded-xl) for cards
- **Shadows:** "Whisper-soft shadows by default, elevated shadow on hover"
- **Spacing:** "Generous breathing room with large text for cognitive accessibility"
- **Typography:** "Lexend for headings, Atkinson Hyperlegible for body text — both chosen for maximum readability"

### Color References
Always use the descriptive names with hex codes:
- Primary CTA / Brand: "Confident Blue (#2563EB)"
- Backgrounds: "Parchment Cream (#FDFBF7)" or "Cool Mist Gray (#F8FAFC)"
- Dark mode background: "Deep Slate Night (#0F172A)"
- Text: "Rich Charcoal (slate-900)" or "Quiet Slate (slate-600)"
- Accent: "Harvest Amber (#F59E0B)" for warm highlights

### Component Prompts
- "Create a content card with generously rounded corners (rounded-xl), white background, whisper-soft shadow, and a colored icon badge in the top-left using Material Symbols"
- "Design a pill-shaped primary CTA button in Confident Blue (#2563EB) with white text, comfortable padding, and shadow-lg"
- "Add a sticky frosted-glass navigation bar with backdrop blur, logo badge in Confident Blue, Lexend nav links, and a dark mode toggle button"
- "Create an accordion glossary section with rounded-xl bordered items, bold Lexend terms, and expandable plain-language definitions in Atkinson Hyperlegible"

### Accessibility Requirements
Every new screen MUST:
1. Use Atkinson Hyperlegible at 18px+ for all body/description text
2. Use Lexend for all headings and navigation
3. Include a dark mode toggle
4. Maintain minimum 4.5:1 contrast ratio for all text
5. Use Material Symbols icons alongside text labels (never icons alone)
6. Keep language plain and direct — written for people with intellectual and developmental disabilities
7. Provide generous touch targets (minimum 44x44px for interactive elements)

### Incremental Iteration
When refining existing screens:
1. Focus on ONE component at a time (e.g., "Update the resource cards")
2. Be specific about what to change (e.g., "Increase card padding from p-6 to p-8 and use rounded-2xl corners")
3. Reference this design system language consistently
4. Always test both light and dark modes
