import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  toastPropsColumns,
  toastPropsContent,
  toastProviderPropsColumns,
  toastProviderPropsContent,
  useToastReturnColumns,
  useToastReturnContent,
} from "./ToastDocData";
import { TableDocLayout } from "@/layout/tableDocLayout";

export const ToastDoc = () => {
  const content = [
    {
      id: 1,
      title: "Toast Props",
      mainContent: (
        <Table columns={toastPropsColumns} items={toastPropsContent} isStriped>
          <TableHeader columns={toastPropsColumns} />
          <TableBody items={toastPropsContent} />
        </Table>
      ),
      subContent: [
        {
          id: 1,
          title: "Toast Provider",
          content: (
            <Table
              columns={toastProviderPropsColumns}
              items={toastProviderPropsContent}
              isStriped
            >
              <TableHeader columns={toastProviderPropsColumns} />
              <TableBody items={toastProviderPropsContent} />
            </Table>
          ),
        },
        {
          id: 2,
          title: "useToast Hook Return",
          content: (
            <Table
              columns={useToastReturnColumns}
              items={useToastReturnContent}
              isStriped
            >
              <TableHeader columns={useToastReturnColumns} />
              <TableBody items={useToastReturnContent} />
            </Table>
          ),
        },
      ],
    },
  ];
  return <TableDocLayout content={content} />;
};
