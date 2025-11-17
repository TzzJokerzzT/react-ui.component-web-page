import type { ReactNode, ChangeEvent } from "react";

/**
 * Size variants for Switch component
 */
export type SwitchSize = "sm" | "md" | "lg";

/**
 * Color variants for Switch component
 */
export type SwitchColor = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "danger";

/**
 * Props interface for custom thumb icon
 */
export interface ThumbIconProps {
  /** Whether the switch is selected */
  isSelected?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props interface for the main Switch component
 */
export interface SwitchProps {
  /** Content to render as switch label */
  children?: ReactNode;
  /** Value attribute for the switch input */
  value?: string;
  /** Name attribute for the switch input */
  name?: string;
  /** Size variant of the switch */
  size?: SwitchSize;
  /** Color theme of the switch */
  color?: SwitchColor;
  /** Custom icon component for thumb */
  thumbIcon?: React.ComponentType<ThumbIconProps>;
  /** Content to display at the start of the switch */
  startContent?: ReactNode;
  /** Content to display at the end of the switch */
  endContent?: ReactNode;
  /** Whether the switch is selected (controlled) */
  isSelected?: boolean;
  /** Default selected state (uncontrolled) */
  defaultSelected?: boolean;
  /** Whether the switch is read-only */
  isReadOnly?: boolean;
  /** Whether the switch is disabled */
  isDisabled?: boolean;
  /** Whether to disable animations */
  disableAnimation?: boolean;
  /** Additional CSS classes to apply */
  className?: string;
  /** Custom class names for different slots */
  classNames?: Partial<Record<
    | "base" 
    | "wrapper" 
    | "thumb" 
    | "label" 
    | "startContent" 
    | "endContent" 
    | "thumbIcon" 
    | "hiddenInput", 
    string
  >>;
  /** Native change event handler */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Value change event handler */
  onValueChange?: (isSelected: boolean) => void;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for SwitchWrapper component
 */
export interface SwitchWrapperProps {
  /** Content to wrap */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for SwitchThumb component
 */
export interface SwitchThumbProps {
  /** Whether the switch is selected */
  isSelected?: boolean;
  /** Size variant of the switch */
  size?: SwitchSize;
  /** Custom thumb icon component */
  thumbIcon?: React.ComponentType<ThumbIconProps>;
  /** Whether animations are disabled */
  disableAnimation?: boolean;
  /** Additional CSS classes to apply */
  className?: string;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}