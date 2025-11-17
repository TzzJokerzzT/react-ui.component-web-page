import type { ButtonColor, ButtonVariant } from "./types";

/**
 * Get size classes for Button component
 */
export const getButtonSize = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
} as const;

/**
 * Get radius classes for Button component
 */
export const getButtonRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

/**
 * Get variant and color combination classes for Button component
 * @param color - Color theme
 * @param variant - Visual variant
 * @returns CSS classes string
 */
export const getButtonVariant = (
  color: ButtonColor,
  variant: ButtonVariant,
): string => {
  // Handle legacy variants by mapping to new ones
  const normalizedVariant =
    variant === "faded" || variant === "light"
      ? "ghost"
      : variant === "bordered" || variant === "outlined"
        ? "outline"
        : variant;

  const colorClasses = {
    default: {
      solid:
        "bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white border-gray-600 hover:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:border-gray-700 dark:hover:border-gray-600",
      outline:
        "bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 border-2 border-gray-600 hover:border-gray-700 dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-300 dark:border-gray-400 dark:hover:border-gray-300",
      ghost:
        "bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-600 border-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-300",
      link: "bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 border-transparent underline hover:no-underline dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-300",
      gradient:
        "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white border-transparent dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-500 dark:hover:to-gray-600",
    },
    primary: {
      solid:
        "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white border-blue-600 hover:border-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 dark:active:bg-blue-400",
      outline:
        "bg-transparent hover:bg-blue-50 active:bg-blue-100 text-blue-600 border-2 border-blue-600 hover:border-blue-700 dark:hover:bg-blue-900 dark:active:bg-blue-800 dark:text-blue-400 dark:border-blue-500 dark:hover:border-blue-400",
      ghost:
        "bg-transparent hover:bg-blue-100 active:bg-blue-200 text-blue-600 border-transparent dark:hover:bg-blue-900 dark:active:bg-blue-800 dark:text-blue-400",
      link: "bg-transparent hover:bg-blue-50 active:bg-blue-100 text-blue-600 border-transparent underline hover:no-underline dark:hover:bg-blue-900 dark:active:bg-blue-800 dark:text-blue-400",
      gradient:
        "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-transparent dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600",
    },
    secondary: {
      solid:
        "bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white border-purple-600 hover:border-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 dark:active:bg-purple-400",
      outline:
        "bg-transparent hover:bg-purple-50 active:bg-purple-100 text-purple-600 border-2 border-purple-600 hover:border-purple-700 dark:hover:bg-purple-900 dark:active:bg-purple-800 dark:text-purple-400 dark:border-purple-500 dark:hover:border-purple-400",
      ghost:
        "bg-transparent hover:bg-purple-100 active:bg-purple-200 text-purple-600 border-transparent dark:hover:bg-purple-900 dark:active:bg-purple-800 dark:text-purple-400",
      link: "bg-transparent hover:bg-purple-50 active:bg-purple-100 text-purple-600 border-transparent underline hover:no-underline dark:hover:bg-purple-900 dark:active:bg-purple-800 dark:text-purple-400",
      gradient:
        "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-transparent dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600",
    },
    success: {
      solid:
        "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white border-green-600 hover:border-green-700 dark:bg-green-600 dark:hover:bg-green-500 dark:active:bg-green-400",
      outline:
        "bg-transparent hover:bg-green-50 active:bg-green-100 text-green-600 border-2 border-green-600 hover:border-green-700 dark:hover:bg-green-900 dark:active:bg-green-800 dark:text-green-400 dark:border-green-500 dark:hover:border-green-400",
      ghost:
        "bg-transparent hover:bg-green-100 active:bg-green-200 text-green-600 border-transparent dark:hover:bg-green-900 dark:active:bg-green-800 dark:text-green-400",
      link: "bg-transparent hover:bg-green-50 active:bg-green-100 text-green-600 border-transparent underline hover:no-underline dark:hover:bg-green-900 dark:active:bg-green-800 dark:text-green-400",
      gradient:
        "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-transparent dark:from-green-600 dark:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600",
    },
    warning: {
      solid:
        "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white border-yellow-500 hover:border-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:active:bg-yellow-400",
      outline:
        "bg-transparent hover:bg-yellow-50 active:bg-yellow-100 text-yellow-600 border-2 border-yellow-500 hover:border-yellow-600 dark:hover:bg-yellow-900 dark:active:bg-yellow-800 dark:text-yellow-400 dark:border-yellow-500 dark:hover:border-yellow-400",
      ghost:
        "bg-transparent hover:bg-yellow-100 active:bg-yellow-200 text-yellow-600 border-transparent dark:hover:bg-yellow-900 dark:active:bg-yellow-800 dark:text-yellow-400",
      link: "bg-transparent hover:bg-yellow-50 active:bg-yellow-100 text-yellow-600 border-transparent underline hover:no-underline dark:hover:bg-yellow-900 dark:active:bg-yellow-800 dark:text-yellow-400",
      gradient:
        "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white border-transparent dark:from-yellow-500 dark:to-yellow-600 dark:hover:from-yellow-400 dark:hover:to-yellow-500",
    },
    danger: {
      solid:
        "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white border-red-600 hover:border-red-700 dark:bg-red-600 dark:hover:bg-red-500 dark:active:bg-red-400",
      outline:
        "bg-transparent hover:bg-red-50 active:bg-red-100 text-red-600 border-2 border-red-600 hover:border-red-700 dark:hover:bg-red-900 dark:active:bg-red-800 dark:text-red-400 dark:border-red-500 dark:hover:border-red-400",
      ghost:
        "bg-transparent hover:bg-red-100 active:bg-red-200 text-red-600 border-transparent dark:hover:bg-red-900 dark:active:bg-red-800 dark:text-red-400",
      link: "bg-transparent hover:bg-red-50 active:bg-red-100 text-red-600 border-transparent underline hover:no-underline dark:hover:bg-red-900 dark:active:bg-red-800 dark:text-red-400",
      gradient:
        "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-transparent dark:from-red-600 dark:to-red-700 dark:hover:from-red-500 dark:hover:to-red-600",
    },
  };

  return colorClasses[color][
    normalizedVariant as "solid" | "outline" | "ghost" | "link" | "gradient"
  ];
};

/**
 * Get loading state classes for Button component
 * @param isLoading - Whether the button is in loading state
 * @returns CSS classes string
 */
export const getButtonLoading = (isLoading: boolean = false): string => {
  if (!isLoading) return "";
  return "cursor-wait opacity-70 pointer-events-none";
};

/**
 * Get disabled state classes for Button component
 * @param disabled - Whether the button is disabled
 * @returns CSS classes string
 */
export const getButtonDisabled = (disabled: boolean = false): string => {
  if (!disabled) return "";
  return "opacity-50 cursor-not-allowed pointer-events-none";
};

/**
 * Get full width classes for Button component
 * @param fullWidth - Whether the button should be full width
 * @returns CSS classes string
 */
export const getButtonFullWidth = (fullWidth: boolean = false): string => {
  return fullWidth ? "w-full" : "";
};

/**
 * Get focus ring classes based on button color
 * @param color - Button color theme
 * @returns CSS classes string for focus ring
 */
export const getButtonFocusRing = (color: ButtonColor): string => {
  const focusRings = {
    default: "focus:ring-gray-500 dark:focus:ring-gray-400",
    primary: "focus:ring-blue-500 dark:focus:ring-blue-400", 
    secondary: "focus:ring-purple-500 dark:focus:ring-purple-400",
    success: "focus:ring-green-500 dark:focus:ring-green-400",
    warning: "focus:ring-yellow-500 dark:focus:ring-yellow-400",
    danger: "focus:ring-red-500 dark:focus:ring-red-400"
  };
  
  return focusRings[color];
};

/**
 * Get base interactive classes for Button component
 * @param disabled - Whether the button is disabled
 * @param isLoading - Whether the button is loading
 * @param disableAnimation - Whether to disable hover and focus animations
 * @param color - Button color for focus ring
 * @returns CSS classes string
 */
export const getButtonInteractive = (
  disabled: boolean = false,
  isLoading: boolean = false,
  disableAnimation: boolean = false,
  color: ButtonColor = "primary"
): string => {
  if (disabled || isLoading) return "";

  const focusRing = getButtonFocusRing(color);
  const baseClasses = `cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusRing}`;
  const colorTransition = "transition-colors duration-200 ease-in-out";

  if (disableAnimation) {
    // Mantiene transiciones de color pero no animaciones CSS (Framer Motion se encargará)
    return `${baseClasses} ${colorTransition}`;
  }

  // Solo transiciones de color - las animaciones serán manejadas por Framer Motion
  return `${baseClasses} ${colorTransition}`;
};

/**
 * Get ButtonGroup spacing classes
 * @param isAttached - Whether buttons are attached (no spacing)
 * @returns CSS classes string
 */
export const getButtonGroupSpacing = (isAttached: boolean = false): string => {
  return isAttached
    ? "flex [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:-ml-px"
    : "flex gap-2";
};
