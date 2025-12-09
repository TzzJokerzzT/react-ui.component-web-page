import { Button } from "@/components/Button";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const EmptyStateTable = () => {
  const emptyColumns = [
    { key: "name", label: "Name", allowsSorting: true },
    { key: "email", label: "Email", allowsSorting: true },
    { key: "role", label: "Role", allowsSorting: true },
    { key: "status", label: "Status", allowsSorting: true },
  ];

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        📄 Empty State Example
      </h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <Table
          columns={emptyColumns}
          items={[]} // Empty array to trigger empty state
          topContent={
            <div className="flex justify-between items-center p-4">
              <div>
                <h4 className="text-lg font-semibold">Users Table (Empty)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This table has no data to display
                </p>
              </div>
              <Button color="primary">Add User</Button>
            </div>
          }
        >
          <TableHeader columns={emptyColumns} />
          <TableBody items={[]} />
        </Table>
      </div>
    </section>
  );
};
