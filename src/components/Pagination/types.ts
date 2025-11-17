import type { ReactNode } from "react";

/**
 * Size variants for Pagination component
 */
export type PaginationSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Visual variants for Pagination component
 */
export type PaginationVariant = "flat" | "bordered" | "light" | "faded";

/**
 * Color variants for Pagination component
 */
export type PaginationColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Radius variants for Pagination component
 */
export type PaginationRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Item type for pagination items
 */
export type PaginationItemType = "page" | "prev" | "next" | "dots" | "first" | "last";

/**
 * Placement options for pagination controls
 */
export type PaginationControlsPlacement = "start" | "end" | "both";

/**
 * Props for individual pagination item
 */
export interface PaginationItemProps {
  /** Page number or item identifier */
  value: number | string;
  /** Type of pagination item */
  type: PaginationItemType;
  /** Whether the item is currently active */
  isActive?: boolean;
  /** Whether the item is disabled */
  isDisabled?: boolean;
  /** Click handler for the item */
  onClick?: (value: number | string) => void;
  /** Custom content to render */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Size variant */
  size?: PaginationSize;
  /** Color variant */
  color?: PaginationColor;
  /** Visual variant */
  variant?: PaginationVariant;
  /** Border radius */
  radius?: PaginationRadius;
  /** ARIA label for accessibility */
  "aria-label"?: string;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Props for pagination cursor (prev/next buttons)
 */
export interface PaginationCursorProps {
  /** Direction of the cursor */
  direction: "prev" | "next";
  /** Whether the cursor is disabled */
  isDisabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Custom content to render */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Size variant */
  size?: PaginationSize;
  /** Color variant */
  color?: PaginationColor;
  /** Visual variant */
  variant?: PaginationVariant;
  /** Border radius */
  radius?: PaginationRadius;
  /** ARIA label for accessibility */
  "aria-label"?: string;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Configuration for pagination controls
 */
export interface PaginationControlsConfig {
  /** Show previous/next buttons */
  showControls?: boolean;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Placement of control buttons */
  placement?: PaginationControlsPlacement;
  /** Custom labels for controls */
  labels?: {
    prev?: string | ReactNode;
    next?: string | ReactNode;
    first?: string | ReactNode;
    last?: string | ReactNode;
  };
}

/**
 * Configuration for pagination display
 */
export interface PaginationDisplayConfig {
  /** Whether to show page numbers */
  showPages?: boolean;
  /** Maximum number of page buttons to show */
  siblings?: number;
  /** Show dots when pages are collapsed */
  showDots?: boolean;
  /** Whether to loop from last to first page */
  loop?: boolean;
  /** Compact mode with minimal spacing */
  compact?: boolean;
  /** Show shadow effect */
  showShadow?: boolean;
}

/**
 * Main pagination component props
 */
export interface PaginationProps {
  /** Total number of pages */
  total: number;
  /** Current active page (1-based) */
  page?: number;
  /** Default page for uncontrolled component */
  defaultPage?: number;
  /** Initial page (alias for defaultPage) */
  initialPage?: number;
  /** Callback when page changes */
  onChange?: (page: number) => void;
  /** Callback when page is clicked */
  onPageChange?: (page: number) => void;
  /** Size variant */
  size?: PaginationSize;
  /** Color variant */
  color?: PaginationColor;
  /** Visual variant */
  variant?: PaginationVariant;
  /** Border radius */
  radius?: PaginationRadius;
  /** Whether the pagination is disabled */
  isDisabled?: boolean;
  /** Whether to disable animations */
  disableAnimation?: boolean;
  /** Controls configuration */
  controls?: PaginationControlsConfig;
  /** Display configuration */
  display?: PaginationDisplayConfig;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** ARIA label for the pagination */
  "aria-label"?: string;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Hook configuration for usePagination
 */
export interface UsePaginationConfig {
  /** Total number of pages */
  total: number;
  /** Current page */
  page?: number;
  /** Default page */
  defaultPage?: number;
  /** Initial page */
  initialPage?: number;
  /** Number of siblings to show */
  siblings?: number;
  /** Whether to show dots */
  showDots?: boolean;
  /** Whether to loop pages */
  loop?: boolean;
  /** Callback when page changes */
  onChange?: (page: number) => void;
}

/**
 * Pagination item data structure
 */
export interface PaginationItemData {
  /** Type of the item */
  type: PaginationItemType;
  /** Value (page number for pages) */
  value: number | string;
  /** Whether the item is active */
  isActive: boolean;
  /** Whether the item is disabled */
  isDisabled: boolean;
  /** Key for React rendering */
  key: string;
}

/**
 * Return type for usePagination hook
 */
export interface UsePaginationReturn {
  /** Current active page */
  activePage: number;
  /** Array of pagination items */
  range: PaginationItemData[];
  /** Go to specific page */
  setPage: (page: number) => void;
  /** Go to next page */
  next: () => void;
  /** Go to previous page */
  previous: () => void;
  /** Go to first page */
  first: () => void;
  /** Go to last page */
  last: () => void;
  /** Whether on first page */
  isFirst: boolean;
  /** Whether on last page */
  isLast: boolean;
  /** Total number of pages */
  totalPages: number;
}

/**
 * Props for pagination context provider
 */
export interface PaginationProviderProps {
  /** Pagination configuration */
  value: PaginationContextValue;
  /** Children components */
  children: ReactNode;
}

/**
 * Pagination context value
 */
export interface PaginationContextValue {
  /** Current page */
  activePage: number;
  /** Total pages */
  totalPages: number;
  /** Set page function */
  setPage: (page: number) => void;
  /** Size variant */
  size: PaginationSize;
  /** Color variant */
  color: PaginationColor;
  /** Visual variant */
  variant: PaginationVariant;
  /** Border radius */
  radius: PaginationRadius;
  /** Whether disabled */
  isDisabled: boolean;
  /** Whether animations are disabled */
  disableAnimation: boolean;
  /** Controls configuration */
  controls: Required<PaginationControlsConfig>;
  /** Display configuration */
  display: Required<PaginationDisplayConfig>;
}

/**
 * Props for pagination wrapper/container
 */
export interface PaginationWrapperProps {
  /** Children components */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Size variant for spacing */
  size?: PaginationSize;
  /** Whether to show shadow */
  showShadow?: boolean;
  /** Compact mode */
  compact?: boolean;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Props for dots separator component
 */
export interface PaginationDotsProps {
  /** Additional CSS classes */
  className?: string;
  /** Size variant */
  size?: PaginationSize;
  /** Custom content */
  children?: ReactNode;
  /** Test ID for testing */
  "data-testid"?: string;
}

/**
 * Default configuration values
 */
export interface PaginationDefaults {
  size: PaginationSize;
  color: PaginationColor;
  variant: PaginationVariant;
  radius: PaginationRadius;
  siblings: number;
  showControls: boolean;
  showFirstLast: boolean;
  showPages: boolean;
  showDots: boolean;
  loop: boolean;
  compact: boolean;
  showShadow: boolean;
  disableAnimation: boolean;
}