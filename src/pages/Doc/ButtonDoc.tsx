import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  buttonColumns,
  buttonContent,
  buttonGroupColumns,
  buttonGroupContent,
} from "./ButtonDocData";
import { TableDocLayout } from "@/layout/tableDocLayout";

export const ButtonDoc = () => {
  const content = [
    {
      id: 1,
      title: "Button Props",
      mainContent: (
        <Table columns={buttonColumns} items={buttonContent} isStriped>
          <TableHeader columns={buttonColumns} />
          <TableBody items={buttonContent} />
        </Table>
      ),
      subContent: [
        {
          id: 1,
          title: "ButtonGroup Props",
          content: (
            <Table
              columns={buttonGroupColumns}
              items={buttonGroupContent}
              isStriped
            >
              <TableHeader columns={buttonGroupColumns} />
              <TableBody items={buttonGroupContent} />
            </Table>
          ),
        },
      ],
    },
  ];

  return <TableDocLayout content={content} />;
};
