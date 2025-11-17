import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

// Base spinner types
export type SpinnerType = 
  | 'rotating' 
  | 'pulse' 
  | 'bounce' 
  | 'wave' 
  | 'grid' 
  | 'ring' 
  | 'dots' 
  | 'bars';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SpinnerColor = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'neutral';

export type SpinnerSpeed = 'slow' | 'normal' | 'fast';

// Animation configuration
export interface SpinnerAnimationConfig {
  duration?: number;
  delay?: number;
  repeat?: number;
  repeatType?: 'loop' | 'reverse' | 'mirror';
  repeatDelay?: number;
}

// Base spinner props
export interface BaseSpinnerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  /** Type of spinner animation */
  type?: SpinnerType;
  /** Size of the spinner */
  size?: SpinnerSize;
  /** Color theme of the spinner */
  color?: SpinnerColor;
  /** Animation speed */
  speed?: SpinnerSpeed;
  /** Whether the spinner is visible */
  visible?: boolean;
  /** Custom animation configuration */
  animationConfig?: Partial<SpinnerAnimationConfig>;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** Test ID for testing */
  'data-testid'?: string;
}

// Specific spinner component props
export interface SpinnerProps extends BaseSpinnerProps {
  /** Optional label text to display below spinner */
  label?: string;
  /** Optional overlay mode */
  overlay?: boolean;
  /** Overlay background opacity (0-1) */
  overlayOpacity?: number;
  /** Custom overlay background color */
  overlayColor?: string;
}

// Individual spinner type props
export interface RotatingSpinnerProps extends BaseSpinnerProps {
  /** Number of dots/segments in the rotating spinner */
  segments?: number;
  /** Whether to show trail effect */
  showTrail?: boolean;
}

export interface PulseSpinnerProps extends BaseSpinnerProps {
  /** Scale factor for pulse animation */
  scaleFactor?: number;
  /** Opacity range for pulse effect */
  opacityRange?: [number, number];
}

export interface BounceSpinnerProps extends BaseSpinnerProps {
  /** Number of bouncing dots */
  dots?: number;
  /** Spacing between dots */
  spacing?: number;
  /** Bounce height multiplier */
  bounceHeight?: number;
}

export interface WaveSpinnerProps extends BaseSpinnerProps {
  /** Number of wave bars */
  bars?: number;
  /** Wave height multiplier */
  waveHeight?: number;
  /** Spacing between bars */
  barSpacing?: number;
}

export interface GridSpinnerProps extends BaseSpinnerProps {
  /** Grid dimensions (rows x cols) */
  gridSize?: [number, number];
  /** Animation pattern for grid cells */
  pattern?: 'sequential' | 'random' | 'wave' | 'spiral';
}

export interface RingSpinnerProps extends BaseSpinnerProps {
  /** Ring thickness */
  thickness?: number;
  /** Trail length (0-1) */
  trailLength?: number;
  /** Ring completion percentage (0-1) for progress spinner */
  progress?: number;
}

export interface DotsSpinnerProps extends BaseSpinnerProps {
  /** Number of dots in sequence */
  dotCount?: number;
  /** Animation direction */
  direction?: 'horizontal' | 'vertical' | 'circular';
  /** Spacing between dots */
  spacing?: number;
}

export interface BarsSpinnerProps extends BaseSpinnerProps {
  /** Number of bars */
  barCount?: number;
  /** Bar orientation */
  orientation?: 'vertical' | 'horizontal';
  /** Individual bar width/height */
  barSize?: number;
}

// Compound component types
export interface SpinnerContainerProps {
  children: ReactNode;
  loading: boolean;
  spinner?: ReactNode;
  spinnerProps?: SpinnerProps;
  /** Position of spinner relative to content */
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  /** Whether to blur content when loading */
  blurContent?: boolean;
  /** Custom loading message */
  loadingMessage?: string;
}

// Context types
export interface SpinnerContextValue {
  globalVisible: boolean;
  setGlobalVisible: (visible: boolean) => void;
  defaultProps: Partial<SpinnerProps>;
  setDefaultProps: (props: Partial<SpinnerProps>) => void;
}

// Utility types
export type SpinnerVariant = {
  [K in SpinnerType]: {
    component: React.ComponentType<any>;
    defaultProps: Record<string, any>;
  };
};

// Animation presets
export interface SpinnerPreset {
  name: string;
  type: SpinnerType;
  props: Partial<SpinnerProps>;
  description: string;
}

// Hook types
export interface UseSpinnerOptions {
  delay?: number;
  minDuration?: number;
  onShow?: () => void;
  onHide?: () => void;
}

export interface UseSpinnerReturn {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

// Theme configuration
export interface SpinnerTheme {
  colors: Record<SpinnerColor, string>;
  sizes: Record<SpinnerSize, {
    size: string;
    fontSize?: string;
    spacing?: string;
  }>;
  speeds: Record<SpinnerSpeed, number>;
  defaults: {
    type: SpinnerType;
    size: SpinnerSize;
    color: SpinnerColor;
    speed: SpinnerSpeed;
  };
}

// Export all types
export type {
  HTMLMotionProps,
  ReactNode,
};