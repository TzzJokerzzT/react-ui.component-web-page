import { createPortal } from "react-dom";
import type { ToastContainerProps } from "./types";
import { useToastContext } from "./ToastProvider";
import { Toast } from "./Toast";
import { getToastPositionClasses } from "./helper";

/**
 * ToastContainer component that renders all active toasts
 * @param props - ToastContainer component properties
 * @returns JSX element representing the toast container
 */
export const ToastContainer = ({
  position = "top-right",
  className = "",
  maxToasts = 5,
  "data-testid": dataTestId,
}: ToastContainerProps) => {
  const { toasts, removeToast } = useToastContext();

  // Filter toasts by position and limit to maxToasts
  const positionToasts = toasts
    .filter((toast) => (toast.position || position) === position)
    .slice(-maxToasts);

  if (positionToasts.length === 0) {
    return null;
  }

  const positionClasses = getToastPositionClasses(position);
  const baseClasses = "fixed z-50 flex flex-col gap-2 pointer-events-none";

  const combinedClasses = [baseClasses, positionClasses, className]
    .filter(Boolean)
    .join(" ");

  const containerContent = (
    <div className={combinedClasses} data-testid={dataTestId}>
      {positionToasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onRemove={removeToast}
          data-testid={`toast-${toast.id}`}
        />
      ))}
    </div>
  );

  // Use portal to render toasts at the document body level
  return createPortal(containerContent, document.body);
};

/**
 * ToastViewport component that renders all toast containers for all positions
 * This is a convenience component that renders containers for all positions
 */
export const ToastViewport = ({
  className = "",
  maxToasts = 5,
  "data-testid": dataTestId,
}: Omit<ToastContainerProps, "position">) => {
  const positions = [
    "top",
    "top-left", 
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right",
  ] as const;

  return (
    <>
      {positions.map((position) => (
        <ToastContainer
          key={position}
          position={position}
          className={className}
          maxToasts={maxToasts}
          data-testid={dataTestId ? `${dataTestId}-${position}` : undefined}
        />
      ))}
    </>
  );
};