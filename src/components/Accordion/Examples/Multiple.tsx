import { ShowCodeButton } from "@/share/ShowCodeButton";
import { Accordion } from "../Accordion";
import { AccordionItem } from "../AccordionItem";
import { MultipleAccordionCode } from "../Code/MultipleCode";

export const MultipleAccordion = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Multple Selection
      </h2>
      <Accordion
        selectionMode="multiple"
        defaultExpandedKeys={["multi-1", "multi-3"]}
      >
        <AccordionItem itemKey="multi-1" title="First Item">
          <p>
            This item can be expanded simultaneously with others. Multiple
            selection mode allows several items to be open at once.
          </p>
        </AccordionItem>
        <AccordionItem itemKey="multi-2" title="Second Item">
          <p>
            Independent expansion - this item's state doesn't affect others.
          </p>
        </AccordionItem>
        <AccordionItem itemKey="multi-3" title="Third Item">
          <p>
            Also expandable independently. Notice how multiple items can remain
            open.
          </p>
        </AccordionItem>
        <AccordionItem itemKey="multi-4" title="Fourth Item">
          <p>
            Another item that demonstrates the multiple selection capability.
          </p>
        </AccordionItem>
      </Accordion>

      <ShowCodeButton
        codeBlock={
          <MultipleAccordionCode title="Multiple Selection Accordion" />
        }
      />
    </section>
  );
};
