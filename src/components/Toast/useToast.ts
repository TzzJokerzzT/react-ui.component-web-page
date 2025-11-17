import { useCallback } from "react";
import type { UseToastReturn, ToastOptions } from "./types";
import { useToastContext } from "./ToastProvider";

/**
 * Custom hook for easy toast management
 * Provides convenient methods for showing different types of toasts
 * @returns Object with toast methods
 */
export const useToast = (): UseToastReturn => {
  const { addToast, removeToast, removeAllToasts, updateToast } = useToastContext();

  /**
   * Show a generic toast
   */
  const toast = useCallback(
    (message: string, options: ToastOptions = {}): string => {
      return addToast({
        type: "default",
        description: message,
        ...options,
      });
    },
    [addToast]
  );

  /**
   * Show a success toast
   */
  const success = useCallback(
    (message: string, options: Omit<ToastOptions, "type"> = {}): string => {
      return addToast({
        type: "success",
        description: message,
        ...options,
      });
    },
    [addToast]
  );

  /**
   * Show an error toast
   */
  const error = useCallback(
    (message: string, options: Omit<ToastOptions, "type"> = {}): string => {
      return addToast({
        type: "error",
        description: message,
        duration: options.duration ?? 0, // Error toasts don't auto-dismiss by default
        ...options,
      });
    },
    [addToast]
  );

  /**
   * Show a warning toast
   */
  const warning = useCallback(
    (message: string, options: Omit<ToastOptions, "type"> = {}): string => {
      return addToast({
        type: "warning",
        description: message,
        ...options,
      });
    },
    [addToast]
  );

  /**
   * Show an info toast
   */
  const info = useCallback(
    (message: string, options: Omit<ToastOptions, "type"> = {}): string => {
      return addToast({
        type: "info",
        description: message,
        ...options,
      });
    },
    [addToast]
  );

  /**
   * Dismiss a specific toast by ID
   */
  const dismiss = useCallback(
    (id: string): void => {
      removeToast(id);
    },
    [removeToast]
  );

  /**
   * Dismiss all toasts
   */
  const dismissAll = useCallback((): void => {
    removeAllToasts();
  }, [removeAllToasts]);

  /**
   * Update a specific toast by ID
   */
  const update = useCallback(
    (id: string, updates: Partial<any>): void => {
      updateToast(id, updates);
    },
    [updateToast]
  );

  return {
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
    update,
  };
};