import React, { createContext, useContext, useMemo } from "react";
import type { TableProps, TableContextType } from "./types";
import {
  getTableWrapperClasses,
  getTableClasses,
} from "./helper";

// Table Context
const TableContext = createContext<TableContextType | null>(null);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("Table components must be used within a Table component");
  }
  return context;
};

export const Table = <T extends Record<string, any> = any>({
  children,
  className = "",
  color = "default",
  customColor,
  layout = "auto",
  radius = "md",
  shadow = "sm",
  maxTableHeight,
  rowHeight,
  isVirtualized = false,
  hideHeader = false,
  isStriped = false,
  isCompact = false,
  isHeaderSticky = false,
  fullWidth = true,
  removeWrapper = false,
  topContent,
  bottomContent,
  topContentPlacement = "outside",
  bottomContentPlacement = "outside",
  showSelectionCheckboxes = false,
  sortDescriptor,
  selectedKeys = new Set(),
  defaultSelectedKeys = new Set(),
  disabledKeys = new Set(),
  disallowEmptySelection = false,
  selectionMode = "none",
  selectionBehavior = "toggle",
  disabledBehavior = "selection",
  allowDuplicateSelectionEvents = false,
  disableAnimation = false,
  isKeyboardNavigationDisabled = false,
  columns,
  items,
  loading = false,
  emptyContent,
  centerHeaderText = false,
  centerCellText = false,
  onRowAction,
  onCellAction,
  onSelectionChange,
  onSortChange,
  "data-testid": testId,
  ...props
}: TableProps<T>) => {
  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo<TableContextType<T>>(() => ({
    color,
    customColor,
    selectionMode,
    selectionBehavior,
    selectedKeys,
    disabledKeys,
    sortDescriptor,
    isStriped,
    isCompact,
    disableAnimation,
    showSelectionCheckboxes,
    onRowAction,
    onCellAction,
    onSelectionChange,
    onSortChange,
    columns,
    items,
    centerHeaderText,
    centerCellText,
  }), [
    color,
    customColor,
    selectionMode,
    selectionBehavior,
    selectedKeys,
    disabledKeys,
    sortDescriptor,
    isStriped,
    isCompact,
    disableAnimation,
    showSelectionCheckboxes,
    onRowAction,
    onCellAction,
    onSelectionChange,
    onSortChange,
    columns,
    items,
    centerHeaderText,
    centerCellText,
  ]);

  // Generate wrapper classes
  const wrapperClasses = useMemo(() => 
    getTableWrapperClasses(color, customColor, radius, shadow, removeWrapper, fullWidth),
    [color, customColor, radius, shadow, removeWrapper, fullWidth]
  );

  // Generate table classes
  const tableClasses = useMemo(() => 
    getTableClasses(isCompact, isStriped),
    [isCompact, isStriped]
  );

  // Determine if we should render top content inside or outside wrapper
  const renderTopContentOutside = topContentPlacement === "outside" && topContent;
  const renderTopContentInside = topContentPlacement === "inside" && topContent;

  // Determine if we should render bottom content inside or outside wrapper
  const renderBottomContentOutside = bottomContentPlacement === "outside" && bottomContent;
  const renderBottomContentInside = bottomContentPlacement === "inside" && bottomContent;

  // Table container styles for scrolling and height
  const tableContainerStyles: React.CSSProperties = {
    ...(maxTableHeight && { maxHeight: maxTableHeight, overflowY: "auto" }),
    ...(isVirtualized && rowHeight && { height: maxTableHeight || 400 }),
  };

  return (
    <TableContext.Provider value={contextValue}>
      <div className="table-wrapper" data-testid={testId}>
        {/* Top content outside wrapper */}
        {renderTopContentOutside && (
          <div className="table-top-content mb-4">
            {topContent}
          </div>
        )}

        {/* Main table wrapper */}
        <div 
          className={`${wrapperClasses} ${className}`.trim()}
          {...props}
        >
          {/* Top content inside wrapper */}
          {renderTopContentInside && (
            <div className="table-top-content-inside p-4 border-b border-gray-200 dark:border-gray-700">
              {topContent}
            </div>
          )}

          {/* Scrollable table container */}
          <div 
            className="table-container overflow-auto"
            style={tableContainerStyles}
          >
            {/* Loading state */}
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600 dark:border-gray-300"></div>
                  <span className="text-gray-600 dark:text-gray-300">Loading...</span>
                </div>
              </div>
            ) : items && items.length === 0 ? (
              /* Empty state */
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  {emptyContent || (
                    <div className="text-gray-500 dark:text-gray-400">
                      <div className="text-4xl mb-2">📄</div>
                      <div className="text-lg font-medium mb-1">No data available</div>
                      <div className="text-sm">There are no items to display</div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Normal table content */
              <table 
                className={`${tableClasses} ${layout === "fixed" ? "table-fixed" : ""}`}
                role="table"
                aria-label="Data table"
              >
                {children}
              </table>
            )}
          </div>

          {/* Bottom content inside wrapper */}
          {renderBottomContentInside && (
            <div className="table-bottom-content-inside p-4 border-t border-gray-200 dark:border-gray-700">
              {bottomContent}
            </div>
          )}
        </div>

        {/* Bottom content outside wrapper */}
        {renderBottomContentOutside && (
          <div className="table-bottom-content mt-4">
            {bottomContent}
          </div>
        )}
      </div>
    </TableContext.Provider>
  );
};

// Default export
export default Table;