import { createContext, useContext, useEffect, useRef, useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navbar } from './variants';
import type {
  NavbarProps,
  NavbarContentProps,
  NavbarItemProps,
  NavbarBrandProps,
  NavbarMenuToggleProps,
  NavbarMenuProps,
  NavbarMenuItemProps,
  NavbarContextType,
} from './types';

// Context for sharing state between navbar components
const NavbarContext = createContext<NavbarContextType | null>(null);

const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('Navbar components must be used within a Navbar');
  }
  return context;
};

// Default hamburger icon component
const HamburgerIcon = ({ isOpen }: { isOpen?: boolean }) => {
  const { toggleIcon } = navbar({ disableAnimation: false });
  
  return (
    <span className={toggleIcon()} data-open={isOpen}>
      <span className="sr-only">Toggle menu</span>
    </span>
  );
};

// Main Navbar component
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      children,
      height = '4rem',
      position = 'sticky',
      maxWidth = 'lg',
      parentRef,
      isBordered = false,
      isBlurred = true,
      isMenuOpen: controlledIsMenuOpen,
      isMenuDefaultOpen = false,
      shouldHideOnScroll = false,
      disableScrollHandler = false,
      disableAnimation = false,
      classNames,
      className,
      onMenuOpenChange,
      onScrollPositionChange,
      ...props
    },
    ref
  ) => {
    const [internalIsMenuOpen, setInternalIsMenuOpen] = useState(isMenuDefaultOpen);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navbarRef = useRef<HTMLElement>(null);

    const isMenuOpen = controlledIsMenuOpen ?? internalIsMenuOpen;

    const handleMenuOpenChange = (open: boolean) => {
      if (controlledIsMenuOpen === undefined) {
        setInternalIsMenuOpen(open);
      }
      onMenuOpenChange?.(open);
    };

    // Scroll handler for hide on scroll functionality
    useEffect(() => {
      if (!shouldHideOnScroll || disableScrollHandler) return;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        
        if (scrollDirection === 'down' && currentScrollY > 100) {
          setIsHidden(true);
        } else if (scrollDirection === 'up') {
          setIsHidden(false);
        }

        setLastScrollY(currentScrollY);
        onScrollPositionChange?.(currentScrollY);
      };

      const targetElement = parentRef?.current || window;
      targetElement.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        targetElement.removeEventListener('scroll', handleScroll);
      };
    }, [shouldHideOnScroll, disableScrollHandler, lastScrollY, parentRef, onScrollPositionChange]);

    const {
      base,
      wrapper,
    } = navbar({
      position,
      maxWidth,
      isBordered,
      isBlurred,
      disableAnimation,
    });

    const contextValue: NavbarContextType = {
      isMenuOpen,
      position,
      maxWidth,
      height,
      isBordered,
      isBlurred,
      shouldHideOnScroll,
      disableAnimation,
      classNames,
      onMenuOpenChange: handleMenuOpenChange,
      onScrollPositionChange,
    };

    return (
      <NavbarContext.Provider value={contextValue}>
        <motion.nav
          ref={ref || navbarRef}
          className={base({ className: classNames?.base || className })}
          style={{ height }}
          data-menu-open={isMenuOpen}
          data-hidden={isHidden}
          initial={shouldHideOnScroll ? { y: 0 } : false}
          animate={shouldHideOnScroll ? { y: isHidden ? -100 : 0 } : false}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          {...props}
        >
          <header className={wrapper({ className: classNames?.wrapper })}>
            {children}
          </header>
        </motion.nav>
      </NavbarContext.Provider>
    );
  }
);

Navbar.displayName = 'Navbar';

// NavbarBrand component
export const NavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ children, className, ...props }, ref) => {
    const { brand } = navbar();
    const classNames = useNavbarContext();

    return (
      <div
        ref={ref}
        className={brand({ className: classNames?.classNames?.brand || className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NavbarBrand.displayName = 'NavbarBrand';

// NavbarContent component
export const NavbarContent = forwardRef<HTMLUListElement, NavbarContentProps>(
  ({ children, justify = 'start', className, ...props }, ref) => {
    const { content } = navbar();
    const { classNames } = useNavbarContext();

    return (
      <ul
        ref={ref}
        className={content({ className: classNames?.content || className })}
        data-justify={justify}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

NavbarContent.displayName = 'NavbarContent';

// NavbarItem component
export const NavbarItem = forwardRef<HTMLLIElement, NavbarItemProps>(
  ({ children, isActive = false, className, ...props }, ref) => {
    const { item } = navbar();
    const { classNames } = useNavbarContext();

    return (
      <li
        ref={ref}
        className={item({ className: classNames?.item || className })}
        data-active={isActive}
        {...props}
      >
        {children}
      </li>
    );
  }
);

NavbarItem.displayName = 'NavbarItem';

// NavbarMenuToggle component
export const NavbarMenuToggle = forwardRef<HTMLButtonElement, NavbarMenuToggleProps>(
  (
    {
      icon,
      isSelected,
      defaultSelected = false,
      srOnlyText = 'open/close navigation menu',
      className,
      onChange,
      ...props
    },
    ref
  ) => {
    const { toggle } = navbar();
    const { isMenuOpen, onMenuOpenChange, classNames } = useNavbarContext();

    const handlePress = () => {
      const newState = !isMenuOpen;
      onMenuOpenChange(newState);
      onChange?.(newState);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={toggle({ className: classNames?.toggle || className })}
        data-open={isMenuOpen}
        data-pressed={false}
        aria-label={srOnlyText}
        onClick={handlePress}
        {...props}
      >
        {typeof icon === 'function' ? icon(isMenuOpen) : icon || <HamburgerIcon isOpen={isMenuOpen} />}
      </button>
    );
  }
);

NavbarMenuToggle.displayName = 'NavbarMenuToggle';

// NavbarMenu component
export const NavbarMenu = forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ children, portalContainer, className, ...props }, ref) => {
    const { menu } = navbar();
    const { isMenuOpen, disableAnimation, classNames } = useNavbarContext();

    const menuVariants = {
      closed: {
        opacity: 0,
        y: -20,
      },
      open: {
        opacity: 1,
        y: 0,
      },
    };

    const transition = {
      duration: disableAnimation ? 0 : 0.3,
      ease: 'easeOut' as const,
    };

    return (
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={ref}
            className={menu({ className: classNames?.menu || className })}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={transition}
            {...props}
          >
            <ul className="flex flex-col gap-2 py-4">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

NavbarMenu.displayName = 'NavbarMenu';

// NavbarMenuItem component
export const NavbarMenuItem = forwardRef<HTMLLIElement, NavbarMenuItemProps>(
  ({ children, isActive = false, className, ...props }, ref) => {
    const { menuItem } = navbar();
    const { classNames } = useNavbarContext();

    return (
      <li
        ref={ref}
        className={menuItem({ className: classNames?.menuItem || className })}
        data-active={isActive}
        {...props}
      >
        {children}
      </li>
    );
  }
);

NavbarMenuItem.displayName = 'NavbarMenuItem';