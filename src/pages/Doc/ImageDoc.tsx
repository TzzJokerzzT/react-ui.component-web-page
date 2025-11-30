import Table, { TableHeader, TableBody } from "@/components/Table";
import { imagePropsColumns, imagePropsContent } from "./ImageDocData";
import { Code } from "@/components/Code";

export const ImageDoc = () => {
  return (
    <>
      {/* Props Reference Section */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Props Reference
        </h2>

        {/* ImageProps */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            ImageProps
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={imagePropsColumns}
                items={imagePropsContent}
                isStriped
              >
                <TableHeader columns={imagePropsColumns} />
                <TableBody items={imagePropsContent} />
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ImageRadius
            </h4>
            <Code
              color="secondary"
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              "none" | "sm" | "md" | "lg" | "full"
            </Code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ImageShadow
            </h4>
            <Code
              color="secondary"
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              "none" | "sm" | "md" | "lg"
            </Code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ImageLoading
            </h4>
            <Code
              color="secondary"
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              "eager" | "lazy"
            </Code>
          </div>
        </div>
      </section>
    </>
  );
};
