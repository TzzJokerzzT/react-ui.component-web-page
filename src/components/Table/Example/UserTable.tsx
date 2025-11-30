import { useState } from "react";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import { SortDescriptor } from "../types";
import tableData from "../../../data/tableData.json";
import { userColumns } from "../constant/constant";
import { Button } from "@/components/Button";
import { Pagination } from "@/components/Pagination";

export const UsersTable = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const users = tableData.users as any[];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={userColumns}
        items={users}
        selectionMode="multiple"
        showSelectionCheckboxes
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        isStriped
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Empleados</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gestiona el equipo de tu empresa
              </p>
            </div>
            <div className="flex space-x-2">
              <Button>Agregar Empleado</Button>
              <Button variant="outline" color="default">
                Exportar
              </Button>
            </div>
          </div>
        }
        bottomContent={
          <div className="flex justify-between items-center p-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Total: {users.length} empleados
              {selectedKeys !== "all" &&
                (selectedKeys as Set<any>).size > 0 && (
                  <span className="ml-2">
                    ({(selectedKeys as Set<any>).size} seleccionados)
                  </span>
                )}
            </span>
            <div className="flex space-x-1">
              <Pagination
                total={2}
                size="sm"
                variant="bordered"
                color="default"
              />
            </div>
          </div>
        }
      >
        <TableHeader columns={userColumns} />
        <TableBody items={users} />
      </Table>
    </div>
  );
};
