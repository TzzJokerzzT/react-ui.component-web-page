import { useState, useCallback, useMemo } from 'react';
import type { 
  UsePaginationConfig, 
  UsePaginationReturn, 
  PaginationItemData, 
  PaginationItemType 
} from './types';

/**
 * Generate pagination range with dots logic
 * @param current - Current active page
 * @param total - Total number of pages
 * @param siblings - Number of siblings to show around current page
 * @param showDots - Whether to show dots when pages are collapsed
 * @returns Array of pagination items
 */
const generatePaginationRange = (
  current: number,
  total: number,
  siblings: number = 1,
  showDots: boolean = true,
): PaginationItemData[] => {
  const range: PaginationItemData[] = [];

  // Helper function to create pagination item
  const createItem = (
    type: PaginationItemType,
    value: number | string,
    isActive: boolean = false,
    isDisabled: boolean = false,
  ): PaginationItemData => ({
    type,
    value,
    isActive,
    isDisabled,
    key: `${type}-${value}`,
  });

  // Always show first page
  range.push(createItem('page', 1, current === 1));

  // Calculate the range around current page
  const startPage = Math.max(2, current - siblings);
  const endPage = Math.min(total - 1, current + siblings);

  // Add left dots if there's a gap
  if (showDots && startPage > 2) {
    range.push(createItem('dots', '...', false, true));
  }

  // Add pages around current page
  for (let page = startPage; page <= endPage; page++) {
    if (page !== 1 && page !== total) {
      range.push(createItem('page', page, current === page));
    }
  }

  // Add right dots if there's a gap
  if (showDots && endPage < total - 1) {
    range.push(createItem('dots', '...', false, true));
  }

  // Always show last page (if total > 1)
  if (total > 1) {
    range.push(createItem('page', total, current === total));
  }

  return range;
};

/**
 * Custom hook for pagination logic and state management
 * @param config - Pagination configuration
 * @returns Pagination state and methods
 */
export function usePagination(config: UsePaginationConfig): UsePaginationReturn {
  const {
    total,
    page: controlledPage,
    defaultPage = 1,
    initialPage,
    siblings = 1,
    showDots = true,
    loop = false,
    onChange,
  } = config;

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledPage !== undefined;
  const initialValue = initialPage ?? defaultPage;

  // Internal state for uncontrolled component
  const [internalPage, setInternalPage] = useState(initialValue);

  // Current active page (controlled or uncontrolled)
  const activePage = isControlled ? controlledPage! : internalPage;

  // Ensure page is within valid range
  const normalizedPage = Math.max(1, Math.min(total, activePage));

  // Generate pagination range
  const range = useMemo(() => {
    if (total <= 0) return [];
    return generatePaginationRange(normalizedPage, total, siblings, showDots);
  }, [normalizedPage, total, siblings, showDots]);

  // Set page function
  const setPage = useCallback(
    (newPage: number) => {
      const targetPage = Math.max(1, Math.min(total, newPage));
      
      if (targetPage === normalizedPage) return;

      // Update internal state if uncontrolled
      if (!isControlled) {
        setInternalPage(targetPage);
      }

      // Call onChange callback
      onChange?.(targetPage);
    },
    [isControlled, normalizedPage, total, onChange],
  );

  // Navigation methods
  const next = useCallback(() => {
    if (normalizedPage < total) {
      setPage(normalizedPage + 1);
    } else if (loop) {
      setPage(1);
    }
  }, [normalizedPage, total, loop, setPage]);

  const previous = useCallback(() => {
    if (normalizedPage > 1) {
      setPage(normalizedPage - 1);
    } else if (loop) {
      setPage(total);
    }
  }, [normalizedPage, total, loop, setPage]);

  const first = useCallback(() => {
    setPage(1);
  }, [setPage]);

  const last = useCallback(() => {
    setPage(total);
  }, [setPage, total]);

  // Computed states
  const isFirst = normalizedPage === 1;
  const isLast = normalizedPage === total;

  return {
    activePage: normalizedPage,
    range,
    setPage,
    next,
    previous,
    first,
    last,
    isFirst,
    isLast,
    totalPages: total,
  };
}

/**
 * Hook for simple pagination without range generation
 * @param total - Total number of pages
 * @param defaultPage - Default page number
 * @param onChange - Page change callback
 * @returns Simple pagination state and methods
 */
export function useSimplePagination(
  total: number,
  defaultPage: number = 1,
  onChange?: (page: number) => void,
) {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const setPage = useCallback(
    (page: number) => {
      const newPage = Math.max(1, Math.min(total, page));
      setCurrentPage(newPage);
      onChange?.(newPage);
    },
    [total, onChange],
  );

  const next = useCallback(() => {
    if (currentPage < total) {
      setPage(currentPage + 1);
    }
  }, [currentPage, total, setPage]);

  const previous = useCallback(() => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  }, [currentPage, setPage]);

  return {
    currentPage,
    setPage,
    next,
    previous,
    canGoNext: currentPage < total,
    canGoPrevious: currentPage > 1,
    isFirst: currentPage === 1,
    isLast: currentPage === total,
  };
}

/**
 * Utility hook for pagination calculations
 * @param page - Current page
 * @param limit - Items per page
 * @param total - Total number of items
 * @returns Pagination calculations
 */
export function usePaginationCalc(page: number, limit: number, total: number) {
  return useMemo(() => {
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const hasNext = page < totalPages;
    const hasPrevious = page > 1;
    const startIndex = total === 0 ? 0 : offset + 1;
    const endIndex = Math.min(offset + limit, total);

    return {
      totalPages,
      offset,
      hasNext,
      hasPrevious,
      startIndex,
      endIndex,
      isValidPage: page >= 1 && page <= totalPages,
      isEmpty: total === 0,
    };
  }, [page, limit, total]);
}