import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { BadgeProps } from './types';
import { badgeVariants } from './variants';

/**
 * Badge component following HeroUI design system
 * A badge is a small component that represents a status or notification
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
  children,
  content,
  variant = 'solid',
  color = 'default',
  size = 'md',
  shape = 'rectangle',
  placement = 'top-right',
  isOneChar = false,
  showOutline = false,
  isInvisible = false,
  disableAnimation = false,
  classNames,
  className,
  ...props
}, ref) => {
  // Determine if the badge should be treated as one character
  const actualIsOneChar = useMemo(() => {
    if (isOneChar) return true;
    
    // Auto-detect if content is a single character or number
    if (typeof content === 'string' || typeof content === 'number') {
      const str = String(content);
      return str.length === 1;
    }
    
    return false;
  }, [content, isOneChar]);

  // Generate component styles
  const styles = useMemo(() => {
    return badgeVariants({
      variant,
      color,
      size,
      shape,
      placement,
      isOneChar: actualIsOneChar,
      showOutline,
      isInvisible,
      disableAnimation,
    });
  }, [variant, color, size, shape, placement, actualIsOneChar, showOutline, isInvisible, disableAnimation]);

  // If no content is provided and no children, return children only
  if (!content && children) {
    return <>{children}</>;
  }

  // If only content is provided without children, render badge standalone
  if (content && !children) {
    return (
      <span
        ref={ref}
        className={twMerge(styles.badge(), classNames?.badge, className)}
        {...props}
      >
        {content}
      </span>
    );
  }

  // Render badge with children (positioned badge)
  return (
    <div
      ref={ref}
      className={twMerge(styles.base(), classNames?.base, className)}
      {...props}
    >
      {children}
      {content && (
        <span
          className={twMerge(styles.badge(), classNames?.badge)}
          aria-label={typeof content === 'string' ? content : 'Badge'}
        >
          {content}
        </span>
      )}
    </div>
  );
});

Badge.displayName = 'Badge';