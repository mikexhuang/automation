"use client"

import { AlertTriangle, Clock, Copy } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const problems = [
  {
    icon: AlertTriangle,
    text: "Your AP team manually keys invoices into your ERP — and still makes errors",
  },
  {
    icon: Clock,
    text: "Month-end close takes 5+ days because data lives in 6 different spreadsheets",
  },
  {
    icon: Copy,
    text: "Your best people spend their mornings copying data between systems instead of doing actual work",
  },
]

export function Problem() {
  return (
    <section className="bg-[#1E293B] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sound familiar?
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <FadeIn key={problem.text} delay={i * 0.1}>
              <div className="glass-card h-full rounded-lg p-8">
                <problem.icon className="mb-4 h-8 w-8 text-primary" />
                <p className="text-base leading-relaxed text-foreground">{problem.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            {"These aren't technology problems. They're workflow problems. And they're costing mid-size companies $100K\u2013$500K per year in wasted labor, late fees, and missed opportunities."}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
