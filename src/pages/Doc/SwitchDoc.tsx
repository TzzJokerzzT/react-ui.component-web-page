export const SwitchDoc = () => {
  return (
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
                  "default" | "primary" | "secondary" | "success" | "warning" |
                  "danger"
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
                  Custom class names for component slots (base, wrapper, thumb,
                  label, startContent, endContent, thumbIcon, hiddenInput)
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
  );
};
