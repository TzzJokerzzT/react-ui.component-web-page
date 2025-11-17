import type { ReactNode, ChangeEvent } from "react";

/**
 * Size variants for Checkbox component
 */
export type CheckboxSize = "sm" | "md" | "lg";

/**
 * Color variants for Checkbox component  
 */
export type CheckboxColor = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "danger";

/**
 * Radius variants for Checkbox component
 */
export type CheckboxRadius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Validation state for Checkbox component
 */
export type CheckboxValidationState = "valid" | "invalid";

/**
 * Props interface for custom checkbox icon
 */
export interface CheckboxIconProps {
  /** Whether the checkbox is selected */
  isSelected?: boolean;
  /** Whether the checkbox is indeterminate */
  isIndeterminate?: boolean;
  /** Whether animations are disabled */
  disableAnimation?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props interface for the main Checkbox component
 */
export interface CheckboxProps {
  /** Content to render as checkbox label */
  children?: ReactNode;
  /** Custom icon component for checkbox */
  icon?: React.ComponentType<CheckboxIconProps>;
  /** Value attribute for the checkbox input */
  value?: string;
  /** Name attribute for the checkbox input */
  name?: string;
  /** Size variant of the checkbox */
  size?: CheckboxSize;
  /** Color theme of the checkbox */
  color?: CheckboxColor;
  /** Border radius of the checkbox */
  radius?: CheckboxRadius;
  /** Whether to show line-through effect on label when checked */
  lineThrough?: boolean;
  /** Whether the checkbox is selected (controlled) */
  isSelected?: boolean;
  /** Default selected state (uncontrolled) */
  defaultSelected?: boolean;
  /** Whether the checkbox is required */
  isRequired?: boolean;
  /** Whether the checkbox is read-only */
  isReadOnly?: boolean;
  /** Whether the checkbox is disabled */
  isDisabled?: boolean;
  /** Whether the checkbox is in indeterminate state */
  isIndeterminate?: boolean;
  /** Whether the checkbox is invalid */
  isInvalid?: boolean;
  /** Validation state of the checkbox */
  validationState?: CheckboxValidationState;
  /** Whether to disable hover and focus animations */
  disableAnimation?: boolean;
  /** Additional CSS classes to apply */
  className?: string;
  /** Custom class names for different slots */
  classNames?: Partial<Record<"base" | "wrapper" | "icon" | "label" | "hiddenInput", string>>;
  /** Native change event handler */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Value change event handler */
  onValueChange?: (isSelected: boolean) => void;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for CheckboxWrapper component
 */
export interface CheckboxWrapperProps {
  /** Content to wrap */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for CheckboxIcon component
 */
export interface CheckboxDefaultIconProps extends CheckboxIconProps {
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}