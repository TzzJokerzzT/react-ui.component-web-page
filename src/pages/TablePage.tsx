import TableExamples from "@/components/Table/TableExamples";
import PagesLayout from "@/layout/PagesLayout";
import { TableDoc } from "./Doc/TableDoc";

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
      <TableExamples />

      {/* Props Reference Section */}
      <TableDoc />
    </PagesLayout>
  );
};

export default TablePage;
