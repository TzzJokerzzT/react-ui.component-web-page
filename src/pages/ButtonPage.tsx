import PagesLayout from "@/layout/PagesLayout";
import ButtonExamples from "../components/Button/buttonExamples";
import { ButtonDoc } from "./Doc/ButtonDoc";

const ButtonPage = () => {
  return (
    <PagesLayout
      title="Button"
      explanation="Explore the versatile Button component with various styles, sizes, and functionalities to enhance your user interface."
    >
      {/* Button Example */}
      <ButtonExamples />

      {/* Button Props Reference */}
      <ButtonDoc />
    </PagesLayout>
  );
};

export default ButtonPage;
