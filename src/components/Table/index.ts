// Main components
export { Table, useTableContext } from "./Table";
export { TableHeader, TableColumn } from "./TableHeader";
export { TableBody } from "./TableBody";
export { TableRow } from "./TableRow";
export { TableCell } from "./TableCell";

// Types
export type {
  TableProps,
  TableHeaderProps,
  TableColumnProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableContextType,
  TableClassNames,
  ColumnDef,
  RowData,
  SortDescriptor,
  Selection,
  SelectionMode,
  SelectionBehavior,
  DisabledBehavior,
  ContentPlacement,
  ColumnAlign,
  LoadingState,
  TableColor,
  TableLayout,
  TableRadius,
  TableShadow,
  UseTableSelectionReturn,
  UseTableSortReturn,
} from "./types";

// Utility functions
export {
  getTableColorClasses,
  getTableRadiusClasses,
  getTableShadowClasses,
  getColumnAlignClasses,
  getTableWrapperClasses,
  getTableClasses,
  getTableHeaderClasses,
  getTableHeaderCellClasses,
  getTableRowClasses,
  getTableCellClasses,
  getSortIconClasses,
  isAllSelected,
  isRowSelected,
  toggleRowSelection,
  selectAll,
  clearSelection,
  sortItems,
  toggleSortDirection,
  getDefaultSortIconSVG,
  getLoadingSpinnerClasses,
  getCheckboxProps,
  getNextRowIndex,
  getNextColumnIndex,
} from "./helper";

// Default export
export { Table as default } from "./Table";