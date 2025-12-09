import { Button } from "@/components/Button";
import { columns, sampleUsers } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const TableWithContent = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Table with Top and Bottom Content
      </h2>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <Table
          columns={columns}
          items={sampleUsers}
          topContent={
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">User Management</h3>
              <Button>Add User</Button>
            </div>
          }
          bottomContent={
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Showing {sampleUsers.length} users
              </span>
              <div className="flex space-x-2">
                <Button color="default" variant="outline">
                  Previous
                </Button>
                <Button color="default" variant="outline">
                  Next
                </Button>
              </div>
            </div>
          }
        >
          <TableHeader columns={columns} />
          <TableBody items={sampleUsers} />
        </Table>
      </div>
    </section>
  );
};
