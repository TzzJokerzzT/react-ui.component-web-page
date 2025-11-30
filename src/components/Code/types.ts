import { ReactNode } from "react";

export type CodeSize = "sm" | "md" | "lg";

export type CodeColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type CodeRadius = "none" | "sm" | "md" | "lg" | "full";

export interface CodeProps {
  /**
   * The code content to display
   */
  children: ReactNode;
  /**
   * The size of the code block
   * @default "sm"
   */
  size?: CodeSize;
  /**
   * The color theme of the code block
   * @default "default"
   */
  color?: CodeColor;
  /**
   * The border radius of the code block
   * @default "sm"
   */
  radius?: CodeRadius;
  /**
   * Custom class name for the code element
   */
  className?: string;
  /**
   * Whether to disable animations
   * @default false
   */
  disableAnimation?: boolean;
}
