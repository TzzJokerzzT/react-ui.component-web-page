import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  cardColumns,
  cardContent,
  cardHeaderColumns,
  cardHeaderContent,
  cardBodyColumns,
  cardBodyContent,
  cardFooterColumns,
  cardFooterContent,
} from "./CardDocData";

export const CardDoc = () => {
  return (
    <div className="max-w-6xl mx-auto p-1 my-4">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Props Reference
        </h2>

        {/* Main Card Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Card
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table columns={cardColumns} items={cardContent} isStriped>
                <TableHeader columns={cardColumns} />
                <TableBody items={cardContent} />
              </Table>
            </div>
          </div>
        </div>

        {/* CardHeader Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            CardHeader
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={cardHeaderColumns}
                items={cardHeaderContent}
                isStriped
              >
                <TableHeader columns={cardHeaderColumns} />
                <TableBody items={cardHeaderContent} />
              </Table>
            </div>
          </div>
        </div>

        {/* CardBody Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            CardBody
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={cardBodyColumns}
                items={cardBodyContent}
                isStriped
              >
                <TableHeader columns={cardBodyColumns} />
                <TableBody items={cardBodyContent} />
              </Table>
            </div>
          </div>
        </div>

        {/* CardFooter Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            CardFooter
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <Table
                columns={cardFooterColumns}
                items={cardFooterContent}
                isStriped
              >
                <TableHeader columns={cardFooterColumns} />
                <TableBody items={cardFooterContent} />
              </Table>
            </div>
          </div>
        </div>

        {/* Type Definitions */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Type Definitions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                CardSize
              </h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <code className="text-blue-600 dark:text-blue-400">
                  "sm" | "md" | "lg" | "xl"
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                CardVariant
              </h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <code className="text-blue-600 dark:text-blue-400">
                  "elevated" | "bordered" | "shadow" | "flat"
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                CardColor
              </h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <code className="text-blue-600 dark:text-blue-400">
                  "default" | "primary" | "secondary" | "success" | "warning" |
                  "danger"
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                CardRadius
              </h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <code className="text-blue-600 dark:text-blue-400">
                  "none" | "sm" | "md" | "lg" | "xl" | "full"
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
