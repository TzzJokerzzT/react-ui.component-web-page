import type { TableBodyProps } from "./types";
import { useTableContext } from "./Table";
import { getLoadingSpinnerClasses, isRowSelected } from "./helper";

export const TableBody = <T extends Record<string, any> = any>({
  children,
  className = "",
  items,
  isLoading = false,
  loadingState = "idle",
  loadingContent,
  emptyContent,
  "data-testid": testId,
}: TableBodyProps<T>) => {
  const {
    columns,
    items: contextItems,
    isStriped,
    selectedKeys,
    disabledKeys,
    selectionMode,
    showSelectionCheckboxes,
    onSelectionChange,
  } = useTableContext();

  // Use items from props or context
  const dataItems = items || contextItems || [];

  // Loading state rendering
  if (isLoading || loadingState === "loading") {
    return (
      <tbody className={className} data-testid={testId}>
        <tr>
          <td 
            colSpan={columns ? columns.length + (showSelectionCheckboxes ? 1 : 0) : 1}
            className="text-center py-8"
          >
            {loadingContent || (
              <div className="flex items-center justify-center">
                <div className={getLoadingSpinnerClasses()} />
                <span className="ml-2 text-gray-500">Loading...</span>
              </div>
            )}
          </td>
        </tr>
      </tbody>
    );
  }

  // Empty state rendering
  if (dataItems.length === 0) {
    return (
      <tbody className={className} data-testid={testId}>
        <tr>
          <td 
            colSpan={columns ? columns.length + (showSelectionCheckboxes ? 1 : 0) : 1}
            className="text-center py-8"
          >
            {emptyContent || (
              <div className="text-gray-500">
                No data available
              </div>
            )}
          </td>
        </tr>
      </tbody>
    );
  }

  // Dynamic rendering with items and columns
  if (columns && columns.length > 0 && dataItems.length > 0) {
    return (
      <tbody className={className} data-testid={testId}>
        {dataItems.map((item, index) => {
          const itemKey = item.key || item.id || index;
          const isSelected = isRowSelected(selectedKeys, itemKey);
          const isDisabled = isRowSelected(disabledKeys, itemKey);
          const isEven = index % 2 === 0;

          return (
            <TableRow
              key={itemKey}
              item={item}
              className={getRowClasses(isSelected, isDisabled, isStriped, isEven)}
            >
              {/* Selection checkbox cell */}
              {selectionMode !== "none" && showSelectionCheckboxes && (
                <TableCell>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    disabled={isDisabled}
                    onChange={() => {
                      // Toggle selection logic
                      const newSelection = new Set(selectedKeys === "all" ? [] : selectedKeys);
                      if (isSelected) {
                        newSelection.delete(itemKey);
                      } else {
                        newSelection.add(itemKey);
                      }
                      onSelectionChange?.(newSelection);
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    aria-label={`Select row ${index + 1}`}
                  />
                </TableCell>
              )}

              {/* Dynamic cells based on columns */}
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  textValue={String(itemKey)}
                  align={column.align}
                >
                  {column.render 
                    ? column.render(item) 
                    : item[String(column.key)] || ""
                  }
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </tbody>
    );
  }

  // Static children rendering
  return (
    <tbody className={className} data-testid={testId}>
      {typeof children === "function" ? children(dataItems[0]) : children}
    </tbody>
  );
};

// Helper function to get row classes
const getRowClasses = (
  isSelected: boolean,
  isDisabled: boolean,
  isStriped: boolean,
  isEven: boolean
): string => {
  const baseClasses = "border-b border-gray-200 dark:border-gray-700 transition-colors";
  
  let backgroundClasses = "";
  if (isSelected) {
    backgroundClasses = "bg-blue-50 dark:bg-blue-900/20";
  } else if (isStriped && isEven) {
    backgroundClasses = "bg-gray-50 dark:bg-gray-800/50";
  }
  
  const hoverClasses = !isDisabled && !isSelected
    ? "hover:bg-gray-50 dark:hover:bg-gray-800/50"
    : "";
  
  const disabledClasses = isDisabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";

  return [baseClasses, backgroundClasses, hoverClasses, disabledClasses]
    .filter(Boolean)
    .join(" ");
};

// Import the actual components
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";

// Default export
export default TableBody;