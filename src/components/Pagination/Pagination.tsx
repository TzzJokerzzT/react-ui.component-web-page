import React, { createContext, useContext } from 'react';
import { usePagination } from './usePagination';
import { 
  getPaginationWrapper,
  paginationDefaults 
} from './variants';
import type { 
  PaginationProps, 
  PaginationContextValue,
  PaginationControlsConfig,
  PaginationDisplayConfig 
} from './types';

// SVG Icons for pagination controls
const PaginationIcons = {
  prev: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="15,18 9,12 15,6" />
    </svg>
  ),
  next: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="9,18 15,12 9,6" />
    </svg>
  ),
  first: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="11,17 6,12 11,7" />
      <polyline points="18,17 13,12 18,7" />
    </svg>
  ),
  last: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="13,17 18,12 13,7" />
      <polyline points="6,17 11,12 6,7" />
    </svg>
  ),
};

// Context for sharing pagination state
const PaginationContext = createContext<PaginationContextValue | null>(null);

/**
 * Hook to access pagination context
 */
export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePaginationContext must be used within a Pagination component');
  }
  return context;
};

/**
 * Main Pagination component that provides pagination functionality
 */
export const Pagination: React.FC<PaginationProps> = ({
  total,
  page,
  defaultPage = 1,
  initialPage,
  onChange,
  onPageChange,
  size = paginationDefaults.size,
  color = paginationDefaults.color,
  variant = paginationDefaults.variant,
  radius = paginationDefaults.radius,
  isDisabled = false,
  disableAnimation = paginationDefaults.disableAnimation,
  controls = {},
  display = {},
  className = '',
  style,
  'aria-label': ariaLabel = 'Pagination Navigation',
  'data-testid': testId,
}) => {
  // Merge with defaults
  const controlsConfig: Required<PaginationControlsConfig> = {
    showControls: paginationDefaults.showControls,
    showFirstLast: paginationDefaults.showFirstLast,
    placement: 'both',
    labels: {
      prev: <PaginationIcons.prev />,
      next: <PaginationIcons.next />,
      first: <PaginationIcons.first />,
      last: <PaginationIcons.last />,
    },
    ...controls,
  };

  const displayConfig: Required<PaginationDisplayConfig> = {
    showPages: paginationDefaults.showPages,
    siblings: paginationDefaults.siblings,
    showDots: paginationDefaults.showDots,
    loop: paginationDefaults.loop,
    compact: paginationDefaults.compact,
    showShadow: paginationDefaults.showShadow,
    ...display,
  };

  // Use pagination hook
  const pagination = usePagination({
    total,
    page,
    defaultPage,
    initialPage,
    siblings: displayConfig.siblings,
    showDots: displayConfig.showDots,
    loop: displayConfig.loop,
    onChange: (newPage) => {
      onChange?.(newPage);
      onPageChange?.(newPage);
    },
  });

  // Context value
  const contextValue: PaginationContextValue = {
    activePage: pagination.activePage,
    totalPages: pagination.totalPages,
    setPage: pagination.setPage,
    size,
    color,
    variant,
    radius,
    isDisabled,
    disableAnimation,
    controls: controlsConfig,
    display: displayConfig,
  };

  // Wrapper classes
  const wrapperClasses = getPaginationWrapper(
    size,
    displayConfig.showShadow,
    displayConfig.compact,
  );

  // Render first/last controls
  const renderFirstLastControls = (position: 'start' | 'end') => {
    if (!controlsConfig.showFirstLast) return null;
    if (controlsConfig.placement !== 'both' && controlsConfig.placement !== position) return null;

    if (position === 'start') {
      return (
        <PaginationFirst
          isDisabled={isDisabled || pagination.isFirst}
          onClick={pagination.first}
        >
          {controlsConfig.labels.first}
        </PaginationFirst>
      );
    }

    return (
      <PaginationLast
        isDisabled={isDisabled || pagination.isLast}
        onClick={pagination.last}
      >
        {controlsConfig.labels.last}
      </PaginationLast>
    );
  };

  // Render prev/next controls
  const renderPrevNextControls = (position: 'start' | 'end') => {
    if (!controlsConfig.showControls) return null;
    if (controlsConfig.placement !== 'both' && controlsConfig.placement !== position) return null;

    if (position === 'start') {
      return (
        <PaginationPrevious
          isDisabled={isDisabled || pagination.isFirst}
          onClick={pagination.previous}
        >
          {controlsConfig.labels.prev}
        </PaginationPrevious>
      );
    }

    return (
      <PaginationNext
        isDisabled={isDisabled || pagination.isLast}
        onClick={pagination.next}
      >
        {controlsConfig.labels.next}
      </PaginationNext>
    );
  };

  // Render page items
  const renderPageItems = () => {
    if (!displayConfig.showPages) return null;

    return pagination.range.map((item) => {
      if (item.type === 'dots') {
        return <PaginationEllipsis key={item.key} />;
      }

      return (
        <PaginationItem
          key={item.key}
          type="page"
          value={item.value as number}
          isActive={item.isActive}
          isDisabled={isDisabled || item.isDisabled}
          onClick={() => !isDisabled && !item.isDisabled && pagination.setPage(item.value as number)}
        >
          {item.value}
        </PaginationItem>
      );
    });
  };

  return (
    <PaginationContext.Provider value={contextValue}>
      <nav
        role="navigation"
        aria-label={ariaLabel}
        className={`${wrapperClasses} ${className}`.trim()}
        style={style}
        data-testid={testId}
      >
        {/* Start controls */}
        {renderFirstLastControls('start')}
        {renderPrevNextControls('start')}

        {/* Page items */}
        {renderPageItems()}

        {/* End controls */}
        {renderPrevNextControls('end')}
        {renderFirstLastControls('end')}
      </nav>
    </PaginationContext.Provider>
  );
};

// Import actual components
import { PaginationItem } from './PaginationItem';
import { PaginationFirst, PaginationLast, PaginationNext, PaginationPrevious } from './PaginationCursor';
import { PaginationEllipsis } from './PaginationEllipsis';

Pagination.displayName = 'Pagination';