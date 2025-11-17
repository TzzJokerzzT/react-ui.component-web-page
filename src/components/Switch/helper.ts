import type { SwitchSize, SwitchColor } from "./types";

/**
 * Get size classes for Switch component
 */
export const getSwitchSize = {
  sm: {
    wrapper: "w-10 h-6",
    thumb: "w-5 h-5",
    label: "text-sm",
    startContent: "text-xs",
    endContent: "text-xs",
    thumbIcon: "w-3 h-3",
  },
  md: {
    wrapper: "w-12 h-7",
    thumb: "w-6 h-6",
    label: "text-base",
    startContent: "text-sm",
    endContent: "text-sm",
    thumbIcon: "w-4 h-4",
  },
  lg: {
    wrapper: "w-14 h-8",
    thumb: "w-7 h-7",
    label: "text-lg",
    startContent: "text-base",
    endContent: "text-base",
    thumbIcon: "w-5 h-5",
  },
} as const;

/**
 * Get color classes for Switch component
 * @param color - Color variant
 * @param isSelected - Whether switch is selected
 * @param isDisabled - Whether switch is disabled
 * @returns CSS classes string
 */
export const getSwitchColor = (
  color: SwitchColor = "primary",
  isSelected: boolean = false,
  isDisabled: boolean = false
): string => {
  if (isDisabled) {
    return isSelected
      ? "bg-gray-300 border-gray-300"
      : "bg-gray-200 border-gray-200";
  }

  if (!isSelected) {
    return "bg-gray-200 border-gray-200 hover:bg-gray-300";
  }

  const colors = {
    default: "bg-gray-600 border-gray-600 hover:bg-gray-700",
    primary: "bg-blue-600 border-blue-600 hover:bg-blue-700",
    secondary: "bg-purple-600 border-purple-600 hover:bg-purple-700",
    success: "bg-green-600 border-green-600 hover:bg-green-700",
    warning: "bg-amber-500 border-amber-500 hover:bg-amber-600",
    danger: "bg-red-600 border-red-600 hover:bg-red-700",
  };

  return colors[color];
};

/**
 * Get base classes for Switch component
 * @param isDisabled - Whether switch is disabled
 * @returns CSS classes string
 */
export const getSwitchBaseClasses = (isDisabled: boolean = false): string => {
  const baseClasses =
    "inline-flex items-center gap-2 cursor-pointer select-none";
  const disabledClasses = isDisabled ? "cursor-not-allowed opacity-60" : "";

  return `${baseClasses} ${disabledClasses}`.trim();
};

/**
 * Get wrapper classes for Switch component
 * @param size - Size variant
 * @param color - Color variant
 * @param isSelected - Whether switch is selected
 * @param isDisabled - Whether switch is disabled
 * @param disableAnimation - Whether animations are disabled
 * @returns CSS classes string
 */
export const getSwitchWrapperClasses = (
  size: SwitchSize = "md",
  color: SwitchColor = "primary",
  isSelected: boolean = false,
  isDisabled: boolean = false,
  disableAnimation: boolean = false
): string => {
  const sizeClasses = getSwitchSize[size].wrapper;
  const colorClasses = getSwitchColor(color, isSelected, isDisabled);
  const baseClasses =
    "relative inline-flex shrink-0 border-2 rounded-full cursor-pointer";
  const animationClasses = disableAnimation
    ? ""
    : "transition-colors duration-200 ease-in-out";
  const focusClasses =
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500";

  return `${baseClasses} ${sizeClasses} ${colorClasses} ${animationClasses} ${focusClasses}`.trim();
};

/**
 * Get thumb base classes for Switch component (used with framer-motion)
 * @param size - Size variant
 * @returns CSS classes string
 */
export const getSwitchThumbBaseClasses = (size: SwitchSize = "md"): string => {
  const sizeClasses = getSwitchSize[size].thumb;
  const baseClasses =
    "absolute top-0.5 left-0.5 inline-block rounded-full bg-white shadow-lg transform ring-0 flex items-center justify-center";

  return `${baseClasses} ${sizeClasses}`.trim();
};

/**
 * Get label classes for Switch component
 * @param size - Size variant
 * @param isDisabled - Whether switch is disabled
 * @returns CSS classes string
 */
export const getSwitchLabelClasses = (
  size: SwitchSize = "md",
  isDisabled: boolean = false
): string => {
  const sizeClasses = getSwitchSize[size].label;
  const baseClasses = "font-medium";
  const disabledClasses = isDisabled ? "text-gray-400" : "text-gray-900";

  return `${baseClasses} ${sizeClasses} ${disabledClasses}`.trim();
};

/**
 * Get start/end content classes for Switch component
 * @param size - Size variant
 * @param isDisabled - Whether switch is disabled
 * @returns CSS classes string
 */
export const getSwitchContentClasses = (
  size: SwitchSize = "md",
  isDisabled: boolean = false
): string => {
  const sizeClasses = getSwitchSize[size].startContent; // Same for start and end
  const baseClasses = "flex items-center justify-center";
  const disabledClasses = isDisabled ? "text-gray-400" : "text-gray-600";

  return `${baseClasses} ${sizeClasses} ${disabledClasses}`.trim();
};

/**
 * Get thumb icon classes for Switch component
 * @param size - Size variant
 * @returns CSS classes string
 */
export const getSwitchThumbIconClasses = (size: SwitchSize = "md"): string => {
  const sizeClasses = getSwitchSize[size].thumbIcon;
  const baseClasses = "flex items-center justify-center text-gray-400";

  return `${baseClasses} ${sizeClasses}`.trim();
};

/**
 * Get hidden input classes for Switch component
 * @returns CSS classes string
 */
export const getSwitchHiddenInputClasses = (): string => {
  return "sr-only";
};
