// Simple test to verify popover state logic
console.log('=== Testing Popover State Logic ===');

// Simulate usePopoverState behavior
function testUsePopoverState(isOpen, defaultOpen, onOpenChange, externalState) {
  let internalIsOpen = defaultOpen || false;
  console.log('Initial internalIsOpen:', internalIsOpen);
  
  // Use external state if provided, otherwise use internal state
  const currentIsOpen = externalState?.isOpen ?? isOpen ?? internalIsOpen;
  console.log('Calculated currentIsOpen:', currentIsOpen);
  
  const open = () => {
    console.log('open() called');
    if (externalState) {
      console.log('Using externalState.open()');
      externalState.open();
    } else if (isOpen === undefined) {
      console.log('Setting internalIsOpen to true');
      internalIsOpen = true;
      onOpenChange?.(true);
    } else {
      console.log('Calling onOpenChange(true)');
      onOpenChange?.(true);
    }
  };
  
  const close = () => {
    console.log('close() called');
    if (externalState) {
      externalState.close();
    } else if (isOpen === undefined) {
      internalIsOpen = false;
      onOpenChange?.(false);
    } else {
      onOpenChange?.(false);
    }
  };
  
  const toggle = () => {
    console.log('toggle() called - currentIsOpen:', currentIsOpen);
    if (externalState) {
      externalState.toggle();
    } else if (currentIsOpen) {
      console.log('Calling close()');
      close();
    } else {
      console.log('Calling open()');
      open();
    }
  };
  
  return {
    isOpen: Boolean(currentIsOpen),
    open,
    close,
    toggle
  };
}

// Test case 1: Basic popover (no props)
console.log('\n--- Test 1: Basic popover (no props) ---');
const state1 = testUsePopoverState(undefined, undefined, undefined, undefined);
console.log('state1.isOpen:', state1.isOpen);
state1.toggle(); // This should call open()

// Test case 2: Popover with defaultOpen=true
console.log('\n--- Test 2: Popover with defaultOpen=true ---');
const state2 = testUsePopoverState(undefined, true, undefined, undefined);
console.log('state2.isOpen:', state2.isOpen);

console.log('\n=== End Test ===');