import type { ReactNode } from "react";

/**
 * Avatar props interface (based on common avatar patterns)
 */
export interface AvatarProps {
  /** Source URL for the avatar image */
  src?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Name to display when image is not available (shows initials) */
  name?: string;
  /** Size variant of the avatar */
  size?: "sm" | "md" | "lg";
  /** Custom CSS classes */
  className?: string;
  /** Whether the avatar should be squared */
  isSquared?: boolean;
  /** Color variant */
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  /** Whether the avatar is disabled */
  isDisabled?: boolean;
  /** Custom fallback element */
  fallback?: ReactNode;
}

/**
 * Props interface for the User component
 */
export interface UserProps {
  /** Name of the user */
  name?: string;
  /** Description or subtitle of the user */
  description?: ReactNode;
  /** Whether the user component is focusable */
  isFocusable?: boolean;
  /** Props to pass to the avatar component */
  avatarProps?: AvatarProps;
  /** Additional CSS classes to apply */
  className?: string;
  /** Custom class names for different slots */
  classNames?: Partial<Record<
    | "base" 
    | "wrapper" 
    | "name" 
    | "description", 
    string
  >>;
  /** Click handler for the user component */
  onClick?: () => void;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}