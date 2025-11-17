import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  type Selection,
  type SortDescriptor,
} from "./index";

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
const sampleUsers: User[] = [
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
const columns = [
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
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          user.status === "active"
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : user.status === "inactive"
            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
        }`}
      >
        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
      </span>
    ),
  },
  {
    key: "createdAt",
    label: "Created",
    allowsSorting: true,
    render: (user: User) => new Date(user.createdAt).toLocaleDateString(),
  },
];

const TableExamples: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Table Component Examples
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive examples of the Table component with various features and configurations.
        </p>
      </div>

      {/* Basic Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          1. Basic Table
        </h2>
        <BasicTableExample />
      </section>

      {/* Static Table with Custom Content */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          2. Static Table with Custom Content
        </h2>
        <StaticTableExample />
      </section>

      {/* Sortable Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          3. Sortable Table
        </h2>
        <SortableTableExample />
      </section>

      {/* Selectable Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          4. Selectable Table
        </h2>
        <SelectableTableExample />
      </section>

      {/* Table with Top and Bottom Content */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          5. Table with Top and Bottom Content
        </h2>
        <TableWithContentExample />
      </section>

      {/* Different Table Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          6. Table Variants
        </h2>
        <TableVariantsExample />
      </section>

      {/* Text Alignment */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          7. Text Alignment
        </h2>
        <TextAlignmentExample />
      </section>

      {/* Loading and Empty States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          8. Loading and Empty States
        </h2>
        <LoadingAndEmptyExample />
      </section>
    </div>
  );
};

// Basic Table Example
const BasicTableExample: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table columns={columns} items={sampleUsers} />
    </div>
  );
};

// Static Table Example
const StaticTableExample: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table>
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors">
                Edit
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
            <TableCell>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors">
                Edit
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

// Sortable Table Example
const SortableTableExample: React.FC = () => {
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
          Current sort: <strong>{sortDescriptor.column}</strong> ({sortDescriptor.direction})
        </p>
      </div>
      <Table
        columns={columns}
        items={sortedItems}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      />
    </div>
  );
};

// Selectable Table Example
const SelectableTableExample: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Selected: {selectedKeys === "all" ? "All" : (selectedKeys as Set<any>).size} items
        </p>
      </div>
      <Table
        columns={columns}
        items={sampleUsers}
        selectionMode="multiple"
        showSelectionCheckboxes
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      />
    </div>
  );
};

// Table with Content Example
const TableWithContentExample: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={columns}
        items={sampleUsers}
        topContent={
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">User Management</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Add User
            </button>
          </div>
        }
        bottomContent={
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Showing {sampleUsers.length} users
            </span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

// Table Variants Example
const TableVariantsExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Striped */}
      <div>
        <h3 className="text-lg font-medium mb-2">Striped Table</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={columns} items={sampleUsers.slice(0, 3)} isStriped />
        </div>
      </div>

      {/* Compact */}
      <div>
        <h3 className="text-lg font-medium mb-2">Compact Table</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={columns} items={sampleUsers.slice(0, 3)} isCompact />
        </div>
      </div>

      {/* Different Colors */}
      <div>
        <h3 className="text-lg font-medium mb-2">Colored Tables</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm mb-2">Primary</p>
            <Table columns={columns} items={sampleUsers.slice(0, 2)} color="primary" />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm mb-2">Success</p>
            <Table columns={columns} items={sampleUsers.slice(0, 2)} color="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Text Alignment Example
const TextAlignmentExample: React.FC = () => {
  // Sample data for demonstration
  const alignmentData = [
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

  const alignmentColumns = [
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

  return (
    <div className="space-y-6">
      {/* Default Alignment */}
      <div>
        <h3 className="text-lg font-medium mb-2">Default Column Alignment</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Each column can have its own alignment (start, center, end).
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={alignmentColumns} items={alignmentData} />
        </div>
      </div>

      {/* Center Header Text */}
      <div>
        <h3 className="text-lg font-medium mb-2">Centered Header Text</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Using <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">centerHeaderText=true</code> to center all column headers globally.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={alignmentColumns} items={alignmentData} centerHeaderText />
        </div>
      </div>

      {/* Center Cell Text */}
      <div>
        <h3 className="text-lg font-medium mb-2">Centered Cell Content</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Using <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">centerCellText=true</code> to center all table cell content globally.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={alignmentColumns} items={alignmentData} centerCellText />
        </div>
      </div>

      {/* Both Centered */}
      <div>
        <h3 className="text-lg font-medium mb-2">Both Headers and Cells Centered</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Using both <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">centerHeaderText</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">centerCellText</code> together.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={alignmentColumns} items={alignmentData} centerHeaderText centerCellText />
        </div>
      </div>
    </div>
  );
};

// Loading and Empty States Example
const LoadingAndEmptyExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Loading State */}
      <div>
        <h3 className="text-lg font-medium mb-2">Loading State</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={columns}>
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody isLoading>
              {/* Content will be replaced by loading indicator */}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Empty State */}
      <div>
        <h3 className="text-lg font-medium mb-2">Empty State</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table
            columns={columns}
            items={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default TableExamples;