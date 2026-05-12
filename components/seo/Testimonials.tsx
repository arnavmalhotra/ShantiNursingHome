import { Star, Quote } from "lucide-react"
import type { PatientReview } from "@/lib/reviews"

export function Testimonials({ reviews, heading = "What patients say" }: { reviews: PatientReview[]; heading?: string }) {
  if (!reviews.length) return null
  return (
    <section aria-labelledby="testimonials-heading" className="space-y-6">
      <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold text-center">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <figure
            key={`${r.author}-${r.date}`}
            className="rounded-lg border bg-card p-6 space-y-3"
          >
            <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
            <blockquote className="text-sm text-foreground leading-relaxed">{r.body}</blockquote>
            <figcaption className="space-y-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < r.rating ? "fill-primary text-primary" : "text-muted-foreground/30"
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <span className="sr-only">{r.rating} out of 5 stars</span>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{r.author}</span>
                {r.source && <> · {r.source}</>}
                {" · "}
                <time dateTime={r.date}>{new Date(r.date).toLocaleDateString("en-IN", { year: "numeric", month: "short" })}</time>
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
