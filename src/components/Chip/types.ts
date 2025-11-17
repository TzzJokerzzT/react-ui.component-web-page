import { ReactNode, MouseEvent } from "react";

export type ChipVariant = 
  | "solid" 
  | "bordered" 
  | "light" 
  | "flat" 
  | "faded" 
  | "shadow" 
  | "dot";

export type ChipColor = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "danger";

export type ChipSize = "sm" | "md" | "lg";

export type ChipRadius = "none" | "sm" | "md" | "lg" | "full";

export interface ChipSlots {
  /**
   * The base slot of the chip, it is the container of the chip
   */
  base?: string;
  /**
   * The content slot of the chip, it is the container of the chip children
   */
  content?: string;
  /**
   * Small dot on the left side of the chip. Visible when variant=dot
   */
  dot?: string;
  /**
   * Avatar classes of the chip. Visible when avatar prop is passed
   */
  avatar?: string;
  /**
   * Close button classes of the chip. Visible when onClose prop is passed
   */
  closeButton?: string;
}

export interface ChipProps {
  /**
   * The content to display inside the chip
   */
  children?: ReactNode;
  /**
   * The variant of the chip
   * @default "solid"
   */
  variant?: ChipVariant;
  /**
   * The color of the chip
   * @default "default"
   */
  color?: ChipColor;
  /**
   * The size of the chip
   * @default "md"
   */
  size?: ChipSize;
  /**
   * The radius of the chip
   * @default "full"
   */
  radius?: ChipRadius;
  /**
   * Avatar element to display on the left side
   */
  avatar?: ReactNode;
  /**
   * Content to display at the start of the chip
   */
  startContent?: ReactNode;
  /**
   * Content to display at the end of the chip
   */
  endContent?: ReactNode;
  /**
   * Whether the chip is disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Custom class names for different slots
   */
  classNames?: ChipSlots;
  /**
   * Custom class name for the chip
   */
  className?: string;
  /**
   * Handler called when the close button is clicked
   */
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
}