# Vertex Design System Components

This directory contains reusable, accessible UI components built on top of Tailwind CSS 4.

## Components

### Typography
- **Heading** - Large page headings (32px, bold)
- **Subheading** - Section headers (24px, semibold)
- **Body** - Standard body text (16px)
- **BodySmall** - Smaller body text (14px)
- **Caption** - Helper text and metadata (12px)
- **Label** - Form labels and tags (14px, semibold)

### Interactive Components
- **Button** - Primary, secondary, outlined, and text variants with sizes (sm, md, lg)
- **Link** - Semantic link component with internal/external route handling
- **Input** - Form input with optional label, error, and helper text

### Content Components
- **Card** - Container component with elevation/shadow variants
- **CardHeader** - Card header with border separation
- **CardBody** - Card body with default padding
- **CardFooter** - Card footer with border separation
- **Badge** - Labels and status indicators (primary, secondary, success, warning, error, neutral)

### Icons
- **Icon** - Base icon component with size variants (xs, sm, md, lg, xl)
- **ChevronRightIcon** - Right chevron icon
- **ChevronLeftIcon** - Left chevron icon
- **CheckIcon** - Checkmark icon
- **XIcon** - Close/X icon
- **AlertCircleIcon** - Alert indicator icon
- **SearchIcon** - Search/magnifying glass icon

## Design Tokens

### Color Palette
All colors are defined in `tailwind.config.ts` with semantic names:

- **Primary (Blue)** - Main interactive color
  - Values: 50-950 scale, primary brand color at 500 (#3b82f6)
- **Secondary (Purple)** - Alternative interactive color
  - Values: 50-950 scale, primary brand color at 500 (#a855f7)
- **Success (Green)** - Positive/success states
  - Values: 50-950 scale, primary color at 500 (#22c55e)
- **Warning (Amber)** - Warning/caution states
  - Values: 50-950 scale, primary color at 500 (#f59e0b)
- **Error (Red)** - Error/danger states
  - Values: 50-950 scale, primary color at 500 (#ef4444)
- **Neutral (Gray)** - Borders, backgrounds, secondary text
  - Values: 50-950 scale for fine-grained contrast

### Typography Scale
- Headline: 32px, 1.2 line-height
- Subheading: 24px, 1.3 line-height
- Body: 16px, 1.5 line-height
- Body Small: 14px, 1.5 line-height
- Caption: 12px, 1.4 line-height
- Label: 14px, 1.4 line-height, semibold weight

### Spacing
Base unit: 8px

Scale: 0.5 (4px), 1 (8px), 1.5 (12px), 2 (16px), 3 (24px), 4 (32px), 5 (40px), 6 (48px), 8 (64px), 10 (80px), 12 (96px)

### Border Radius
- None: 0
- Small: 4px
- Base: 8px
- Medium: 12px
- Large: 16px
- Extra Large: 20px
- Full: 9999px (for pills)

### Shadow System
- None: no shadow
- Small: light elevation
- Base: default elevation
- Medium: medium elevation
- Large: prominent elevation
- Dark variants: enhanced shadows for dark mode

## Usage Examples

### Button
```tsx
import { Button } from '@/components/ui';

// Primary button
<Button>Click me</Button>

// Secondary with size
<Button variant="secondary" size="lg">Large Button</Button>

// Outlined variant
<Button variant="outlined" disabled>Disabled</Button>

// Loading state
<Button isLoading>Loading...</Button>

// With icon
<Button icon={<SearchIcon size="sm" />}>Search</Button>
```

### Card
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui';

<Card elevation="md">
  <CardHeader>Header Title</CardHeader>
  <CardBody>Main content goes here</CardBody>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

### Badge
```tsx
import { Badge } from '@/components/ui';

<Badge variant="success">Active</Badge>
<Badge variant="warning" size="sm">Pending</Badge>
<Badge>Default</Badge>
```

### Input
```tsx
import { Input } from '@/components/ui';

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

### Typography
```tsx
import { Heading, Subheading, Body, Caption } from '@/components/ui';

<Heading>Page Title</Heading>
<Subheading>Section Title</Subheading>
<Body>This is regular body text</Body>
<Caption>Helper text</Caption>
```

### Link
```tsx
import { Link } from '@/components/ui';

<Link href="/courses">Internal Link</Link>
<Link href="https://example.com" target="_blank">External Link</Link>
<Link href="/about" variant="secondary" underline={false}>About</Link>
```

## Accessibility

All components include:
- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
- Focus indicators
- Color contrast ratios meeting WCAG AA standards
- Support for reduced motion preferences

## Responsive Design

Components are built mobile-first using Tailwind breakpoints:
- Default: Mobile (320px and up)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Responsive class examples:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

## Dark Mode

All components automatically support dark mode. Dark mode variants are applied via Tailwind's `dark:` prefix.

To enable dark mode in your layout, add the `dark` class to a parent element or enable system preference detection through Tailwind config.

Example:
```tsx
<div className="dark">
  <Button>This button uses dark mode colors</Button>
</div>
```

## Contributing

When adding new components:

1. Create a new file in `app/components/ui/`
2. Export the component from `app/components/ui/index.ts`
3. Use Tailwind utilities instead of custom CSS
4. Include TypeScript prop interfaces
5. Add JSDoc comments with `@example` blocks
6. Support responsive design and dark mode
7. Ensure accessibility standards
8. Test in the design showcase page

## Design System Showcase

View all components and design tokens at `/design` when running `npm run dev`.
