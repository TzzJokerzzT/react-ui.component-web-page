import React from 'react';
import { Link, useLocation } from 'react-router';
import { LibraryLinkProps } from './types';

export const LibraryLink: React.FC<LibraryLinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  replace = false,
  onClick,
}) => {
  const location = useLocation();
  
  const isActive = exact 
    ? location.pathname === to
    : location.pathname.startsWith(to);

  const linkClassName = [
    className,
    isActive && activeClassName
  ].filter(Boolean).join(' ');

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
  };

  return (
    <Link
      to={to}
      className={linkClassName}
      replace={replace}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};