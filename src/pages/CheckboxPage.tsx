import { CheckboxExamples } from "@/components/Checkbox/CheckboxExamples";
import PagesLayout from "@/layout/PagesLayout";
import { CheckboxDoc } from "./Doc/CheckboxDoc";

const CheckboxPage = () => {
  return (
    <PagesLayout
      title="Checkbox Component"
      explanation="A comprehensive checkbox component with support for multiple sizes, colors, states, and custom icons."
    >
      <CheckboxExamples />

      <CheckboxDoc />
    </PagesLayout>
  );
};

export default CheckboxPage;
