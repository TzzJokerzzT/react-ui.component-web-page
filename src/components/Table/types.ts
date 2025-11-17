import type { Key, ReactNode } from "react";

/**
 * Table color variants
 */
export type TableColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "custom";

/**
 * Custom color configuration for table
 */
export interface CustomTableColor {
  background?: string;
  border?: string;
  text?: string;
  hover?: string;
  selected?: string;
  gradient?: string;
}

/**
 * Table layout types
 */
export type TableLayout = "auto" | "fixed";

/**
 * Table radius options
 */
export type TableRadius = "none" | "sm" | "md" | "lg";

/**
 * Table shadow options
 */
export type TableShadow = "none" | "sm" | "md" | "lg";

/**
 * Selection modes for table rows
 */
export type SelectionMode = "none" | "single" | "multiple";

/**
 * Selection behavior types
 */
export type SelectionBehavior = "toggle" | "replace";

/**
 * Disabled behavior types
 */
export type DisabledBehavior = "selection" | "all";

/**
 * Content placement options
 */
export type ContentPlacement = "inside" | "outside";

/**
 * Column alignment options
 */
export type ColumnAlign = "start" | "center" | "end";

/**
 * Loading state types
 */
export type LoadingState = "loading" | "filtering" | "sorting" | "loadingMore" | "error" | "idle";

/**
 * Selection type - can be "all" or a Set of keys
 */
export type Selection = "all" | Set<Key>;

/**
 * Sort descriptor interface
 */
export interface SortDescriptor {
  column?: Key;
  direction?: "ascending" | "descending";
}

/**
 * Column definition interface
 */
export interface ColumnDef<T = any> {
  key: Key;
  label: ReactNode;
  align?: ColumnAlign;
  allowsSorting?: boolean;
  hideHeader?: boolean;
  isRowHeader?: boolean;
  sortIcon?: ReactNode;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  render?: (item: T) => ReactNode;
}

/**
 * Row data interface
 */
export interface RowData {
  key: Key;
  [key: string]: any;
}

/**
 * Table main component props
 */
export interface TableProps<T = RowData> {
  children?: ReactNode;
  className?: string;
  color?: TableColor;
  customColor?: CustomTableColor;
  layout?: TableLayout;
  radius?: TableRadius;
  shadow?: TableShadow;
  maxTableHeight?: number;
  rowHeight?: number;
  isVirtualized?: boolean;
  hideHeader?: boolean;
  isStriped?: boolean;
  isCompact?: boolean;
  isHeaderSticky?: boolean;
  fullWidth?: boolean;
  removeWrapper?: boolean;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
  topContentPlacement?: ContentPlacement;
  bottomContentPlacement?: ContentPlacement;
  showSelectionCheckboxes?: boolean;
  sortDescriptor?: SortDescriptor;
  selectedKeys?: Selection;
  defaultSelectedKeys?: Selection;
  disabledKeys?: Selection;
  disallowEmptySelection?: boolean;
  selectionMode?: SelectionMode;
  selectionBehavior?: SelectionBehavior;
  disabledBehavior?: DisabledBehavior;
  allowDuplicateSelectionEvents?: boolean;
  disableAnimation?: boolean;
  isKeyboardNavigationDisabled?: boolean;
  // Data props for dynamic rendering
  columns?: ColumnDef<T>[];
  items?: T[];
  // Loading and empty states
  loading?: boolean;
  emptyContent?: ReactNode;
  // Text alignment options
  centerHeaderText?: boolean;
  centerCellText?: boolean;
  // Event handlers
  onRowAction?: (key: Key) => void;
  onCellAction?: (key: Key) => void;
  onSelectionChange?: (keys: Selection) => void;
  onSortChange?: (descriptor: SortDescriptor) => void;
  // Test ID
  "data-testid"?: string;
}

/**
 * Table header props
 */
export interface TableHeaderProps<T = any> {
  children?: ReactNode;
  className?: string;
  columns?: ColumnDef<T>[];
  "data-testid"?: string;
}

/**
 * Table column props
 */
export interface TableColumnProps {
  children: ReactNode;
  className?: string;
  align?: ColumnAlign;
  hideHeader?: boolean;
  allowsSorting?: boolean;
  sortIcon?: ReactNode;
  isRowHeader?: boolean;
  textValue?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  "data-testid"?: string;
}

/**
 * Table body props
 */
export interface TableBodyProps<T = any> {
  children?: ReactNode | ((item: T) => ReactNode);
  className?: string;
  items?: T[];
  isLoading?: boolean;
  loadingState?: LoadingState;
  loadingContent?: ReactNode;
  emptyContent?: ReactNode;
  onLoadMore?: () => void;
  "data-testid"?: string;
}

/**
 * Table row props
 */
export interface TableRowProps<T = any> {
  children?: ReactNode;
  className?: string;
  textValue?: string;
  item?: T;
  "data-testid"?: string;
}

/**
 * Table cell props
 */
export interface TableCellProps {
  children: ReactNode;
  className?: string;
  align?: ColumnAlign;
  textValue?: string;
  "data-testid"?: string;
}

/**
 * Table context interface for sharing state between components
 */
export interface TableContextType<T = any> {
  color: TableColor;
  customColor?: CustomTableColor;
  selectionMode: SelectionMode;
  selectionBehavior: SelectionBehavior;
  selectedKeys: Selection;
  disabledKeys: Selection;
  sortDescriptor?: SortDescriptor;
  isStriped: boolean;
  isCompact: boolean;
  disableAnimation: boolean;
  showSelectionCheckboxes: boolean;
  onRowAction?: (key: Key) => void;
  onCellAction?: (key: Key) => void;
  onSelectionChange?: (keys: Selection) => void;
  onSortChange?: (descriptor: SortDescriptor) => void;
  columns?: ColumnDef<T>[];
  items?: T[];
  centerHeaderText: boolean;
  centerCellText: boolean;
}

/**
 * Table class names interface for styling customization
 */
export interface TableClassNames {
  base?: string;
  wrapper?: string;
  table?: string;
  thead?: string;
  tbody?: string;
  tfoot?: string;
  tr?: string;
  th?: string;
  td?: string;
  sortIcon?: string;
  emptyWrapper?: string;
  loadingWrapper?: string;
}

/**
 * Hook return types for table utilities
 */
export interface UseTableSelectionReturn {
  selectedKeys: Selection;
  setSelectedKeys: (keys: Selection) => void;
  selectAll: () => void;
  clearSelection: () => void;
  toggleRowSelection: (key: Key) => void;
  isRowSelected: (key: Key) => boolean;
  selectedItems: any[];
}

export interface UseTableSortReturn {
  sortDescriptor: SortDescriptor;
  setSortDescriptor: (descriptor: SortDescriptor) => void;
  sortedItems: any[];
  sort: (column: Key) => void;
}