import Table, { TableHeader, TableBody } from "@/components/Table";
import { columns, content } from "./TableDocData";

export const TableDoc = () => {
  return (
    <>
      {/* Props Reference Section */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Props Reference
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <Table columns={columns} items={content} isStriped>
              <TableHeader columns={columns} />
              <TableBody items={content} />
            </Table>
          </div>
        </div>

        {/* Type Definitions */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Type Definitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                TableColor
              </h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "default" | "primary" | "secondary" | "success" | "warning" |
                "danger" | "custom"
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                SelectionMode
              </h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "none" | "single" | "multiple"
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                TableLayout
              </h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "auto" | "fixed"
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                TableRadius
              </h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "none" | "sm" | "md" | "lg"
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                Selection
              </h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "all" | Set&lt;Key&gt;
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                ColumnAlign
              </h4>
              <code className="text-sm text-gray-600 dark:text-gray-300">
                "start" | "center" | "end"
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg col-span-full">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                CustomTableColor
              </h4>
              <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
{`{
  background?: string;    // Background color class
  border?: string;        // Border color class
  text?: string;          // Text color class
  hover?: string;         // Hover background class
  selected?: string;      // Selected background class
  gradient?: string;      // Gradient background class
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Custom Colors Usage Examples */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Custom Colors Usage Examples
          </h3>
          
          <div className="space-y-6">
            {/* Basic Custom Colors */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                Basic Custom Colors
              </h4>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<Table 
  color="custom" 
  customColor={{
    background: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-900 dark:text-purple-100",
    hover: "hover:bg-purple-100 dark:hover:bg-purple-800/30"
  }}
  columns={columns} 
  items={items} 
/>`}
              </pre>
            </div>

            {/* Gradient Custom Colors */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                Gradient Background
              </h4>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<Table 
  color="custom" 
  customColor={{
    gradient: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-gray-800 dark:text-gray-200"
  }}
  columns={columns} 
  items={items} 
/>`}
              </pre>
            </div>

            {/* Complete Custom Theme */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                Complete Custom Theme
              </h4>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<Table 
  color="custom" 
  customColor={{
    background: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    text: "text-emerald-900 dark:text-emerald-100",
    hover: "hover:bg-emerald-100 dark:hover:bg-emerald-800/30",
    selected: "bg-emerald-200 dark:bg-emerald-700/50"
  }}
  columns={columns} 
  items={items}
  selectionMode="multiple"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
