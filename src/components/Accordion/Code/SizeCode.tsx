import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const SizeAccordionCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`<div className="space-y-4">
  <Accordion size="xs">
    <AccordionItem itemKey="xs-1" title="Extra Small">Content</AccordionItem>
  </Accordion>
  
  <Accordion size="sm">
    <AccordionItem itemKey="sm-1" title="Small">Content</AccordionItem>
  </Accordion>
  
  <Accordion size="md">
    <AccordionItem itemKey="md-1" title="Medium">Content</AccordionItem>
  </Accordion>
  
  <Accordion size="lg">
    <AccordionItem itemKey="lg-1" title="Large">Content</AccordionItem>
  </Accordion>
  
  <Accordion size="xl">
    <AccordionItem itemKey="xl-1" title="Extra Large">Content</AccordionItem>
  </Accordion>
</div>`}
    </CodeBlockLayout>
  );
};
