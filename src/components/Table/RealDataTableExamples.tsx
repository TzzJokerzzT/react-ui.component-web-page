import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  type Selection,
  type SortDescriptor,
} from "./index";
import { sortItems } from "./helper";
import tableData from "../../data/tableData.json";

const RealDataTableExamples: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Tablas con Datos Reales
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Ejemplos de tablas usando datos JSON realistas para diferentes casos
          de uso.
        </p>
      </div>

      {/* Tabla de Empleados */}

      {/* Tabla de Pedidos */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          🛍️ Gestión de Pedidos
        </h2>
        <OrdersTableExample />
      </section>

      {/* Tabla de Proyectos */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          🚀 Portfolio de Proyectos
        </h2>
        <ProjectsTableExample />
      </section>
    </div>
  );
};

// Ejemplo de tabla de pedidos
const OrdersTableExample: React.FC = () => {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const orders = tableData.orders as any[];

  const sortedOrders = useMemo(() => {
    return sortItems(orders, sortDescriptor);
  }, [orders, sortDescriptor]);

  const orderColumns = [
    {
      key: "orderNumber",
      label: "Pedido",
      allowsSorting: true,
    },
    {
      key: "customerName",
      label: "Cliente",
      allowsSorting: true,
    },
    {
      key: "status",
      label: "Estado",
      allowsSorting: true,
      render: (order: any) => {
        const statusConfig: any = {
          delivered: {
            color: "bg-green-100 text-green-800",
            label: "Entregado",
          },
          shipped: { color: "bg-blue-100 text-blue-800", label: "Enviado" },
          processing: {
            color: "bg-yellow-100 text-yellow-800",
            label: "Procesando",
          },
          cancelled: { color: "bg-red-100 text-red-800", label: "Cancelado" },
          pending: { color: "bg-gray-100 text-gray-800", label: "Pendiente" },
        };
        const config = statusConfig[order.status];
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
          >
            {config.label}
          </span>
        );
      },
    },
    {
      key: "total",
      label: "Total",
      allowsSorting: true,
      align: "end" as any,
      render: (order: any) => formatCurrency(order.total),
    },
    {
      key: "items",
      label: "Artículos",
      allowsSorting: true,
      align: "center" as any,
    },
    {
      key: "orderDate",
      label: "Fecha",
      allowsSorting: true,
      render: (order: any) => formatDate(order.orderDate),
    },
    {
      key: "priority",
      label: "Prioridad",
      allowsSorting: true,
      render: (order: any) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            order.priority === "express"
              ? "bg-orange-100 text-orange-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {order.priority === "express" ? "Express" : "Estándar"}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={orderColumns}
        items={sortedOrders}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        color="primary"
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h3 className="text-lg font-semibold">Pedidos Recientes</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gestiona los pedidos de tus clientes
              </p>
            </div>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>Todos los estados</option>
                <option>Entregado</option>
                <option>Enviado</option>
                <option>Procesando</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Filtrar
              </button>
            </div>
          </div>
        }
      >
        <TableHeader columns={orderColumns} />
        <TableBody items={sortedOrders} />
      </Table>
    </div>
  );
};

// Ejemplo de tabla de proyectos
const ProjectsTableExample: React.FC = () => {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const projects = tableData.projects as any[];

  const sortedProjects = useMemo(() => {
    return sortItems(projects, sortDescriptor);
  }, [projects, sortDescriptor]);

  const projectColumns = [
    {
      key: "name",
      label: "Proyecto",
      allowsSorting: true,
    },
    {
      key: "client",
      label: "Cliente",
      allowsSorting: true,
    },
    {
      key: "manager",
      label: "Manager",
      allowsSorting: true,
    },
    {
      key: "status",
      label: "Estado",
      allowsSorting: true,
      render: (project: any) => {
        const statusConfig: any = {
          completed: {
            color: "bg-green-100 text-green-800",
            label: "Completado",
          },
          in_progress: {
            color: "bg-blue-100 text-blue-800",
            label: "En Progreso",
          },
          planning: {
            color: "bg-yellow-100 text-yellow-800",
            label: "Planificación",
          },
          on_hold: { color: "bg-red-100 text-red-800", label: "En Pausa" },
        };
        const config = statusConfig[project.status];
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
          >
            {config.label}
          </span>
        );
      },
    },
    {
      key: "progress",
      label: "Progreso",
      allowsSorting: true,
      align: "center" as any,
      render: (project: any) => (
        <div className="flex items-center space-x-2">
          <div className="w-20 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium">{project.progress}%</span>
        </div>
      ),
    },
    {
      key: "budget",
      label: "Presupuesto",
      allowsSorting: true,
      align: "end" as any,
      render: (project: any) => (
        <div className="text-right">
          <div className="font-medium">{formatCurrency(project.budget)}</div>
          <div className="text-xs text-gray-500">
            Gastado: {formatCurrency(project.spent)}
          </div>
        </div>
      ),
    },
    {
      key: "team",
      label: "Equipo",
      render: (project: any) => (
        <div className="flex -space-x-2">
          {project.team.slice(0, 3).map((member: any, index: any) => (
            <div
              key={index}
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white"
              title={member}
            >
              {member
                .split(" ")
                .map((n: any) => n[0])
                .join("")}
            </div>
          ))}
          {project.team.length > 3 && (
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white">
              +{project.team.length - 3}
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={projectColumns}
        items={sortedProjects}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        color="success"
        isStriped
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h3 className="text-lg font-semibold">Portfolio de Proyectos</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Seguimiento de proyectos activos
              </p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Nuevo Proyecto
            </button>
          </div>
        }
        bottomContent={
          <div className="p-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {projects.filter((p: any) => p.status === "completed").length}
                </div>
                <div className="text-sm text-gray-600">Completados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {
                    projects.filter((p: any) => p.status === "in_progress")
                      .length
                  }
                </div>
                <div className="text-sm text-gray-600">En Progreso</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {projects.filter((p: any) => p.status === "planning").length}
                </div>
                <div className="text-sm text-gray-600">Planificación</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {projects.filter((p: any) => p.status === "on_hold").length}
                </div>
                <div className="text-sm text-gray-600">En Pausa</div>
              </div>
            </div>
          </div>
        }
      >
        <TableHeader columns={projectColumns} />
        <TableBody items={sortedProjects} />
      </Table>
    </div>
  );
};

export default RealDataTableExamples;

