import { createContext, useContext, useCallback, useReducer, useEffect } from "react";
import type { ToastItem, ToastContextType, ToastProviderProps } from "./types";
import { generateToastId } from "./helper";

/**
 * Toast context
 */
const ToastContext = createContext<ToastContextType | undefined>(undefined);

/**
 * Toast actions for reducer
 */
type ToastAction =
  | { type: "ADD_TOAST"; payload: ToastItem }
  | { type: "REMOVE_TOAST"; payload: string }
  | { type: "REMOVE_ALL_TOASTS" }
  | { type: "UPDATE_TOAST"; payload: { id: string; updates: Partial<ToastItem> } };

/**
 * Toast reducer
 */
function toastReducer(state: ToastItem[], action: ToastAction): ToastItem[] {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.payload];
    case "REMOVE_TOAST":
      return state.filter((toast) => toast.id !== action.payload);
    case "REMOVE_ALL_TOASTS":
      return [];
    case "UPDATE_TOAST":
      return state.map((toast) =>
        toast.id === action.payload.id ? { ...toast, ...action.payload.updates } : toast
      );
    default:
      return state;
  }
}

/**
 * Toast Provider component
 * Provides toast functionality to the application
 * @param props - ToastProvider component properties
 * @returns JSX element representing the toast provider
 */
export const ToastProvider = ({
  children,
  position = "top-right",
  maxToasts = 5,
  defaultDuration = 5000,
}: ToastProviderProps) => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  /**
   * Add a new toast
   */
  const addToast = useCallback(
    (toast: Omit<ToastItem, "id">): string => {
      const id = generateToastId();
      const newToast: ToastItem = {
        ...{
          type: "default" as const,
          duration: defaultDuration,
          closable: true,
          position,
          size: "md" as const,
          variant: "solid" as const,
          radius: "md" as const,
        },
        ...toast,
        id,
      };

      dispatch({ type: "ADD_TOAST", payload: newToast });

      // Auto-remove toast after duration (if duration > 0)
      if (newToast.duration && newToast.duration > 0) {
        setTimeout(() => {
          dispatch({ type: "REMOVE_TOAST", payload: id });
        }, newToast.duration);
      }

      return id;
    },
    [defaultDuration, position]
  );

  /**
   * Remove a toast by ID
   */
  const removeToast = useCallback((id: string) => {
    dispatch({ type: "REMOVE_TOAST", payload: id });
  }, []);

  /**
   * Remove all toasts
   */
  const removeAllToasts = useCallback(() => {
    dispatch({ type: "REMOVE_ALL_TOASTS" });
  }, []);

  /**
   * Update a toast by ID
   */
  const updateToast = useCallback((id: string, updates: Partial<ToastItem>) => {
    dispatch({ type: "UPDATE_TOAST", payload: { id, updates } });
  }, []);

  /**
   * Limit the number of toasts displayed
   */
  useEffect(() => {
    if (toasts.length > maxToasts) {
      const excessToasts = toasts.slice(0, toasts.length - maxToasts);
      excessToasts.forEach((toast) => {
        dispatch({ type: "REMOVE_TOAST", payload: toast.id });
      });
    }
  }, [toasts, maxToasts]);

  const contextValue: ToastContextType = {
    toasts,
    addToast,
    removeToast,
    removeAllToasts,
    updateToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

/**
 * Custom hook to use toast context
 * @returns Toast context value
 * @throws Error if used outside ToastProvider
 */
export const useToastContext = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};