import type { ReactNode, RefObject } from "react";

/**
 * Input size variants
 */
export type InputSize = "sm" | "md" | "lg";

/**
 * Input color variants
 */
export type InputColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

/**
 * Input visual variants
 */
export type InputVariant = "flat" | "bordered" | "faded" | "underlined";

/**
 * Input radius variants
 */
export type InputRadius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Label placement options
 */
export type InputLabelPlacement = "inside" | "outside" | "outside-left";

/**
 * Input type variants
 */
export type InputType = "text" | "email" | "url" | "password" | "tel" | "search" | "file" | "number";

/**
 * Validation behavior options
 */
export type ValidationBehavior = "native" | "aria";

/**
 * Validation result interface
 */
export interface ValidationResult {
  /** Indicates whether the field value is valid */
  isInvalid: boolean;
  /** Array of validation errors */
  validationErrors: string[];
  /** Details about native validation state */
  validationDetails: {
    badInput?: boolean;
    patternMismatch?: boolean;
    rangeOverflow?: boolean;
    rangeUnderflow?: boolean;
    stepMismatch?: boolean;
    tooLong?: boolean;
    tooShort?: boolean;
    typeMismatch?: boolean;
    valueMissing?: boolean;
    valid?: boolean;
  };
}

/**
 * Custom validation error type
 */
export type ValidationError = string | string[];

/**
 * Input class names for different slots
 */
export interface InputClassNames {
  /** Base wrapper element */
  base?: string;
  /** Label element */
  label?: string;
  /** Main wrapper for outside label placements */
  mainWrapper?: string;
  /** Input wrapper element */
  inputWrapper?: string;
  /** Inner wrapper for input and content */
  innerWrapper?: string;
  /** Input element itself */
  input?: string;
  /** Clear button element */
  clearButton?: string;
  /** Helper wrapper for description and error */
  helperWrapper?: string;
  /** Description text element */
  description?: string;
  /** Error message element */
  errorMessage?: string;
}

/**
 * Main Input component props interface
 * Based on HeroUI Input component API
 */
export interface InputProps {
  // Content
  /** Input label */
  label?: ReactNode;
  /** Input placeholder text */
  placeholder?: string;
  /** Input description text */
  description?: ReactNode;
  /** Error message - can be static or function */
  errorMessage?: ReactNode | ((validation: ValidationResult) => ReactNode);
  /** Content to display at the start of the input */
  startContent?: ReactNode;
  /** Content to display at the end of the input */
  endContent?: ReactNode;

  // Value & Control
  /** Controlled input value */
  value?: string;
  /** Default value for uncontrolled input */
  defaultValue?: string;
  
  // Visual Properties
  /** Visual variant of the input */
  variant?: InputVariant;
  /** Color theme */
  color?: InputColor;
  /** Size variant */
  size?: InputSize;
  /** Border radius */
  radius?: InputRadius;
  /** Label placement */
  labelPlacement?: InputLabelPlacement;
  /** Whether input takes full width */
  fullWidth?: boolean;
  
  // Input Properties
  /** Input type */
  type?: InputType;
  /** Minimum length validation */
  minLength?: number;
  /** Maximum length validation */
  maxLength?: number;
  /** Pattern for validation */
  pattern?: string;
  
  // States
  /** Whether the input is required */
  isRequired?: boolean;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** Whether the input is read-only */
  isReadOnly?: boolean;
  /** Whether the input has validation errors */
  isInvalid?: boolean;
  /** Whether to show clear button */
  isClearable?: boolean;
  
  // Animation & Styling
  /** Whether to disable animations */
  disableAnimation?: boolean;
  /** Custom class names for different parts */
  classNames?: Partial<InputClassNames>;
  /** Additional CSS class */
  className?: string;
  
  // Validation
  /** Custom validation function */
  validate?: (value: string) => ValidationError | true | null | undefined;
  /** Validation behavior mode */
  validationBehavior?: ValidationBehavior;
  
  // Refs
  /** Ref to the base wrapper element */
  baseRef?: RefObject<HTMLDivElement>;
  
  // Events
  /** Native change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Value change handler (HeroUI style) */
  onValueChange?: (value: string) => void;
  /** Clear button click handler */
  onClear?: () => void;
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Key down event handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Key up event handler */
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  // Accessibility & Testing
  /** Test ID for automated testing */
  "data-testid"?: string;
  /** ARIA label */
  "aria-label"?: string;
  /** ARIA labelledby */
  "aria-labelledby"?: string;
  /** ARIA describedby */
  "aria-describedby"?: string;
}

/**
 * Hook return type for useInput
 */
export interface UseInputReturn {
  /** Component slots */
  Component: React.ForwardRefExoticComponent<any>;
  /** Base wrapper element props */
  baseProps: Record<string, any>;
  /** Label element props */
  labelProps: Record<string, any>;
  /** Input wrapper element props */
  inputWrapperProps: Record<string, any>;
  /** Inner wrapper element props */
  innerWrapperProps: Record<string, any>;
  /** Input element props */
  inputProps: Record<string, any>;
  /** Clear button props */
  clearButtonProps: Record<string, any>;
  /** Helper wrapper props */
  helperWrapperProps: Record<string, any>;
  /** Description element props */
  descriptionProps: Record<string, any>;
  /** Error message element props */
  errorMessageProps: Record<string, any>;
}