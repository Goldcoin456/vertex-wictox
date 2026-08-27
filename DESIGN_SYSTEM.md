# Vertex Design System Implementation

## Overview

The Vertex Design System is a complete, production-ready component library built with React, TypeScript, and Tailwind CSS 4. It provides semantic, accessible UI components and comprehensive design tokens for consistent theming across the learning platform.

## What's Been Built

### ✅ Design Tokens (tailwind.config.ts)
- **Primary orange palette** from the reference sheet (`#F97316` through `#FFEEE5`)
- **Neutral grays** from the reference sheet, including Neutral 50 and White
- **6 typography scales** (headline, subheading, body, body-sm, caption, label)
- **4px-based spacing system** with 9 units (4px to 64px)
- **5 elevation levels** for shadows plus dark mode variants
- **Custom border radius** scale (4px to 20px)
- **Transition durations** (100ms to 500ms)

### ✅ Reusable Components (lib/components/ui/)

**Typography Components**
- `Heading` (32px, bold) - Page titles and major headings
- `Subheading` (24px, semibold) - Section headers
- `Body` (16px, regular) - Standard body text
- `BodySmall` (14px, regular) - Secondary text
- `Caption` (12px, regular) - Metadata and helpers
- `Label` (14px, semibold) - Form labels and tags

**Interactive Components**
- `Button` - 4 variants × 3 sizes, with loading and icon support
  - Primary (blue), Secondary (purple), Outlined, Text
  - Sizes: sm, md, lg
  - States: default, hover, active, disabled, loading
- `Link` - Semantic links with Next.js routing support
  - 3 color variants (primary, secondary, neutral)
  - Internal routes use Next.js Link, external URLs use standard anchors
  - Optional underline toggle
- `Input` - Form field with label, error, and helper text
  - Built-in validation styling
  - Dark mode support
  - Focus indicators

**Content Components**
- `Card` - Container with 4 elevation levels
  - `CardHeader` - Header with border separation
  - `CardBody` - Main content area with padding
  - `CardFooter` - Footer with border separation
- `Badge` - Status labels and tags
  - 6 color variants (primary, secondary, success, warning, error, neutral)
  - 2 sizes (sm, md)
- `Icon` - SVG wrapper component
  - 5 size variants (xs, sm, md, lg, xl)
  - 6 built-in common icons (ChevronRight, ChevronLeft, Check, X, AlertCircle, Search)

### ✅ Design Showcase (app/design/page.tsx)
A reference specification sheet displaying all 14 sections from the supplied design image:
- Colors, typography, type scale, spacing, radius, and shadows
- Outline and filled icon styles
- Button variants with default, hover, and disabled states
- Inputs, badges, status indicators, and progress
- Course, video lesson, lesson, and resource cards
- Navigation patterns and design principles

### ✅ Documentation
- `lib/components/ui/README.md` - Component library guide with usage examples
- `tailwind.config.ts` - Fully typed and documented design tokens
- JSDoc comments on all components with `@example` blocks
- TypeScript interfaces for all component props

## File Structure

```
vertex/
├── app/
│   ├── globals.css                 # Global styles and typography defaults
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page (updated with new design)
│   └── design/
│       └── page.tsx                # Design system showcase
├── lib/
│   └── components/
│       └── ui/
│           ├── typography.tsx      # Heading, Subheading, Body, Caption, Label
│           ├── button.tsx          # Button component
│           ├── card.tsx            # Card and subcomponents
│           ├── badge.tsx           # Badge component
│           ├── input.tsx           # Input component
│           ├── link.tsx            # Link component
│           ├── icon.tsx            # Icon component and built-ins
│           ├── index.ts            # Barrel export
│           └── README.md           # Component documentation
├── tailwind.config.ts              # Design tokens and theme
├── postcss.config.mjs              # PostCSS configuration
├── globals.css                     # Global styles
└── next.config.ts                  # Next.js configuration
```

## Key Features

### ✅ Accessibility
- Semantic HTML elements (button, input, label, heading, etc.)
- ARIA attributes where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast ratios meeting WCAG AA standards
- Support for reduced motion preferences

### ✅ Responsive Design
- Mobile-first approach (320px and up)
- Tailwind breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All components tested responsively
- Flexible layouts using Tailwind grid and flex utilities

### ✅ Dark Mode
- Automatic dark mode support via `dark:` prefix
- Consistent color mapping for light and dark themes
- Dark mode shadows and elevation system
- Proper contrast in both modes

### ✅ TypeScript
- Full type safety with exported interfaces
- Discriminated unions for component variants
- Prop validation through type system
- Better IDE autocomplete and documentation

## Usage

### Importing Components
```typescript
import { Button, Heading, Body, Badge, Card, Input } from '@/lib/components/ui';
```

### Button Example
```tsx
<Button variant="primary" size="md" onClick={() => {}}>
  Click Me
</Button>

<Button variant="secondary" isLoading>
  Loading...
</Button>

<Button variant="outlined" disabled>
  Disabled
</Button>
```

### Card Example
```tsx
<Card elevation="md">
  <CardHeader>
    <Subheading>Card Title</Subheading>
  </CardHeader>
  <CardBody>
    <Body>Card content goes here</Body>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Form Example
```tsx
<Input 
  label="Email" 
  type="email" 
  placeholder="user@example.com"
  helperText="We'll never share your email"
/>

<Input 
  label="Password" 
  type="password"
  error="Password must be at least 8 characters"
/>
```

### Typography Example
```tsx
<Heading>Page Title</Heading>
<Subheading>Section Title</Subheading>
<Body>This is regular body text that flows naturally.</Body>
<BodySmall>Secondary information here.</BodySmall>
<Caption>Metadata and helper text</Caption>
<Label>Form Label</Label>
```

## Testing the Design System

### 1. Start Development Server
```bash
npm run dev
```

### 2. View Home Page
Navigate to `http://localhost:3000`
- Shows welcome message and link to design system

### 3. View Design System Showcase
Navigate to `http://localhost:3000/design`
- Browse all colors, typography, components, and spacing
- Verify dark mode by toggling system preference
- Test responsive design by resizing browser

### 4. View Production Build
```bash
npm run build
npm start
```
- Verify components work in production
- Check bundle size is reasonable

## Design Decisions

### Why Components in lib/ Not app/components/
Next.js 16.3.3's Turbopack treats files in app/ as potential routes. By placing components in `lib/components/ui/`, we avoid route conflicts and keep the directory structure clean.

### Why Inline Styles for Typography
Tailwind v4 has some constraints with custom font-size utilities in early versions. Using inline CSS ensures typography renders correctly while maintaining full Tailwind support for other utilities.

### Why Next.js Link Wrapper
The custom Link component handles both internal routes (via Next.js Link) and external URLs (standard anchors), providing a seamless API while maintaining performance benefits of Next.js routing.

### Color Naming Convention
Colors use semantic names (primary, secondary, success, warning, error, neutral) rather than color names (blue, purple, green, etc.). This allows easy theming and maintains intent through code.

## Performance Considerations

- ✅ All components are functional with React.forwardRef support
- ✅ Uses Tailwind's built-in purging to minimize CSS
- ✅ Responsive utilities only add CSS for used breakpoints
- ✅ Icons are SVG-based and inline (no icon font loading)
- ✅ Lazy loading support ready (components are code-split)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

The design system is ready for use in building:
1. **Catalog page** - Course grid using Card, Badge, Link components
2. **Course page** - Course details with Button, Badge, Heading components
3. **Lesson page** - Lesson player with Input, Button components
4. **My Learning page** - Progress list with Badge, Link components
5. **Search page** - Results list with Card, Link, Button components

All components are production-ready and follow accessibility best practices. Use them consistently throughout the Vertex platform.
