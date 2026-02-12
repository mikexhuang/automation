"use client"

import { FadeIn } from "@/components/fade-in"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote:
            "I'd hired two people specifically to manage our billing workflows, and somehow I was still spending half my week untangling the same issues. The complexity kept growing and the headcount wasn't solving it. FullAutoFlow came in, mapped the entire process, and automated what my team had been doing manually for months. We went from constant fire drills to a system that just runs. I got my time back and my team is finally focused on work that actually moves the needle.",
        initials: "SR",
        name: "Sarah R.",
        title: "Controller, B2B SaaS Company",
    },
    {
        quote:
            "Every month-end close was the same nightmare. My team and I would spend days manually reconciling transactions between our billing platform and NetSuite, chasing down discrepancies line by line. It was the part of the job I dreaded most. FullAutoFlow built an automated reconciliation workflow that syncs everything in near real-time. What used to eat up the first week of every month now takes a few hours of review. Close week finally feels manageable again.",
        initials: "MK",
        name: "Michael K.",
        title: "Senior Accountant, SaaS Company",
    },
]

export function Testimonial() {
    return (
        <section className="bg-[#1E293B] px-6 py-24 md:py-32">
            <div className="mx-auto max-w-4xl">
                <FadeIn>
                    <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        What Our Clients Say
                    </h2>
                    <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground">
                        Real results from real finance teams.
                    </p>
                </FadeIn>

                <div className="flex flex-col gap-8">
                    {testimonials.map((t, i) => (
                        <FadeIn key={i} delay={i * 0.15}>
                            <div className="relative rounded-2xl border border-[#334155] bg-[#0F172A]/60 p-8 backdrop-blur-sm md:p-12">
                                <Quote className="absolute -top-4 left-8 h-8 w-8 fill-[#06B6D4] text-[#06B6D4] md:left-12" />

                                <blockquote className="text-lg leading-relaxed text-[#CBD5E1] md:text-xl md:leading-relaxed">
                                    {`"${t.quote}"`}
                                </blockquote>

                                <div className="mt-8 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10 text-lg font-bold text-[#06B6D4]">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{t.name}</p>
                                        <p className="text-sm text-muted-foreground">{t.title}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
