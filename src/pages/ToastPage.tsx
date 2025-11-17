import { ToastExamples } from "../components/Toast/ToastExamples";
import { ToastDoc } from "./Doc/ToastDoc";

export default function ToastPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Toast Component</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A flexible toast notification system with multiple types, positions,
          and customization options.
        </p>
      </div>

      <div className="space-y-12">
        {/* Examples */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Examples</h2>
          <ToastExamples />
        </section>

        {/* Props Reference */}
        <ToastDoc />
      </div>
    </div>
  );
}

