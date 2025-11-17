import React, { useMemo } from 'react';
import { useAccordionContext } from './Accordion';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';
import { 
  getAccordionItemVariant,
  getAccordionVariant,
  getAccordionRadius,
  getAccordionDividerVariant
} from './variants';
import type { AccordionItemProps } from './types';

/**
 * Individual accordion item component
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  itemKey,
  title,
  children,
  isExpanded: controlledIsExpanded,
  isDisabled: itemDisabled = false,
  showDivider: itemShowDivider,
  header,
  onToggle,
  className = "",
  style,
  ariaLabel,
  "data-testid": dataTestId
}) => {
  const context = useAccordionContext();
  const {
    expandedKeys,
    toggle,
    variant,
    color,
    radius,
    isDisabled: contextDisabled,
    showDivider: contextShowDivider
  } = context;

  // Determine if this item is expanded
  const isExpanded = controlledIsExpanded !== undefined 
    ? controlledIsExpanded 
    : expandedKeys.includes(itemKey);

  // Determine if this item is disabled
  const isDisabled = contextDisabled || itemDisabled;

  // Determine if divider should be shown
  const showDivider = itemShowDivider !== undefined 
    ? itemShowDivider 
    : contextShowDivider;

  // Handle toggle
  const handleToggle = () => {
    if (isDisabled) return;
    
    if (onToggle) {
      onToggle(itemKey);
    } else {
      toggle(itemKey);
    }
  };

  // Get classes
  const itemVariantClasses = getAccordionItemVariant(variant);
  const itemClasses = getAccordionVariant(color, variant, isDisabled);
  const radiusClasses = getAccordionRadius[radius];
  const dividerClasses = getAccordionDividerVariant(color, variant);

  // Combine all classes
  const finalClasses = useMemo(() => {
    const classes = [
      itemVariantClasses,
      itemClasses,
      radiusClasses,
      className
    ];

    // Add special classes for splitted variant
    if (variant === 'splitted') {
      classes.push('border rounded-lg overflow-hidden');
    }

    return classes.filter(Boolean).join(' ').trim();
  }, [itemVariantClasses, itemClasses, radiusClasses, className, variant]);

  return (
    <>
      <div
        className={finalClasses}
        style={style}
        data-testid={dataTestId}
        data-expanded={isExpanded}
        data-disabled={isDisabled}
      >
        {/* Header */}
        <AccordionHeader
          isExpanded={isExpanded}
          isDisabled={isDisabled}
          onClick={handleToggle}
          ariaLabel={ariaLabel || `Toggle ${title}`}
          data-testid={dataTestId ? `${dataTestId}-header` : undefined}
        >
          {header || title}
        </AccordionHeader>

        {/* Content */}
        <AccordionContent
          isExpanded={isExpanded}
          data-testid={dataTestId ? `${dataTestId}-content` : undefined}
        >
          {children}
        </AccordionContent>
      </div>

      {/* Divider (only for non-splitted variants and not last item) */}
      {showDivider && variant !== 'splitted' && (
        <div className={dividerClasses} />
      )}
    </>
  );
};

AccordionItem.displayName = 'AccordionItem';