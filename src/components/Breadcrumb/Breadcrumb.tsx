import React, { createContext, useContext, useMemo, forwardRef } from 'react';
import { breadcrumb } from './variants';
import type { 
  BreadcrumbProps, 
  BreadcrumbContextValue
} from './types';

// Context para compartir configuración entre Breadcrumb y BreadcrumbItem
const BreadcrumbContext = createContext<BreadcrumbContextValue | undefined>(undefined);

// Hook para usar el contexto del breadcrumb
export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumbContext must be used within a Breadcrumb component');
  }
  return context;
};

// Hook personalizado para la lógica del breadcrumb
export const useBreadcrumb = (props: BreadcrumbProps) => {
  const {
    children,
    size = 'md',
    color = 'default',
    variant = 'flat',
    separator = 'slash',
    separatorClassName,
    itemsClassName,
    hideSeparator = false,
    maxItems,
    showRoot = true,
    isDisabled = false,
    itemsBeforeCollapse = 1,
    itemsAfterCollapse = 1,
    renderEllipsis,
    className,
    listProps,
    ...otherProps
  } = props;

  // Procesar children para obtener items
  const childrenArray = React.Children.toArray(children);
  
  // Lógica de colapso si se especifica maxItems
  const processedChildren = useMemo(() => {
    if (!maxItems || childrenArray.length <= maxItems) {
      return childrenArray;
    }

    const totalItems = childrenArray.length;
    const itemsToShow = Math.max(2, maxItems - 1); // -1 para el ellipsis
    
    if (totalItems <= itemsToShow) {
      return childrenArray;
    }

    const beforeItems = childrenArray.slice(0, itemsBeforeCollapse);
    const afterItems = childrenArray.slice(totalItems - itemsAfterCollapse);
    const hiddenCount = totalItems - itemsBeforeCollapse - itemsAfterCollapse;

    const ellipsisElement = renderEllipsis ? 
      renderEllipsis(hiddenCount) : 
      <span key="ellipsis" aria-label={`${hiddenCount} more items`}>...</span>;

    return [...beforeItems, ellipsisElement, ...afterItems];
  }, [childrenArray, maxItems, itemsBeforeCollapse, itemsAfterCollapse, renderEllipsis]);

  // Generar clases usando tailwind-variants
  const slots = useMemo(() => 
    breadcrumb({
      size,
      color,
      variant,
      isDisabled,
      hideSeparator,
    }), 
    [size, color, variant, isDisabled, hideSeparator]
  );

  // Crear el valor del contexto
  const contextValue = useMemo((): BreadcrumbContextValue => ({
    size,
    color,
    variant,
    separator,
    separatorClassName,
    isDisabled,
  }), [size, color, variant, separator, separatorClassName, isDisabled]);

  return {
    processedChildren,
    slots,
    contextValue,
    itemsClassName,
    className,
    listProps,
    otherProps,
  };
};

// Componente principal Breadcrumb
export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => {
  const {
    processedChildren,
    slots,
    contextValue,
    itemsClassName,
    className,
    listProps,
    otherProps,
  } = useBreadcrumb(props);

  return (
    <BreadcrumbContext.Provider value={contextValue}>
      <nav
        ref={ref}
        className={slots.base({ className })}
        aria-label="Breadcrumb"
        {...otherProps}
      >
        <ol
          className={slots.list({ className: itemsClassName })}
          {...listProps}
        >
          {processedChildren.map((child, index) => {
            const isLast = index === processedChildren.length - 1;
            
            return (
              <React.Fragment key={index}>
                <li className={slots.item()}>
                  {React.isValidElement(child) 
                    ? React.cloneElement(child as React.ReactElement<any>, { 
                        isCurrent: (child.props as any)?.isCurrent ?? isLast,
                      })
                    : child
                  }
                </li>
                {!isLast && !props.hideSeparator && (
                  <li className={slots.separator({ className: contextValue.separatorClassName })}>
                    {React.isValidElement(contextValue.separator) ? (
                      contextValue.separator
                    ) : (
                      <span aria-hidden="true" role="separator" className="flex items-center justify-center">
                        {contextValue.separator === 'slash' && (
                          <span className="text-inherit">/</span>
                        )}
                        {contextValue.separator === 'chevron' && (
                          <svg className={`${contextValue.size === 'sm' ? 'w-3 h-3' : contextValue.size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} text-inherit`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="9,18 15,12 9,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {contextValue.separator === 'arrow' && (
                          <svg className={`${contextValue.size === 'sm' ? 'w-3 h-3' : contextValue.size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} text-inherit`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="12,5 19,12 12,19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {contextValue.separator === 'dot' && (
                          <svg className={`${contextValue.size === 'sm' ? 'w-3 h-3' : contextValue.size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} text-inherit`} fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </span>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;