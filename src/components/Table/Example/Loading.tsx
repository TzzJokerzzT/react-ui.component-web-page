import { columns } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader, { TableColumn } from "../TableHeader";

export const LoadingAndEmpty = () => {
  return (
    <div className="space-y-6">
      {/* Loading State */}
      <div>
        <h3 className="text-lg font-medium mb-2">Loading State</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={columns}>
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody isLoading>
              {/* Content will be replaced by loading indicator */}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Empty State */}
      <div>
        <h3 className="text-lg font-medium mb-2">Empty State</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={columns} items={[]} />
        </div>
      </div>
    </div>
  );
};
