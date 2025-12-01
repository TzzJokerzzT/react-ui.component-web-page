import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  checkboxColumns,
  checkboxContent,
  checkboxTypeDefinitions,
} from "./CheckboxDocData";

export const CheckboxDoc = () => {
  return (
    <section className="space-y-6 mt-5">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Props Reference
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <Table columns={checkboxColumns} items={checkboxContent} isStriped>
            <TableHeader columns={checkboxColumns} />
            <TableBody items={checkboxContent} />
          </Table>
        </div>
      </div>

      {/* Type Definitions */}
      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Type Definitions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {checkboxTypeDefinitions.map((type) => (
            <div
              key={type.id}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                {type.name}
              </h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                {type.value}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
