import { tv } from 'tailwind-variants';
import type { 
  BreadcrumbSize, 
  BreadcrumbColor, 
  BreadcrumbVariant,
  SeparatorType 
} from './types';

// Configuración base de estilos para el breadcrumb
export const breadcrumb = tv({
  slots: {
    base: [
      'flex',
      'items-center',
      'justify-start',
      'max-w-fit',
      'relative',
      'overflow-hidden',
    ],
    list: [
      'flex',
      'flex-wrap',
      'items-center',
      'list-none',
      'p-0',
      'm-0',
    ],
    item: [
      'flex',
      'items-center',
      'text-inherit',
      'whitespace-nowrap',
      'box-border',
      'outline-none',
      'tap-highlight-transparent',
    ],
    link: [
      'flex',
      'items-center',
      'gap-1',
      'outline-none',
      'cursor-pointer',
      'transition-colors',
      'tap-highlight-transparent',
      'rounded-small',
      'relative',
      'inline-flex',
      'shrink-0',
      'text-inherit',
      'no-underline',
      'hover:opacity-80',
      'active:opacity-disabled',
      'focus-visible:z-10',
      'focus-visible:outline-2',
      'focus-visible:outline-focus',
      'focus-visible:outline-offset-2',
    ],
    separator: [
      'flex',
      'items-center',
      'justify-center',
      'pointer-events-none',
      'shrink-0',
      'text-inherit',
      'select-none',
    ],
    ellipsis: [
      'flex',
      'items-center',
      'justify-center',
      'cursor-pointer',
      'text-inherit',
      'rounded-small',
      'transition-colors',
      'hover:opacity-80',
      'active:opacity-disabled',
      'outline-none',
      'focus-visible:z-10',
      'focus-visible:outline-2',
      'focus-visible:outline-focus',
      'focus-visible:outline-offset-2',
    ],
  },
  variants: {
    size: {
      sm: {
        base: 'text-xs',
        item: 'h-6',
        link: 'px-1 h-6 text-xs min-h-6',
        separator: 'px-1 text-xs',
        ellipsis: 'w-6 h-6 text-xs',
      },
      md: {
        base: 'text-sm',
        item: 'h-8',
        link: 'px-2 h-8 text-sm min-h-8',
        separator: 'px-1.5 text-sm',
        ellipsis: 'w-8 h-8 text-sm',
      },
      lg: {
        base: 'text-base',
        item: 'h-10',
        link: 'px-3 h-10 text-base min-h-10',
        separator: 'px-2 text-base',
        ellipsis: 'w-10 h-10 text-base',
      },
    },
    color: {
      default: {
        item: 'text-foreground',
        link: 'text-foreground data-[current=true]:text-foreground data-[current=true]:font-medium',
        separator: 'text-foreground-400',
      },
      primary: {
        item: 'text-primary',
        link: 'text-primary data-[current=true]:text-primary data-[current=true]:font-medium',
        separator: 'text-primary-300',
      },
      secondary: {
        item: 'text-secondary',
        link: 'text-secondary data-[current=true]:text-secondary data-[current=true]:font-medium',
        separator: 'text-secondary-300',
      },
      success: {
        item: 'text-success',
        link: 'text-success data-[current=true]:text-success data-[current=true]:font-medium',
        separator: 'text-success-300',
      },
      warning: {
        item: 'text-warning',
        link: 'text-warning data-[current=true]:text-warning data-[current=true]:font-medium',
        separator: 'text-warning-300',
      },
      danger: {
        item: 'text-danger',
        link: 'text-danger data-[current=true]:text-danger data-[current=true]:font-medium',
        separator: 'text-danger-300',
      },
    },
    variant: {
      solid: {
        link: [
          'data-[current=true]:bg-foreground',
          'data-[current=true]:text-background',
        ],
      },
      bordered: {
        link: [
          'border-2',
          'border-transparent',
          'data-[current=true]:border-foreground',
        ],
      },
      light: {
        link: [
          'data-[current=true]:bg-foreground/10',
        ],
      },
      flat: {
        link: [
          'data-[current=true]:bg-foreground/20',
        ],
      },
    },
    isDisabled: {
      true: {
        base: 'opacity-disabled pointer-events-none',
        link: 'cursor-default pointer-events-none',
      },
    },
    hideSeparator: {
      true: {
        separator: 'hidden',
      },
    },
  },
  compoundVariants: [
    // Color + Variant combinations
    {
      color: 'primary',
      variant: 'solid',
      class: {
        link: [
          'data-[current=true]:bg-primary',
          'data-[current=true]:text-primary-foreground',
        ],
      },
    },
    {
      color: 'primary',
      variant: 'bordered',
      class: {
        link: 'data-[current=true]:border-primary',
      },
    },
    {
      color: 'primary',
      variant: 'light',
      class: {
        link: 'data-[current=true]:bg-primary/10',
      },
    },
    {
      color: 'primary',
      variant: 'flat',
      class: {
        link: 'data-[current=true]:bg-primary/20',
      },
    },
    {
      color: 'secondary',
      variant: 'solid',
      class: {
        link: [
          'data-[current=true]:bg-secondary',
          'data-[current=true]:text-secondary-foreground',
        ],
      },
    },
    {
      color: 'secondary',
      variant: 'bordered',
      class: {
        link: 'data-[current=true]:border-secondary',
      },
    },
    {
      color: 'secondary',
      variant: 'light',
      class: {
        link: 'data-[current=true]:bg-secondary/10',
      },
    },
    {
      color: 'secondary',
      variant: 'flat',
      class: {
        link: 'data-[current=true]:bg-secondary/20',
      },
    },
    {
      color: 'success',
      variant: 'solid',
      class: {
        link: [
          'data-[current=true]:bg-success',
          'data-[current=true]:text-success-foreground',
        ],
      },
    },
    {
      color: 'success',
      variant: 'bordered',
      class: {
        link: 'data-[current=true]:border-success',
      },
    },
    {
      color: 'success',
      variant: 'light',
      class: {
        link: 'data-[current=true]:bg-success/10',
      },
    },
    {
      color: 'success',
      variant: 'flat',
      class: {
        link: 'data-[current=true]:bg-success/20',
      },
    },
    {
      color: 'warning',
      variant: 'solid',
      class: {
        link: [
          'data-[current=true]:bg-warning',
          'data-[current=true]:text-warning-foreground',
        ],
      },
    },
    {
      color: 'warning',
      variant: 'bordered',
      class: {
        link: 'data-[current=true]:border-warning',
      },
    },
    {
      color: 'warning',
      variant: 'light',
      class: {
        link: 'data-[current=true]:bg-warning/10',
      },
    },
    {
      color: 'warning',
      variant: 'flat',
      class: {
        link: 'data-[current=true]:bg-warning/20',
      },
    },
    {
      color: 'danger',
      variant: 'solid',
      class: {
        link: [
          'data-[current=true]:bg-danger',
          'data-[current=true]:text-danger-foreground',
        ],
      },
    },
    {
      color: 'danger',
      variant: 'bordered',
      class: {
        link: 'data-[current=true]:border-danger',
      },
    },
    {
      color: 'danger',
      variant: 'light',
      class: {
        link: 'data-[current=true]:bg-danger/10',
      },
    },
    {
      color: 'danger',
      variant: 'flat',
      class: {
        link: 'data-[current=true]:bg-danger/20',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'default',
    variant: 'flat',
    isDisabled: false,
    hideSeparator: false,
  },
});

// Configuración específica para los separadores
export const breadcrumbSeparator = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
    'pointer-events-none',
    'shrink-0',
    'select-none',
  ],
  variants: {
    type: {
      slash: '',
      chevron: '',
      arrow: '',
      dot: '',
      custom: '',
    },
    size: {
      sm: 'w-3 h-3 text-xs',
      md: 'w-4 h-4 text-sm',
      lg: 'w-5 h-5 text-base',
    },
    color: {
      default: 'text-foreground-400',
      primary: 'text-primary-300', 
      secondary: 'text-secondary-300',
      success: 'text-success-300',
      warning: 'text-warning-300',
      danger: 'text-danger-300',
    },
  },
  defaultVariants: {
    type: 'slash',
    size: 'md',
    color: 'default',
  },
});

// Configuración para las animaciones del breadcrumb
export const breadcrumbAnimations = tv({
  slots: {
    item: '',
    separator: '',
  },
  variants: {
    animation: {
      none: {},
      fade: {
        item: 'animate-in fade-in duration-300',
        separator: 'animate-in fade-in duration-300',
      },
      slide: {
        item: 'animate-in slide-in-from-left-2 duration-300',
        separator: 'animate-in slide-in-from-left-1 duration-300',
      },
      scale: {
        item: 'animate-in zoom-in-95 duration-300',
        separator: 'animate-in zoom-in-95 duration-300',
      },
    },
    stagger: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      animation: 'fade',
      stagger: true,
      class: {
        item: 'animate-in fade-in duration-300 fill-mode-both',
        separator: 'animate-in fade-in duration-300 fill-mode-both',
      },
    },
    {
      animation: 'slide',
      stagger: true,
      class: {
        item: 'animate-in slide-in-from-left-2 duration-300 fill-mode-both',
        separator: 'animate-in slide-in-from-left-1 duration-300 fill-mode-both',
      },
    },
    {
      animation: 'scale',
      stagger: true,
      class: {
        item: 'animate-in zoom-in-95 duration-300 fill-mode-both',
        separator: 'animate-in zoom-in-95 duration-300 fill-mode-both',
      },
    },
  ],
  defaultVariants: {
    animation: 'none',
    stagger: false,
  },
});

// Utilidades para generar íconos de separadores
export const getSeparatorIcon = (type: SeparatorType): string => {
  const icons = {
    slash: '/',
    chevron: '›',
    arrow: '→',
    dot: '•',
    custom: '',
  };
  
  return icons[type] || icons.slash;
};

// Configuración de estilos predeterminados para diferentes casos de uso
export const breadcrumbPresets = {
  navigation: {
    size: 'md' as BreadcrumbSize,
    color: 'default' as BreadcrumbColor,
    variant: 'flat' as BreadcrumbVariant,
    separator: 'chevron' as SeparatorType,
  },
  website: {
    size: 'sm' as BreadcrumbSize,
    color: 'primary' as BreadcrumbColor,
    variant: 'light' as BreadcrumbVariant,
    separator: 'slash' as SeparatorType,
  },
  admin: {
    size: 'lg' as BreadcrumbSize,
    color: 'secondary' as BreadcrumbColor,
    variant: 'bordered' as BreadcrumbVariant,
    separator: 'arrow' as SeparatorType,
  },
  compact: {
    size: 'sm' as BreadcrumbSize,
    color: 'default' as BreadcrumbColor,
    variant: 'flat' as BreadcrumbVariant,
    separator: 'dot' as SeparatorType,
  },
} as const;

export type BreadcrumbPreset = keyof typeof breadcrumbPresets;

// Función helper para aplicar presets
export const applyPreset = (preset: BreadcrumbPreset) => {
  return breadcrumbPresets[preset];
};