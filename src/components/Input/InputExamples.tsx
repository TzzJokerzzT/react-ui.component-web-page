import ExamplesLayout from "@/layout/ExamplesLayout";
import { AccessibilityInput } from "./Example/Accessibility";
import { BasicInput } from "./Example/Basic";
import { BuiltInValidationInput } from "./Example/BuiltInValidation";
import { ClearInput } from "./Example/Clear";
import { ColorsInput } from "./Example/Color";
import { ControlledInput } from "./Example/Controlled";
import { CustomStylingInput } from "./Example/CustomStyling";
import { CustomValidationInput } from "./Example/CustomValidation";
import { DescriptionInput } from "./Example/Description";
import { DisabledAndReadInput } from "./Example/DisabledAndRead";
import { ErrorInput } from "./Example/Error";
import { LabelPlacementInput } from "./Example/LabelPlacement";
import { PasswordInput } from "./Example/Password";
import { RadiusInput } from "./Example/Radius";
import { RealTimeValidationInput } from "./Example/RealTimeValidation";
import { RealWordExampleInput } from "./Example/RealWordExample";
import { RequiredInput } from "./Example/Required";
import { SizeInput } from "./Example/Sizes";
import { StartAndEndInput } from "./Example/StartAndEnd";
import { VariantInput } from "./Example/Variant";

/**
 * Input Examples Component
 * Demonstrates all Input component configurations and usage patterns
 * Following HeroUI documentation examples
 */
export const InputExamples = () => {
  // State for controlled examples

  // Custom validation example

  return (
    <ExamplesLayout>
      {/* Basic Usage */}
      <BasicInput />

      {/* Disabled and Read Only */}
      <DisabledAndReadInput />

      {/* Required */}
      <RequiredInput />

      {/* Sizes */}
      <SizeInput />

      {/* Colors */}
      <ColorsInput />

      {/* Variants */}
      <VariantInput />

      {/* Radius */}
      <RadiusInput />

      {/* Label Placements */}
      <LabelPlacementInput />

      {/* Password Input */}
      <PasswordInput />

      {/* Clear Button */}
      <ClearInput />

      {/* Start & End Content */}
      <StartAndEndInput />

      {/* With Description */}
      <DescriptionInput />

      {/* With Error Message */}
      <ErrorInput />

      {/* Controlled Input */}
      <ControlledInput />

      {/* Built-in Validation */}
      <BuiltInValidationInput />

      {/* Custom Validation */}
      <CustomValidationInput />

      {/* Realtime Validation */}
      <RealTimeValidationInput />

      {/* Custom Styling */}
      <CustomStylingInput />

      {/* Real-world Form Example */}
      <RealWordExampleInput />

      {/* Accessibility Features */}
      <AccessibilityInput />
    </ExamplesLayout>
  );
};
