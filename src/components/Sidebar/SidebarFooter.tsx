import React from 'react';
import { SidebarFooterProps } from './types';

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  children,
  className = '',
}) => {
  const footerStyles = [
    'flex items-center',
    'px-4 py-3',
    'border-t border-gray-200 dark:border-gray-700',
    'bg-gray-50 dark:bg-gray-900',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={footerStyles}>
      {children}
    </div>
  );
};