import React, { useState } from 'react';
import { Pagination } from '../components/Pagination';

// Demo components for showcase
const DemoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
    <code>{code}</code>
  </pre>
);

const PaginationDemo: React.FC<{ 
  total: number;
  showCode?: boolean;
  codeSnippet?: string;
  children?: React.ReactNode;
}> = ({ total, showCode, codeSnippet, children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-sm text-gray-600">
          Current page: <span className="font-semibold">{currentPage}</span> of {total}
        </div>
        {children || (
          <Pagination
            total={total}
            page={currentPage}
            onChange={setCurrentPage}
          />
        )}
      </div>
      {showCode && codeSnippet && (
        <details>
          <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
            Show code
          </summary>
          <div className="mt-2">
            <CodeBlock code={codeSnippet} />
          </div>
        </details>
      )}
    </div>
  );
};

export const PaginationPage: React.FC = () => {
  const [activePage, setActivePage] = useState(1);

  const basicCode = `<Pagination
  total={10}
  page={activePage}
  onChange={setActivePage}
/>`;

  const variantCode = `<div className="space-y-4">
  <Pagination total={5} variant="flat" color="primary" />
  <Pagination total={5} variant="bordered" color="secondary" />
  <Pagination total={5} variant="light" color="success" />
  <Pagination total={5} variant="faded" color="warning" />
</div>`;

  const sizeCode = `<div className="space-y-4">
  <Pagination total={5} size="xs" />
  <Pagination total={5} size="sm" />
  <Pagination total={5} size="md" />
  <Pagination total={5} size="lg" />
  <Pagination total={5} size="xl" />
</div>`;

  const colorCode = `<div className="space-y-4">
  <Pagination total={5} color="default" />
  <Pagination total={5} color="primary" />
  <Pagination total={5} color="secondary" />
  <Pagination total={5} color="success" />
  <Pagination total={5} color="warning" />
  <Pagination total={5} color="danger" />
</div>`;

  const radiusCode = `<div className="space-y-4">
  <Pagination total={5} radius="none" />
  <Pagination total={5} radius="sm" />
  <Pagination total={5} radius="md" />
  <Pagination total={5} radius="lg" />
  <Pagination total={5} radius="xl" />
  <Pagination total={5} radius="full" />
</div>`;

  const controlsCode = `<div className="space-y-4">
  <Pagination 
    total={10} 
    controls={{
      showControls: true,
      showFirstLast: false
    }}
  />
  <Pagination 
    total={10} 
    controls={{
      showControls: true,
      showFirstLast: true
    }}
  />
</div>`;

  const configCode = `<div className="space-y-4">
  <Pagination 
    total={20} 
    display={{
      siblings: 1,
      compact: false,
      showShadow: true
    }}
  />
  <Pagination 
    total={20} 
    display={{
      siblings: 2,
      compact: true,
      showShadow: false
    }}
  />
</div>`;

  const disabledCode = `<div className="space-y-4">
  <Pagination total={5} isDisabled={true} />
  <Pagination total={5} disableAnimation={true} />
</div>`;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pagination Components
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          HeroUI-style pagination components with multiple variants, sizes, colors, and advanced features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Usage */}
        <DemoCard title="Basic Pagination">
          <PaginationDemo
            total={10}
            showCode
            codeSnippet={basicCode}
          />
        </DemoCard>

        {/* Variants */}
        <DemoCard title="Variants">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Flat</div>
              <Pagination total={5} variant="flat" color="primary" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Bordered</div>
              <Pagination total={5} variant="bordered" color="secondary" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Light</div>
              <Pagination total={5} variant="light" color="success" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Faded</div>
              <Pagination total={5} variant="faded" color="warning" />
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
              Show code
            </summary>
            <div className="mt-2">
              <CodeBlock code={variantCode} />
            </div>
          </details>
        </DemoCard>

        {/* Sizes */}
        <DemoCard title="Sizes">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Extra Small</div>
              <Pagination total={5} size="xs" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Small</div>
              <Pagination total={5} size="sm" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Medium</div>
              <Pagination total={5} size="md" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Large</div>
              <Pagination total={5} size="lg" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Extra Large</div>
              <Pagination total={5} size="xl" />
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
              Show code
            </summary>
            <div className="mt-2">
              <CodeBlock code={sizeCode} />
            </div>
          </details>
        </DemoCard>

        {/* Colors */}
        <DemoCard title="Colors">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Default</div>
              <Pagination total={5} color="default" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Primary</div>
              <Pagination total={5} color="primary" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Secondary</div>
              <Pagination total={5} color="secondary" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Success</div>
              <Pagination total={5} color="success" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Warning</div>
              <Pagination total={5} color="warning" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Danger</div>
              <Pagination total={5} color="danger" />
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
              Show code
            </summary>
            <div className="mt-2">
              <CodeBlock code={colorCode} />
            </div>
          </details>
        </DemoCard>

        {/* Radius */}
        <DemoCard title="Border Radius">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">None</div>
              <Pagination total={5} radius="none" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Small</div>
              <Pagination total={5} radius="sm" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Medium</div>
              <Pagination total={5} radius="md" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Large</div>
              <Pagination total={5} radius="lg" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Extra Large</div>
              <Pagination total={5} radius="xl" />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Full</div>
              <Pagination total={5} radius="full" />
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
              Show code
            </summary>
            <div className="mt-2">
              <CodeBlock code={radiusCode} />
            </div>
          </details>
        </DemoCard>

        {/* Controls Configuration */}
        <DemoCard title="Controls Configuration">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">With Prev/Next Only</div>
              <Pagination 
                total={10} 
                controls={{
                  showControls: true,
                  showFirstLast: false
                }}
              />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">With First/Last</div>
              <Pagination 
                total={10} 
                controls={{
                  showControls: true,
                  showFirstLast: true
                }}
              />
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
              Show code
            </summary>
            <div className="mt-2">
              <CodeBlock code={controlsCode} />
            </div>
          </details>
        </DemoCard>

        {/* Display Configuration */}
        <DemoCard title="Display Configuration">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Standard (siblings: 1)</div>
              <Pagination 
                total={20} 
                display={{
                  siblings: 1,
                  compact: false,
                  showShadow: true
                }}
              />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Compact (siblings: 2)</div>
              <Pagination 
                total={20} 
                display={{
                  siblings: 2,
                  compact: true,
                  showShadow: false
                }}
              />
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
              Show code
            </summary>
            <div className="mt-2">
              <CodeBlock code={configCode} />
            </div>
          </details>
        </DemoCard>

        {/* States */}
        <DemoCard title="States">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Disabled</div>
              <Pagination total={5} isDisabled={true} />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">No Animation</div>
              <Pagination total={5} disableAnimation={true} />
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
              Show code
            </summary>
            <div className="mt-2">
              <CodeBlock code={disabledCode} />
            </div>
          </details>
        </DemoCard>
      </div>

      {/* Full Example */}
      <DemoCard title="Full Interactive Example">
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-lg font-medium text-gray-800 mb-2">
              Page {activePage} of 50
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Full-featured pagination with all HeroUI styling options
            </div>
            <Pagination
              total={50}
              page={activePage}
              onChange={setActivePage}
              size="md"
              color="primary"
              variant="flat"
              radius="md"
              controls={{
                showControls: true,
                showFirstLast: true,
              }}
              display={{
                siblings: 2,
                showShadow: true,
                compact: false,
              }}
            />
          </div>
          <div className="text-xs text-gray-500 text-center">
            Try navigating through the pages to see the pagination in action
          </div>
        </div>
      </DemoCard>

      {/* Props Reference */}
      <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Props Reference</h2>
        
        {/* Main Pagination Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Pagination</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Prop</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Type</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Default</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">total</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">number</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Total number of pages</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">page</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">number</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>1</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Current active page (controlled)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">defaultPage</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">number</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>1</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Default page value (uncontrolled)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">onChange</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">(page: number) =&gt; void</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Callback fired when page changes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">variant</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">"solid" | "bordered" | "light" | "flat" | "faded" | "shadow"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"flat"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Visual style variant</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">color</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">"default" | "primary" | "secondary" | "success" | "warning" | "danger"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"primary"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Color theme</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">size</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">"xs" | "sm" | "md" | "lg" | "xl"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"md"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Size of pagination controls</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">radius</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">"none" | "sm" | "md" | "lg" | "xl" | "full"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"md"</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Border radius</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">isDisabled</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether pagination is disabled</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">disableAnimation</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to disable animations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">disableCursorAnimation</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to disable cursor animations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">showShadow</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to show shadow</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">controls</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">PaginationControlsConfig</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Configuration for navigation controls</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">display</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">PaginationDisplayConfig</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Configuration for display options</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">renderItem</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">(props: PaginationItemRenderProps) =&gt; React.ReactNode</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom render function for pagination items</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">getItemAriaLabel</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">(type: PaginationItemType, page?: number) =&gt; string</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Function to get aria-label for items</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">className</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Additional CSS classes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">classNames</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">PaginationSlots</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CSS classes for specific slots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Controls Configuration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">PaginationControlsConfig</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Prop</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Type</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Default</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">showControls</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to show prev/next controls</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">showFirstLast</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to show first/last controls</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">showSeparation</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>true</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to show visual separation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">disableFirstLastOnEdges</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>true</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Disable first/last on edge pages</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">firstContent</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">React.ReactNode</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Content for first button</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">previousContent</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">React.ReactNode</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Content for previous button</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">nextContent</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">React.ReactNode</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Content for next button</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">lastContent</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">React.ReactNode</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Content for last button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Display Configuration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">PaginationDisplayConfig</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Prop</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Type</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Default</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">siblings</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">number</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>1</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Number of siblings to show around current page</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">boundaries</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">number</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>1</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Number of pages to show at boundaries</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">compact</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to use compact mode</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">showShadow</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to show shadow on buttons</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">renderEllipsis</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">(props: PaginationEllipsisProps) =&gt; React.ReactNode</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom render function for ellipsis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Item Types */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">PaginationItemType</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <code className="text-blue-600 dark:text-blue-400">
              "first" | "previous" | "page" | "next" | "last" | "dots"
            </code>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Types of pagination items that can be rendered.
          </p>
        </div>

        {/* Slots */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">PaginationSlots</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Slot</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Target Element</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">base</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Main pagination container</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">wrapper</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Pagination items wrapper</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">item</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Individual pagination item</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">cursor</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Active page indicator cursor</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">forwardIcon</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Next/last navigation icons</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">ellipsis</code></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Ellipsis dots elements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationPage;