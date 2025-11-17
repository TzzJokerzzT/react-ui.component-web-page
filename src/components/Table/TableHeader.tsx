import React from "react";
import type { TableHeaderProps, TableColumnProps } from "./types";
import { useTableContext } from "./Table";
import {
  getTableHeaderClasses,
  getTableHeaderCellClasses,
  getSortIconClasses,
  toggleSortDirection,
} from "./helper";

export const TableHeader = <T extends Record<string, any> = any>({
  children,
  className = "",
  columns,
  "data-testid": testId,
}: TableHeaderProps<T>) => {
  const {
    isCompact,
    selectionMode,
    showSelectionCheckboxes,
    centerHeaderText,
    customColor,
  } = useTableContext();

  // Generate header classes
  const headerClasses = getTableHeaderClasses(false); // We'll handle sticky in the parent Table component

  // If we have columns prop, render dynamic columns
  if (columns && columns.length > 0) {
    return (
      <thead className={`${headerClasses} ${className}`.trim()} data-testid={testId}>
        <tr>
          {/* Selection checkbox column */}
          {selectionMode !== "none" && showSelectionCheckboxes && (
            <th className={getTableHeaderCellClasses("start", false, isCompact, centerHeaderText, customColor)}>
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-label="Select all rows"
                // TODO: Implement select all functionality
              />
            </th>
          )}

          {/* Dynamic columns */}
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              align={column.align}
              allowsSorting={column.allowsSorting}
              hideHeader={column.hideHeader}
              isRowHeader={column.isRowHeader}
              sortIcon={column.sortIcon}
              textValue={column.key.toString()}
              width={column.width}
              minWidth={column.minWidth}
              maxWidth={column.maxWidth}
            >
              {column.label}
            </TableColumn>
          ))}
        </tr>
      </thead>
    );
  }

  // Static children rendering
  return (
    <thead className={`${headerClasses} ${className}`.trim()} data-testid={testId}>
      <tr>
        {/* Selection checkbox column */}
        {selectionMode !== "none" && showSelectionCheckboxes && (
          <th className={getTableHeaderCellClasses("start", false, isCompact, centerHeaderText, customColor)}>
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              aria-label="Select all rows"
              // TODO: Implement select all functionality
            />
          </th>
        )}
        {children}
      </tr>
    </thead>
  );
};

export const TableColumn: React.FC<TableColumnProps> = ({
  children,
  className = "",
  align = "start",
  hideHeader = false,
  allowsSorting = false,
  sortIcon,
  isRowHeader = false,
  textValue,
  width,
  minWidth,
  maxWidth,
  "data-testid": testId,
}) => {
  const {
    isCompact,
    sortDescriptor,
    onSortChange,
    centerHeaderText,
    customColor,
  } = useTableContext();

  // Don't render if header is hidden
  if (hideHeader) {
    return null;
  }

  // Generate header cell classes
  const cellClasses = getTableHeaderCellClasses(align, allowsSorting, isCompact, centerHeaderText, customColor);

  // Handle sort click
  const handleSortClick = () => {
    if (!allowsSorting || !onSortChange || !textValue) {
      return;
    }
    
    const newSortDescriptor = toggleSortDirection(
      sortDescriptor || { column: undefined, direction: "ascending" },
      textValue
    );
    
    onSortChange(newSortDescriptor);
  };

  // Determine if this column is currently sorted
  const isSorted = sortDescriptor?.column === textValue;
  const sortDirection = isSorted ? sortDescriptor?.direction : undefined;

  // Generate sort icon classes
  const sortIconClasses = getSortIconClasses(sortDirection);

  // Column styles
  const columnStyles: React.CSSProperties = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(minWidth && { minWidth: typeof minWidth === "number" ? `${minWidth}px` : minWidth }),
    ...(maxWidth && { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth }),
  };

  return (
    <th
      className={`${cellClasses} ${className}`.trim()}
      style={columnStyles}
      onClick={allowsSorting ? handleSortClick : undefined}
      role={isRowHeader ? "rowheader" : "columnheader"}
      aria-sort={
        isSorted
          ? sortDirection === "ascending"
            ? "ascending"
            : "descending"
          : allowsSorting
          ? "none"
          : undefined
      }
      data-testid={testId}
    >
      <div className={`flex items-center ${centerHeaderText ? 'justify-center' : 'justify-between'}`}>
        <span>{children}</span>
        
        {/* Sort indicator */}
        {allowsSorting && (
          <span className={`${sortIconClasses} ${centerHeaderText ? 'ml-2' : ''}`}>
            {sortIcon ? (
              sortIcon
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                />
              </svg>
            )}
          </span>
        )}
      </div>
    </th>
  );
};

// Default exports
export default TableHeader;