import PagesLayout from "@/layout/PagesLayout";
import { ToastExamples } from "../components/Toast/ToastExamples";
import { ToastDoc } from "./Doc/ToastDoc";

export default function ToastPage() {
  return (
    <PagesLayout
      title="Toast"
      explanation="Explore the flexible Toast component for displaying notifications with various types, positions, and customization options."
    >
      {/* Toast Examples */}
      <ToastExamples />

      {/* Props Reference */}
      <ToastDoc />
    </PagesLayout>
  );
}
