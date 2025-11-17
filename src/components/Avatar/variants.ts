import { tv, type VariantProps } from 'tailwind-variants';
import type { AvatarColor, AvatarRadius, AvatarSize } from './types';

/**
 * Avatar base styles and variants following HeroUI design system
 */
export const avatarVariants = tv({
  // Base styles - common to all avatars
  base: [
    "relative inline-flex items-center justify-center overflow-hidden font-medium",
    "text-center align-middle",
    "box-border select-none",
    // Focus styles
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    // Transition
    "transition-all duration-200 ease-in-out",
  ],
  variants: {
    // Size variants
    size: {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm", 
      lg: "w-14 h-14 text-base",
    },
    // Color variants with background and text colors
    color: {
      default: [
        "bg-default-100 text-default-foreground",
        "focus:ring-default-500",
      ],
      primary: [
        "bg-primary-100 text-primary-foreground", 
        "focus:ring-primary-500",
      ],
      secondary: [
        "bg-secondary-100 text-secondary-foreground",
        "focus:ring-secondary-500", 
      ],
      success: [
        "bg-success-100 text-success-foreground",
        "focus:ring-success-500",
      ],
      warning: [
        "bg-warning-100 text-warning-foreground", 
        "focus:ring-warning-500",
      ],
      danger: [
        "bg-danger-100 text-danger-foreground",
        "focus:ring-danger-500",
      ],
    },
    // Radius variants
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md", 
      lg: "rounded-lg",
      full: "rounded-full",
    },
    // Border variant
    isBordered: {
      true: "ring-2 ring-offset-2 ring-white dark:ring-offset-background",
      false: "",
    },
    // Disabled state
    isDisabled: {
      true: "opacity-30 cursor-not-allowed pointer-events-none",
      false: "cursor-pointer",
    },
    // Focusable state
    isFocusable: {
      true: "cursor-pointer",
      false: "",
    },
  },
  // Color-specific border colors when bordered
  compoundVariants: [
    {
      color: "default",
      isBordered: true,
      class: "ring-default-300 dark:ring-default-600",
    },
    {
      color: "primary", 
      isBordered: true,
      class: "ring-primary-300 dark:ring-primary-600",
    },
    {
      color: "secondary",
      isBordered: true, 
      class: "ring-secondary-300 dark:ring-secondary-600",
    },
    {
      color: "success",
      isBordered: true,
      class: "ring-success-300 dark:ring-success-600", 
    },
    {
      color: "warning",
      isBordered: true,
      class: "ring-warning-300 dark:ring-warning-600",
    },
    {
      color: "danger",
      isBordered: true,
      class: "ring-danger-300 dark:ring-danger-600",
    },
    // Disabled state removes cursor pointer
    {
      isDisabled: true,
      isFocusable: true,
      class: "cursor-not-allowed",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "default", 
    radius: "full",
    isBordered: false,
    isDisabled: false,
    isFocusable: false,
  },
});

/**
 * Avatar image styles
 */
export const avatarImageVariants = tv({
  base: [
    "w-full h-full object-cover",
    "transition-opacity duration-200 ease-in-out",
  ],
});

/**
 * Avatar fallback styles  
 */
export const avatarFallbackVariants = tv({
  base: [
    "w-full h-full flex items-center justify-center",
    "bg-inherit text-inherit",
  ],
});

/**
 * Avatar name/initials styles
 */
export const avatarNameVariants = tv({
  base: [
    "font-medium uppercase select-none",
    "text-inherit leading-none",
  ],
});

/**
 * Avatar icon styles
 */
export const avatarIconVariants = tv({
  base: [
    "w-1/2 h-1/2 text-inherit",
    "flex items-center justify-center",
  ],
});

/**
 * Avatar Group base styles
 */
export const avatarGroupVariants = tv({
  base: [
    "flex items-center",
  ],
  variants: {
    isGrid: {
      true: "flex-wrap gap-2",
      false: "flex-row",
    },
  },
  defaultVariants: {
    isGrid: false,
  },
});

/**
 * Avatar Group count indicator styles
 */
export const avatarGroupCountVariants = tv({
  base: [
    "inline-flex items-center justify-center font-medium",
    "bg-default-100 text-default-foreground",
    "border border-background",
    "select-none transition-all duration-200",
  ],
  variants: {
    size: {
      sm: "w-8 h-8 text-xs ml-[-8px]",
      md: "w-10 h-10 text-sm ml-[-10px]",
      lg: "w-14 h-14 text-base ml-[-14px]",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm", 
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    isGrid: {
      true: "ml-0",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    radius: "full",
    isGrid: false,
  },
});

/**
 * Helper functions to get variant classes
 */
export type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export type AvatarGroupVariantProps = VariantProps<typeof avatarGroupVariants>;
export type AvatarGroupCountVariantProps = VariantProps<typeof avatarGroupCountVariants>;

/**
 * Get avatar classes based on props
 */
export const getAvatarClasses = (props: AvatarVariantProps) => {
  return avatarVariants(props);
};

/**
 * Get avatar group classes based on props  
 */
export const getAvatarGroupClasses = (props: AvatarGroupVariantProps) => {
  return avatarGroupVariants(props);
};

/**
 * Get avatar group count classes based on props
 */
export const getAvatarGroupCountClasses = (props: AvatarGroupCountVariantProps) => {
  return avatarGroupCountVariants(props);
};

/**
 * Utility function to generate initials from a name
 * Follows HeroUI's default behavior
 */
export const getDefaultInitials = (name: string): string => {
  if (!name) return '';
  
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    // Single word: take first two characters
    return words[0].substring(0, 2).toUpperCase();
  }
  
  // Multiple words: take first character of each word (max 2)
  return words
    .slice(0, 2)
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
};

/**
 * Generate accessible background color based on name
 * Creates a consistent color for the same name
 */
export const getNameBackgroundColor = (name: string): string => {
  if (!name) return '';
  
  // Simple hash function to generate consistent color
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Generate HSL color with fixed saturation and lightness for accessibility
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 80%)`;
};

/**
 * Avatar defaults following HeroUI specifications
 */
export const avatarDefaults = {
  size: 'md' as AvatarSize,
  color: 'default' as AvatarColor,
  radius: 'full' as AvatarRadius,
  isBordered: false,
  isDisabled: false,
  isFocusable: false,
  showFallback: false,
} as const;

/**
 * Avatar Group defaults
 */
export const avatarGroupDefaults = {
  max: 5,
  isGrid: false,
  isDisabled: false,
  isBordered: false,
} as const;