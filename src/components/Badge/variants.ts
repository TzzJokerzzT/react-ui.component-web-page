import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Badge wrapper component variants following HeroUI design system
 */
export const badgeVariants = tv({
  slots: {
    base: [
      "relative",
      "inline-flex",
      "shrink-0"
    ],
    badge: [
      "flex",
      "z-10",
      "absolute",
      "items-center",
      "justify-center",
      "whitespace-nowrap",
      "origin-center",
      "text-tiny",
      "font-medium",
      "subpixel-antialiased",
      "scale-100",
      "select-none",
      "transition-transform",
      "!duration-200",
      "!ease-soft-spring"
    ]
  },
  variants: {
    // Badge variants (visual styles)
    variant: {
      solid: {
        badge: "text-white"
      },
      flat: {
        badge: ""
      },
      faded: {
        badge: ""
      },
      shadow: {
        badge: "text-white shadow-lg"
      }
    },
    // Badge colors
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    // Badge sizes
    size: {
      sm: {
        badge: "min-w-4 h-4 text-tiny px-1"
      },
      md: {
        badge: "min-w-5 h-5 text-tiny px-1"
      },
      lg: {
        badge: "min-w-6 h-6 text-small px-1.5"
      }
    },
    // Badge shapes
    shape: {
      circle: {
        badge: "rounded-full"
      },
      rectangle: {
        badge: "rounded-md"
      }
    },
    // Badge placements
    placement: {
      "top-right": {
        badge: "top-0 right-0 translate-x-1/2 -translate-y-1/2"
      },
      "top-left": {
        badge: "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      },
      "bottom-right": {
        badge: "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
      },
      "bottom-left": {
        badge: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
      }
    },
    // Badge visibility
    isInvisible: {
      true: {
        badge: "scale-0"
      },
      false: {
        badge: "scale-100"
      }
    },
    // Outline
    showOutline: {
      true: {
        badge: "ring-2 ring-background"
      },
      false: {}
    },
    // Animation control
    disableAnimation: {
      true: {
        badge: "transition-none"
      },
      false: {}
    },
    // One character optimization
    isOneChar: {
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
        badge: "bg-default text-default-foreground"
      }
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        badge: "bg-primary text-primary-foreground"
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        badge: "bg-secondary text-secondary-foreground"
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        badge: "bg-success text-success-foreground"
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        badge: "bg-warning text-warning-foreground"
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        badge: "bg-danger text-danger-foreground"
      }
    },
    // Flat variants
    {
      variant: "flat",
      color: "default",
      class: {
        badge: "bg-default/20 text-default-600"
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        badge: "bg-primary/20 text-primary-600"
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        badge: "bg-secondary/20 text-secondary-600"
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        badge: "bg-success/20 text-success-600 dark:text-success-500"
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        badge: "bg-warning/20 text-warning-600 dark:text-warning-500"
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        badge: "bg-danger/20 text-danger-500"
      }
    },
    // Faded variants
    {
      variant: "faded",
      color: "default",
      class: {
        badge: "border-small border-default bg-default-50 text-default-foreground"
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        badge: "border-small border-primary bg-primary-50 text-primary-600"
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        badge: "border-small border-secondary bg-secondary-50 text-secondary-600"
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        badge: "border-small border-success bg-success-50 text-success-600 dark:text-success-500"
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        badge: "border-small border-warning bg-warning-50 text-warning-600 dark:text-warning-500"
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        badge: "border-small border-danger bg-danger-50 text-danger-500"
      }
    },
    // Shadow variants
    {
      variant: "shadow",
      color: "default",
      class: {
        badge: "shadow-lg shadow-default/50 bg-default text-default-foreground"
      }
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        badge: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground"
      }
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        badge: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground"
      }
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        badge: "shadow-lg shadow-success/40 bg-success text-success-foreground"
      }
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        badge: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground"
      }
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        badge: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
      }
    },
    // Size adjustments for one character badges
    {
      isOneChar: true,
      size: "sm",
      class: {
        badge: "w-4 h-4 min-w-4 px-0"
      }
    },
    {
      isOneChar: true,
      size: "md",
      class: {
        badge: "w-5 h-5 min-w-5 px-0"
      }
    },
    {
      isOneChar: true,
      size: "lg",
      class: {
        badge: "w-6 h-6 min-w-6 px-0"
      }
    }
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    shape: "rectangle",
    placement: "top-right",
    isInvisible: false,
    showOutline: false,
    disableAnimation: false,
    isOneChar: false
  }
});

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;