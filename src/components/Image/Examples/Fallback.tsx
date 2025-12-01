import { Image } from "../Image";

export const FallbackImage = () => {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Fallback Images
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        The first image has a broken URL but will show the fallback image.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <Image
            src="https://picsum.photos/250/200?random=19"
            alt="Image with fallback"
            width={250}
            height={200}
            fallbackSrc="https://picsum.photos/250/200?random=17"
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            With fallback
          </p>
        </div>
        <div className="text-center">
          <Image
            src="https://picsum.photos/250/200?random=18"
            alt="Normal working image"
            width={250}
            height={200}
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Normal working image
          </p>
        </div>
      </div>
    </section>
  );
};
