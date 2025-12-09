import { columns, sampleUsers } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const BasicTable = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Basic Table
      </h2>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <Table columns={columns} items={sampleUsers}>
          <TableHeader columns={columns} />
          <TableBody items={sampleUsers} />
        </Table>
      </div>
    </section>
  );
};
