import { forwardRef, useMemo, useCallback, useState } from 'react';
import { Key } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useAutocomplete } from './useAutocomplete';
import { AutocompleteItem } from './AutocompleteItem';
import { AutocompleteProps, AutocompleteItemData } from './types';
import { autocompleteVariants, inputWrapperVariants, popoverContentVariants } from './variants';

// Simple chevron down icon
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Simple X icon
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
 * Get item key from item data
 */
function getItemKey<T = AutocompleteItemData>(item: T, index: number): Key {
  if (typeof item === 'object' && item !== null) {
    const obj = item as any;
    return obj.key ?? obj.id ?? index;
  }
  return index;
}

/**
 * Get text value for filtering from item
 */
function getItemTextValue<T = AutocompleteItemData>(item: T): string {
  if (typeof item === 'object' && item !== null) {
    const obj = item as any;
    return obj.textValue || obj.label || obj.value || obj.title || String(obj.key || '');
  }
  return String(item);
}

/**
 * Main Autocomplete component following HeroUI design system
 */
export const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(({
  label,
  placeholder = "Search...",
  description,
  errorMessage,
  startContent,
  endContent,
  variant = 'flat',
  color = 'default',
  size = 'md',
  labelPlacement = 'inside',
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
  isInvalid = false,
  isClearable = true,
  fullWidth = true,
  disableAnimation = false,
  disableSelectorIconRotation = false,
  selectorIcon,
  clearIcon,
  className,
  classNames,
  popoverProps,
  listboxProps,
  inputProps,
  selectorButtonProps,
  clearButtonProps,
  children,
  ...otherProps
}, ref) => {
  // Local focus state for floating label behavior
  const [isFocused, setIsFocused] = useState(false);

  // Use the autocomplete hook for state management
  const {
    inputValue,
    selectedKey,
    isOpen,
    filteredItems,
    focusedKey,
    inputProps: hookInputProps,
    listboxProps: hookListboxProps,
    clearButtonProps: hookClearButtonProps,
    selectorButtonProps: hookSelectorButtonProps,
    containerRef,
    selectItem,
  } = useAutocomplete(otherProps);

  // Generate component styles
  const autocompleteClasses = useMemo(() => {
    return autocompleteVariants({
      variant,
      color,
      size,
      labelPlacement,
      isDisabled,
      fullWidth,
    });
  }, [variant, color, size, labelPlacement, isDisabled, fullWidth]);

  const inputWrapperClasses = useMemo(() => {
    return inputWrapperVariants({
      variant,
      color,
      size,
      isDisabled,
      isInvalid,
    });
  }, [variant, color, size, isDisabled, isInvalid]);

  const popoverClasses = useMemo(() => {
    return popoverContentVariants({
      disableAnimation,
    });
  }, [disableAnimation]);

  // Handle item selection
  const handleItemSelect = useCallback((key: Key) => {
    selectItem(key);
  }, [selectItem]);

  // Render items from filteredItems or children
  const renderItems = useCallback(() => {
    // If children are provided, render them directly
    if (children) {
      return children;
    }

    // Otherwise render from filteredItems
    return filteredItems.map((item, index) => {
      const itemKey = getItemKey(item, index);
      const textValue = getItemTextValue(item);
      
      if (typeof item === 'object' && item !== null) {
        const obj = item as any;
        return (
          <AutocompleteItem
            key={itemKey}
            itemKey={itemKey}
            textValue={textValue}
            isSelected={selectedKey === itemKey}
            isFocused={focusedKey === itemKey}
            variant={variant === 'underlined' ? 'flat' : variant}
            color={color}
            size={size}
            startContent={obj.startContent}
            endContent={obj.endContent}
            description={obj.description}
            onSelectionChange={handleItemSelect}
          >
            {obj.label || textValue}
          </AutocompleteItem>
        );
      }

      return (
        <AutocompleteItem
          key={itemKey}
          itemKey={itemKey}
          textValue={textValue}
          isSelected={selectedKey === itemKey}
          isFocused={focusedKey === itemKey}
          variant={variant === 'underlined' ? 'flat' : variant}
          color={color}
          size={size}
          onSelectionChange={handleItemSelect}
        >
          {textValue}
        </AutocompleteItem>
      );
    });
  }, [children, filteredItems, selectedKey, focusedKey, variant, color, size, handleItemSelect]);

  // Default selector icon
  const defaultSelectorIcon = useMemo(() => (
    <ChevronDownIcon 
      className={twMerge(
        "w-4 h-4 text-default-400 transition-transform",
        !disableSelectorIconRotation && isOpen && "rotate-180"
      )}
    />
  ), [disableSelectorIconRotation, isOpen]);

  // Default clear icon
  const defaultClearIcon = useMemo(() => (
    <XMarkIcon className="w-4 h-4 text-default-400" />
  ), []);

  // Show clear button when there's input value and clearable
  const showClearButton = isClearable && inputValue && !isDisabled && !isReadOnly;

  return (
    <div
      ref={(node) => {
        // Set both refs
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        if (containerRef) {
          containerRef.current = node;
        }
      }}
      className={twMerge(
        "relative", // Ensure dropdown positions relative to this container
        autocompleteClasses, 
        classNames?.base, 
        className
      )}
    >
      {/* Label (outside placement) */}
      {label && labelPlacement === 'outside' && (
        <label className="text-small font-medium text-foreground pb-1 block">
          {label}
          {isRequired && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      {/* Input wrapper */}
      <div 
        className={twMerge(inputWrapperClasses, classNames?.inputWrapper)}
        style={{ zIndex: 1 }} // Ensure input wrapper is above background but below dropdown
      >
        {/* Start content */}
        {startContent && (
          <div className="flex items-center">
            {startContent}
          </div>
        )}

        {/* Input field */}
        <input
          {...hookInputProps}
          {...inputProps}
          className={twMerge(
            "w-full bg-transparent outline-none placeholder:text-foreground-500",
            hookInputProps.className,
            inputProps?.className
          )}
          placeholder={
            // Only show placeholder when dropdown is open, has focus, or has value
            (isOpen || isFocused || inputValue) ? placeholder : ""
          }
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          onFocus={(e) => {
            setIsFocused(true);
            hookInputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            hookInputProps.onBlur?.(e);
          }}
        />

        {/* Label (inside placement) */}
        {label && labelPlacement === 'inside' && (
          <label 
            className={twMerge(
              "absolute left-3 transition-all duration-200 pointer-events-none z-10",
              "text-small text-foreground-500",
              "top-1/2 -translate-y-1/2 origin-left",
              // Float label when focused, open, or has value
              (inputValue || isOpen || isFocused) && [
                "text-tiny scale-85 -translate-y-[1.875rem] px-1 bg-content1",
                "text-foreground-600"
              ]
            )}
            style={{ zIndex: 10 }}
          >
            {label}
            {isRequired && <span className="text-danger ml-1">*</span>}
          </label>
        )}

        {/* End content wrapper */}
        <div className="flex items-center gap-2">
          {endContent}
          
          {/* Clear button */}
          {showClearButton && (
            <button
              {...hookClearButtonProps}
              {...clearButtonProps}
              className={twMerge(
                "p-1 rounded-small opacity-70 hover:opacity-100 transition-opacity",
                hookClearButtonProps.className,
                clearButtonProps?.className
              )}
            >
              {clearIcon || defaultClearIcon}
            </button>
          )}

          {/* Selector button */}
          <button
            {...hookSelectorButtonProps}
            {...selectorButtonProps}
            className={twMerge(
              "p-1 rounded-small opacity-70 hover:opacity-100 transition-opacity",
              hookSelectorButtonProps.className,
              selectorButtonProps?.className
            )}
            disabled={isDisabled}
          >
            {selectorIcon || defaultSelectorIcon}
          </button>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="text-tiny text-foreground-400 mt-1">
          {description}
        </div>
      )}

      {/* Error message */}
      {isInvalid && errorMessage && (
        <div className="text-tiny text-danger mt-1">
          {typeof errorMessage === 'function' 
            ? errorMessage({ isInvalid: true, validationErrors: [], validationDetails: {} })
            : errorMessage
          }
        </div>
      )}

      {/* Popover with listbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={disableAnimation ? undefined : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={disableAnimation ? undefined : { opacity: 0, y: -8 }}
            transition={{ 
              duration: disableAnimation ? 0 : 0.15,
              ease: "easeOut"
            }}
            className={twMerge(
              "absolute top-full left-0 right-0 mt-1 z-[9999]",
              popoverClasses,
              classNames?.popoverContent,
              popoverProps?.className
            )}
            style={{ 
              zIndex: 9999 // Ensure dropdown appears above all other elements
            }}
          >
            <div className={twMerge(
              "max-h-64 overflow-y-auto overflow-x-hidden bg-content1 rounded-medium",
              classNames?.listboxWrapper
            )}>
              <ul
                {...hookListboxProps}
                {...listboxProps}
                className={twMerge(
                  "w-full p-1 bg-content1 rounded-medium",
                  hookListboxProps.className,
                  listboxProps?.className
                )}
              >
                {renderItems()}
                
                {/* Empty state */}
                {filteredItems.length === 0 && !children && (
                  <li className="px-2 py-4 text-small text-foreground-400 text-center">
                    {listboxProps?.emptyContent || "No results found"}
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Autocomplete.displayName = 'Autocomplete';