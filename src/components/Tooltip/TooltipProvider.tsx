import React, { createContext, useContext, useState } from 'react';
import type { TooltipProviderProps, TooltipContextValue } from './types';

// Default context values
const DEFAULT_DELAY_DURATION = 700;
const DEFAULT_SKIP_DELAY_DURATION = 300;
const DEFAULT_DISABLE_HOVERABLE_CONTENT = false;

// Create tooltip context
const TooltipContext = createContext<TooltipContextValue>({
  delayDuration: DEFAULT_DELAY_DURATION,
  skipDelayDuration: DEFAULT_SKIP_DELAY_DURATION,
  disableHoverableContent: DEFAULT_DISABLE_HOVERABLE_CONTENT,
  isPointerInTransit: false,
  setIsPointerInTransit: () => {},
});

// Hook to use tooltip context
export const useTooltipContext = (): TooltipContextValue => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltipContext must be used within a TooltipProvider');
  }
  return context;
};

// Optional hook that returns context if available, undefined otherwise
export const useOptionalTooltipContext = (): TooltipContextValue | undefined => {
  return useContext(TooltipContext);
};

// TooltipProvider component
export const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
  delayDuration = DEFAULT_DELAY_DURATION,
  skipDelayDuration = DEFAULT_SKIP_DELAY_DURATION,
  disableHoverableContent = DEFAULT_DISABLE_HOVERABLE_CONTENT,
}) => {
  const [isPointerInTransit, setIsPointerInTransit] = useState(false);

  const contextValue: TooltipContextValue = {
    delayDuration,
    skipDelayDuration,
    disableHoverableContent,
    isPointerInTransit,
    setIsPointerInTransit,
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  );
};

// Export the context for advanced usage
export { TooltipContext };

// Export default
export default TooltipProvider;