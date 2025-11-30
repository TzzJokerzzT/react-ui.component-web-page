import { columns, sampleUsers } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const BasicTable = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table columns={columns} items={sampleUsers}>
        <TableHeader columns={columns} />
        <TableBody items={sampleUsers} />
      </Table>
    </div>
  );
};
