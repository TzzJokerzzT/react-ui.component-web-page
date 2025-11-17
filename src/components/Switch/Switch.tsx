import { useState, useRef, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type {
  SwitchProps,
  SwitchWrapperProps,
  SwitchThumbProps,
} from "./types";
import {
  getSwitchBaseClasses,
  getSwitchWrapperClasses,
  getSwitchLabelClasses,
  getSwitchContentClasses,
  getSwitchThumbIconClasses,
  getSwitchHiddenInputClasses,
  getSwitchSize,
} from "./helper";

/**
 * Enhanced Switch component with framer-motion animations
 * Supports multiple sizes, colors, states, and custom icons
 * @param props - Switch component properties
 * @returns JSX element representing a styled switch with smooth animations
 */
export const Switch = ({
  children,
  value,
  name,
  size = "md",
  color = "primary",
  thumbIcon: ThumbIconComponent,
  startContent,
  endContent,
  isSelected: controlledSelected,
  defaultSelected = false,
  isReadOnly = false,
  isDisabled = false,
  disableAnimation = false,
  className = "",
  classNames,
  onChange,
  onValueChange,
  "data-testid": dataTestId,
}: SwitchProps) => {
  // Internal state for uncontrolled mode
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const inputRef = useRef<HTMLInputElement>(null);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledSelected !== undefined;
  const isSelected = isControlled ? controlledSelected : internalSelected;

  // Handle switch change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled || isReadOnly) return;

    const newSelected = event.target.checked;

    // Update internal state for uncontrolled mode
    if (!isControlled) {
      setInternalSelected(newSelected);
    }

    // Call event handlers
    onChange?.(event);
    onValueChange?.(newSelected);
  };

  // Handle click on entire switch area to toggle
  const handleSwitchClick = () => {
    if (isDisabled || isReadOnly) return;
    inputRef.current?.click();
  };

  // Size configuration is used in SwitchThumb component

  // Get combined classes
  const baseClasses = getSwitchBaseClasses(isDisabled);
  const combinedBaseClasses = [baseClasses, classNames?.base, className]
    .filter(Boolean)
    .join(" ");

  const wrapperClasses = getSwitchWrapperClasses(
    size,
    color,
    isSelected,
    isDisabled,
    disableAnimation,
  );
  const combinedWrapperClasses = [wrapperClasses, classNames?.wrapper]
    .filter(Boolean)
    .join(" ");

  const labelClasses = getSwitchLabelClasses(size, isDisabled);
  const combinedLabelClasses = [labelClasses, classNames?.label]
    .filter(Boolean)
    .join(" ");

  const startContentClasses = getSwitchContentClasses(size, isDisabled);
  const combinedStartContentClasses = [
    startContentClasses,
    classNames?.startContent,
  ]
    .filter(Boolean)
    .join(" ");

  const endContentClasses = getSwitchContentClasses(size, isDisabled);
  const combinedEndContentClasses = [endContentClasses, classNames?.endContent]
    .filter(Boolean)
    .join(" ");

  const hiddenInputClasses = getSwitchHiddenInputClasses();
  const combinedHiddenInputClasses = [
    hiddenInputClasses,
    classNames?.hiddenInput,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={combinedBaseClasses} data-testid={dataTestId}>
      {startContent && (
        <motion.div
          className={combinedStartContentClasses}
          data-testid={`${dataTestId}-start-content`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: disableAnimation ? 0 : 0.2 }}
        >
          {startContent}
        </motion.div>
      )}

      <SwitchWrapper
        className={combinedWrapperClasses}
        data-testid={`${dataTestId}-wrapper`}
      >
        <input
          ref={inputRef}
          type="checkbox"
          value={value}
          name={name}
          checked={isSelected}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-checked={isSelected}
          className={combinedHiddenInputClasses}
          data-testid={`${dataTestId}-input`}
          onClick={handleSwitchClick}
        />
        <SwitchThumb
          isSelected={isSelected}
          size={size}
          thumbIcon={ThumbIconComponent}
          disableAnimation={disableAnimation}
          className={classNames?.thumb}
          data-testid={`${dataTestId}-thumb`}
          onClick={handleSwitchClick}
        />
      </SwitchWrapper>

      {endContent && (
        <motion.div
          className={combinedEndContentClasses}
          data-testid={`${dataTestId}-end-content`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: disableAnimation ? 0 : 0.2 }}
        >
          {endContent}
        </motion.div>
      )}

      {children && (
        <span
          className={combinedLabelClasses}
          data-testid={`${dataTestId}-label`}
        >
          {children}
        </span>
      )}
    </label>
  );
};

/**
 * SwitchWrapper component with framer-motion animations
 * @param props - SwitchWrapper component properties
 * @returns JSX element representing a switch wrapper with hover effects
 */
export const SwitchWrapper = ({
  children,
  className = "",
  onClick,
  "data-testid": dataTestId,
}: SwitchWrapperProps & { onClick?: () => void }) => {
  return (
    <motion.div
      className={className}
      onClick={onClick}
      data-testid={dataTestId}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * SwitchThumb component with framer-motion animations
 * @param props - SwitchThumb component properties
 * @returns JSX element representing a switch thumb with smooth sliding animation
 */
export const SwitchThumb = ({
  isSelected = false,
  size = "md",
  thumbIcon: ThumbIconComponent,
  disableAnimation = false,
  className = "",
  "data-testid": dataTestId,
}: SwitchThumbProps) => {
  const sizeConfig = getSwitchSize[size];
  const thumbIconClasses = getSwitchThumbIconClasses(size);

  // Calculate the correct translate distance based on wrapper and thumb sizes
  const getTranslateDistance = () => {
    // Tailwind size mappings (in pixels)
    const wrapperWidths = { sm: 40, md: 48, lg: 56 }; // w-10, w-12, w-14
    const thumbWidths = { sm: 20, md: 24, lg: 28 }; // w-5, w-6, w-7

    // Account for border-2 (2px) and initial positioning (top-0.5 left-0.5 = 2px)
    const totalOffset = 7; // 2px border + 2px initial offset

    return wrapperWidths[size] - thumbWidths[size] - totalOffset;
  };

  const translateDistance = getTranslateDistance();

  const thumbBaseClasses = `absolute top-0.2 left-0.5 inline-block rounded-full bg-white shadow-lg transform ring-0 flex items-center justify-center ${sizeConfig.thumb}`;
  const combinedThumbClasses = [thumbBaseClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.span
      className={combinedThumbClasses}
      data-testid={dataTestId}
      animate={{
        x: isSelected ? translateDistance : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: disableAnimation ? 0 : undefined,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: "pointer" }}
    >
      <AnimatePresence mode="wait">
        {ThumbIconComponent && (
          <motion.div
            key={isSelected ? "selected" : "unselected"}
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: disableAnimation ? 0 : 0.3 }}
          >
            <ThumbIconComponent
              isSelected={isSelected}
              className={thumbIconClasses}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.span>
  );
};

/**
 * Enhanced icons with framer-motion animations
 */
export const SunIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </motion.svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0.6 }}
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </motion.svg>
);
