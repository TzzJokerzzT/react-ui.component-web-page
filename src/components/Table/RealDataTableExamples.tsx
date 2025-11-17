import React, { useState, useMemo } from "react";
import { Table, TableHeader, TableBody, type Selection, type SortDescriptor } from "./index";
import { sortItems } from "./helper";
import tableData from "../../data/tableData.json";

// Función para formatear moneda
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

// Función para formatear fecha
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("es-ES");
};

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
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          👥 Gestión de Empleados
        </h2>
        <UsersTableExample />
      </section>

      {/* Tabla de Productos */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          📦 Catálogo de Productos
        </h2>
        <ProductsTableExample />
      </section>

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

// Ejemplo de tabla de empleados
const UsersTableExample: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const users = tableData.users as any[];

  const handleSortChange = (newSortDescriptor: SortDescriptor) => {
    setSortDescriptor(newSortDescriptor);
  };

  const sortedUsers = useMemo(() => {
    return sortItems(users, sortDescriptor);
  }, [users, sortDescriptor]);

  const userColumns = [
    {
      key: "avatar",
      label: "Foto",
      render: (user: any) => (
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
    {
      key: "name",
      label: "Nombre",
      allowsSorting: true,
    },
    {
      key: "email",
      label: "Email",
      allowsSorting: true,
    },
    {
      key: "role",
      label: "Cargo",
      allowsSorting: true,
    },
    {
      key: "department",
      label: "Departamento",
      allowsSorting: true,
    },
    {
      key: "status",
      label: "Estado",
      allowsSorting: true,
      render: (user: any) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            user.status === "active"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : user.status === "inactive"
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
          }`}
        >
          {user.status === "active"
            ? "Activo"
            : user.status === "inactive"
              ? "Inactivo"
              : "Pendiente"}
        </span>
      ),
    },
    {
      key: "salary",
      label: "Salario",
      allowsSorting: true,
      align: "end" as any,
      render: (user: any) => formatCurrency(user.salary),
    },
    {
      key: "performance",
      label: "Rendimiento",
      allowsSorting: true,
      align: "center" as any,
      render: (user: any) => (
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div
              className={`h-2 rounded-full ${
                user.performance >= 90
                  ? "bg-green-500"
                  : user.performance >= 80
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
              style={{ width: `${user.performance}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium">{user.performance}%</span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={userColumns}
        items={sortedUsers}
        selectionMode="multiple"
        showSelectionCheckboxes
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        sortDescriptor={sortDescriptor}
        onSortChange={handleSortChange}
        isStriped
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h3 className="text-lg font-semibold">Empleados</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gestiona el equipo de tu empresa
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Agregar Empleado
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Exportar
              </button>
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
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Anterior
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Siguiente
              </button>
            </div>
          </div>
        }
      >
        <TableHeader columns={userColumns} />
        <TableBody items={sortedUsers} />
      </Table>
    </div>
  );
};

// Ejemplo de tabla de productos
const ProductsTableExample: React.FC = () => {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });
  
  const products = tableData.products as any[];

  const sortedProducts = useMemo(() => {
    return sortItems(products, sortDescriptor);
  }, [products, sortDescriptor]);

  const productColumns = [
    {
      key: "image",
      label: "Imagen",
      render: (product: any) => (
        <img
          src={product.image}
          alt={product.name}
          className="w-12 h-12 rounded-md object-cover"
        />
      ),
    },
    {
      key: "name",
      label: "Producto",
      allowsSorting: true,
    },
    {
      key: "category",
      label: "Categoría",
      allowsSorting: true,
    },
    {
      key: "brand",
      label: "Marca",
      allowsSorting: true,
    },
    {
      key: "price",
      label: "Precio",
      allowsSorting: true,
      align: "end" as any,
      render: (product: any) => formatCurrency(product.price),
    },
    {
      key: "stock",
      label: "Stock",
      allowsSorting: true,
      align: "center" as any,
      render: (product: any) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.stock > 20
              ? "bg-green-100 text-green-800"
              : product.stock > 0
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {product.stock}
        </span>
      ),
    },
    {
      key: "status",
      label: "Estado",
      allowsSorting: true,
      render: (product: any) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.status === "available"
              ? "bg-green-100 text-green-800"
              : product.status === "low_stock"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {product.status === "available"
            ? "Disponible"
            : product.status === "low_stock"
              ? "Stock Bajo"
              : "Agotado"}
        </span>
      ),
    },
    {
      key: "rating",
      label: "Rating",
      allowsSorting: true,
      align: "center" as any,
      render: (product: any) => (
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">⭐</span>
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      ),
    },
  ];

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
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Agregar Producto
            </button>
          </div>
        }
      >
        <TableHeader columns={productColumns} />
        <TableBody items={sortedProducts} />
      </Table>
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
                  {projects.filter((p: any) => p.status === "in_progress").length}
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