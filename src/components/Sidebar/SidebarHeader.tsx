import React from 'react';
import { SidebarHeaderProps } from './types';

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  className = '',
  showCloseButton = false,
  onClose,
}) => {
  const headerStyles = [
    'flex items-center justify-between',
    'px-4 py-3',
    'border-b border-gray-200 dark:border-gray-700',
    'bg-gray-50 dark:bg-gray-900',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={headerStyles}>
      <div className="flex-1">
        {children}
      </div>
      {showCloseButton && (
        <button
          onClick={onClose}
          className="ml-2 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close sidebar"
        >
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};