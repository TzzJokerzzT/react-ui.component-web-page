import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AutocompleteSectionProps } from './types';
import { autocompleteSectionSlotVariants } from './variants';

/**
 * AutocompleteSection component for grouping items in the autocomplete dropdown
 */
export const AutocompleteSection = forwardRef<HTMLDivElement, AutocompleteSectionProps & {
  /** Whether to show divider after this section */
  showDivider?: boolean;
}>(({
  title,
  children,
  className,
  classNames,
  showDivider = false,
  ...otherProps
}, ref) => {

  // Generate slot styles
  const slots = useMemo(() => {
    return autocompleteSectionSlotVariants({
      showDivider,
    });
  }, [showDivider]);

  // Determine if we should show title
  const hasTitle = title !== undefined && title !== null && title !== '';

  return (
    <div
      ref={ref}
      className={twMerge(slots.base(), classNames?.base, className)}
      role="group"
      {...otherProps}
    >
      {/* Section title/heading */}
      {hasTitle && (
        <div 
          className={twMerge(slots.heading(), classNames?.heading)}
          role="presentation"
        >
          {title}
        </div>
      )}

      {/* Section content group */}
      <div 
        className={twMerge(slots.group(), classNames?.group)}
        role="group"
      >
        {children}
      </div>

      {/* Divider */}
      {showDivider && (
        <div 
          className={twMerge(slots.divider(), classNames?.divider)}
          role="separator"
        />
      )}
    </div>
  );
});

AutocompleteSection.displayName = 'AutocompleteSection';