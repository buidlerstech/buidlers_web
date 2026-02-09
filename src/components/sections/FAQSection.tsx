import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section id="faq" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">
          faq
        </h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          respuestas rapidas para sumarte sin fricciones;
        </p>
      </div>
      <div data-scroll-card>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base text-foreground lg:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
