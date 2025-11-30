import { Chip } from "@/components/Chip";
import {
  formatCurrency,
  formatDate,
} from "../Example/helper/helperForExamples";
import { Progress } from "@/components/Progress";
import { Button } from "@/components/Button";
import { Avatar, AvatarGroup } from "@/components/Avatar";

// Sample data types
interface User {
  id: number;
  key: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  createdAt: string;
}

// Sample data
export const sampleUsers: User[] = [
  {
    id: 1,
    key: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    key: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: 3,
    key: "user-3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "inactive",
    createdAt: "2024-01-10",
  },
  {
    id: 4,
    key: "user-4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Moderator",
    status: "pending",
    createdAt: "2024-01-25",
  },
  {
    id: 5,
    key: "user-5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "User",
    status: "active",
    createdAt: "2024-01-18",
  },
];

// Column definitions
export const columns = [
  {
    key: "name",
    label: "Name",
    allowsSorting: true,
  },
  {
    key: "email",
    label: "Email",
    allowsSorting: true,
  },
  {
    key: "role",
    label: "Role",
    allowsSorting: true,
  },
  {
    key: "status",
    label: "Status",
    allowsSorting: true,
    render: (user: User) => (
      <Chip
        color={
          user.status === "active"
            ? "success"
            : user.status === "inactive"
              ? "secondary"
              : "warning"
        }
      >
        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
      </Chip>
    ),
  },
  {
    key: "createdAt",
    label: "Created",
    allowsSorting: true,
    render: (user: User) => new Date(user.createdAt).toLocaleDateString(),
  },
];

// Sample data for demonstration
export const alignmentData = [
  {
    id: 1,
    key: "item-1",
    name: "Product A",
    price: "$19.99",
    quantity: 25,
    total: "$499.75",
  },
  {
    id: 2,
    key: "item-2",
    name: "Product B",
    price: "$29.99",
    quantity: 15,
    total: "$449.85",
  },
  {
    id: 3,
    key: "item-3",
    name: "Product C",
    price: "$39.99",
    quantity: 10,
    total: "$399.90",
  },
];

export const alignmentColumns = [
  {
    key: "name",
    label: "Product Name",
    align: "start" as const,
  },
  {
    key: "price",
    label: "Price",
    align: "center" as const,
  },
  {
    key: "quantity",
    label: "Quantity",
    align: "center" as const,
  },
  {
    key: "total",
    label: "Total",
    align: "end" as const,
  },
];

export const userColumns = [
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
      <Chip
        color={
          user.status === "active"
            ? "success"
            : user.status === "inactive"
              ? "secondary"
              : "warning"
        }
        size="sm"
      >
        {user.status === "active"
          ? "Activo"
          : user.status === "inactive"
            ? "Inactivo"
            : "Pendiente"}
      </Chip>
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
          <Progress
            value={user.performance}
            color={
              user.performance >= 90
                ? "success"
                : user.performance >= 80
                  ? "warning"
                  : "danger"
            }
            isStriped
          />
        </div>
        <span className="text-sm font-medium">{user.performance}%</span>
      </div>
    ),
  },
];

export const productColumns = [
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
      <Chip
        color={
          product.stock > 20
            ? "success"
            : product.stock > 0
              ? "warning"
              : "danger"
        }
        size="sm"
      >
        {product.stock}
      </Chip>
    ),
  },
  {
    key: "status",
    label: "Estado",
    allowsSorting: true,
    render: (product: any) => (
      <Chip
        color={
          product.status === "available"
            ? "success"
            : product.status === "low_stock"
              ? "warning"
              : "danger"
        }
        size="sm"
      >
        {product.status === "available"
          ? "Disponible"
          : product.status === "low_stock"
            ? "Stock Bajo"
            : "Agotado"}
      </Chip>
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

export const orderColumns = [
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
          color: "success",
          label: "Entregado",
        },
        shipped: { color: "primary", label: "Enviado" },
        processing: {
          color: "default",
          label: "Procesando",
        },
        cancelled: { color: "danger", label: "Cancelado" },
        pending: { color: "warning", label: "Pendiente" },
      };
      const config = statusConfig[order.status];
      return (
        <Chip color={config.color} variant="flat" size="sm">
          {config.label}
        </Chip>
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
      <Chip
        color={order.priority === "express" ? "primary" : "default"}
        size="sm"
      >
        {order.priority === "express" ? "Express" : "Estándar"}
      </Chip>
    ),
  },
];

export const projectColumns = [
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
          color: "success",
          label: "Completado",
        },
        in_progress: {
          color: "primary",
          label: "En Progreso",
        },
        planning: {
          color: "warning",
          label: "Planificación",
        },
        on_hold: { color: "danger", label: "En Pausa" },
      };
      const config = statusConfig[project.status];
      return (
        <Chip color={config.color} variant="flat" size="sm">
          {config.label}
        </Chip>
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
          <Progress value={project.progress} isStriped />
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
          <AvatarGroup>
            <Avatar
              key={index}
              name={member
                .split(" ")
                .map((n: any) => n[0])
                .join("")}
              size="sm"
            />
          </AvatarGroup>
        ))}
        {project.team.length > 3 && (
          <Avatar size="sm" name={`+${project.team.length - 3}`} />
        )}
      </div>
    ),
  },
];
