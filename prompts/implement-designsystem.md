# Implement Vertex Design System

## Goal
Build a complete, production-ready design system for Vertex following the design specification provided in `vertex-designsystem.png`. This establishes the visual foundation for all UI components, pages, and layouts across the learning platform.

## Design Analysis
From the design system reference image, the system includes:

**Typography:**
- Headline (32px, bold) - for major page headings
- Subheading (24px, semibold) - for section headers
- Body (16px, regular) - for standard text content
- Caption (12px, regular) - for helper text, labels, metadata
- Label (14px, semibold) - for form labels, badges, tags

**Color Palette:**
- Primary: Blue (used for buttons, links, accents)
- Secondary: Purple (for alternative actions, highlights)
- Neutral/Gray scale: From black to light gray (backgrounds, borders, text)
- Success: Green
- Warning: Orange/Yellow
- Error: Red

**Components Identified:**
- Buttons (primary, secondary, outlined, text variants)
- Cards (for course/lesson display)
- Badges and tags
- Form inputs and labels
- Navigation elements
- Icons and iconography system
- Spacing/grid system (likely 8px or 4px base unit)
- Shadow and depth system

## Decision & Assumptions

1. **CSS-in-JS vs Tailwind**: The project uses Tailwind CSS 4 with the new `@tailwindcss/postcss` plugin. All design tokens will be defined in Tailwind's theme config for consistency.

2. **Color Palette**: Implement semantic color names (primary, secondary, success, warning, error) that map to specific hex values, not generic "blue" or "purple" - this allows theming and maintains intent.

3. **Component Library**: Build reusable React components in `app/components/ui/` for all design patterns. These components accept size, variant, and state props, following modern React patterns.

4. **Typography Scale**: Define a consistent font-size and line-height scale using Tailwind's typography configuration. Establish base font family defaults.

5. **Spacing System**: Use an 8px base unit for consistent spacing. Define scale: 1 (8px), 2 (16px), 3 (24px), 4 (32px), etc. exposed via Tailwind's spacing utilities.

6. **Component Variants**: Use TypeScript discriminated unions or class-based approaches to define component states (default, hover, active, disabled, loading).

7. **Responsive Design**: Components must work from mobile (320px) to desktop (1440px+). Establish breakpoint names: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).

8. **Dark Mode**: Include light and dark mode variants where applicable using Tailwind's `dark:` prefix.

## Files to Create/Modify

**Configuration:**
- `tailwind.config.ts` - Define theme colors, typography, spacing, custom utilities

**Components (in `app/components/ui/`):**
- `button.tsx` - Button variants (primary, secondary, outlined, text, disabled states)
- `card.tsx` - Card component with elevation/shadow variants
- `badge.tsx` - Badge/tag component for labels and metadata
- `input.tsx` - Form input with label and error state support
- `typography.tsx` - Semantic typography components (Heading, Subheading, Body, Caption, Label)
- `icon.tsx` - Icon wrapper component
- `link.tsx` - Semantic link component with hover states

**Documentation:**
- `app/components/ui/README.md` - Component usage guide and design tokens reference

**Demo/Testing:**
- `app/design/page.tsx` - Design system showcase page displaying all components, colors, typography, and spacing

## Requirements

1. Tailwind config must define:
   - Complete color palette with semantic names (primary, secondary, success, warning, error, plus neutral grays)
   - Typography scale (font-size, line-height, letter-spacing)
   - Spacing scale (8px base unit)
   - Border radius defaults
   - Shadow/elevation system
   - Default dark mode settings

2. All components must:
   - Be exported from `app/components/ui/index.ts` for easy imports
   - Support TypeScript with proper prop interfaces
   - Include JSDoc comments explaining usage
   - Handle disabled states gracefully
   - Be accessible (proper ARIA attributes, semantic HTML)

3. Design system showcase page (`app/design/page.tsx`) must display:
   - All colors with hex codes
   - Complete typography hierarchy with examples
   - All button variants and states
   - All badge variants
   - All input states
   - Card component variations
   - Responsive grid demonstration
   - Spacing scale reference

4. Styling approach:
   - Use Tailwind utility classes, not custom CSS where possible
   - For complex patterns, use `@apply` directive in globals.css or component files
   - No CSS-in-JS libraries (emotion, styled-components)
   - Maintain clarity and maintainability

## Security Considerations

- Components handle no sensitive data directly (tokens, keys, user info)
- Input validation happens at form level, not component level
- No inline event handlers that could be exploited
- Proper escaping of user content when displayed

## Acceptance Criteria

✓ Tailwind config fully typed and defines all design tokens
✓ All components are TypeScript with exported interfaces
✓ Design showcase page displays all components and tokens
✓ Components work responsively on mobile (320px) through desktop
✓ Light and dark modes both functional
✓ No TypeScript errors or ESLint violations
✓ Production build succeeds
✓ All components are accessible (semantic HTML, ARIA attributes)

## Checks to Run

1. Type check: `npm run build` (production build)
2. Lint: `npm run lint`
3. Visual verification: `npm run dev` then navigate to `/design` to review the showcase

## Manual Test Steps

1. Start dev server: `npm run dev`
2. Navigate to `http://localhost:3000/design`
3. Verify all colors display correctly
4. Check typography hierarchy is readable at all scales
5. Test button states by hovering/clicking
6. Resize browser to verify responsive behavior (320px, 768px, 1024px, 1280px)
7. Toggle dark mode (via browser dev tools or system preference) and verify contrast
8. Verify no console errors or warnings
9. Verify components render correctly in production build: `npm run build && npm start`
