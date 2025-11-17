export interface GeneratedType {
  users: User;
  products: Product;
  orders: Order;
  analytics: Analytics;
  projects: Project;
}

export interface Analytics {
  id: number;
  key: string;
  date: Date;
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversions: number;
  revenue: number;
  source: string;
  device: string;
}

export interface Order {
  id: number;
  key: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  status: string;
  total: number;
  items: number;
  paymentMethod: string;
  shippingAddress: string;
  orderDate: Date;
  deliveredDate?: Date;
  trackingNumber: string;
  priority: string;
  shippedDate?: Date;
  cancelledDate?: Date;
  cancellationReason?: string;
}

export interface Product {
  id: number;
  key: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  sku: string;
  status: string;
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  image: string;
}

export interface Project {
  id: number;
  key: string;
  name: string;
  client: string;
  manager: string;
  status: string;
  priority: string;
  progress: number;
  budget: number;
  spent: number;
  startDate: Date;
  endDate: Date;
  team: string[];
  description: string;
  tags: string[];
}

export interface User {
  id: number;
  key: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: Status;
  salary: number;
  hireDate: Date;
  lastLogin: Date;
  performance: number;
  location: string;
  avatar: string;
}

export enum Status {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}
