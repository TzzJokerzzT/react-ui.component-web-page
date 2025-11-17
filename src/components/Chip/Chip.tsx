import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChipProps } from './types';
import { chipVariants } from './variants';

// Simple X icon for close button
const XMarkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/**
 * Chip component following HeroUI design system
 * A small block of essential information that represents an input, attribute, or action
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(({
  children,
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius = 'full',
  avatar,
  startContent,
  endContent,
  isDisabled = false,
  classNames,
  className,
  onClose,
  ...props
}, ref) => {
  // Determine if close button should be visible
  const isCloseButtonVisible = !!onClose;

  // Generate component styles
  const styles = useMemo(() => {
    return chipVariants({
      variant,
      color,
      size,
      radius,
      isDisabled,
      isCloseButtonVisible,
    });
  }, [variant, color, size, radius, isDisabled, isCloseButtonVisible]);

  // Render dot for dot variant
  const renderDot = () => {
    if (variant !== 'dot') return null;
    return (
      <span 
        className={twMerge(styles.dot(), classNames?.dot)}
        aria-hidden="true"
      />
    );
  };

  // Render avatar if provided
  const renderAvatar = () => {
    if (!avatar) return null;
    return (
      <span className={twMerge(styles.avatar(), classNames?.avatar)}>
        {avatar}
      </span>
    );
  };

  // Render start content
  const renderStartContent = () => {
    if (!startContent) return null;
    return startContent;
  };

  // Render end content or close button
  const renderEndContent = () => {
    if (onClose) {
      return (
        <button
          type="button"
          className={twMerge(styles.closeButton(), classNames?.closeButton)}
          onClick={onClose}
          aria-label="Close"
          disabled={isDisabled}
        >
          {endContent || <XMarkIcon className="w-3 h-3" />}
        </button>
      );
    }
    
    if (endContent) {
      return endContent;
    }
    
    return null;
  };

  return (
    <div
      ref={ref}
      className={twMerge(styles.base(), classNames?.base, className)}
      {...props}
    >
      {renderDot()}
      {renderAvatar()}
      {renderStartContent()}
      <span className={twMerge(styles.content(), classNames?.content)}>
        {children}
      </span>
      {renderEndContent()}
    </div>
  );
});

Chip.displayName = 'Chip';