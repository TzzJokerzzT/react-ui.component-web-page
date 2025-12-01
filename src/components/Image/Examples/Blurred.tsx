import { Image } from "../Image";

export const BlurredImage = () => {
  return (
    <section className="space-y-4">
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
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Normal
          </p>
        </div>
        <div className="text-center">
          <Image
            src="https://picsum.photos/250/200?random=14"
            alt="Blurred image"
            width={250}
            height={200}
            isBlurred={true}
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Blurred
          </p>
        </div>
      </div>
    </section>
  );
};
