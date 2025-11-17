import { ReactNode, RefObject } from 'react';

/**
 * Tooltip placement positions
 */
export type TooltipPlacement = 
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

/**
 * Tooltip trigger types
 */
export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual';

/**
 * Size variants for tooltip
 */
export type TooltipSize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Color variants for tooltip
 */
export type TooltipVariant = 'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error';

/**
 * Animation types for tooltip entrance/exit
 */
export type TooltipAnimation = 
  | 'fade' 
  | 'scale' 
  | 'shift' 
  | 'bounce'
  | 'rotate'
  | 'slide'
  | 'zoom'
  | 'flip'
  | 'elastic'
  | 'none';

/**
 * Animation speed configuration
 */
export type TooltipAnimationSpeed = 'slow' | 'normal' | 'fast' | 'instant';

/**
 * Animation easing types
 */
export type TooltipAnimationEasing = 
  | 'linear'
  | 'easeIn'
  | 'easeOut' 
  | 'easeInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'elasticIn'
  | 'elasticOut'
  | 'elasticInOut'
  | 'bounceIn'
  | 'bounceOut'
  | 'bounceInOut';

/**
 * Advanced animation configuration
 */
export interface TooltipAnimationConfig {
  /** Animation type */
  type?: TooltipAnimation;
  /** Animation speed */
  speed?: TooltipAnimationSpeed;
  /** Animation easing */
  easing?: TooltipAnimationEasing;
  /** Custom duration in seconds */
  duration?: number;
  /** Delay before animation starts */
  delay?: number;
  /** Spring configuration for bouncy animations */
  spring?: {
    tension?: number;
    friction?: number;
    mass?: number;
  };
}

/**
 * Offset configuration for tooltip positioning
 */
export interface TooltipOffset {
  mainAxis?: number;
  crossAxis?: number;
}

/**
 * Arrow configuration
 */
export interface TooltipArrow {
  /** Whether to show arrow */
  enabled?: boolean;
  /** Arrow size in pixels */
  size?: number;
  /** Arrow offset from edge */
  offset?: number;
}

/**
 * Delay configuration for tooltip show/hide
 */
export interface TooltipDelay {
  /** Delay before showing tooltip (ms) */
  show?: number;
  /** Delay before hiding tooltip (ms) */
  hide?: number;
}

/**
 * Base tooltip props
 */
export interface BaseTooltipProps {
  /** Tooltip content */
  content: ReactNode;
  /** Placement of tooltip */
  placement?: TooltipPlacement;
  /** How tooltip is triggered */
  trigger?: TooltipTrigger;
  /** Size variant */
  size?: TooltipSize;
  /** Color variant */
  variant?: TooltipVariant;
  /** Animation type */
  animation?: TooltipAnimation;
  /** Advanced animation configuration */
  animationConfig?: TooltipAnimationConfig;
  /** Custom offset */
  offset?: TooltipOffset;
  /** Arrow configuration */
  arrow?: TooltipArrow;
  /** Show/hide delays */
  delay?: TooltipDelay;
  /** Whether tooltip is disabled */
  disabled?: boolean;
  /** Whether tooltip is open (for manual trigger) */
  open?: boolean;
  /** Default open state (for uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Custom z-index */
  zIndex?: number;
  /** Whether to render in portal */
  portal?: boolean;
  /** Portal container */
  portalContainer?: Element | DocumentFragment;
  /** Custom CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** ARIA described by for accessibility */
  'aria-describedby'?: string;
  /** Custom ID */
  id?: string;
}

/**
 * Main Tooltip component props
 */
export interface TooltipProps extends BaseTooltipProps {
  /** Children to render as trigger */
  children: ReactNode;
  /** Whether children should be wrapped in span */
  asChild?: boolean;
}

/**
 * Tooltip content props (internal)
 */
export interface TooltipContentProps extends Omit<BaseTooltipProps, 'children'> {
  /** Reference element for positioning */
  referenceElement: Element | null;
  /** Whether tooltip is visible */
  isVisible: boolean;
  /** Calculated position */
  position?: {
    x: number;
    y: number;
    placement: TooltipPlacement;
  };
}

/**
 * Tooltip provider context props
 */
export interface TooltipProviderProps {
  /** Default delay configuration */
  delayDuration?: number;
  /** Skip delay when moving between tooltips */
  skipDelayDuration?: number;
  /** Disable hover card globally */
  disableHoverableContent?: boolean;
  /** Children */
  children: ReactNode;
}

/**
 * Tooltip context value
 */
export interface TooltipContextValue {
  /** Default delay duration */
  delayDuration: number;
  /** Skip delay duration */
  skipDelayDuration: number;
  /** Disable hoverable content */
  disableHoverableContent: boolean;
  /** Whether currently in group hover */
  isPointerInTransit: boolean;
  /** Set pointer in transit */
  setIsPointerInTransit: (inTransit: boolean) => void;
}

/**
 * Hook return type for useTooltip
 */
export interface UseTooltipReturn {
  /** Whether tooltip is open */
  isOpen: boolean;
  /** Open tooltip */
  open: () => void;
  /** Close tooltip */
  close: () => void;
  /** Toggle tooltip */
  toggle: () => void;
  /** Reference element ref */
  referenceRef: RefObject<Element>;
  /** Tooltip props for trigger element */
  triggerProps: {
    ref: RefObject<Element>;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    'aria-describedby'?: string;
  };
  /** Props for tooltip content */
  tooltipProps: {
    id: string;
    role: string;
    'aria-hidden': boolean;
  };
}

/**
 * Position calculation result
 */
export interface PositionResult {
  x: number;
  y: number;
  placement: TooltipPlacement;
  arrow?: {
    x: number;
    y: number;
    placement: 'top' | 'bottom' | 'left' | 'right';
  };
}

/**
 * Boundary detection result
 */
export interface BoundaryResult {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
}

