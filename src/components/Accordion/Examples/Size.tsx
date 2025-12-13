import { ShowCodeButton } from "@/share/ShowCodeButton";
import { Accordion } from "../Accordion";
import { AccordionItem } from "../AccordionItem";
import { SizeAccordionCode } from "../Code/SizeCode";

export const SizeAccordion = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Size
      </h2>
      <div>
        <p className="text-xs text-gray-500 mb-2">Extra Small</p>
        <Accordion size="xs">
          <AccordionItem itemKey="xs-1" title="Extra Small Accordion">
            Compact size for limited space.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">Small</p>
        <Accordion size="sm">
          <AccordionItem itemKey="sm-1" title="Small Accordion">
            Small size with minimal padding.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">Medium (Default)</p>
        <Accordion size="md">
          <AccordionItem itemKey="md-1" title="Medium Accordion">
            Default size with balanced spacing.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">Large</p>
        <Accordion size="lg">
          <AccordionItem itemKey="lg-1" title="Large Accordion">
            Large size with generous spacing.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">Extra Large</p>
        <Accordion size="xl">
          <AccordionItem itemKey="xl-1" title="Extra Large Accordion">
            Maximum size with spacious layout.
          </AccordionItem>
        </Accordion>
      </div>

      <ShowCodeButton codeBlock={<SizeAccordionCode title="Size Variants" />} />
    </section>
  );
};
