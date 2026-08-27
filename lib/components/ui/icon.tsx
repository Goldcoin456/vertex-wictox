import React from 'react';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * Size of the icon
   * @default 'md'
   */
  size?: IconSize;
  /**
   * SVG path data or content
   */
  children?: React.ReactNode;
}

const sizeClasses: Record<IconSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const baseClasses = 'inline-flex items-center justify-center flex-shrink-0';

/**
 * Icon component for consistent icon sizing and styling.
 *
 * @example
 * ```tsx
 * <Icon size="md" className="text-primary-600">
 *   <path d="..." />
 * </Icon>
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 'md',
      className,
      children,
      viewBox = '0 0 24 24',
      fill = 'none',
      stroke = 'currentColor',
      strokeWidth = 2,
      strokeLinecap = 'round',
      strokeLinejoin = 'round',
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${className || ''}`}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

/**
 * Common icon: Chevron Right
 */
export const ChevronRightIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6" />
  </Icon>
);

/**
 * Common icon: Chevron Left
 */
export const ChevronLeftIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 24 24">
    <polyline points="15 18 9 12 15 6" />
  </Icon>
);

/**
 * Common icon: Check
 */
export const CheckIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);

/**
 * Common icon: X (close)
 */
export const XIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
);

/**
 * Common icon: Alert Circle
 */
export const AlertCircleIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Icon>
);

/**
 * Common icon: Search
 */
export const SearchIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Icon>
);
