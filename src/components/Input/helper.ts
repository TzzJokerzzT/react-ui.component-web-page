import type {
  InputSize,
  InputColor,
  InputVariant,
  InputRadius,
  InputLabelPlacement,
} from "./types";

/**
 * Get base wrapper classes for the Input component
 */
export const getInputBaseClasses = (
  fullWidth: boolean = true,
  isDisabled: boolean = false,
  labelPlacement: InputLabelPlacement = "inside",
): string => {
  const baseClasses = ["group", "flex", "flex-col"];

  if (fullWidth) {
    baseClasses.push("w-full");
  }

  if (isDisabled) {
    baseClasses.push("opacity-disabled", "pointer-events-none");
  }

  // Spacing based on label placement
  if (labelPlacement === "outside" || labelPlacement === "outside-left") {
    baseClasses.push("gap-2");
  }

  return baseClasses.join(" ");
};

/**
 * Get main wrapper classes (for outside label placements)
 */
export const getInputMainWrapperClasses = (
  labelPlacement: InputLabelPlacement = "inside",
): string => {
  const classes = ["flex"];

  if (labelPlacement === "outside-left") {
    classes.push("flex-row", "items-center", "gap-4");
  } else {
    classes.push("flex-col", "gap-2");
  }

  return classes.join(" ");
};

/**
 * Get label classes
 */
export const getInputLabelClasses = (
  size: InputSize = "md",
  color: InputColor = "default",
  labelPlacement: InputLabelPlacement = "inside",
  isRequired: boolean = false,
  isInvalid: boolean = false,
): string => {
  const classes = [
    "select-none",
    "font-medium",
    "transition-colors",
    "duration-200",
  ];

  // Size variants
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };
  classes.push(sizeClasses[size]);

  // Color variants
  if (isInvalid) {
    classes.push("text-danger");
  } else {
    const colorClasses = {
      default: "text-foreground-600",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
    };
    classes.push(colorClasses[color]);
  }

  // Placement specific styles
  if (labelPlacement === "inside") {
    classes.push(
      "absolute",
      "origin-top-left",
      "left-3",
      "pointer-events-none",
      "transform-gpu",
      "transition-all",
      "duration-200",
      "ease-out",
      "group-data-[filled=true]:scale-85",
      "group-data-[filled=true]:-translate-y-1.5",
      "group-data-[focus=true]:scale-85",
      "group-data-[focus=true]:-translate-y-1.5",
    );

    // Position based on size
    const positionClasses = {
      sm: "top-1.5",
      md: "top-2.5",
      lg: "top-3.5",
    };
    classes.push(positionClasses[size]);
  } else if (labelPlacement === "outside-left") {
    classes.push("flex-shrink-0", "w-32");
  }

  // Required indicator
  if (isRequired) {
    classes.push("after:content-['*']", "after:text-danger", "after:ml-0.5");
  }

  return classes.join(" ");
};

/**
 * Get input wrapper classes
 */
export const getInputWrapperClasses = (
  variant: InputVariant = "flat",
  color: InputColor = "default",
  size: InputSize = "md",
  radius: InputRadius = "md",
  isFocused: boolean = false,
  isInvalid: boolean = false,
  isDisabled: boolean = false,
): string => {
  const classes = [
    "relative",
    "inline-flex",
    "items-center",
    "w-full",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "group-data-[focus=true]:z-10",
  ];

  // Size variants
  const sizeClasses = {
    sm: "h-13 min-h-8 px-2.5",
    md: "h-15 min-h-10 px-3",
    lg: "h-18 min-h-12 px-4",
  };
  classes.push(sizeClasses[size]);

  // Radius variants
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };
  classes.push(radiusClasses[radius]);

  // Variant and color styles
  if (isInvalid) {
    switch (variant) {
      case "flat":
        classes.push("bg-danger-50", "hover:bg-danger-100");
        break;
      case "bordered":
        classes.push("border-2", "border-danger", "hover:border-danger-hover");
        break;
      case "faded":
        classes.push(
          "bg-danger-50",
          "border-2",
          "border-danger-200",
          "hover:border-danger",
        );
        break;
      case "underlined":
        classes.push(
          "border-b-2",
          "border-danger",
          "hover:border-danger-hover",
        );
        break;
    }
  } else {
    switch (variant) {
      case "flat":
        const flatColors = {
          default: "bg-default-100 hover:bg-default-200",
          primary: "bg-primary-50 hover:bg-primary-100",
          secondary: "bg-secondary-50 hover:bg-secondary-100",
          success: "bg-success-50 hover:bg-success-100",
          warning: "bg-warning-50 hover:bg-warning-100",
          danger: "bg-danger-50 hover:bg-danger-100",
        };
        classes.push(flatColors[color]);
        break;

      case "bordered":
        classes.push("border-2");
        if (isFocused) {
          const focusColors = {
            default: "border-default-400",
            primary: "border-primary",
            secondary: "border-secondary",
            success: "border-success",
            warning: "border-warning",
            danger: "border-danger",
          };
          classes.push(focusColors[color]);
        } else {
          classes.push("border-default-200", "hover:border-default-400");
        }
        break;

      case "faded":
        const fadedColors = {
          default:
            "bg-default-100 border-2 border-default-200 hover:border-default-400",
          primary:
            "bg-primary-50 border-2 border-primary-200 hover:border-primary",
          secondary:
            "bg-secondary-50 border-2 border-secondary-200 hover:border-secondary",
          success:
            "bg-success-50 border-2 border-success-200 hover:border-success",
          warning:
            "bg-warning-50 border-2 border-warning-200 hover:border-warning",
          danger: "bg-danger-50 border-2 border-danger-200 hover:border-danger",
        };
        classes.push(fadedColors[color]);
        break;

      case "underlined":
        classes.push("border-b-2", "rounded-none");
        if (isFocused) {
          const underlineColors = {
            default: "border-default-400",
            primary: "border-primary",
            secondary: "border-secondary",
            success: "border-success",
            warning: "border-warning",
            danger: "border-danger",
          };
          classes.push(underlineColors[color]);
        } else {
          classes.push("border-default-300", "hover:border-default-400");
        }
        break;
    }
  }

  // Disabled state
  if (isDisabled) {
    classes.push("opacity-50", "cursor-not-allowed");
  }

  return classes.join(" ");
};

/**
 * Get inner wrapper classes (contains input and content)
 */
export const getInputInnerWrapperClasses = (): string => {
  return ["inline-flex", "items-center", "w-full", "gap-1.5", "h-full"].join(
    " ",
  );
};

/**
 * Get input element classes
 */
export const getInputClasses = (
  size: InputSize = "md",
  labelPlacement: InputLabelPlacement = "inside",
): string => {
  const classes = [
    "w-full",
    "font-normal",
    "text-foreground",
    "bg-transparent",
    "outline-none",
    "placeholder:text-foreground-500",
    "focus-visible:outline-none",
    "data-[has-start-content=true]:ps-1",
    "data-[has-end-content=true]:pe-1",
  ];

  // Size-based text sizing
  const sizeClasses = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
  };
  classes.push(sizeClasses[size]);

  // Label placement specific styles
  if (labelPlacement === "inside") {
    classes.push("group-data-[has-label=true]:pt-1");
  }

  return classes.join(" ");
};

/**
 * Get clear button classes
 */
export const getClearButtonClasses = (size: InputSize = "md"): string => {
  const classes = [
    "p-1",
    "rounded-full",
    "text-foreground-400",
    "hover:text-foreground-600",
    "hover:bg-default-100",
    "active:bg-default-200",
    "transition-all",
    "duration-150",
    "cursor-pointer",
    "flex-shrink-0",
  ];

  // Size variants
  const sizeClasses = {
    sm: "w-4 h-4 text-xs",
    md: "w-5 h-5 text-sm",
    lg: "w-6 h-6 text-base",
  };
  classes.push(sizeClasses[size]);

  return classes.join(" ");
};

/**
 * Get helper wrapper classes (for description and error)
 */
export const getHelperWrapperClasses = (): string => {
  return ["flex", "flex-col", "gap-1.5", "px-1"].join(" ");
};

/**
 * Get description classes
 */
export const getDescriptionClasses = (size: InputSize = "md"): string => {
  const classes = ["text-foreground-400"];

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-sm",
  };
  classes.push(sizeClasses[size]);

  return classes.join(" ");
};

/**
 * Get error message classes
 */
export const getErrorMessageClasses = (size: InputSize = "md"): string => {
  const classes = ["text-danger"];

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-sm",
  };
  classes.push(sizeClasses[size]);

  return classes.join(" ");
};

/**
 * Get start/end content classes
 */
export const getContentClasses = (size: InputSize = "md"): string => {
  const classes = ["flex-shrink-0", "text-foreground-400"];

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  classes.push(sizeClasses[size]);

  return classes.join(" ");
};

/**
 * Validation helper functions
 */
export const validateInput = (
  value: string,
  validation: {
    isRequired?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    type?: string;
    customValidate?: (
      value: string,
    ) => string | string[] | true | null | undefined;
  },
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Required validation
  if (validation.isRequired && (!value || value.trim().length === 0)) {
    errors.push("This field is required");
  }

  // Skip other validations if value is empty and not required
  if (!value || value.trim().length === 0) {
    return { isValid: errors.length === 0, errors };
  }

  // Length validations
  if (validation.minLength && value.length < validation.minLength) {
    errors.push(`Minimum length is ${validation.minLength} characters`);
  }

  if (validation.maxLength && value.length > validation.maxLength) {
    errors.push(`Maximum length is ${validation.maxLength} characters`);
  }

  // Pattern validation
  if (validation.pattern) {
    const regex = new RegExp(validation.pattern);
    if (!regex.test(value)) {
      errors.push("Invalid format");
    }
  }

  // Type-specific validation
  if (validation.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errors.push("Please enter a valid email address");
    }
  }

  if (validation.type === "url") {
    try {
      new URL(value);
    } catch {
      errors.push("Please enter a valid URL");
    }
  }

  // Custom validation
  if (validation.customValidate) {
    const customResult = validation.customValidate(value);
    if (
      customResult !== true &&
      customResult !== null &&
      customResult !== undefined
    ) {
      if (Array.isArray(customResult)) {
        errors.push(...customResult);
      } else if (typeof customResult === "string") {
        errors.push(customResult);
      }
    }
  }

  return { isValid: errors.length === 0, errors };
};
