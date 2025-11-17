import React, { forwardRef, useMemo } from 'react';
import { useBreadcrumbContext } from './Breadcrumb';
import { breadcrumbSeparator, getSeparatorIcon } from './variants';
import type { BreadcrumbSeparatorProps, SeparatorType } from './types';

// Íconos SVG para los separadores
const SeparatorIcons = {
  slash: () => <span>/</span>,
  chevron: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <polyline points="9,18 15,12 9,6" />
    </svg>
  ),
  arrow: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </svg>
  ),
  dot: () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-full h-full"
    >
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

// Hook personalizado para la lógica del BreadcrumbSeparator
export const useBreadcrumbSeparator = (props: BreadcrumbSeparatorProps) => {
  const context = useBreadcrumbContext();
  
  const {
    type: typeProp,
    customIcon,
    className,
    size: sizeProp,
    color: colorProp,
  } = props;

  // Usar valores del contexto como fallback
  const type = (typeProp || (typeof context.separator === 'string' ? context.separator : 'slash')) as SeparatorType;
  const size = sizeProp || context.size || 'md';
  const color = colorProp || context.color || 'default';

  // Generar clases usando tailwind-variants
  const separatorClasses = useMemo(() => 
    breadcrumbSeparator({
      type,
      size,
      color,
    }), 
    [type, size, color]
  );

  // Determinar qué icono renderizar
  const separatorContent = useMemo(() => {
    // Si hay un icono personalizado en el contexto (ReactNode)
    if (React.isValidElement(context.separator)) {
      return context.separator;
    }
    
    // Si hay un icono personalizado en las props
    if (customIcon) {
      return customIcon;
    }
    
    // Si es un tipo personalizado, usar el icono de texto
    if (type === 'custom') {
      return <span>{getSeparatorIcon(type)}</span>;
    }
    
    // Usar el componente SVG correspondiente
    const IconComponent = SeparatorIcons[type];
    return IconComponent ? <IconComponent /> : <span>{getSeparatorIcon(type)}</span>;
  }, [context.separator, customIcon, type]);

  return {
    separatorClasses,
    separatorContent,
    className,
  };
};

// Componente BreadcrumbSeparator
export const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>((props, ref) => {
  const {
    separatorClasses,
    separatorContent,
    className,
  } = useBreadcrumbSeparator(props);

  return (
    <span
      ref={ref}
      className={`${separatorClasses} ${className || ''}`}
      aria-hidden="true"
      role="separator"
    >
      {separatorContent}
    </span>
  );
});

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export default BreadcrumbSeparator;