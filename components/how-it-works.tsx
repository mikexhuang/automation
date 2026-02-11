"use client"

import { FadeIn } from "@/components/fade-in"

const steps = [
  {
    number: "01",
    title: "Workflow Audit",
    description:
      "We map your current processes, identify the 3-5 highest-ROI automation opportunities, and show you exactly how many hours and dollars you'll reclaim.",
  },
  {
    number: "02",
    title: "Build & Test",
    description:
      "We design and implement custom workflows using proven automation tools \u2014 connecting your existing systems, adding intelligent document processing where it matters, and testing with your real data.",
  },
  {
    number: "03",
    title: "Launch & Train",
    description:
      "Your team gets a working system they actually understand, plus documentation and training so you're never dependent on us.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From bottleneck to autopilot in 6 weeks
          </h2>
        </FadeIn>

        {/* Timeline layout */}
        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div className="absolute top-10 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center md:items-center">
                  {/* Circle node */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/40 bg-background">
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>
                  {/* Mobile connecting line */}
                  {i < steps.length - 1 && (
                    <div className="h-8 w-px bg-primary/20 md:hidden" />
                  )}
                  <h3 className="mt-4 text-xl font-semibold text-foreground md:mt-6">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.45}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            We use AI-powered tools like intelligent document extraction and smart
            routing where they deliver real ROI — not as a buzzword, but as a
            practical tool in your workflow.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
