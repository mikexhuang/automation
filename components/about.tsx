"use client"

import { Building2, Gamepad2, Award } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const badges = [
  { icon: Building2, label: "Former PwC" },
  { icon: Gamepad2, label: "Former FanDuel" },
  { icon: Award, label: "Executive Change Management" },
]

export function About() {
  return (
    <section className="bg-[#1E293B] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why us
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="glass-card mt-12 flex flex-col items-center gap-8 rounded-xl p-8 md:flex-row md:items-start md:p-10">
            {/* Headshot placeholder */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background text-2xl font-bold text-primary">
              MH
            </div>

            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Mike Huang built his first enterprise automation system inside PwC — a
                tool that started as an internal fix for his own team, scaled
                firm-wide, and became a cloud product used by clients. He went on to
                lead product at FanDuel, optimizing payment infrastructure and running
                cross-functional technical teams. {"He's"} also helped leaders through change management at Salesforce, Coinbase, and
                Pinterest.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-foreground">
                That combination — knowing how to build the automation AND how to get
                your team to actually adopt it — is what makes FullAutoFlow different.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <badge.icon className="h-3.5 w-3.5 text-primary" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
