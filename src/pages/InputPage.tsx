import PagesLayout from "@/layout/PagesLayout";
import { InputExamples } from "../components/Input/InputExamples";
import { InputDoc } from "./Doc/InputDoc";

/**
 * Input Page Component
 * Main page for showcasing the Input component with all examples and documentation
 */
export const InputPage = () => {
  return (
    <PagesLayout
      title="Input Component"
      explanation="A comprehensive input component built with React and TypeScript, following HeroUI design patterns. Features extensive customization, validation, and accessibility support."
    >
      <InputExamples />

      <InputDoc />
    </PagesLayout>
  );
};

