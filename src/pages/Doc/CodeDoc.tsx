import Table, { TableHeader, TableBody } from "@/components/Table";
import { codePropsColumns, codePropsContent } from "./CodeDocData";

export const CodeDoc = () => {
  return (
    <>
      {/* Props Reference Section */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          API Reference
        </h2>

        {/* CodeProps */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Code Props
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={codePropsColumns}
                items={codePropsContent}
                isStriped
              >
                <TableHeader columns={codePropsColumns} />
                <TableBody items={codePropsContent} />
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Type Definitions */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Type Definitions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              CodeSize
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "sm" | "md" | "lg"
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              CodeColor
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "default" | "primary" | "secondary" | "success" | "warning" | "danger"
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              CodeRadius
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "none" | "sm" | "md" | "lg" | "full"
            </code>
          </div>
        </div>
      </section>
    </>
  );
};
