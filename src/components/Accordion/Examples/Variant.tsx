import { ShowCodeButton } from "@/share/ShowCodeButton";
import { Accordion } from "../Accordion";
import { AccordionItem } from "../AccordionItem";
import { VariantAccordionCode } from "../Code/VariantCode";

export const VariantAccordion = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Variant
      </h2>
      <div>
        <p className="text-xs text-gray-500 mb-2">Flat</p>
        <Accordion variant="flat" color="primary">
          <AccordionItem itemKey="flat-1" title="Flat Variant">
            This is the flat variant with a subtle background color.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">Bordered</p>
        <Accordion variant="bordered" color="secondary">
          <AccordionItem itemKey="bordered-1" title="Bordered Variant">
            This is the bordered variant with visible borders.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">Shadow</p>
        <Accordion variant="shadow" color="success">
          <AccordionItem itemKey="shadow-1" title="Shadow Variant">
            This is the shadow variant with subtle shadows.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">Splitted</p>
        <Accordion variant="splitted" color="warning">
          <AccordionItem itemKey="splitted-1" title="Splitted Variant">
            This is the splitted variant with separated items.
          </AccordionItem>
          <AccordionItem itemKey="splitted-2" title="Another Item">
            Each item has its own container and spacing.
          </AccordionItem>
        </Accordion>
      </div>

      <ShowCodeButton codeBlock={<VariantAccordionCode title="Variant" />} />
    </div>
  );
};
