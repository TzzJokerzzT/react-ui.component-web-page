import { useState } from "react";
import { Checkbox } from "./Checkbox";
import type { CheckboxIconProps } from "./types";

/**
 * Custom heart icon component for checkbox
 */
const HeartIcon = ({ isSelected, className }: CheckboxIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isSelected ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

/**
 * Custom star icon component for checkbox
 */
const StarIcon = ({ isSelected, className }: CheckboxIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isSelected ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
};

/**
 * CheckboxExamples component showcasing various Checkbox component features
 * Demonstrates different configurations, states, and use cases
 */
export const CheckboxExamples = () => {
  const [controlled, setControlled] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Checkbox Component Examples
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          A comprehensive checkbox component with support for multiple sizes, colors, states, and custom icons.
        </p>
      </div>

      {/* Props Reference Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Props Reference
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    children
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Content to render as checkbox label
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    icon
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    React.ComponentType&lt;CheckboxIconProps&gt;
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Custom icon component to replace default checkmark
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    value
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Value attribute for the checkbox input
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    name
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Name attribute for the checkbox input
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    size
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "sm" | "md" | "lg"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "md"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Size variant of the checkbox
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    color
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "default" | "primary" | "secondary" | "success" | "warning" | "danger"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "default"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Color theme of the checkbox
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    radius
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "none" | "sm" | "md" | "lg" | "full"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "md"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Border radius of the checkbox
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    lineThrough
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Show line-through effect on label when checked
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isSelected
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether the checkbox is selected (controlled)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    defaultSelected
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Default selected state (uncontrolled)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isRequired
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether the checkbox is required
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isReadOnly
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether the checkbox is read-only
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isDisabled
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether the checkbox is disabled
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isIndeterminate
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether the checkbox is in indeterminate state
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isInvalid
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether the checkbox is invalid
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    validationState
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "valid" | "invalid"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Validation state of the checkbox
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    disableAnimation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether to disable hover and focus animations
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    className
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Additional CSS classes to apply
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    classNames
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Record&lt;"base" | "wrapper" | "icon" | "label" | "hiddenInput", string&gt;
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Custom class names for different component slots
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    onChange
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    (event: ChangeEvent) =&gt; void
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Native change event handler
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    onValueChange
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    (isSelected: boolean) =&gt; void
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Value change event handler
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    data-testid
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Test ID for testing frameworks
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Basic Usage
        </h2>
        <div className="flex flex-wrap gap-4">
          <Checkbox>Default checkbox</Checkbox>
          <Checkbox defaultSelected>Pre-selected</Checkbox>
          <Checkbox isDisabled>Disabled</Checkbox>
          <Checkbox isDisabled defaultSelected>Disabled selected</Checkbox>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <Checkbox size="sm" defaultSelected>Small</Checkbox>
          <Checkbox size="md" defaultSelected>Medium</Checkbox>
          <Checkbox size="lg" defaultSelected>Large</Checkbox>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Colors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Checkbox color="default" defaultSelected>Default</Checkbox>
          <Checkbox color="primary" defaultSelected>Primary</Checkbox>
          <Checkbox color="secondary" defaultSelected>Secondary</Checkbox>
          <Checkbox color="success" defaultSelected>Success</Checkbox>
          <Checkbox color="warning" defaultSelected>Warning</Checkbox>
          <Checkbox color="danger" defaultSelected>Danger</Checkbox>
        </div>
      </section>

      {/* Radius Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Radius Variants
        </h2>
        <div className="flex flex-wrap gap-6">
          <Checkbox radius="none" defaultSelected>None</Checkbox>
          <Checkbox radius="sm" defaultSelected>Small</Checkbox>
          <Checkbox radius="md" defaultSelected>Medium</Checkbox>
          <Checkbox radius="lg" defaultSelected>Large</Checkbox>
          <Checkbox radius="full" defaultSelected>Full</Checkbox>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          States
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Normal States</h3>
            <Checkbox>Unchecked</Checkbox>
            <Checkbox defaultSelected>Checked</Checkbox>
            <Checkbox isRequired>Required</Checkbox>
            <Checkbox isReadOnly defaultSelected>Read-only</Checkbox>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Error States</h3>
            <Checkbox isInvalid>Invalid</Checkbox>
            <Checkbox isInvalid defaultSelected>Invalid checked</Checkbox>
            <Checkbox validationState="invalid">Validation error</Checkbox>
            <Checkbox validationState="valid" defaultSelected>Valid</Checkbox>
          </div>
        </div>
      </section>

      {/* Indeterminate State */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Indeterminate State
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Click the checkbox to toggle between indeterminate, checked, and unchecked states.
        </p>
        <div className="space-y-3">
          <Checkbox
            isIndeterminate={indeterminate}
            onValueChange={(checked) => {
              if (indeterminate) {
                setIndeterminate(false);
              } else if (!checked) {
                setIndeterminate(true);
              }
            }}
          >
            Indeterminate checkbox
          </Checkbox>
          <Checkbox isIndeterminate color="success">
            Always indeterminate
          </Checkbox>
          <Checkbox isIndeterminate color="danger" size="lg">
            Large indeterminate
          </Checkbox>
        </div>
      </section>

      {/* Line Through Effect */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Line Through Effect
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Labels get a strikethrough effect when checked.
        </p>
        <div className="space-y-3">
          <Checkbox lineThrough>Task item 1</Checkbox>
          <Checkbox lineThrough defaultSelected>Task item 2 (completed)</Checkbox>
          <Checkbox lineThrough>Task item 3</Checkbox>
          <Checkbox lineThrough color="success">Success task</Checkbox>
        </div>
      </section>

      {/* Custom Icons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Custom Icons
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Replace the default checkmark with custom icons.
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Checkbox icon={HeartIcon} color="danger">
              Like this post
            </Checkbox>
            <Checkbox icon={HeartIcon} color="danger" defaultSelected>
              Already liked
            </Checkbox>
          </div>
          <div className="flex flex-wrap gap-4">
            <Checkbox icon={StarIcon} color="warning">
              Add to favorites
            </Checkbox>
            <Checkbox icon={StarIcon} color="warning" defaultSelected>
              Already favorited
            </Checkbox>
          </div>
        </div>
      </section>

      {/* Controlled Component */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Controlled Component
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Checkbox state controlled by React state. Current value: {controlled ? "checked" : "unchecked"}
        </p>
        <div className="space-y-3">
          <Checkbox
            isSelected={controlled}
            onValueChange={setControlled}
          >
            Controlled checkbox
          </Checkbox>
          <button
            onClick={() => setControlled(!controlled)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Toggle Programmatically
          </button>
        </div>
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Custom Styling
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Customize different parts of the checkbox with custom classes.
        </p>
        <div className="space-y-4">
          <Checkbox
            classNames={{
              wrapper: "border-purple-500 data-[selected=true]:bg-purple-500 data-[selected=true]:border-purple-500",
              icon: "text-white",
              label: "text-purple-700 font-medium",
            }}
            defaultSelected
          >
            Custom purple checkbox
          </Checkbox>
          <Checkbox
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
            classNames={{
              wrapper: "border-green-500 data-[selected=true]:bg-green-500 shadow-lg",
              label: "text-green-700 font-semibold text-lg",
            }}
            defaultSelected
          >
            Fully custom styled checkbox
          </Checkbox>
        </div>
      </section>

      {/* Animation Control */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Animation Control
        </h2>
        <div className="flex flex-wrap gap-6">
          <Checkbox defaultSelected>
            With animations
          </Checkbox>
          <Checkbox defaultSelected disableAnimation>
            Without animations
          </Checkbox>
        </div>
      </section>

      {/* Form Integration */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Form Integration
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Checkboxes work seamlessly with forms and form libraries.
        </p>
        <form className="space-y-3">
          <Checkbox name="newsletter" value="yes">
            Subscribe to newsletter
          </Checkbox>
          <Checkbox name="terms" value="accepted" isRequired>
            I agree to the terms and conditions *
          </Checkbox>
          <Checkbox name="marketing" value="yes" defaultSelected>
            Allow marketing communications
          </Checkbox>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Submit Form
          </button>
        </form>
      </section>

      {/* Large Collection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Checkbox List
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Example of a list with multiple checkboxes for selection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl">
          {[
            "JavaScript",
            "TypeScript", 
            "React",
            "Vue.js",
            "Angular",
            "Svelte",
            "Next.js",
            "Nuxt.js",
            "Node.js",
            "Python",
            "Go",
            "Rust"
          ].map((tech) => (
            <Checkbox key={tech} color="primary" value={tech.toLowerCase()}>
              {tech}
            </Checkbox>
          ))}
        </div>
      </section>
    </div>
  );
};