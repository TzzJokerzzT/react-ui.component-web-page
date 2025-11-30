import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const CustomEmptyContentTable = () => {
  const customColumns = [
    { key: "id", label: "ID", allowsSorting: true },
    { key: "product", label: "Product", allowsSorting: true },
    { key: "category", label: "Category", allowsSorting: true },
    { key: "price", label: "Price", allowsSorting: true },
  ];

  const customEmptyContent = (
    <div className="text-center">
      <div className="text-6xl mb-4">🛒</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        No products found
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Your product catalog is empty. Start by adding your first product.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Add First Product
      </button>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={customColumns}
        items={[]} // Empty array
        emptyContent={customEmptyContent} // Custom empty content
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">
                Product Catalog (Custom Empty)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Custom empty state with branded messaging
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Import Products
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Add Product
              </button>
            </div>
          </div>
        }
      >
        <TableHeader columns={customColumns} />
        <TableBody items={[]} />
      </Table>
    </div>
  );
};
