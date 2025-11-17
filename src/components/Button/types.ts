import type { ReactNode } from "react";

/**
 * Size variants for Button component
 */
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Visual variants for Button component
 */
export type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "link"
  | "gradient"
  | "faded"
  | "light"
  | "bordered"
  | "outlined";

/**
 * Color variants for Button component
 */
export type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Radius variants for Button component
 */
export type ButtonRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Hover animation variants for Button component
 */
export type ButtonHoverAnimation =
  | "none"
  | "scale"
  | "lift"
  | "bounce"
  | "pulse"
  | "shake"
  | "rotate"
  | "glow";

/**
 * Click animation variants for Button component
 */
export type ButtonClickAnimation =
  | "none"
  | "scale"
  | "bounce"
  | "ripple"
  | "press"
  | "punch"
  | "wiggle";

/**
 * Props interface for the main Button component
 */
export interface ButtonProps {
  /** Content to render inside the button */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Accessibility label for screen readers */
  ariaLabel?: string;
  /** Color theme of the button */
  color?: ButtonColor;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  isLoading?: boolean;
  /** Click handler function */
  onClick?: () => void;
  /** HTML button type attribute */
  type?: "button" | "submit" | "reset";
  /** Size variant of the button */
  size?: ButtonSize;
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Border radius of the button */
  radius?: ButtonRadius;
  /** Icon to display before text */
  startIcon?: ReactNode;
  /** Icon to display after text */
  endIcon?: ReactNode;
  /** Whether to show full width */
  fullWidth?: boolean;
  /** Whether to disable hover and focus animations */
  disableAnimation?: boolean;
  /** Hover animation type - Framer Motion powered */
  hoverAnimation?: ButtonHoverAnimation;
  /** Click animation type - Framer Motion powered */
  clickAnimation?: ButtonClickAnimation;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for ButtonGroup component
 */
export interface ButtonGroupProps {
  /** Button components to render inside the group */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Size variant for all buttons in group */
  size?: ButtonSize;
  /** Color theme for all buttons in group */
  color?: ButtonColor;
  /** Visual style variant for all buttons in group */
  variant?: ButtonVariant;
  /** Border radius for all buttons in group */
  radius?: ButtonRadius;
  /** Whether buttons are attached (no spacing) */
  isAttached?: boolean;
  /** Whether the group is disabled */
  disabled?: boolean;
  /** Whether to disable hover and focus animations for all buttons */
  disableAnimation?: boolean;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for ButtonContent component
 */
export interface ButtonContentProps {
  /** Content to render inside the button content */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for ButtonIcon component
 */
export interface ButtonIconProps {
  /** Icon element to render */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Position of the icon */
  position?: "start" | "end";
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for ButtonText component
 */
export interface ButtonTextProps {
  /** Text content to render */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}
