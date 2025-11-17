import type { ImageRadius, ImageShadow } from "./types";

/**
 * Get radius classes for Image component
 */
export const getImageRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md", 
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

/**
 * Get shadow classes for Image component
 */
export const getImageShadow = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
} as const;

/**
 * Get base wrapper classes for Image component
 * @param isZoomed - Whether zoom effect is enabled
 * @returns CSS classes string
 */
export const getImageWrapperClasses = (isZoomed: boolean = false): string => {
  const baseClasses = "relative inline-block overflow-hidden";
  const zoomClasses = isZoomed 
    ? "cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" 
    : "";
  
  return [baseClasses, zoomClasses].filter(Boolean).join(" ");
};

/**
 * Get zoomed wrapper classes for Image component
 * @returns CSS classes string
 */
export const getImageZoomedWrapperClasses = (): string => {
  return "relative overflow-hidden";
};

/**
 * Get main image classes for Image component
 * @param radius - Border radius variant
 * @param shadow - Shadow variant
 * @param isLoading - Whether image is loading
 * @returns CSS classes string
 */
export const getImageClasses = (
  radius: ImageRadius = "lg",
  shadow: ImageShadow = "none",
  isLoading: boolean = false
): string => {
  const radiusClasses = getImageRadius[radius];
  const shadowClasses = getImageShadow[shadow];
  const baseClasses = "max-w-full h-auto object-cover";
  const loadingClasses = isLoading 
    ? "opacity-0 transition-opacity duration-500 ease-in-out" 
    : "opacity-100 transition-opacity duration-500 ease-in-out";
  
  return [baseClasses, radiusClasses, shadowClasses, loadingClasses]
    .filter(Boolean)
    .join(" ");
};

/**
 * Get blurred image classes for Image component
 * @param radius - Border radius variant
 * @returns CSS classes string
 */
export const getBlurredImageClasses = (radius: ImageRadius = "lg"): string => {
  const radiusClasses = getImageRadius[radius];
  const baseClasses = "absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30";
  
  return [baseClasses, radiusClasses].filter(Boolean).join(" ");
};

/**
 * Get skeleton loading classes for Image component
 * @param radius - Border radius variant
 * @returns CSS classes string
 */
export const getSkeletonClasses = (radius: ImageRadius = "lg"): string => {
  const radiusClasses = getImageRadius[radius];
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700";
  
  return [baseClasses, radiusClasses].filter(Boolean).join(" ");
};