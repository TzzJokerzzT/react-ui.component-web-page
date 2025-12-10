import Table, { TableBody, TableHeader } from "@/components/Table";
import { TableDocLayout } from "@/layout/tableDocLayout";
import {
  columns,
  customColor,
  customColorColumns,
  tableContent,
} from "./TableDocData";

export const TableDoc = () => {
  const content = [
    {
      id: 1,
      title: "Table Props",
      mainContent: (
        <Table columns={columns} isStriped>
          <TableHeader columns={columns} />
          <TableBody items={tableContent} />
        </Table>
      ),
      subContent: [
        {
          id: 1,
          title: "Custom Colors",
          content: (
            <Table columns={customColorColumns} isStriped>
              <TableHeader columns={customColorColumns} />
              <TableBody items={customColor} />
            </Table>
          ),
        },
      ],
    },
  ];
  return <TableDocLayout content={content} />;
};
