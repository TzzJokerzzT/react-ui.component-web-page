import { useState } from "react";
import { SwitchExamples } from "../components/Switch/SwitchExamples";
import { SwitchCenteringTest } from "../components/Switch/SwitchCenteringTest";
import { SwitchThumbClickTest } from "../components/Switch/SwitchThumbClickTest";
import { SwitchDebugTest } from "../components/Switch/SwitchDebugTest";
import { Switch } from "../components/Switch";
import PagesLayout from "@/layout/PagesLayout";
import { SwitchDoc } from "./Doc/SwitchDoc";

/**
 * Switch Page Component
 * Main page to showcase Switch component functionality
 */
export const SwitchPage = () => {
  return (
    <PagesLayout
      title="Switch Component"
      explanation="Documentation and examples for the Switch component."
    >
      <SwitchExamples />

      <SwitchDoc />
    </PagesLayout>
  );
};
