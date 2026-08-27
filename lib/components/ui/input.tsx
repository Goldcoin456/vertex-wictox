'use client';

import React, { useId } from 'react';
import { Label } from './typography';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label text for the input
   */
  label?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
}

/**
 * Input component with optional label, error, and helper text.
 *
 * @example
 * ```tsx
 * <Input label="Email" type="email" placeholder="user@example.com" />
 * <Input label="Password" type="password" error="Password must be at least 8 characters" />
 * <Input label="Username" helperText="3-20 characters" />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <Label htmlFor={inputId} className="block">
            {label}
          </Label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={`
            px-3 py-2 text-body
            rounded-md border-2 border-neutral-300
            bg-white dark:bg-neutral-900
            text-neutral-900 dark:text-neutral-50
            placeholder-neutral-400 dark:placeholder-neutral-600
            transition-colors duration-150
            focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20
            disabled:opacity-50 disabled:cursor-not-allowed
            dark:border-neutral-600
            dark:focus:border-primary-400 dark:focus:ring-primary-400
            ${error ? 'border-error-500 dark:border-error-500 focus:border-error-500 focus:ring-error-500' : ''}
            ${className || ''}
          `}
          {...props}
        />
        {error && (
          <span className="text-caption text-error-600 dark:text-error-400">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span className="text-caption text-neutral-500 dark:text-neutral-400">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
