# Guía: Crear Componentes al Estilo HeroUI

Esta guía te ayudará a crear nuevos componentes siguiendo el patrón de HeroUI, usando el componente **Code** como referencia.

## Paso 1: Estructura de Archivos

Crea una carpeta para tu componente en `src/components/`:

```bash
mkdir src/components/TuComponente
cd src/components/TuComponente
```

Crea los siguientes archivos:

```
TuComponente/
├── TuComponente.tsx     # Componente principal
├── types.ts             # Tipos TypeScript
├── variants.ts          # Estilos con tailwind-variants
├── index.ts             # Exportaciones
├── TuComponenteExamples.tsx  # Ejemplos
└── README.md            # Documentación
```

## Paso 2: Definir Tipos (types.ts)

```tsx
import { ReactNode } from "react";

// Define los tipos de variantes
export type TuComponenteSize = "sm" | "md" | "lg";
export type TuComponenteColor = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "danger";
export type TuComponenteRadius = "none" | "sm" | "md" | "lg" | "full";

// Props del componente
export interface TuComponenteProps {
  /**
   * El contenido del componente
   */
  children?: ReactNode;
  
  /**
   * El tamaño del componente
   * @default "md"
   */
  size?: TuComponenteSize;
  
  /**
   * El color del componente
   * @default "default"
   */
  color?: TuComponenteColor;
  
  /**
   * El radio de borde del componente
   * @default "md"
   */
  radius?: TuComponenteRadius;
  
  /**
   * Clase CSS personalizada
   */
  className?: string;
  
  /**
   * Desactivar animaciones
   * @default false
   */
  disableAnimation?: boolean;
}
```

## Paso 3: Definir Estilos (variants.ts)

```tsx
import { tv, VariantProps } from "tailwind-variants";

export const tuComponenteVariants = tv({
  base: [
    // Estilos base comunes
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "outline-none",
    // Transiciones
    "transition-all",
    "duration-200",
  ],
  variants: {
    size: {
      sm: "text-sm px-3 py-1 gap-1",
      md: "text-base px-4 py-2 gap-2",
      lg: "text-lg px-6 py-3 gap-3",
    },
    color: {
      default: [
        "bg-gray-100",
        "text-gray-800",
        "hover:bg-gray-200",
        "dark:bg-gray-800",
        "dark:text-gray-200",
        "dark:hover:bg-gray-700",
      ],
      primary: [
        "bg-primary-500",
        "text-primary-foreground",
        "hover:bg-primary-600",
        "dark:bg-primary-600",
        "dark:hover:bg-primary-700",
      ],
      secondary: [
        "bg-secondary-500",
        "text-secondary-foreground",
        "hover:bg-secondary-600",
        "dark:bg-secondary-600",
        "dark:hover:bg-secondary-700",
      ],
      success: [
        "bg-success-500",
        "text-success-foreground",
        "hover:bg-success-600",
        "dark:bg-success-600",
        "dark:hover:bg-success-700",
      ],
      warning: [
        "bg-warning-500",
        "text-warning-foreground",
        "hover:bg-warning-600",
        "dark:bg-warning-600",
        "dark:hover:bg-warning-700",
      ],
      danger: [
        "bg-danger-500",
        "text-danger-foreground",
        "hover:bg-danger-600",
        "dark:bg-danger-600",
        "dark:hover:bg-danger-700",
      ],
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    disableAnimation: {
      true: "transition-none",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    disableAnimation: false,
  },
});

export type TuComponenteVariantsType = VariantProps<typeof tuComponenteVariants>;
```

## Paso 4: Crear Componente (TuComponente.tsx)

```tsx
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { TuComponenteProps } from './types';
import { tuComponenteVariants } from './variants';

/**
 * TuComponente - Descripción breve del componente
 * Siguiendo el patrón de diseño de HeroUI
 */
export const TuComponente = forwardRef<HTMLDivElement, TuComponenteProps>(({
  children,
  size = 'md',
  color = 'default',
  radius = 'md',
  className,
  disableAnimation = false,
  ...props
}, ref) => {
  // Generar estilos del componente
  const styles = tuComponenteVariants({
    size,
    color,
    radius,
    disableAnimation,
  });

  return (
    <div
      ref={ref}
      className={twMerge(styles, className)}
      {...props}
    >
      {children}
    </div>
  );
});

TuComponente.displayName = 'TuComponente';
```

## Paso 5: Exportaciones (index.ts)

```tsx
export { TuComponente } from './TuComponente';
export type { 
  TuComponenteProps, 
  TuComponenteSize, 
  TuComponenteColor,
  TuComponenteRadius 
} from './types';
```

## Paso 6: Crear Ejemplos (TuComponenteExamples.tsx)

```tsx
import { TuComponente } from './TuComponente';

export const TuComponenteExamples = () => {
  return (
    <div className="space-y-8">
      {/* Uso Básico */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Usage
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <TuComponente>Hello World</TuComponente>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { TuComponente } from "@/components/TuComponente";

export default function App() {
  return <TuComponente>Hello World</TuComponente>;
}`}
        </pre>
      </section>

      {/* Tamaños */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Sizes
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4">
            <TuComponente size="sm">Small</TuComponente>
            <TuComponente size="md">Medium</TuComponente>
            <TuComponente size="lg">Large</TuComponente>
          </div>
        </div>
      </section>

      {/* Colores */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Colors
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4">
            <TuComponente color="default">Default</TuComponente>
            <TuComponente color="primary">Primary</TuComponente>
            <TuComponente color="secondary">Secondary</TuComponente>
            <TuComponente color="success">Success</TuComponente>
            <TuComponente color="warning">Warning</TuComponente>
            <TuComponente color="danger">Danger</TuComponente>
          </div>
        </div>
      </section>
    </div>
  );
};
```

## Paso 7: Crear Página (src/pages/TuComponentePage.tsx)

```tsx
import { TuComponenteExamples } from "@/components/TuComponente/TuComponenteExamples";

export const TuComponentePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          TuComponente
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Descripción breve de tu componente
        </p>
      </div>

      <TuComponenteExamples />
    </div>
  );
};
```

## Paso 8: Documentación API

### Crear DocData (src/pages/Doc/TuComponenteDocData.ts)

```tsx
export const tuComponentePropsColumns = [
  { key: "prop", label: "PROP", allowsSorting: false },
  { key: "type", label: "TYPE", allowsSorting: false },
  { key: "default", label: "DEFAULT", allowsSorting: false },
  { key: "description", label: "DESCRIPTION", allowsSorting: false },
];

export const tuComponentePropsContent = [
  {
    id: 1,
    key: "children",
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "El contenido del componente",
  },
  // ... más props
];
```

### Crear Doc (src/pages/Doc/TuComponenteDoc.tsx)

```tsx
import Table, { TableHeader, TableBody } from "@/components/Table";
import { tuComponentePropsColumns, tuComponentePropsContent } from "./TuComponenteDocData";

export const TuComponenteDoc = () => {
  return (
    <>
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          API Reference
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            TuComponente Props
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={tuComponentePropsColumns}
                items={tuComponentePropsContent}
                isStriped
              >
                <TableHeader columns={tuComponentePropsColumns} />
                <TableBody items={tuComponentePropsContent} />
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
```

## Paso 9: Agregar a Rutas (src/config/routes.ts)

```tsx
import { TuComponentePage } from '../pages/TuComponentePage';

// En el array de rutas:
{ 
  path: '/tu-componente', 
  element: TuComponentePage, 
  label: 'TuComponente', 
  icon: React.createElement(ComponentIcon), 
  category: 'core' 
},
```

## Checklist de Calidad HeroUI

- [ ] ✅ Usa `forwardRef` para referencias
- [ ] ✅ Tipado completo con TypeScript
- [ ] ✅ Documentación JSDoc en props
- [ ] ✅ Sistema de variantes con `tailwind-variants`
- [ ] ✅ Soporte para dark mode
- [ ] ✅ Colores semánticos (default, primary, etc.)
- [ ] ✅ Tamaños estándar (sm, md, lg)
- [ ] ✅ Radio de borde configurable
- [ ] ✅ Prop `className` para personalización
- [ ] ✅ Prop `disableAnimation`
- [ ] ✅ Ejemplos visuales con código
- [ ] ✅ README con documentación
- [ ] ✅ Página de demostración
- [ ] ✅ Documentación de API con tabla

## Variables CSS Disponibles

Usa estas variables en tus estilos:

```css
/* Colores principales */
--color-primary-50 a --color-primary-900
--color-secondary-50 a --color-secondary-900
--color-success-50 a --color-success-900
--color-warning-50 a --color-warning-900
--color-danger-50 a --color-danger-900
--color-default-50 a --color-default-900

/* Colores de primer plano */
--color-primary-foreground
--color-secondary-foreground
--color-success-foreground
--color-warning-foreground
--color-danger-foreground
--color-default-foreground
```

## Ejemplo Completo: Componente Divider

Ver el componente Code como referencia completa de implementación en:
- `src/components/Code/`
- `src/pages/CodePage.tsx`
- `src/pages/Doc/CodeDoc.tsx`

## Recursos

- [HeroUI Components](https://www.heroui.com/docs/components)
- [Tailwind Variants Docs](https://www.tailwind-variants.org/)
- [React forwardRef](https://react.dev/reference/react/forwardRef)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Siguiendo esta guía, podrás crear componentes consistentes con el estilo y arquitectura de HeroUI.
