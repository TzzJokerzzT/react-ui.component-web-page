import { useState, useRef, ChangeEvent } from "react";
import type {
  CheckboxProps,
  CheckboxWrapperProps,
  CheckboxDefaultIconProps,
} from "./types";
import {
  getCheckboxBaseClasses,
  getCheckboxWrapperClasses,
  getCheckboxIconClasses,
  getCheckboxLabelClasses,
  getCheckboxHiddenInputClasses,
} from "./helper";

/**
 * Enhanced Checkbox component with comprehensive features
 * Supports multiple sizes, colors, states, and custom icons
 * @param props - Checkbox component properties
 * @returns JSX element representing a styled checkbox
 */
export const Checkbox = ({
  children,
  icon: IconComponent,
  value,
  name,
  size = "md",
  color = "primary",
  radius = "md",
  lineThrough = false,
  isSelected: controlledSelected,
  defaultSelected = false,
  isRequired = false,
  isReadOnly = false,
  isDisabled = false,
  isIndeterminate = false,
  isInvalid = false,
  validationState,
  disableAnimation = false,
  className = "",
  classNames,
  onChange,
  onValueChange,
  "data-testid": dataTestId,
}: CheckboxProps) => {
  // Internal state for uncontrolled mode
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const inputRef = useRef<HTMLInputElement>(null);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledSelected !== undefined;
  const isSelected = isControlled ? controlledSelected : internalSelected;

  // Compute derived states
  const computedIsInvalid = isInvalid || validationState === "invalid";

  // Handle checkbox change
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

  // Get combined classes
  const baseClasses = getCheckboxBaseClasses(isDisabled);
  const combinedBaseClasses = [baseClasses, classNames?.base, className]
    .filter(Boolean)
    .join(" ");

  const wrapperClasses = getCheckboxWrapperClasses(
    size,
    radius,
    color,
    isSelected || isIndeterminate,
    isDisabled,
    computedIsInvalid,
    disableAnimation
  );
  const combinedWrapperClasses = [wrapperClasses, classNames?.wrapper]
    .filter(Boolean)
    .join(" ");

  const iconClasses = getCheckboxIconClasses(
    size,
    isSelected,
    isIndeterminate,
    disableAnimation
  );
  const combinedIconClasses = [iconClasses, classNames?.icon]
    .filter(Boolean)
    .join(" ");

  const labelClasses = getCheckboxLabelClasses(
    size,
    isDisabled,
    lineThrough,
    isSelected
  );
  const combinedLabelClasses = [labelClasses, classNames?.label]
    .filter(Boolean)
    .join(" ");

  const hiddenInputClasses = getCheckboxHiddenInputClasses();
  const combinedHiddenInputClasses = [hiddenInputClasses, classNames?.hiddenInput]
    .filter(Boolean)
    .join(" ");

  // Render icon
  const renderIcon = () => {
    if (IconComponent) {
      return (
        <IconComponent
          isSelected={isSelected}
          isIndeterminate={isIndeterminate}
          disableAnimation={disableAnimation}
          className={combinedIconClasses}
          data-testid={`${dataTestId}-custom-icon`}
        />
      );
    }

    return (
      <CheckboxDefaultIcon
        isSelected={isSelected}
        isIndeterminate={isIndeterminate}
        disableAnimation={disableAnimation}
        className={combinedIconClasses}
        data-testid={`${dataTestId}-icon`}
      />
    );
  };

  return (
    <label className={combinedBaseClasses} data-testid={dataTestId}>
      <CheckboxWrapper 
        className={combinedWrapperClasses}
        data-testid={`${dataTestId}-wrapper`}
      >
        <input
          ref={inputRef}
          type="checkbox"
          value={value}
          name={name}
          checked={isSelected || isIndeterminate}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          aria-invalid={computedIsInvalid}
          aria-checked={isIndeterminate ? "mixed" : isSelected}
          className={combinedHiddenInputClasses}
          data-testid={`${dataTestId}-input`}
        />
        {renderIcon()}
      </CheckboxWrapper>
      {children && (
        <span className={combinedLabelClasses} data-testid={`${dataTestId}-label`}>
          {children}
        </span>
      )}
    </label>
  );
};

/**
 * CheckboxWrapper component for containing checkbox elements
 * @param props - CheckboxWrapper component properties
 * @returns JSX element representing a checkbox wrapper
 */
export const CheckboxWrapper = ({
  children,
  className = "",
  "data-testid": dataTestId,
}: CheckboxWrapperProps) => {
  return (
    <div className={className} data-testid={dataTestId}>
      {children}
    </div>
  );
};

/**
 * CheckboxDefaultIcon component for default checkbox icon
 * @param props - CheckboxDefaultIcon component properties
 * @returns JSX element representing a default checkbox icon
 */
export const CheckboxDefaultIcon = ({
  isSelected = false,
  isIndeterminate = false,
  className = "",
  "data-testid": dataTestId,
}: CheckboxDefaultIconProps) => {
  if (isIndeterminate) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        data-testid={dataTestId}
      >
        <rect x="6" y="11" width="12" height="2" rx="1" />
      </svg>
    );
  }

  if (isSelected) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24" 
        fill="currentColor"
        data-testid={dataTestId}
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    );
  }

  return null;
};