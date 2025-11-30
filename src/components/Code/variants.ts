import { tv, VariantProps } from "tailwind-variants";

/**
 * Code component styles using tailwind-variants
 */
export const codeVariants = tv({
  base: [
    // Base styles
    "inline-block",
    "font-mono",
    "text-inherit",
    "box-border",
    "whitespace-nowrap",
    "px-1.5",
    "py-0.5",
    "border-2",
    "border-transparent",
    // Transitions
    "transition-colors",
    "duration-200",
  ],
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    color: {
      default: [
        "bg-gray-100",
        "text-gray-800",
        "dark:bg-gray-800",
        "dark:text-gray-200",
      ],
      primary: [
        "bg-primary-50",
        "text-primary-600",
        "dark:bg-primary-900/20",
        "dark:text-primary-400",
      ],
      secondary: [
        "bg-secondary-50",
        "text-secondary-600",
        "dark:bg-secondary-900/20",
        "dark:text-secondary-400",
      ],
      success: [
        "bg-success-50",
        "text-success-600",
        "dark:bg-success-900/20",
        "dark:text-success-400",
      ],
      warning: [
        "bg-warning-50",
        "text-warning-600",
        "dark:bg-warning-900/20",
        "dark:text-warning-400",
      ],
      danger: [
        "bg-danger-50",
        "text-danger-600",
        "dark:bg-danger-900/20",
        "dark:text-danger-400",
      ],
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    disableAnimation: {
      true: "transition-none",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default",
    radius: "sm",
    disableAnimation: false,
  },
});

export type CodeVariantsType = VariantProps<typeof codeVariants>;
