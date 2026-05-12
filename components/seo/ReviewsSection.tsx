import { Star } from "lucide-react"
import { reviewsSummary } from "@/lib/clinic"

export function ReviewsSection() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="rounded-lg border bg-card p-6 md:p-8 space-y-4"
    >
      <h2 id="reviews-heading" className="text-2xl font-bold">
        Patient Ratings & Reviews
      </h2>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            {reviewsSummary.ratingValue}/5
          </span>{" "}
          across{" "}
          <span className="font-semibold text-foreground">
            {reviewsSummary.reviewCount}+
          </span>{" "}
          verified patient ratings
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        Dr. Vinita Malhotra has been caring for women in Saharanpur since 1996. Public
        review footprint includes{" "}
        {reviewsSummary.sources.map((source, i) => (
          <span key={source.name}>
            {i > 0 && ", "}
            <span className="font-medium text-foreground">{source.count}+ ratings on {source.name}</span>
          </span>
        ))}
        , alongside strong word-of-mouth across families in the Saharanpur region.
      </p>
    </section>
  )
}
