import { useMemo, useState } from "react";
import tableData from "../../../data/tableData.json";
import { productColumns } from "../constant/constant";
import { sortItems } from "../helper";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import { SortDescriptor } from "../types";
import { Button } from "@/components/Button";

export const ProductsTable = () => {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const products = tableData.products as any[];

  const sortedProducts = useMemo(() => {
    return sortItems(products, sortDescriptor);
  }, [products, sortDescriptor]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={productColumns}
        items={sortedProducts}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        isCompact
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h3 className="text-lg font-semibold">Catálogo de Productos</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gestiona tu inventario
              </p>
            </div>
            <Button color="success">Agregar Producto</Button>
          </div>
        }
      >
        <TableHeader columns={productColumns} />
        <TableBody items={sortedProducts} />
      </Table>
    </div>
  );
};
