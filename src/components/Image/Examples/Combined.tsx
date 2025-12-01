import { Image } from "../Image";

export const CombinedImage = () => {
  return (
    <section className="space-y-4">
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
            isBlurred
            shadow="lg"
            radius="lg"
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Blurred + Shadow
          </p>
        </div>
        <div className="text-center">
          <Image
            src="https://picsum.photos/280/200?random=23"
            alt="Full effects image"
            width={280}
            height={200}
            isBlurred
            shadow="lg"
            radius="full"
            fallbackSrc="https://picsum.photos/280/200?random=24"
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            All effects combined
          </p>
        </div>
      </div>
    </section>
  );
};
