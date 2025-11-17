import React, { forwardRef, useState, useRef, useEffect } from "react";
import type { InputProps, ValidationResult } from "./types";
import {
  getInputBaseClasses,
  getInputMainWrapperClasses,
  getInputLabelClasses,
  getInputWrapperClasses,
  getInputInnerWrapperClasses,
  getInputClasses,
  getClearButtonClasses,
  getHelperWrapperClasses,
  getDescriptionClasses,
  getErrorMessageClasses,
  getContentClasses,
  validateInput,
} from "./helper";

/**
 * Input Component
 *
 * A comprehensive input component based on HeroUI design system.
 * Supports multiple variants, sizes, colors, validation, and advanced features.
 *
 * Features:
 * - Multiple variants (flat, bordered, faded, underlined)
 * - Color themes and sizes
 * - Label positioning (inside, outside, outside-left)
 * - Validation with error messages
 * - Clear button functionality
 * - Start and end content slots
 * - Password visibility toggle
 * - Full accessibility support
 *
 * @param props - Input component props
 * @returns JSX element representing the input
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      // Content props
      label,
      placeholder,
      description,
      errorMessage,
      startContent,
      endContent,

      // Value props
      value,
      defaultValue,

      // Styling props
      variant = "flat",
      color = "default",
      size = "md",
      radius = "md",
      labelPlacement = "inside",
      fullWidth = true,

      // Input props
      type = "text",
      minLength,
      maxLength,
      pattern,

      // State props
      isRequired = false,
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isClearable = false,

      // Animation & styling
      disableAnimation = false,
      classNames,
      className,

      // Validation
      validate,
      validationBehavior = "native",

      // Refs
      baseRef,

      // Events
      onChange,
      onValueChange,
      onClear,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,

      // Accessibility
      "data-testid": dataTestId,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,

      ...props
    },
    ref,
  ) => {
    // Internal state management
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    // Refs
    const inputRef = useRef<HTMLInputElement>(null);

    // Determine if controlled or uncontrolled
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;

    // Determine if field has content
    const hasValue = inputValue && inputValue.length > 0;
    const isFilled = hasValue || isFocused;

    // Password input handling
    const isPasswordType = type === "password";
    const actualInputType = isPasswordType && showPassword ? "text" : type;

    // Validation state
    const hasCustomValidation = validate !== undefined;
    const shouldShowValidation =
      (isInvalid || validationErrors.length > 0) && !isDisabled;

    // Generate unique IDs for accessibility
    const labelId = `input-label-${Math.random().toString(36).substring(2, 11)}`;
    const descriptionId = description
      ? `input-description-${Math.random().toString(36).substring(2, 11)}`
      : undefined;
    const errorId = shouldShowValidation
      ? `input-error-${Math.random().toString(36).substring(2, 11)}`
      : undefined;

    // Handle validation
    useEffect(() => {
      if (
        hasCustomValidation ||
        isRequired ||
        minLength ||
        maxLength ||
        pattern
      ) {
        const result = validateInput(inputValue, {
          isRequired,
          minLength,
          maxLength,
          pattern,
          type,
          customValidate: validate,
        });
        setValidationErrors(result.errors);
      }
    }, [
      inputValue,
      isRequired,
      minLength,
      maxLength,
      pattern,
      type,
      validate,
      hasCustomValidation,
    ]);

    // Event handlers
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(event);
      onValueChange?.(newValue);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const handleClear = () => {
      const newValue = "";

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onClear?.();
      onValueChange?.(newValue);

      // Focus back to input after clearing
      inputRef.current?.focus();
    };

    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };

    // Class generation
    const baseClasses = getInputBaseClasses(
      fullWidth,
      isDisabled,
      labelPlacement,
    );
    const combinedBaseClasses = [baseClasses, classNames?.base, className]
      .filter(Boolean)
      .join(" ");

    const mainWrapperClasses = getInputMainWrapperClasses(labelPlacement);
    const combinedMainWrapperClasses = [
      mainWrapperClasses,
      classNames?.mainWrapper,
    ]
      .filter(Boolean)
      .join(" ");

    const labelClasses = getInputLabelClasses(
      size,
      color,
      labelPlacement,
      isRequired,
      shouldShowValidation,
    );
    const combinedLabelClasses = [labelClasses, classNames?.label]
      .filter(Boolean)
      .join(" ");

    const inputWrapperClasses = getInputWrapperClasses(
      variant,
      color,
      size,
      radius,
      isFocused,
      shouldShowValidation,
      isDisabled,
    );
    const combinedInputWrapperClasses = [
      inputWrapperClasses,
      classNames?.inputWrapper,
    ]
      .filter(Boolean)
      .join(" ");

    const innerWrapperClasses = getInputInnerWrapperClasses();
    const combinedInnerWrapperClasses = [
      innerWrapperClasses,
      classNames?.innerWrapper,
    ]
      .filter(Boolean)
      .join(" ");

    const inputClasses = getInputClasses(size, labelPlacement);
    const combinedInputClasses = [inputClasses, classNames?.input]
      .filter(Boolean)
      .join(" ");

    const clearButtonClasses = getClearButtonClasses(size);
    const combinedClearButtonClasses = [
      clearButtonClasses,
      classNames?.clearButton,
    ]
      .filter(Boolean)
      .join(" ");

    const helperWrapperClasses = getHelperWrapperClasses();
    const combinedHelperWrapperClasses = [
      helperWrapperClasses,
      classNames?.helperWrapper,
    ]
      .filter(Boolean)
      .join(" ");

    const descriptionClasses = getDescriptionClasses(size);
    const combinedDescriptionClasses = [
      descriptionClasses,
      classNames?.description,
    ]
      .filter(Boolean)
      .join(" ");

    const errorMessageClasses = getErrorMessageClasses(size);
    const combinedErrorMessageClasses = [
      errorMessageClasses,
      classNames?.errorMessage,
    ]
      .filter(Boolean)
      .join(" ");

    const contentClasses = getContentClasses(size);

    // Render error message (can be function or static)
    const renderErrorMessage = () => {
      if (!shouldShowValidation) return null;

      if (typeof errorMessage === "function") {
        const validationResult: ValidationResult = {
          isInvalid: shouldShowValidation,
          validationErrors,
          validationDetails: {
            valid: validationErrors.length === 0,
            valueMissing: isRequired && !hasValue,
            tooShort: minLength ? inputValue.length < minLength : undefined,
            tooLong: maxLength ? inputValue.length > maxLength : undefined,
            patternMismatch: pattern
              ? !new RegExp(pattern).test(inputValue)
              : undefined,
          },
        };
        return errorMessage(validationResult);
      }

      return (
        errorMessage ||
        (validationErrors.length > 0 ? validationErrors[0] : null)
      );
    };

    // Render clear button
    const renderClearButton = () => {
      if (!isClearable || !hasValue || isDisabled || isReadOnly) return null;

      return (
        <button
          type="button"
          className={combinedClearButtonClasses}
          onClick={handleClear}
          tabIndex={-1}
          data-testid={dataTestId ? `${dataTestId}-clear-button` : undefined}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      );
    };

    // Render password toggle button
    const renderPasswordToggle = () => {
      if (!isPasswordType) return null;

      return (
        <button
          type="button"
          className={combinedClearButtonClasses}
          onClick={handlePasswordToggle}
          tabIndex={-1}
          data-testid={dataTestId ? `${dataTestId}-password-toggle` : undefined}
        >
          {showPassword ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94L17.94 17.94z" />
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19l-6.84-6.84z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      );
    };

    // Render label
    const renderLabel = () => {
      if (!label) return null;

      // For inside placement, use floating label animation like Autocomplete
      if (labelPlacement === "inside") {
        return (
          <label
            id={labelId}
            className={`
            absolute left-3 transition-all duration-200 pointer-events-none z-10
            text-small text-gray-500
            top-1/2 -translate-y-1/2 origin-left
            ${
              inputValue || isFocused
                ? [
                    "text-tiny scale-85 -translate-y-[1.875rem] px-1 bg-content1",
                    "text-gray-600",
                  ].join(" ")
                : ""
            }
          `
              .replace(/\s+/g, " ")
              .trim()}
            htmlFor={dataTestId}
            data-testid={dataTestId ? `${dataTestId}-label` : undefined}
            style={{ zIndex: 10 }}
          >
            {label}
            {isRequired && <span className="text-danger ml-1">*</span>}
          </label>
        );
      }

      // For outside and outside-left placements, use static label
      return (
        <label
          id={labelId}
          className={combinedLabelClasses}
          htmlFor={dataTestId}
          data-testid={dataTestId ? `${dataTestId}-label` : undefined}
        >
          {label}
          {isRequired && <span className="text-danger ml-1">*</span>}
        </label>
      );
    };

    // Input element
    const inputElement = (
      <input
        {...props}
        ref={ref || inputRef}
        id={dataTestId}
        type={actualInputType}
        value={inputValue}
        placeholder={
          // For inside labels, only show placeholder when focused or has value to avoid overlap
          labelPlacement === "inside"
            ? isFocused || inputValue
              ? placeholder
              : ""
            : placeholder
        }
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        className={combinedInputClasses}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        aria-label={ariaLabel}
        aria-labelledby={label ? labelId : ariaLabelledBy}
        aria-describedby={
          [descriptionId, errorId, ariaDescribedBy].filter(Boolean).join(" ") ||
          undefined
        }
        aria-invalid={shouldShowValidation}
        data-testid={dataTestId ? `${dataTestId}-input` : undefined}
        data-has-start-content={!!startContent}
        data-has-end-content={!!(endContent || isClearable || isPasswordType)}
      />
    );

    return (
      <div
        ref={baseRef}
        className={combinedBaseClasses}
        data-testid={dataTestId}
        data-invalid={shouldShowValidation}
        data-required={isRequired}
        data-readonly={isReadOnly}
        data-disabled={isDisabled}
        data-focus={isFocused}
        data-focus-within={isFocused}
        data-focus-visible={isFocused}
        data-filled={isFilled}
        data-has-label={!!label}
        data-has-helper={!!(description || shouldShowValidation)}
      >
        {/* Main wrapper for different label placements */}
        <div className={combinedMainWrapperClasses}>
          {/* Outside left label */}
          {labelPlacement === "outside-left" && renderLabel()}

          <div className="flex flex-col gap-1.5 w-full">
            {/* Outside top label */}
            {labelPlacement === "outside" && renderLabel()}

            {/* Input wrapper */}
            <div className={combinedInputWrapperClasses}>
              {/* Inside label */}
              {labelPlacement === "inside" && renderLabel()}

              {/* Inner wrapper with content */}
              <div className={combinedInnerWrapperClasses}>
                {/* Start content */}
                {startContent && (
                  <div
                    className={contentClasses}
                    data-testid={
                      dataTestId ? `${dataTestId}-start-content` : undefined
                    }
                  >
                    {startContent}
                  </div>
                )}

                {/* Input element */}
                {inputElement}

                {/* End content */}
                {endContent && (
                  <div
                    className={contentClasses}
                    data-testid={
                      dataTestId ? `${dataTestId}-end-content` : undefined
                    }
                  >
                    {endContent}
                  </div>
                )}

                {/* Password toggle */}
                {renderPasswordToggle()}

                {/* Clear button */}
                {renderClearButton()}
              </div>
            </div>
          </div>
        </div>

        {/* Helper wrapper (description and error) */}
        {(description || shouldShowValidation) && (
          <div className={combinedHelperWrapperClasses}>
            {/* Description */}
            {description && (
              <div
                id={descriptionId}
                className={combinedDescriptionClasses}
                data-testid={
                  dataTestId ? `${dataTestId}-description` : undefined
                }
              >
                {description}
              </div>
            )}

            {/* Error message */}
            {shouldShowValidation && (
              <div
                id={errorId}
                className={combinedErrorMessageClasses}
                data-testid={
                  dataTestId ? `${dataTestId}-error-message` : undefined
                }
              >
                {renderErrorMessage()}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

