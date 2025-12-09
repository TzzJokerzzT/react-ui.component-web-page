import { columns, sampleUsers } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const CustomStyleTable = () => {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        🎨 Custom Style Example
      </h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <Table
          color="custom"
          customColor={{
            background: "bg-warning-300 dark:bg-warning-900",
            border: "border-secondary-900 dark:border-secondary-50",
            text: "text-secondary-foreground",
            hover: "hover:bg-warning-500 dark:hover:bg-warning-300",
          }}
          columns={columns}
          items={sampleUsers}
          isStriped
        >
          <TableHeader columns={columns} />
          <TableBody items={sampleUsers} />
        </Table>
      </div>
    </section>
  );
};
