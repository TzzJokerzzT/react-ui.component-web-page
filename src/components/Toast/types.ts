import type { ReactNode } from "react";

/**
 * Toast types for different notification styles
 */
export type ToastType = "success" | "error" | "warning" | "info" | "default";

/**
 * Toast positions on the screen
 */
export type ToastPosition =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right";

/**
 * Toast sizes
 */
export type ToastSize = "sm" | "md" | "lg";

/**
 * Toast variants
 */
export type ToastVariant = "solid" | "bordered" | "flat" | "faded" | "shadow";

/**
 * Toast radius options
 */
export type ToastRadius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Individual toast item interface
 */
export interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  description?: string;
  duration?: number;
  closable?: boolean;
  action?: ReactNode;
  icon?: ReactNode;
  position?: ToastPosition;
  size?: ToastSize;
  variant?: ToastVariant;
  radius?: ToastRadius;
  className?: string;
  onClose?: (id: string) => void;
}

/**
 * Toast component props
 */
export interface ToastProps extends ToastItem {
  onRemove: (id: string) => void;
  "data-testid"?: string;
}

/**
 * Toast container props
 */
export interface ToastContainerProps {
  position?: ToastPosition;
  className?: string;
  maxToasts?: number;
  "data-testid"?: string;
}

/**
 * Toast provider props
 */
export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
  defaultDuration?: number;
  className?: string;
}

/**
 * Toast context interface
 */
export interface ToastContextType {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, "id">) => string;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
  updateToast: (id: string, updates: Partial<ToastItem>) => void;
}

/**
 * Toast options for quick methods
 */
export interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  closable?: boolean;
  action?: ReactNode;
  icon?: ReactNode;
  position?: ToastPosition;
  size?: ToastSize;
  variant?: ToastVariant;
  radius?: ToastRadius;
  className?: string;
  onClose?: (id: string) => void;
}

/**
 * UseToast hook return type
 */
export interface UseToastReturn {
  toast: (message: string, options?: ToastOptions) => string;
  success: (message: string, options?: Omit<ToastOptions, "type">) => string;
  error: (message: string, options?: Omit<ToastOptions, "type">) => string;
  warning: (message: string, options?: Omit<ToastOptions, "type">) => string;
  info: (message: string, options?: Omit<ToastOptions, "type">) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
  update: (id: string, updates: Partial<ToastItem>) => void;
}