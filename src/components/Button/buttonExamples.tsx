import { Button } from "./button";
import { AnimationButtons } from "./Examples/Animation";
import { AnimationControlandPerformance } from "./Examples/AnimationControlandPerformance";
import { BasicButtons } from "./Examples/Basic";
import { BorderButtons } from "./Examples/Border";
import { ColorButtons } from "./Examples/Colors";
import { ColorsMatchButtons } from "./Examples/ColorsMatchButtons";
import { CombinedButtons } from "./Examples/Combined";
import { ComplexAnimationButtons } from "./Examples/ComplextAnimation";
import { GroupButtons } from "./Examples/Group";
import { HoverButtons } from "./Examples/Hover";
import { IconButtons } from "./Examples/Icons";
import { LoadingButtons } from "./Examples/Loading";
import { PopularAnimationButtons } from "./Examples/PopularAnimation";
import { SizeButtons } from "./Examples/Size";
import { StateButtons } from "./Examples/States";
import { VariantMatrix } from "./Examples/VariantMatrix";

/**
 * ButtonExamples component demonstrating all Button system capabilities
 * This serves as both documentation and testing for the Button components
 */
export const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-800 min-h-screen rounded-lg">
      {/* Basic Variants */}
      <BasicButtons />

      {/* Colors */}
      <ColorButtons />

      {/* Sizes */}
      <SizeButtons />

      {/* States */}
      <StateButtons />

      {/* Enhanced Framer Motion Animations */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          🎬 Enhanced Framer Motion Animation System
        </h2>
        <div className="space-y-8">
          {/* Animation Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              🚀 Advanced Animation Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <p className="font-semibold mb-2">
                  🎯 Hover Animations (8 types):
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• scale, lift, bounce, pulse</li>
                  <li>• shake, rotate, glow, none</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">
                  👆 Click Animations (7 types):
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• scale, bounce, ripple, press</li>
                  <li>• punch, wiggle, none</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">🎨 Smart Features:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Color-matched focus rings</li>
                  <li>• Hardware acceleration</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">♿ Accessibility:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Respects reduced motion</li>
                  <li>• Preserves focus states</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hover Animations Showcase */}
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
              🎭 Hover Animation Variants
            </h2>
            <HoverButtons />
            <p className="text-sm text-black mt-3 bg-gray-50 p-3 rounded">
              <strong>💡 Try hovering over each button</strong> to see different
              animation effects. Each uses Framer Motion for smooth, performant
              animations.
            </p>
          </div>

          {/* Click Animations Showcase */}
          <div>
            <h3 className="text-xl font-medium text-black dark:text-primary-50 mb-4">
              👆 Click Animation Variants
            </h3>
            <AnimationButtons />
            <p className="text-sm text-black mt-3 bg-gray-50 p-3 rounded">
              <strong>💡 Click each button</strong> to see different animation
              effects. Animations are triggered on click and automatically reset
              after 300ms.
            </p>
          </div>

          {/* Combined Animations */}
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
              ✨ Combined Animation Examples
            </h2>
            <CombinedButtons />
          </div>

          {/* Dynamic Focus Rings */}
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
              🎯 Color-Matched Focus Rings
            </h2>
            <ColorsMatchButtons />
            <p className="text-sm text-black mt-3 bg-yellow-50 p-3 rounded border border-yellow-200">
              <strong>⌨️ Try using Tab key</strong> to focus each button. Notice
              how the focus ring color dynamically matches the button's color
              theme for better visual consistency.
            </p>
          </div>

          {/* Animation Control */}
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
              🎛️ Animation Control & Performance
            </h2>
            <AnimationControlandPerformance />
          </div>

          {/* Loading Animation */}
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
              ⏳ Enhanced Loading Animation
            </h2>
            <LoadingButtons />
            <p className="text-sm text-black mt-3 bg-blue-50 p-3 rounded border border-blue-200">
              <strong>🔄 Loading spinner</strong> uses Framer Motion for smooth
              fade-in/out and continuous rotation animations. The spinner color
              matches the button's text color.
            </p>
          </div>

          {/* Technical Details */}
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-100 mb-3">
              ⚙️ Technical Implementation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>Animation Engine:</strong>
                </p>
                <ul className="space-y-1 text-gray-400 ml-4">
                  <li>• Framer Motion for smooth animations</li>
                  <li>• Hardware acceleration (GPU)</li>
                  <li>• 60fps performance target</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>Accessibility:</strong>
                </p>
                <ul className="space-y-1 text-gray-400 ml-4">
                  <li>• Respects prefers-reduced-motion</li>
                  <li>• Focus states always preserved</li>
                  <li>• ARIA compliant interactions</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>Performance:</strong>
                </p>
                <ul className="space-y-1 text-gray-400 ml-4">
                  <li>• Lazy animation loading</li>
                  <li>• Minimal DOM manipulation</li>
                  <li>• Optimized re-renders</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  <strong>Customization:</strong>
                </p>
                <ul className="space-y-1 text-gray-400 ml-4">
                  <li>• 8 hover + 7 click animations</li>
                  <li>• Easy to extend system</li>
                  <li>• Theme-aware focus rings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Icon Buttons
        </h2>
        <IconButtons />
      </section>

      {/* Radius */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Border Radius
        </h2>
        <BorderButtons />
      </section>

      {/* Button Groups */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Button Groups
        </h2>
        <GroupButtons />
      </section>

      {/* Animation Matrix */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          🎯 Complete Animation Combinations Matrix
        </h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-pink-50 p-4 rounded-lg border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">
              🧪 Animation Testing Laboratory
            </h3>
            <p className="text-sm text-indigo-700">
              This section demonstrates every possible combination of hover and
              click animations. Perfect for testing and choosing the right
              animation combination for your use case.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
              🌟 Popular Animation Combinations
            </h2>
          </div>

          {/* Popular Combinations */}
          <PopularAnimationButtons />

          {/* Full Animation Matrix */}
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
              📊 Complete Animation Matrix
            </h2>
            <p className="text-sm text-black dark:text-primary-50">
              This matrix shows every hover animation combined with every click
              animation. Each cell demonstrates the combination in action.
            </p>

            <div className="overflow-x-auto">
              <ComplexAnimationButtons />
            </div>

            <div className="mt-4 text-sm text-black bg-blue-50 p-3 rounded border border-blue-200">
              <strong>💡 How to use this matrix:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• Find your desired hover animation in the left column</li>
                <li>• Find your desired click animation in the top row</li>
                <li>• Test the button at their intersection</li>
                <li>• Each button uses a different color for visual variety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Color Matrix */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Color & Variant Matrix
        </h2>
        <div className="overflow-x-auto">
          <VariantMatrix />
        </div>
      </section>

      {/* Legacy Variants Support */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Legacy Variants (Backward Compatibility)
        </h2>
        <div className="flex gap-4 flex-wrap bg-secondary-100 dark:bg-primary-50 py-2 px-3 rounded-lg">
          <Button variant="faded">Faded (maps to ghost)</Button>
          <Button variant="light">Light (maps to ghost)</Button>
          <Button variant="bordered">Bordered (maps to outline)</Button>
          <Button variant="outlined">Outlined (maps to outline)</Button>
        </div>
        <p className="text-sm text-black dark:text-primary-50 mt-2">
          These legacy variants are automatically mapped to new variants for
          backward compatibility.
        </p>
      </section>
    </div>
  );
};

export default ButtonExamples;
