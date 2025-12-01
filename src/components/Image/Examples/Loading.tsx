import { Image } from "../Image";

export const LoadingImage = () => {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Loading Behavior
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Images show skeleton loading animation by default. You can disable it or
        use eager loading.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <Image
            src="https://picsum.photos/200/150?random=19"
            alt="Lazy loading image"
            width={200}
            height={150}
            loading="lazy"
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lazy loading (default)
          </p>
        </div>
        <div className="text-center">
          <Image
            src="https://picsum.photos/200/150?random=20"
            alt="Eager loading image"
            width={200}
            height={150}
            loading="eager"
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Eager loading
          </p>
        </div>
        <div className="text-center">
          <Image
            src="https://picsum.photos/200/150?random=21"
            alt="No skeleton image"
            width={200}
            height={150}
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            No skeleton
          </p>
        </div>
      </div>
    </section>
  );
};
