// Main components
export { Accordion, useAccordionContext } from './Accordion';
export { AccordionItem } from './AccordionItem';
export { AccordionHeader, AccordionIndicator } from './AccordionHeader';
export { AccordionContent } from './AccordionContent';

// Hooks
export { 
  useAccordion, 
  useSimpleAccordion, 
  useMultipleAccordion, 
  useControlledAccordion 
} from './useAccordion';

// Types
export type * from './types';

// Utilities
export { 
  getAccordionSize,
  getAccordionRadius,
  getAccordionVariant,
  getAccordionHeaderVariant,
  getAccordionContentVariant,
  getAccordionIndicatorVariant,
  getAccordionDividerVariant,
  getAccordionItemVariant,
  getAccordionWrapper,
  getAccordionAnimation,
  getAccordionIndicatorAnimation,
  getAccordionClasses,
  accordionDefaults 
} from './variants';