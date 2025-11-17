import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "../components/Autocomplete";
import type {
  AutocompleteColor,
  AutocompleteVariant,
  AutocompleteSize,
  AutocompleteLabelPlacement,
  AutocompleteItemData,
} from "../components/Autocomplete";

/**
 * AutocompletePage - Comprehensive showcase of Autocomplete component system
 * Demonstrates all variants, colors, sizes, and features following HeroUI design patterns
 */
const AutocompletePage = () => {
  // Sample data sets for different examples
  const animals: AutocompleteItemData[] = [
    {
      key: "cat",
      label: "Cat",
      description: "A small domesticated carnivorous mammal",
    },
    { key: "dog", label: "Dog", description: "A loyal four-legged companion" },
    {
      key: "elephant",
      label: "Elephant",
      description: "The largest land animal",
    },
    { key: "lion", label: "Lion", description: "The king of the jungle" },
    {
      key: "tiger",
      label: "Tiger",
      description: "A large wild cat with stripes",
    },
    { key: "bear", label: "Bear", description: "A large omnivorous mammal" },
    { key: "wolf", label: "Wolf", description: "A wild carnivorous canine" },
    {
      key: "fox",
      label: "Fox",
      description: "A cunning small to medium-sized omnivore",
    },
    {
      key: "rabbit",
      label: "Rabbit",
      description: "A small herbivorous mammal",
    },
    {
      key: "deer",
      label: "Deer",
      description: "A graceful hoofed ruminant animal",
    },
  ];

  const countries: AutocompleteItemData[] = [
    { key: "us", label: "United States", description: "North America" },
    { key: "ca", label: "Canada", description: "North America" },
    { key: "uk", label: "United Kingdom", description: "Europe" },
    { key: "fr", label: "France", description: "Europe" },
    { key: "de", label: "Germany", description: "Europe" },
    { key: "jp", label: "Japan", description: "Asia" },
    { key: "au", label: "Australia", description: "Oceania" },
    { key: "br", label: "Brazil", description: "South America" },
  ];

  const programming: AutocompleteItemData[] = [
    {
      key: "js",
      label: "JavaScript",
      description: "Dynamic programming language",
    },
    {
      key: "ts",
      label: "TypeScript",
      description: "Typed superset of JavaScript",
    },
    {
      key: "python",
      label: "Python",
      description: "High-level programming language",
    },
    {
      key: "java",
      label: "Java",
      description: "Object-oriented programming language",
    },
    {
      key: "csharp",
      label: "C#",
      description: "Microsoft's object-oriented language",
    },
    { key: "rust", label: "Rust", description: "Systems programming language" },
    { key: "go", label: "Go", description: "Google's compiled language" },
    {
      key: "swift",
      label: "Swift",
      description: "Apple's modern programming language",
    },
  ];

  const colors: AutocompleteColor[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  const variants: AutocompleteVariant[] = [
    "flat",
    "bordered",
    "faded",
    "underlined",
  ];
  const sizes: AutocompleteSize[] = ["sm", "md", "lg"];
  const labelPlacements: AutocompleteLabelPlacement[] = [
    "inside",
    "outside",
    "outside-left",
  ];

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Autocomplete Component System
        </h1>
        <p className="text-gray-600 mb-8">
          A comprehensive autocomplete/combobox component following HeroUI
          design patterns with advanced filtering, keyboard navigation, and full
          accessibility support.
        </p>

        {/* Basic Example */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Basic Example
          </h2>
          <p className="text-gray-600 mb-4">
            Simple autocomplete with predefined items and default configuration.
          </p>
          <div className="max-w-xs">
            <Autocomplete
              label="Favorite Animal"
              placeholder="Search animals..."
              items={animals}
            />
          </div>
        </section>

        {/* Variants */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Variants
          </h2>
          <p className="text-gray-600 mb-4">
            Different visual styles: flat, bordered, faded, and underlined.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {variants.map((variant) => (
              <div key={variant} className="space-y-2 pb-32">
                {" "}
                {/* Added padding bottom for dropdown space */}
                <Autocomplete
                  variant={variant}
                  label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Style`}
                  placeholder="Search..."
                  items={animals.slice(0, 5)}
                />
                <p className="text-sm text-gray-500 text-center">{variant}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Colors</h2>
          <p className="text-gray-600 mb-4">
            All available color themes for focus states and validation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.map((color) => (
              <div key={color} className="space-y-2 pb-32">
                {" "}
                {/* Added padding bottom for dropdown space */}
                <Autocomplete
                  color={color}
                  label={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
                  placeholder="Search..."
                  items={countries.slice(0, 4)}
                />
                <p className="text-sm text-gray-500 text-center">{color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sizes</h2>
          <p className="text-gray-600 mb-4">
            Three different size options: small, medium, and large.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sizes.map((size) => (
              <div key={size} className="space-y-2 pb-32">
                {" "}
                {/* Added padding bottom for dropdown space */}
                <Autocomplete
                  size={size}
                  label={`${size.toUpperCase()} Size`}
                  placeholder="Search..."
                  items={programming.slice(0, 4)}
                />
                <p className="text-sm text-gray-500 text-center">{size}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Label Placement */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Label Placement
          </h2>
          <p className="text-gray-600 mb-4">
            Different label positioning options for various layout needs.
          </p>
          <div className="space-y-6">
            {labelPlacements.map((placement) => (
              <div key={placement} className="max-w-md">
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  {placement
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </h3>
                <Autocomplete
                  labelPlacement={placement}
                  label="Programming Language"
                  placeholder="Search languages..."
                  items={programming.slice(0, 5)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* States */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">States</h2>
          <p className="text-gray-600 mb-4">
            Different component states: disabled, readonly, required, and
            invalid.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 pb-32">
              {" "}
              {/* Added padding bottom for dropdown space */}
              <Autocomplete
                label="Disabled"
                placeholder="Cannot interact"
                items={animals.slice(0, 3)}
                isDisabled
              />
              <Autocomplete
                label="Read Only"
                placeholder="Cannot edit"
                items={animals.slice(0, 3)}
                isReadOnly
                defaultSelectedKey="cat"
              />
            </div>
            <div className="space-y-4 pb-32">
              {" "}
              {/* Added padding bottom for dropdown space */}
              <Autocomplete
                label="Required"
                placeholder="Must select"
                items={animals.slice(0, 3)}
                isRequired
              />
              <Autocomplete
                label="Invalid"
                placeholder="Has error"
                items={animals.slice(0, 3)}
                isInvalid
                errorMessage="Please select a valid option"
              />
            </div>
          </div>
        </section>

        {/* Descriptions and Helpers */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Descriptions & Helper Text
          </h2>
          <p className="text-gray-600 mb-4">
            Adding context and guidance with descriptions and error messages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Autocomplete
              label="Country Selection"
              placeholder="Choose your country"
              description="Select the country where you currently reside"
              items={countries}
            />
            <Autocomplete
              label="Invalid Selection"
              placeholder="This field has an error"
              isInvalid
              errorMessage="Please select a valid country from the list"
              items={countries}
            />
          </div>
        </section>

        {/* Custom Content */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Custom Content
          </h2>
          <p className="text-gray-600 mb-4">
            Using start and end content for enhanced functionality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Autocomplete
              label="Search with Icon"
              placeholder="Search animals..."
              startContent={
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
              items={animals}
            />
            <Autocomplete
              label="With End Content"
              placeholder="Programming language..."
              endContent={
                <div className="text-xs text-gray-400 px-1">/100</div>
              }
              items={programming}
            />
          </div>
        </section>

        {/* Sections & Groups */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Grouped Items
          </h2>
          <p className="text-gray-600 mb-4">
            Organizing items into logical sections with headings.
          </p>
          <div className="max-w-md">
            <Autocomplete
              label="Browse Topics"
              placeholder="Search categories..."
            >
              <AutocompleteSection title="Animals">
                {animals.slice(0, 4).map((animal) => (
                  <AutocompleteItem key={animal.key} textValue={animal.label}>
                    <div>
                      <div className="font-medium">{animal.label}</div>
                      <div className="text-sm text-gray-500">
                        {animal.description}
                      </div>
                    </div>
                  </AutocompleteItem>
                ))}
              </AutocompleteSection>

              <AutocompleteSection title="Countries">
                {countries.slice(0, 4).map((country) => (
                  <AutocompleteItem key={country.key} textValue={country.label}>
                    <div>
                      <div className="font-medium">{country.label}</div>
                      <div className="text-sm text-gray-500">
                        {country.description}
                      </div>
                    </div>
                  </AutocompleteItem>
                ))}
              </AutocompleteSection>

              <AutocompleteSection title="Programming">
                {programming.slice(0, 4).map((lang) => (
                  <AutocompleteItem key={lang.key} textValue={lang.label}>
                    <div>
                      <div className="font-medium">{lang.label}</div>
                      <div className="text-sm text-gray-500">
                        {lang.description}
                      </div>
                    </div>
                  </AutocompleteItem>
                ))}
              </AutocompleteSection>
            </Autocomplete>
          </div>
        </section>

        {/* Controlled vs Uncontrolled */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Usage Patterns
          </h2>
          <p className="text-gray-600 mb-4">
            Different ways to use the component: controlled, uncontrolled, and
            with default values.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                With Default Selection
              </h3>
              <Autocomplete
                label="Default Selected"
                placeholder="Has default value"
                defaultSelectedKey="js"
                items={programming}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Allow Custom Values
              </h3>
              <Autocomplete
                label="Custom Input"
                placeholder="Type anything..."
                allowsCustomValue
                items={programming}
              />
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Advanced Features
          </h2>
          <p className="text-gray-600 mb-4">
            Specialized configurations for different use cases.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Non-clearable
              </h3>
              <div className="max-w-xs">
                <Autocomplete
                  label="Cannot Clear"
                  placeholder="No clear button"
                  isClearable={false}
                  defaultSelectedKey="cat"
                  items={animals.slice(0, 5)}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Disabled Animation
              </h3>
              <div className="max-w-xs">
                <Autocomplete
                  label="No Animations"
                  placeholder="Instant transitions"
                  disableAnimation
                  items={animals.slice(0, 5)}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Custom Selector Icon
              </h3>
              <div className="max-w-xs">
                <Autocomplete
                  label="Custom Icon"
                  placeholder="Different dropdown icon"
                  selectorIcon={
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  }
                  items={programming.slice(0, 5)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility & Keyboard Navigation */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Accessibility & Keyboard Navigation
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">
              Keyboard Shortcuts
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>
                <kbd className="bg-blue-200 px-2 py-1 rounded text-xs">
                  ↓ / ↑
                </kbd>{" "}
                Navigate between options
              </li>
              <li>
                <kbd className="bg-blue-200 px-2 py-1 rounded text-xs">
                  Enter
                </kbd>{" "}
                Select focused option
              </li>
              <li>
                <kbd className="bg-blue-200 px-2 py-1 rounded text-xs">
                  Escape
                </kbd>{" "}
                Close dropdown
              </li>
              <li>
                <kbd className="bg-blue-200 px-2 py-1 rounded text-xs">Tab</kbd>{" "}
                Move to next form element
              </li>
            </ul>
          </div>
        </section>

        {/* Props Reference */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Props Reference
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Complete reference of all available props for the Autocomplete component.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Default</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content items for static lists</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">label</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Label for the autocomplete field</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">placeholder</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">"Search..."</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Placeholder text for the input</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">variant</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'flat' | 'bordered' | 'faded' | 'underlined'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'flat'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Visual style variant</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">color</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'default'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Color theme for focus states</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">size</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'sm' | 'md' | 'lg'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'md'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Size variant</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">labelPlacement</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'inside' | 'outside' | 'outside-left'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'inside'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Label positioning</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">items</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Iterable&lt;T&gt;</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Items collection for dynamic lists</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">defaultItems</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Iterable&lt;T&gt;</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Default items for uncontrolled usage</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">inputValue</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Controlled input value</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">defaultInputValue</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Default input value for uncontrolled usage</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">selectedKey</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Key</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Controlled selected key</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">defaultSelectedKey</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Key</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Default selected key for uncontrolled usage</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">allowsCustomValue</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Allow custom values not in the list</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">allowsEmptyCollection</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Allow empty collections</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">shouldCloseOnBlur</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">true</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Close popover on blur</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">description</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Description text</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">errorMessage</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode | function</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Error message for validation</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">menuTrigger</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'focus' | 'input' | 'manual'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'input'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">When to trigger menu opening</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">startContent</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content to display at the start of input</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">endContent</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content to display at the end of input</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">selectorIcon</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">ChevronDownIcon</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom selector icon</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">clearIcon</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">XMarkIcon</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom clear icon</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isDisabled</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the autocomplete is disabled</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isReadOnly</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the autocomplete is read-only</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isRequired</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the autocomplete is required</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isInvalid</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the autocomplete is invalid</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isClearable</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">true</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the autocomplete can be cleared</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">fullWidth</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">true</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to take full width</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">disableAnimation</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Disable animations</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">disableSelectorIconRotation</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Disable selector icon rotation</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">autoFocus</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Auto focus the input</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">defaultFilter</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">FilterFunction</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom filter function</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isVirtualized</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Enable virtualization for large lists</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">maxListboxHeight</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">256</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Maximum listbox height for virtualization</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">showScrollIndicators</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Show scroll indicators</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Additional CSS classes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">classNames</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">AutocompleteSlots</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom class names for component slots</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onSelectionChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(key: Key) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Handler for selection changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onInputChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(value: string) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Handler for input value changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onOpenChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(isOpen: boolean) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Handler for open state changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onFocus</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(e: FocusEvent) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Handler for focus events</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onBlur</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(e: FocusEvent) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Handler for blur events</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onClear</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">() =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Handler for clear button clicks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AutocompletePage;

