import type { 
  AccordionColor, 
  AccordionVariant, 
  AccordionSize, 
  AccordionRadius 
} from "./types";

/**
 * Get size classes for Accordion components
 */
export const getAccordionSize = {
  xs: {
    base: "text-xs",
    header: "px-2 py-1.5 min-h-8",
    content: "px-2 pb-2",
    indicator: "text-xs w-3 h-3",
    gap: "gap-1"
  },
  sm: {
    base: "text-sm",
    header: "px-3 py-2 min-h-10",
    content: "px-3 pb-3",
    indicator: "text-sm w-4 h-4",
    gap: "gap-1.5"
  },
  md: {
    base: "text-base",
    header: "px-4 py-3 min-h-12",
    content: "px-4 pb-4",
    indicator: "text-base w-5 h-5",
    gap: "gap-2"
  },
  lg: {
    base: "text-lg",
    header: "px-5 py-4 min-h-14",
    content: "px-5 pb-5",
    indicator: "text-lg w-6 h-6",
    gap: "gap-2.5"
  },
  xl: {
    base: "text-xl",
    header: "px-6 py-5 min-h-16",
    content: "px-6 pb-6",
    indicator: "text-xl w-7 h-7",
    gap: "gap-3"
  },
} as const;

/**
 * Get radius classes for Accordion components
 */
export const getAccordionRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-2xl",
} as const;

/**
 * Get variant and color combination classes for Accordion
 * @param color - Color theme
 * @param variant - Visual variant
 * @param isDisabled - Whether the accordion is disabled
 * @returns CSS classes string
 */
export const getAccordionVariant = (
  color: AccordionColor = "default",
  variant: AccordionVariant = "flat",
  isDisabled = false
): string => {
  const baseClasses = "transition-colors duration-200";
  
  if (isDisabled) {
    return `${baseClasses} opacity-50 cursor-not-allowed`;
  }

  const colorMap = {
    default: {
      flat: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      bordered: "bg-transparent border-2 border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50",
      shadow: "bg-white text-gray-900 shadow-md hover:shadow-lg",
      splitted: "bg-gray-50 text-gray-900 hover:bg-gray-100 shadow-sm"
    },
    primary: {
      flat: "bg-blue-100 text-blue-900 hover:bg-blue-200",
      bordered: "bg-transparent border-2 border-blue-200 text-blue-900 hover:border-blue-300 hover:bg-blue-50",
      shadow: "bg-white text-blue-900 shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200",
      splitted: "bg-blue-50 text-blue-900 hover:bg-blue-100 shadow-sm shadow-blue-100"
    },
    secondary: {
      flat: "bg-purple-100 text-purple-900 hover:bg-purple-200",
      bordered: "bg-transparent border-2 border-purple-200 text-purple-900 hover:border-purple-300 hover:bg-purple-50",
      shadow: "bg-white text-purple-900 shadow-md shadow-purple-100 hover:shadow-lg hover:shadow-purple-200",
      splitted: "bg-purple-50 text-purple-900 hover:bg-purple-100 shadow-sm shadow-purple-100"
    },
    success: {
      flat: "bg-green-100 text-green-900 hover:bg-green-200",
      bordered: "bg-transparent border-2 border-green-200 text-green-900 hover:border-green-300 hover:bg-green-50",
      shadow: "bg-white text-green-900 shadow-md shadow-green-100 hover:shadow-lg hover:shadow-green-200",
      splitted: "bg-green-50 text-green-900 hover:bg-green-100 shadow-sm shadow-green-100"
    },
    warning: {
      flat: "bg-amber-100 text-amber-900 hover:bg-amber-200",
      bordered: "bg-transparent border-2 border-amber-200 text-amber-900 hover:border-amber-300 hover:bg-amber-50",
      shadow: "bg-white text-amber-900 shadow-md shadow-amber-100 hover:shadow-lg hover:shadow-amber-200",
      splitted: "bg-amber-50 text-amber-900 hover:bg-amber-100 shadow-sm shadow-amber-100"
    },
    danger: {
      flat: "bg-red-100 text-red-900 hover:bg-red-200",
      bordered: "bg-transparent border-2 border-red-200 text-red-900 hover:border-red-300 hover:bg-red-50",
      shadow: "bg-white text-red-900 shadow-md shadow-red-100 hover:shadow-lg hover:shadow-red-200",
      splitted: "bg-red-50 text-red-900 hover:bg-red-100 shadow-sm shadow-red-100"
    }
  };

  return `${baseClasses} ${colorMap[color][variant]}`;
};

/**
 * Get header variant classes
 */
export const getAccordionHeaderVariant = (
  color: AccordionColor = "default",
  variant: AccordionVariant = "flat",
  isExpanded = false,
  isDisabled = false
): string => {
  const baseClasses = "flex items-center justify-between w-full text-left font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  if (isDisabled) {
    return `${baseClasses} opacity-50 cursor-not-allowed focus:ring-gray-300`;
  }

  const focusRingMap = {
    default: "focus:ring-gray-500",
    primary: "focus:ring-blue-500",
    secondary: "focus:ring-purple-500",
    success: "focus:ring-green-500",
    warning: "focus:ring-amber-500",
    danger: "focus:ring-red-500"
  };

  const expandedClasses = isExpanded ? "font-semibold" : "";
  const variantClasses = variant === "bordered" ? "hover:bg-opacity-10" : "";
  
  return `${baseClasses} ${focusRingMap[color]} ${expandedClasses} ${variantClasses} cursor-pointer`;
};

/**
 * Get content variant classes
 */
export const getAccordionContentVariant = (
  color: AccordionColor = "default",
  variant: AccordionVariant = "flat"
): string => {
  const baseClasses = "overflow-hidden transition-all duration-300 ease-in-out";
  
  const contentColorMap = {
    default: {
      flat: "text-gray-700",
      bordered: "text-gray-700",
      shadow: "text-gray-700",
      splitted: "text-gray-700"
    },
    primary: {
      flat: "text-blue-800",
      bordered: "text-blue-800",
      shadow: "text-blue-800",
      splitted: "text-blue-800"
    },
    secondary: {
      flat: "text-purple-800",
      bordered: "text-purple-800",
      shadow: "text-purple-800",
      splitted: "text-purple-800"
    },
    success: {
      flat: "text-green-800",
      bordered: "text-green-800",
      shadow: "text-green-800",
      splitted: "text-green-800"
    },
    warning: {
      flat: "text-amber-800",
      bordered: "text-amber-800",
      shadow: "text-amber-800",
      splitted: "text-amber-800"
    },
    danger: {
      flat: "text-red-800",
      bordered: "text-red-800",
      shadow: "text-red-800",
      splitted: "text-red-800"
    }
  };

  return `${baseClasses} ${contentColorMap[color][variant]}`;
};

/**
 * Get indicator variant classes
 */
export const getAccordionIndicatorVariant = (
  color: AccordionColor = "default",
  isExpanded = false,
  isDisabled = false
): string => {
  const baseClasses = "flex-shrink-0 transition-transform duration-200 ease-in-out";
  
  if (isDisabled) {
    return `${baseClasses} opacity-50 text-gray-400`;
  }

  const colorMap = {
    default: "text-gray-600",
    primary: "text-blue-600",
    secondary: "text-purple-600",
    success: "text-green-600",
    warning: "text-amber-600",
    danger: "text-red-600"
  };

  const rotationClass = isExpanded ? "rotate-180" : "rotate-0";
  
  return `${baseClasses} ${colorMap[color]} ${rotationClass}`;
};

/**
 * Get divider variant classes
 */
export const getAccordionDividerVariant = (
  color: AccordionColor = "default",
  variant: AccordionVariant = "flat"
): string => {
  if (variant === "splitted") {
    return ""; // No divider for splitted variant
  }

  const colorMap = {
    default: "border-gray-200",
    primary: "border-blue-200",
    secondary: "border-purple-200",
    success: "border-green-200",
    warning: "border-amber-200",
    danger: "border-red-200"
  };

  return `border-t ${colorMap[color]}`;
};

/**
 * Get item variant classes for different accordion variants
 */
export const getAccordionItemVariant = (
  variant: AccordionVariant = "flat"
): string => {
  const baseClasses = "accordion-item";
  
  const variantMap = {
    flat: "border-0",
    bordered: "border border-gray-200 first:border-t last:border-b",
    shadow: "shadow-sm",
    splitted: "mb-2 last:mb-0 shadow-sm border border-gray-100"
  };

  return `${baseClasses} ${variantMap[variant]}`;
};

/**
 * Get wrapper classes for accordion container
 */
export const getAccordionWrapper = (
  variant: AccordionVariant = "flat",
  radius: AccordionRadius = "md",
  isCompact = false,
  className = ""
): string => {
  const baseClasses = "accordion w-full";
  const radiusClass = getAccordionRadius[radius];
  const compactClass = isCompact ? "space-y-0" : "space-y-0";
  
  const variantWrapperMap = {
    flat: "space-y-0",
    bordered: `space-y-0 ${radiusClass} overflow-hidden`,
    shadow: "space-y-2",
    splitted: "space-y-2"
  };

  return `${baseClasses} ${variantWrapperMap[variant]} ${compactClass} ${className}`.trim();
};

/**
 * Animation classes for content expand/collapse
 */
export const getAccordionAnimation = (isExpanded: boolean, disableAnimation = false): string => {
  if (disableAnimation) {
    return isExpanded ? "block" : "hidden";
  }

  return isExpanded 
    ? "animate-accordion-down" 
    : "animate-accordion-up";
};

/**
 * Get indicator animation classes
 */
export const getAccordionIndicatorAnimation = (
  isExpanded: boolean, 
  disableAnimation = false
): string => {
  if (disableAnimation) {
    return isExpanded ? "rotate-180" : "rotate-0";
  }

  return `transition-transform duration-200 ease-in-out ${
    isExpanded ? "rotate-180" : "rotate-0"
  }`;
};

/**
 * Default accordion configuration
 */
export const accordionDefaults = {
  size: "md" as AccordionSize,
  color: "default" as AccordionColor,
  variant: "flat" as AccordionVariant,
  radius: "md" as AccordionRadius,
  selectionMode: "single",
  indicatorPlacement: "end",
  itemPlacement: "outside",
  showDivider: true,
  disableAnimation: false,
  disableIndicatorAnimation: false,
  keepContentMounted: false,
  isCompact: false
} as const;

/**
 * Utility function to combine all accordion classes
 */
export const getAccordionClasses = {
  wrapper: getAccordionWrapper,
  item: getAccordionItemVariant,
  header: getAccordionHeaderVariant,
  content: getAccordionContentVariant,
  indicator: getAccordionIndicatorVariant,
  divider: getAccordionDividerVariant,
  variant: getAccordionVariant,
  size: getAccordionSize,
  radius: getAccordionRadius,
  animation: getAccordionAnimation,
  indicatorAnimation: getAccordionIndicatorAnimation
} as const;