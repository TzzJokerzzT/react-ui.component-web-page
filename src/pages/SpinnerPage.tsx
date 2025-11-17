import React, { useState } from 'react';
import { Spinner } from '../components/Spinner';
import type { SpinnerType, SpinnerSize, SpinnerColor, SpinnerSpeed } from '../components/Spinner/types';

const SpinnerPage: React.FC = () => {
  // Control states
  const [type, setType] = useState<SpinnerType>('rotating');
  const [size, setSize] = useState<SpinnerSize>('md');
  const [color, setColor] = useState<SpinnerColor>('primary');
  const [speed, setSpeed] = useState<SpinnerSpeed>('normal');
  const [showLabel, setShowLabel] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [visible, setVisible] = useState(true);

  const spinnerTypes: SpinnerType[] = ['rotating', 'pulse', 'bounce', 'wave', 'ring', 'dots', 'bars', 'grid'];
  const spinnerSizes: SpinnerSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const spinnerColors: SpinnerColor[] = ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'];
  const spinnerSpeeds: SpinnerSpeed[] = ['slow', 'normal', 'fast'];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Spinner Components</h1>
        
        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Controls</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as SpinnerType)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {spinnerTypes.map((spinnerType) => (
                  <option key={spinnerType} value={spinnerType}>
                    {spinnerType.charAt(0).toUpperCase() + spinnerType.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as SpinnerSize)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {spinnerSizes.map((spinnerSize) => (
                  <option key={spinnerSize} value={spinnerSize}>
                    {spinnerSize.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value as SpinnerColor)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {spinnerColors.map((spinnerColor) => (
                  <option key={spinnerColor} value={spinnerColor}>
                    {spinnerColor.charAt(0).toUpperCase() + spinnerColor.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Speed Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Speed</label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value as SpinnerSpeed)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {spinnerSpeeds.map((spinnerSpeed) => (
                  <option key={spinnerSpeed} value={spinnerSpeed}>
                    {spinnerSpeed.charAt(0).toUpperCase() + spinnerSpeed.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Show Label Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showLabel}
                  onChange={(e) => setShowLabel(e.target.checked)}
                  className="mr-2"
                />
                Show Label
              </label>
            </div>

            {/* Show Overlay Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Overlay</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOverlay}
                  onChange={(e) => setShowOverlay(e.target.checked)}
                  className="mr-2"
                />
                Overlay Mode
              </label>
            </div>

            {/* Visibility Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Visibility</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={visible}
                  onChange={(e) => setVisible(e.target.checked)}
                  className="mr-2"
                />
                Visible
              </label>
            </div>

          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
          <div className="relative p-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 min-h-[200px] flex items-center justify-center">
            <div className="mb-2 text-sm text-gray-600 absolute top-4 left-4">
              Current: {type} | {size} | {color} | {speed}
              {showLabel && " | with label"}
              {showOverlay && " | overlay mode"}
              {!visible && " | hidden"}
            </div>
            
            {showOverlay ? (
              <div className="relative w-full h-32">
                <div className="absolute inset-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800">
                  Background Content
                </div>
                <Spinner
                  type={type}
                  size={size}
                  color={color}
                  speed={speed}
                  visible={visible}
                  overlay={showOverlay}
                  label={showLabel ? "Loading..." : undefined}
                />
              </div>
            ) : (
              <Spinner
                type={type}
                size={size}
                color={color}
                speed={speed}
                visible={visible}
                label={showLabel ? "Loading..." : undefined}
              />
            )}
          </div>
        </div>

        {/* All Types Showcase */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Spinner Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {spinnerTypes.map((spinnerType) => (
              <div key={spinnerType} className="text-center">
                <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">{spinnerType}</h3>
                <div className="p-6 bg-gray-50 rounded-lg flex items-center justify-center h-24">
                  <Spinner
                    type={spinnerType}
                    size="md"
                    color="primary"
                    speed="normal"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Size Variants */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Size Variants</h2>
          <div className="flex items-center justify-center space-x-8 p-8 bg-gray-50 rounded-lg">
            {spinnerSizes.map((spinnerSize) => (
              <div key={spinnerSize} className="text-center">
                <h3 className="text-sm font-medium text-gray-700 mb-3">{spinnerSize.toUpperCase()}</h3>
                <Spinner
                  type="rotating"
                  size={spinnerSize}
                  color="primary"
                  speed="normal"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Color Variants */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Color Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {spinnerColors.map((spinnerColor) => (
              <div key={spinnerColor} className="text-center">
                <h3 className="text-sm font-medium text-gray-700 mb-2 capitalize">{spinnerColor}</h3>
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Spinner
                    type="pulse"
                    size="md"
                    color={spinnerColor}
                    speed="normal"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speed Variants */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Speed Variants</h2>
          <div className="flex items-center justify-center space-x-12 p-8 bg-gray-50 rounded-lg">
            {spinnerSpeeds.map((spinnerSpeed) => (
              <div key={spinnerSpeed} className="text-center">
                <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">{spinnerSpeed}</h3>
                <Spinner
                  type="bounce"
                  size="md"
                  color="primary"
                  speed={spinnerSpeed}
                />
              </div>
            ))}
          </div>
        </div>

        {/* With Labels */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">With Labels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Spinner
                type="rotating"
                size="md"
                color="primary"
                speed="normal"
                label="Loading..."
              />
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Spinner
                type="pulse"
                size="lg"
                color="success"
                speed="normal"
                label="Processing data..."
              />
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Spinner
                type="wave"
                size="md"
                color="warning"
                speed="fast"
                label="Please wait..."
              />
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { Spinner } from './components/Spinner';

// Basic usage
<Spinner />

// With customization
<Spinner
  type="${type}"
  size="${size}"
  color="${color}"
  speed="${speed}"
  ${showLabel ? `label="Loading..."` : ''}
  ${showOverlay ? `overlay={true}` : ''}
  ${!visible ? `visible={false}` : ''}
/>

// Overlay mode
<Spinner
  type="rotating"
  size="lg"
  color="primary"
  overlay={true}
  label="Loading..."
/>`}</code>
          </pre>
        </div>

        {/* Props Reference */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Props Reference</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4 font-semibold">Prop</th>
                  <th className="text-left py-2 px-4 font-semibold">Type</th>
                  <th className="text-left py-2 px-4 font-semibold">Default</th>
                  <th className="text-left py-2 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">type</td>
                  <td className="py-2 px-4">rotating | pulse | bounce | wave | ring | dots | bars | grid</td>
                  <td className="py-2 px-4">rotating</td>
                  <td className="py-2 px-4">The animation type of the spinner</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">size</td>
                  <td className="py-2 px-4">xs | sm | md | lg | xl</td>
                  <td className="py-2 px-4">md</td>
                  <td className="py-2 px-4">The size of the spinner</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">color</td>
                  <td className="py-2 px-4">primary | secondary | success | warning | error | neutral</td>
                  <td className="py-2 px-4">primary</td>
                  <td className="py-2 px-4">The color theme of the spinner</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">speed</td>
                  <td className="py-2 px-4">slow | normal | fast</td>
                  <td className="py-2 px-4">normal</td>
                  <td className="py-2 px-4">The animation speed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">visible</td>
                  <td className="py-2 px-4">boolean</td>
                  <td className="py-2 px-4">true</td>
                  <td className="py-2 px-4">Whether the spinner should be visible</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">label</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Optional text label below the spinner</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">overlay</td>
                  <td className="py-2 px-4">boolean</td>
                  <td className="py-2 px-4">false</td>
                  <td className="py-2 px-4">Overlay mode to cover existing content</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">overlayOpacity</td>
                  <td className="py-2 px-4">number</td>
                  <td className="py-2 px-4">0.8</td>
                  <td className="py-2 px-4">Opacity of the overlay background (0-1)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">overlayColor</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">bg-white</td>
                  <td className="py-2 px-4">Custom overlay background color</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">animationConfig</td>
                  <td className="py-2 px-4">Partial&lt;SpinnerAnimationConfig&gt;</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Custom animation configuration</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">className</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Additional CSS classes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">aria-label</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">Loading</td>
                  <td className="py-2 px-4">ARIA label for accessibility</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">data-testid</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">spinner</td>
                  <td className="py-2 px-4">Test ID for testing purposes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinnerPage;