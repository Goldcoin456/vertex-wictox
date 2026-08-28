# Implement Vertex Home Page

## Goal
Reproduce the supplied `design/vertex-home.png` as the Vertex root home page at `/`, preserving the existing Next.js and Tailwind setup.

## Skills and context read
- Repository instructions in `AGENTS.md`.
- Existing design-system notes in `DESIGN_SYSTEM.md` and `/memories/repo/design-system-implementation.md`.
- Existing home route, root layout, global styles, Tailwind config, package scripts, and UI component inventory.

## Existing code inspected
- `app/page.tsx` is currently a minimal welcome screen.
- `app/layout.tsx` provides the root metadata and document shell.
- `app/globals.css` imports Playfair Display and Inter and defines global defaults.
- `tailwind.config.ts` contains the orange/neutral tokens and serif/sans families.
- `lib/components/ui/` contains reusable typography, button, link, and icon primitives.
- Reference image: `design/vertex-home.png`.

## Decisions and assumptions
- Implement the visible home page in `app/page.tsx`, with only the smallest global CSS/config adjustment needed for the screenshot.
- Use semantic HTML and accessible labels/tooltips for icon-only controls.
- Keep the page presentational: course data is local mock content because no Sanity data layer exists yet.
- Use CSS/Tailwind for the diagonal side texture and orange bar motif; do not add external image assets beyond the supplied reference.
- Preserve the supplied visual direction: warm off-white canvas, black editorial serif headings, orange accent, thin warm borders, and Inter-like utility text.
- Make the layout responsive: nav wraps or compresses, hero type scales down, cards stack on narrow screens, and the decorative motif remains clipped without causing horizontal overflow.

## Requirements
- Match the screenshot's centered 960px-ish content canvas and warm textured page background.
- Header: Vertex mark/wordmark, Courses, My Learning, notification icon, and circular profile image treatment.
- Hero: `INTELLIGENT LEARNING` eyebrow, headline `Search your learning in plain English.`, supporting copy, orange `Explore Courses` CTA with arrow, and large search prompt with keyboard shortcut.
- Course section: `All Courses`, `View all courses`, and three cards for Next.js for Production, Docker Essentials, and TypeScript Deep Dive with icons, descriptions, and metadata.
- Lower visible section: star callout `New courses and lessons added every week.` and orange bar visualization beginning at the bottom of the page.
- Keep text and controls readable and non-overlapping at desktop and mobile widths.

## Security and accessibility
- No secrets, tokens, or network calls.
- Use real buttons/links where appropriate, a labeled search input, keyboard-focus styles, and `aria-label` for icon-only actions.
- Use decorative graphics with `aria-hidden`.

## Acceptance criteria
- Root page visually follows `design/vertex-home.png` at desktop dimensions.
- Responsive layout works at mobile widths without horizontal scrolling.
- TypeScript and ESLint pass.
- Production build succeeds.
- No unrelated files are changed.

## Checks
- `npm run lint`
- `npm run build`
- Start with `npm run dev` for manual visual review at `/`.

## Manual test
1. Open `/` at a desktop viewport near the supplied reference dimensions.
2. Verify header, hero, search field, course cards, callout, and lower orange bars align with the reference.
3. Resize to a narrow mobile viewport and verify cards stack, navigation remains usable, and no content overflows.
4. Tab through controls and confirm visible focus states and meaningful accessible names.
