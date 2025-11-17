import { forwardRef } from 'react';
import { usePaginationContext } from './Pagination';
import { 
  getPaginationItemBase,
  getPaginationVariant,
  getPaginationAnimation 
} from './variants';
import type { PaginationItemProps } from './types';

/**
 * Individual pagination item component
 */
export const PaginationItem = forwardRef<HTMLButtonElement, PaginationItemProps>(
  (
    {
      value,
      type = 'page',
      isActive = false,
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
    const variantClasses = getPaginationVariant(color, variant, isActive, disabled);
    const animationClasses = getPaginationAnimation(disableAnimation, disabled);

    // Handle click
    const handleClick = () => {
      if (disabled || type === 'dots') return;
      onClick?.(value);
    };

    // Generate aria-label
    const defaultAriaLabel = 
      type === 'page' 
        ? isActive 
          ? `Current page, page ${value}`
          : `Go to page ${value}`
        : ariaLabel;

    // Combined classes
    const combinedClasses = `${baseClasses} ${variantClasses} ${animationClasses} ${className}`.trim();

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={combinedClasses}
        aria-label={defaultAriaLabel}
        aria-current={isActive ? 'page' : undefined}
        data-testid={testId}
      >
        {children ?? value}
      </button>
    );
  },
);

PaginationItem.displayName = 'PaginationItem';