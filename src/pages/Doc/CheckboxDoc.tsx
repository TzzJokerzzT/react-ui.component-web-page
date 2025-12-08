import Table, { TableBody, TableHeader } from "@/components/Table";
import { TableDocLayout } from "@/layout/tableDocLayout";
import { checkboxColumns, checkboxContent } from "./CheckboxDocData";

export const CheckboxDoc = () => {
  const content = [
    {
      id: 1,
      title: "Checkbox Props",
      mainContent: (
        <Table columns={checkboxColumns} items={checkboxContent} isStriped>
          <TableHeader columns={checkboxColumns} />
          <TableBody items={checkboxContent} />
        </Table>
      ),
    },
  ];
  return <TableDocLayout content={content} />;
};
