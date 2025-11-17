import { ReactNode, ComponentPropsWithoutRef, Key, FocusEvent, KeyboardEvent } from 'react';
import React from 'react';

/**
 * Autocomplete color variants following HeroUI design system
 */
export type AutocompleteColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

/**
 * Autocomplete size variants
 */
export type AutocompleteSize = 'sm' | 'md' | 'lg';

/**
 * Autocomplete variant styles
 */
export type AutocompleteVariant = 'flat' | 'bordered' | 'faded' | 'underlined';

/**
 * Autocomplete label placement options
 */
export type AutocompleteLabelPlacement = 'inside' | 'outside' | 'outside-left';

/**
 * Menu trigger behavior
 */
export type MenuTriggerAction = 'focus' | 'input' | 'manual';

/**
 * Validation behavior types
 */
export type ValidationBehavior = 'native' | 'aria';

/**
 * Validation result interface
 */
export interface ValidationResult {
  isInvalid: boolean;
  validationErrors: string[];
  validationDetails: Record<string, any>;
}

/**
 * Validation error type
 */
export type ValidationError = string | string[];

/**
 * Filter function type
 */
export type FilterFunction = (textValue: string, inputValue: string) => boolean;

/**
 * Generic item type for collections
 */
export interface AutocompleteItemData {
  key: Key;
  label: string;
  value?: string;
  description?: string;
  isDisabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  className?: string;
  textValue?: string;
}

/**
 * Section data for grouped items
 */
export interface AutocompleteSectionData {
  key: Key;
  title?: string;
  items: AutocompleteItemData[];
  className?: string;
}

/**
 * Autocomplete slots for styling customization
 */
export interface AutocompleteSlots {
  /** Main wrapper around input and popover */
  base: string;
  /** Input wrapper around the input field */
  inputWrapper: string;
  /** Wrapper around the listbox content */
  listboxWrapper: string;
  /** Popover content container */
  popoverContent: string;
  /** Wrapper for end content (clear + selector buttons) */
  endContentWrapper: string;
  /** Clear button styling */
  clearButton: string;
  /** Selector button styling */
  selectorButton: string;
}

/**
 * AutocompleteItem slots
 */
export interface AutocompleteItemSlots {
  /** Base wrapper for the item */
  base: string;
  /** Content wrapper */
  wrapper: string;
  /** Title text */
  title: string;
  /** Description text */
  description: string;
  /** Start content wrapper */
  startContent: string;
  /** End content wrapper */
  endContent: string;
}

/**
 * AutocompleteSection slots
 */
export interface AutocompleteSectionSlots {
  /** Base wrapper for the section */
  base: string;
  /** Section heading */
  heading: string;
  /** Group of items */
  group: string;
  /** Divider */
  divider: string;
}

/**
 * Base Autocomplete component props
 */
export interface AutocompleteProps<T = AutocompleteItemData> extends Omit<ComponentPropsWithoutRef<"input">, "color" | "size" | "children" | "onChange" | "onSelect"> {
  /** Content items (for static lists) */
  children?: ReactNode;
  
  /** Label for the autocomplete */
  label?: ReactNode;
  
  /** Visual variant */
  variant?: AutocompleteVariant;
  
  /** Color theme */
  color?: AutocompleteColor;
  
  /** Size variant */
  size?: AutocompleteSize;
  
  /** Items collection (for dynamic lists) */
  items?: Iterable<T>;
  
  /** Default items for uncontrolled usage */
  defaultItems?: Iterable<T>;
  
  /** Controlled input value */
  inputValue?: string;
  
  /** Default input value for uncontrolled usage */
  defaultInputValue?: string;
  
  /** Allow custom values not in the list */
  allowsCustomValue?: boolean;
  
  /** Allow empty collections */
  allowsEmptyCollection?: boolean;
  
  /** Close popover on blur */
  shouldCloseOnBlur?: boolean;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Description text */
  description?: ReactNode;
  
  /** When to trigger menu opening */
  menuTrigger?: MenuTriggerAction;
  
  /** Label placement */
  labelPlacement?: AutocompleteLabelPlacement;
  
  /** Controlled selected key */
  selectedKey?: Key;
  
  /** Default selected key for uncontrolled usage */
  defaultSelectedKey?: Key;
  
  /** Disabled item keys */
  disabledKeys?: 'all' | Key[];
  
  /** Error message */
  errorMessage?: ReactNode | ((v: ValidationResult) => ReactNode);
  
  /** Validation function */
  validate?: (value: { inputValue: string; selectedKey: Key }) => ValidationError | true | null | undefined;
  
  /** Validation behavior */
  validationBehavior?: ValidationBehavior;
  
  /** Start content */
  startContent?: ReactNode;
  
  /** End content */
  endContent?: ReactNode;
  
  /** Auto focus */
  autoFocus?: boolean;
  
  /** Custom filter function */
  defaultFilter?: FilterFunction;
  
  /** Filter options for Intl.Collator */
  filterOptions?: Intl.CollatorOptions;
  
  /** Maximum listbox height for virtualization */
  maxListboxHeight?: number;
  
  /** Item height for virtualization */
  itemHeight?: number;
  
  /** Enable virtualization */
  isVirtualized?: boolean;
  
  /** Read-only state */
  isReadOnly?: boolean;
  
  /** Required state */
  isRequired?: boolean;
  
  /** Invalid state */
  isInvalid?: boolean;
  
  /** Disabled state */
  isDisabled?: boolean;
  
  /** Full width */
  fullWidth?: boolean;
  
  /** Custom selector icon */
  selectorIcon?: ReactNode;
  
  /** Custom clear icon */
  clearIcon?: ReactNode;
  
  /** Show scroll indicators */
  showScrollIndicators?: boolean;
  
  /** Allow clearing */
  isClearable?: boolean;
  
  /** Disable animations */
  disableAnimation?: boolean;
  
  /** Disable selector icon rotation */
  disableSelectorIconRotation?: boolean;
  
  /** Custom class names for slots */
  classNames?: Partial<Record<keyof AutocompleteSlots, string>>;
  
  /** Custom popover props */
  popoverProps?: ComponentPropsWithoutRef<"div"> & {
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    placement?: string;
    offset?: number;
  };
  
  /** Custom listbox props */
  listboxProps?: ComponentPropsWithoutRef<"ul"> & {
    emptyContent?: ReactNode;
  };
  
  /** Custom input props */
  inputProps?: ComponentPropsWithoutRef<"input">;
  
  /** Custom scroll shadow props */
  scrollShadowProps?: ComponentPropsWithoutRef<"div"> & {
    hideScrollBar?: boolean;
  };
  
  /** Custom selector button props */
  selectorButtonProps?: ComponentPropsWithoutRef<"button">;
  
  /** Custom clear button props */
  clearButtonProps?: ComponentPropsWithoutRef<"button">;
  
  /** Event Handlers */
  onOpenChange?: (isOpen: boolean, menuTrigger?: MenuTriggerAction) => void;
  onInputChange?: (value: string) => void;
  onSelectionChange?: (key: Key) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocusChange?: (isFocused: boolean) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
  onClose?: () => void;
  onClear?: () => void;
}

/**
 * AutocompleteItem component props
 */
export interface AutocompleteItemProps extends ComponentPropsWithoutRef<"li"> {
  /** Unique key for the item */
  key?: Key;
  
  /** Item text value for filtering */
  textValue?: string;
  
  /** Start content */
  startContent?: ReactNode;
  
  /** End content */
  endContent?: ReactNode;
  
  /** Description text */
  description?: ReactNode;
  
  /** Custom class names for slots */
  classNames?: Partial<Record<keyof AutocompleteItemSlots, string>>;
  
  /** Event handlers */
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;
}

/**
 * AutocompleteSection component props
 */
export interface AutocompleteSectionProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Section title */
  title?: ReactNode;
  
  /** Show divider */
  showDivider?: boolean;
  
  /** Custom class names for slots */
  classNames?: Partial<Record<keyof AutocompleteSectionSlots, string>>;
}

/**
 * Hook return type for useAutocomplete
 */
export interface UseAutocompleteReturn<T = AutocompleteItemData> {
  /** Input value state */
  inputValue: string;
  
  /** Selected key state */
  selectedKey: Key | null;
  
  /** Open state */
  isOpen: boolean;
  
  /** Loading state */
  isLoading: boolean;
  
  /** Filtered items */
  filteredItems: T[];
  
  /** Focused item key */
  focusedKey: Key | null;
  
  /** Input props */
  inputProps: ComponentPropsWithoutRef<"input"> & {
    ref: React.RefObject<HTMLInputElement | null>;
  };
  
  /** Listbox props */
  listboxProps: ComponentPropsWithoutRef<"ul">;
  
  /** Popover props */
  popoverProps: {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
  };
  
  /** Clear button props */
  clearButtonProps: ComponentPropsWithoutRef<"button">;
  
  /** Selector button props */
  selectorButtonProps: ComponentPropsWithoutRef<"button">;
  
  /** Container ref for click outside detection */
  containerRef: React.RefObject<HTMLDivElement | null>;
  
  /** Methods */
  clearValue: () => void;
  selectItem: (key: Key) => void;
  close: () => void;
  open: () => void;
  
  /** State setters */
  setInputValue: (value: string) => void;
  setSelectedKey: (key: Key | null) => void;
  setIsOpen: (isOpen: boolean) => void;
}

/**
 * Async loading state
 */
export interface AsyncLoadingState {
  isLoading: boolean;
  hasMore: boolean;
  error?: string;
}

/**
 * Async list hook return type
 */
export interface UseAsyncListReturn<T> {
  items: T[];
  isLoading: boolean;
  error?: string;
  loadMore: () => void;
  reload: () => void;
  setFilterText: (text: string) => void;
}

/**
 * Collection item generic type
 */
export type CollectionItem<T = any> = {
  key: Key;
  type: 'item';
  value: T;
  textValue: string;
  props: AutocompleteItemProps;
};

/**
 * Collection section generic type
 */
export type CollectionSection<T = any> = {
  key: Key;
  type: 'section';
  props: AutocompleteSectionProps;
  items: CollectionItem<T>[];
};

/**
 * Collection node type
 */
export type CollectionNode<T = any> = CollectionItem<T> | CollectionSection<T>;

/**
 * Collection interface
 */
export interface Collection<T = any> {
  size: number;
  getKeys: () => Iterable<Key>;
  getKeyBefore: (key: Key) => Key | null;
  getKeyAfter: (key: Key) => Key | null;
  getFirstKey: () => Key | null;
  getLastKey: () => Key | null;
  getItem: (key: Key) => CollectionNode<T> | null;
}

/**
 * Default autocomplete item shape
 */
export interface DefaultAutocompleteItem {
  key: Key;
  label: string;
  value?: string;
  description?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  textValue?: string;
}