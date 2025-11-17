import type { 
  PaginationColor, 
  PaginationVariant, 
  PaginationSize, 
  PaginationRadius 
} from "./types";

/**
 * Get size classes for Pagination components
 */
export const getPaginationSize = {
  xs: "min-w-6 h-6 text-xs px-1",
  sm: "min-w-8 h-8 text-sm px-2",
  md: "min-w-10 h-10 text-base px-3",
  lg: "min-w-12 h-12 text-lg px-4",
  xl: "min-w-14 h-14 text-xl px-5",
} as const;

/**
 * Get gap/spacing classes based on size for pagination container
 */
export const getPaginationSpacing = {
  xs: "gap-1",
  sm: "gap-1.5",
  md: "gap-2",
  lg: "gap-2.5",
  xl: "gap-3",
} as const;

/**
 * Get radius classes for Pagination components
 */
export const getPaginationRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

/**
 * Get variant and color combination classes for Pagination items
 * @param color - Color theme
 * @param variant - Visual variant
 * @param isActive - Whether the item is active
 * @param isDisabled - Whether the item is disabled
 * @returns CSS classes string
 */
export const getPaginationVariant = (
  color: PaginationColor,
  variant: PaginationVariant,
  isActive: boolean = false,
  isDisabled: boolean = false,
): string => {
  const colorClasses = {
    default: {
      flat: {
        base: "bg-default-100 text-default-600 hover:bg-default-200",
        active: "bg-default-300 text-default-800 font-medium",
        disabled: "bg-default-50 text-default-300 cursor-not-allowed",
      },
      bordered: {
        base: "bg-transparent border-2 border-default-200 text-default-600 hover:border-default-300 hover:bg-default-50",
        active: "bg-default-100 border-default-400 text-default-800 font-medium",
        disabled: "bg-transparent border-default-100 text-default-300 cursor-not-allowed",
      },
      light: {
        base: "bg-transparent text-default-600 hover:bg-default-100",
        active: "bg-default-200 text-default-800 font-medium",
        disabled: "bg-transparent text-default-300 cursor-not-allowed",
      },
      faded: {
        base: "bg-default-100/50 text-default-600 hover:bg-default-200/70",
        active: "bg-default-300/80 text-default-800 font-medium",
        disabled: "bg-default-50/30 text-default-300 cursor-not-allowed",
      },
    },
    primary: {
      flat: {
        base: "bg-primary-100 text-primary-600 hover:bg-primary-200",
        active: "bg-primary-500 text-white font-medium",
        disabled: "bg-primary-50 text-primary-300 cursor-not-allowed",
      },
      bordered: {
        base: "bg-transparent border-2 border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50",
        active: "bg-primary-500 border-primary-500 text-white font-medium",
        disabled: "bg-transparent border-primary-100 text-primary-300 cursor-not-allowed",
      },
      light: {
        base: "bg-transparent text-primary-600 hover:bg-primary-100",
        active: "bg-primary-200 text-primary-800 font-medium",
        disabled: "bg-transparent text-primary-300 cursor-not-allowed",
      },
      faded: {
        base: "bg-primary-100/50 text-primary-600 hover:bg-primary-200/70",
        active: "bg-primary-500/90 text-white font-medium",
        disabled: "bg-primary-50/30 text-primary-300 cursor-not-allowed",
      },
    },
    secondary: {
      flat: {
        base: "bg-purple-100 text-purple-600 hover:bg-purple-200",
        active: "bg-purple-500 text-white font-medium",
        disabled: "bg-purple-50 text-purple-300 cursor-not-allowed",
      },
      bordered: {
        base: "bg-transparent border-2 border-purple-200 text-purple-600 hover:border-purple-300 hover:bg-purple-50",
        active: "bg-purple-500 border-purple-500 text-white font-medium",
        disabled: "bg-transparent border-purple-100 text-purple-300 cursor-not-allowed",
      },
      light: {
        base: "bg-transparent text-purple-600 hover:bg-purple-100",
        active: "bg-purple-200 text-purple-800 font-medium",
        disabled: "bg-transparent text-purple-300 cursor-not-allowed",
      },
      faded: {
        base: "bg-purple-100/50 text-purple-600 hover:bg-purple-200/70",
        active: "bg-purple-500/90 text-white font-medium",
        disabled: "bg-purple-50/30 text-purple-300 cursor-not-allowed",
      },
    },
    success: {
      flat: {
        base: "bg-green-100 text-green-600 hover:bg-green-200",
        active: "bg-green-500 text-white font-medium",
        disabled: "bg-green-50 text-green-300 cursor-not-allowed",
      },
      bordered: {
        base: "bg-transparent border-2 border-green-200 text-green-600 hover:border-green-300 hover:bg-green-50",
        active: "bg-green-500 border-green-500 text-white font-medium",
        disabled: "bg-transparent border-green-100 text-green-300 cursor-not-allowed",
      },
      light: {
        base: "bg-transparent text-green-600 hover:bg-green-100",
        active: "bg-green-200 text-green-800 font-medium",
        disabled: "bg-transparent text-green-300 cursor-not-allowed",
      },
      faded: {
        base: "bg-green-100/50 text-green-600 hover:bg-green-200/70",
        active: "bg-green-500/90 text-white font-medium",
        disabled: "bg-green-50/30 text-green-300 cursor-not-allowed",
      },
    },
    warning: {
      flat: {
        base: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
        active: "bg-yellow-500 text-white font-medium",
        disabled: "bg-yellow-50 text-yellow-300 cursor-not-allowed",
      },
      bordered: {
        base: "bg-transparent border-2 border-yellow-200 text-yellow-700 hover:border-yellow-300 hover:bg-yellow-50",
        active: "bg-yellow-500 border-yellow-500 text-white font-medium",
        disabled: "bg-transparent border-yellow-100 text-yellow-300 cursor-not-allowed",
      },
      light: {
        base: "bg-transparent text-yellow-700 hover:bg-yellow-100",
        active: "bg-yellow-200 text-yellow-800 font-medium",
        disabled: "bg-transparent text-yellow-400 cursor-not-allowed",
      },
      faded: {
        base: "bg-yellow-100/50 text-yellow-700 hover:bg-yellow-200/70",
        active: "bg-yellow-500/90 text-white font-medium",
        disabled: "bg-yellow-50/30 text-yellow-300 cursor-not-allowed",
      },
    },
    danger: {
      flat: {
        base: "bg-red-100 text-red-600 hover:bg-red-200",
        active: "bg-red-500 text-white font-medium",
        disabled: "bg-red-50 text-red-300 cursor-not-allowed",
      },
      bordered: {
        base: "bg-transparent border-2 border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50",
        active: "bg-red-500 border-red-500 text-white font-medium",
        disabled: "bg-transparent border-red-100 text-red-300 cursor-not-allowed",
      },
      light: {
        base: "bg-transparent text-red-600 hover:bg-red-100",
        active: "bg-red-200 text-red-800 font-medium",
        disabled: "bg-transparent text-red-300 cursor-not-allowed",
      },
      faded: {
        base: "bg-red-100/50 text-red-600 hover:bg-red-200/70",
        active: "bg-red-500/90 text-white font-medium",
        disabled: "bg-red-50/30 text-red-300 cursor-not-allowed",
      },
    },
  };

  if (isDisabled) {
    return colorClasses[color][variant].disabled;
  }

  if (isActive) {
    return colorClasses[color][variant].active;
  }

  return colorClasses[color][variant].base;
};

/**
 * Get cursor/control button variant classes
 * @param color - Color theme
 * @param variant - Visual variant
 * @param isDisabled - Whether the cursor is disabled
 * @returns CSS classes string
 */
export const getPaginationCursorVariant = (
  color: PaginationColor,
  variant: PaginationVariant,
  isDisabled: boolean = false,
): string => {
  const baseClasses = getPaginationVariant(color, variant, false, isDisabled);
  
  if (isDisabled) {
    return baseClasses;
  }

  // Add specific cursor styling
  const cursorClasses = "transition-all duration-200 ease-in-out hover:scale-105 active:scale-95";
  
  return `${baseClasses} ${cursorClasses}`;
};

/**
 * Get dots separator classes
 * @param size - Size variant
 * @returns CSS classes string
 */
export const getPaginationDotsVariant = (size: PaginationSize): string => {
  const sizeClasses = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-14 h-14 text-xl",
  };

  return `${sizeClasses[size]} flex items-center justify-center text-default-400 cursor-default select-none`;
};

/**
 * Get animation classes for pagination items
 * @param disableAnimation - Whether animations are disabled
 * @param isDisabled - Whether the item is disabled
 * @returns CSS classes string
 */
export const getPaginationAnimation = (
  disableAnimation: boolean = false,
  isDisabled: boolean = false,
): string => {
  if (disableAnimation || isDisabled) {
    return "transition-colors duration-200 ease-in-out";
  }

  return "transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95";
};

/**
 * Get base item classes
 * @param size - Size variant
 * @param radius - Border radius variant
 * @returns CSS classes string
 */
export const getPaginationItemBase = (
  size: PaginationSize,
  radius: PaginationRadius,
): string => {
  const sizeClass = getPaginationSize[size];
  const radiusClass = getPaginationRadius[radius];
  
  return `${sizeClass} ${radiusClass} flex items-center justify-center font-medium select-none outline-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`;
};

/**
 * Get container/wrapper classes
 * @param size - Size variant for spacing
 * @param showShadow - Whether to show shadow
 * @param compact - Whether to use compact spacing
 * @returns CSS classes string
 */
export const getPaginationWrapper = (
  size: PaginationSize,
  showShadow: boolean = false,
  compact: boolean = false,
): string => {
  const spacingClass = compact 
    ? getPaginationSpacing.xs 
    : getPaginationSpacing[size];
  
  const shadowClass = showShadow 
    ? "shadow-sm" 
    : "";

  return `flex items-center justify-center ${spacingClass} ${shadowClass}`.trim();
};

/**
 * Get default configuration values
 */
export const paginationDefaults = {
  size: "md" as PaginationSize,
  color: "primary" as PaginationColor,
  variant: "flat" as PaginationVariant,
  radius: "md" as PaginationRadius,
  siblings: 1,
  showControls: true,
  showFirstLast: false,
  showPages: true,
  showDots: true,
  loop: false,
  compact: false,
  showShadow: false,
  disableAnimation: false,
} as const;