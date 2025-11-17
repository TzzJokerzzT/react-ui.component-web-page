import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  type Selection,
  type SortDescriptor,
} from "../components/Table/index";
import tableData from "../data/tableData.json";
import PagesLayout from "@/layout/PagesLayout";
import { TableDoc } from "./Doc/TableDoc";

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

/**
 * TablePage component showcasing the Table component with comprehensive documentation
 * Demonstrates various configurations, states, and use cases with detailed Props Reference
 */
const TablePage = () => {
  return (
    <PagesLayout
      title="Table Component"
      explanation="A comprehensive table component with support for sorting, selection, virtualization, and custom content."
    >
      {/* Examples Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Examples
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-world examples using realistic JSON data for different use cases.
        </p>

        {/* Tabla de Empleados */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            👥 Employee Management
          </h3>
          <UsersTableExample />
        </div>

        {/* Tabla de Productos */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            📦 Product Catalog
          </h3>
          <ProductsTableExample />
        </div>

        {/* Tabla de Pedidos */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            🛍️ Order Management
          </h3>
          <OrdersTableExample />
        </div>

        {/* Tabla de Proyectos */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            🚀 Project Portfolio
          </h3>
          <ProjectsTableExample />
        </div>

        {/* Empty State Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            📄 Empty State Example
          </h3>
          <EmptyStateTableExample />
        </div>

        {/* Loading State Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            🔄 Loading State Example
          </h3>
          <LoadingStateTableExample />
        </div>

        {/* Custom Empty Content Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            🎨 Custom Empty Content Example
          </h3>
          <CustomEmptyContentTableExample />
        </div>
      </section>

      {/* Props Reference Section */}
      <TableDoc />
    </PagesLayout>
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
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Agregar Empleado
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
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
              <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Anterior
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                2
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Siguiente
              </button>
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

// Ejemplo de tabla de productos
const ProductsTableExample: React.FC = () => {
  const products = tableData.products as any[];

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
          <span className="text-xs text-gray-500 dark:text-gray-400">
            ({product.reviews})
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={productColumns}
        items={products}
        isCompact
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Catálogo de Productos</h4>
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
        <TableBody items={products} />
      </Table>
    </div>
  );
};

// Ejemplo de tabla de pedidos
const OrdersTableExample: React.FC = () => {
  const orders = tableData.orders as any[];

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

// Ejemplo de tabla de proyectos
const ProjectsTableExample: React.FC = () => {
  const projects = tableData.projects as any[];

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
          <div className="text-xs text-gray-500 dark:text-gray-400">
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
        items={projects}
        color="success"
        isStriped
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Portfolio de Proyectos</h4>
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
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Completados
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {
                    projects.filter((p: any) => p.status === "in_progress")
                      .length
                  }
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  En Progreso
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {projects.filter((p: any) => p.status === "planning").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Planificación
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {projects.filter((p: any) => p.status === "on_hold").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  En Pausa
                </div>
              </div>
            </div>
          </div>
        }
      >
        <TableHeader columns={projectColumns} />
        <TableBody items={projects} />
      </Table>
    </div>
  );
};

// Empty State Example
const EmptyStateTableExample: React.FC = () => {
  const emptyColumns = [
    { key: "name", label: "Name", allowsSorting: true },
    { key: "email", label: "Email", allowsSorting: true },
    { key: "role", label: "Role", allowsSorting: true },
    { key: "status", label: "Status", allowsSorting: true },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={emptyColumns}
        items={[]} // Empty array to trigger empty state
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Users Table (Empty)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This table has no data to display
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Add User
            </button>
          </div>
        }
      >
        <TableHeader columns={emptyColumns} />
        <TableBody items={[]} />
      </Table>
    </div>
  );
};

// Loading State Example
const LoadingStateTableExample: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  const loadingColumns = [
    { key: "name", label: "Name", allowsSorting: true },
    { key: "email", label: "Email", allowsSorting: true },
    { key: "role", label: "Role", allowsSorting: true },
    { key: "department", label: "Department", allowsSorting: true },
  ];

  // Simulate loading data
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(tableData.users.slice(0, 3)); // Load first 3 users
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const handleReload = () => {
    setLoading(true);
    setUsers([]);
    setTimeout(() => {
      setUsers(tableData.users.slice(0, 3));
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={loadingColumns}
        items={users}
        loading={loading} // Loading state prop
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Users Table (Loading)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {loading ? "Fetching users..." : "Users loaded successfully"}
              </p>
            </div>
            <button 
              onClick={handleReload}
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Loading..." : "Reload Data"}
            </button>
          </div>
        }
      >
        <TableHeader columns={loadingColumns} />
        <TableBody items={users} />
      </Table>
    </div>
  );
};

// Custom Empty Content Example
const CustomEmptyContentTableExample: React.FC = () => {
  const customColumns = [
    { key: "id", label: "ID", allowsSorting: true },
    { key: "product", label: "Product", allowsSorting: true },
    { key: "category", label: "Category", allowsSorting: true },
    { key: "price", label: "Price", allowsSorting: true },
  ];

  const customEmptyContent = (
    <div className="text-center">
      <div className="text-6xl mb-4">🛒</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        No products found
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Your product catalog is empty. Start by adding your first product.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Add First Product
      </button>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={customColumns}
        items={[]} // Empty array
        emptyContent={customEmptyContent} // Custom empty content
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Product Catalog (Custom Empty)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Custom empty state with branded messaging
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Import Products
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Add Product
              </button>
            </div>
          </div>
        }
      >
        <TableHeader columns={customColumns} />
        <TableBody items={[]} />
      </Table>
    </div>
  );
};

export default TablePage;
