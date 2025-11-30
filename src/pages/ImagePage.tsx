import { ImageExamples } from "@/components/Image/ImageExamples";
import PagesLayout from "@/layout/PagesLayout";
import { ImageDoc } from "./Doc/ImageDoc";

/**
 * ImagePage component showcasing the Image component with comprehensive documentation
 * Demonstrates various configurations, states, and use cases with detailed Props Reference
 */
const ImagePage = () => {
  return (
    <PagesLayout
      title="Image Component"
      explanation="A comprehensive image component with support for lazy loading, fallback images, zoom effects, and blur effects."
    >
      <ImageExamples />

      <ImageDoc />
    </PagesLayout>
  );
};

export default ImagePage;

