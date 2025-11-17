import type { HTMLAttributes } from "react";

export type ProgressColor = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "danger";

export type ProgressSize = "sm" | "md" | "lg";

export type ProgressRadius = "none" | "sm" | "md" | "lg" | "full";

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The current progress value (0-100)
   */
  value?: number;
  /**
   * The maximum value for progress calculation
   * @default 100
   */
  maxValue?: number;
  /**
   * The minimum value for progress calculation
   * @default 0
   */
  minValue?: number;
  /**
   * The color theme of the progress bar
   * @default "primary"
   */
  color?: ProgressColor;
  /**
   * The size of the progress bar
   * @default "md"
   */
  size?: ProgressSize;
  /**
   * The radius of the progress bar
   * @default "full"
   */
  radius?: ProgressRadius;
  /**
   * Whether to show the progress percentage as text
   * @default false
   */
  showValueLabel?: boolean;
  /**
   * Custom label to display instead of percentage
   */
  label?: string;
  /**
   * Whether to show a striped pattern
   * @default false
   */
  isStriped?: boolean;
  /**
   * Whether the progress is in an indeterminate state
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * Whether to disable the progress bar
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Custom class name for the progress bar
   */
  className?: string;
  /**
   * Custom class name for the progress bar track
   */
  classNames?: {
    base?: string;
    track?: string;
    indicator?: string;
    label?: string;
    value?: string;
  };
}