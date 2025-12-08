import { CodeExamples } from "@/components/Code/CodeExamples";
import PagesLayout from "@/layout/PagesLayout";
import { CodeDoc } from "./Doc/CodeDoc";

export const CodePage = () => {
  return (
    <PagesLayout
      title="Code"
      explanation="A component used to display inline code."
    >
      {/* Examples */}
      <CodeExamples />

      <CodeDoc />
    </PagesLayout>
  );
};
