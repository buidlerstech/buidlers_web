import Image from "next/image";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">faq</h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          respuestas rápidas para sumarte sin fricciones;
        </p>
      </div>
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="flex h-20 md:h-auto md:w-[14%] shrink-0 flex-col justify-end items-end bg-[var(--color-primary)] p-4">
          <Image
            src="/logo_full_negro.png"
            alt="buidlers"
            width={70}
            height={20}
            className="object-contain object-right"
          />
        </div>
        <div className="flex flex-1 border border-white/[0.06] bg-white/[0.03]">
          <div className="grid flex-1 gap-8 p-8 lg:grid-cols-2">
            <Accordion type="single" collapsible>
              {faqs.slice(0, 3).map((faq, index) => (
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
            <Accordion type="single" collapsible>
              {faqs.slice(3).map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index + 3}`}>
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
        </div>
      </div>
    </section>
  );
}
