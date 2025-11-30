import { useState, useEffect } from "react";
import { Image } from "../Image";

export const BasicImage = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const images = [
    {
      id: 0,
      url: "https://www.heroui.com/images/hero-card-complete.jpeg",
      alt: "Image1",
    },
  ];

  const test = async () => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 5000);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Basic Usage
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Image
            key={image.id}
            alt={image.alt}
            src={image.url}
            width={300}
            height={200}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
