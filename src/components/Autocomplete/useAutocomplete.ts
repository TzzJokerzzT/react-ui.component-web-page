import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Key, FocusEvent, KeyboardEvent } from 'react';
import { 
  AutocompleteProps, 
  UseAutocompleteReturn, 
  AutocompleteItemData,
  FilterFunction,
  MenuTriggerAction 
} from './types';

/**
 * Default filter function - simple string matching
 */
const defaultFilterFunction: FilterFunction = (textValue: string, inputValue: string) => {
  return textValue.toLowerCase().includes(inputValue.toLowerCase());
};

/**
 * Convert items array to typed array with proper keys
 */
function normalizeItems<T = AutocompleteItemData>(items: Iterable<T> | undefined): T[] {
  if (!items) return [];
  return Array.from(items);
}

/**
 * Get text value for filtering from item
 */
function getItemTextValue<T = AutocompleteItemData>(item: T): string {
  if (typeof item === 'object' && item !== null) {
    // Try common text properties
    const obj = item as any;
    return obj.textValue || obj.label || obj.value || obj.title || String(obj.key || '');
  }
  return String(item);
}

/**
 * Get item key
 */
function getItemKey<T = AutocompleteItemData>(item: T, index: number): Key {
  if (typeof item === 'object' && item !== null) {
    const obj = item as any;
    return obj.key ?? obj.id ?? index;
  }
  return index;
}

/**
 * Custom useAutocomplete hook for managing autocomplete state and behavior
 */
export function useAutocomplete<T = AutocompleteItemData>(
  props: AutocompleteProps<T>
): UseAutocompleteReturn<T> {
  const {
    items,
    defaultItems,
    inputValue: controlledInputValue,
    defaultInputValue = '',
    selectedKey: controlledSelectedKey,
    defaultSelectedKey,
    menuTrigger = 'input',
    allowsCustomValue = false,
    allowsEmptyCollection = true,
    shouldCloseOnBlur = true,
    defaultFilter = defaultFilterFunction,
    filterOptions,
    isDisabled = false,
    isReadOnly = false,
    autoFocus = false,
    onInputChange,
    onSelectionChange,
    onOpenChange,
    onFocus,
    onBlur,
    onFocusChange,
    onKeyDown,
    onKeyUp,
    onClose,
    onClear,
    ...otherProps
  } = props;

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Internal state
  const [internalInputValue, setInternalInputValue] = useState(defaultInputValue);
  const [internalSelectedKey, setInternalSelectedKey] = useState<Key | null>(defaultSelectedKey || null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading] = useState(false); // Remove setIsLoading as it's not used yet
  const [focusedKey, setFocusedKey] = useState<Key | null>(null);

  // Controlled vs uncontrolled values
  const inputValue = controlledInputValue ?? internalInputValue;
  const selectedKey = controlledSelectedKey ?? internalSelectedKey;

  // Normalize items
  const normalizedItems = useMemo(() => {
    const itemsToUse = items ?? defaultItems;
    return normalizeItems(itemsToUse);
  }, [items, defaultItems]);

  // Filter items based on input value
  const filteredItems = useMemo(() => {
    if (!inputValue.trim() && menuTrigger !== 'focus') {
      return allowsEmptyCollection ? normalizedItems : [];
    }

    if (!inputValue.trim()) {
      return normalizedItems;
    }

    return normalizedItems.filter((item) => {
      const textValue = getItemTextValue(item);
      return defaultFilter(textValue, inputValue);
    });
  }, [normalizedItems, inputValue, defaultFilter, allowsEmptyCollection, menuTrigger]);

  // Handle input value changes
  const handleInputChange = useCallback((value: string) => {
    if (controlledInputValue === undefined) {
      setInternalInputValue(value);
    }
    
    onInputChange?.(value);

    // Open menu on input if configured
    if (menuTrigger === 'input' && value.trim() && !isOpen) {
      setIsOpen(true);
      onOpenChange?.(true, 'input');
    }

    // Clear selection if input doesn't match selected item
    if (selectedKey !== null && !allowsCustomValue) {
      const selectedItem = normalizedItems.find((item, index) => getItemKey(item, index) === selectedKey);
      if (selectedItem && getItemTextValue(selectedItem) !== value) {
        if (controlledSelectedKey === undefined) {
          setInternalSelectedKey(null);
        }
        onSelectionChange?.(null as any);
      }
    }
  }, [
    controlledInputValue,
    onInputChange,
    menuTrigger,
    isOpen,
    onOpenChange,
    selectedKey,
    allowsCustomValue,
    normalizedItems,
    controlledSelectedKey,
    onSelectionChange
  ]);

  // Handle selection changes
  const handleSelectionChange = useCallback((key: Key) => {
    if (controlledSelectedKey === undefined) {
      setInternalSelectedKey(key);
    }
    
    onSelectionChange?.(key);

    // Update input value with selected item text
    const selectedItem = normalizedItems.find((item, index) => getItemKey(item, index) === key);
    if (selectedItem) {
      const textValue = getItemTextValue(selectedItem);
      handleInputChange(textValue);
    }

    // Close menu after selection
    setIsOpen(false);
    onOpenChange?.(false);
    onClose?.();
  }, [
    controlledSelectedKey,
    onSelectionChange,
    normalizedItems,
    handleInputChange,
    onOpenChange,
    onClose
  ]);

  // Handle open state changes
  const handleOpenChange = useCallback((open: boolean, trigger?: MenuTriggerAction) => {
    setIsOpen(open);
    onOpenChange?.(open, trigger);
    
    if (!open) {
      setFocusedKey(null);
      onClose?.();
    }
  }, [onOpenChange, onClose]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    onKeyDown?.(e);

    if (isDisabled || isReadOnly) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpenChange?.(true, 'manual');
        } else {
          // Navigate to next item
          const currentIndex = focusedKey !== null 
            ? filteredItems.findIndex((item, index) => getItemKey(item, index) === focusedKey)
            : -1;
          const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
          if (filteredItems[nextIndex]) {
            setFocusedKey(getItemKey(filteredItems[nextIndex], nextIndex));
          }
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpenChange?.(true, 'manual');
        } else {
          // Navigate to previous item
          const currentIndex = focusedKey !== null 
            ? filteredItems.findIndex((item, index) => getItemKey(item, index) === focusedKey)
            : filteredItems.length;
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
          if (filteredItems[prevIndex]) {
            setFocusedKey(getItemKey(filteredItems[prevIndex], prevIndex));
          }
        }
        break;

      case 'Enter':
        e.preventDefault();
        if (isOpen && focusedKey !== null) {
          handleSelectionChange(focusedKey);
        }
        break;

      case 'Escape':
        e.preventDefault();
        if (isOpen) {
          setIsOpen(false);
          onOpenChange?.(false);
          onClose?.();
        }
        break;

      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
          onOpenChange?.(false);
          onClose?.();
        }
        break;
    }
  }, [
    onKeyDown,
    isDisabled,
    isReadOnly,
    isOpen,
    onOpenChange,
    focusedKey,
    filteredItems,
    handleSelectionChange,
    onClose
  ]);

  // Focus handling
  const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
    onFocusChange?.(true);

    if (menuTrigger === 'focus' && !isOpen) {
      setIsOpen(true);
      onOpenChange?.(true, 'focus');
    }
  }, [onFocus, onFocusChange, menuTrigger, isOpen, onOpenChange]);

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    onFocusChange?.(false);

    if (shouldCloseOnBlur && isOpen) {
      // Delay to allow for selection clicks
      setTimeout(() => {
        setIsOpen(false);
        onOpenChange?.(false);
        onClose?.();
      }, 150);
    }
  }, [onBlur, onFocusChange, shouldCloseOnBlur, isOpen, onOpenChange, onClose]);

  // Clear functionality
  const clearValue = useCallback(() => {
    handleInputChange('');
    if (controlledSelectedKey === undefined) {
      setInternalSelectedKey(null);
    }
    onSelectionChange?.(null as any);
    onClear?.();
    
    // Focus input after clearing
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [handleInputChange, controlledSelectedKey, onSelectionChange, onClear]);

  // Select item method
  const selectItem = useCallback((key: Key) => {
    handleSelectionChange(key);
  }, [handleSelectionChange]);

  // Open/close methods
  const open = useCallback(() => {
    if (!isOpen) {
      handleOpenChange(true, 'manual');
    }
  }, [isOpen, handleOpenChange]);

  const close = useCallback(() => {
    if (isOpen) {
      handleOpenChange(false);
    }
  }, [isOpen, handleOpenChange]);

  // Auto focus effect
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Click outside effect
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onOpenChange?.(false);
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onOpenChange, onClose]);

  // Input props - exclude 'size' to avoid conflict with HTML input size attribute
  const { size: _omittedSize, ...inputHTMLProps } = otherProps;
  const inputProps = useMemo(() => ({
    ...inputHTMLProps,
    ref: inputRef,
    value: inputValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value),
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onKeyUp,
    disabled: isDisabled,
    readOnly: isReadOnly,
    'aria-expanded': isOpen,
    'aria-haspopup': 'listbox' as const,
    'aria-autocomplete': 'list' as const,
    role: 'combobox',
  }), [
    inputHTMLProps,
    inputValue,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleKeyDown,
    onKeyUp,
    isDisabled,
    isReadOnly,
    isOpen
  ]);

  // Listbox props
  const listboxProps = useMemo(() => ({
    role: 'listbox' as const,
    'aria-label': 'Suggestions',
  }), []);

  // Popover props
  const popoverProps = useMemo(() => ({
    isOpen,
    onOpenChange: handleOpenChange,
  }), [isOpen, handleOpenChange]);

  // Clear button props
  const clearButtonProps = useMemo(() => ({
    type: 'button' as const,
    onClick: clearValue,
    'aria-label': 'Clear',
    tabIndex: -1,
  }), [clearValue]);

  // Selector button props
  const selectorButtonProps = useMemo(() => ({
    type: 'button' as const,
    onClick: () => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    },
    'aria-label': isOpen ? 'Close menu' : 'Open menu',
    'aria-expanded': isOpen,
    tabIndex: -1,
  }), [isOpen, close, open]);

  return {
    inputValue,
    selectedKey,
    isOpen,
    isLoading,
    filteredItems,
    focusedKey,
    inputProps,
    listboxProps,
    popoverProps,
    clearButtonProps,
    selectorButtonProps,
    containerRef,
    clearValue,
    selectItem,
    close,
    open,
    setInputValue: handleInputChange,
    setSelectedKey: (key: Key | null) => {
      if (key === null) {
        if (controlledSelectedKey === undefined) {
          setInternalSelectedKey(null);
        }
        onSelectionChange?.(null as any);
      } else {
        handleSelectionChange(key);
      }
    },
    setIsOpen: handleOpenChange,
  };
}