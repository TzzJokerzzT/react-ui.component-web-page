import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const VariantAccordionCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`<div className="space-y-6">
  <Accordion variant="flat" color="primary">
    <AccordionItem itemKey="flat-1" title="Flat Variant">
      This is the flat variant with primary color.
    </AccordionItem>
  </Accordion>
  
  <Accordion variant="bordered" color="secondary">
    <AccordionItem itemKey="bordered-1" title="Bordered Variant">
      This is the bordered variant with secondary color.
    </AccordionItem>
  </Accordion>
  
  <Accordion variant="shadow" color="success">
    <AccordionItem itemKey="shadow-1" title="Shadow Variant">
      This is the shadow variant with success color.
    </AccordionItem>
  </Accordion>
  
  <Accordion variant="splitted" color="warning">
    <AccordionItem itemKey="splitted-1" title="Splitted Variant">
      This is the splitted variant with warning color.
    </AccordionItem>
  </Accordion>
</div>`}
    </CodeBlockLayout>
  );
};
