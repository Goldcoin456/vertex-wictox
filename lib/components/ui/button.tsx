import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean;
  /**
   * Icon to display before the text
   */
  icon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-500 dark:hover:bg-primary-600 dark:active:bg-primary-700',
  secondary:
    'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 dark:bg-secondary-500 dark:hover:bg-secondary-600 dark:active:bg-secondary-700',
  outlined:
    'border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-900 dark:active:bg-neutral-800',
  text: 'text-primary-600 hover:text-primary-700 active:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 dark:active:text-primary-500',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-caption gap-1.5',
  md: 'px-4 py-2 text-label gap-2',
  lg: 'px-6 py-3 text-body gap-2',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500';

/**
 * Button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * <Button>Click me</Button>
 * <Button variant="secondary" size="lg">Large secondary button</Button>
 * <Button variant="outlined" disabled>Disabled</Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && icon && <span>{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
