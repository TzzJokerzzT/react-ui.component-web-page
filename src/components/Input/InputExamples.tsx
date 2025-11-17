import { useState } from "react";
import { Input } from "./index";

/**
 * Input Examples Component
 * Demonstrates all Input component configurations and usage patterns
 * Following HeroUI documentation examples
 */
export const InputExamples = () => {
  // State for controlled examples
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [realtimeEmail, setRealtimeEmail] = useState("");
  

  
  // Email validation function
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return true;
  };
  
  // Custom validation example
  const validateUsername = (value: string) => {
    if (value.length < 3) return "Username must be at least 3 characters";
    if (!/^[a-zA-Z0-9_]+$/.test(value)) return "Username can only contain letters, numbers, and underscores";
    return true;
  };
  
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Input Component Examples
      </h1>

      {/* Basic Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Basic Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Email"
            placeholder="Enter your email"
            data-testid="basic-input"
          />
          <Input
            label="Name"
            placeholder="Enter your name"
            defaultValue="John Doe"
            data-testid="basic-input-with-value"
          />
        </div>
      </section>

      {/* Disabled and Read Only */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Disabled & Read Only</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Disabled Input"
            placeholder="This input is disabled"
            isDisabled
            data-testid="disabled-input"
          />
          <Input
            label="Read Only Input"
            value="This value cannot be edited"
            isReadOnly
            data-testid="readonly-input"
          />
        </div>
      </section>

      {/* Required */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Required Field</h2>
        <div className="max-w-md">
          <Input
            label="Required Field"
            placeholder="This field is required"
            isRequired
            data-testid="required-input"
          />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Sizes</h2>
        <div className="space-y-4">
          <Input
            size="sm"
            label="Small"
            placeholder="Small input"
            data-testid="small-input"
          />
          <Input
            size="md"
            label="Medium (Default)"
            placeholder="Medium input"
            data-testid="medium-input"
          />
          <Input
            size="lg"
            label="Large"
            placeholder="Large input"
            data-testid="large-input"
          />
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input
            color="default"
            label="Default"
            placeholder="Default color"
            data-testid="default-color-input"
          />
          <Input
            color="primary"
            label="Primary"
            placeholder="Primary color"
            data-testid="primary-color-input"
          />
          <Input
            color="secondary"
            label="Secondary"
            placeholder="Secondary color"
            data-testid="secondary-color-input"
          />
          <Input
            color="success"
            label="Success"
            placeholder="Success color"
            data-testid="success-color-input"
          />
          <Input
            color="warning"
            label="Warning"
            placeholder="Warning color"
            data-testid="warning-color-input"
          />
          <Input
            color="danger"
            label="Danger"
            placeholder="Danger color"
            data-testid="danger-color-input"
          />
        </div>
      </section>

      {/* Variants */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            variant="flat"
            label="Flat (Default)"
            placeholder="Flat variant"
            data-testid="flat-input"
          />
          <Input
            variant="bordered"
            label="Bordered"
            placeholder="Bordered variant"
            data-testid="bordered-input"
          />
          <Input
            variant="faded"
            label="Faded"
            placeholder="Faded variant"
            data-testid="faded-input"
          />
          <Input
            variant="underlined"
            label="Underlined"
            placeholder="Underlined variant"
            data-testid="underlined-input"
          />
        </div>
      </section>

      {/* Radius */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Radius</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input
            radius="none"
            label="None"
            placeholder="No radius"
            data-testid="none-radius-input"
          />
          <Input
            radius="sm"
            label="Small"
            placeholder="Small radius"
            data-testid="sm-radius-input"
          />
          <Input
            radius="md"
            label="Medium (Default)"
            placeholder="Medium radius"
            data-testid="md-radius-input"
          />
          <Input
            radius="lg"
            label="Large"
            placeholder="Large radius"
            data-testid="lg-radius-input"
          />
          <Input
            radius="full"
            label="Full"
            placeholder="Full radius"
            data-testid="full-radius-input"
          />
        </div>
      </section>

      {/* Label Placements */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Label Placements</h2>
        <div className="space-y-6">
          <Input
            labelPlacement="inside"
            label="Inside (Default)"
            placeholder="Label inside input"
            data-testid="inside-label-input"
          />
          <Input
            labelPlacement="outside"
            label="Outside"
            placeholder="Label outside input"
            data-testid="outside-label-input"
          />
          <Input
            labelPlacement="outside-left"
            label="Outside Left"
            placeholder="Label on the left"
            data-testid="outside-left-label-input"
          />
        </div>
      </section>

      {/* Password Input */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Password Input</h2>
        <div className="max-w-md space-y-4">
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onValueChange={setPassword}
            data-testid="password-input"
          />
          <p className="text-sm text-gray-600">
            Current password: {password ? "•".repeat(password.length) : "(empty)"}
          </p>
        </div>
      </section>

      {/* Clear Button */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Clear Button</h2>
        <div className="max-w-md space-y-4">
          <Input
            label="Search"
            placeholder="Type to see clear button"
            isClearable
            value={searchTerm}
            onValueChange={setSearchTerm}
            onClear={() => console.log("Cleared!")}
            data-testid="clearable-input"
          />
          <p className="text-sm text-gray-600">
            Search term: "{searchTerm}"
          </p>
        </div>
      </section>

      {/* Start & End Content */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Start & End Content</h2>
        <div className="space-y-4">
          <Input
            label="Website"
            placeholder="mysite"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">https://</span>
              </div>
            }
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">.com</span>
              </div>
            }
            data-testid="start-end-content-input"
          />
          
          <Input
            label="Price"
            placeholder="0.00"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
            endContent={
              <div className="flex items-center">
                <span className="text-default-400 text-small">USD</span>
              </div>
            }
            type="number"
            data-testid="price-input"
          />
          
          <Input
            label="Search"
            placeholder="Type to search..."
            startContent={
              <svg className="w-4 h-4 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            data-testid="search-input"
          />
        </div>
      </section>

      {/* With Description */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">With Description</h2>
        <div className="max-w-md">
          <Input
            label="Username"
            placeholder="Enter username"
            description="Username must be unique and contain only letters, numbers, and underscores"
            data-testid="input-with-description"
          />
        </div>
      </section>

      {/* With Error Message */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">With Error Message</h2>
        <div className="space-y-4">
          {/* Static error message */}
          <Input
            label="Email"
            placeholder="Enter email"
            isInvalid
            errorMessage="Please enter a valid email address"
            data-testid="input-with-error"
          />
          
          {/* Dynamic error message with regex validation */}
          <Input
            label="Email (with validation)"
            placeholder="Enter email"
            value={email}
            onValueChange={setEmail}
            validate={validateEmail}
            data-testid="email-validation-input"
          />
        </div>
      </section>

      {/* Controlled Input */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Controlled Input</h2>
        <div className="max-w-md space-y-4">
          <Input
            label="Username"
            placeholder="Enter username"
            value={username}
            onValueChange={setUsername}
            description="You can control this input externally"
            data-testid="controlled-input"
          />
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              onClick={() => setUsername("john_doe")}
            >
              Set to "john_doe"
            </button>
            <button
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
              onClick={() => setUsername("")}
            >
              Clear
            </button>
          </div>
          <p className="text-sm text-gray-600">Current value: "{username}"</p>
        </div>
      </section>

      {/* Built-in Validation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Built-in Validation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="email"
            label="Email"
            placeholder="Enter email"
            isRequired
            data-testid="builtin-email-validation"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            isRequired
            minLength={8}
            data-testid="builtin-password-validation"
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="Enter phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            data-testid="builtin-phone-validation"
          />
          <Input
            label="Website"
            type="url"
            placeholder="Enter website URL"
            data-testid="builtin-url-validation"
          />
        </div>
      </section>

      {/* Custom Validation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Validation</h2>
        <div className="max-w-md">
          <Input
            label="Username"
            placeholder="Enter username"
            validate={validateUsername}
            description="Username must be at least 3 characters and contain only letters, numbers, and underscores"
            data-testid="custom-validation-input"
          />
        </div>
      </section>

      {/* Realtime Validation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Realtime Validation</h2>
        <div className="max-w-md">
          <Input
            type="email"
            label="Email (Realtime)"
            placeholder="Enter email to see realtime validation"
            value={realtimeEmail}
            onValueChange={setRealtimeEmail}
            isInvalid={realtimeEmail !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(realtimeEmail)}
            errorMessage={
              realtimeEmail !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(realtimeEmail)
                ? "Please enter a valid email address"
                : ""
            }
            data-testid="realtime-validation-input"
          />
        </div>
      </section>

      {/* Custom Styling */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Styling</h2>
        <div className="space-y-4">
          <Input
            label="Custom Styled Input"
            placeholder="This input has custom styling"
            classNames={{
              base: "bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl",
              label: "text-purple-900 font-bold",
              inputWrapper: "bg-white border-2 border-purple-200 hover:border-purple-400 shadow-lg",
              input: "text-purple-900 placeholder:text-purple-400",
              description: "text-purple-600"
            }}
            description="This demonstrates custom class names for different slots"
            data-testid="custom-styled-input"
          />
          
          <Input
            variant="bordered"
            color="secondary"
            size="lg"
            radius="full"
            label="Stylish Input"
            placeholder="Bordered, secondary, large, full radius"
            startContent={
              <span className="text-purple-500">✨</span>
            }
            endContent={
              <span className="text-purple-500">✨</span>
            }
            data-testid="stylish-input"
          />
        </div>
      </section>

      {/* Real-world Form Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Real-world Form Example</h2>
        <div className="max-w-2xl">
          <form className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">User Registration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="Enter first name"
                isRequired
                data-testid="form-first-name"
              />
              <Input
                label="Last Name"
                placeholder="Enter last name"
                isRequired
                data-testid="form-last-name"
              />
            </div>
            
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter email address"
              isRequired
              startContent={
                <svg className="w-4 h-4 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              }
              data-testid="form-email"
            />
            
            <Input
              type="password"
              label="Password"
              placeholder="Create a strong password"
              isRequired
              minLength={8}
              description="Password must be at least 8 characters long"
              data-testid="form-password"
            />
            
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Enter phone number"
              startContent={
                <span className="text-default-400">+1</span>
              }
              data-testid="form-phone"
            />
            
            <Input
              label="Company (Optional)"
              placeholder="Enter company name"
              startContent={
                <svg className="w-4 h-4 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
                </svg>
              }
              data-testid="form-company"
            />
            
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register
              </button>
              <button
                type="reset"
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Accessibility Features</h2>
        <div className="space-y-4">
          <Input
            label="Accessible Input"
            placeholder="This input has full accessibility support"
            description="Try using keyboard navigation and screen readers"
            aria-label="Example accessible input field"
            data-testid="accessible-input"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Accessibility Features:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Built with native HTML input elements</li>
              <li>• Proper ARIA labeling and descriptions</li>
              <li>• Keyboard navigation support</li>
              <li>• Screen reader compatibility</li>
              <li>• Focus management and visual indicators</li>
              <li>• Error state communication to assistive technology</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};