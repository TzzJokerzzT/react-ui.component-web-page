import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const ColorAccordionCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`<div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-2">Default</p>
                <Accordion color="default">
                  <AccordionItem itemKey="default-1" title="Default Color">
                    Default gray color scheme.
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Primary</p>
                <Accordion color="primary">
                  <AccordionItem itemKey="primary-1" title="Primary Color">
                    Blue color scheme for primary actions.
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Secondary</p>
                <Accordion color="secondary">
                  <AccordionItem itemKey="secondary-1" title="Secondary Color">
                    Purple color scheme for secondary elements.
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Success</p>
                <Accordion color="success">
                  <AccordionItem itemKey="success-1" title="Success Color">
                    Green color scheme for success states.
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Warning</p>
                <Accordion color="warning">
                  <AccordionItem itemKey="warning-1" title="Warning Color">
                    Amber color scheme for warning states.
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Danger</p>
                <Accordion color="danger">
                  <AccordionItem itemKey="danger-1" title="Danger Color">
                    Red color scheme for danger states.
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
`}
    </CodeBlockLayout>
  );
};
