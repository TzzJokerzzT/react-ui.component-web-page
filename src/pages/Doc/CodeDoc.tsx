import Table, { TableHeader, TableBody } from "@/components/Table";
import { codePropsColumns, codePropsContent } from "./CodeDocData";
import { TableDocLayout } from "@/layout/tableDocLayout";

export const CodeDoc = () => {
  const content = [
    {
      id: 1,
      title: "Code Props",
      mainContent: (
        <Table columns={codePropsColumns} items={codePropsContent} isStriped>
          <TableHeader columns={codePropsColumns} />
          <TableBody items={codePropsContent} />
        </Table>
      ),
    },
  ];
  return <TableDocLayout content={content} />;
};
