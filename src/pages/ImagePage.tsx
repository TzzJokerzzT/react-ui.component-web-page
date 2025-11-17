import { Image } from "../components/Image/Image";

/**
 * ImagePage component showcasing the Image component with comprehensive documentation
 * Demonstrates various configurations, states, and use cases with detailed Props Reference
 */
const ImagePage = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Image Component
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          A comprehensive image component with support for lazy loading,
          fallback images, zoom effects, and blur effects.
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
                    src
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Image source URL (required)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    srcSet
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Image source set for responsive images
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    sizes
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Image sizes attribute for responsive images
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    alt
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Alternative text for the image (required)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    width
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Image width in pixels
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    height
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Image height in pixels
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
                    Border radius variant
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    shadow
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "none" | "sm" | "md" | "lg"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "none"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Shadow variant
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    loading
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "eager" | "lazy"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "lazy"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Loading behavior
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    fallbackSrc
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Fallback image source URL when main image fails to load
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isBlurred
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether to apply blur effect
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    isZoomed
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether to enable zoom on hover
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    removeWrapper
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether to remove the wrapper div
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    disableSkeleton
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Whether to disable skeleton loading animation
                  </td>
                </tr>
                <tr>
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
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    classNames
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Record&lt;"img" | "wrapper" | "zoomedWrapper" | "blurredImg", string&gt;
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Custom class names for different component slots
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    onLoad
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    ReactEventHandler&lt;HTMLImageElement&gt;
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Image load event handler
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    onError
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    () =&gt; void
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Image error event handler
                  </td>
                </tr>
                <tr>
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

        {/* Type Definitions */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Type Definitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">ImageRadius</h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "none" | "sm" | "md" | "lg" | "full"
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">ImageShadow</h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "none" | "sm" | "md" | "lg"
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">ImageLoading</h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "eager" | "lazy"
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Examples
        </h2>

        {/* Basic Usage */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Basic Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src="https://picsum.photos/300/200?random=1"
              alt="Basic image example"
              width={300}
              height={200}
            />
            <Image
              src="https://picsum.photos/300/200?random=2"
              alt="Basic image with different aspect ratio"
              width={300}
              height={200}
            />
            <Image
              src="https://picsum.photos/300/200?random=3"
              alt="Basic image square"
              width={300}
              height={200}
            />
          </div>
        </div>

        {/* Radius Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Radius Variants
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <Image
                src="https://picsum.photos/150/150?random=4"
                alt="No radius"
                width={150}
                height={150}
                radius="none"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">none</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/150/150?random=5"
                alt="Small radius"
                width={150}
                height={150}
                radius="sm"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">sm</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/150/150?random=6"
                alt="Medium radius"
                width={150}
                height={150}
                radius="md"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">md</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/150/150?random=7"
                alt="Large radius"
                width={150}
                height={150}
                radius="lg"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">lg</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/150/150?random=8"
                alt="Full radius"
                width={150}
                height={150}
                radius="full"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">full</p>
            </div>
          </div>
        </div>

        {/* Shadow Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Shadow Variants
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Image
                src="https://picsum.photos/180/120?random=9"
                alt="No shadow"
                width={180}
                height={120}
                shadow="none"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">none</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/180/120?random=10"
                alt="Small shadow"
                width={180}
                height={120}
                shadow="sm"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">sm</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/180/120?random=11"
                alt="Medium shadow"
                width={180}
                height={120}
                shadow="md"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">md</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/180/120?random=12"
                alt="Large shadow"
                width={180}
                height={120}
                shadow="lg"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">lg</p>
            </div>
          </div>
        </div>

        {/* Blurred Effect */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Blurred Effect
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The blur effect creates a duplicate image behind the main image for a
            depth effect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Image
                src="https://picsum.photos/250/200?random=13"
                alt="Normal image"
                width={250}
                height={200}
                isBlurred={false}
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Normal</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/250/200?random=14"
                alt="Blurred image"
                width={250}
                height={200}
                isBlurred={true}
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Blurred</p>
            </div>
          </div>
        </div>

        {/* Zoom Effect */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Zoom Effect
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hover over the zoomed image to see the effect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Image
                src="https://picsum.photos/250/200?random=15"
                alt="Normal image"
                width={250}
                height={200}
                isZoomed={false}
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Normal</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/250/200?random=16"
                alt="Zoomed image"
                width={250}
                height={200}
                isZoomed={true}
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Zoomed (hover to see effect)
              </p>
            </div>
          </div>
        </div>

        {/* Fallback Images */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Fallback Images
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The first image has a broken URL but will show the fallback image.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Image
                src="https://broken-url-that-does-not-exist.jpg"
                alt="Image with fallback"
                width={250}
                height={200}
                fallbackSrc="https://picsum.photos/250/200?random=17"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">With fallback</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/250/200?random=18"
                alt="Normal working image"
                width={250}
                height={200}
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Normal working image</p>
            </div>
          </div>
        </div>

        {/* Loading States */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Loading Behavior
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Images show skeleton loading animation by default. You can disable it
            or use eager loading.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Image
                src="https://picsum.photos/200/150?random=19"
                alt="Lazy loading image"
                width={200}
                height={150}
                loading="lazy"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lazy loading (default)</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/200/150?random=20"
                alt="Eager loading image"
                width={200}
                height={150}
                loading="eager"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Eager loading</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/200/150?random=21"
                alt="No skeleton image"
                width={200}
                height={150}
                disableSkeleton={true}
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">No skeleton</p>
            </div>
          </div>
        </div>

        {/* Combined Effects */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Combined Effects
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Combining multiple effects for enhanced visual appeal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Image
                src="https://picsum.photos/280/200?random=22"
                alt="Blurred and zoomed image"
                width={280}
                height={200}
                isBlurred={true}
                isZoomed={true}
                shadow="lg"
                radius="lg"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Blurred + Zoomed + Shadow
              </p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/280/200?random=23"
                alt="Full effects image"
                width={280}
                height={200}
                isBlurred={true}
                isZoomed={true}
                shadow="lg"
                radius="full"
                fallbackSrc="https://picsum.photos/280/200?random=24"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">All effects combined</p>
            </div>
          </div>
        </div>

        {/* Custom Classes */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Custom Styling
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You can apply custom classes to different parts of the component.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Image
                src="https://picsum.photos/200/200?random=25"
                alt="Custom border image"
                width={200}
                height={200}
                className="border-4 border-blue-500"
                radius="lg"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Custom border</p>
            </div>
            <div className="text-center">
              <Image
                src="https://picsum.photos/200/200?random=26"
                alt="Custom styling image"
                width={200}
                height={200}
                classNames={{
                  wrapper: "border-2 border-dashed border-gray-300 p-2",
                  img: "grayscale hover:grayscale-0 transition-all duration-300",
                }}
                radius="md"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Custom wrapper + grayscale effect
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagePage;