/**
 * Real patient reviews go here.
 *
 * IMPORTANT — do NOT fabricate reviews. Google penalises fake reviews and India's
 * Consumer Protection Act prohibits them. Only paste reviews you actually received
 * (with consent from the patient — first name + initial is fine to preserve privacy).
 *
 * Reviews defined globally (allReviews) appear in the site-wide aggregate.
 * Reviews defined per-slug (reviewsBySlug) appear on that specific landing page
 * with full Review schema for rich results.
 *
 * Format:
 * {
 *   author: "Priya S.",
 *   rating: 5,                  // 1-5
 *   date: "2025-09-12",         // YYYY-MM-DD
 *   body: "Dr. Malhotra explained everything clearly...",
 *   source?: "Google" | "Lybrate" | "Justdial" | "Direct",
 * }
 */

export type PatientReview = {
  author: string
  rating: number
  date: string
  body: string
  source?: "Google" | "Lybrate" | "Justdial" | "Direct"
}

export const allReviews: PatientReview[] = [
  // Add 6-10 real reviews here once you have consent. Example:
  // {
  //   author: "Priya S.",
  //   rating: 5,
  //   date: "2025-08-14",
  //   body: "Dr. Malhotra was patient, thorough and never rushed me. My delivery went smoothly.",
  //   source: "Google",
  // },
]

export const reviewsBySlug: Record<string, PatientReview[]> = {
  // Example:
  // "pregnancy-care-saharanpur": [
  //   { author: "Anita R.", rating: 5, date: "2025-07-02", body: "Saw Dr. Malhotra through both my pregnancies...", source: "Google" },
  // ],
}

export function reviewsForSlug(slug: string): PatientReview[] {
  return reviewsBySlug[slug] ?? []
}
