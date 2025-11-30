# Componente Code - Siguiendo el Estilo de HeroUI

## Resumen

He creado un componente **Code** completo siguiendo el patrón de diseño de HeroUI (anteriormente NextUI), tal como se muestra en su documentación oficial.

## Archivos Creados

### 1. Componente Principal
- **`src/components/Code/Code.tsx`** - Componente principal usando `forwardRef`
- **`src/components/Code/types.ts`** - Definiciones de tipos TypeScript
- **`src/components/Code/variants.ts`** - Estilos usando `tailwind-variants`
- **`src/components/Code/index.ts`** - Archivo de exportación

### 2. Ejemplos y Documentación
- **`src/components/Code/CodeExamples.tsx`** - Ejemplos visuales del componente
- **`src/components/Code/README.md`** - Documentación completa
- **`src/pages/CodePage.tsx`** - Página de demostración

### 3. Documentación de API
- **`src/pages/Doc/CodeDocData.ts`** - Datos estructurados para la tabla de props
- **`src/pages/Doc/CodeDoc.tsx`** - Documentación de referencia de API

### 4. Configuración
- **`src/config/routes.ts`** - Agregada ruta `/code`

## Características del Componente

### Props Disponibles

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Contenido del código |
| `size` | `"sm" \| "md" \| "lg"` | `"sm"` | Tamaño del bloque |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"default"` | Color del tema |
| `radius` | `"none" \| "sm" \| "md" \| "lg" \| "full"` | `"sm"` | Radio de borde |
| `className` | `string` | - | Clase CSS personalizada |
| `disableAnimation` | `boolean` | `false` | Desactivar animaciones |

### Variantes de Tamaño
```tsx
<Code size="sm">npm install</Code>  // Pequeño
<Code size="md">npm install</Code>  // Mediano
<Code size="lg">npm install</Code>  // Grande
```

### Variantes de Color
```tsx
<Code color="default">console.log()</Code>
<Code color="primary">console.log()</Code>
<Code color="secondary">console.log()</Code>
<Code color="success">console.log()</Code>
<Code color="warning">console.log()</Code>
<Code color="danger">console.log()</Code>
```

### Variantes de Radio
```tsx
<Code radius="none">sharp</Code>
<Code radius="sm">small</Code>
<Code radius="md">medium</Code>
<Code radius="lg">large</Code>
<Code radius="full">pill</Code>
```

## Patrones de HeroUI Implementados

### 1. **Estructura de Archivos**
```
Code/
├── Code.tsx          # Componente principal
├── types.ts          # Tipos TypeScript
├── variants.ts       # Estilos con tailwind-variants
├── index.ts          # Exportaciones
├── CodeExamples.tsx  # Ejemplos
└── README.md         # Documentación
```

### 2. **Uso de tailwind-variants**
- Sistema de variantes composables
- Estilos base + variantes dinámicas
- Soporte para dark mode integrado

### 3. **Tipos TypeScript Completos**
- Props fuertemente tipadas
- Tipos de variantes exportados
- Documentación en JSDoc

### 4. **forwardRef para Referencias**
```tsx
export const Code = forwardRef<HTMLElement, CodeProps>(...)
```

### 5. **Sistema de Colores Semánticos**
- Colores HeroUI: default, primary, secondary, success, warning, danger
- Soporte completo de dark mode
- Variables CSS reutilizables

### 6. **Ejemplos con Preview + Code**
Cada ejemplo incluye:
- Vista previa visual del componente
- Código fuente correspondiente
- Explicación de la funcionalidad

### 7. **Documentación de API Estructurada**
- Tabla de props usando el componente Table
- Sección de Type Definitions
- Patrones consistentes con ToastDoc e ImageDoc

## Uso del Componente

### Básico
```tsx
import { Code } from "@/components/Code";

<Code>npm install heroui</Code>
```

### En Texto
```tsx
<p>
  Install the package with <Code>npm install heroui</Code>
</p>
```

### Con Colores Semánticos
```tsx
<p>Use the <Code color="primary">useState</Code> hook</p>
<p>Run <Code color="success">npm run dev</Code></p>
<p>Warning: <Code color="danger">rm -rf /</Code></p>
```

### Personalizado
```tsx
<Code 
  size="lg" 
  color="primary" 
  radius="lg"
  className="font-bold"
>
  custom code
</Code>
```

## Ventajas del Patrón HeroUI

1. **Modular**: Cada parte está separada en archivos lógicos
2. **Reutilizable**: Sistema de variantes flexible
3. **Tipado**: TypeScript completo con autocompletado
4. **Mantenible**: Estructura clara y organizada
5. **Accesible**: Usa elemento semántico `<code>`
6. **Dark Mode**: Soporte nativo sin configuración extra
7. **Performante**: Usa `tailwind-merge` para evitar conflictos de clases

## Navegación

Para ver el componente en acción:
1. Visita `/code` en tu aplicación
2. Encuentra "Code" en el menú de navegación (Core Components)
3. Explora los ejemplos y la documentación

## Sistema de Colores

El componente usa las variables CSS ya definidas en `src/index.css`:
- `--color-primary-*` (50-900)
- `--color-secondary-*` (50-900)
- `--color-success-*` (50-900)
- `--color-warning-*` (50-900)
- `--color-danger-*` (50-900)
- `--color-default-*` (50-900)

Cada color tiene variantes de 50 a 900 para gradientes y dark mode.

## Próximos Pasos Sugeridos

Para continuar con el patrón HeroUI, podrías crear:

1. **Kbd** - Para mostrar teclas de teclado
2. **Divider** - Separadores horizontales/verticales
3. **Snippet** - Bloques de código copiables
4. **Link** - Enlaces estilizados
5. **Spacer** - Espaciadores flexibles

Todos siguiendo el mismo patrón establecido en el componente Code.
