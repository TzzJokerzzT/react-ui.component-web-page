import type { 
  TableColor, 
  CustomTableColor,
  TableRadius, 
  TableShadow, 
  ColumnAlign, 
  Selection,
  SortDescriptor 
} from "./types";
import type { Key } from "react";

/**
 * Table color classes
 */
export const getTableColorClasses = (color: TableColor, customColor?: CustomTableColor): string => {
  if (color === "custom" && customColor) {
    const border = customColor.border || "transparent";
    let backgroundClass = "";
    
    if (customColor.gradient) {
      // Handle gradient backgrounds
      backgroundClass = `bg-gradient-to-r ${customColor.gradient}`;
    } else {
      const background = customColor.background || "transparent";
      backgroundClass = `bg-[${background}]`;
    }
    
    return `border-[${border}] ${backgroundClass}`;
  }

  const colors = {
    default: "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",
    primary: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
    secondary: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800",
    success: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
    warning: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
    danger: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
    custom: "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900", // fallback
  };
  return colors[color] || colors.default;
};

/**
 * Table radius classes
 */
export const getTableRadiusClasses = (radius: TableRadius): string => {
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  };
  return radiusClasses[radius] || radiusClasses.md;
};

/**
 * Table shadow classes
 */
export const getTableShadowClasses = (shadow: TableShadow): string => {
  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };
  return shadowClasses[shadow] || shadowClasses.sm;
};

/**
 * Column alignment classes
 */
export const getColumnAlignClasses = (align: ColumnAlign): string => {
  const alignClasses = {
    start: "text-left",
    center: "text-center",
    end: "text-right",
  };
  return alignClasses[align] || alignClasses.start;
};

/**
 * Table wrapper classes
 */
export const getTableWrapperClasses = (
  color: TableColor,
  customColor: CustomTableColor | undefined,
  radius: TableRadius,
  shadow: TableShadow,
  removeWrapper: boolean,
  fullWidth: boolean
): string => {
  if (removeWrapper) return "";

  const baseClasses = "flex flex-col relative overflow-hidden";
  const colorClasses = getTableColorClasses(color, customColor);
  const radiusClasses = getTableRadiusClasses(radius);
  const shadowClasses = getTableShadowClasses(shadow);
  const widthClasses = fullWidth ? "w-full" : "";

  return [baseClasses, colorClasses, radiusClasses, shadowClasses, widthClasses]
    .filter(Boolean)
    .join(" ");
};

/**
 * Table classes
 */
export const getTableClasses = (isCompact: boolean, isStriped: boolean): string => {
  const baseClasses = "min-w-full table-auto";
  const compactClasses = isCompact ? "table-compact" : "";
  const stripedClasses = isStriped ? "table-striped" : "";

  return [baseClasses, compactClasses, stripedClasses]
    .filter(Boolean)
    .join(" ");
};

/**
 * Table header classes
 */
export const getTableHeaderClasses = (isSticky: boolean): string => {
  const baseClasses = "bg-gray-50 dark:bg-gray-800";
  const stickyClasses = isSticky ? "sticky top-0 z-10" : "";

  return [baseClasses, stickyClasses].filter(Boolean).join(" ");
};

/**
 * Table header cell classes
 */
export const getTableHeaderCellClasses = (
  align: ColumnAlign,
  allowsSorting: boolean,
  isCompact: boolean,
  centerHeaderText?: boolean,
  customColor?: CustomTableColor
): string => {
  const textColor = customColor?.text ? `text-[${customColor.text}]` : "text-gray-700 dark:text-gray-300";
  const borderColor = customColor?.border ? `border-[${customColor.border}]` : "border-gray-200 dark:border-gray-700";
  const baseClasses = `font-semibold ${textColor} border-b ${borderColor}`;
  const paddingClasses = isCompact ? "px-3 py-2" : "px-6 py-3";
  const alignClasses = centerHeaderText ? "text-center" : getColumnAlignClasses(align);
  const sortableClasses = allowsSorting 
    ? customColor?.hover 
      ? `cursor-pointer hover:bg-[${customColor.hover}] select-none`
      : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 select-none"
    : "";

  return [baseClasses, paddingClasses, alignClasses, sortableClasses]
    .filter(Boolean)
    .join(" ");
};

/**
 * Table row classes
 */
export const getTableRowClasses = (
  isSelected: boolean,
  isDisabled: boolean,
  isStriped: boolean,
  isEven: boolean,
  hasHover: boolean,
  customColor?: CustomTableColor
): string => {
  const baseClasses = customColor?.border 
    ? `border-b border-[${customColor.border}] transition-colors`
    : "border-b border-gray-200 dark:border-gray-700 transition-colors";
  
  let backgroundClasses = "";
  if (isSelected) {
    backgroundClasses = customColor?.selected 
      ? `bg-[${customColor.selected}]`
      : "bg-blue-50 dark:bg-blue-900/20";
  } else if (isStriped && isEven) {
    backgroundClasses = customColor?.background 
      ? `bg-[${customColor.background}]/10`
      : "bg-gray-50 dark:bg-gray-800/50";
  }
  
  const hoverClasses = hasHover && !isDisabled && !isSelected
    ? customColor?.hover 
      ? `hover:bg-[${customColor.hover}]`
      : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
    : "";
  
  const disabledClasses = isDisabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";

  return [baseClasses, backgroundClasses, hoverClasses, disabledClasses]
    .filter(Boolean)
    .join(" ");
};

/**
 * Table cell classes
 */
export const getTableCellClasses = (
  align: ColumnAlign,
  isCompact: boolean,
  centerCellText?: boolean,
  customColor?: CustomTableColor
): string => {
  const baseClasses = customColor?.text 
    ? `text-[${customColor.text}]`
    : "text-gray-900 dark:text-gray-100";
  const paddingClasses = isCompact ? "px-3 py-2" : "px-6 py-4";
  const alignClasses = centerCellText ? "text-center" : getColumnAlignClasses(align);

  return [baseClasses, paddingClasses, alignClasses]
    .filter(Boolean)
    .join(" ");
};

/**
 * Sort icon classes
 */
export const getSortIconClasses = (
  direction?: "ascending" | "descending"
): string => {
  const baseClasses = "inline-block w-4 h-4 ml-2 transition-transform";
  const directionClasses = direction === "descending" ? "rotate-180" : "";

  return [baseClasses, directionClasses].filter(Boolean).join(" ");
};

/**
 * Selection utilities
 */
export const isAllSelected = (selectedKeys: Selection, itemCount: number): boolean => {
  return selectedKeys === "all" || selectedKeys.size === itemCount;
};

export const isRowSelected = (selectedKeys: Selection, key: Key): boolean => {
  return selectedKeys === "all" || selectedKeys.has(key);
};

export const toggleRowSelection = (
  selectedKeys: Selection,
  key: Key,
  selectionMode: "single" | "multiple" = "multiple"
): Selection => {
  if (selectedKeys === "all") {
    // If all selected and we're toggling one off, create new set without this key
    return new Set(); // For simplicity, clear all when toggling from "all"
  }

  const newSelection = new Set(selectedKeys);
  
  if (selectionMode === "single") {
    return newSelection.has(key) ? new Set() : new Set([key]);
  }

  if (newSelection.has(key)) {
    newSelection.delete(key);
  } else {
    newSelection.add(key);
  }

  return newSelection;
};

export const selectAll = (): Selection => {
  return "all";
};

export const clearSelection = (): Selection => {
  return new Set();
};

/**
 * Sort utilities
 */
export const sortItems = <T>(
  items: T[],
  sortDescriptor: SortDescriptor,
  getKeyValue: (item: T, key: Key) => any = (item, key) => (item as any)[String(key)]
): T[] => {
  if (!sortDescriptor.column) return items;

  return items.slice().sort((a, b) => {
    const aValue = getKeyValue(a, sortDescriptor.column!);
    const bValue = getKeyValue(b, sortDescriptor.column!);

    let result = 0;
    if (aValue < bValue) result = -1;
    if (aValue > bValue) result = 1;

    return sortDescriptor.direction === "descending" ? -result : result;
  });
};

export const toggleSortDirection = (
  currentDescriptor: SortDescriptor,
  column: Key
): SortDescriptor => {
  if (currentDescriptor.column === column) {
    return {
      column,
      direction: currentDescriptor.direction === "ascending" ? "descending" : "ascending"
    };
  }

  return {
    column,
    direction: "ascending"
  };
};

/**
 * Default sort icon SVG string
 */
export const getDefaultSortIconSVG = (): string => {
  return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
  </svg>`;
};

/**
 * Loading spinner classes
 */
export const getLoadingSpinnerClasses = (): string => {
  return "animate-spin rounded-full h-8 w-8 border-b-2 border-current";
};

/**
 * Selection checkbox utilities
 */
export const getCheckboxProps = (isSelected: boolean, isIndeterminate: boolean) => ({
  isSelected,
  isIndeterminate,
  "aria-label": isSelected ? "Deselect row" : "Select row",
});

/**
 * Keyboard navigation utilities
 */
export const getNextRowIndex = (
  currentIndex: number,
  totalRows: number,
  direction: "up" | "down"
): number => {
  if (direction === "up") {
    return currentIndex > 0 ? currentIndex - 1 : totalRows - 1;
  }
  return currentIndex < totalRows - 1 ? currentIndex + 1 : 0;
};

export const getNextColumnIndex = (
  currentIndex: number,
  totalColumns: number,
  direction: "left" | "right"
): number => {
  if (direction === "left") {
    return currentIndex > 0 ? currentIndex - 1 : totalColumns - 1;
  }
  return currentIndex < totalColumns - 1 ? currentIndex + 1 : 0;
};