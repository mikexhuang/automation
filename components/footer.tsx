import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Full<span className="text-primary">Auto</span>Flow
        </a>
        <p className="text-sm text-muted-foreground">
          {"Reclaim your team's time."}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:mike@fullautoflow.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            mike@fullautoflow.com
          </a>
          <a
            href="#linkedin"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <Button asChild size="sm">
          <a href="https://calendly.com/mike-squad-ek3e/30min" target="_blank" rel="noopener noreferrer">Book a Free Workflow Audit</a>
        </Button>

        <p className="text-xs text-muted-foreground">
          {"© 2026 FullAutoFlow"}
        </p>
      </div>
    </footer>
  )
}
