import { columns, sampleUsers } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const TableVariants = () => {
  return (
    <div className="space-y-6">
      {/* Striped */}
      <div>
        <h3 className="text-lg font-medium mb-2">Striped Table</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={columns} items={sampleUsers.slice(0, 3)} isStriped>
            <TableHeader columns={columns} />
            <TableBody items={sampleUsers.slice(0, 3)} />
          </Table>
        </div>
      </div>

      {/* Compact */}
      <div>
        <h3 className="text-lg font-medium mb-2">Compact Table</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={columns} items={sampleUsers.slice(0, 3)} isCompact>
            <TableHeader columns={columns} />
            <TableBody items={sampleUsers.slice(0, 3)} />
          </Table>
        </div>
      </div>

      {/* Different Colors */}
      <div>
        <h3 className="text-lg font-medium mb-2">Colored Tables</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm mb-2">Primary</p>
            <Table
              columns={columns}
              items={sampleUsers.slice(0, 2)}
              color="primary"
            >
              <TableHeader columns={columns} />
              <TableBody items={sampleUsers.slice(0, 2)} />
            </Table>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm mb-2">Success</p>
            <Table
              columns={columns}
              items={sampleUsers.slice(0, 2)}
              color="success"
            >
              <TableHeader columns={columns} />
              <TableBody items={sampleUsers.slice(0, 2)} />
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
