import { forwardRef } from 'react';
import { usePaginationContext } from './Pagination';
import { getPaginationDotsVariant } from './variants';
import type { PaginationDotsProps } from './types';

/**
 * Pagination ellipsis/dots component for collapsed pages
 */
export const PaginationEllipsis = forwardRef<HTMLSpanElement, PaginationDotsProps>(
  (
    {
      className = '',
      size: sizeProp,
      children,
      'data-testid': testId,
    },
    ref,
  ) => {
    // Get context values
    const context = usePaginationContext();
    const size = sizeProp ?? context.size;

    // Generate classes
    const dotsClasses = getPaginationDotsVariant(size);

    // Combined classes
    const combinedClasses = `${dotsClasses} ${className}`.trim();

    return (
      <span
        ref={ref}
        className={combinedClasses}
        aria-hidden="true"
        role="presentation"
        data-testid={testId}
      >
        {children ?? '…'}
      </span>
    );
  },
);

PaginationEllipsis.displayName = 'PaginationEllipsis';