import { useEffect, useState } from "react";
import type { ToastProps } from "./types";
import {
  getToastSize,
  getToastRadius,
  getToastVariant,
  getToastAnimationClasses,
  getToastIconClasses,
  getDefaultToastIcon,
} from "./helper";

/**
 * Default Toast icon component
 */
const ToastIcon = ({ type, customIcon }: { type: string; customIcon?: React.ReactNode }) => {
  if (customIcon) {
    return <div className="flex-shrink-0">{customIcon}</div>;
  }

  const iconClasses = getToastIconClasses(type as any);
  const iconSvg = getDefaultToastIcon(type as any);

  return (
    <div 
      className={`flex-shrink-0 ${iconClasses}`}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
    />
  );
};

/**
 * Toast component for displaying notifications
 * @param props - Toast component properties
 * @returns JSX element representing a toast notification
 */
export const Toast = ({
  id,
  type = "default",
  title,
  description,
  closable = true,
  action,
  icon,
  size = "md",
  variant = "solid",
  radius = "md",
  position = "top-right",
  className = "",
  onRemove,
  onClose,
  "data-testid": dataTestId,
}: ToastProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const baseClasses = "flex items-start gap-3 border w-full max-w-sm pointer-events-auto";
  const sizeClasses = getToastSize[size];
  const radiusClasses = getToastRadius[radius];
  const variantClasses = getToastVariant(type, variant);
  const animationClasses = getToastAnimationClasses(position);

  const combinedClasses = [
    baseClasses,
    sizeClasses,
    radiusClasses,
    variantClasses,
    isExiting ? animationClasses.exit : animationClasses.enter,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  /**
   * Handle toast removal with animation
   */
  const handleRemove = () => {
    if (onClose) {
      onClose(id);
    }
    
    setIsExiting(true);
    // Wait for animation to complete before removing
    setTimeout(() => {
      onRemove(id);
    }, 200);
  };

  /**
   * Auto-remove logic handled in provider, but we can also handle it here for manual control
   */
  useEffect(() => {
    return () => {
      // Cleanup any timers if needed
    };
  }, []);

  return (
    <div className={combinedClasses} data-testid={dataTestId}>
      {/* Icon */}
      {(icon !== false) && (
        <ToastIcon type={type} customIcon={icon} />
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <div className="font-semibold text-sm mb-1 break-words">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm opacity-90 break-words">
            {description}
          </div>
        )}
        {action && (
          <div className="mt-2">
            {action}
          </div>
        )}
      </div>

      {/* Close button */}
      {closable && (
        <button
          onClick={handleRemove}
          className="flex-shrink-0 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-1 dark:focus:ring-offset-gray-800"
          aria-label="Close notification"
          type="button"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};