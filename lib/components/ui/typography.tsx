import React from 'react';

/**
 * Semantic typography component for page headings (32px, bold)
 */
export const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' }
>(({ as: Component = 'h1', className, ...props }, ref) => {
  const baseClass = `text-neutral-900 dark:text-neutral-50 ${className || ''}`;
  const style = {
    fontSize: '32px',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
    fontWeight: 700,
  };
  return (
    <Component
      ref={ref}
      className={baseClass}
      style={style}
      {...props}
    />
  );
});
Heading.displayName = 'Heading';

/**
 * Semantic typography component for section headers (24px, semibold)
 */
export const Subheading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: 'h2' | 'h3' | 'h4' }
>(({ as: Component = 'h2', className, ...props }, ref) => {
  const baseClass = `text-neutral-900 dark:text-neutral-50 ${className || ''}`;
  const style = {
    fontSize: '24px',
    lineHeight: '1.3',
    letterSpacing: '-0.005em',
    fontWeight: 600,
  };
  return (
    <Component
      ref={ref}
      className={baseClass}
      style={style}
      {...props}
    />
  );
});
Subheading.displayName = 'Subheading';

/**
 * Semantic typography component for body text (16px, regular)
 */
export const Body = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const baseClass = `text-neutral-700 dark:text-neutral-300 ${className || ''}`;
  const style = {
    fontSize: '16px',
    lineHeight: '1.5',
  };
  return (
    <p
      ref={ref}
      className={baseClass}
      style={style}
      {...props}
    />
  );
});
Body.displayName = 'Body';

/**
 * Semantic typography component for smaller body text (14px, regular)
 */
export const BodySmall = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const baseClass = `text-neutral-600 dark:text-neutral-400 ${className || ''}`;
  const style = {
    fontSize: '14px',
    lineHeight: '1.5',
  };
  return (
    <p
      ref={ref}
      className={baseClass}
      style={style}
      {...props}
    />
  );
});
BodySmall.displayName = 'BodySmall';

/**
 * Semantic typography component for helper text and metadata (12px, regular)
 */
export const Caption = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const baseClass = `text-neutral-500 dark:text-neutral-400 ${className || ''}`;
  const style = {
    fontSize: '12px',
    lineHeight: '1.4',
    letterSpacing: '0.005em',
  };
  return (
    <span
      ref={ref}
      className={baseClass}
      style={style}
      {...props}
    />
  );
});
Caption.displayName = 'Caption';

/**
 * Semantic typography component for form labels and tags (14px, semibold)
 */
export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const baseClass = `text-neutral-900 dark:text-neutral-50 ${className || ''}`;
  const style = {
    fontSize: '14px',
    lineHeight: '1.4',
    letterSpacing: '0.005em',
    fontWeight: 600,
  };
  return (
    <label
      ref={ref}
      className={baseClass}
      style={style}
      {...props}
    />
  );
});
Label.displayName = 'Label';
