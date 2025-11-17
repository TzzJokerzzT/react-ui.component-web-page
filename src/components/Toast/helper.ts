import type { ToastType, ToastSize, ToastVariant, ToastRadius, ToastPosition } from "./types";

/**
 * Toast size classes
 */
export const getToastSize: Record<ToastSize, string> = {
  sm: "p-3 text-sm",
  md: "p-4 text-base", 
  lg: "p-5 text-lg",
};

/**
 * Toast radius classes
 */
export const getToastRadius: Record<ToastRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg", 
  full: "rounded-full",
};

/**
 * Toast variant and type combination classes
 */
export const getToastVariant = (type: ToastType, variant: ToastVariant): string => {
  const variants = {
    solid: {
      success: "bg-green-500 text-white border-green-500 dark:bg-green-600 dark:border-green-600",
      error: "bg-red-500 text-white border-red-500 dark:bg-red-600 dark:border-red-600",
      warning: "bg-yellow-500 text-white border-yellow-500 dark:bg-yellow-600 dark:border-yellow-600", 
      info: "bg-blue-500 text-white border-blue-500 dark:bg-blue-600 dark:border-blue-600",
      default: "bg-gray-500 text-white border-gray-500 dark:bg-gray-600 dark:border-gray-600",
    },
    bordered: {
      success: "bg-transparent text-green-600 border-green-500 border-2 dark:bg-gray-800 dark:text-green-400 dark:border-green-500",
      error: "bg-transparent text-red-600 border-red-500 border-2 dark:bg-gray-800 dark:text-red-400 dark:border-red-500",
      warning: "bg-transparent text-yellow-600 border-yellow-500 border-2 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-500",
      info: "bg-transparent text-blue-600 border-blue-500 border-2 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-500", 
      default: "bg-transparent text-gray-600 border-gray-500 border-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500",
    },
    flat: {
      success: "bg-green-100 text-green-800 border-green-100 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
      error: "bg-red-100 text-red-800 border-red-100 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
      info: "bg-blue-100 text-blue-800 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
      default: "bg-gray-100 text-gray-800 border-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
    },
    faded: {
      success: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700",
      error: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700", 
      warning: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-700",
      info: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700",
      default: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600",
    },
    shadow: {
      success: "bg-white text-green-600 border-green-200 shadow-lg shadow-green-500/25 dark:bg-gray-800 dark:text-green-400 dark:border-green-700 dark:shadow-green-500/10",
      error: "bg-white text-red-600 border-red-200 shadow-lg shadow-red-500/25 dark:bg-gray-800 dark:text-red-400 dark:border-red-700 dark:shadow-red-500/10",
      warning: "bg-white text-yellow-600 border-yellow-200 shadow-lg shadow-yellow-500/25 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-700 dark:shadow-yellow-500/10",
      info: "bg-white text-blue-600 border-blue-200 shadow-lg shadow-blue-500/25 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-700 dark:shadow-blue-500/10",
      default: "bg-white text-gray-600 border-gray-200 shadow-lg shadow-gray-500/25 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:shadow-gray-900/25",
    },
  };

  return variants[variant][type] || variants.solid.default;
};

/**
 * Toast position container classes
 */
export const getToastPositionClasses = (position: ToastPosition): string => {
  const positions = {
    top: "top-4 left-1/2 transform -translate-x-1/2",
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4", 
    bottom: "bottom-4 left-1/2 transform -translate-x-1/2",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return positions[position] || positions["top-right"];
};

/**
 * Toast animation classes based on position
 */
export const getToastAnimationClasses = (position: ToastPosition): { enter: string; exit: string } => {
  const animations = {
    top: {
      enter: "animate-[toast-slide-in-top_0.3s_ease-out]",
      exit: "animate-[toast-slide-out-top_0.2s_ease-in]"
    },
    "top-left": {
      enter: "animate-[toast-slide-in-left_0.3s_ease-out]",
      exit: "animate-[toast-slide-out-left_0.2s_ease-in]"
    },
    "top-right": {
      enter: "animate-[toast-slide-in-right_0.3s_ease-out]", 
      exit: "animate-[toast-slide-out-right_0.2s_ease-in]"
    },
    bottom: {
      enter: "animate-[toast-slide-in-bottom_0.3s_ease-out]",
      exit: "animate-[toast-slide-out-bottom_0.2s_ease-in]"
    },
    "bottom-left": {
      enter: "animate-[toast-slide-in-left_0.3s_ease-out]",
      exit: "animate-[toast-slide-out-left_0.2s_ease-in]"
    },
    "bottom-right": {
      enter: "animate-[toast-slide-in-right_0.3s_ease-out]",
      exit: "animate-[toast-slide-out-right_0.2s_ease-in]"
    },
  };

  return animations[position] || animations["top-right"];
};

/**
 * Toast icon classes based on type
 */
export const getToastIconClasses = (type: ToastType): string => {
  const icons = {
    success: "text-green-500 dark:text-green-400",
    error: "text-red-500 dark:text-red-400",
    warning: "text-yellow-500 dark:text-yellow-400",
    info: "text-blue-500 dark:text-blue-400", 
    default: "text-gray-500 dark:text-gray-400",
  };

  return icons[type] || icons.default;
};

/**
 * Default icons for toast types (SVG strings)
 */
export const getDefaultToastIcon = (type: ToastType): string => {
  const icons = {
    success: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`,
    error: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>`,
    warning: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>`,
    info: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>`,
    default: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>`,
  };

  return icons[type] || icons.default;
};

/**
 * Generate unique toast ID
 */
export const generateToastId = (): string => {
  return `toast-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
};