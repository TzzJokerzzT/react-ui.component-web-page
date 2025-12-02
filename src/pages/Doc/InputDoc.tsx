import Table, { TableHeader, TableBody } from "@/components/Table";
import { inputColumns, inputContent } from "./InputDocData";

export const InputDoc = () => {
  return (
    <section className="space-y-6 mt-5">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Props Reference
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <Table columns={inputColumns} items={inputContent} isStriped>
            <TableHeader columns={inputColumns} />
            <TableBody items={inputContent} />
          </Table>
        </div>
      </div>
    </section>
  );
};
