import { tv } from 'tailwind-variants';

export const modal = tv({
  slots: {
    wrapper: [
      'fixed',
      'inset-0',
      'z-50',
      'flex',
      'items-center',
      'justify-center',
      'p-4',
      'sm:p-0',
      'overflow-hidden', // Prevent scroll by default
    ],
    base: [
      'relative',
      'flex',
      'flex-col',
      'w-full',
      'box-border',
      'outline-none',
      'mx-1',
      'my-1',
      'sm:mx-6',
      'sm:my-16',
      'bg-content1',
      'dark:bg-gray-800',
      'color-foreground',
      'dark:text-gray-100',
      'shadow-large',
      'rounded-large',
      'max-h-[calc(100vh_-_2rem)]',
      'sm:max-h-[calc(100vh_-_8rem)]',
      'data-[open=true]:animate-in',
      'data-[open=false]:animate-out',
      'data-[open=false]:fade-out-0',
      'data-[open=true]:fade-in-0',
      'data-[open=false]:zoom-out-95',
      'data-[open=true]:zoom-in-95',
      'data-[open=false]:slide-out-to-left-1/2',
      'data-[open=false]:slide-out-to-top-[48%]',
      'data-[open=true]:slide-in-from-left-1/2',
      'data-[open=true]:slide-in-from-top-[48%]',
      'data-[open=false]:duration-200',
      'data-[open=true]:duration-200',
    ],
    backdrop: [
      'fixed',
      'inset-0',
      'z-50',
      'bg-overlay/50',
      'dark:bg-black/60',
      'data-[enter]:animate-in',
      'data-[exit]:animate-out',
      'data-[enter]:fade-in-0',
      'data-[exit]:fade-out-0',
      'data-[enter]:duration-200',
      'data-[exit]:duration-150',
    ],
    header: [
      'flex',
      'py-4',
      'px-6',
      'relative',
      'flex-col',
      'gap-1',
      'text-large',
      'font-semibold',
    ],
    body: [
      'relative',
      'flex-1',
      'px-6',
      'py-2',
      'flex',
      'flex-col',
      'gap-3',
      'min-h-0', // Important for flex scrolling
    ],
    footer: [
      'flex',
      'flex-row',
      'gap-2',
      'px-6',
      'py-4',
      'justify-end',
    ],
    closeButton: [
      'absolute',
      'appearance-none',
      'outline-none',
      'select-none',
      'top-1',
      'right-1',
      'rtl:right-auto',
      'rtl:left-1',
      'p-2',
      'text-foreground-500',
      'dark:text-gray-400',
      'rounded-full',
      'hover:bg-default-100',
      'dark:hover:bg-gray-700',
      'active:bg-default-200',
      'dark:active:bg-gray-600',
      'tap-highlight-transparent',
      'transition-opacity',
      'data-[pressed=true]:scale-95',
      'transition-transform',
      'z-10',
    ],
  },
  variants: {
    size: {
      xs: {
        base: 'max-w-xs',
      },
      sm: {
        base: 'max-w-sm',
      },
      md: {
        base: 'max-w-md',
      },
      lg: {
        base: 'max-w-lg',
      },
      xl: {
        base: 'max-w-xl',
      },
      '2xl': {
        base: 'max-w-2xl',
      },
      '3xl': {
        base: 'max-w-3xl',
      },
      '4xl': {
        base: 'max-w-4xl',
      },
      '5xl': {
        base: 'max-w-5xl',
      },
      full: {
        base: 'max-w-full max-h-full my-0 mx-0 sm:my-0 sm:mx-0 rounded-none',
      },
    },
    radius: {
      none: {
        base: 'rounded-none',
      },
      sm: {
        base: 'rounded-small',
      },
      md: {
        base: 'rounded-medium',
      },
      lg: {
        base: 'rounded-large',
      },
    },
    shadow: {
      none: {
        base: 'shadow-none',
      },
      sm: {
        base: 'shadow-small',
      },
      md: {
        base: 'shadow-medium',
      },
      lg: {
        base: 'shadow-large',
      },
    },
    backdrop: {
      transparent: {
        backdrop: 'bg-transparent',
      },
      opaque: {
        backdrop: 'bg-overlay/50 dark:bg-black/60',
      },
      blur: {
        backdrop: 'bg-overlay/30 backdrop-blur-sm backdrop-saturate-150 dark:bg-black/40',
      },
    },
    scrollBehavior: {
      normal: {
        base: 'overflow-hidden',
        body: 'overflow-y-auto max-h-[60vh]',
      },
      inside: {
        base: 'max-h-[calc(100vh_-_8rem)] overflow-hidden flex flex-col',
        body: 'overflow-y-auto flex-1 min-h-0',
      },
      outside: {
        wrapper: 'items-start sm:items-center overflow-y-auto py-8',
        base: 'my-0 max-h-fit overflow-visible',
        body: 'overflow-visible',
      },
    },
    placement: {
      auto: {
        wrapper: 'items-end sm:items-center',
        base: 'sm:my-16 my-2',
      },
      top: {
        wrapper: 'items-start',
        base: 'mt-2 mb-auto',
      },
      'top-center': {
        wrapper: 'items-start sm:items-center',
        base: 'mt-2 sm:mt-16 mb-auto',
      },
      center: {
        wrapper: 'items-center',
        base: 'my-auto',
      },
      bottom: {
        wrapper: 'items-end',
        base: 'mb-2 mt-auto',
      },
      'bottom-center': {
        wrapper: 'items-end sm:items-center',
        base: 'mb-2 sm:mb-16 mt-auto',
      },
    },
    disableAnimation: {
      true: {
        base: [
          'data-[open=true]:animate-none',
          'data-[open=false]:animate-none',
        ],
        backdrop: [
          'data-[enter]:animate-none',
          'data-[exit]:animate-none',
        ],
      },
    },
    isDraggable: {
      true: {
        header: 'cursor-move select-none active:cursor-grabbing',
        base: 'cursor-default',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    radius: 'lg',
    shadow: 'lg',
    backdrop: 'opaque',
    scrollBehavior: 'normal',
    placement: 'auto',
    disableAnimation: false,
    isDraggable: false,
  },
});

export type ModalVariantProps = Parameters<typeof modal>[0];
export type ModalSlots = keyof ReturnType<typeof modal>;