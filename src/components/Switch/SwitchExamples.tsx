import { useState } from "react";
import { Switch, SunIcon, MoonIcon } from "./index";

/**
 * Switch Examples Component
 * Demonstrates various Switch component configurations and usage patterns
 */
export const SwitchExamples = () => {
  const [controlledValue, setControlledValue] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Switch Component Examples
      </h1>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Basic Usage</h2>
        <div className="flex flex-wrap gap-4">
          <Switch data-testid="basic-switch">Subscribe to newsletter</Switch>
          <Switch
            defaultSelected
            onValueChange={() => console.log("Notificacion")}
            data-testid="default-selected"
          >
            Enable notifications
          </Switch>
        </div>
      </section>

      {/* With Label */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">With Label</h2>
        <div className="flex flex-wrap gap-4">
          <Switch data-testid="labeled-switch">Bluetooth</Switch>
        </div>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Disabled</h2>
        <div className="flex flex-wrap gap-4">
          <Switch isDisabled data-testid="disabled-switch">
            Disabled Switch
          </Switch>
          <Switch isDisabled defaultSelected data-testid="disabled-selected">
            Disabled & Selected
          </Switch>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Switch size="sm" data-testid="small-switch">
            Small
          </Switch>
          <Switch size="md" data-testid="medium-switch">
            Medium
          </Switch>
          <Switch size="lg" data-testid="large-switch">
            Large
          </Switch>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Colors</h2>
        <div className="flex flex-wrap gap-4">
          <Switch color="default" defaultSelected data-testid="default-color">
            Default
          </Switch>
          <Switch color="primary" defaultSelected data-testid="primary-color">
            Primary
          </Switch>
          <Switch
            color="secondary"
            defaultSelected
            data-testid="secondary-color"
          >
            Secondary
          </Switch>
          <Switch color="success" defaultSelected data-testid="success-color">
            Success
          </Switch>
          <Switch color="warning" defaultSelected data-testid="warning-color">
            Warning
          </Switch>
          <Switch color="danger" defaultSelected data-testid="danger-color">
            Danger
          </Switch>
        </div>
      </section>

      {/* With Thumb Icon */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          With Thumb Icon
        </h2>
        <div className="flex flex-wrap gap-4">
          <Switch
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <MoonIcon className="text-blue-600" />
              ) : (
                <SunIcon className="text-amber-500" />
              )
            }
            color="primary"
            data-testid="thumb-icon-switch"
          >
            Dark Mode
          </Switch>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Switch
            startContent={<SunIcon className="w-4 h-4 text-amber-500" />}
            endContent={<MoonIcon className="w-4 h-4 text-blue-600" />}
            isSelected={darkMode}
            onValueChange={setDarkMode}
            color="success"
            data-testid="icon-switch"
          >
            Theme
          </Switch>
        </div>
      </section>

      {/* Controlled */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Controlled</h2>
        <div className="space-y-2">
          <Switch
            isSelected={controlledValue}
            onValueChange={setControlledValue}
            data-testid="controlled-switch"
          >
            Controlled Switch
          </Switch>
          <p className="text-sm text-gray-600">
            Current value: {controlledValue ? "ON" : "OFF"}
          </p>
        </div>
      </section>

      {/* Custom Styles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Styles</h2>
        <div className="flex flex-wrap gap-4">
          <Switch
            classNames={{
              base: "max-w-full",
              wrapper:
                "group-data-[selected=true]:bg-gradient-to-r from-pink-500 to-purple-500",
              thumb: "w-6 h-6 shadow-lg",
              label: "text-purple-600 font-bold",
            }}
            data-testid="custom-styles-switch"
          >
            Custom Styled Switch
          </Switch>
        </div>
      </section>

      {/* Read Only */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Read Only</h2>
        <div className="flex flex-wrap gap-4">
          <Switch isReadOnly defaultSelected data-testid="readonly-switch">
            Read Only Switch
          </Switch>
        </div>
      </section>

      {/* Without Animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Without Animation
        </h2>
        <div className="flex flex-wrap gap-4">
          <Switch disableAnimation data-testid="no-animation-switch">
            No Animation
          </Switch>
        </div>
      </section>

      {/* Advanced Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Advanced Examples
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Switch
              size="lg"
              color="success"
              thumbIcon={({ isSelected }) =>
                isSelected ? (
                  <span className="text-white font-bold text-xs">ON</span>
                ) : (
                  <span className="text-gray-500 font-bold text-xs">OFF</span>
                )
              }
              data-testid="text-thumb-switch"
            >
              Power Mode
            </Switch>
          </div>

          <div className="flex flex-wrap gap-4">
            <Switch
              size="sm"
              color="warning"
              startContent="🔇"
              endContent="🔊"
              data-testid="emoji-switch"
            >
              Sound
            </Switch>
          </div>

          <div className="flex flex-wrap gap-4">
            <Switch
              color="danger"
              thumbIcon={({ isSelected }) => (isSelected ? "✓" : "✗")}
              data-testid="checkmark-switch"
            >
              Accept Terms
            </Switch>
          </div>
        </div>
      </section>

      {/* Props Reference */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props Reference</h2>
        
        {/* Switch Component */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-700">Switch Component</h3>
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
                    Content to render as switch label
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    value
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    string
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Value attribute for the switch input
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    name
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    string
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Name attribute for the switch input
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    size
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    "sm" | "md" | "lg"
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    "md"
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Size variant of the switch
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    color
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    "default" | "primary" | "secondary" | "success" | "warning" | "danger"
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    "primary"
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Color theme of the switch
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    thumbIcon
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    React.ComponentType&lt;ThumbIconProps&gt;
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Custom icon component for thumb
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    startContent
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    ReactNode
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Content to display at the start of the switch
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    endContent
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    ReactNode
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Content to display at the end of the switch
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    isSelected
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Whether the switch is selected (controlled)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    defaultSelected
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    false
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Default selected state (uncontrolled)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    isReadOnly
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    false
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Whether the switch is read-only
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    isDisabled
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    false
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Whether the switch is disabled
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    disableAnimation
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    false
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Whether to disable animations
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
                    ""
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Additional CSS classes to apply
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    classNames
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    Record&lt;SwitchSlots, string&gt;
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Custom class names for component slots (base, wrapper, thumb, label, startContent, endContent, thumbIcon, hiddenInput)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    onChange
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    (event: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Native change event handler
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    onValueChange
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    (isSelected: boolean) =&gt; void
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Value change event handler
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">
                    data-testid
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    string
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    -
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    Test ID for testing frameworks
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
