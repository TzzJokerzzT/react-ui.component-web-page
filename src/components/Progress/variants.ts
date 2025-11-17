import { tv } from "tailwind-variants";

// Base progress variants
export const progressVariants = tv({
  slots: {
    base: [
      "flex",
      "flex-col", 
      "gap-2",
      "w-full",
    ],
    track: [
      "relative",
      "bg-gray-200",
      "overflow-hidden",
    ],
    indicator: [
      "h-full",
      "transition-all",
      "duration-500",
      "ease-out",
      "origin-left",
    ],
    labelWrapper: [
      "flex",
      "justify-between",
      "items-center",
    ],
    label: [
      "text-sm",
      "font-medium",
      "text-gray-700",
    ],
    value: [
      "text-sm",
      "font-medium",
      "text-gray-500",
    ],
  },
  variants: {
    color: {
      default: {
        indicator: "bg-gray-400",
      },
      primary: {
        indicator: "bg-blue-600",
      },
      secondary: {
        indicator: "bg-gray-600",
      },
      success: {
        indicator: "bg-green-600",
      },
      warning: {
        indicator: "bg-yellow-500",
      },
      danger: {
        indicator: "bg-red-600",
      },
    },
    size: {
      sm: {
        track: "h-1",
        label: "text-xs",
        value: "text-xs",
      },
      md: {
        track: "h-2",
        label: "text-sm",
        value: "text-sm",
      },
      lg: {
        track: "h-3",
        label: "text-base",
        value: "text-base",
      },
    },
    radius: {
      none: {
        track: "rounded-none",
      },
      sm: {
        track: "rounded-sm",
      },
      md: {
        track: "rounded-md",
      },
      lg: {
        track: "rounded-lg",
      },
      full: {
        track: "rounded-full",
      },
    },
    isStriped: {
      true: {
        indicator: [
          "bg-gradient-to-r",
          "from-transparent",
          "to-transparent",
          "bg-[length:1rem_1rem]",
          "bg-repeat-x",
          "animate-pulse",
        ],
      },
    },
    isIndeterminate: {
      true: {
        indicator: [
          "animate-pulse",
        ],
      },
    },
    isDisabled: {
      true: {
        base: "opacity-60 cursor-not-allowed",
        track: "bg-gray-100",
        indicator: "bg-gray-300",
        label: "text-gray-400",
        value: "text-gray-400",
      },
    },
  },
  compoundVariants: [
    // Striped patterns for different colors
    {
      isStriped: true,
      color: "primary",
      class: {
        indicator: [
          "bg-gradient-to-r",
          "from-blue-600",
          "via-blue-500",
          "to-blue-600",
          "bg-[length:1rem_1rem]",
          "animate-[progress-stripes_1s_linear_infinite]",
        ],
      },
    },
    {
      isStriped: true,
      color: "success",
      class: {
        indicator: [
          "bg-gradient-to-r",
          "from-green-600",
          "via-green-500", 
          "to-green-600",
          "bg-[length:1rem_1rem]",
          "animate-[progress-stripes_1s_linear_infinite]",
        ],
      },
    },
    {
      isStriped: true,
      color: "warning",
      class: {
        indicator: [
          "bg-gradient-to-r",
          "from-yellow-500",
          "via-yellow-400",
          "to-yellow-500",
          "bg-[length:1rem_1rem]",
          "animate-[progress-stripes_1s_linear_infinite]",
        ],
      },
    },
    {
      isStriped: true,
      color: "danger",
      class: {
        indicator: [
          "bg-gradient-to-r",
          "from-red-600",
          "via-red-500",
          "to-red-600",
          "bg-[length:1rem_1rem]",
          "animate-[progress-stripes_1s_linear_infinite]",
        ],
      },
    },
    // Indeterminate state
    {
      isIndeterminate: true,
      class: {
        indicator: [
          "w-1/3",
          "animate-[progress-indeterminate_2s_ease-in-out_infinite]",
        ],
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md", 
    radius: "full",
    isStriped: false,
    isIndeterminate: false,
    isDisabled: false,
  },
});

// Utility function to get progress percentage
export const getProgressPercent = (
  value: number = 0,
  minValue: number = 0,
  maxValue: number = 100
): number => {
  const clampedValue = Math.max(minValue, Math.min(maxValue, value));
  return ((clampedValue - minValue) / (maxValue - minValue)) * 100;
};

// Utility function to format progress value
export const formatProgressValue = (
  value: number = 0,
  maxValue: number = 100,
  minValue: number = 0
): string => {
  const percent = getProgressPercent(value, minValue, maxValue);
  return `${Math.round(percent)}%`;
};