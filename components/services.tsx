"use client"

import {
  DollarSign,
  Target,
  ShoppingCart,
  BarChart3,
  FileSignature,
  Zap,
} from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const services = [
  {
    icon: DollarSign,
    title: "Billing & Revenue Operations",
    description:
      "Contracts trigger invoices, usage data flows into billing, revenue gets recognized on schedule, and your finance team stops reconciling between 4 spreadsheets. From quote-to-cash without the manual handoffs.",
    accent: "border-t-cyan-400",
  },
  {
    icon: Target,
    title: "Sales Ops & CRM Hygiene",
    description:
      "New leads get enriched, scored, routed to the right rep, and logged in your CRM automatically. Deal stages update based on actual activity \u2014 not whether someone remembered to drag a card.",
    accent: "border-t-teal-400",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Vendor Management",
    description:
      "Purchase requests get routed for approval based on amount and department, POs generate automatically, vendor docs are tracked, and renewal dates trigger alerts \u2014 not surprises.",
    accent: "border-t-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Reporting & Executive Dashboards",
    description:
      "Your weekly ops report, pipeline summary, or board deck pulls live data from your actual systems \u2014 assembled, formatted, and delivered every Monday morning before you open your laptop.",
    accent: "border-t-cyan-300",
  },
  {
    icon: FileSignature,
    title: "Contract & Document Lifecycle",
    description:
      "NDAs, SOWs, and renewals get generated from templates, routed for e-signature, tracked through approval, and filed \u2014 with automatic alerts 90/60/30 days before expiration.",
    accent: "border-t-sky-400",
  },
  {
    icon: Zap,
    title: "Custom Workflows",
    description:
      "If your team does it repeatedly and it follows a pattern, we can probably automate it. We've built workflows for everything from compliance tracking to customer success alerts to inventory reordering. Start with a conversation.",
    accent: "border-t-indigo-400",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#1E293B] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What we automate
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div
                className={`glass-card group h-full rounded-lg border-t-2 ${service.accent} p-8`}
              >
                <service.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
