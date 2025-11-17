/**
 * Autocomplete component exports
 * 
 * A comprehensive autocomplete/combobox component system following HeroUI design patterns.
 * Includes main component, item components, sections, hooks, types, and styling variants.
 */

// Main component
export { Autocomplete } from './Autocomplete';

// Item components
export { AutocompleteItem } from './AutocompleteItem';
export { AutocompleteSection } from './AutocompleteSection';

// Hooks
export { useAutocomplete } from './useAutocomplete';

// Types and interfaces
export type {
  // Props types
  AutocompleteProps,
  AutocompleteItemProps,
  AutocompleteSectionProps,
  
  // Data types
  AutocompleteItemData,
  AutocompleteSectionData,
  
  // Style types
  AutocompleteColor,
  AutocompleteSize,
  AutocompleteVariant,
  AutocompleteLabelPlacement,
  
  // Slots for styling customization
  AutocompleteSlots,
  AutocompleteItemSlots,
  AutocompleteSectionSlots,
  
  // Utility types
  MenuTriggerAction,
  ValidationBehavior,
  ValidationResult,
  ValidationError,
  FilterFunction,
} from './types';

// Variant functions and utilities
export {
  // Main variant functions
  autocompleteVariants,
  inputWrapperVariants,
  popoverContentVariants,
  listboxWrapperVariants,
  
  // Item variant functions
  autocompleteItemVariants,
  autocompleteItemSlotVariants,
  
  // Section variant functions
  autocompleteSectionVariants,
  autocompleteSectionSlotVariants,
  
  // Button variant functions
  clearButtonVariants,
  selectorButtonVariants,
  endContentWrapperVariants,
  
  // Helper variant functions
  inputVariants,
  labelVariants,
  helperTextVariants,
  sectionHeadingVariants,
  sectionGroupVariants,
  
  // Utility functions
  getAutocompleteClasses,
} from './variants';

// Variant prop types for external use
export type {
  AutocompleteVariantProps,
  InputWrapperVariantProps,
  AutocompleteItemVariantProps,
  AutocompleteSectionVariantProps,
} from './variants';