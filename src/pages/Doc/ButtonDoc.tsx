import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  buttonColumns,
  buttonContent,
  buttonGroupColumns,
  buttonGroupContent,
} from "./ButtonDocData";

export const ButtonDoc = () => {
  return (
    <>
      {/* Props Reference */}
      <section className="space-y-6 mt-8 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-black dark:text-gray-200">
              Props Reference
            </h2>
          </div>

          {/* Button Props */}
          <div className="mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <Table columns={buttonColumns} items={buttonContent} isStriped>
                  <TableHeader columns={buttonColumns} />
                  <TableBody items={buttonContent} />
                </Table>
              </div>
            </div>
          </div>

          {/* ButtonGroup Props */}
          <div className="mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-black dark:text-gray-200">
                ButtonGroup
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <Table
                  columns={buttonGroupColumns}
                  items={buttonGroupContent}
                  isStriped
                >
                  <TableHeader columns={buttonGroupColumns} />
                  <TableBody items={buttonGroupContent} />
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
