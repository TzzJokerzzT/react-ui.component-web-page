import ExamplesLayout from "@/layout/ExamplesLayout";
import { Code } from "./Code";

export const CodeExamples = () => {
  return (
    <ExamplesLayout>
      {/* Default Usage */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Usage
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Code>npm install @heroui/react</Code>
          </div>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          {`import { Code } from "@/components/Code";

export default function App() {
  return (
    <Code>npm install @heroui/react</Code>
  );
}`}
        </pre>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Sizes
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Code size="sm">npm install</Code>
              <span className="text-gray-600 dark:text-gray-400">Small</span>
            </div>
            <div className="flex items-center gap-4">
              <Code size="md">npm install</Code>
              <span className="text-gray-600 dark:text-gray-400">Medium</span>
            </div>
            <div className="flex items-center gap-4">
              <Code size="lg">npm install</Code>
              <span className="text-gray-600 dark:text-gray-400">Large</span>
            </div>
          </div>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          {`import { Code } from "@/components/Code";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Code size="sm">npm install</Code>
      <Code size="md">npm install</Code>
      <Code size="lg">npm install</Code>
    </div>
  );
}`}
        </pre>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Colors
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4">
            <Code color="default">console.log()</Code>
            <Code color="primary">console.log()</Code>
            <Code color="secondary">console.log()</Code>
            <Code color="success">console.log()</Code>
            <Code color="warning">console.log()</Code>
            <Code color="danger">console.log()</Code>
          </div>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          {`import { Code } from "@/components/Code";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Code color="default">console.log()</Code>
      <Code color="primary">console.log()</Code>
      <Code color="secondary">console.log()</Code>
      <Code color="success">console.log()</Code>
      <Code color="warning">console.log()</Code>
      <Code color="danger">console.log()</Code>
    </div>
  );
}`}
        </pre>
      </section>

      {/* Radius */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Radius
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4">
            <Code radius="none">radius="none"</Code>
            <Code radius="sm">radius="sm"</Code>
            <Code radius="md">radius="md"</Code>
            <Code radius="lg">radius="lg"</Code>
            <Code radius="full">radius="full"</Code>
          </div>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          {`import { Code } from "@/components/Code";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Code radius="none">radius="none"</Code>
      <Code radius="sm">radius="sm"</Code>
      <Code radius="md">radius="md"</Code>
      <Code radius="lg">radius="lg"</Code>
      <Code radius="full">radius="full"</Code>
    </div>
  );
}`}
        </pre>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Usage Examples
        </h3>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 dark:text-gray-300">
              Install the package with <Code>npm install heroui</Code>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Use the <Code color="primary">useState</Code> hook to manage state
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Run <Code color="success">npm run dev</Code> to start the
              development server
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Warning: Do not use <Code color="danger">rm -rf /</Code> command
            </p>
          </div>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          {`import { Code } from "@/components/Code";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <p>Install the package with <Code>npm install heroui</Code></p>
      <p>Use the <Code color="primary">useState</Code> hook</p>
      <p>Run <Code color="success">npm run dev</Code></p>
      <p>Warning: <Code color="danger">rm -rf /</Code></p>
    </div>
  );
}`}
        </pre>
      </section>
    </ExamplesLayout>
  );
};
