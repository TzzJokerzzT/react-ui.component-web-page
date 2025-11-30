import { Image } from "../Image";

export const CustomImage = () => {
  return (
    <section className="space-y-4">
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
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Custom border
          </p>
        </div>
        <div className="text-center">
          <Image
            src="https://www.heroui.com/images/hero-card-complete.jpeg"
            alt="Custom styling image"
            width={200}
            height={200}
            classNames={{
              wrapper: "border-2 border-dashed border-gray-300 p-2",
              img: "grayscale hover:grayscale-0 transition-all duration-300",
            }}
            radius="md"
            disableSkeleton
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Custom wrapper + grayscale effect
          </p>
        </div>
      </div>
    </section>
  );
};
