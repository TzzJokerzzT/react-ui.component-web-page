import { Table } from "./Table";

const TestCenterHeaders = () => {
  const columns = [
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
      key: "total",
      label: "Total",
      align: "end" as const,
    },
  ];

  const data = [
    {
      id: 1,
      key: "item-1",
      name: "Product A",
      price: "$19.99",
      total: "$499.75",
    },
    {
      id: 2,
      key: "item-2", 
      name: "Product B",
      price: "$29.99",
      total: "$449.85",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Normal Headers (Individual Alignment)</h2>
        <Table columns={columns} items={data} />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">Centered Headers (centerHeaderText=true)</h2>
        <Table columns={columns} items={data} centerHeaderText />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">Both Centered (centerHeaderText + centerCellText)</h2>
        <Table columns={columns} items={data} centerHeaderText centerCellText />
      </div>
    </div>
  );
};

export default TestCenterHeaders;