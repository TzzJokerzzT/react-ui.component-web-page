import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { CodeProps } from './types';
import { codeVariants } from './variants';

/**
 * Code component following HeroUI design system
 * Used to display inline code snippets with syntax highlighting
 */
export const Code = forwardRef<HTMLElement, CodeProps>(({
  children,
  size = 'sm',
  color = 'default',
  radius = 'sm',
  className,
  disableAnimation = false,
  ...props
}, ref) => {
  // Generate component styles
  const styles = codeVariants({
    size,
    color,
    radius,
    disableAnimation,
  });

  return (
    <code
      ref={ref}
      className={twMerge(styles, className)}
      {...props}
    >
      {children}
    </code>
  );
});

Code.displayName = 'Code';
