import Table, { TableBody, TableHeader } from "@/components/Table";
import { TableDocLayout } from "@/layout/tableDocLayout";
import { imagePropsColumns, imagePropsContent } from "./ImageDocData";

export const ImageDoc = () => {
  const content = [
    {
      id: 1,
      title: "Image Props",
      mainContent: (
        <Table columns={imagePropsColumns} items={imagePropsContent} isStriped>
          <TableHeader columns={imagePropsColumns} />
          <TableBody items={imagePropsContent} />
        </Table>
      ),
    },
  ];
  return <TableDocLayout content={content} />;
};
