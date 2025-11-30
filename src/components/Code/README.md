# Code

Code is a component used to display inline code snippets.

## Installation

```bash
npm install tailwind-variants tailwind-merge
```

## Import

```tsx
import { Code } from "@/components/Code";
```

## Usage

```tsx
import { Code } from "@/components/Code";

export default function App() {
  return <Code>npm install heroui</Code>;
}
```

## Examples

### Sizes

```tsx
<Code size="sm">npm install</Code>
<Code size="md">npm install</Code>
<Code size="lg">npm install</Code>
```

### Colors

```tsx
<Code color="default">console.log()</Code>
<Code color="primary">console.log()</Code>
<Code color="secondary">console.log()</Code>
<Code color="success">console.log()</Code>
<Code color="warning">console.log()</Code>
<Code color="danger">console.log()</Code>
```

### Radius

```tsx
<Code radius="none">radius="none"</Code>
<Code radius="sm">radius="sm"</Code>
<Code radius="md">radius="md"</Code>
<Code radius="lg">radius="lg"</Code>
<Code radius="full">radius="full"</Code>
```

### In Text

```tsx
<p>
  Install the package with <Code>npm install heroui</Code>
</p>
```

## API

### Code Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `children` | `ReactNode` | - | The code content to display |
| `size` | `"sm" \| "md" \| "lg"` | `"sm"` | The size of the code block |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"default"` | The color theme of the code block |
| `radius` | `"none" \| "sm" \| "md" \| "lg" \| "full"` | `"sm"` | The border radius of the code block |
| `className` | `string` | - | Custom class name for the code element |
| `disableAnimation` | `boolean` | `false` | Whether to disable animations |

## Notes

- This component is designed for inline code snippets. For multi-line code blocks, consider using a different component.
- The component uses semantic HTML `<code>` element for better accessibility.
- All color variants are designed to work in both light and dark modes.
