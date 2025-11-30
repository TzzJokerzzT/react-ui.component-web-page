import { useState } from "react";
import { columns, sampleUsers } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const SelectableTable = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Selected:{" "}
          {selectedKeys === "all" ? "All" : (selectedKeys as Set<any>).size}{" "}
          items
        </p>
      </div>
      <Table
        columns={columns}
        items={sampleUsers}
        selectionMode="multiple"
        showSelectionCheckboxes
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={columns} />
        <TableBody items={sampleUsers} />
      </Table>
    </div>
  );
};
