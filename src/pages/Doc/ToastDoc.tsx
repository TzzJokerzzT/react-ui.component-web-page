import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  toastPropsColumns,
  toastPropsContent,
  toastProviderPropsColumns,
  toastProviderPropsContent,
  useToastReturnColumns,
  useToastReturnContent,
} from "./ToastDocData";

export const ToastDoc = () => {
  return (
    <>
      {/* Props Reference Section */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Props Reference
        </h2>

        {/* ToastProps */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            ToastProps
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={toastPropsColumns}
                items={toastPropsContent}
                isStriped
              >
                <TableHeader columns={toastPropsColumns} />
                <TableBody items={toastPropsContent} />
              </Table>
            </div>
          </div>
        </div>

        {/* ToastProviderProps */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            ToastProviderProps
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={toastProviderPropsColumns}
                items={toastProviderPropsContent}
                isStriped
              >
                <TableHeader columns={toastProviderPropsColumns} />
                <TableBody items={toastProviderPropsContent} />
              </Table>
            </div>
          </div>
        </div>

        {/* UseToastReturn */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            useToast Hook Return
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={useToastReturnColumns}
                items={useToastReturnContent}
                isStriped
              >
                <TableHeader columns={useToastReturnColumns} />
                <TableBody items={useToastReturnContent} />
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Type Definitions */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Type Definitions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ToastType
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "success" | "error" | "warning" | "info" | "default"
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ToastPosition
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "top" | "top-left" | "top-right" | "bottom" | "bottom-left" |
              "bottom-right"
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ToastSize
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "sm" | "md" | "lg"
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ToastVariant
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "solid" | "bordered" | "flat" | "faded" | "shadow"
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              ToastRadius
            </h4>
            <code className="text-sm text-gray-600 dark:text-gray-300">
              "none" | "sm" | "md" | "lg" | "full"
            </code>
          </div>
        </div>
      </section>
    </>
  );
};
