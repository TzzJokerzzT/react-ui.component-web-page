import { useState, useCallback } from 'react';
import type { UseModalProps, UseModalReturn } from './types';

export function useModal(props: UseModalProps = {}): UseModalReturn {
  const {
    isOpen: controlledIsOpen,
    defaultOpen = false,
    onOpenChange,
    onClose,
  } = props;

  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleOpenChange = useCallback((open: boolean) => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(open);
    }
    onOpenChange?.(open);
    
    // Call onClose when closing
    if (!open) {
      onClose?.();
    }
  }, [controlledIsOpen, onOpenChange, onClose]);

  const onOpen = useCallback(() => {
    handleOpenChange(true);
  }, [handleOpenChange]);

  const handleClose = useCallback(() => {
    handleOpenChange(false);
  }, [handleOpenChange]);

  return {
    isOpen,
    onOpen,
    onClose: handleClose,
    onOpenChange: handleOpenChange,
  };
}