import tableData from "../../../data/tableData.json";
import { orderColumns } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const OrdersTable = () => {
  const orders = tableData.orders as any[];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={orderColumns}
        items={orders}
        color="primary"
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Pedidos Recientes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gestiona los pedidos de tus clientes
              </p>
            </div>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
                <option>Todos los estados</option>
                <option>Entregado</option>
                <option>Enviado</option>
                <option>Procesando</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Filtrar
              </button>
            </div>
          </div>
        }
      >
        <TableHeader columns={orderColumns} />
        <TableBody items={orders} />
      </Table>
    </div>
  );
};
