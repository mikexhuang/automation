import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Testimonial } from "@/components/testimonial"
import { About } from "@/components/about"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="noise-overlay dot-pattern">
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Results />
        <div className="section-divider" />
        <Testimonial />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
