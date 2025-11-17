import type { TableRowProps } from "./types";
import { useTableContext } from "./Table";
import { getTableRowClasses } from "./helper";

export const TableRow = <T extends Record<string, any> = any>({
  children,
  className = "",
  textValue,
  item,
  "data-testid": testId,
  ...props
}: TableRowProps<T>) => {
  const {
    isStriped,
    selectedKeys,
    disabledKeys,
    onRowAction,
    customColor,
  } = useTableContext();

  // Generate a key for this row
  const rowKey = item?.key || item?.id || textValue;
  
  // Determine row state
  const isSelected = rowKey ? (selectedKeys === "all" || (selectedKeys as Set<any>).has(rowKey)) : false;
  const isDisabled = rowKey ? (disabledKeys as Set<any>).has(rowKey) : false;

  // Row classes
  const rowClasses = getTableRowClasses(
    isSelected,
    isDisabled,
    isStriped,
    false, // isEven - this should be calculated by the parent
    true,  // hasHover
    customColor
  );

  // Handle row click
  const handleRowClick = () => {
    if (!isDisabled && rowKey && onRowAction) {
      onRowAction(rowKey);
    }
  };

  return (
    <tr
      className={`${rowClasses} ${className}`.trim()}
      onClick={handleRowClick}
      role="row"
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      data-testid={testId}
      {...props}
    >
      {children}
    </tr>
  );
};

// Default export
export default TableRow;