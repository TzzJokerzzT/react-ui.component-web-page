import ExamplesLayout from "@/layout/ExamplesLayout";
import { BlurredImage } from "./Examples/Blurred";
import { BasicImage } from "./Examples/Basic";
import { CombinedImage } from "./Examples/Combined";
import { CustomImage } from "./Examples/Custom";
import { FallbackImage } from "./Examples/Fallback";
import { LoadingImage } from "./Examples/Loading";
import { RadiusImage } from "./Examples/Radius";
import { ShadowImage } from "./Examples/Shadow";
import { ZoomImage } from "./Examples/Zoom";

/**
 * ImageExamples component showcasing various Image component features
 * Demonstrates different configurations, states, and use cases
 */
export const ImageExamples = () => {
  return (
    <ExamplesLayout>
      {/* Basic Usage */}
      <BasicImage />

      {/* Radius Variants */}
      <RadiusImage />

      {/* Shadow Variants */}
      <ShadowImage />

      {/* Blurred Effect */}
      <BlurredImage />

      {/* Zoom Effect */}
      <ZoomImage />

      {/* Fallback Images */}
      <FallbackImage />

      {/* Loading States */}
      <LoadingImage />

      {/* Combined Effects */}
      <CombinedImage />

      {/* Custom Classes */}
      <CustomImage />
    </ExamplesLayout>
  );
};
