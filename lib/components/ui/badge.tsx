import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant of the badge
   * @default 'primary'
   */
  variant?: BadgeVariant;
  /**
   * Size of the badge
   * @default 'md'
   */
  size?: BadgeSize;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200',
  secondary: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-200',
  success: 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-200',
  warning: 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-200',
  error: 'bg-error-100 text-error-700 dark:bg-error-900 dark:text-error-200',
  neutral: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-caption',
  md: 'px-3 py-1 text-label',
};

const baseClasses = 'inline-flex items-center rounded-full font-medium whitespace-nowrap';

/**
 * Badge component for labels, status indicators, and tags.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning" size="sm">Pending</Badge>
 * <Badge>Default</Badge>
 * ```
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
