import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Faq } from "@/lib/seo-pages"

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="rounded-lg border bg-card">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left px-4">{faq.q}</AccordionTrigger>
            <AccordionContent className="px-4 text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
