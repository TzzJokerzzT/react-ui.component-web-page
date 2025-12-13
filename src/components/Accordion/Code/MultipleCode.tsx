import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const MultipleAccordionCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`<Accordion selectionMode="multiple" defaultExpandedKeys={["item-1", "item-3"]}>
  <AccordionItem itemKey="item-1" title="First Item">
    First item content - can be expanded simultaneously
  </AccordionItem>
  <AccordionItem itemKey="item-2" title="Second Item">
    Second item content - independent expansion
  </AccordionItem>
  <AccordionItem itemKey="item-3" title="Third Item">
    Third item content - also expandable
  </AccordionItem>
</Accordion>`}
    </CodeBlockLayout>
  );
};
