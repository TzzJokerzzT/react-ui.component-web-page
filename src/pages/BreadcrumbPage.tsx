import React, { useState } from 'react';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  type BreadcrumbSize,
  type BreadcrumbColor,
  type BreadcrumbVariant,
  type SeparatorType
} from '../components/Breadcrumb';

const BreadcrumbPage: React.FC = () => {
  const [size, setSize] = useState<BreadcrumbSize>('md');
  const [color, setColor] = useState<BreadcrumbColor>('default');
  const [variant, setVariant] = useState<BreadcrumbVariant>('flat');
  const [separator, setSeparator] = useState<SeparatorType>('slash');
  const [maxItems, setMaxItems] = useState<number | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Breadcrumb Component</h1>
        
        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Controls</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Size Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as BreadcrumbSize)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            {/* Color Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value as BreadcrumbColor)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="danger">Danger</option>
              </select>
            </div>

            {/* Variant Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as BreadcrumbVariant)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="solid">Solid</option>
                <option value="bordered">Bordered</option>
                <option value="light">Light</option>
                <option value="flat">Flat</option>
              </select>
            </div>

            {/* Separator Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Separator</label>
              <select
                value={separator}
                onChange={(e) => setSeparator(e.target.value as SeparatorType)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="slash">Slash (/)</option>
                <option value="chevron">Chevron (›)</option>
                <option value="arrow">Arrow (→)</option>
                <option value="dot">Dot (•)</option>
              </select>
            </div>

            {/* Max Items Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Items</label>
              <select
                value={maxItems || ''}
                onChange={(e) => setMaxItems(e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">No limit</option>
                <option value="3">3 items</option>
                <option value="4">4 items</option>
                <option value="5">5 items</option>
              </select>
            </div>

            {/* Disabled Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isDisabled}
                  onChange={(e) => setIsDisabled(e.target.checked)}
                  className="mr-2"
                />
                Disabled
              </label>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
          <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300">
            <div className="mb-2 text-sm text-gray-600">
              Current settings: {size} size, {color} color, {variant} variant, {separator} separator
              {maxItems && `, max ${maxItems} items`}
              {isDisabled && ', disabled'}
            </div>
            <Breadcrumb
              size={size}
              color={color}
              variant={variant}
              separator={separator}
              maxItems={maxItems}
              isDisabled={isDisabled}
            >
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
              <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
              <BreadcrumbItem href="/docs/components/breadcrumb">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="/docs/components/breadcrumb/api">API Reference</BreadcrumbItem>
              <BreadcrumbItem>Current Page</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        {/* Size Examples */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Size Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Small (sm)</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Breadcrumb size="sm" color={color} variant={variant} separator={separator}>
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                  <BreadcrumbItem href="/category">Category</BreadcrumbItem>
                  <BreadcrumbItem>Current</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Medium (md)</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Breadcrumb size="md" color={color} variant={variant} separator={separator}>
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                  <BreadcrumbItem href="/category">Category</BreadcrumbItem>
                  <BreadcrumbItem>Current</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Large (lg)</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Breadcrumb size="lg" color={color} variant={variant} separator={separator}>
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                  <BreadcrumbItem href="/category">Category</BreadcrumbItem>
                  <BreadcrumbItem>Current</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>

        {/* Color Examples */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Color Variants</h2>
          <div className="space-y-4">
            {(['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as BreadcrumbColor[]).map((colorVariant) => (
              <div key={colorVariant}>
                <h3 className="text-sm font-medium text-gray-700 mb-2 capitalize">{colorVariant}</h3>
                <Breadcrumb size={size} color={colorVariant} variant={variant} separator={separator}>
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                  <BreadcrumbItem>Current</BreadcrumbItem>
                </Breadcrumb>
              </div>
            ))}
          </div>
        </div>

        {/* Variant Examples */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Style Variants</h2>
          <div className="space-y-4">
            {(['solid', 'bordered', 'light', 'flat'] as BreadcrumbVariant[]).map((variantType) => (
              <div key={variantType}>
                <h3 className="text-sm font-medium text-gray-700 mb-2 capitalize">{variantType}</h3>
                <Breadcrumb size={size} color={color} variant={variantType} separator={separator}>
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                  <BreadcrumbItem>Current</BreadcrumbItem>
                </Breadcrumb>
              </div>
            ))}
          </div>
        </div>

        {/* Separator Examples */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Separator Types</h2>
          <div className="space-y-6">
            {(['slash', 'chevron', 'arrow', 'dot'] as SeparatorType[]).map((separatorType) => (
              <div key={separatorType}>
                <h3 className="text-lg font-medium text-gray-700 mb-3 capitalize">{separatorType} Separator</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Breadcrumb size={size} color={color} variant={variant} separator={separatorType}>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                    <BreadcrumbItem href="/category">Category</BreadcrumbItem>
                    <BreadcrumbItem>Current Page</BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </div>
            ))}
            
            {/* Custom Separator Example */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Custom Separator</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Breadcrumb 
                  size={size} 
                  color={color} 
                  variant={variant} 
                  separator={<span className="mx-1 text-blue-500">|</span>}
                >
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                  <BreadcrumbItem href="/category">Category</BreadcrumbItem>
                  <BreadcrumbItem>Current Page</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>

        {/* Collapse Examples */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Collapse Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Max 4 items (with ellipsis)</h3>
              <Breadcrumb size={size} color={color} variant={variant} separator={separator} maxItems={4}>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
                <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
                <BreadcrumbItem href="/docs/components/breadcrumb">Breadcrumb</BreadcrumbItem>
                <BreadcrumbItem href="/docs/components/breadcrumb/api">API Reference</BreadcrumbItem>
                <BreadcrumbItem>Current Page</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Max 3 items (with ellipsis)</h3>
              <Breadcrumb size={size} color={color} variant={variant} separator={separator} maxItems={3}>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
                <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
                <BreadcrumbItem href="/docs/components/breadcrumb">Breadcrumb</BreadcrumbItem>
                <BreadcrumbItem href="/docs/components/breadcrumb/api">API Reference</BreadcrumbItem>
                <BreadcrumbItem>Current Page</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>

        {/* Special Examples */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Special Use Cases</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">With Start/End Content</h3>
              <Breadcrumb size={size} color={color} variant={variant} separator={separator}>
                <BreadcrumbItem 
                  href="/" 
                  startContent={<span className="mr-1">🏠</span>}
                >
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem 
                  href="/products"
                  startContent={<span className="mr-1">📦</span>}
                >
                  Products
                </BreadcrumbItem>
                <BreadcrumbItem 
                  endContent={<span className="ml-1">📄</span>}
                >
                  Current Page
                </BreadcrumbItem>
              </Breadcrumb>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Disabled State</h3>
              <Breadcrumb size={size} color={color} variant={variant} separator={separator} isDisabled>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                <BreadcrumbItem>Current</BreadcrumbItem>
              </Breadcrumb>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Mixed Disabled Items</h3>
              <Breadcrumb size={size} color={color} variant={variant} separator={separator}>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/products" isDisabled>Products (Disabled)</BreadcrumbItem>
                <BreadcrumbItem>Current</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';

function MyComponent() {
  return (
    <Breadcrumb
      size="${size}"
      color="${color}"
      variant="${variant}"
      separator="${separator}"
      ${maxItems ? `maxItems={${maxItems}}` : ''}${isDisabled ? '\n      isDisabled' : ''}
    >
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem>Current Page</BreadcrumbItem>
    </Breadcrumb>
  );
}`}</code>
          </pre>
        </div>

        {/* Props Reference */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Props Reference</h2>
          
          {/* Breadcrumb Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Breadcrumb</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">The breadcrumb items (BreadcrumbItem components)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">size</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'md'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Size of the breadcrumb component</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">color</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'default'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Color theme of the breadcrumb</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">variant</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'solid' | 'bordered' | 'light' | 'flat'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'flat'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Visual style variant of the breadcrumb</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">separator</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'slash' | 'chevron' | 'arrow' | 'dot' | ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'slash'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Separator type or custom separator element</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">maxItems</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Maximum number of visible items before collapsing with ellipsis</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isDisabled</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the entire breadcrumb is disabled</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">showRoot</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">true</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to show the root item when collapsed</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">itemsBeforeCollapse</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">1</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Number of items to show before the ellipsis when collapsed</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">itemsAfterCollapse</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">1</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Number of items to show after the ellipsis when collapsed</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">hideSeparator</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to hide all separators</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">renderEllipsis</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(hiddenItems: number) =&gt; ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom function to render the ellipsis element</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">separatorClassName</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for separators</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">itemsClassName</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for all items</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the breadcrumb container</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">listProps</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">HTMLAttributes{'<'}HTMLOListElement{'>'}</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Additional props for the underlying ordered list element</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BreadcrumbItem Props */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">BreadcrumbItem</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content of the breadcrumb item</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">href</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">URL to navigate to when clicked</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isDisabled</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether this item is disabled</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isCurrent</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether this item represents the current page</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">startContent</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content to display before the item text (e.g., icons)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">endContent</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content to display after the item text</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">size</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">inherited</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Size override for this specific item</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">color</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">inherited</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Color override for this specific item</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">variant</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'solid' | 'bordered' | 'light' | 'flat'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">inherited</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Variant override for this specific item</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onPress</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(event: React.MouseEvent&lt;HTMLAnchorElement&gt;) =&gt; void</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Handler called when the item is clicked</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the item container</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">itemClassName</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the list item element</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">linkClassName</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the link element</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbPage;