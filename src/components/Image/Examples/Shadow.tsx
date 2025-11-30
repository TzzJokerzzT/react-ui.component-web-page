import { Image } from "../Image";

export const ShadowImage = () => {
  return (
    <section className="space-y-4">
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
    </section>
  );
};
