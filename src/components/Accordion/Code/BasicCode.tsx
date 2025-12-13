import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const BasicAccordionCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`<Accordion>
  <AccordionItem itemKey="item-1" title="What is React?">
    React is a JavaScript library for building user interfaces.
  </AccordionItem>
  <AccordionItem itemKey="item-2" title="What is TypeScript?">
    TypeScript is a typed superset of JavaScript.
  </AccordionItem>
</Accordion>`}
    </CodeBlockLayout>
  );
};
