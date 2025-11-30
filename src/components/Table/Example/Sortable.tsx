import { useState, useMemo } from "react";
import { sampleUsers, columns } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import { User } from "../TableDataTypes";
import TableHeader from "../TableHeader";
import { SortDescriptor } from "../types";

export const SortableTable = () => {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const sortedItems = useMemo(() => {
    return [...sampleUsers].sort((a, b) => {
      const aValue = a[sortDescriptor.column as keyof User];
      const bValue = b[sortDescriptor.column as keyof User];

      let result = 0;
      if (aValue < bValue) result = -1;
      if (aValue > bValue) result = 1;

      return sortDescriptor.direction === "descending" ? -result : result;
    });
  }, [sortDescriptor]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Current sort: <strong>{sortDescriptor.column}</strong> (
          {sortDescriptor.direction})
        </p>
      </div>
      <Table
        columns={columns}
        items={sortedItems}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns} />
        <TableBody items={sortedItems} />
      </Table>
    </div>
  );
};
