import { useState } from "react";
import { SwitchExamples } from "../components/Switch/SwitchExamples";
import { SwitchCodeExamples } from "../components/Switch/SwitchCodeExamples";
import { SwitchCenteringTest } from "../components/Switch/SwitchCenteringTest";
import { SwitchThumbClickTest } from "../components/Switch/SwitchThumbClickTest";
import { SwitchDebugTest } from "../components/Switch/SwitchDebugTest";
import { Switch } from "../components/Switch";
import PagesLayout from "@/layout/PagesLayout";

/**
 * Switch Page Component
 * Main page to showcase Switch component functionality
 */
export const SwitchPage = () => {
  const [viewMode, setViewMode] = useState<
    "examples" | "code-examples" | "centering" | "thumb-click" | "debug"
  >("examples");

  return (
    <PagesLayout
      title="Switch Component"
      explanation="Documentation and examples for the Switch component."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Navigation between different views */}
        <div className="p-8 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Switch
                  isSelected={viewMode === "examples"}
                  onValueChange={(checked) =>
                    checked && setViewMode("examples")
                  }
                  color="primary"
                  size="sm"
                />
                <span className="text-gray-700">Examples</span>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  isSelected={viewMode === "code-examples"}
                  onValueChange={(checked) =>
                    checked && setViewMode("code-examples")
                  }
                  color="secondary"
                  size="sm"
                />
                <span className="text-gray-700">Code Examples</span>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  isSelected={viewMode === "centering"}
                  onValueChange={(checked) =>
                    checked && setViewMode("centering")
                  }
                  color="success"
                  size="sm"
                />
                <span className="text-gray-700">Centering Test</span>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  isSelected={viewMode === "thumb-click"}
                  onValueChange={(checked) =>
                    checked && setViewMode("thumb-click")
                  }
                  color="warning"
                  size="sm"
                />
                <span className="text-gray-700">Thumb Click Test</span>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  isSelected={viewMode === "debug"}
                  onValueChange={(checked) => checked && setViewMode("debug")}
                  color="danger"
                  size="sm"
                />
                <span className="text-gray-700">Debug Test</span>
              </div>
            </div>

            <p className="text-gray-600 mt-2">
              Current view:{" "}
              <strong>
                {viewMode === "examples" && "Component Examples"}
                {viewMode === "code-examples" && "Code Examples"}
                {viewMode === "centering" && "Centering Test"}
                {viewMode === "thumb-click" && "Thumb Click Test"}
                {viewMode === "debug" && "Debug Test"}
              </strong>
            </p>
          </div>
        </div>

        {/* Content */}
        {viewMode === "examples" && <SwitchExamples />}
        {viewMode === "code-examples" && <SwitchCodeExamples />}
        {viewMode === "centering" && <SwitchCenteringTest />}
        {viewMode === "thumb-click" && <SwitchThumbClickTest />}
        {viewMode === "debug" && <SwitchDebugTest />}

        {/* Props Reference */}
        <div className="max-w-6xl mx-auto p-8">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Props Reference
            </h2>

            {/* Main Switch Props */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Switch
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Prop
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Type
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Default
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          children
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          ReactNode
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Content to render as switch label
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          value
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          string
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Value attribute for the switch input
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          name
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          string
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Name attribute for the switch input
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          size
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          "sm" | "md" | "lg"
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code>"md"</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Size variant of the switch
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          color
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          "default" | "primary" | "secondary" | "success" |
                          "warning" | "danger"
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code>"primary"</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Color theme of the switch
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          thumbIcon
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          React.ComponentType&lt;ThumbIconProps&gt;
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Custom icon component for thumb
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          startContent
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          ReactNode
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Content to display at the start of the switch
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          endContent
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          ReactNode
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Content to display at the end of the switch
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          isSelected
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          boolean
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Whether the switch is selected (controlled)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          defaultSelected
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          boolean
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code>false</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Default selected state (uncontrolled)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          isReadOnly
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          boolean
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code>false</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Whether the switch is read-only
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          isDisabled
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          boolean
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code>false</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Whether the switch is disabled
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          disableAnimation
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          boolean
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code>false</code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Whether to disable animations
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          className
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          string
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Additional CSS classes to apply
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          classNames
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          SwitchSlots
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Custom class names for different slots
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          onChange
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          (event: ChangeEvent&lt;HTMLInputElement&gt;) =&gt;
                          void
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Native change event handler
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          onValueChange
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          (isSelected: boolean) =&gt; void
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Value change event handler
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          data-testid
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          string
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Test ID for testing frameworks
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ThumbIconProps */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                ThumbIconProps
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Prop
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Type
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Default
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          isSelected
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          boolean
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Whether the switch is selected
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          className
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-blue-600 dark:text-blue-400">
                          string
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        -
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Additional CSS classes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Type Definitions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Type Definitions
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  SwitchSize
                </h4>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <code className="text-blue-600 dark:text-blue-400">
                    "sm" | "md" | "lg"
                  </code>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  SwitchColor
                </h4>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <code className="text-blue-600 dark:text-blue-400">
                    "default" | "primary" | "secondary" | "success" | "warning"
                    | "danger"
                  </code>
                </div>
              </div>
            </div>

            {/* Slots */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Switch Slots
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Slot
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                        Target Element
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          base
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Main switch container
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          wrapper
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Switch track/background wrapper
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          thumb
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Switch thumb/handle element
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          label
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Switch label text
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          startContent
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Content displayed at start of switch
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          endContent
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Content displayed at end of switch
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          thumbIcon
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Custom icon within the thumb
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        <code className="text-pink-600 dark:text-pink-400">
                          hiddenInput
                        </code>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Hidden input element for form integration
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

