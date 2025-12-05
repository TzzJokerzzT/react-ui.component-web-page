import { SwitchDoc } from "@/pages/Doc/SwitchDoc";
import { AdvancedSwitch } from "./Example/Advanced";
import { BasicSwitch } from "./Example/Basic";
import { ColorSwitch } from "./Example/Color";
import { ControlledSwitch } from "./Example/Controlled";
import { CustomStylesSwitch } from "./Example/CustomStyles";
import { DisabledSwitch } from "./Example/Disbled";
import { IconSwitch } from "./Example/Icons";
import { LabelSwitch } from "./Example/Label";
import { NoAnimationSwitch } from "./Example/NoAnimation";
import { ReadOnlySwitch } from "./Example/ReadOnly";
import { SizeSwitch } from "./Example/Size";
import { ThumbIconSwitch } from "./Example/ThumbIcons";
import ExamplesLayout from "@/layout/ExamplesLayout";

/**
 * Switch Examples Component
 * Demonstrates various Switch component configurations and usage patterns
 */
export const SwitchExamples = () => {
  return (
    <ExamplesLayout>
      {/* Basic Usage */}
      <BasicSwitch />

      {/* With Label */}
      <LabelSwitch />

      {/* Disabled */}
      <DisabledSwitch />

      {/* Sizes */}
      <SizeSwitch />

      {/* Colors */}
      <ColorSwitch />

      {/* With Thumb Icon */}
      <ThumbIconSwitch />

      {/* With Icons */}
      <IconSwitch />

      {/* Controlled */}
      <ControlledSwitch />

      {/* Custom Styles */}
      <CustomStylesSwitch />

      {/* Read Only */}
      <ReadOnlySwitch />

      {/* Without Animation */}
      <NoAnimationSwitch />

      {/* Advanced Examples */}
      <AdvancedSwitch />

      {/* Props Reference */}
      <SwitchDoc />
    </ExamplesLayout>
  );
};
