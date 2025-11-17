import React, { useState } from 'react';

// Manual implementation of the state logic to test
const usePopoverStateTest = (
  isOpen?: boolean,
  defaultOpen?: boolean,
  onOpenChange?: (isOpen: boolean) => void
) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen || false);
  
  // Use external state if provided, otherwise use internal state
  const currentIsOpen = isOpen ?? internalIsOpen;
  
  const open = () => {
    console.log('🔴 open() called - will set internalIsOpen to true');
    if (isOpen === undefined) {
      setInternalIsOpen(true);
      onOpenChange?.(true);
    } else {
      onOpenChange?.(true);
    }
  };

  const close = () => {
    if (isOpen === undefined) {
      setInternalIsOpen(false);
      onOpenChange?.(false);
    } else {
      onOpenChange?.(false);
    }
  };

  const toggle = () => {
    console.log('🔵 toggle() called - currentIsOpen:', currentIsOpen);
    if (currentIsOpen) {
      console.log('🔵 Will call close()');
      close();
    } else {
      console.log('🔵 Will call open()');
      open();
    }
  };

  return {
    isOpen: Boolean(currentIsOpen),
    open,
    close,
    toggle
  };
};

export const StateTestComponent: React.FC = () => {
  const [externalState, setExternalState] = useState<boolean | undefined>(undefined);
  
  const popoverState1 = usePopoverStateTest(undefined, false, (isOpen) => {
    console.log('Test 1 onOpenChange:', isOpen);
  });
  
  const popoverState2 = usePopoverStateTest(externalState, false, (isOpen) => {
    console.log('Test 2 onOpenChange:', isOpen);
    setExternalState(isOpen);
  });

  return (
    <div style={{ padding: '50px', fontFamily: 'monospace' }}>
      <h1>🧪 State Logic Test</h1>
      
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid blue' }}>
        <h2>Test 1: Internal State (defaultOpen=false)</h2>
        <p>Current isOpen: <strong>{String(popoverState1.isOpen)}</strong></p>
        <button 
          onClick={() => {
            console.log('=== Button 1 clicked ===');
            popoverState1.toggle();
          }}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: popoverState1.isOpen ? 'red' : 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Test 1 (Currently: {popoverState1.isOpen ? 'OPEN' : 'CLOSED'})
        </button>
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid green' }}>
        <h2>Test 2: External State Control</h2>
        <p>Current isOpen: <strong>{String(popoverState2.isOpen)}</strong></p>
        <p>External state: <strong>{String(externalState)}</strong></p>
        <button 
          onClick={() => {
            console.log('=== Button 2 clicked ===');
            popoverState2.toggle();
          }}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: popoverState2.isOpen ? 'red' : 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Test 2 (Currently: {popoverState2.isOpen ? 'OPEN' : 'CLOSED'})
        </button>
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h3>Instructions:</h3>
        <p>1. Click the buttons and watch the console logs</p>
        <p>2. Both buttons should toggle from CLOSED to OPEN and back</p>
        <p>3. The state should update and the button colors should change</p>
      </div>
    </div>
  );
};