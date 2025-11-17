import type { ReactNode } from "react";

/**
 * Size variants for Accordion component
 */
export type AccordionSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Visual variants for Accordion component
 */
export type AccordionVariant = "flat" | "bordered" | "shadow" | "splitted";

/**
 * Color variants for Accordion component
 */
export type AccordionColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Border radius variants for Accordion component
 */
export type AccordionRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Selection modes for Accordion
 */
export type AccordionSelectionMode = "single" | "multiple" | "none";

/**
 * Item placement positions
 */
export type AccordionItemPlacement = "start" | "end" | "outside";

/**
 * Indicator positions for the expand/collapse icon
 */
export type AccordionIndicatorPlacement = "start" | "end";

/**
 * Individual accordion item configuration
 */
export interface AccordionItemConfig {
  /** Unique key for the item */
  key: string;
  /** Title content for the header */
  title: ReactNode;
  /** Content to display when expanded */
  content: ReactNode;
  /** Whether this item starts expanded */
  defaultExpanded?: boolean;
  /** Whether this item is disabled */
  isDisabled?: boolean;
  /** Custom header content */
  header?: ReactNode;
  /** ARIA label for the item */
  ariaLabel?: string;
  /** Additional CSS classes for the item */
  className?: string;
  /** Custom styles for the item */
  style?: React.CSSProperties;
}

/**
 * Props for individual AccordionItem component
 */
export interface AccordionItemProps {
  /** Unique identifier for the item */
  itemKey: string;
  /** Title content for the header */
  title: ReactNode;
  /** Content to display when expanded */
  children: ReactNode;
  /** Whether this item is expanded */
  isExpanded?: boolean;
  /** Whether this item is disabled */
  isDisabled?: boolean;
  /** Whether to show divider */
  showDivider?: boolean;
  /** Custom header content */
  header?: ReactNode;
  /** Click handler for the item */
  onToggle?: (key: string) => void;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Props for AccordionHeader component
 */
export interface AccordionHeaderProps {
  /** Header content */
  children: ReactNode;
  /** Whether the item is expanded */
  isExpanded: boolean;
  /** Whether the item is disabled */
  isDisabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label */
  ariaLabel?: string;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Props for AccordionContent component
 */
export interface AccordionContentProps {
  /** Content to display */
  children: ReactNode;
  /** Whether the content is expanded */
  isExpanded: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Props for AccordionIndicator component
 */
export interface AccordionIndicatorProps {
  /** Whether the item is expanded */
  isExpanded: boolean;
  /** Whether the item is disabled */
  isDisabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Custom indicator content */
  children?: ReactNode;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Main accordion component props
 */
export interface AccordionProps {
  /** Accordion items configuration */
  items?: AccordionItemConfig[];
  /** Children components (AccordionItem) */
  children?: ReactNode;
  /** Selection mode */
  selectionMode?: AccordionSelectionMode;
  /** Default expanded items (for uncontrolled) */
  defaultExpandedKeys?: string[];
  /** Expanded items (for controlled) */
  expandedKeys?: string[];
  /** Callback when expansion changes */
  onExpandedChange?: (keys: string[]) => void;
  /** Callback when a single selection changes */
  onSelectionChange?: (key: string) => void;
  /** Size variant */
  size?: AccordionSize;
  /** Color variant */
  color?: AccordionColor;
  /** Visual variant */
  variant?: AccordionVariant;
  /** Border radius */
  radius?: AccordionRadius;
  /** Whether the accordion is disabled */
  isDisabled?: boolean;
  /** Whether to show dividers between items */
  showDivider?: boolean;
  /** Whether to disable animations */
  disableAnimation?: boolean;
  /** Whether to disable the indicator icons */
  disableIndicatorAnimation?: boolean;
  /** Whether to keep content mounted when collapsed */
  keepContentMounted?: boolean;
  /** Animation configuration for framer-motion */
  animationConfig?: AccordionAnimationConfig;
  /** Indicator placement */
  indicatorPlacement?: AccordionIndicatorPlacement;
  /** Item placement */
  itemPlacement?: AccordionItemPlacement;
  /** Whether to compact mode */
  isCompact?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** ARIA label for the accordion */
  "aria-label"?: string;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Configuration for useAccordion hook
 */
export interface UseAccordionConfig {
  /** Selection mode */
  selectionMode?: AccordionSelectionMode;
  /** Default expanded keys */
  defaultExpandedKeys?: string[];
  /** Controlled expanded keys */
  expandedKeys?: string[];
  /** Change handler */
  onExpandedChange?: (keys: string[]) => void;
  /** Single selection change handler */
  onSelectionChange?: (key: string) => void;
  /** Whether disabled */
  isDisabled?: boolean;
}

/**
 * Return type for useAccordion hook
 */
export interface UseAccordionReturn {
  /** Currently expanded keys */
  expandedKeys: string[];
  /** Check if an item is expanded */
  isExpanded: (key: string) => boolean;
  /** Toggle a specific item */
  toggle: (key: string) => void;
  /** Expand a specific item */
  expand: (key: string) => void;
  /** Collapse a specific item */
  collapse: (key: string) => void;
  /** Expand all items */
  expandAll: () => void;
  /** Collapse all items */
  collapseAll: () => void;
  /** Set expanded keys directly */
  setExpandedKeys: (keys: string[]) => void;
}

/**
 * Accordion context value
 */
export interface AccordionContextValue {
  /** Currently expanded keys */
  expandedKeys: string[];
  /** Toggle function */
  toggle: (key: string) => void;
  /** Selection mode */
  selectionMode: AccordionSelectionMode;
  /** Size variant */
  size: AccordionSize;
  /** Color variant */
  color: AccordionColor;
  /** Visual variant */
  variant: AccordionVariant;
  /** Border radius */
  radius: AccordionRadius;
  /** Whether disabled */
  isDisabled: boolean;
  /** Whether to show dividers */
  showDivider: boolean;
  /** Whether animations are disabled */
  disableAnimation: boolean;
  /** Whether indicator animations are disabled */
  disableIndicatorAnimation: boolean;
  /** Whether to keep content mounted */
  keepContentMounted: boolean;
  /** Indicator placement */
  indicatorPlacement: AccordionIndicatorPlacement;
  /** Item placement */
  itemPlacement: AccordionItemPlacement;
  /** Whether compact mode */
  isCompact: boolean;
  /** Animation configuration */
  animationConfig?: AccordionAnimationConfig;
}

/**
 * Default configuration values
 */
export interface AccordionDefaults {
  size: AccordionSize;
  color: AccordionColor;
  variant: AccordionVariant;
  radius: AccordionRadius;
  selectionMode: AccordionSelectionMode;
  indicatorPlacement: AccordionIndicatorPlacement;
  itemPlacement: AccordionItemPlacement;
  showDivider: boolean;
  disableAnimation: boolean;
  disableIndicatorAnimation: boolean;
  keepContentMounted: boolean;
  isCompact: boolean;
}

/**
 * Animation preset types for framer-motion
 */
export type AccordionAnimationPreset = 
  | "spring" 
  | "tween" 
  | "smooth" 
  | "bouncy" 
  | "slow";

/**
 * Animation configuration for accordion components
 */
export interface AccordionAnimationConfig {
  /** Animation preset */
  preset?: AccordionAnimationPreset;
  /** Custom spring configuration */
  spring?: {
    stiffness?: number;
    damping?: number;
    duration?: number;
  };
  /** Stagger delay between items (in seconds) */
  staggerDelay?: number;
  /** Enable stagger animation for multiple items */
  enableStagger?: boolean;
}

/**
 * Props for accordion motion wrapper with framer-motion
 */
export interface AccordionMotionProps {
  /** Whether the content is expanded */
  isExpanded: boolean;
  /** Whether animations are disabled */
  disableAnimation?: boolean;
  /** Content to animate */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Animation configuration */
  animationConfig?: AccordionAnimationConfig;
}