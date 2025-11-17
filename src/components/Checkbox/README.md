# Checkbox Component

A comprehensive React checkbox component with advanced features including multiple variants, custom icons, indeterminate state, form integration, and full accessibility support.

## Features

- ✅ **Multiple Sizes**: Three size variants (sm, md, lg)
- ✅ **Color Variants**: Six color themes (default, primary, secondary, success, warning, danger)
- ✅ **Radius Variants**: Five border radius options (none, sm, md, lg, full)
- ✅ **Indeterminate State**: Support for tri-state checkbox behavior
- ✅ **Custom Icons**: Use custom icons instead of default checkmark
- ✅ **Line Through**: Strike-through effect for labels when checked
- ✅ **Form Integration**: Works seamlessly with forms and validation
- ✅ **Disabled State**: Visual and functional disabled state
- ✅ **Invalid State**: Error styling for form validation
- ✅ **Required State**: Visual indicator for required fields
- ✅ **Read Only**: Non-interactive display mode
- ✅ **Animation Control**: Enable/disable transition animations
- ✅ **TypeScript**: Full TypeScript support with comprehensive types
- ✅ **Accessibility**: WCAG compliant with proper ARIA attributes
- ✅ **Customizable**: Flexible styling with custom classes and slots

## Installation

This component is part of the library-component package. Import it directly:

```tsx
import { Checkbox } from './components/Checkbox';
```

## Basic Usage

```tsx
import { Checkbox } from './components/Checkbox';

function App() {
  return (
    <Checkbox>
      Accept terms and conditions
    </Checkbox>
  );
}
```

## API Reference

### Checkbox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Checkbox label content |
| `value` | `string` | - | The value of the checkbox |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size variant |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"primary"` | Color theme |
| `radius` | `"none" \| "sm" \| "md" \| "lg" \| "full"` | `"sm"` | Border radius variant |
| `isSelected` | `boolean` | `false` | Whether the checkbox is checked |
| `defaultSelected` | `boolean` | `false` | Default checked state (uncontrolled) |
| `isIndeterminate` | `boolean` | `false` | Whether checkbox is in indeterminate state |
| `isDisabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `isInvalid` | `boolean` | `false` | Whether the checkbox has validation errors |
| `isRequired` | `boolean` | `false` | Whether the checkbox is required |
| `isReadOnly` | `boolean` | `false` | Whether the checkbox is read-only |
| `disableAnimation` | `boolean` | `false` | Disable transition animations |
| `lineThrough` | `boolean` | `false` | Strike through label when checked |
| `icon` | `ReactNode` | - | Custom icon to display when checked |
| `name` | `string` | - | Name attribute for forms |
| `className` | `string` | - | Additional CSS classes |
| `classNames` | `object` | - | Custom classes for different slots |
| `onValueChange` | `function` | - | Callback when checkbox state changes |
| `onChange` | `function` | - | Native change event handler |

### Class Names Slots

The `classNames` prop allows you to customize different parts of the component:

```tsx
<Checkbox
  classNames={{
    base: "custom-base-class",
    wrapper: "custom-wrapper-class",
    icon: "custom-icon-class",
    label: "custom-label-class"
  }}
>
  Custom styled checkbox
</Checkbox>
```

| Slot | Description |
|------|-------------|
| `base` | Root element wrapper |
| `wrapper` | Checkbox input wrapper |
| `icon` | Icon container element |
| `label` | Label text element |

## Examples

### Basic Checkboxes

```tsx
<div className="flex flex-col gap-2">
  <Checkbox>Default checkbox</Checkbox>
  <Checkbox defaultSelected>Pre-checked checkbox</Checkbox>
  <Checkbox isDisabled>Disabled checkbox</Checkbox>
</div>
```

### Different Sizes

```tsx
<div className="flex items-center gap-4">
  <Checkbox size="sm">Small</Checkbox>
  <Checkbox size="md">Medium</Checkbox>
  <Checkbox size="lg">Large</Checkbox>
</div>
```

### Color Variants

```tsx
<div className="flex flex-wrap gap-4">
  <Checkbox color="default">Default</Checkbox>
  <Checkbox color="primary">Primary</Checkbox>
  <Checkbox color="secondary">Secondary</Checkbox>
  <Checkbox color="success">Success</Checkbox>
  <Checkbox color="warning">Warning</Checkbox>
  <Checkbox color="danger">Danger</Checkbox>
</div>
```

### Border Radius Variants

```tsx
<div className="flex items-center gap-4">
  <Checkbox radius="none">Sharp</Checkbox>
  <Checkbox radius="sm">Small radius</Checkbox>
  <Checkbox radius="md">Medium radius</Checkbox>
  <Checkbox radius="lg">Large radius</Checkbox>
  <Checkbox radius="full">Fully rounded</Checkbox>
</div>
```

### States

```tsx
<div className="flex flex-col gap-2">
  <Checkbox isRequired>Required field</Checkbox>
  <Checkbox isInvalid>Invalid state</Checkbox>
  <Checkbox isIndeterminate>Indeterminate state</Checkbox>
  <Checkbox isReadOnly defaultSelected>Read-only</Checkbox>
</div>
```

### Line Through Effect

```tsx
<div className="flex flex-col gap-2">
  <Checkbox lineThrough>Strike through when checked</Checkbox>
  <Checkbox lineThrough defaultSelected>Already checked item</Checkbox>
</div>
```

### Custom Icons

```tsx
<div className="flex flex-col gap-2">
  <Checkbox icon={<span>❤️</span>}>
    Favorite item
  </Checkbox>
  
  <Checkbox icon={<span>⭐</span>} color="warning">
    Star this item
  </Checkbox>
  
  <Checkbox icon={<span>👍</span>} color="success">
    Like this
  </Checkbox>
</div>
```

### Controlled Component

```tsx
import { useState } from 'react';

function ControlledExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="space-y-2">
      <Checkbox
        isSelected={isSelected}
        onValueChange={setIsSelected}
      >
        Controlled checkbox
      </Checkbox>
      <p>Status: {isSelected ? 'Checked' : 'Unchecked'}</p>
    </div>
  );
}
```

### Form Integration

```tsx
function FormExample() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Newsletter:', formData.has('newsletter'));
    console.log('Terms:', formData.has('terms'));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Checkbox name="newsletter" value="yes">
        Subscribe to newsletter
      </Checkbox>
      
      <Checkbox name="terms" value="accepted" isRequired>
        I accept the terms and conditions
      </Checkbox>
      
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}
```

### Custom Styling

```tsx
<Checkbox
  className="border-2 border-dashed"
  classNames={{
    base: "p-4 bg-gray-50 rounded-lg",
    wrapper: "border-blue-500",
    icon: "text-blue-600",
    label: "text-gray-800 font-semibold"
  }}
>
  Custom styled checkbox
</Checkbox>
```

### Group of Checkboxes

```tsx
import { useState } from 'react';

function CheckboxGroup() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelected(prev => [...prev, value]);
    } else {
      setSelected(prev => prev.filter(item => item !== value));
    }
  };

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ];

  return (
    <div className="space-y-2">
      <h3>Select fruits:</h3>
      {options.map(option => (
        <Checkbox
          key={option.value}
          value={option.value}
          isSelected={selected.includes(option.value)}
          onValueChange={(checked) => handleChange(option.value, checked)}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
}
```

## Accessibility

The Checkbox component follows WCAG accessibility guidelines:

- ✅ Proper ARIA attributes (`role`, `aria-checked`, `aria-disabled`, etc.)
- ✅ Keyboard navigation support (Space to toggle, Tab to navigate)
- ✅ Screen reader compatibility
- ✅ Focus management and visual focus indicators
- ✅ High contrast mode support
- ✅ Proper labeling associations
- ✅ Support for required and invalid states

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Toggle checkbox state |
| `Tab` | Move focus to next element |
| `Shift + Tab` | Move focus to previous element |

## Form Integration

The component integrates seamlessly with forms:

- Works with `FormData` API
- Supports native form validation
- Compatible with form libraries (React Hook Form, Formik, etc.)
- Proper `name` and `value` attributes
- Required field validation

## Performance

- **Optimized Rendering**: Minimal re-renders with efficient state management
- **Animation Control**: Option to disable animations for better performance
- **Lightweight**: Small bundle size with tree-shaking support
- **Memory Efficient**: No memory leaks in dynamic lists

## Browser Support

The Checkbox component works in all modern browsers that support:
- CSS transitions (for animations)
- CSS transforms (for scaling effects)
- Modern JavaScript features (ES6+)

## TypeScript

Full TypeScript support with comprehensive type definitions:

```tsx
import type { 
  CheckboxProps, 
  CheckboxSize, 
  CheckboxColor,
  CheckboxRadius 
} from './components/Checkbox';

const MyCheckbox: React.FC<CheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};
```

### Type Definitions

```tsx
type CheckboxSize = 'sm' | 'md' | 'lg';
type CheckboxColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type CheckboxRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

interface CheckboxProps {
  // ... all props with their types
}
```

## Migration Guide

### From Native Checkbox

```tsx
// Before
<input type="checkbox" checked={isChecked} onChange={handleChange} />
<label>My checkbox</label>

// After
<Checkbox isSelected={isChecked} onValueChange={handleChange}>
  My checkbox
</Checkbox>
```

### From Other UI Libraries

The component API is designed to be familiar to users of popular UI libraries while providing additional functionality and better TypeScript support.

## Contributing

This component is part of the library-component project. Contributions are welcome! Please ensure:

- TypeScript types are properly defined
- Accessibility guidelines are followed
- Tests cover all functionality
- Documentation is updated for new features