import { Image } from "./Image";

/**
 * ImageExamples component showcasing various Image component features
 * Demonstrates different configurations, states, and use cases
 */
export const ImageExamples = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Image Component Examples
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          A comprehensive image component with support for lazy loading,
          fallback images, zoom effects, and blur effects.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Basic Usage
        </h2>
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
      </section>

      {/* Radius Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Radius Variants
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <Image
              src="https://picsum.photos/150/150?random=4"
              alt="No radius"
              width={150}
              height={150}
              radius="none"
            />
            <p className="mt-2 text-sm text-gray-600">none</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/150/150?random=5"
              alt="Small radius"
              width={150}
              height={150}
              radius="sm"
            />
            <p className="mt-2 text-sm text-gray-600">sm</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/150/150?random=6"
              alt="Medium radius"
              width={150}
              height={150}
              radius="md"
            />
            <p className="mt-2 text-sm text-gray-600">md</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/150/150?random=7"
              alt="Large radius"
              width={150}
              height={150}
              radius="lg"
            />
            <p className="mt-2 text-sm text-gray-600">lg</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/150/150?random=8"
              alt="Full radius"
              width={150}
              height={150}
              radius="full"
            />
            <p className="mt-2 text-sm text-gray-600">full</p>
          </div>
        </div>
      </section>

      {/* Shadow Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Shadow Variants
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Image
              src="https://picsum.photos/180/120?random=9"
              alt="No shadow"
              width={180}
              height={120}
              shadow="none"
            />
            <p className="mt-2 text-sm text-gray-600">none</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/180/120?random=10"
              alt="Small shadow"
              width={180}
              height={120}
              shadow="sm"
            />
            <p className="mt-2 text-sm text-gray-600">sm</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/180/120?random=11"
              alt="Medium shadow"
              width={180}
              height={120}
              shadow="md"
            />
            <p className="mt-2 text-sm text-gray-600">md</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/180/120?random=12"
              alt="Large shadow"
              width={180}
              height={120}
              shadow="lg"
            />
            <p className="mt-2 text-sm text-gray-600">lg</p>
          </div>
        </div>
      </section>

      {/* Blurred Effect */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Blurred Effect
        </h2>
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
            <p className="mt-2 text-sm text-gray-600">Normal</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/250/200?random=14"
              alt="Blurred image"
              width={250}
              height={200}
              isBlurred={true}
            />
            <p className="mt-2 text-sm text-gray-600">Blurred</p>
          </div>
        </div>
      </section>

      {/* Zoom Effect */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Zoom Effect
        </h2>
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
            <p className="mt-2 text-sm text-gray-600">Normal</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/250/200?random=16"
              alt="Zoomed image"
              width={250}
              height={200}
              isZoomed={true}
            />
            <p className="mt-2 text-sm text-gray-600">
              Zoomed (hover to see effect)
            </p>
          </div>
        </div>
      </section>

      {/* Fallback Images */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Fallback Images
        </h2>
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
            <p className="mt-2 text-sm text-gray-600">With fallback</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/250/200?random=18"
              alt="Normal working image"
              width={250}
              height={200}
            />
            <p className="mt-2 text-sm text-gray-600">Normal working image</p>
          </div>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Loading Behavior
        </h2>
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
            <p className="mt-2 text-sm text-gray-600">Lazy loading (default)</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/200/150?random=20"
              alt="Eager loading image"
              width={200}
              height={150}
              loading="eager"
            />
            <p className="mt-2 text-sm text-gray-600">Eager loading</p>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/200/150?random=21"
              alt="No skeleton image"
              width={200}
              height={150}
              disableSkeleton={true}
            />
            <p className="mt-2 text-sm text-gray-600">No skeleton</p>
          </div>
        </div>
      </section>

      {/* Combined Effects */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Combined Effects
        </h2>
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
            <p className="mt-2 text-sm text-gray-600">
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
            <p className="mt-2 text-sm text-gray-600">All effects combined</p>
          </div>
        </div>
      </section>

      {/* Custom Classes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Custom Styling
        </h2>
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
            <p className="mt-2 text-sm text-gray-600">Custom border</p>
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
            <p className="mt-2 text-sm text-gray-600">
              Custom wrapper + grayscale effect
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

