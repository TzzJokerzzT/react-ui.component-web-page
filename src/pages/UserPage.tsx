import { useState } from "react";
import { UserExamples } from "../components/User/UserExamples";
import { User } from "../components/User";

/**
 * User Page Component
 * Main page to showcase User component functionality
 */
export const UserPage = () => {
  const [viewMode, setViewMode] = useState<"examples" | "documentation">("examples");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation between different views */}
      <div className="p-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">User Component</h1>
          <p className="text-lg text-gray-600 mb-6">
            Display user information with avatars, names, and descriptions. Perfect for user profiles, 
            team lists, comments, and any interface that shows user data.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <User
                name="Examples"
                description="Interactive examples"
                isFocusable
                onClick={() => setViewMode("examples")}
                avatarProps={{
                  name: "Examples",
                  color: viewMode === "examples" ? "primary" : "default",
                  size: "sm"
                }}
                className={`cursor-pointer transition-all ${
                  viewMode === "examples" 
                    ? "bg-blue-50 border-2 border-blue-200 rounded-lg p-2" 
                    : "p-2 hover:bg-gray-50 rounded-lg"
                }`}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <User
                name="Documentation"
                description="Usage & API"
                isFocusable
                onClick={() => setViewMode("documentation")}
                avatarProps={{
                  name: "Documentation",
                  color: viewMode === "documentation" ? "secondary" : "default",
                  size: "sm"
                }}
                className={`cursor-pointer transition-all ${
                  viewMode === "documentation" 
                    ? "bg-purple-50 border-2 border-purple-200 rounded-lg p-2" 
                    : "p-2 hover:bg-gray-50 rounded-lg"
                }`}
              />
            </div>
          </div>
          
          <p className="text-gray-600 mt-4">
            Current view: <strong>
              {viewMode === "examples" && "Interactive Examples"}
              {viewMode === "documentation" && "Documentation & API"}
            </strong>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {viewMode === "examples" && <UserExamples />}
        {viewMode === "documentation" && <UserDocumentation />}
      </div>
    </div>
  );
};

/**
 * User Documentation Component
 * Provides comprehensive documentation for the User component
 */
const UserDocumentation = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">User Component Documentation</h2>
        
        {/* Basic Usage */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Usage</h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`import { User } from './components/User';

// Basic user display
<User 
  name="Jane Doe"
  description="Product Designer"
  avatarProps={{
    src: "https://example.com/avatar.jpg"
  }}
/>

// User with initials fallback
<User 
  name="John Smith"
  description="Frontend Developer"
  avatarProps={{
    name: "John Smith"
  }}
/>`}</code>
            </pre>
          </div>
        </section>

        {/* Props API */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Props API</h3>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h4 className="text-lg font-medium text-gray-900">User Props</h4>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left pb-2 font-medium text-gray-900">Prop</th>
                      <th className="text-left pb-2 font-medium text-gray-900">Type</th>
                      <th className="text-left pb-2 font-medium text-gray-900">Required</th>
                      <th className="text-left pb-2 font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">name</td>
                      <td className="py-2 text-gray-600">string</td>
                      <td className="py-2 text-gray-600">No</td>
                      <td className="py-2 text-gray-600">Display name for the user</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">description</td>
                      <td className="py-2 text-gray-600">ReactNode</td>
                      <td className="py-2 text-gray-600">No</td>
                      <td className="py-2 text-gray-600">Additional information (job title, status, etc.)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">isFocusable</td>
                      <td className="py-2 text-gray-600">boolean</td>
                      <td className="py-2 text-gray-600">No</td>
                      <td className="py-2 text-gray-600">Makes the user component clickable and focusable</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">onClick</td>
                      <td className="py-2 text-gray-600">() =&gt; void</td>
                      <td className="py-2 text-gray-600">No</td>
                      <td className="py-2 text-gray-600">Click handler (requires isFocusable=true)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">avatarProps</td>
                      <td className="py-2 text-gray-600">AvatarProps</td>
                      <td className="py-2 text-gray-600">No</td>
                      <td className="py-2 text-gray-600">Props for the avatar component</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">classNames</td>
                      <td className="py-2 text-gray-600">UserClassNames</td>
                      <td className="py-2 text-gray-600">No</td>
                      <td className="py-2 text-gray-600">Custom classes for different parts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mt-6">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h4 className="text-lg font-medium text-gray-900">Avatar Props</h4>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left pb-2 font-medium text-gray-900">Prop</th>
                      <th className="text-left pb-2 font-medium text-gray-900">Type</th>
                      <th className="text-left pb-2 font-medium text-gray-900">Default</th>
                      <th className="text-left pb-2 font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">src</td>
                      <td className="py-2 text-gray-600">string</td>
                      <td className="py-2 text-gray-600">-</td>
                      <td className="py-2 text-gray-600">Image source URL</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">alt</td>
                      <td className="py-2 text-gray-600">string</td>
                      <td className="py-2 text-gray-600">-</td>
                      <td className="py-2 text-gray-600">Image alt text</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">name</td>
                      <td className="py-2 text-gray-600">string</td>
                      <td className="py-2 text-gray-600">""</td>
                      <td className="py-2 text-gray-600">Name for generating initials</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">size</td>
                      <td className="py-2 text-gray-600">"sm" | "md" | "lg"</td>
                      <td className="py-2 text-gray-600">"md"</td>
                      <td className="py-2 text-gray-600">Avatar size</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">color</td>
                      <td className="py-2 text-gray-600">"default" | "primary" | "secondary" | "success" | "warning" | "danger"</td>
                      <td className="py-2 text-gray-600">"default"</td>
                      <td className="py-2 text-gray-600">Avatar background color</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">isSquared</td>
                      <td className="py-2 text-gray-600">boolean</td>
                      <td className="py-2 text-gray-600">false</td>
                      <td className="py-2 text-gray-600">Square corners instead of circular</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">isDisabled</td>
                      <td className="py-2 text-gray-600">boolean</td>
                      <td className="py-2 text-gray-600">false</td>
                      <td className="py-2 text-gray-600">Disabled state styling</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-mono text-blue-600">fallback</td>
                      <td className="py-2 text-gray-600">ReactNode</td>
                      <td className="py-2 text-gray-600">-</td>
                      <td className="py-2 text-gray-600">Custom fallback content</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Common Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Team Member Lists</h4>
              <p className="text-gray-600 mb-4">Display team members with roles and contact information.</p>
              <div className="bg-gray-50 rounded p-3">
                <User 
                  name="Sarah Wilson"
                  description="Engineering Manager"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=sarah",
                    size: "sm"
                  }}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Comment Systems</h4>
              <p className="text-gray-600 mb-4">Show user information in comments and discussions.</p>
              <div className="bg-gray-50 rounded p-3">
                <User 
                  name="Mike Johnson"
                  description="2 hours ago"
                  avatarProps={{
                    name: "Mike Johnson",
                    color: "primary",
                    size: "sm"
                  }}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-3">User Profiles</h4>
              <p className="text-gray-600 mb-4">Display user profile information with status indicators.</p>
              <div className="bg-gray-50 rounded p-3">
                <User 
                  name="Emily Chen"
                  description={
                    <span className="flex items-center gap-2">
                      <span>Product Manager</span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600">Online</span>
                      </span>
                    </span>
                  }
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=emily"
                  }}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Interactive Lists</h4>
              <p className="text-gray-600 mb-4">Clickable user items for navigation and selection.</p>
              <div className="bg-gray-50 rounded p-3">
                <User 
                  name="Alex Rodriguez"
                  description="View Profile →"
                  isFocusable
                  onClick={() => alert("Profile clicked!")}
                  avatarProps={{
                    name: "Alex Rodriguez",
                    color: "secondary"
                  }}
                  className="hover:bg-white transition-colors cursor-pointer rounded p-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Styling Guide */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Styling Guide</h3>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-3">Custom Styling</h4>
            <p className="text-gray-600 mb-4">
              The User component supports custom styling through the <code className="bg-gray-100 px-1 rounded">classNames</code> prop:
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`<User 
  name="Custom Styled User"
  description="With custom classes"
  classNames={{
    base: "bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg",
    name: "text-purple-900 font-bold",
    description: "text-purple-600",
    wrapper: "ml-4"
  }}
  avatarProps={{
    name: "Custom User",
    className: "border-2 border-purple-300"
  }}
/>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility</h3>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Proper ARIA roles when <code className="bg-gray-100 px-1 rounded">isFocusable=true</code></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Keyboard navigation support (Enter and Space keys)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Focus management with proper tabIndex handling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Alt text support for avatar images</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Test IDs for automated testing</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Enhanced Props Reference */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Enhanced Props Reference</h3>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            
            {/* Main User Props */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">User</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Prop</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Type</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Default</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">name</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Name of the user to display</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">description</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">ReactNode</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description or subtitle of the user (job title, status, etc.)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">isFocusable</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether the user component is focusable and clickable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">avatarProps</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">AvatarProps</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Props to pass to the avatar component</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">className</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Additional CSS classes to apply</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">classNames</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">UserSlots</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom class names for different slots</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">onClick</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">() =&gt; void</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Click handler for the user component (requires isFocusable=true)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">data-testid</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Test ID for testing frameworks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Avatar Props */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">AvatarProps</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Prop</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Type</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Default</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">src</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Source URL for the avatar image</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">alt</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Alt text for accessibility</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">name</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Name to display when image is not available (shows initials)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">size</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">"sm" | "md" | "lg"</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"md"</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Size variant of the avatar</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">className</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">string</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom CSS classes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">isSquared</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether the avatar should be squared</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">color</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">"default" | "primary" | "secondary" | "success" | "warning" | "danger"</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"default"</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Color variant</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">isDisabled</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">boolean</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>false</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether the avatar is disabled</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">fallback</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-blue-600 dark:text-blue-400">ReactNode</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom fallback element</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* User Slots */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">User Slots</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Slot</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Target Element</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">base</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Main user container</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">wrapper</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Text content wrapper (name + description)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">name</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">User name text element</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="text-pink-600 dark:text-pink-400">description</code></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">User description/subtitle element</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};