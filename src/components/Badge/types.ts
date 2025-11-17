import { ReactNode } from "react";

export type BadgeVariant = "solid" | "flat" | "faded" | "shadow";

export type BadgeColor = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "danger";

export type BadgeSize = "sm" | "md" | "lg";

export type BadgeShape = "circle" | "rectangle";

export type BadgePlacement = 
  | "top-right" 
  | "top-left" 
  | "bottom-right" 
  | "bottom-left";

export interface BadgeSlots {
  /**
   * Container element that wraps the content and badge
   */
  base?: string;
  /**
   * Badge element that displays the badge content
   */
  badge?: string;
}

export interface BadgeProps {
  /**
   * The children to wrap with the badge
   */
  children?: ReactNode;
  /**
   * The content to display in the badge
   */
  content?: ReactNode;
  /**
   * The variant of the badge
   * @default "solid"
   */
  variant?: BadgeVariant;
  /**
   * The color of the badge
   * @default "default"
   */
  color?: BadgeColor;
  /**
   * The size of the badge
   * @default "md"
   */
  size?: BadgeSize;
  /**
   * The shape of the badge
   * @default "rectangle"
   */
  shape?: BadgeShape;
  /**
   * The placement of the badge relative to its children
   * @default "top-right"
   */
  placement?: BadgePlacement;
  /**
   * Whether the badge is visible
   * @default true
   */
  isOneChar?: boolean;
  /**
   * Whether to show an outline around the badge
   * @default false
   */
  showOutline?: boolean;
  /**
   * Whether the badge should be invisible
   * @default false
   */
  isInvisible?: boolean;
  /**
   * Whether to disable the scale animation
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Custom class names for different slots
   */
  classNames?: BadgeSlots;
  /**
   * Custom class name for the base element
   */
  className?: string;
}