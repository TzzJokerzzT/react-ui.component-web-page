import PagesLayout from "@/layout/PagesLayout";
import { CardExamples } from "../components/Card/CardExamples";
import { CardDoc } from "./Doc/CardDoc";

const CardPage = () => {
  return (
    <PagesLayout
      title="Card"
      explanation="Explore the versatile Card component with various styles, sizes, and functionalities to enhance your user interface."
    >
      <CardExamples />

      <CardDoc />
    </PagesLayout>
  );
};

export default CardPage;
