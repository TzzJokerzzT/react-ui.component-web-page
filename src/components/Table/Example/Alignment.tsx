import { alignmentColumns, alignmentData } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const TextAlignment = () => {
  return (
    <div className="space-y-6">
      {/* Default Alignment */}
      <div>
        <h3 className="text-lg font-medium mb-2">Default Column Alignment</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Each column can have its own alignment (start, center, end).
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table columns={alignmentColumns} items={alignmentData}>
            <TableHeader columns={alignmentColumns} />
            <TableBody items={alignmentData} />
          </Table>
        </div>
      </div>

      {/* Center Header Text */}
      <div>
        <h3 className="text-lg font-medium mb-2">Centered Header Text</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Using{" "}
          <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
            centerHeaderText=true
          </code>{" "}
          to center all column headers globally.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table
            columns={alignmentColumns}
            items={alignmentData}
            centerHeaderText
          >
            <TableHeader columns={alignmentColumns} />
            <TableBody items={alignmentData} />
          </Table>
        </div>
      </div>

      {/* Center Cell Text */}
      <div>
        <h3 className="text-lg font-medium mb-2">Centered Cell Content</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Using{" "}
          <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
            centerCellText=true
          </code>{" "}
          to center all table cell content globally.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table
            columns={alignmentColumns}
            items={alignmentData}
            centerCellText
          >
            <TableHeader columns={alignmentColumns} />
            <TableBody items={alignmentData} />
          </Table>
        </div>
      </div>

      {/* Both Centered */}
      <div>
        <h3 className="text-lg font-medium mb-2">
          Both Headers and Cells Centered
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Using both{" "}
          <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
            centerHeaderText
          </code>{" "}
          and{" "}
          <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
            centerCellText
          </code>{" "}
          together.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Table
            columns={alignmentColumns}
            items={alignmentData}
            centerHeaderText
            centerCellText
          >
            <TableHeader columns={alignmentColumns} />
            <TableBody items={alignmentData} />
          </Table>
        </div>
      </div>
    </div>
  );
};
