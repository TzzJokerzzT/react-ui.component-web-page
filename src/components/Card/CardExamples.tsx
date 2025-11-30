import ExamplesLayout from "@/layout/ExamplesLayout";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
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
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Basic Cards
        </h2>
        <BasicCard />
      </section>

      {/* Color Variants */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Color Variants
        </h2>
        <VariantCard />
      </section>

      {/* Size Variants */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Size Variants
        </h2>
        <SizeCard />
      </section>

      {/* Interactive Cards */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Interactive Cards
        </h2>
        <InteractiveCard />
      </section>

      {/* Composed Cards with Header, Body, Footer */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Composed Cards
        </h2>
        <ComposedCard />
      </section>

      {/* Real-world Article Card Example */}
      <section>
        <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
          Real-world Example
        </h2>
        <RealWorldCard />
      </section>
    </ExamplesLayout>
  );
};
