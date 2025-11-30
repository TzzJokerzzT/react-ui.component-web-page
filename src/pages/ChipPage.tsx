import { useState } from "react";
import { Chip } from "../components/Chip";
import type {
  ChipColor,
  ChipVariant,
  ChipSize,
  ChipRadius,
} from "../components/Chip";

/**
 * ChipPage - Comprehensive showcase of Chip component system
 * Demonstrates all variants, colors, sizes, radius options, and features following HeroUI design patterns
 */
const ChipPage = () => {
  const [chips, setChips] = useState([
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "Tailwind CSS" },
    { id: 4, label: "Next.js" },
  ]);

  const colors: ChipColor[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  const variants: ChipVariant[] = [
    "solid",
    "bordered",
    "light",
    "flat",
    "faded",
    "shadow",
    "dot",
  ];

  const sizes: ChipSize[] = ["sm", "md", "lg"];

  const radiusOptions: ChipRadius[] = ["none", "sm", "md", "lg", "full"];

  const handleChipClose = (chipId: number) => {
    setChips(chips.filter((chip) => chip.id !== chipId));
  };

  const resetChips = () => {
    setChips([
      { id: 1, label: "React" },
      { id: 2, label: "TypeScript" },
      { id: 3, label: "Tailwind CSS" },
      { id: 4, label: "Next.js" },
    ]);
  };

  // Sample Avatar component
  const Avatar = ({ src, alt }: { src: string; alt: string }) => (
    <img
      src={src}
      alt={alt}
      className="w-full h-full rounded-full object-cover"
    />
  );

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Chip Component System
        </h1>
        <p className="text-gray-600 mb-8">
          A comprehensive chip component following HeroUI design patterns. Chips
          are small blocks of essential information that represent an input,
          attribute, or action.
        </p>

        {/* Basic Examples */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Basic Examples
          </h2>
          <p className="text-gray-600 mb-4">
            Simple chip usage with different content and configurations.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip>Default Chip</Chip>
            <Chip color="primary">Primary</Chip>
            <Chip color="secondary">Secondary</Chip>
            <Chip color="success">Success</Chip>
            <Chip color="warning">Warning</Chip>
            <Chip color="danger">Danger</Chip>
          </div>
        </section>

        {/* Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Variants
          </h2>
          <p className="text-gray-600 mb-4">
            Different visual styles: solid, bordered, light, flat, faded,
            shadow, and dot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {variants.map((variant) => (
              <div key={variant} className="space-y-4 text-center">
                <Chip variant={variant} color="primary">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Chip>
                <p className="text-sm text-gray-500 font-medium">{variant}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Colors</h2>
          <p className="text-gray-600 mb-4">
            All available color themes for different contexts and meanings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color} className="space-y-4 text-center">
                <Chip color={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Chip>
                <p className="text-sm text-gray-500 font-medium">{color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sizes</h2>
          <p className="text-gray-600 mb-4">
            Different chip sizes: small, medium, and large.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {sizes.map((size) => (
              <div key={size} className="space-y-4 text-center">
                <Chip size={size} color="primary">
                  {size.toUpperCase()} Size
                </Chip>
                <p className="text-sm text-gray-500 font-medium">
                  {size.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Radius */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Radius</h2>
          <p className="text-gray-600 mb-4">
            Different border radius options: none, small, medium, large, and
            full.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {radiusOptions.map((radius) => (
              <div key={radius} className="space-y-4 text-center">
                <Chip radius={radius} color="secondary">
                  {radius === "none"
                    ? "No Radius"
                    : `${radius.toUpperCase()} Radius`}
                </Chip>
                <p className="text-sm text-gray-500 font-medium">{radius}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disabled State */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Disabled State
          </h2>
          <p className="text-gray-600 mb-4">
            Chips can be disabled to indicate they are not interactive.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip>Enabled Chip</Chip>
            <Chip isDisabled>Disabled Chip</Chip>
            <Chip color="primary" isDisabled>
              Disabled Primary
            </Chip>
            <Chip variant="bordered" color="success" isDisabled>
              Disabled Bordered
            </Chip>
          </div>
        </section>

        {/* Start & End Content */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Start & End Content
          </h2>
          <p className="text-gray-600 mb-4">
            Chips can have custom content at the start or end positions.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip
              startContent={<span className="text-lg">🚀</span>}
              color="primary"
            >
              With Start Icon
            </Chip>
            <Chip
              endContent={<span className="text-lg">✨</span>}
              color="success"
            >
              With End Icon
            </Chip>
            <Chip
              startContent={<span className="text-lg">💻</span>}
              endContent={<span className="text-lg">⚡</span>}
              color="warning"
            >
              Both Icons
            </Chip>
          </div>
        </section>

        {/* With Close Button */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            With Close Button
          </h2>
          <p className="text-gray-600 mb-4">
            Chips with close functionality for removable tags or filters. Click
            the × to remove chips.
          </p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <Chip
                  key={chip.id}
                  color="primary"
                  onClose={() => handleChipClose(chip.id)}
                >
                  {chip.label}
                </Chip>
              ))}
            </div>
            {chips.length === 0 && (
              <p className="text-gray-500 italic">All chips removed!</p>
            )}
            <button
              onClick={resetChips}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Reset Chips
            </button>
          </div>
        </section>

        {/* With Avatar */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            With Avatar
          </h2>
          <p className="text-gray-600 mb-4">
            Chips can include avatar images for user or entity representation.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip
              avatar={
                <Avatar
                  src="https://via.placeholder.com/32/4F46E5/FFFFFF?text=JD"
                  alt="John Doe"
                />
              }
              variant="flat"
              color="primary"
            >
              John Doe
            </Chip>
            <Chip
              avatar={
                <Avatar
                  src="https://via.placeholder.com/32/059669/FFFFFF?text=JS"
                  alt="Jane Smith"
                />
              }
              variant="bordered"
              color="success"
            >
              Jane Smith
            </Chip>
            <Chip
              avatar={
                <Avatar
                  src="https://via.placeholder.com/32/DC2626/FFFFFF?text=AB"
                  alt="Alice Brown"
                />
              }
              color="danger"
              onClose={() => console.log("Remove Alice")}
            >
              Alice Brown
            </Chip>
          </div>
        </section>

        {/* Dot Variant Examples */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Dot Variant
          </h2>
          <p className="text-gray-600 mb-4">
            The dot variant shows a colored indicator dot, perfect for status
            indicators.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip variant="dot" color="success">
              Online
            </Chip>
            <Chip variant="dot" color="warning">
              Away
            </Chip>
            <Chip variant="dot" color="danger">
              Busy
            </Chip>
            <Chip variant="dot" color="default">
              Offline
            </Chip>
            <Chip variant="dot" color="primary">
              Active
            </Chip>
            <Chip variant="dot" color="secondary">
              Inactive
            </Chip>
          </div>
        </section>

        {/* List of Chips */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Chip Lists
          </h2>
          <p className="text-gray-600 mb-4">
            Common patterns for displaying multiple chips in lists or groups.
          </p>

          <div className="space-y-6">
            {/* Skills List */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "GraphQL",
                  "AWS",
                  "Docker",
                  "MongoDB",
                  "PostgreSQL",
                ].map((skill) => (
                  <Chip key={skill} variant="flat" color="primary" size="sm">
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Frontend",
                  "Backend",
                  "DevOps",
                  "Database",
                  "Cloud",
                  "Testing",
                ].map((category) => (
                  <Chip key={category} variant="bordered" color="secondary">
                    {category}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Status Indicators */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Project Status
              </h3>
              <div className="flex flex-wrap gap-3">
                <Chip variant="dot" color="success">
                  Completed
                </Chip>
                <Chip variant="dot" color="warning">
                  In Progress
                </Chip>
                <Chip variant="dot" color="danger">
                  Blocked
                </Chip>
                <Chip variant="dot" color="default">
                  Not Started
                </Chip>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Styles */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Custom Styles
          </h2>
          <p className="text-gray-600 mb-4">
            Chips with custom styling using the classNames prop for different
            slots.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip
              classNames={{
                base: "bg-gradient-to-r from-purple-500 to-pink-500 border-none",
                content: "text-white font-bold",
              }}
            >
              Gradient Chip
            </Chip>
            <Chip
              classNames={{
                base: "border-2 border-dashed border-blue-300 bg-blue-50",
                content: "text-blue-600 font-semibold",
              }}
            >
              Dashed Border
            </Chip>
            <Chip
              onClose={() => console.log("Custom close")}
              classNames={{
                base: "bg-yellow-100 border border-yellow-300",
                content: "text-yellow-800",
                closeButton: "text-yellow-600 hover:text-yellow-800",
              }}
            >
              Custom Close
            </Chip>
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
                  <th className="text-left py-2 px-4 font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">children</td>
                  <td className="py-2 px-4">ReactNode</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">
                    The content to display inside the chip
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">variant</td>
                  <td className="py-2 px-4">
                    solid | bordered | light | flat | faded | shadow | dot
                  </td>
                  <td className="py-2 px-4">solid</td>
                  <td className="py-2 px-4">The visual style of the chip</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">color</td>
                  <td className="py-2 px-4">
                    default | primary | secondary | success | warning | danger
                  </td>
                  <td className="py-2 px-4">default</td>
                  <td className="py-2 px-4">The color theme of the chip</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">size</td>
                  <td className="py-2 px-4">sm | md | lg</td>
                  <td className="py-2 px-4">md</td>
                  <td className="py-2 px-4">The size of the chip</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">radius</td>
                  <td className="py-2 px-4">none | sm | md | lg | full</td>
                  <td className="py-2 px-4">full</td>
                  <td className="py-2 px-4">The border radius of the chip</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">avatar</td>
                  <td className="py-2 px-4">ReactNode</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">
                    Avatar element to display on the left
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">startContent</td>
                  <td className="py-2 px-4">ReactNode</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Content to display at the start</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">endContent</td>
                  <td className="py-2 px-4">ReactNode</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Content to display at the end</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">isDisabled</td>
                  <td className="py-2 px-4">boolean</td>
                  <td className="py-2 px-4">false</td>
                  <td className="py-2 px-4">Whether the chip is disabled</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">onClose</td>
                  <td className="py-2 px-4">(e: MouseEvent) =&gt; void</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Handler for close button click</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChipPage;

