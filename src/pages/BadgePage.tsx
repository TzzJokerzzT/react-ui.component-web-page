import { Badge } from "../components/Badge";
import type {
  BadgeColor,
  BadgeVariant,
  BadgeSize,
  BadgeShape,
  BadgePlacement,
} from "../components/Badge";

/**
 * BadgePage - Comprehensive showcase of Badge component system
 * Demonstrates all variants, colors, sizes, shapes, placements, and features following HeroUI design patterns
 */
const BadgePage = () => {
  const colors: BadgeColor[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  const variants: BadgeVariant[] = ["solid", "flat", "faded", "shadow"];

  const sizes: BadgeSize[] = ["sm", "md", "lg"];

  const shapes: BadgeShape[] = ["rectangle", "circle"];

  const placements: BadgePlacement[] = [
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
  ];

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Badge Component System
        </h1>
        <p className="text-gray-600 mb-8">
          A comprehensive badge component following HeroUI design patterns with
          multiple variants, colors, sizes, shapes, and placement options for
          notifications and status indicators.
        </p>

        {/* Basic Examples */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Basic Examples
          </h2>
          <p className="text-gray-600 mb-4">
            Simple badge usage with different content types and configurations.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <Badge content="5">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                📧
              </div>
            </Badge>
            <Badge content="99+">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                Inbox
              </div>
            </Badge>
            <Badge content="NEW" color="success">
              <div className="px-4 py-2 bg-gray-100 rounded-md">
                Feature Update
              </div>
            </Badge>
            <Badge content="!" color="danger" shape="circle">
              <div className="w-8 h-8 bg-gray-300 rounded-md flex items-center justify-center">
                ⚠️
              </div>
            </Badge>
          </div>
        </section>

        {/* Standalone Badges */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Standalone Badges
          </h2>
          <p className="text-gray-600 mb-4">
            Badges can be used without children as standalone elements.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Badge content="Online" color="success" />
            <Badge content="Offline" color="default" />
            <Badge content="Busy" color="warning" />
            <Badge content="Away" color="secondary" />
            <Badge content="Error" color="danger" />
            <Badge content="Premium" color="primary" />
          </div>
        </section>

        {/* Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Variants</h2>
          <p className="text-gray-600 mb-4">
            Different visual styles: solid, flat, faded, and shadow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {variants.map((variant) => (
              <div key={variant} className="space-y-4 text-center">
                <Badge content="8" variant={variant} color="primary">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg">
                    📱
                  </div>
                </Badge>
                <p className="text-sm text-gray-500 font-medium">{variant}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Colors</h2>
          <p className="text-gray-600 mb-4">
            All available color themes for different states and contexts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((color) => (
              <div key={color} className="space-y-4 text-center">
                <Badge content="3" color={color}>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                    🔔
                  </div>
                </Badge>
                <p className="text-sm text-gray-500 font-medium">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sizes</h2>
          <p className="text-gray-600 mb-4">
            Different badge sizes: small, medium, and large.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {sizes.map((size) => (
              <div key={size} className="space-y-4 text-center">
                <Badge content="7" size={size} color="primary">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg">
                    💌
                  </div>
                </Badge>
                <p className="text-sm text-gray-500 font-medium">
                  {size.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Shapes */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shapes</h2>
          <p className="text-gray-600 mb-4">
            Different badge shapes: rectangle and circle.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {shapes.map((shape) => (
              <div key={shape} className="space-y-4 text-center">
                <Badge content="9" shape={shape} color="success">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg">
                    🎯
                  </div>
                </Badge>
                <p className="text-sm text-gray-500 font-medium">
                  {shape.charAt(0).toUpperCase() + shape.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Placements */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Placements
          </h2>
          <p className="text-gray-600 mb-4">
            Different badge positions relative to the children element.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placements.map((placement) => (
              <div key={placement} className="space-y-4 text-center">
                <Badge content="5" placement={placement} color="danger">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xl border-2 border-gray-300">
                    📦
                  </div>
                </Badge>
                <p className="text-sm text-gray-500 font-medium">
                  {placement.replace("-", " ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Special Features */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Special Features
          </h2>
          <p className="text-gray-600 mb-4">
            Additional badge features: outline, invisible state, and single character optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 text-center">
              <Badge content="2" showOutline color="primary">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-lg">
                  👤
                </div>
              </Badge>
              <p className="text-sm text-gray-500 font-medium">With Outline</p>
            </div>

            <div className="space-y-4 text-center">
              <Badge content="5" isInvisible>
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg">
                  🔕
                </div>
              </Badge>
              <p className="text-sm text-gray-500 font-medium">Invisible</p>
            </div>

            <div className="space-y-4 text-center">
              <Badge content="A" shape="circle" color="secondary">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg">
                  📝
                </div>
              </Badge>
              <p className="text-sm text-gray-500 font-medium">Single Char</p>
            </div>

            <div className="space-y-4 text-center">
              <Badge content="!" disableAnimation color="warning">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg">
                  ⚡
                </div>
              </Badge>
              <p className="text-sm text-gray-500 font-medium">No Animation</p>
            </div>
          </div>
        </section>

        {/* Complex Examples */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Complex Examples
          </h2>
          <p className="text-gray-600 mb-4">
            Real-world usage examples combining different features and styles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Notification Example */}
            <div className="space-y-4 text-center">
              <Badge content="12" variant="shadow" color="danger" showOutline>
                <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl shadow-md">
                  📱
                </div>
              </Badge>
              <p className="text-sm text-gray-600">Message Notifications</p>
            </div>

            {/* Status Badge */}
            <div className="space-y-4 text-center">
              <Badge
                content="●"
                variant="flat"
                color="success"
                shape="circle"
                size="sm"
                placement="bottom-right"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="https://via.placeholder.com/48/4F46E5/FFFFFF?text=U"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Badge>
              <p className="text-sm text-gray-600">Online Status</p>
            </div>

            {/* Shopping Cart */}
            <div className="space-y-4 text-center">
              <Badge
                content="3"
                variant="solid"
                color="primary"
                size="lg"
                shape="circle"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
                  🛒
                </div>
              </Badge>
              <p className="text-sm text-gray-600">Shopping Cart</p>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Props Reference
          </h2>
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
                  <td className="py-2 px-4 font-mono">content</td>
                  <td className="py-2 px-4">ReactNode</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">The content to display in the badge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">variant</td>
                  <td className="py-2 px-4">solid | flat | faded | shadow</td>
                  <td className="py-2 px-4">solid</td>
                  <td className="py-2 px-4">The visual style of the badge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">color</td>
                  <td className="py-2 px-4">default | primary | secondary | success | warning | danger</td>
                  <td className="py-2 px-4">default</td>
                  <td className="py-2 px-4">The color theme of the badge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">size</td>
                  <td className="py-2 px-4">sm | md | lg</td>
                  <td className="py-2 px-4">md</td>
                  <td className="py-2 px-4">The size of the badge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">shape</td>
                  <td className="py-2 px-4">rectangle | circle</td>
                  <td className="py-2 px-4">rectangle</td>
                  <td className="py-2 px-4">The shape of the badge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">placement</td>
                  <td className="py-2 px-4">top-right | top-left | bottom-right | bottom-left</td>
                  <td className="py-2 px-4">top-right</td>
                  <td className="py-2 px-4">Position relative to children</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">showOutline</td>
                  <td className="py-2 px-4">boolean</td>
                  <td className="py-2 px-4">false</td>
                  <td className="py-2 px-4">Whether to show outline around badge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">isInvisible</td>
                  <td className="py-2 px-4">boolean</td>
                  <td className="py-2 px-4">false</td>
                  <td className="py-2 px-4">Whether the badge should be invisible</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">disableAnimation</td>
                  <td className="py-2 px-4">boolean</td>
                  <td className="py-2 px-4">false</td>
                  <td className="py-2 px-4">Whether to disable scale animation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BadgePage;