"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const includes = [
  "Workflow audit",
  "Implementation of 2-3 automated workflows",
  "Integration with your existing systems",
  "Team training & documentation",
]

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {/* Main card */}
          <FadeIn delay={0.1} className="md:col-span-3">
            <div className="glass-card h-full rounded-xl border-t-2 border-t-primary p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                Workflow Automation Sprint
              </p>
              <p className="mt-4 text-3xl font-bold text-foreground">
                $7,500 – $15,000
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                depending on complexity
              </p>
              <p className="mt-2 text-sm text-muted-foreground">4-6 week engagement</p>

              <ul className="mt-6 flex flex-col gap-3">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-medium text-foreground">
                No retainers. No subscriptions. You own everything we build.
              </p>

              <Button asChild size="lg" className="mt-6 w-full text-base font-semibold">
                <a href="https://calendly.com/mike-squad-ek3e/30min" target="_blank" rel="noopener noreferrer">
                  Book a Free Workflow Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Secondary card */}
          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="glass-card flex h-full flex-col justify-center rounded-xl p-8">
              <p className="mt-4 text-3xl font-bold text-foreground">
                Ongoing Support
              </p>
              {/*
              <p className="mt-4 text-2xl font-bold text-foreground">
                $250<span className="text-base font-normal text-muted-foreground">/mo</span>
              </p>
              */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Need us to maintain, monitor, or expand your workflows? Monthly
                support plans available.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
