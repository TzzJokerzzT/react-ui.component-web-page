import { AnimationCheckbox } from "./Example/Animation";
import { BasicCheckbox } from "./Example/Basic";
import { CheckboxList } from "./Example/CheckboxList";
import { ColorCheckbox } from "./Example/Color";
import { ControlledCheckbox } from "./Example/Controlled";
import { CustomIconCheckbox } from "./Example/CustomIcon";
import { CustomStylingCheckbox } from "./Example/CustomStyling";
import { FormIntegrationCheckbox } from "./Example/FormIntegration";
import { IndeterminateCheckbox } from "./Example/Indeterminate";
import { LineThroughCheckbox } from "./Example/LineThrough";
import { RadiusCheckbox } from "./Example/Radius";
import { SizeCheckbox } from "./Example/Size";
import { StatesCheckbox } from "./Example/States";
import ExamplesLayout from "@/layout/ExamplesLayout";

/**
 * CheckboxExamples component showcasing various Checkbox component features
 * Demonstrates different configurations, states, and use cases
 */
export const CheckboxExamples = () => {
  return (
    <ExamplesLayout>
      {/* Basic Usage */}
      <BasicCheckbox />

      {/* Sizes */}
      <SizeCheckbox />

      {/* Colors */}
      <ColorCheckbox />

      {/* Radius Variants */}
      <RadiusCheckbox />

      {/* States */}
      <StatesCheckbox />

      {/* Indeterminate State */}
      <IndeterminateCheckbox />

      {/* Line Through Effect */}
      <LineThroughCheckbox />

      {/* Custom Icons */}
      <CustomIconCheckbox />

      {/* Controlled Component */}
      <ControlledCheckbox />

      {/* Custom Styling */}
      <CustomStylingCheckbox />

      {/* Animation Control */}
      <AnimationCheckbox />

      {/* Form Integration */}
      <FormIntegrationCheckbox />

      {/* Checkbox List */}
      <CheckboxList />
    </ExamplesLayout>
  );
};
