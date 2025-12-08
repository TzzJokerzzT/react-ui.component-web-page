import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  switchContent,
  switchPropsColumns,
  switchSlotsColumns,
  switchSlotsContent,
  thumbIconContent,
} from "./SwitchDocData";
import { TableDocLayout } from "@/layout/tableDocLayout";

export const SwitchDoc = () => {
  const content = [
    {
      id: 1,
      title: "Switch Props",
      mainContent: (
        <Table columns={switchPropsColumns} isStriped>
          <TableHeader columns={switchPropsColumns} />
          <TableBody items={switchContent} />
        </Table>
      ),
      subContent: [
        {
          id: 1,
          title: "ThumbIcon Props",
          content: (
            <Table columns={switchPropsColumns} isStriped>
              <TableHeader columns={switchPropsColumns} />
              <TableBody items={thumbIconContent} />
            </Table>
          ),
        },
        {
          id: 2,
          title: "Switch Slots",
          content: (
            <Table columns={switchSlotsColumns} isStriped>
              <TableHeader columns={switchSlotsColumns} />
              <TableBody items={switchSlotsContent} />
            </Table>
          ),
        },
      ],
    },
  ];
  return <TableDocLayout content={content} />;
};
