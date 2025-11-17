import { useState } from "react";
import { Switch, SunIcon, MoonIcon } from "./index";

/**
 * Switch Code Examples Component
 * Comprehensive examples with code snippets showing Switch usage patterns
 */
export const SwitchCodeExamples = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [controlledValue, setControlledValue] = useState(false);

  const CodeBlock = ({ children, title }: { children: string; title: string }) => (
    <div className="bg-gray-900 rounded-lg p-4 mt-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm ml-2">{title}</span>
      </div>
      <pre className="text-green-400 text-sm overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );

  return (
    <div className="p-8 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Switch Component - Code Examples
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Comprehensive examples showing how to use the Switch component with code snippets.
        </p>

        {/* Basic Usage */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
            🚀 Basic Usage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Simple Switch</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
                <Switch>
                  Subscribe to newsletter
                </Switch>
              </div>
              <CodeBlock title="SimpleSwitch.tsx">
{`import { Switch } from './components/Switch';

export const SimpleSwitch = () => {
  return (
    <Switch>
      Subscribe to newsletter
    </Switch>
  );
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Default Selected</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
                <Switch defaultSelected>
                  Enable notifications
                </Switch>
              </div>
              <CodeBlock title="DefaultSelected.tsx">
{`import { Switch } from './components/Switch';

export const DefaultSelected = () => {
  return (
    <Switch defaultSelected>
      Enable notifications
    </Switch>
  );
};`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* Controlled vs Uncontrolled */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2">
            🎮 Controlled vs Uncontrolled
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Controlled Switch</h3>
              <div className="border rounded-lg p-4 bg-gray-50 space-y-2">
                <Switch
                  isSelected={controlledValue}
                  onValueChange={setControlledValue}
                >
                  Controlled Switch
                </Switch>
                <p className="text-sm text-gray-600">
                  Value: {controlledValue ? "ON" : "OFF"}
                </p>
              </div>
              <CodeBlock title="ControlledSwitch.tsx">
{`import { useState } from 'react';
import { Switch } from './components/Switch';

export const ControlledSwitch = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <Switch
        isSelected={value}
        onValueChange={setValue}
      >
        Controlled Switch
      </Switch>
      <p>Value: {value ? "ON" : "OFF"}</p>
    </div>
  );
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Uncontrolled Switch</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
                <Switch
                  defaultSelected={true}
                  onValueChange={(value) => 
                    console.log('Switch changed to:', value)
                  }
                >
                  Uncontrolled Switch
                </Switch>
              </div>
              <CodeBlock title="UncontrolledSwitch.tsx">
{`import { Switch } from './components/Switch';

export const UncontrolledSwitch = () => {
  return (
    <Switch
      defaultSelected={true}
      onValueChange={(value) => 
        console.log('Switch changed to:', value)
      }
    >
      Uncontrolled Switch
    </Switch>
  );
};`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* Sizes and Colors */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-purple-500 pb-2">
            🎨 Sizes & Colors
          </h2>
          
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">Different Sizes</h3>
            <div className="border rounded-lg p-4 bg-gray-50 flex items-center gap-6">
              <Switch size="sm" defaultSelected>Small</Switch>
              <Switch size="md" defaultSelected>Medium</Switch>
              <Switch size="lg" defaultSelected>Large</Switch>
            </div>
            <CodeBlock title="SwitchSizes.tsx">
{`import { Switch } from './components/Switch';

export const SwitchSizes = () => {
  return (
    <div className="flex items-center gap-6">
      <Switch size="sm" defaultSelected>Small</Switch>
      <Switch size="md" defaultSelected>Medium</Switch>
      <Switch size="lg" defaultSelected>Large</Switch>
    </div>
  );
};`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">Color Variants</h3>
            <div className="border rounded-lg p-4 bg-gray-50 flex flex-wrap gap-4">
              <Switch color="primary" defaultSelected>Primary</Switch>
              <Switch color="success" defaultSelected>Success</Switch>
              <Switch color="warning" defaultSelected>Warning</Switch>
              <Switch color="danger" defaultSelected>Danger</Switch>
            </div>
            <CodeBlock title="SwitchColors.tsx">
{`import { Switch } from './components/Switch';

export const SwitchColors = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Switch color="primary" defaultSelected>Primary</Switch>
      <Switch color="success" defaultSelected>Success</Switch>
      <Switch color="warning" defaultSelected>Warning</Switch>
      <Switch color="danger" defaultSelected>Danger</Switch>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* Icons and Custom Content */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-yellow-500 pb-2">
            ⭐ Icons & Custom Content
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Dark Mode Toggle</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
                <Switch
                  isSelected={darkMode}
                  onValueChange={setDarkMode}
                  thumbIcon={({ isSelected }) =>
                    isSelected ? (
                      <MoonIcon className="text-blue-600" />
                    ) : (
                      <SunIcon className="text-amber-500" />
                    )
                  }
                  color="primary"
                >
                  Dark Mode
                </Switch>
              </div>
              <CodeBlock title="DarkModeToggle.tsx">
{`import { useState } from 'react';
import { Switch, SunIcon, MoonIcon } from './components/Switch';

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Switch
      isSelected={darkMode}
      onValueChange={setDarkMode}
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <MoonIcon className="text-blue-600" />
        ) : (
          <SunIcon className="text-amber-500" />
        )
      }
      color="primary"
    >
      Dark Mode
    </Switch>
  );
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">With Start/End Content</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
                <Switch
                  startContent={<SunIcon className="w-4 h-4 text-amber-500" />}
                  endContent={<MoonIcon className="w-4 h-4 text-blue-600" />}
                  isSelected={darkMode}
                  onValueChange={setDarkMode}
                  color="success"
                >
                  Theme
                </Switch>
              </div>
              <CodeBlock title="ThemeSwitch.tsx">
{`import { useState } from 'react';
import { Switch, SunIcon, MoonIcon } from './components/Switch';

export const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Switch
      startContent={
        <SunIcon className="w-4 h-4 text-amber-500" />
      }
      endContent={
        <MoonIcon className="w-4 h-4 text-blue-600" />
      }
      isSelected={darkMode}
      onValueChange={setDarkMode}
      color="success"
    >
      Theme
    </Switch>
  );
};`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* Advanced Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2">
            🔥 Advanced Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Custom Styled Switch</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
                <Switch
                  classNames={{
                    base: "max-w-full",
                    wrapper: "group-data-[selected=true]:bg-gradient-to-r from-pink-500 to-purple-500",
                    thumb: "w-6 h-6 shadow-lg",
                    label: "text-purple-600 font-bold",
                  }}
                  defaultSelected
                >
                  Custom Styled
                </Switch>
              </div>
              <CodeBlock title="CustomStyledSwitch.tsx">
{`import { Switch } from './components/Switch';

export const CustomStyledSwitch = () => {
  return (
    <Switch
      classNames={{
        base: "max-w-full",
        wrapper: "group-data-[selected=true]:bg-gradient-to-r from-pink-500 to-purple-500",
        thumb: "w-6 h-6 shadow-lg",
        label: "text-purple-600 font-bold",
      }}
      defaultSelected
    >
      Custom Styled
    </Switch>
  );
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Text in Thumb</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
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
                  defaultSelected
                >
                  Power Mode
                </Switch>
              </div>
              <CodeBlock title="TextThumbSwitch.tsx">
{`import { Switch } from './components/Switch';

export const TextThumbSwitch = () => {
  return (
    <Switch
      size="lg"
      color="success"
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <span className="text-white font-bold text-xs">
            ON
          </span>
        ) : (
          <span className="text-gray-500 font-bold text-xs">
            OFF
          </span>
        )
      }
      defaultSelected
    >
      Power Mode
    </Switch>
  );
};`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-500 pb-2">
            🔒 States & Accessibility
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Disabled States</h3>
              <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
                <Switch isDisabled>Disabled Off</Switch>
                <Switch isDisabled defaultSelected>Disabled On</Switch>
              </div>
              <CodeBlock title="DisabledSwitches.tsx">
{`import { Switch } from './components/Switch';

export const DisabledSwitches = () => {
  return (
    <div className="space-y-3">
      <Switch isDisabled>Disabled Off</Switch>
      <Switch isDisabled defaultSelected>
        Disabled On
      </Switch>
    </div>
  );
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">Read Only</h3>
              <div className="border rounded-lg p-4 bg-gray-50">
                <Switch isReadOnly defaultSelected>
                  Read Only Switch
                </Switch>
              </div>
              <CodeBlock title="ReadOnlySwitch.tsx">
{`import { Switch } from './components/Switch';

export const ReadOnlySwitch = () => {
  return (
    <Switch isReadOnly defaultSelected>
      Read Only Switch
    </Switch>
  );
};`}
              </CodeBlock>
            </div>
          </div>
        </section>

        {/* Event Handling */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-indigo-500 pb-2">
            📡 Event Handling
          </h2>
          
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">Notification System</h3>
            <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
              <Switch
                isSelected={notifications}
                onValueChange={(value) => {
                  setNotifications(value);
                  if (value) {
                    console.log('✅ Notifications enabled');
                    // Here you could trigger actual notification permission
                  } else {
                    console.log('❌ Notifications disabled');
                  }
                }}
                color="primary"
              >
                Push Notifications
              </Switch>
              <p className="text-sm text-gray-600">
                Status: {notifications ? "✅ Enabled" : "❌ Disabled"}
              </p>
            </div>
            <CodeBlock title="NotificationSwitch.tsx">
{`import { useState } from 'react';
import { Switch } from './components/Switch';

export const NotificationSwitch = () => {
  const [notifications, setNotifications] = useState(false);

  const handleNotificationChange = (value: boolean) => {
    setNotifications(value);
    
    if (value) {
      console.log('✅ Notifications enabled');
      // Request notification permission
      // Notification.requestPermission();
    } else {
      console.log('❌ Notifications disabled');
    }
  };

  return (
    <div className="space-y-3">
      <Switch
        isSelected={notifications}
        onValueChange={handleNotificationChange}
        color="primary"
      >
        Push Notifications
      </Switch>
      <p className="text-sm text-gray-600">
        Status: {notifications ? "✅ Enabled" : "❌ Disabled"}
      </p>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* TypeScript Props */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2">
            📝 TypeScript Props Reference
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <CodeBlock title="SwitchProps.ts">
{`interface SwitchProps {
  // Content & Styling
  children?: ReactNode;              // Label text
  className?: string;                // Additional CSS classes
  classNames?: {                     // Custom styling for slots
    base?: string;
    wrapper?: string;
    thumb?: string;
    label?: string;
    startContent?: string;
    endContent?: string;
    thumbIcon?: string;
    hiddenInput?: string;
  };

  // Form Props
  value?: string;                    // Input value
  name?: string;                     // Input name

  // Variants
  size?: "sm" | "md" | "lg";        // Size variant
  color?: "default" | "primary" |    // Color theme
          "secondary" | "success" |
          "warning" | "danger";

  // Content
  thumbIcon?: ComponentType<{        // Custom thumb icon
    isSelected?: boolean;
    className?: string;
  }>;
  startContent?: ReactNode;          // Left side content
  endContent?: ReactNode;            // Right side content

  // State Control
  isSelected?: boolean;              // Controlled state
  defaultSelected?: boolean;         // Initial state (uncontrolled)

  // Behavior
  isReadOnly?: boolean;              // Read-only mode
  isDisabled?: boolean;              // Disabled state
  disableAnimation?: boolean;        // Disable animations

  // Events
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;

  // Accessibility
  "data-testid"?: string;           // Test identifier
}`}
            </CodeBlock>
          </div>
        </section>

        {/* Footer */}
        <section className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            🎉 Ready to Use!
          </h3>
          <p className="text-gray-600 mb-4">
            The Switch component is fully functional and supports all the features shown above. 
            You can click anywhere on the switch area to toggle its state.
          </p>
          <div className="flex items-center gap-4">
            <Switch
              color="success"
              thumbIcon={({ isSelected }) => isSelected ? "✓" : "○"}
              defaultSelected
            >
              Fully Functional!
            </Switch>
          </div>
        </section>
      </div>
    </div>
  );
};