import { InputExamples } from "../components/Input/InputExamples";

/**
 * Input Page Component
 * Main page for showcasing the Input component with all examples and documentation
 */
export const InputPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Input Component
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive input component built with React and TypeScript, 
              following HeroUI design patterns. Features extensive customization, 
              validation, and accessibility support.
            </p>
          </div>
          
          {/* Quick Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="#basic-usage" 
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Basic Usage
            </a>
            <a 
              href="#variants" 
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Variants
            </a>
            <a 
              href="#validation" 
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Validation
            </a>
            <a 
              href="#customization" 
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Customization
            </a>
          </div>
        </div>
      </div>

      {/* API Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Variants</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• flat (default)</li>
                <li>• bordered</li>
                <li>• faded</li>
                <li>• underlined</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Colors</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• default</li>
                <li>• primary</li>
                <li>• secondary</li>
                <li>• success</li>
                <li>• warning</li>
                <li>• danger</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Sizes</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• sm</li>
                <li>• md (default)</li>
                <li>• lg</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Built-in validation</li>
                <li>• Custom validation</li>
                <li>• Clear button</li>
                <li>• Start/end content</li>
                <li>• Label positioning</li>
                <li>• Full accessibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation and Usage */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Installation & Basic Usage</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Import</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                <code>import &#123; Input &#125; from "./components/Input";</code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Basic Example</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                <code>{`<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
  isRequired
/>`}</code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">With Validation</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                <code>{`<Input
  label="Username"
  placeholder="Enter username"
  validate={(value) => {
    if (value.length < 3) return "Too short";
    return true;
  }}
/>`}</code>
              </div>
            </div>
          </div>
        </div>

        {/* Props Reference */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Props Reference</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Content Props */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    label
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Input label text or element
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    placeholder
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Input placeholder text
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    description
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Helper text displayed below the input
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    errorMessage
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode | ((validation) =&gt; ReactNode)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Error message - can be static or function
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    startContent
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Content to display at the start of the input
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    endContent
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Content to display at the end of the input
                  </td>
                </tr>
                
                {/* Value & Control */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    value
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Controlled input value
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    defaultValue
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Default value for uncontrolled input
                  </td>
                </tr>
                
                {/* Visual Properties */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    variant
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "flat" | "bordered" | "faded" | "underlined"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "flat"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Visual variant of the input
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    color
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "default" | "primary" | "secondary" | "success" | "warning" | "danger"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "default"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Color theme of the input
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    size
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "sm" | "md" | "lg"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "md"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Size variant of the input
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    radius
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "none" | "sm" | "md" | "lg" | "full"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "md"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Border radius of the input
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    labelPlacement
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "inside" | "outside" | "outside-left"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "inside"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Position of the label relative to the input
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    fullWidth
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    true
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether input takes full width of its container
                  </td>
                </tr>
                
                {/* Input Properties */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    type
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "text" | "email" | "url" | "password" | "tel" | "search" | "file" | "number"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "text"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    HTML input type
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    minLength
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Minimum length validation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    maxLength
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Maximum length validation
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    pattern
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Regular expression pattern for validation
                  </td>
                </tr>
                
                {/* State Properties */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    isRequired
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether the input is required
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    isDisabled
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether the input is disabled
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    isReadOnly
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether the input is read-only
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    isInvalid
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether the input has validation errors
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    isClearable
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether to show clear button when input has value
                  </td>
                </tr>
                
                {/* Animation & Styling */}
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    disableAnimation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether to disable animations
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    className
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Additional CSS classes to apply
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    classNames
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    InputClassNames
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Custom class names for different component parts
                  </td>
                </tr>
                
                {/* Validation */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    validate
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    (value: string) =&gt; ValidationError | true | null
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Custom validation function
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    validationBehavior
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "native" | "aria"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "native"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    How validation errors are presented
                  </td>
                </tr>
                
                {/* Events (showing key ones) */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    onChange
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    (event: ChangeEvent) =&gt; void
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Native change event handler
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    onValueChange
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    (value: string) =&gt; void
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Value change handler (HeroUI style)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    onClear
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    () =&gt; void
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Clear button click handler
                  </td>
                </tr>
                
                {/* Accessibility */}
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    data-testid
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Test ID for automated testing
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    aria-label
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    ARIA label for accessibility
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <InputExamples />

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            Built with React, TypeScript, and TailwindCSS following HeroUI design patterns
          </p>
        </div>
      </div>
    </div>
  );
};