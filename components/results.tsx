"use client"

import { FadeIn } from "@/components/fade-in"

const stats = [
  { value: "80%", label: "reduction in manual invoice processing time" },
  { value: "20-30 hrs", label: "given back to your operations team each week" },
  { value: "6 weeks", label: "from kickoff to working automation" },
]

export function Results() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The math is simple
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {stats.map((stat, i) => (
            <FadeIn key={stat.value} delay={i * 0.12}>
              <div className="text-center">
                <p className="gradient-text text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-muted-foreground">
            Based on industry benchmarks from McKinsey, Ardent Partners, and real
            client implementations.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
