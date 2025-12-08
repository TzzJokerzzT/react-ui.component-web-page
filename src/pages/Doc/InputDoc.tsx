import Table, { TableHeader, TableBody } from "@/components/Table";
import { inputColumns, inputContent } from "./InputDocData";
import { TableDocLayout } from "@/layout/tableDocLayout";

export const InputDoc = () => {
  const content = [
    {
      id: 1,
      title: "Input Props",
      mainContent: (
        <Table columns={inputColumns} items={inputContent} isStriped>
          <TableHeader columns={inputColumns} />
          <TableBody items={inputContent} />
        </Table>
      ),
    },
  ];
  return <TableDocLayout content={content} />;
};
