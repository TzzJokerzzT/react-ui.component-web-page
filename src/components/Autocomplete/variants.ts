import { tv, type VariantProps } from 'tailwind-variants';
import type { 
  AutocompleteColor, 
  AutocompleteSize, 
  AutocompleteVariant,
  AutocompleteLabelPlacement 
} from './types';

/**
 * Autocomplete main component variants following HeroUI design system
 */
export const autocompleteVariants = tv({
  base: [
    "group relative w-full",
    "inline-flex flex-col",
    "text-foreground-500",
  ],
  variants: {
    variant: {
      flat: "",
      bordered: "",
      faded: "",
      underlined: "",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    labelPlacement: {
      inside: "",
      outside: "flex-col",
      "outside-left": "flex-row items-center",
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
    isDisabled: {
      true: "opacity-disabled cursor-not-allowed",
      false: "",
    },
    disableAnimation: {
      true: "",
      false: "transition-colors duration-200 ease-in-out",
    },
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
    size: "md",
    labelPlacement: "inside",
    fullWidth: true,
    isDisabled: false,
    disableAnimation: false,
  },
});

/**
 * Input wrapper variants (the actual input field)
 */
export const inputWrapperVariants = tv({
  base: [
    "relative flex w-full",
    "min-h-unit-10 items-center gap-2",
    "px-3 py-2",
    "transition-colors duration-200",
    "group-data-[focus=true]:outline-2",
    "group-data-[focus=true]:outline-focus",
    "group-data-[focus=true]:outline-offset-2",
  ],
  variants: {
    variant: {
      flat: [
        "bg-default-100",
        "data-[hover=true]:bg-default-200",
        "group-data-[focus=true]:bg-default-100",
      ],
      bordered: [
        "border-2 border-default-200",
        "data-[hover=true]:border-default-300",
        "group-data-[focus=true]:border-default-foreground",
        "bg-transparent",
      ],
      faded: [
        "bg-default-100 border-2 border-transparent",
        "data-[hover=true]:border-default-200",
        "group-data-[focus=true]:border-default-300",
        "group-data-[focus=true]:bg-default-50",
      ],
      underlined: [
        "rounded-none border-b-2 border-default-300",
        "data-[hover=true]:border-default-400",
        "group-data-[focus=true]:border-default-foreground",
        "bg-transparent px-1 pb-0",
        "after:content-[''] after:w-0 after:origin-center",
        "after:absolute after:left-1/2 after:-translate-x-1/2",
        "after:bottom-0 after:h-[2px]",
        "after:transition-[width] after:duration-300",
        "group-data-[focus=true]:after:w-full",
      ],
    },
    color: {
      default: "",
      primary: {
        flat: "group-data-[focus=true]:bg-primary-50",
        bordered: "group-data-[focus=true]:border-primary",
        faded: "group-data-[focus=true]:border-primary group-data-[focus=true]:bg-primary-50",
        underlined: [
          "group-data-[focus=true]:border-primary",
          "after:bg-primary",
        ],
      },
      secondary: {
        flat: "group-data-[focus=true]:bg-secondary-50",
        bordered: "group-data-[focus=true]:border-secondary",
        faded: "group-data-[focus=true]:border-secondary group-data-[focus=true]:bg-secondary-50",
        underlined: [
          "group-data-[focus=true]:border-secondary",
          "after:bg-secondary",
        ],
      },
      success: {
        flat: "group-data-[focus=true]:bg-success-50",
        bordered: "group-data-[focus=true]:border-success",
        faded: "group-data-[focus=true]:border-success group-data-[focus=true]:bg-success-50",
        underlined: [
          "group-data-[focus=true]:border-success",
          "after:bg-success",
        ],
      },
      warning: {
        flat: "group-data-[focus=true]:bg-warning-50",
        bordered: "group-data-[focus=true]:border-warning",
        faded: "group-data-[focus=true]:border-warning group-data-[focus=true]:bg-warning-50",
        underlined: [
          "group-data-[focus=true]:border-warning",
          "after:bg-warning",
        ],
      },
      danger: {
        flat: "group-data-[focus=true]:bg-danger-50",
        bordered: "group-data-[focus=true]:border-danger",
        faded: "group-data-[focus=true]:border-danger group-data-[focus=true]:bg-danger-50",
        underlined: [
          "group-data-[focus=true]:border-danger",
          "after:bg-danger",
        ],
      },
    },
    size: {
      sm: "min-h-unit-8 px-2 py-1",
      md: "min-h-unit-10 px-3 py-2",
      lg: "min-h-unit-12 px-4 py-3",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full",
    },
    labelPlacement: {
      inside: "",
      outside: "",
      "outside-left": "",
    },
    isInvalid: {
      true: {
        flat: "bg-danger-50 text-danger",
        bordered: "border-danger data-[hover=true]:border-danger",
        faded: "border-danger bg-danger-50",
        underlined: "border-danger after:bg-danger",
      },
      false: "",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
      false: "",
    },
  },
  compoundVariants: [
    // Underlined variant special cases
    {
      variant: "underlined",
      size: "sm",
      class: "px-1 pb-0",
    },
    {
      variant: "underlined",
      size: "md",
      class: "px-1 pb-0",
    },
    {
      variant: "underlined",
      size: "lg",
      class: "px-1 pb-0",
    },
  ],
  defaultVariants: {
    variant: "flat",
    color: "default",
    size: "md",
    radius: "md",
    labelPlacement: "inside",
    isInvalid: false,
    isDisabled: false,
  },
});

/**
 * Input element variants
 */
export const inputVariants = tv({
  base: [
    "w-full font-normal bg-transparent outline-none",
    "placeholder:text-foreground-500",
    "text-small text-foreground",
  ],
  variants: {
    size: {
      sm: "text-small",
      md: "text-medium",
      lg: "text-large",
    },
    isDisabled: {
      true: "pointer-events-none",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    isDisabled: false,
  },
});

/**
 * Label variants
 */
export const labelVariants = tv({
  base: [
    "block text-foreground-600",
    "cursor-pointer",
    "transition-colors duration-200",
    "will-change-auto",
    "origin-top-left",
  ],
  variants: {
    size: {
      sm: "text-small",
      md: "text-small",
      lg: "text-medium",
    },
    labelPlacement: {
      inside: [
        "absolute left-3 rtl:left-auto rtl:right-3",
        "pointer-events-none z-10",
        "transition-[transform,color,left,opacity] duration-200 ease-out",
        "group-data-[filled=true]:scale-85",
        "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]",
        "group-data-[filled=true]:pointer-events-auto",
      ],
      outside: [
        "relative text-foreground pb-1.5",
        "will-change-auto !duration-200 !ease-out transition-colors motion-reduce:transition-none",
      ],
      "outside-left": [
        "relative text-foreground pr-2 rtl:pr-0 rtl:pl-2",
        "will-change-auto !duration-200 !ease-out transition-colors motion-reduce:transition-none",
      ],
    },
    color: {
      default: "",
      primary: "group-data-[focus=true]:text-primary",
      secondary: "group-data-[focus=true]:text-secondary",
      success: "group-data-[focus=true]:text-success",
      warning: "group-data-[focus=true]:text-warning",
      danger: "group-data-[focus=true]:text-danger",
    },
    isRequired: {
      true: "after:content-['*'] after:text-danger after:ml-0.5",
      false: "",
    },
    isInvalid: {
      true: "!text-danger",
      false: "",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
      false: "",
    },
  },
  compoundVariants: [
    // Inside label positioning adjustments
    {
      labelPlacement: "inside",
      size: "sm",
      class: [
        "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]",
        "left-2 rtl:left-auto rtl:right-2",
      ],
    },
    {
      labelPlacement: "inside",
      size: "lg",
      class: [
        "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]",
        "left-4 rtl:left-auto rtl:right-4",
      ],
    },
  ],
  defaultVariants: {
    size: "md",
    labelPlacement: "inside",
    color: "default",
    isRequired: false,
    isInvalid: false,
    isDisabled: false,
  },
});

/**
 * Helper text variants (description, error message)
 */
export const helperTextVariants = tv({
  base: "text-small text-foreground-400 px-1",
  variants: {
    color: {
      default: "text-foreground-400",
      primary: "text-primary-600",
      secondary: "text-secondary-600",
      success: "text-success-600",
      warning: "text-warning-600",
      danger: "text-danger-500",
    },
    isInvalid: {
      true: "text-danger-500",
      false: "",
    },
  },
  defaultVariants: {
    color: "default",
    isInvalid: false,
  },
});

/**
 * Popover content variants
 */
export const popoverContentVariants = tv({
  base: [
    "w-full p-1 min-w-[200px]",
    "bg-content1 border border-divider",
    "rounded-medium shadow-large",
  ],
  variants: {
    disableAnimation: {
      true: "",
      false: "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200",
    },
  },
  defaultVariants: {
    disableAnimation: false,
  },
});

/**
 * Listbox wrapper variants (scroll shadow container)
 */
export const listboxWrapperVariants = tv({
  base: "max-h-64 overflow-auto",
  variants: {
    maxHeight: {
      sm: "max-h-32",
      md: "max-h-64",
      lg: "max-h-96",
      none: "max-h-none",
    },
  },
  defaultVariants: {
    maxHeight: "md",
  },
});

/**
 * End content wrapper variants (clear + selector buttons)
 */
export const endContentWrapperVariants = tv({
  base: "flex items-center gap-1.5",
});

/**
 * Clear button variants
 */
export const clearButtonVariants = tv({
  base: [
    "flex items-center justify-center",
    "w-4 h-4 min-w-4 min-h-4",
    "text-default-400 hover:text-default-600",
    "cursor-pointer transition-colors",
    "opacity-0 data-[visible=true]:opacity-100",
    "transition-opacity duration-150",
  ],
  variants: {
    size: {
      sm: "w-3 h-3 min-w-3 min-h-3",
      md: "w-4 h-4 min-w-4 min-h-4",
      lg: "w-5 h-5 min-w-5 min-h-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * Selector button variants
 */
export const selectorButtonVariants = tv({
  base: [
    "flex items-center justify-center",
    "w-4 h-4 min-w-4 min-h-4",
    "text-default-400 hover:text-default-600",
    "cursor-pointer transition-all duration-150",
    "data-[open=true]:rotate-180",
  ],
  variants: {
    size: {
      sm: "w-3 h-3 min-w-3 min-h-3",
      md: "w-4 h-4 min-w-4 min-h-4",
      lg: "w-5 h-5 min-w-5 min-h-5",
    },
    disableRotation: {
      true: "data-[open=true]:rotate-0",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    disableRotation: false,
  },
});

/**
 * AutocompleteItem variants
 */
export const autocompleteItemVariants = tv({
  base: [
    "flex group relative justify-between items-center",
    "cursor-pointer tap-highlight-transparent",
    "px-2 py-1.5 w-full h-full box-border rounded-small",
    "subpixel-antialiased outline-none",
    "data-[pressed=true]:opacity-70",
    "transition-opacity motion-reduce:transition-none",
  ],
  variants: {
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    variant: {
      solid: "",
      bordered: "border-2 border-transparent bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-2 border-transparent",
      shadow: "",
    },
    isDisabled: {
      true: "opacity-disabled cursor-not-allowed",
      false: "",
    },
    isSelected: {
      true: "",
      false: "",
    },
    showDivider: {
      true: "mb-1.5 border-b border-divider pb-1.5",
      false: "",
    },
  },
  compoundVariants: [
    // Default color variants
    {
      color: "default",
      variant: "solid",
      class: [
        "bg-default text-default-foreground",
        "data-[hover=true]:bg-default-100",
        "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
      ],
    },
    {
      color: "default",
      variant: "flat",
      class: [
        "bg-transparent text-foreground",
        "data-[hover=true]:bg-default-100",
        "data-[selected=true]:bg-default-100 data-[selected=true]:text-default-foreground",
      ],
    },
    // Primary color variants  
    {
      color: "primary",
      variant: "solid",
      class: [
        "bg-primary text-primary-foreground",
        "data-[hover=true]:bg-primary-500",
        "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      ],
    },
    {
      color: "primary",
      variant: "flat",
      class: [
        "bg-transparent text-foreground",
        "data-[hover=true]:bg-primary-100",
        "data-[selected=true]:bg-primary-100 data-[selected=true]:text-primary",
      ],
     },
     // Secondary color variants
     {
       color: "secondary",
       variant: "solid",
       class: [
         "bg-secondary text-secondary-foreground",
         "data-[hover=true]:bg-secondary-500",
         "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
       ],
     },
     {
       color: "secondary",
       variant: "flat",
       class: [
         "bg-transparent text-foreground",
         "data-[hover=true]:bg-secondary-100",
         "data-[selected=true]:bg-secondary-100 data-[selected=true]:text-secondary",
       ],
     },
     // Success color variants
     {
       color: "success",
       variant: "solid", 
       class: [
         "bg-success text-success-foreground",
         "data-[hover=true]:bg-success-500",
         "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
       ],
     },
     {
       color: "success",
       variant: "flat",
       class: [
         "bg-transparent text-foreground",
         "data-[hover=true]:bg-success-100",
         "data-[selected=true]:bg-success-100 data-[selected=true]:text-success",
       ],
     },
     // Warning color variants
     {
       color: "warning",
       variant: "solid",
       class: [
         "bg-warning text-warning-foreground", 
         "data-[hover=true]:bg-warning-500",
         "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
       ],
     },
     {
       color: "warning",
       variant: "flat",
       class: [
         "bg-transparent text-foreground",
         "data-[hover=true]:bg-warning-100", 
         "data-[selected=true]:bg-warning-100 data-[selected=true]:text-warning",
       ],
     },
     // Danger color variants
     {
       color: "danger",
       variant: "solid",
       class: [
         "bg-danger text-danger-foreground",
         "data-[hover=true]:bg-danger-500",
         "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground", 
       ],
     },
     {
       color: "danger",
       variant: "flat",
       class: [
         "bg-transparent text-foreground",
         "data-[hover=true]:bg-danger-100",
         "data-[selected=true]:bg-danger-100 data-[selected=true]:text-danger",
       ],
     },
  ],
  defaultVariants: {
    color: "default",
    variant: "flat",
    isDisabled: false,
    isSelected: false,
    showDivider: false,
  },
});

/**
 * AutocompleteItem slot-based variants for fine-grained styling
 */
export const autocompleteItemSlotVariants = tv({
  slots: {
    base: [
      "flex group relative justify-between items-center",
      "cursor-pointer tap-highlight-transparent",
      "px-2 py-1.5 w-full h-full box-border rounded-small",
      "subpixel-antialiased outline-none",
      "data-[pressed=true]:opacity-70",
      "transition-opacity motion-reduce:transition-none",
    ],
    wrapper: [
      "w-full flex items-center gap-2",
    ],
    title: [
      "flex-1 text-small font-normal truncate",
      "text-foreground group-data-[selected=true]:text-inherit",
    ],
    description: [
      "w-full text-tiny text-foreground-400 truncate",
      "group-data-[selected=true]:text-inherit group-data-[selected=true]:opacity-70",
    ],
    startContent: [
      "flex items-center justify-center",
      "text-foreground-400 group-data-[selected=true]:text-inherit",
    ],
    endContent: [
      "flex items-center justify-center",
      "text-foreground-400 group-data-[selected=true]:text-inherit",
    ],
  },
  variants: {
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    variant: {
      solid: {},
      bordered: {
        base: "border-2 border-transparent bg-transparent",
      },
      light: {
        base: "bg-transparent",
      },
      flat: {},
      faded: {
        base: "border-2 border-transparent",
      },
      shadow: {},
    },
    size: {
      sm: {
        base: "px-1 py-1 text-tiny gap-1",
        title: "text-tiny",
        description: "text-tiny",
      },
      md: {
        base: "px-2 py-1.5 text-small gap-2",
        title: "text-small",
        description: "text-tiny",
      },
      lg: {
        base: "px-3 py-2 text-medium gap-3",
        title: "text-medium",
        description: "text-small",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled cursor-not-allowed",
      },
      false: {},
    },
    isSelected: {
      true: {},
      false: {},
    },
    isFocused: {
      true: {
        base: "data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus",
      },
      false: {},
    },
    showDivider: {
      true: {
        base: "mb-1.5 border-b border-divider pb-1.5",
      },
      false: {},
    },
  },
  compoundVariants: [
    // Default color variants
    {
      color: "default",
      variant: "solid",
      class: {
        base: [
          "bg-default text-default-foreground",
          "data-[hover=true]:bg-default-100",
          "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
        ],
      },
    },
    {
      color: "default",
      variant: "flat",
      class: {
        base: [
          "bg-transparent text-foreground",
          "data-[hover=true]:bg-default-100",
          "data-[selected=true]:bg-default-100 data-[selected=true]:text-default-foreground",
        ],
      },
    },
    // Primary color variants  
    {
      color: "primary",
      variant: "solid",
      class: {
        base: [
          "bg-primary text-primary-foreground",
          "data-[hover=true]:bg-primary-500",
          "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
        ],
      },
    },
    {
      color: "primary",
      variant: "flat",
      class: {
        base: [
          "bg-transparent text-foreground",
          "data-[hover=true]:bg-primary-100",
          "data-[selected=true]:bg-primary-100 data-[selected=true]:text-primary",
        ],
      },
     },
     // Secondary color variants
     {
       color: "secondary",
       variant: "solid",
       class: {
         base: [
           "bg-secondary text-secondary-foreground",
           "data-[hover=true]:bg-secondary-500",
           "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
         ],
       },
     },
     {
       color: "secondary",
       variant: "flat",
      class: {
        base: [
          "bg-transparent text-foreground",
          "data-[hover=true]:bg-secondary-100",
          "data-[selected=true]:bg-secondary-100 data-[selected=true]:text-secondary",
        ],
      },
     },
     // Success color variants
     {
       color: "success",
       variant: "solid",
       class: {
         base: [
           "bg-success text-success-foreground",
           "data-[hover=true]:bg-success-500",
           "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
         ],
       },
     },
     {
       color: "success",
       variant: "flat",
      class: {
        base: [
          "bg-transparent text-foreground",
          "data-[hover=true]:bg-success-100",
          "data-[selected=true]:bg-success-100 data-[selected=true]:text-success",
        ],
      },
     },
     // Warning color variants
     {
       color: "warning",
       variant: "solid",
       class: {
         base: [
           "bg-warning text-warning-foreground",
           "data-[hover=true]:bg-warning-500",
           "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
         ],
       },
     },
     {
       color: "warning",
       variant: "flat",
      class: {
        base: [
          "bg-transparent text-foreground",
          "data-[hover=true]:bg-warning-100",
          "data-[selected=true]:bg-warning-100 data-[selected=true]:text-warning",
        ],
      },
     },
     // Danger color variants
     {
       color: "danger",
       variant: "solid",
       class: {
         base: [
           "bg-danger text-danger-foreground",
           "data-[hover=true]:bg-danger-500",
           "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
         ],
       },
     },
     {
       color: "danger",
       variant: "flat",
      class: {
        base: [
          "bg-transparent text-foreground",
          "data-[hover=true]:bg-danger-100",
          "data-[selected=true]:bg-danger-100 data-[selected=true]:text-danger",
        ],
      },
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "flat",
    size: "md",
    isDisabled: false,
    isSelected: false,
    isFocused: false,
    showDivider: false,
  },
});

/**
 * AutocompleteSection variants
 */
export const autocompleteSectionVariants = tv({
  base: "relative mb-2",
  variants: {
    showDivider: {
      true: "pb-1 mb-2 border-b border-divider",
      false: "",
    },
  },
  defaultVariants: {
    showDivider: false,
  },
});

/**
 * AutocompleteSection slot-based variants for fine-grained styling
 */
export const autocompleteSectionSlotVariants = tv({
  slots: {
    base: [
      "relative mb-2",
    ],
    heading: [
      "text-small font-medium text-default-500",
      "px-2 py-1 select-none",
    ],
    group: [
      "w-full",
    ],
    divider: [
      "w-full h-px bg-divider my-2",
    ],
  },
  variants: {
    showDivider: {
      true: {
        base: "pb-1 mb-2",
      },
      false: {},
    },
  },
  defaultVariants: {
    showDivider: false,
  },
});

/**
 * Section heading variants
 */
export const sectionHeadingVariants = tv({
  base: [
    "text-small font-medium text-default-500",
    "px-2 py-1",
  ],
});

/**
 * Section group variants
 */
export const sectionGroupVariants = tv({
  base: "space-y-0.5",
});

/**
 * Helper functions to get variant classes
 */
export type AutocompleteVariantProps = VariantProps<typeof autocompleteVariants>;
export type InputWrapperVariantProps = VariantProps<typeof inputWrapperVariants>;
export type AutocompleteItemVariantProps = VariantProps<typeof autocompleteItemVariants>;
export type AutocompleteSectionVariantProps = VariantProps<typeof autocompleteSectionVariants>;

/**
 * Get autocomplete classes based on props
 */
export const getAutocompleteClasses = (props: AutocompleteVariantProps) => {
  return autocompleteVariants(props);
};

/**
 * Get input wrapper classes based on props
 */
export const getInputWrapperClasses = (props: InputWrapperVariantProps) => {
  return inputWrapperVariants(props);
};

/**
 * Get autocomplete item classes based on props
 */
export const getAutocompleteItemClasses = (props: AutocompleteItemVariantProps) => {
  return autocompleteItemVariants(props);
};

/**
 * Get autocomplete section classes based on props
 */
export const getAutocompleteSectionClasses = (props: AutocompleteSectionVariantProps) => {
  return autocompleteSectionVariants(props);
};

/**
 * Default filtering function - case insensitive contains
 */
export const defaultFilter = (textValue: string, inputValue: string): boolean => {
  if (!inputValue) return true;
  return textValue.toLowerCase().includes(inputValue.toLowerCase());
};

/**
 * Autocomplete defaults following HeroUI specifications
 */
export const autocompleteDefaults = {
  variant: 'flat' as AutocompleteVariant,
  color: 'default' as AutocompleteColor,
  size: 'md' as AutocompleteSize,
  labelPlacement: 'inside' as AutocompleteLabelPlacement,
  menuTrigger: 'focus' as const,
  allowsCustomValue: false,
  allowsEmptyCollection: true,
  shouldCloseOnBlur: true,
  fullWidth: true,
  isRequired: false,
  isDisabled: false,
  isInvalid: false,
  isReadOnly: false,
  isClearable: true,
  showScrollIndicators: true,
  disableAnimation: false,
  disableSelectorIconRotation: false,
  maxListboxHeight: 256,
  itemHeight: 32,
  isVirtualized: false,
  validationBehavior: 'native' as const,
} as const;