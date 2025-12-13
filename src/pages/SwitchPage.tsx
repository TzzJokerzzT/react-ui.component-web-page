import PagesLayout from "@/layout/PagesLayout";
import { SwitchExamples } from "../components/Switch/SwitchExamples";
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
