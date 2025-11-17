import React from 'react';
import { SidebarItemProps } from './types';

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon,
  isActive = false,
  href,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseStyles = [
    'flex items-center gap-3',
    'px-3 py-2 mx-2 my-1',
    'rounded-lg',
    'text-sm font-medium',
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
    'dark:focus:ring-offset-gray-800',
  ];

  const stateStyles = disabled
    ? ['text-gray-400 dark:text-gray-600', 'cursor-not-allowed']
    : isActive
    ? [
        'bg-blue-100 dark:bg-blue-900/30',
        'text-blue-900 dark:text-blue-100',
        'border-l-4 border-blue-500',
        'pl-2 ml-2'
      ]
    : [
        'text-gray-700 dark:text-gray-300',
        'hover:bg-gray-100 dark:hover:bg-gray-700',
        'hover:text-gray-900 dark:hover:text-white'
      ];

  const itemStyles = [...baseStyles, ...stateStyles, className].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && (
        <span className={`flex-shrink-0 ${disabled ? 'opacity-50' : ''}`}>
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">
        {children}
      </span>
    </>
  );

  const commonProps = {
    className: itemStyles,
    onClick: disabled ? undefined : onClick,
    'aria-disabled': disabled,
    role: href ? 'link' : 'button',
  };

  if (href && !disabled) {
    return (
      <a href={href} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...commonProps} disabled={disabled}>
      {content}
    </button>
  );
};