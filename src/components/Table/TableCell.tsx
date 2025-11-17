import type { TableCellProps } from "./types";
import { useTableContext } from "./Table";
import { getTableCellClasses } from "./helper";

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className = "",
  align = "start",
  textValue,
  "data-testid": testId,
  ...props
}) => {
  const {
    isCompact,
    onCellAction,
    centerCellText,
    customColor,
  } = useTableContext();

  // Generate cell classes
  const cellClasses = getTableCellClasses(
    align,
    isCompact,
    centerCellText,
    customColor
  );

  // Handle cell click
  const handleCellClick = () => {
    if (onCellAction && textValue) {
      onCellAction(textValue);
    }
  };

  return (
    <td
      className={`${cellClasses} ${className}`.trim()}
      onClick={handleCellClick}
      role="cell"
      data-testid={testId}
      {...props}
    >
      {children}
    </td>
  );
};

// Default export
export default TableCell;