import type { CardColor, CardVariant } from "./types";

/**
 * Get size classes for Card component
 */
export const getCardSize = {
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
} as const;

/**
 * Get radius classes for Card component
 */
export const getCardRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

/**
 * Get variant and color combination classes for Card component
 * @param color - Color theme
 * @param variant - Visual variant
 * @returns CSS classes string
 */
export const getCardVariant = (
  color: CardColor,
  variant: CardVariant,
): string => {
  const colorClasses = {
    default: {
      elevated: "bg-white shadow-lg hover:shadow-xl border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:shadow-gray-900/20 dark:hover:shadow-gray-900/30",
      bordered: "bg-white border-2 border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500",
      shadow: "bg-white shadow-md hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20 dark:hover:shadow-gray-900/30",
      flat: "bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800",
    },
    primary: {
      elevated: "bg-blue-50 shadow-lg hover:shadow-xl border-blue-200 dark:bg-blue-900/20 dark:border-blue-700 dark:shadow-blue-900/30 dark:hover:shadow-blue-900/40",
      bordered: "bg-blue-50 border-2 border-blue-200 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:hover:border-blue-600",
      shadow:
        "bg-blue-50 shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200 dark:bg-blue-900/20 dark:shadow-blue-900/30 dark:hover:shadow-blue-900/40",
      flat: "bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/40",
    },
    secondary: {
      elevated: "bg-purple-50 shadow-lg hover:shadow-xl border-purple-200 dark:bg-purple-900/20 dark:border-purple-700 dark:shadow-purple-900/30 dark:hover:shadow-purple-900/40",
      bordered:
        "bg-purple-50 border-2 border-purple-200 hover:border-purple-300 dark:bg-purple-900/20 dark:border-purple-700 dark:hover:border-purple-600",
      shadow:
        "bg-purple-50 shadow-md shadow-purple-100 hover:shadow-lg hover:shadow-purple-200 dark:bg-purple-900/20 dark:shadow-purple-900/30 dark:hover:shadow-purple-900/40",
      flat: "bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-900/40",
    },
    success: {
      elevated: "bg-green-50 shadow-lg hover:shadow-xl border-green-200 dark:bg-green-900/20 dark:border-green-700 dark:shadow-green-900/30 dark:hover:shadow-green-900/40",
      bordered: "bg-green-50 border-2 border-green-200 hover:border-green-300 dark:bg-green-900/20 dark:border-green-700 dark:hover:border-green-600",
      shadow:
        "bg-green-50 shadow-md shadow-green-100 hover:shadow-lg hover:shadow-green-200 dark:bg-green-900/20 dark:shadow-green-900/30 dark:hover:shadow-green-900/40",
      flat: "bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/40",
    },
    warning: {
      elevated: "bg-yellow-50 shadow-lg hover:shadow-xl border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-700 dark:shadow-yellow-900/30 dark:hover:shadow-yellow-900/40",
      bordered:
        "bg-yellow-50 border-2 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-700 dark:hover:border-yellow-600",
      shadow:
        "bg-yellow-50 shadow-md shadow-yellow-100 hover:shadow-lg hover:shadow-yellow-200 dark:bg-yellow-900/20 dark:shadow-yellow-900/30 dark:hover:shadow-yellow-900/40",
      flat: "bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:hover:bg-yellow-900/40",
    },
    danger: {
      elevated: "bg-red-50 shadow-lg hover:shadow-xl border-red-200 dark:bg-red-900/20 dark:border-red-700 dark:shadow-red-900/30 dark:hover:shadow-red-900/40",
      bordered: "bg-red-50 border-2 border-red-200 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:hover:border-red-600",
      shadow:
        "bg-red-50 shadow-md shadow-red-100 hover:shadow-lg hover:shadow-red-200 dark:bg-red-900/20 dark:shadow-red-900/30 dark:hover:shadow-red-900/40",
      flat: "bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/40",
    },
  };

  return colorClasses[color][variant];
};

/**
 * Get interactive classes for clickable/hoverable cards
 * @param isClickable - Whether the card is clickable
 * @param isHoverable - Whether the card is hoverable
 * @param isDisabled - Whether the card is disabled
 * @returns CSS classes string
 */
export const getCardInteractive = (
  isClickable: boolean = false,
  isHoverable: boolean = false,
  isDisabled: boolean = false,
): string => {
  let classes = "";

  if (isDisabled) {
    return "opacity-50 cursor-not-allowed";
  }

  if (isClickable) {
    classes +=
      "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800 ";
  }

  if (isHoverable || isClickable) {
    classes += "transition-all duration-200 ease-in-out ";
  }

  return classes.trim();
};
