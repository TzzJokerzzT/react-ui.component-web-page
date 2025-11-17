# Badge Component

Un componente Badge es un elemento pequeño que representa un estado o notificación siguiendo el sistema de diseño HeroUI.

## Importación

```tsx
import { Badge } from '../components/Badge';
import type { BadgeProps, BadgeColor, BadgeVariant, BadgeSize, BadgeShape, BadgePlacement } from '../components/Badge';
```

## Ejemplos de Uso

### Ejemplo Básico

```tsx
// Badge con contenido numérico
<Badge content="5">
  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
    📧
  </div>
</Badge>

// Badge con texto
<Badge content="NEW" color="success">
  <div className="px-4 py-2 bg-gray-100 rounded-md">
    Feature Update
  </div>
</Badge>
```

### Badge Independiente (Sin children)

```tsx
<Badge content="Online" color="success" />
<Badge content="Offline" color="default" />
<Badge content="Busy" color="warning" />
<Badge content="Away" color="secondary" />
<Badge content="Error" color="danger" />
<Badge content="Premium" color="primary" />
```

### Variantes

```tsx
// Variante sólida (predeterminada)
<Badge content="8" variant="solid" color="primary">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    📱
  </div>
</Badge>

// Variante plana
<Badge content="8" variant="flat" color="primary">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    📱
  </div>
</Badge>

// Variante desvanecida
<Badge content="8" variant="faded" color="primary">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    📱
  </div>
</Badge>

// Variante con sombra
<Badge content="8" variant="shadow" color="primary">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    📱
  </div>
</Badge>
```

### Colores

```tsx
<Badge content="3" color="default">
  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
    🔔
  </div>
</Badge>

<Badge content="3" color="primary">
  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
    🔔
  </div>
</Badge>

<Badge content="3" color="secondary">
  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
    🔔
  </div>
</Badge>

<Badge content="3" color="success">
  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
    🔔
  </div>
</Badge>

<Badge content="3" color="warning">
  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
    🔔
  </div>
</Badge>

<Badge content="3" color="danger">
  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
    🔔
  </div>
</Badge>
```

### Tamaños

```tsx
// Pequeño
<Badge content="7" size="sm" color="primary">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    💌
  </div>
</Badge>

// Mediano (predeterminado)
<Badge content="7" size="md" color="primary">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    💌
  </div>
</Badge>

// Grande
<Badge content="7" size="lg" color="primary">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    💌
  </div>
</Badge>
```

### Formas

```tsx
// Rectángulo (predeterminado)
<Badge content="9" shape="rectangle" color="success">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    🎯
  </div>
</Badge>

// Círculo
<Badge content="9" shape="circle" color="success">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    🎯
  </div>
</Badge>
```

### Posicionamiento

```tsx
// Arriba derecha (predeterminado)
<Badge content="5" placement="top-right" color="danger">
  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
    📦
  </div>
</Badge>

// Arriba izquierda
<Badge content="5" placement="top-left" color="danger">
  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
    📦
  </div>
</Badge>

// Abajo derecha
<Badge content="5" placement="bottom-right" color="danger">
  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
    📦
  </div>
</Badge>

// Abajo izquierda
<Badge content="5" placement="bottom-left" color="danger">
  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
    📦
  </div>
</Badge>
```

### Características Especiales

```tsx
// Con borde
<Badge content="2" showOutline color="primary">
  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
    👤
  </div>
</Badge>

// Invisible
<Badge content="5" isInvisible>
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    🔕
  </div>
</Badge>

// Sin animación
<Badge content="!" disableAnimation color="warning">
  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
    ⚡
  </div>
</Badge>
```

### Ejemplos Complejos

```tsx
// Notificaciones de mensajes
<Badge content="12" variant="shadow" color="danger" showOutline>
  <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl shadow-md">
    📱
  </div>
</Badge>

// Estado online
<Badge
  content="●"
  variant="flat"
  color="success"
  shape="circle"
  size="sm"
  placement="bottom-right"
>
  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
    <img
      src="https://via.placeholder.com/48/4F46E5/FFFFFF?text=U"
      alt="User avatar"
      className="w-full h-full object-cover"
    />
  </div>
</Badge>

// Carrito de compras
<Badge
  content="3"
  variant="solid"
  color="primary"
  size="lg"
  shape="circle"
>
  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
    🛒
  </div>
</Badge>
```

## Props

| Prop | Tipo | Valor por Defecto | Descripción |
|------|------|-------------------|-------------|
| `children` | `ReactNode` | - | Los elementos hijos que envuelve el badge |
| `content` | `ReactNode` | - | El contenido a mostrar en el badge |
| `variant` | `'solid' \| 'flat' \| 'faded' \| 'shadow'` | `'solid'` | El estilo visual del badge |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | El color temático del badge |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | El tamaño del badge |
| `shape` | `'rectangle' \| 'circle'` | `'rectangle'` | La forma del badge |
| `placement` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | La posición relativa a los children |
| `isOneChar` | `boolean` | `false` | Si el badge debe tratarse como un solo carácter |
| `showOutline` | `boolean` | `false` | Si mostrar un borde alrededor del badge |
| `isInvisible` | `boolean` | `false` | Si el badge debe ser invisible |
| `disableAnimation` | `boolean` | `false` | Si deshabilitar la animación de escala |
| `classNames` | `BadgeSlots` | - | Nombres de clase personalizados para diferentes slots |
| `className` | `string` | - | Nombre de clase personalizado para el elemento base |

## Tipos de Datos

### BadgeSlots

```tsx
interface BadgeSlots {
  /**
   * Elemento contenedor que envuelve el contenido y el badge
   */
  base?: string;
  /**
   * Elemento badge que muestra el contenido del badge
   */
  badge?: string;
}
```

### BadgeProps

```tsx
interface BadgeProps {
  children?: ReactNode;
  content?: ReactNode;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  shape?: BadgeShape;
  placement?: BadgePlacement;
  isOneChar?: boolean;
  showOutline?: boolean;
  isInvisible?: boolean;
  disableAnimation?: boolean;
  classNames?: BadgeSlots;
  className?: string;
}
```

## Características

- **Detección automática de carácter único**: El componente detecta automáticamente si el contenido es un solo carácter o número para optimización
- **Flexible**: Puede usarse como badge independiente (sin children) o como overlay (con children)
- **Totalmente accesible**: Incluye atributos ARIA apropiados
- **Personalizable**: Soporta múltiples variantes, colores, tamaños y formas
- **Animaciones**: Incluye animaciones de escala suaves (deshabilitables)
- **TypeScript**: Completamente tipado con TypeScript para mejor experiencia de desarrollo