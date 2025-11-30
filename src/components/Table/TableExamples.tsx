import React from "react";
import { TextAlignment } from "./Example/Alignment";
import { BasicTable } from "./Example/Basic";
import { LoadingAndEmpty } from "./Example/Loading";
import { SelectableTable } from "./Example/Selectable";
import { SortableTable } from "./Example/Sortable";
import { StaticTable } from "./Example/Static";
import { TableVariants } from "./Example/Variant";
import { TableWithContent } from "./Example/WithContent";
import { UsersTable } from "./Example/UserTable";
import { ProductsTable } from "./Example/Product";
import { OrdersTable } from "./Example/Order";
import { ProjectsTableExample } from "./Example/Project";
import { EmptyStateTable } from "./Example/Empty";
import { LoadingStateTable } from "./Example/LoadingState";
import { CustomEmptyContentTable } from "./Example/Custom";
import ExamplesLayout from "@/layout/ExamplesLayout";

const TableExamples: React.FC = () => {
  return (
    <ExamplesLayout>
      {/* Basic Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          1. Basic Table
        </h2>
        <BasicTable />
      </section>

      {/* Static Table with Custom Content */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          2. Static Table with Custom Content
        </h2>
        <StaticTable />
      </section>

      {/* Sortable Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          3. Sortable Table
        </h2>
        <SortableTable />
      </section>

      {/* Selectable Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          4. Selectable Table
        </h2>
        <SelectableTable />
      </section>

      {/* Table with Top and Bottom Content */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          5. Table with Top and Bottom Content
        </h2>
        <TableWithContent />
      </section>

      {/* Different Table Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          6. Table Variants
        </h2>
        <TableVariants />
      </section>

      {/* Text Alignment */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          7. Text Alignment
        </h2>
        <TextAlignment />
      </section>

      {/* Loading and Empty States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          8. Loading and Empty States
        </h2>
        <LoadingAndEmpty />
      </section>

      {/* Tabla de Empleados */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          👥 Gestión de Empleados
        </h2>
        <UsersTable />
      </section>

      {/* Tabla de Productos */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          📦 Catálogo de Productos
        </h2>
        <ProductsTable />
      </section>

      {/* Tabla de Pedidos */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          🛍️ Order Management
        </h3>
        <OrdersTable />
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
        <EmptyStateTable />
      </div>

      {/* Loading State Example */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          🔄 Loading State Example
        </h3>
        <LoadingStateTable />
      </div>

      {/* Custom Empty Content Example */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          🎨 Custom Empty Content Example
        </h3>
        <CustomEmptyContentTable />
      </div>
    </ExamplesLayout>
  );
};

export default TableExamples;

