import ExamplesLayout from "@/layout/ExamplesLayout";
import { BasicCard } from "./Examples/Basic";
import { ComposedCard } from "./Examples/Composed";
import { InteractiveCard } from "./Examples/Interactive";
import { RealWorldCard } from "./Examples/RealWorld";
import { SizeCard } from "./Examples/Size";
import { VariantCard } from "./Examples/Variant";

/**
 * Example component demonstrating various Card usage patterns
 * This serves as both documentation and testing for the Card component
 */
export const CardExamples = () => {
  return (
    <ExamplesLayout>
      {/* Basic Cards */}
      <BasicCard />

      {/* Color Variants */}
      <VariantCard />

      {/* Size Variants */}
      <SizeCard />

      {/* Interactive Cards */}
      <InteractiveCard />

      {/* Composed Cards with Header, Body, Footer */}
      <ComposedCard />

      {/* Real-world Article Card Example */}
      <RealWorldCard />
    </ExamplesLayout>
  );
};
