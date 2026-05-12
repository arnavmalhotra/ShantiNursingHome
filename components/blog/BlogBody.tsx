import { Info, AlertTriangle } from "lucide-react"
import type { BlogSection } from "@/lib/blog-posts"
import { FaqSection } from "@/components/seo/FaqSection"

export function BlogBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => {
        switch (section.type) {
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-foreground">
                {section.text}
              </p>
            )
          case "h2":
            return (
              <h2 key={i} className="text-2xl md:text-3xl font-bold mt-8">
                {section.text}
              </h2>
            )
          case "h3":
            return (
              <h3 key={i} className="text-xl font-semibold mt-4">
                {section.text}
              </h3>
            )
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 text-foreground">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2 text-foreground">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            )
          case "callout": {
            const isWarn = section.variant === "warn"
            const Icon = isWarn ? AlertTriangle : Info
            return (
              <aside
                key={i}
                className={`rounded-lg border-l-4 p-4 flex gap-3 ${
                  isWarn
                    ? "border-red-500 bg-red-50 text-red-900"
                    : "border-primary bg-primary/5 text-foreground"
                }`}
              >
                <Icon className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed">{section.text}</p>
              </aside>
            )
          }
          case "faq":
            return <FaqSection key={i} faqs={section.items} />
          default:
            return null
        }
      })}
    </div>
  )
}
