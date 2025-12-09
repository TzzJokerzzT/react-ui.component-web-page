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
import { CustomStyleTable } from "./Example/CustomStyle";

const TableExamples: React.FC = () => {
  return (
    <ExamplesLayout>
      {/* Basic Table */}
      <BasicTable />

      {/* Static Table with Custom Content */}
      <StaticTable />

      {/* Sortable Table */}
      <SortableTable />

      {/* Selectable Table */}
      <SelectableTable />

      {/* Table with Top and Bottom Content */}
      <TableWithContent />

      {/* Different Table Variants */}
      <TableVariants />

      {/* Text Alignment */}
      <TextAlignment />

      {/* Loading and Empty States */}
      <LoadingAndEmpty />

      {/* Tabla de Empleados */}
      <UsersTable />

      {/* Tabla de Productos */}
      <ProductsTable />

      {/* Tabla de Pedidos */}
      <OrdersTable />

      {/* Tabla de Proyectos */}
      <ProjectsTableExample />

      {/* Empty State Example */}
      <EmptyStateTable />

      {/* Loading State Example */}
      <LoadingStateTable />

      {/* Custom Empty Content Example */}
      <CustomEmptyContentTable />

      {/* Custom Empty Content Example */}
      <CustomStyleTable />
    </ExamplesLayout>
  );
};

export default TableExamples;
