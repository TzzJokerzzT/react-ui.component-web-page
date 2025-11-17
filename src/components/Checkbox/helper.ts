import type { CheckboxSize, CheckboxColor, CheckboxRadius } from "./types";

/**
 * Get size classes for Checkbox component
 */
export const getCheckboxSize = {
  sm: {
    wrapper: "w-4 h-4",
    icon: "w-3 h-3 text-xs",
    label: "text-sm",
  },
  md: {
    wrapper: "w-5 h-5",
    icon: "w-4 h-4 text-sm", 
    label: "text-base",
  },
  lg: {
    wrapper: "w-6 h-6",
    icon: "w-5 h-5 text-base",
    label: "text-lg",
  },
} as const;

/**
 * Get radius classes for Checkbox component
 */
export const getCheckboxRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg", 
  full: "rounded-full",
} as const;

/**
 * Get color classes for Checkbox component
 * @param color - Color variant
 * @param isSelected - Whether checkbox is selected
 * @param isDisabled - Whether checkbox is disabled
 * @param isInvalid - Whether checkbox is invalid
 * @returns CSS classes string
 */
export const getCheckboxColor = (
  color: CheckboxColor = "primary",
  isSelected: boolean = false,
  isDisabled: boolean = false,
  isInvalid: boolean = false
): string => {
  if (isDisabled) {
    return isSelected 
      ? "bg-gray-300 border-gray-300 text-gray-500"
      : "bg-gray-100 border-gray-300";
  }

  if (isInvalid) {
    return isSelected
      ? "bg-red-500 border-red-500 text-white"
      : "bg-white border-red-500 hover:border-red-600";
  }

  const colorClasses = {
    default: {
      selected: "bg-gray-600 border-gray-600 text-white hover:bg-gray-700 hover:border-gray-700",
      unselected: "bg-white border-gray-300 hover:border-gray-400",
    },
    primary: {
      selected: "bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700",
      unselected: "bg-white border-gray-300 hover:border-blue-400",
    },
    secondary: {
      selected: "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700",
      unselected: "bg-white border-gray-300 hover:border-purple-400",
    },
    success: {
      selected: "bg-green-600 border-green-600 text-white hover:bg-green-700 hover:border-green-700",
      unselected: "bg-white border-gray-300 hover:border-green-400",
    },
    warning: {
      selected: "bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-600 hover:border-yellow-600",
      unselected: "bg-white border-gray-300 hover:border-yellow-400",
    },
    danger: {
      selected: "bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700",
      unselected: "bg-white border-gray-300 hover:border-red-400",
    },
  };

  return isSelected 
    ? colorClasses[color].selected
    : colorClasses[color].unselected;
};

/**
 * Get base wrapper classes for Checkbox component
 * @param size - Size variant
 * @param radius - Radius variant
 * @param color - Color variant
 * @param isSelected - Whether checkbox is selected
 * @param isDisabled - Whether checkbox is disabled
 * @param isInvalid - Whether checkbox is invalid
 * @param disableAnimation - Whether animations are disabled
 * @returns CSS classes string
 */
export const getCheckboxWrapperClasses = (
  size: CheckboxSize = "md",
  radius: CheckboxRadius = "md",
  color: CheckboxColor = "primary",
  isSelected: boolean = false,
  isDisabled: boolean = false,
  isInvalid: boolean = false,
  disableAnimation: boolean = false
): string => {
  const sizeClasses = getCheckboxSize[size].wrapper;
  const radiusClasses = getCheckboxRadius[radius];
  const colorClasses = getCheckboxColor(color, isSelected, isDisabled, isInvalid);
  
  const baseClasses = "relative inline-flex items-center justify-center border-2 shrink-0";
  const interactionClasses = !isDisabled 
    ? "cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
    : "cursor-not-allowed";
  
  const animationClasses = !disableAnimation && !isDisabled
    ? "transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95"
    : "transition-colors duration-200 ease-in-out";

  return [
    baseClasses,
    sizeClasses,
    radiusClasses,
    colorClasses,
    interactionClasses,
    animationClasses,
  ].filter(Boolean).join(" ");
};

/**
 * Get icon classes for Checkbox component
 * @param size - Size variant
 * @param isSelected - Whether checkbox is selected
 * @param isIndeterminate - Whether checkbox is indeterminate
 * @param disableAnimation - Whether animations are disabled
 * @returns CSS classes string
 */
export const getCheckboxIconClasses = (
  size: CheckboxSize = "md",
  isSelected: boolean = false,
  isIndeterminate: boolean = false,
  disableAnimation: boolean = false
): string => {
  const sizeClasses = getCheckboxSize[size].icon;
  const baseClasses = "absolute flex items-center justify-center";
  
  const visibilityClasses = (isSelected || isIndeterminate)
    ? "opacity-100 scale-100"
    : "opacity-0 scale-75";
    
  const animationClasses = !disableAnimation
    ? "transition-all duration-200 ease-in-out"
    : "";

  return [
    baseClasses,
    sizeClasses,
    visibilityClasses,
    animationClasses,
  ].filter(Boolean).join(" ");
};

/**
 * Get label classes for Checkbox component
 * @param size - Size variant
 * @param isDisabled - Whether checkbox is disabled
 * @param lineThrough - Whether to show line-through effect
 * @param isSelected - Whether checkbox is selected
 * @returns CSS classes string
 */
export const getCheckboxLabelClasses = (
  size: CheckboxSize = "md",
  isDisabled: boolean = false,
  lineThrough: boolean = false,
  isSelected: boolean = false
): string => {
  const sizeClasses = getCheckboxSize[size].label;
  const baseClasses = "ml-2 select-none";
  
  const disabledClasses = isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700";
  const lineThroughClasses = lineThrough && isSelected ? "line-through" : "";

  return [
    baseClasses,
    sizeClasses,
    disabledClasses,
    lineThroughClasses,
  ].filter(Boolean).join(" ");
};

/**
 * Get base container classes for Checkbox component
 * @param isDisabled - Whether checkbox is disabled
 * @returns CSS classes string
 */
export const getCheckboxBaseClasses = (isDisabled: boolean = false): string => {
  const baseClasses = "inline-flex items-center";
  const disabledClasses = isDisabled ? "opacity-60" : "";
  
  return [baseClasses, disabledClasses].filter(Boolean).join(" ");
};

/**
 * Get hidden input classes for Checkbox component
 * @returns CSS classes string
 */
export const getCheckboxHiddenInputClasses = (): string => {
  return "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10";
};