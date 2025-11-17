import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useSidebar } from './SidebarContext';
import { SidebarProps } from './types';

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className = '',
  width = 280,
  position = 'left',
  variant = 'temporary',
  backdrop = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
}) => {
  const { isOpen, isMobile, close } = useSidebar();

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeOnEscape, isOpen, close]);

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) {
      close();
    }
  };

  // Animation variants
  const sidebarVariants: Variants = {
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      }
    },
    closed: {
      x: position === 'left' ? -width : width,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      }
    }
  };

  const backdropVariants: Variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    }
  };

  // Determine if sidebar should be shown based on variant and screen size
  const shouldShowSidebar = () => {
    if (variant === 'permanent') return true;
    if (variant === 'persistent' && !isMobile) return true;
    return isOpen;
  };

  const shouldShowBackdrop = () => {
    return backdrop && isOpen && (isMobile || variant === 'temporary');
  };

  const sidebarStyles = [
    'fixed top-0 z-40 h-full',
    'bg-white dark:bg-gray-800',
    'border-gray-200 dark:border-gray-700',
    'shadow-lg dark:shadow-2xl',
    position === 'left' ? 'left-0 border-r' : 'right-0 border-l',
    // Responsive behavior
    variant === 'permanent' && 'lg:relative lg:translate-x-0',
    variant === 'persistent' && !isMobile && 'md:relative md:translate-x-0',
    className
  ].filter(Boolean).join(' ');

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {shouldShowBackdrop() && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
            role="button"
            tabIndex={-1}
            aria-label="Close sidebar"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {shouldShowSidebar() && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className={sidebarStyles}
            style={{ width: typeof width === 'number' ? `${width}px` : width }}
            role="complementary"
            aria-label="Sidebar navigation"
          >
            <div className="flex flex-col h-full">
              {children}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};