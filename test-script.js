// Test script to verify floating label behavior
// Run this in browser console while on the input page

function testFloatingLabels() {
  console.log('🧪 Testing Floating Label Animation...');
  
  // Find input with inside label placement
  const insideInput = document.querySelector('[data-testid="inside-label-input-input"]');
  const insideLabel = document.querySelector('[data-testid="inside-label-input-label"]');
  
  if (!insideInput || !insideLabel) {
    console.error('❌ Could not find inside label input elements');
    return;
  }
  
  console.log('✅ Found inside label elements');
  console.log('Input:', insideInput);
  console.log('Label:', insideLabel);
  
  // Test initial state
  console.log('\n🔍 Initial State:');
  console.log('Label classes:', insideLabel.className);
  console.log('Input value:', insideInput.value);
  
  // Test focus behavior
  console.log('\n🎯 Testing Focus...');
  insideInput.focus();
  setTimeout(() => {
    console.log('After focus - Label classes:', insideLabel.className);
    console.log('Contains scale-85:', insideLabel.className.includes('scale-85'));
    console.log('Contains -translate-y-[1.875rem]:', insideLabel.className.includes('-translate-y-[1.875rem]'));
    
    // Test input with value
    console.log('\n✏️ Testing with value...');
    insideInput.value = 'test@example.com';
    insideInput.dispatchEvent(new Event('input', { bubbles: true }));
    
    setTimeout(() => {
      console.log('After input - Label classes:', insideLabel.className);
      
      // Test blur with value
      console.log('\n👋 Testing blur with value...');
      insideInput.blur();
      
      setTimeout(() => {
        console.log('After blur with value - Label classes:', insideLabel.className);
        console.log('Should still be floated:', insideLabel.className.includes('scale-85'));
        
        // Test clear and blur
        console.log('\n🗑️ Testing clear and blur...');
        insideInput.value = '';
        insideInput.dispatchEvent(new Event('input', { bubbles: true }));
        
        setTimeout(() => {
          console.log('After clear - Label classes:', insideLabel.className);
          console.log('Should not be floated:', !insideLabel.className.includes('scale-85'));
          console.log('✅ Test completed!');
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}

// Auto-run if on inputs page
if (window.location.pathname === '/inputs') {
  setTimeout(testFloatingLabels, 1000);
} else {
  console.log('Navigate to /inputs page and run testFloatingLabels()');
}