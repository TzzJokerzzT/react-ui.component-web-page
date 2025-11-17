import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Chip component variants following HeroUI design system
 */
export const chipVariants = tv({
  slots: {
    base: [
      "max-w-fit",
      "min-w-min",
      "inline-flex",
      "items-center",
      "justify-between",
      "box-border",
      "whitespace-nowrap",
      "px-1",
      "h-7",
      "text-small",
      "rounded-full",
      "subpixel-antialiased",
      "transition-colors",
      "cursor-default",
      "tap-highlight-transparent"
    ],
    content: [
      "flex-1",
      "text-inherit",
      "font-normal",
      "px-2"
    ],
    dot: [
      "w-2",
      "h-2",
      "ml-1",
      "rounded-full"
    ],
    avatar: [
      "flex",
      "shrink-0",
      "w-5",
      "h-5",
      "ml-1"
    ],
    closeButton: [
      "z-10",
      "appearance-none",
      "outline-none",
      "select-none",
      "transition-opacity",
      "opacity-70",
      "cursor-pointer",
      "active:opacity-disabled",
      "hover:opacity-100",
      "rounded-full",
      "flex",
      "items-center",
      "justify-center",
      "box-border",
      "w-5",
      "h-5",
      "mr-1"
    ]
  },
  variants: {
    // Chip variants (visual styles)
    variant: {
      solid: {},
      bordered: {
        base: "border-medium bg-transparent"
      },
      light: {
        base: "bg-transparent"
      },
      flat: {},
      faded: {
        base: "border-small"
      },
      shadow: {
        base: "shadow-lg"
      },
      dot: {
        base: "border-medium border-default bg-transparent"
      }
    },
    // Chip colors
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    // Chip sizes
    size: {
      sm: {
        base: "px-1 h-6 text-tiny",
        content: "px-1",
        closeButton: "w-4 h-4",
        avatar: "w-4 h-4"
      },
      md: {
        base: "px-1 h-7 text-small",
        content: "px-2",
        closeButton: "w-5 h-5",
        avatar: "w-5 h-5"
      },
      lg: {
        base: "px-1 h-8 text-medium",
        content: "px-2",
        closeButton: "w-6 h-6",
        avatar: "w-6 h-6"
      }
    },
    // Chip radius
    radius: {
      none: {
        base: "rounded-none"
      },
      sm: {
        base: "rounded-small"
      },
      md: {
        base: "rounded-medium"
      },
      lg: {
        base: "rounded-large"
      },
      full: {
        base: "rounded-full"
      }
    },
    // Disabled state
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      },
      false: {}
    },
    // Closeable state
    isCloseButtonVisible: {
      true: {},
      false: {}
    }
  },
  // Compound variants for color and variant combinations
  compoundVariants: [
    // Solid variants
    {
      variant: "solid",
      color: "default",
      class: {
        base: "bg-default text-default-foreground"
      }
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        base: "bg-primary text-primary-foreground"
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: "bg-secondary text-secondary-foreground"
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: "bg-success text-success-foreground"
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: "bg-warning text-warning-foreground"
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: "bg-danger text-danger-foreground"
      }
    },
    // Bordered variants
    {
      variant: "bordered",
      color: "default",
      class: {
        base: "border-default text-foreground"
      }
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        base: "border-primary text-primary"
      }
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: "border-secondary text-secondary"
      }
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: "border-success text-success"
      }
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: "border-warning text-warning"
      }
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: "border-danger text-danger"
      }
    },
    // Light variants
    {
      variant: "light",
      color: "default",
      class: {
        base: "text-default-600"
      }
    },
    {
      variant: "light",
      color: "primary",
      class: {
        base: "text-primary"
      }
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: "text-secondary"
      }
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: "text-success"
      }
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: "text-warning"
      }
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: "text-danger"
      }
    },
    // Flat variants
    {
      variant: "flat",
      color: "default",
      class: {
        base: "bg-default/20 text-default-600"
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        base: "bg-primary/20 text-primary-600"
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: "bg-secondary/20 text-secondary-600"
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: "bg-success/20 text-success-600 dark:text-success-500"
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: "bg-warning/20 text-warning-600 dark:text-warning-500"
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: "bg-danger/20 text-danger-500"
      }
    },
    // Faded variants
    {
      variant: "faded",
      color: "default",
      class: {
        base: "border-default bg-default-50 text-default-foreground"
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        base: "border-primary bg-primary-50 text-primary-600"
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: "border-secondary bg-secondary-50 text-secondary-600"
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: "border-success bg-success-50 text-success-600 dark:text-success-500"
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: "border-warning bg-warning-50 text-warning-600 dark:text-warning-500"
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: "border-danger bg-danger-50 text-danger-500"
      }
    },
    // Shadow variants
    {
      variant: "shadow",
      color: "default",
      class: {
        base: "shadow-lg shadow-default/50 bg-default text-default-foreground"
      }
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        base: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground"
      }
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground"
      }
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base: "shadow-lg shadow-success/40 bg-success text-success-foreground"
      }
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground"
      }
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
      }
    },
    // Dot variants
    {
      variant: "dot",
      color: "default",
      class: {
        base: "text-default-foreground",
        dot: "bg-default-400"
      }
    },
    {
      variant: "dot",
      color: "primary",
      class: {
        base: "text-foreground",
        dot: "bg-primary"
      }
    },
    {
      variant: "dot",
      color: "secondary",
      class: {
        base: "text-foreground",
        dot: "bg-secondary"
      }
    },
    {
      variant: "dot",
      color: "success",
      class: {
        base: "text-foreground",
        dot: "bg-success"
      }
    },
    {
      variant: "dot",
      color: "warning",
      class: {
        base: "text-foreground",
        dot: "bg-warning"
      }
    },
    {
      variant: "dot",
      color: "danger",
      class: {
        base: "text-foreground",
        dot: "bg-danger"
      }
    }
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "full",
    isDisabled: false,
    isCloseButtonVisible: false
  }
});

export type ChipVariantProps = VariantProps<typeof chipVariants>;