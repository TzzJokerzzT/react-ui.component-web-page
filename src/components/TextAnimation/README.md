# Text Animation Component Library

A comprehensive collection of text animation components built with React, TypeScript, and Framer Motion. This library provides 6 powerful text animation components with extensive customization options and accessibility features.

## Components Overview

### 1. TypeWriter
Creates typewriter effects with customizable cursors, speeds, and behaviors.

```tsx
import { TypeWriter } from './components/TextAnimation';

<TypeWriter 
  text="Hello, World!" 
  speed={50}
  cursorChar="|"
  showCursor={true}
  repeat={false}
  trigger="inView"
/>
```

**Props:**
- `text: string` - Text to animate
- `speed?: number` - Typing speed in milliseconds (default: 100)
- `cursorChar?: string` - Cursor character (default: "|")
- `showCursor?: boolean` - Show blinking cursor (default: true)
- `repeat?: boolean` - Loop animation (default: false)
- `trigger?: TriggerType` - Animation trigger (default: "inView")

### 2. RevealText
Reveals text with various effects including blur, scale, and rotation.

```tsx
import { RevealText } from './components/TextAnimation';

<RevealText 
  text="Reveal me!"
  mode="word"
  effect="blur"
  stagger={0.1}
  trigger="inView"
/>
```

**Props:**
- `text: string` - Text to animate
- `mode?: 'char' | 'word' | 'line'` - Animation granularity (default: "word")
- `effect?: 'blur' | 'scale' | 'slideUp' | 'slideDown' | 'rotateX' | 'rotateY'` - Animation effect (default: "blur")
- `stagger?: number` - Delay between elements (default: 0.05)
- `trigger?: TriggerType` - Animation trigger (default: "inView")

### 3. CounterText
Animates numbers with formatting options for currency, percentages, and custom formats.

```tsx
import { CounterText } from './components/TextAnimation';

<CounterText 
  from={0}
  to={1000}
  duration={2}
  format="currency"
  currency="USD"
  trigger="inView"
/>
```

**Props:**
- `from: number` - Starting value
- `to: number` - Target value
- `duration?: number` - Animation duration in seconds (default: 2)
- `format?: 'number' | 'currency' | 'percentage'` - Number format (default: "number")
- `currency?: string` - Currency code for currency format (default: "USD")
- `locale?: string` - Locale for formatting (default: "en-US")
- `trigger?: TriggerType` - Animation trigger (default: "inView")

### 4. GradientText
Creates animated color gradients that flow through text.

```tsx
import { GradientText } from './components/TextAnimation';

<GradientText 
  text="Gradient Text"
  colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
  direction="horizontal"
  speed={2}
  trigger="inView"
/>
```

**Props:**
- `text: string` - Text to animate
- `colors?: string[]` - Array of gradient colors (default: rainbow colors)
- `direction?: 'horizontal' | 'vertical' | 'diagonal'` - Gradient direction (default: "horizontal")
- `speed?: number` - Animation speed multiplier (default: 1)
- `trigger?: TriggerType` - Animation trigger (default: "inView")

### 5. MorphingText
Transforms text with various transition effects including scramble, fade, and slide.

```tsx
import { MorphingText } from './components/TextAnimation';

<MorphingText 
  texts={['First text', 'Second text', 'Third text']}
  effect="scramble"
  interval={3000}
  trigger="inView"
/>
```

**Props:**
- `texts: string[]` - Array of texts to cycle through
- `effect?: 'scramble' | 'fade' | 'slideUp' | 'slideDown'` - Transition effect (default: "scramble")
- `interval?: number` - Time between transitions in milliseconds (default: 3000)
- `trigger?: TriggerType` - Animation trigger (default: "inView")

### 6. GlitchText
Creates digital glitch effects with customizable corruption and intensity.

```tsx
import { GlitchText } from './components/TextAnimation';

<GlitchText 
  text="GLITCH TEXT"
  intensity="medium"
  corruption={0.3}
  duration={2000}
  trigger="hover"
/>
```

**Props:**
- `text: string` - Text to animate
- `intensity?: 'low' | 'medium' | 'high'` - Glitch intensity (default: "medium")
- `corruption?: number` - Corruption level 0-1 (default: 0.2)
- `duration?: number` - Glitch duration in milliseconds (default: 1000)
- `trigger?: TriggerType` - Animation trigger (default: "inView")

## Trigger Types

All components support multiple trigger types:

- `"inView"` - Animate when element enters viewport (default)
- `"hover"` - Animate on mouse hover
- `"focus"` - Animate on focus
- `"manual"` - Control via external state
- `"immediate"` - Animate immediately on mount

## Accessibility Features

- **Reduced Motion**: Automatically respects `prefers-reduced-motion` setting
- **ARIA Labels**: Proper ARIA labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility support
- **Focus Management**: Proper focus handling for interactive elements

## Performance Optimizations

- **Intersection Observer**: Efficient viewport detection for inView triggers
- **Animation Cleanup**: Proper cleanup of animations and event listeners
- **Debouncing**: Optimized event handling for better performance
- **Memory Management**: Efficient resource usage and garbage collection

## Examples

### Basic Usage

```tsx
import { 
  TypeWriter, 
  RevealText, 
  CounterText, 
  GradientText, 
  MorphingText, 
  GlitchText 
} from './components/TextAnimation';

const MyComponent = () => {
  return (
    <div>
      <TypeWriter text="Welcome to our site!" />
      <RevealText text="Discover amazing features" mode="word" />
      <CounterText from={0} to={100} format="percentage" />
      <GradientText text="Beautiful Colors" />
      <MorphingText texts={['Innovation', 'Excellence', 'Success']} />
      <GlitchText text="SYSTEM ERROR" intensity="high" />
    </div>
  );
};
```

### Advanced Configuration

```tsx
const AdvancedExample = () => {
  return (
    <div>
      <TypeWriter 
        text="Advanced typewriter with custom settings"
        speed={30}
        cursorChar="█"
        showCursor={true}
        repeat={true}
        trigger="hover"
        className="text-2xl font-mono"
      />
      
      <RevealText 
        text="Character by character reveal with rotation"
        mode="char"
        effect="rotateX"
        stagger={0.02}
        easing="easeOutBounce"
        trigger="inView"
        className="text-4xl font-bold"
      />
      
      <CounterText 
        from={0}
        to={1234567.89}
        duration={3}
        format="currency"
        currency="EUR"
        locale="de-DE"
        trigger="inView"
        className="text-3xl text-green-600"
      />
    </div>
  );
};
```

## Integration

### Installation

The components are part of the main component library. Import them directly:

```tsx
import { TypeWriter, RevealText } from './components/TextAnimation';
```

### Styling

All components accept standard React props including `className` for custom styling:

```tsx
<TypeWriter 
  text="Styled text"
  className="text-blue-500 font-bold text-2xl"
/>
```

### Custom Animations

Components use Framer Motion variants that can be customized via the `variants` prop:

```tsx
<RevealText 
  text="Custom animation"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }}
/>
```

## Browser Support

- Modern browsers with ES6+ support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Dependencies

- React 18+
- Framer Motion 10+
- TypeScript 4.5+

## License

Part of the Component Library project. See main project license for details.

## Contributing

Follow the main project contribution guidelines. Ensure all text animations maintain accessibility standards and performance optimizations.