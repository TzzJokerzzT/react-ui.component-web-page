import { ReactNode, ComponentPropsWithoutRef, ElementType } from 'react';

/**
 * Avatar color variants following HeroUI design system
 */
export type AvatarColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

/**
 * Avatar radius variants
 */
export type AvatarRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

/**
 * Avatar size variants
 */
export type AvatarSize = 'sm' | 'md' | 'lg';

/**
 * Avatar slots for styling customization
 */
export interface AvatarSlots {
  /** Avatar wrapper, includes styles for focus ring, position, and general appearance */
  base: string;
  /** Image element within the avatar, includes styles for opacity transition and size */
  img: string;
  /** Fallback content when the image fails to load or is not provided */
  fallback: string;
  /** Initials displayed when image is not provided or fails to load */
  name: string;
  /** Icon element within the avatar, includes styles for centering and size */
  icon: string;
}

/**
 * Function to generate custom initials from name
 */
export type GetInitialsFunction = (name: string) => string;

/**
 * Base Avatar component props
 */
export interface AvatarProps extends Omit<ComponentPropsWithoutRef<"div">, "color"> {
  /** Image source URL for the avatar */
  src?: string;
  /** Color theme of the avatar */
  color?: AvatarColor;
  /** Border radius of the avatar */
  radius?: AvatarRadius;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Name for generating initials and accessible background color */
  name?: string;
  /** Custom icon to display as fallback */
  icon?: ReactNode;
  /** Custom fallback component when image fails to load */
  fallback?: ReactNode;
  /** Whether the avatar should have a border */
  isBordered?: boolean;
  /** Whether the avatar is disabled */
  isDisabled?: boolean;
  /** Whether the avatar can receive focus */
  isFocusable?: boolean;
  /** Whether to show fallback when image fails to load */
  showFallback?: boolean;
  /** Custom component to use for the image element */
  ImgComponent?: ElementType;
  /** Props to pass to the image component */
  imgProps?: ComponentPropsWithoutRef<"img">;
  /** Custom function to generate initials from name */
  getInitials?: GetInitialsFunction;
  /** Custom class names for avatar slots */
  classNames?: Partial<Record<keyof AvatarSlots, string>>;
  /** Component to render as (default: "div") */
  as?: ElementType;
  /** Data test id for testing */
  "data-testid"?: string;
}

/**
 * Avatar Group slots for styling customization
 */
export interface AvatarGroupSlots {
  /** Base wrapper for the avatar group */
  base: string;
  /** Count indicator showing additional avatars */
  count: string;
}

/**
 * Avatar Group component props
 */
export interface AvatarGroupProps extends Omit<ComponentPropsWithoutRef<"div">, "color"> {
  /** Maximum number of avatars to display */
  max?: number;
  /** Total number of avatars (for count display) */
  total?: number;
  /** Size applied to all avatars in the group */
  size?: AvatarSize;
  /** Color applied to all avatars in the group */
  color?: AvatarColor;
  /** Radius applied to all avatars in the group */
  radius?: AvatarRadius;
  /** Whether to display avatars in a grid layout */
  isGrid?: boolean;
  /** Whether all avatars in the group are disabled */
  isDisabled?: boolean;
  /** Whether all avatars in the group should have borders */
  isBordered?: boolean;
  /** Custom function to render the count indicator */
  renderCount?: (count: number) => ReactNode;
  /** Custom class names for avatar group slots */
  classNames?: Partial<Record<keyof AvatarGroupSlots, string>>;
  /** Data test id for testing */
  "data-testid"?: string;
}

/**
 * Avatar Group context value
 */
export interface AvatarGroupContextValue {
  /** Size applied to all avatars in the group */
  size?: AvatarSize;
  /** Color applied to all avatars in the group */
  color?: AvatarColor;
  /** Radius applied to all avatars in the group */
  radius?: AvatarRadius;
  /** Whether all avatars in the group are disabled */
  isDisabled?: boolean;
  /** Whether all avatars in the group should have borders */
  isBordered?: boolean;
  /** Maximum number of avatars to display */
  max?: number;
  /** Total number of avatars */
  total?: number;
  /** Whether to display avatars in a grid layout */
  isGrid?: boolean;
  /** Custom function to render the count indicator */
  renderCount?: (count: number) => ReactNode;
}

/**
 * Avatar hook return type for custom implementations
 */
export interface UseAvatarReturn {
  /** Whether the image has loaded successfully */
  isImgLoaded: boolean;
  /** Whether to show the fallback content */
  shouldShowFallback: boolean;
  /** Generated initials from name */
  initials: string;
  /** Props for the image element */
  imgProps: ComponentPropsWithoutRef<"img">;
  /** Props for the base wrapper element */
  baseProps: ComponentPropsWithoutRef<"div">;
  /** Props for the fallback element */
  fallbackProps: ComponentPropsWithoutRef<"div">;
}

/**
 * Avatar Group hook return type for custom implementations
 */
export interface UseAvatarGroupReturn {
  /** Context value for child avatars */
  context: AvatarGroupContextValue;
  /** Number of remaining avatars not displayed */
  remainingCount: number;
  /** Whether to show the count indicator */
  shouldShowCount: boolean;
  /** Props for the base wrapper element */
  baseProps: ComponentPropsWithoutRef<"div">;
  /** Props for the count element */
  countProps: ComponentPropsWithoutRef<"div">;
}

/**
 * Default Avatar Icon component props
 */
export interface AvatarIconProps extends ComponentPropsWithoutRef<"svg"> {
  /** Size of the icon */
  size?: number;
  /** Custom class name */
  className?: string;
}