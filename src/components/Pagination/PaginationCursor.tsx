import { forwardRef } from 'react';
import { usePaginationContext } from './Pagination';
import { 
  getPaginationItemBase,
  getPaginationCursorVariant,
  getPaginationAnimation 
} from './variants';
import type { PaginationCursorProps } from './types';

/**
 * Base cursor component for navigation buttons
 */
const BasePaginationCursor = forwardRef<HTMLButtonElement, PaginationCursorProps>(
  (
    {
      direction,
      isDisabled = false,
      onClick,
      children,
      className = '',
      size: sizeProp,
      color: colorProp,
      variant: variantProp,
      radius: radiusProp,
      'aria-label': ariaLabel,
      'data-testid': testId,
    },
    ref,
  ) => {
    // Get context values with fallbacks
    const context = usePaginationContext();
    
    const size = sizeProp ?? context.size;
    const color = colorProp ?? context.color;
    const variant = variantProp ?? context.variant;
    const radius = radiusProp ?? context.radius;
    const contextDisabled = context.isDisabled;
    const disableAnimation = context.disableAnimation;

    // Final disabled state
    const disabled = contextDisabled || isDisabled;

    // Generate classes
    const baseClasses = getPaginationItemBase(size, radius);
    const variantClasses = getPaginationCursorVariant(color, variant, disabled);
    const animationClasses = getPaginationAnimation(disableAnimation, disabled);

    // Handle click
    const handleClick = () => {
      if (disabled) return;
      onClick?.();
    };

    // Generate default aria-label
    const defaultAriaLabel = 
      direction === 'prev' 
        ? 'Go to previous page'
        : 'Go to next page';

    // Combined classes
    const combinedClasses = `${baseClasses} ${variantClasses} ${animationClasses} ${className}`.trim();

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={combinedClasses}
        aria-label={ariaLabel ?? defaultAriaLabel}
        data-testid={testId}
      >
        {children}
      </button>
    );
  },
);

BasePaginationCursor.displayName = 'BasePaginationCursor';

/**
 * Previous page button component
 */
export const PaginationPrevious = forwardRef<HTMLButtonElement, Omit<PaginationCursorProps, 'direction'>>(
  (props, ref) => (
    <BasePaginationCursor
      ref={ref}
      direction="prev"
      aria-label="Go to previous page"
      {...props}
    />
  ),
);

PaginationPrevious.displayName = 'PaginationPrevious';

/**
 * Next page button component
 */
export const PaginationNext = forwardRef<HTMLButtonElement, Omit<PaginationCursorProps, 'direction'>>(
  (props, ref) => (
    <BasePaginationCursor
      ref={ref}
      direction="next"
      aria-label="Go to next page"
      {...props}
    />
  ),
);

PaginationNext.displayName = 'PaginationNext';

/**
 * First page button component
 */
export const PaginationFirst = forwardRef<HTMLButtonElement, Omit<PaginationCursorProps, 'direction'>>(
  (props, ref) => (
    <BasePaginationCursor
      ref={ref}
      direction="prev"
      aria-label="Go to first page"
      {...props}
    />
  ),
);

PaginationFirst.displayName = 'PaginationFirst';

/**
 * Last page button component
 */
export const PaginationLast = forwardRef<HTMLButtonElement, Omit<PaginationCursorProps, 'direction'>>(
  (props, ref) => (
    <BasePaginationCursor
      ref={ref}
      direction="next"
      aria-label="Go to last page"
      {...props}
    />
  ),
);

PaginationLast.displayName = 'PaginationLast';