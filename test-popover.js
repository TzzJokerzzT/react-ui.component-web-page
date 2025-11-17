// Simple test to check if PopoverContent displayName is set correctly
import React from 'react';

// Mock the PopoverContent component to test displayName
const MockPopoverContent = () => <div>Content</div>;
MockPopoverContent.displayName = 'PopoverContent';

// Test the component identification logic
const children = [
  React.createElement('div', { key: 'trigger' }, 'Trigger'),
  React.createElement(MockPopoverContent, { key: 'content' }, 'Content')
];

const contentChildren = [];
const otherChildren = [];

React.Children.forEach(children, (child) => {
  if (React.isValidElement(child) && child.type && child.type.displayName === 'PopoverContent') {
    contentChildren.push(child);
    console.log('Found PopoverContent:', child);
  } else {
    otherChildren.push(child);
    console.log('Found other child:', child);
  }
});

console.log('Content children count:', contentChildren.length);
console.log('Other children count:', otherChildren.length);