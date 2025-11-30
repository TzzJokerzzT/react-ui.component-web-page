import ExamplesLayout from "@/layout/ExamplesLayout";
import { ActionToast } from "./Examples/Action";
import { BasicToast } from "./Examples/Basic";
import { CustomToast } from "./Examples/Custom";
import { PersistentToast } from "./Examples/Persistent";
import { PositionToast } from "./Examples/Position";
import { SizeToast } from "./Examples/Size";
import { TitleToast } from "./Examples/Title";
import { VariantToast } from "./Examples/Variant";

/**
 * Toast examples for demonstration
 */
export const ToastExamples = () => {
  return (
    <ExamplesLayout>
      {/* Basic Examples */}
      <BasicToast />

      {/* With Titles */}
      <TitleToast />

      {/* Different Variants */}
      <VariantToast />

      {/* Different Positions */}
      <PositionToast />

      {/* Different Sizes */}
      <SizeToast />

      {/* Persistent Toasts */}
      <PersistentToast />

      {/* With Actions */}
      <ActionToast />

      {/* Custom Icons */}
      <CustomToast />
    </ExamplesLayout>
  );
};

