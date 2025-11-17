import React, { forwardRef, useCallback, useMemo } from 'react';
import { Key } from 'react';
import { twMerge } from 'tailwind-merge';
import { AutocompleteItemProps } from './types';
import { autocompleteItemSlotVariants } from './variants';

/**
 * AutocompleteItem component for individual list items in the autocomplete dropdown
 */
export const AutocompleteItem = forwardRef<HTMLLIElement, AutocompleteItemProps & {
  /** Whether this item is currently selected */
  isSelected?: boolean;
  /** Whether this item is currently focused */
  isFocused?: boolean;
  /** Whether this item is disabled */
  isDisabled?: boolean;
  /** Whether to show divider after this item */
  showDivider?: boolean;
  /** Current autocomplete variant for styling context */
  variant?: 'flat' | 'bordered' | 'faded' | 'solid' | 'light' | 'shadow';
  /** Current autocomplete color for styling context */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Current autocomplete size for styling context */
  size?: 'sm' | 'md' | 'lg';
  /** Item key for selection handling */
  itemKey?: Key;
  /** Selection handler */
  onSelectionChange?: (key: Key) => void;
}>(({
  children,
  className,
  classNames,
  textValue,
  startContent,
  endContent,
  description,
  isSelected = false,
  isFocused = false,
  isDisabled = false,
  showDivider = false,
  variant = 'flat',
  color = 'default',
  size = 'md',
  itemKey,
  onSelectionChange,
  onPress,
  onPressStart,
  onPressEnd,
  onClick,
  onMouseDown,
  onKeyDown,
  ...otherProps
}, ref) => {
  // Local hover state
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Handle item selection
  const handlePress = useCallback(() => {
    if (isDisabled) return;
    
    onPress?.();
    
    if (itemKey !== undefined && onSelectionChange) {
      onSelectionChange(itemKey);
    }
  }, [isDisabled, onPress, itemKey, onSelectionChange]);

  // Handle mouse interactions
  const handleClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    if (isDisabled) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    onClick?.(e);
    handlePress();
  }, [isDisabled, onClick, handlePress]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    if (isDisabled) return;
    
    // Prevent input blur when clicking on item
    e.preventDefault();
    
    onMouseDown?.(e);
    onPressStart?.();
  }, [isDisabled, onMouseDown, onPressStart]);

  const handleMouseUp = useCallback(() => {
    if (isDisabled) return;
    onPressEnd?.();
  }, [isDisabled, onPressEnd]);

  // Handle keyboard interactions
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLLIElement>) => {
    if (isDisabled) return;
    
    onKeyDown?.(e);
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      handlePress();
    }
  }, [isDisabled, onKeyDown, handlePress]);

  // Generate slot styles
  const slots = useMemo(() => {
    return autocompleteItemSlotVariants({
      variant,
      color,
      size,
      isSelected,
      isFocused,
      isDisabled,
      showDivider,
    });
  }, [variant, color, size, isSelected, isFocused, isDisabled, showDivider]);

  // Determine if we should show description
  const hasDescription = description !== undefined && description !== null && description !== '';
  const hasStartContent = startContent !== undefined && startContent !== null;
  const hasEndContent = endContent !== undefined && endContent !== null;

  return (
    <li
      ref={ref}
      className={twMerge(slots.base(), classNames?.base, className)}
      role="option"
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      tabIndex={isFocused ? 0 : -1}
      data-key={itemKey}
      data-selected={isSelected}
      data-focused={isFocused}
      data-disabled={isDisabled}
      data-hover={isHovered}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      {...otherProps}
    >
      <div className={twMerge(slots.wrapper(), classNames?.wrapper)}>
        {/* Start content */}
        {hasStartContent && (
          <div className={twMerge(slots.startContent(), classNames?.startContent)}>
            {startContent}
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          {/* Title/main text */}
          <div className={twMerge(slots.title(), classNames?.title)}>
            {children || textValue}
          </div>

          {/* Description */}
          {hasDescription && (
            <div className={twMerge(slots.description(), classNames?.description)}>
              {description}
            </div>
          )}
        </div>

        {/* End content */}
        {hasEndContent && (
          <div className={twMerge(slots.endContent(), classNames?.endContent)}>
            {endContent}
          </div>
        )}
      </div>
    </li>
  );
});

AutocompleteItem.displayName = 'AutocompleteItem';