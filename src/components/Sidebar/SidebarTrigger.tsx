import React from 'react';
import { motion } from 'framer-motion';
import { useSidebar } from './SidebarContext';
import { SidebarTriggerProps } from './types';

export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({
  children,
  className = '',
  'aria-label': ariaLabel = 'Toggle sidebar',
}) => {
  const { isOpen, toggle } = useSidebar();

  const triggerStyles = [
    'inline-flex items-center justify-center',
    'w-10 h-10',
    'rounded-md',
    'text-gray-500 dark:text-gray-400',
    'hover:bg-gray-100 dark:hover:bg-gray-700',
    'hover:text-gray-900 dark:hover:text-white',
    'focus:outline-none focus:ring-2 focus:ring-blue-500',
    'transition-colors duration-200',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      onClick={toggle}
      className={triggerStyles}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
    >
      {children || (
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HamburgerIcon />
        </motion.div>
      )}
    </button>
  );
};

const HamburgerIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);