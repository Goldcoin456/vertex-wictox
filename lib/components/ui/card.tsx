import React from 'react';

type CardElevation = 'none' | 'sm' | 'base' | 'md' | 'lg';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Shadow/elevation level of the card
   * @default 'base'
   */
  elevation?: CardElevation;
}

const elevationClasses: Record<CardElevation, string> = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  base: 'shadow-base dark:shadow-dark-base',
  md: 'shadow-md dark:shadow-dark-md',
  lg: 'shadow-lg',
};

/**
 * Card component for grouping related content.
 *
 * @example
 * ```tsx
 * <Card elevation="md">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ elevation = 'base', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg bg-white dark:bg-neutral-900 ${elevationClasses[elevation]} ${
          className || ''
        }`}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

/**
 * Card header component for consistent padding and styling
 */
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 ${className || ''}`}
      {...props}
    />
  );
});

CardHeader.displayName = 'CardHeader';

/**
 * Card body component for consistent padding
 */
export const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`p-4 ${className || ''}`}
      {...props}
    />
  );
});

CardBody.displayName = 'CardBody';

/**
 * Card footer component for consistent padding and styling
 */
export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`px-4 py-3 border-t border-neutral-200 dark:border-neutral-800 ${className || ''}`}
      {...props}
    />
  );
});

CardFooter.displayName = 'CardFooter';
