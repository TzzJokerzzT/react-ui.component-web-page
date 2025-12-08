import Table, { TableHeader, TableBody } from "@/components/Table";
import {
  cardColumns,
  cardContent,
  cardHeaderColumns,
  cardHeaderContent,
  cardBodyColumns,
  cardBodyContent,
  cardFooterColumns,
  cardFooterContent,
} from "./CardDocData";
import { TableDocLayout } from "@/layout/tableDocLayout";

export const CardDoc = () => {
  const content = [
    {
      id: 1,
      title: "Card Props",
      mainContent: (
        <Table columns={cardColumns} items={cardContent} isStriped>
          <TableHeader columns={cardColumns} />
          <TableBody items={cardContent} />
        </Table>
      ),
      subContent: [
        {
          id: 1,
          title: "CardHeader Props",
          content: (
            <Table
              columns={cardHeaderColumns}
              items={cardHeaderContent}
              isStriped
            >
              <TableHeader columns={cardHeaderColumns} />
              <TableBody items={cardHeaderContent} />
            </Table>
          ),
        },
        {
          id: 2,
          title: "CardBody Props",
          content: (
            <Table columns={cardBodyColumns} items={cardBodyContent} isStriped>
              <TableHeader columns={cardBodyColumns} />
              <TableBody items={cardBodyContent} />
            </Table>
          ),
        },
        {
          id: 3,
          title: "CardFooter Props",
          content: (
            <Table columns={cardFooterColumns} isStriped>
              <TableHeader columns={cardFooterColumns} />
              <TableBody items={cardFooterContent} />
            </Table>
          ),
        },
      ],
    },
  ];
  return <TableDocLayout content={content} />;
};
