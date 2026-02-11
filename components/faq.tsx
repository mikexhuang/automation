"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "@/components/fade-in"

const faqs = [
  {
    question: "What tools do you use?",
    answer:
      "We primarily build with n8n (a powerful open-source workflow automation platform), connected to AI services for intelligent document processing and your existing business tools. Everything runs on infrastructure you control \u2014 no vendor lock-in.",
  },
  {
    question: "Do we need to change our existing systems?",
    answer:
      "No. We work with what you already have \u2014 NetSuite, QuickBooks, Salesforce, Google Workspace, Slack, email. The whole point is connecting your current tools, not replacing them.",
  },
  {
    question: "What if our processes are messy or undocumented?",
    answer:
      "That\u2019s normal and expected. The workflow audit exists specifically to untangle this. We\u2019ve worked inside Big 4 environments where nothing was documented either.",
  },
  {
    question: "How is this different from buying software like Celigo or Zapier?",
    answer:
      "Those tools charge monthly per-task or per-connection fees that grow with your usage. We build custom workflows you own outright, hosted on your infrastructure, with no ongoing platform fees.",
  },
  {
    question: "What happens after the engagement ends?",
    answer:
      "You get full ownership of all workflows, documentation, and training. Your team can maintain and modify everything. If you want ongoing support, we offer that too \u2014 but you\u2019re never locked in.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-[#1E293B] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border/50 pl-4 transition-all data-[state=open]:border-l-2 data-[state=open]:border-l-primary"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
