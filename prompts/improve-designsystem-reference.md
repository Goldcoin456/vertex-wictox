# Improve Vertex Design System Reference Match

## Goal
Bring `/design` into closer visual and content parity with `design/vertex-designsystem.png`.

## Inspected
- `app/design/page.tsx`
- `tailwind.config.ts`
- `app/globals.css`
- `DESIGN_SYSTEM.md`
- `design/vertex-designsystem.png`

## Corrections
- Rework the page into a bordered, panel-based specification canvas matching the reference layout.
- Add the missing Neutral 50 and White swatches and correct the swatch labels and hex values.
- Correct spacing labels to include rem values and visual bar proportions.
- Correct radius labels so Full is shown as `Full` with `(circle)` rather than `Fullpx`.
- Show shadow examples as visual cards with the specified shadow values.
- Replace emoji icons with a consistent inline outline/filled icon set and include all reference icon specs.
- Rebuild button examples as Primary, Secondary, Tertiary, and Text columns with Default, Hover, and Disabled rows, plus button specs.
- Improve inputs to match field height, border, search affordance, keyboard hint, and select presentation.
- Add the complete card examples: Course Card, Lesson Card (Video), Lesson Card (Lesson), and Resource Card.
- Add navigation examples including Vertex mark, Courses, My Learning, breadcrumbs, and pagination.
- Add the four principles with matching icons and concise descriptions.
- Preserve the existing orange palette and Playfair Display/Inter typography.
- Update stale design-system documentation claims that still describe the old blue/purple palette and 8px base spacing.

## Acceptance Criteria
- `/design` contains all 14 numbered sections from the reference.
- The content and labels above are present and visually arranged as a specification sheet.
- The page remains responsive on narrow screens.
- `npm run build` passes.
- `npm run lint` has no new errors from project source files.
