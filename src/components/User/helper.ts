import type { AvatarProps } from "./types";

/**
 * Get base classes for the User component container
 */
export const getUserBaseClasses = (isFocusable: boolean = false): string => {
  const baseClasses = [
    "flex items-center gap-3",
    "max-w-fit",
  ];

  if (isFocusable) {
    baseClasses.push(
      "cursor-pointer",
      "rounded-lg",
      "px-2 py-1",
      "transition-all duration-200 ease-in-out",
      "hover:bg-gray-100 dark:hover:bg-gray-800",
      "focus:outline-none",
      "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      "data-[focus-visible]:ring-2 data-[focus-visible]:ring-blue-500",
    );
  }

  return baseClasses.join(" ");
};

/**
 * Get classes for the text wrapper
 */
export const getUserWrapperClasses = (): string => {
  return [
    "flex flex-col",
    "justify-center",
    "min-w-0", // Prevents text overflow issues
  ].join(" ");
};

/**
 * Get classes for the user name
 */
export const getUserNameClasses = (): string => {
  return [
    "text-sm font-medium",
    "text-gray-900 dark:text-white",
    "truncate",
  ].join(" ");
};

/**
 * Get classes for the user description
 */
export const getUserDescriptionClasses = (): string => {
  return [
    "text-xs",
    "text-gray-500 dark:text-gray-400",
    "truncate",
  ].join(" ");
};

/**
 * Avatar helper functions
 */

/**
 * Get avatar size classes
 */
export const getAvatarSizeClasses = (size: AvatarProps["size"] = "md"): string => {
  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm", 
    lg: "w-12 h-12 text-base",
  };
  
  return sizeMap[size];
};

/**
 * Get avatar color classes
 */
export const getAvatarColorClasses = (color: AvatarProps["color"] = "default"): string => {
  const colorMap = {
    default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    primary: "bg-blue-500 text-white",
    secondary: "bg-purple-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return colorMap[color];
};

/**
 * Get avatar base classes
 */
export const getAvatarBaseClasses = (
  size: AvatarProps["size"] = "md",
  color: AvatarProps["color"] = "default",
  isSquared: boolean = false,
  isDisabled: boolean = false
): string => {
  const baseClasses = [
    "inline-flex items-center justify-center",
    "overflow-hidden",
    "select-none",
    "flex-shrink-0",
    getAvatarSizeClasses(size),
    getAvatarColorClasses(color),
  ];

  // Shape
  if (isSquared) {
    baseClasses.push("rounded-md");
  } else {
    baseClasses.push("rounded-full");
  }

  // Disabled state
  if (isDisabled) {
    baseClasses.push("opacity-50 cursor-not-allowed");
  }

  return baseClasses.join(" ");
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map(word => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Get image classes for avatar
 */
export const getAvatarImageClasses = (): string => {
  return [
    "w-full h-full",
    "object-cover",
    "rounded-inherit",
  ].join(" ");
};