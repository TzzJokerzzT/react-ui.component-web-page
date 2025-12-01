import { Image } from "../Image";

export const RadiusImage = () => {
  return (
    <section className="space-y-4">
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
            disableSkeleton
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
            disableSkeleton
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
            disableSkeleton
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
            disableSkeleton
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
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">full</p>
        </div>
      </div>
    </section>
  );
};
