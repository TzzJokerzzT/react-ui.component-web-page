import React from 'react';
import { SidebarContentProps } from './types';

export const SidebarContent: React.FC<SidebarContentProps> = ({
  children,
  className = '',
}) => {
  const contentStyles = [
    'flex-1 overflow-y-auto',
    'px-4 py-2',
    'scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600',
    'scrollbar-track-gray-100 dark:scrollbar-track-gray-800',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={contentStyles}>
      {children}
    </div>
  );
};