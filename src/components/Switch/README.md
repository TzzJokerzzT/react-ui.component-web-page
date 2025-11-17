# Switch Component

A React Switch component built following HeroUI design patterns and specifications with **framer-motion animations**. The Switch component is used as an alternative between checked and not checked states.

## Features

- ✅ Multiple sizes (sm, md, lg)
- ✅ Multiple color variants (default, primary, secondary, success, warning, danger)
- ✅ Controlled and uncontrolled modes
- ✅ Custom thumb icons with smooth animations
- ✅ Start and end content support
- ✅ Disabled and read-only states
- ✅ **Framer-motion powered animations**
- ✅ **Spring-based thumb movement**
- ✅ **Hover and tap interactions**
- ✅ **Icon transition animations**
- ✅ Custom styling with classNames
- ✅ Accessibility support
- ✅ TypeScript support
- ✅ Test-friendly with data-testid attributes

## Installation

This component is part of the library component system. Import it directly from the Switch directory:

```tsx
import { Switch } from './components/Switch';
```

## Basic Usage

```tsx
import { Switch } from './components/Switch';

function App() {
  return (
    <Switch>
      Enable notifications
    </Switch>
  );
}
```

## Examples

### With Label
```tsx
<Switch>
  Bluetooth
</Switch>
```

### Disabled
```tsx
<Switch isDisabled>
  Disabled Switch
</Switch>
```

### Sizes
```tsx
<Switch size="sm">Small</Switch>
<Switch size="md">Medium</Switch>
<Switch size="lg">Large</Switch>
```

### Colors
```tsx
<Switch color="primary">Primary</Switch>
<Switch color="success">Success</Switch>
<Switch color="danger">Danger</Switch>
```

### With Thumb Icon
```tsx
<Switch
  thumbIcon={({ isSelected }) => 
    isSelected ? <MoonIcon /> : <SunIcon />
  }
>
  Dark Mode
</Switch>
```

### With Icons
```tsx
<Switch
  startContent={<SunIcon />}
  endContent={<MoonIcon />}
>
  Theme
</Switch>
```

### Controlled
```tsx
const [isSelected, setIsSelected] = useState(false);

<Switch
  isSelected={isSelected}
  onValueChange={setIsSelected}
>
  Controlled Switch
</Switch>
```

## Animations with Framer Motion

The Switch component now uses **framer-motion** for smooth, spring-based animations:

### Animated Thumb Icons
```tsx
<Switch
  thumbIcon={({ isSelected }) => 
    isSelected ? <MoonIcon /> : <SunIcon />
  }
>
  Dark Mode
</Switch>
```

### Interactive Elements
- **Hover effects**: Slight scale on wrapper and thumb
- **Tap feedback**: Scale down on press
- **Spring animations**: Smooth thumb sliding with spring physics
- **Icon transitions**: Rotating and fading icon changes

### Disable Animations
```tsx
<Switch disableAnimation>
  No Animation
</Switch>
```

## API Reference

### Switch Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to render as switch label |
| `value` | `string` | - | Value attribute for the switch input |
| `name` | `string` | - | Name attribute for the switch input |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size variant of the switch |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"primary"` | Color theme of the switch |
| `thumbIcon` | `React.ComponentType<ThumbIconProps>` | - | Custom icon component for thumb |
| `startContent` | `ReactNode` | - | Content to display at the start of the switch |
| `endContent` | `ReactNode` | - | Content to display at the end of the switch |
| `isSelected` | `boolean` | - | Whether the switch is selected (controlled) |
| `defaultSelected` | `boolean` | `false` | Default selected state (uncontrolled) |
| `isReadOnly` | `boolean` | `false` | Whether the switch is read-only |
| `isDisabled` | `boolean` | `false` | Whether the switch is disabled |
| `disableAnimation` | `boolean` | `false` | Whether to disable animations |
| `className` | `string` | - | Additional CSS classes to apply |
| `classNames` | `Partial<Record<"base" \| "wrapper" \| "thumb" \| "label" \| "startContent" \| "endContent" \| "thumbIcon" \| "hiddenInput", string>>` | - | Custom class names for different slots |
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | - | Native change event handler |
| `onValueChange` | `(isSelected: boolean) => void` | - | Value change event handler |
| `data-testid` | `string` | - | Test ID for testing frameworks |

### Switch Events

| Event | Type | Description |
|-------|------|-------------|
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | Native change event handler |
| `onValueChange` | `(isSelected: boolean) => void` | Value change event handler with boolean value |

## Slots

The Switch component has the following slots that can be customized using the `classNames` prop:

- **base**: Base slot for the switch. It is the main wrapper.
- **wrapper**: The wrapper of the start icon, end icon and thumb.
- **hiddenInput**: The hidden input element that is used to handle the switch state.
- **thumb**: The thumb element of the switch. It is the circle element.
- **label**: The label slot of the switch.
- **startContent**: The icon slot at the start of the switch.
- **endContent**: The icon slot at the end of the switch.
- **thumbIcon**: The icon slot inside the thumb.

## Data Attributes

The Switch has the following attributes on the base element:

- **data-selected**: When the switch is checked. Based on `isSelected` prop.
- **data-readonly**: When the switch is readonly. Based on `isReadOnly` prop.
- **data-disabled**: When the switch is disabled. Based on `isDisabled` prop.

## Accessibility

- Built with a native HTML `<input>` element
- Full support for browser features like form autofill
- Keyboard focus management and cross browser normalization
- Keyboard event support for Tab and Space keys
- Labeling support for assistive technology
- Exposed as a switch to assistive technology via ARIA

## Architecture

The Switch component follows the established project architecture:

```
Switch/
├── Switch.tsx          # Main component implementation
├── types.ts           # TypeScript type definitions
├── helper.ts          # Utility functions and class generators
├── SwitchExamples.tsx # Usage examples and demos
├── index.ts           # Export declarations
└── README.md          # Documentation
```

This structure ensures:
- **Separation of concerns**: Logic, types, and utilities are separated
- **Reusability**: Helper functions can be used independently
- **Type safety**: Comprehensive TypeScript support
- **Testability**: Components are built with testing in mind
- **Documentation**: Clear examples and API documentation