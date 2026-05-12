import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { RelatedLink } from "@/lib/related"

export function RelatedSection({ items }: { items: RelatedLink[] }) {
  if (!items.length) return null
  return (
    <section aria-labelledby="related-care-heading" className="space-y-4">
      <h2 id="related-care-heading" className="text-2xl md:text-3xl font-bold text-center">
        Related care at Shanti Nursing Home
      </h2>
      <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
        Explore related services — Dr. Vinita Malhotra and the Shanti Nursing Home team handle
        every stage of women's health in one place.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className="rounded-lg border bg-card p-5 hover:bg-muted/50 transition-colors flex flex-col"
          >
            <h3 className="font-semibold leading-snug">{item.title}</h3>
            <p className="text-xs text-muted-foreground mt-2 flex-1">{item.blurb}</p>
            <span className="mt-3 text-sm font-medium text-primary inline-flex items-center gap-1">
              Learn more <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
