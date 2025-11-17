import { forwardRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { progressVariants, getProgressPercent, formatProgressValue } from "./variants";
import type { ProgressProps } from "./types";

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      maxValue = 100,
      minValue = 0,
      color = "primary",
      size = "md",
      radius = "full",
      showValueLabel = false,
      label,
      isStriped = false,
      isIndeterminate = false,
      isDisabled = false,
      className,
      classNames,
      ...props
    },
    ref
  ) => {
    const percentage = getProgressPercent(value, minValue, maxValue);
    const valueLabel = formatProgressValue(value, maxValue, minValue);

    const slots = progressVariants({
      color,
      size,
      radius,
      isStriped,
      isIndeterminate,
      isDisabled,
    });

    return (
      <div
        ref={ref}
        className={twMerge(slots.base(), classNames?.base, className)}
        role="progressbar"
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
        aria-valuenow={isIndeterminate ? undefined : value}
        aria-valuetext={isIndeterminate ? "Cargando..." : valueLabel}
        {...props}
      >
        {/* Label and value */}
        {(label || showValueLabel) && (
          <div className={twMerge(slots.labelWrapper(), classNames?.label)}>
            {label && (
              <span className={twMerge(slots.label(), classNames?.label)}>
                {label}
              </span>
            )}
            {showValueLabel && !isIndeterminate && (
              <span className={twMerge(slots.value(), classNames?.value)}>
                {valueLabel}
              </span>
            )}
          </div>
        )}

        {/* Progress track */}
        <div className={twMerge(slots.track(), classNames?.track)}>
          {/* Progress indicator */}
          <motion.div
            className={twMerge(slots.indicator(), classNames?.indicator)}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ 
              scaleX: isIndeterminate ? 1 : percentage / 100,
              x: isIndeterminate ? ["-100%", "300%"] : 0
            }}
            transition={
              isIndeterminate
                ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.5, ease: "easeOut" }
            }
            style={
              isIndeterminate
                ? { width: "33%", transformOrigin: "left center" }
                : { transformOrigin: "left center" }
            }
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";

export default Progress;