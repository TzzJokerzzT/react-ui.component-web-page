import { ShowCodeButton } from "@/share/ShowCodeButton";
import { Accordion } from "../Accordion";
import { AccordionItem } from "../AccordionItem";
import { BasicAccordionCode } from "../Code/BasicCode";

export const BasicAccordion = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Basic
      </h2>
      <Accordion>
        <AccordionItem itemKey="basic-1" title="What is React?">
          <p>
            React is a JavaScript library for building user interfaces,
            particularly web applications. It allows developers to create
            reusable UI components and manage application state efficiently.
          </p>
        </AccordionItem>
        <AccordionItem itemKey="basic-2" title="What is TypeScript?">
          <p>
            TypeScript is a typed superset of JavaScript that compiles to plain
            JavaScript. It adds static type definitions to help catch errors
            during development.
          </p>
        </AccordionItem>
        <AccordionItem itemKey="basic-3" title="What is Tailwind CSS?">
          <p>
            Tailwind CSS is a utility-first CSS framework that provides
            low-level utility classes to build custom designs directly in your
            markup.
          </p>
        </AccordionItem>
      </Accordion>

      <ShowCodeButton
        codeBlock={<BasicAccordionCode title="Basic Accordion" />}
      />
    </section>
  );
};
