import React, { useState } from 'react';
import { Tooltip, TooltipProvider } from '../components/Tooltip';

// Demo components for showcase
const DemoButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <button className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${className}`}>
    {children}
  </button>
);

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

export const TooltipPage: React.FC = () => {
  const [showCode, setShowCode] = useState<string | null>(null);

  const basicTooltipCode = `<Tooltip content="This is a basic tooltip">
  <button>Hover me</button>
</Tooltip>`;

  const placementCode = `<div className="grid grid-cols-3 gap-4">
  <Tooltip content="Top tooltip" placement="top">
    <button>Top</button>
  </Tooltip>
  <Tooltip content="Bottom tooltip" placement="bottom">
    <button>Bottom</button>
  </Tooltip>
  <Tooltip content="Left tooltip" placement="left">
    <button>Left</button>
  </Tooltip>
  <Tooltip content="Right tooltip" placement="right">
    <button>Right</button>
  </Tooltip>
</div>`;

  const variantCode = `<div className="flex gap-4">
  <Tooltip content="Dark tooltip" variant="dark">
    <button>Dark</button>
  </Tooltip>
  <Tooltip content="Light tooltip" variant="light">
    <button>Light</button>
  </Tooltip>
  <Tooltip content="Primary tooltip" variant="primary">
    <button>Primary</button>
  </Tooltip>
  <Tooltip content="Success tooltip" variant="success">
    <button>Success</button>
  </Tooltip>
  <Tooltip content="Warning tooltip" variant="warning">
    <button>Warning</button>
  </Tooltip>
  <Tooltip content="Error tooltip" variant="error">
    <button>Error</button>
  </Tooltip>
</div>`;

  const triggerCode = `<div className="flex gap-4">
  <Tooltip content="Hover to show" trigger="hover">
    <button>Hover</button>
  </Tooltip>
  <Tooltip content="Click to show" trigger="click">
    <button>Click</button>
  </Tooltip>
  <Tooltip content="Focus to show" trigger="focus">
    <input placeholder="Focus me" className="px-2 py-1 border rounded" />
  </Tooltip>
</div>`;

  const sizeCode = `<div className="flex gap-4 items-center">
  <Tooltip content="Extra small" size="xs">
    <button>XS</button>
  </Tooltip>
  <Tooltip content="Small tooltip" size="sm">
    <button>Small</button>
  </Tooltip>
  <Tooltip content="Medium tooltip" size="md">
    <button>Medium</button>
  </Tooltip>
  <Tooltip content="Large tooltip with more content" size="lg">
    <button>Large</button>
  </Tooltip>
</div>`;

  const animationCode = `<div className="grid grid-cols-2 gap-4">
  <Tooltip content="Fade animation" animation="fade">
    <button>Fade</button>
  </Tooltip>
  <Tooltip content="Scale animation" animation="scale">
    <button>Scale</button>
  </Tooltip>
  <Tooltip content="Shift animation (directional)" animation="shift">
    <button>Shift</button>
  </Tooltip>
  <Tooltip content="No animation" animation="none">
    <button>None</button>
  </Tooltip>
</div>`;

  const advancedAnimationCode = `<div className="grid grid-cols-3 gap-4">
  <Tooltip content="Bouncy spring animation" animation="bounce">
    <button>Bounce</button>
  </Tooltip>
  <Tooltip content="Rotation with scaling" animation="rotate">
    <button>Rotate</button>
  </Tooltip>
  <Tooltip content="Diagonal slide movement" animation="slide">
    <button>Slide</button>
  </Tooltip>
  <Tooltip content="Dramatic zoom from tiny" animation="zoom">
    <button>Zoom</button>
  </Tooltip>
  <Tooltip content="3D flip effect" animation="flip">
    <button>Flip</button>
  </Tooltip>
  <Tooltip content="Super elastic bounce" animation="elastic">
    <button>Elastic</button>
  </Tooltip>
</div>`;

  const directionalCode = `{/* Animations adapt direction based on placement */}
<Tooltip content="Bounces from top" animation="bounce" placement="top">
  <button>Top Bounce</button>
</Tooltip>

<Tooltip content="Slides from left" animation="slide" placement="left">
  <button>Left Slide</button>
</Tooltip>

<Tooltip content="Shifts from bottom" animation="shift" placement="bottom">
  <button>Bottom Shift</button>
</Tooltip>

{/* With alignment modifiers */}
<Tooltip content="Bounces with start alignment" animation="bounce" placement="top-start">
  <button>Top-Start Bounce</button>
</Tooltip>`;

  const arrowCode = `{/* Arrows sync with tooltip animations */}
<Tooltip content="Arrow syncs with bounce" animation="bounce" arrow={{ enabled: true }}>
  <button>Bounce Arrow</button>
</Tooltip>

<Tooltip content="Arrow rotates with content" animation="rotate" arrow={{ enabled: true }}>
  <button>Rotate Arrow</button>
</Tooltip>

<Tooltip content="Arrow scales with zoom" animation="zoom" arrow={{ enabled: true }}>
  <button>Zoom Arrow</button>
</Tooltip>

<Tooltip content="Without arrow pointer" arrow={{ enabled: false }}>
  <button>No Arrow</button>
</Tooltip>`;

  const delayCode = `<div className="flex gap-4">
  <Tooltip content="Fast show" delay={{ show: 100, hide: 100 }}>
    <button>Fast</button>
  </Tooltip>
  <Tooltip content="Normal delay" delay={{ show: 500, hide: 200 }}>
    <button>Normal</button>
  </Tooltip>
  <Tooltip content="Slow show" delay={{ show: 1000, hide: 300 }}>
    <button>Slow</button>
  </Tooltip>
</div>`;

  const providerCode = `<TooltipProvider delayDuration={700} skipDelayDuration={300}>
  <div className="flex gap-4">
    <Tooltip content="Uses provider defaults">
      <button>Provider Defaults</button>
    </Tooltip>
    <Tooltip content="Custom delay" delay={{ show: 0 }}>
      <button>No Delay</button>
    </Tooltip>
  </div>
</TooltipProvider>`;

  const complexContentCode = `<Tooltip
  content={
    <div className="space-y-2">
      <h4 className="font-semibold">Complex Content</h4>
      <p className="text-sm">This tooltip contains:</p>
      <ul className="text-xs space-y-1">
        <li>• Multiple paragraphs</li>
        <li>• Rich formatting</li>
        <li>• Lists and more</li>
      </ul>
    </div>
  }
  size="lg"
>
  <button>Rich Content</button>
</Tooltip>`;

  return (
    <TooltipProvider delayDuration={500} skipDelayDuration={200}>
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tooltip Component</h1>
          <p className="text-xl text-gray-600">
            A flexible and accessible tooltip component with positioning, animations, and multiple trigger types.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Usage */}
          <DemoCard title="Basic Usage">
            <div className="flex justify-center p-8">
              <Tooltip content="This is a basic tooltip">
                <DemoButton>Hover me</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'basic' ? null : 'basic')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'basic' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'basic' && <CodeBlock code={basicTooltipCode} />}
          </DemoCard>

          {/* Placement */}
          <DemoCard title="Placement">
            <div className="grid grid-cols-2 gap-8 p-8">
              <div className="grid grid-cols-3 gap-4">
                <div></div>
                <Tooltip content="Top tooltip" placement="top">
                  <DemoButton className="text-xs px-2 py-1">Top</DemoButton>
                </Tooltip>
                <div></div>
                
                <Tooltip content="Left tooltip" placement="left">
                  <DemoButton className="text-xs px-2 py-1">Left</DemoButton>
                </Tooltip>
                <div></div>
                <Tooltip content="Right tooltip" placement="right">
                  <DemoButton className="text-xs px-2 py-1">Right</DemoButton>
                </Tooltip>
                
                <div></div>
                <Tooltip content="Bottom tooltip" placement="bottom">
                  <DemoButton className="text-xs px-2 py-1">Bottom</DemoButton>
                </Tooltip>
                <div></div>
              </div>
              
              <div className="space-y-2">
                <Tooltip content="Top start alignment" placement="top-start">
                  <DemoButton className="text-xs px-2 py-1 w-full">Top Start</DemoButton>
                </Tooltip>
                <Tooltip content="Top end alignment" placement="top-end">
                  <DemoButton className="text-xs px-2 py-1 w-full">Top End</DemoButton>
                </Tooltip>
                <Tooltip content="Bottom start alignment" placement="bottom-start">
                  <DemoButton className="text-xs px-2 py-1 w-full">Bottom Start</DemoButton>
                </Tooltip>
                <Tooltip content="Bottom end alignment" placement="bottom-end">
                  <DemoButton className="text-xs px-2 py-1 w-full">Bottom End</DemoButton>
                </Tooltip>
              </div> 
            </div>
            <button
              onClick={() => setShowCode(showCode === 'placement' ? null : 'placement')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'placement' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'placement' && <CodeBlock code={placementCode} />}
          </DemoCard>

          {/* Variants */}
          <DemoCard title="Color Variants">
            <div className="flex flex-wrap gap-4 p-8">
              <Tooltip content="Dark tooltip" variant="dark">
                <DemoButton className="bg-gray-800">Dark</DemoButton>
              </Tooltip>
              <Tooltip content="Light tooltip" variant="light">
                <DemoButton className="bg-gray-100 text-gray-800 border">Light</DemoButton>
              </Tooltip>
              <Tooltip content="Primary tooltip" variant="primary">
                <DemoButton className="bg-blue-600">Primary</DemoButton>
              </Tooltip>
              <Tooltip content="Success tooltip" variant="success">
                <DemoButton className="bg-green-600">Success</DemoButton>
              </Tooltip>
              <Tooltip content="Warning tooltip" variant="warning">
                <DemoButton className="bg-yellow-500 text-yellow-900">Warning</DemoButton>
              </Tooltip>
              <Tooltip content="Error tooltip" variant="error">
                <DemoButton className="bg-red-600">Error</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'variants' ? null : 'variants')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'variants' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'variants' && <CodeBlock code={variantCode} />}
          </DemoCard>

          {/* Triggers */}
          <DemoCard title="Trigger Types">
            <div className="flex gap-4 p-8">
              <Tooltip content="Hover to show" trigger="hover">
                <DemoButton>Hover</DemoButton>
              </Tooltip>
              <Tooltip content="Click to toggle" trigger="click">
                <DemoButton className="bg-purple-600">Click</DemoButton>
              </Tooltip>
              <Tooltip content="Focus to show" trigger="focus">
                <input 
                  placeholder="Focus me" 
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'triggers' ? null : 'triggers')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'triggers' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'triggers' && <CodeBlock code={triggerCode} />}
          </DemoCard>

          {/* Sizes */}
          <DemoCard title="Sizes">
            <div className="flex gap-4 items-center p-8">
              <Tooltip content="Extra small" size="xs">
                <DemoButton className="text-xs px-2 py-1">XS</DemoButton>
              </Tooltip>
              <Tooltip content="Small tooltip" size="sm">
                <DemoButton className="text-sm px-3 py-1">Small</DemoButton>
              </Tooltip>
              <Tooltip content="Medium tooltip" size="md">
                <DemoButton>Medium</DemoButton>
              </Tooltip>
              <Tooltip content="Large tooltip with more content to demonstrate the larger size" size="lg">
                <DemoButton className="px-6 py-3">Large</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'sizes' ? null : 'sizes')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'sizes' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'sizes' && <CodeBlock code={sizeCode} />}
          </DemoCard>

          {/* Basic Animations */}
          <DemoCard title="Basic Animations">
            <div className="grid grid-cols-2 gap-4 p-8">
              <Tooltip content="Fade animation" animation="fade">
                <DemoButton>Fade</DemoButton>
              </Tooltip>
              <Tooltip content="Scale animation" animation="scale">
                <DemoButton className="bg-indigo-600">Scale</DemoButton>
              </Tooltip>
              <Tooltip content="Shift animation (directional)" animation="shift">
                <DemoButton className="bg-pink-600">Shift</DemoButton>
              </Tooltip>
              <Tooltip content="No animation" animation="none">
                <DemoButton className="bg-gray-600">None</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'animations' ? null : 'animations')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'animations' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'animations' && <CodeBlock code={animationCode} />}
          </DemoCard>

          {/* Advanced Animations */}
          <DemoCard title="Advanced Animations">
            <div className="grid grid-cols-3 gap-4 p-8">
              <Tooltip content="Bouncy spring animation" animation="bounce">
                <DemoButton className="bg-green-600">Bounce</DemoButton>
              </Tooltip>
              <Tooltip content="Rotation with scaling" animation="rotate">
                <DemoButton className="bg-purple-600">Rotate</DemoButton>
              </Tooltip>
              <Tooltip content="Diagonal slide movement" animation="slide">
                <DemoButton className="bg-orange-600">Slide</DemoButton>
              </Tooltip>
              <Tooltip content="Dramatic zoom from tiny" animation="zoom">
                <DemoButton className="bg-red-600">Zoom</DemoButton>
              </Tooltip>
              <Tooltip content="3D flip effect" animation="flip">
                <DemoButton className="bg-teal-600">Flip</DemoButton>
              </Tooltip>
              <Tooltip content="Super elastic bounce" animation="elastic">
                <DemoButton className="bg-yellow-600 text-yellow-900">Elastic</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'advanced-animations' ? null : 'advanced-animations')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'advanced-animations' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'advanced-animations' && <CodeBlock code={advancedAnimationCode} />}
          </DemoCard>

          {/* Directional Animations */}
          <DemoCard title="Directional Smart Animations">
            <p className="text-sm text-gray-600 mb-4">
              Animations like 'shift', 'bounce', and 'slide' automatically adapt their direction based on tooltip placement.
            </p>
            <div className="grid grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <div className="text-center">
                  <Tooltip content="Bounces from top" animation="bounce" placement="top">
                    <DemoButton className="bg-emerald-600">Top Bounce</DemoButton>
                  </Tooltip>
                </div>
                <div className="flex justify-between">
                  <Tooltip content="Slides from left" animation="slide" placement="left">
                    <DemoButton className="bg-cyan-600">Left Slide</DemoButton>
                  </Tooltip>
                  <Tooltip content="Slides from right" animation="slide" placement="right">
                    <DemoButton className="bg-cyan-600">Right Slide</DemoButton>
                  </Tooltip>
                </div>
                <div className="text-center">
                  <Tooltip content="Shifts from bottom" animation="shift" placement="bottom">
                    <DemoButton className="bg-violet-600">Bottom Shift</DemoButton>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <Tooltip content="Bounces with start alignment" animation="bounce" placement="top-start">
                    <DemoButton className="bg-rose-600">Top-Start Bounce</DemoButton>
                  </Tooltip>
                </div>
                <div className="text-center">
                  <Tooltip content="Shifts with end alignment" animation="shift" placement="bottom-end">
                    <DemoButton className="bg-amber-600">Bottom-End Shift</DemoButton>
                  </Tooltip>
                </div>
                <div className="text-center">
                  <Tooltip content="Slides with vertical alignment" animation="slide" placement="left-start">
                    <DemoButton className="bg-lime-600">Left-Start Slide</DemoButton>
                  </Tooltip>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'directional' ? null : 'directional')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'directional' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'directional' && <CodeBlock code={directionalCode} />}
          </DemoCard>

          {/* Arrow */}
          <DemoCard title="Animated Arrows">
            <p className="text-sm text-gray-600 mb-4">
              Arrows automatically sync with tooltip animations for a cohesive effect.
            </p>
            <div className="grid grid-cols-2 gap-4 p-8">
              <Tooltip content="Arrow syncs with bounce" animation="bounce" arrow={{ enabled: true }}>
                <DemoButton className="bg-green-600">Bounce Arrow</DemoButton>
              </Tooltip>
              <Tooltip content="Arrow rotates with content" animation="rotate" arrow={{ enabled: true }}>
                <DemoButton className="bg-purple-600">Rotate Arrow</DemoButton>
              </Tooltip>
              <Tooltip content="Arrow scales with zoom" animation="zoom" arrow={{ enabled: true }}>
                <DemoButton className="bg-red-600">Zoom Arrow</DemoButton>
              </Tooltip>
              <Tooltip content="Without arrow pointer" arrow={{ enabled: false }}>
                <DemoButton className="bg-orange-600">No Arrow</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'arrow' ? null : 'arrow')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'arrow' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'arrow' && <CodeBlock code={arrowCode} />}
          </DemoCard>

          {/* Delays */}
          <DemoCard title="Show/Hide Delays">
            <div className="flex gap-4 p-8">
              <Tooltip content="Fast show (100ms)" delay={{ show: 100, hide: 100 }}>
                <DemoButton className="bg-green-500">Fast</DemoButton>
              </Tooltip>
              <Tooltip content="Normal delay (500ms)" delay={{ show: 500, hide: 200 }}>
                <DemoButton className="bg-blue-500">Normal</DemoButton>
              </Tooltip>
              <Tooltip content="Slow show (1000ms)" delay={{ show: 1000, hide: 300 }}>
                <DemoButton className="bg-red-500">Slow</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'delays' ? null : 'delays')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'delays' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'delays' && <CodeBlock code={delayCode} />}
          </DemoCard>

          {/* Complex Content */}
          <DemoCard title="Rich Content">
            <div className="flex justify-center p-8">
              <Tooltip
                content={
                  <div className="space-y-2">
                    <h4 className="font-semibold">Complex Content</h4>
                    <p className="text-sm">This tooltip contains:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Multiple paragraphs</li>
                      <li>• Rich formatting</li>
                      <li>• Lists and more</li>
                    </ul>
                  </div>
                }
                size="lg"
              >
                <DemoButton className="bg-violet-600">Rich Content</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'complex' ? null : 'complex')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'complex' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'complex' && <CodeBlock code={complexContentCode} />}
          </DemoCard>

          {/* Provider Context */}
          <DemoCard title="Provider Context">
            <p className="text-sm text-gray-600 mb-4">
              This entire page uses TooltipProvider with default delays. Individual tooltips can override these settings.
            </p>
            <div className="flex gap-4 p-8">
              <Tooltip content="Uses provider defaults">
                <DemoButton>Provider Defaults</DemoButton>
              </Tooltip>
              <Tooltip content="Custom delay override" delay={{ show: 0 }}>
                <DemoButton className="bg-teal-600">No Delay</DemoButton>
              </Tooltip>
            </div>
            <button
              onClick={() => setShowCode(showCode === 'provider' ? null : 'provider')}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {showCode === 'provider' ? 'Hide' : 'Show'} Code
            </button>
            {showCode === 'provider' && <CodeBlock code={providerCode} />}
          </DemoCard>
        </div>

        {/* Props Reference */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Props Reference</h2>
          
          {/* Tooltip Component */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-700">Tooltip Component</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100">
                      Prop
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100">
                      Type
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100">
                      Default
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      children
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      ReactNode
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Children to render as trigger element
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      content
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      ReactNode
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Tooltip content to display
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      placement
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      "top"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Placement position of the tooltip
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      trigger
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      "hover" | "click" | "focus" | "manual"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      "hover"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      How the tooltip is triggered
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      size
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      "xs" | "sm" | "md" | "lg"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      "md"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Size variant of the tooltip
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      variant
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      "dark" | "light" | "primary" | "success" | "warning" | "error"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      "dark"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Color variant of the tooltip
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      animation
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      "fade" | "scale" | "shift" | "bounce" | "rotate" | "slide" | "zoom" | "flip" | "elastic" | "none"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      "fade"
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Animation type for tooltip entrance/exit
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      animationConfig
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      TooltipAnimationConfig
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Advanced animation configuration with speed, easing, duration, spring settings
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      offset
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      TooltipOffset
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      {`{ mainAxis: 8, crossAxis: 0 }`}
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Custom offset for tooltip positioning
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      arrow
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      TooltipArrow
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      {`{ enabled: true }`}
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Arrow configuration with enabled, size, and offset properties
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      delay
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      TooltipDelay
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Show/hide delay configuration with show and hide properties (ms)
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      disabled
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      boolean
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Whether the tooltip is disabled
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      open
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      boolean
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Whether tooltip is open (controlled)
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      defaultOpen
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      boolean
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Default open state (uncontrolled)
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      onOpenChange
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      (open: boolean) =&gt; void
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Callback when open state changes
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      zIndex
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      number
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      9999
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Custom z-index for tooltip
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      portal
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      boolean
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      true
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Whether to render tooltip in portal
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      portalContainer
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      Element | DocumentFragment
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      document.body
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Portal container element
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      asChild
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      boolean
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Whether children should be wrapped in span
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      className
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      string
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Custom CSS classes
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      style
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      React.CSSProperties
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Custom inline styles
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      aria-label
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      string
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      ARIA label for accessibility
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                      id
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                      string
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Custom ID for the tooltip
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TooltipPage;