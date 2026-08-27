import React from 'react';
import NextLink from 'next/link';

type LinkVariant = 'primary' | 'secondary' | 'neutral';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link href - if provided, uses Next.js Link component
   */
  href?: string;
  /**
   * Visual variant of the link
   * @default 'primary'
   */
  variant?: LinkVariant;
  /**
   * Whether to show an underline
   * @default true
   */
  underline?: boolean;
}

const variantClasses: Record<LinkVariant, string> = {
  primary:
    'text-primary-600 hover:text-primary-700 active:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 dark:active:text-primary-500',
  secondary:
    'text-secondary-600 hover:text-secondary-700 active:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-300 dark:active:text-secondary-500',
  neutral:
    'text-neutral-700 hover:text-neutral-900 active:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 dark:active:text-neutral-100',
};

const baseClasses = 'font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500';

/**
 * Link component that works with both internal Next.js routes and external URLs.
 *
 * @example
 * ```tsx
 * <Link href="/courses">Courses</Link>
 * <Link href="https://example.com" variant="secondary">External Link</Link>
 * <Link href="/about" underline={false}>About</Link>
 * ```
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      variant = 'primary',
      underline = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = `${baseClasses} ${variantClasses[variant]} ${
      underline ? 'underline' : ''
    } ${className || ''}`;

    // Use Next.js Link for internal routes
    if (href && !href.startsWith('http')) {
      return (
        <NextLink href={href} className={classes} ref={ref} {...props}>
          {children}
        </NextLink>
      );
    }

    // Use regular anchor for external URLs
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
