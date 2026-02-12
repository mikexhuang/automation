"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const tools = [
  "NetSuite",
  "QuickBooks",
  "Salesforce",
  "HubSpot",
  "Slack",
  "Google Workspace",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-48 md:pb-32">
      {/* Aurora animated background */}
      <div className="aurora-bg pointer-events-none absolute inset-0" />

      {/* Extra radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <FadeIn>
          <h1 className="text-balance text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Your team is spending{" "}
            <span className="gradient-text">20+ hours a week</span>{" "}
            on work that should take minutes.
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            We build custom automation workflows that eliminate manual data entry,
            invoice processing, reporting, and the repetitive tasks draining your
            finance/accounting team — typically saving 20-40 hours per week within 6 weeks.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-base font-semibold">
              <a href="https://calendly.com/mike-squad-ek3e/30min" target="_blank" rel="noopener noreferrer">
                Book a Free Workflow Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-base text-foreground hover:bg-secondary bg-transparent"
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-20 border-t border-border/50 pt-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Built for teams running
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="glass-card rounded-md px-4 py-2 text-xs font-medium text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
