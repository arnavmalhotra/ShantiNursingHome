import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { SeoPage } from "@/lib/seo-pages"
import { SITE_URL, clinic } from "@/lib/clinic"
import {
  breadcrumbSchema,
  faqPageSchema,
  medicalWebPageSchema,
  reviewSchemas,
} from "@/lib/schema"
import { reviewsForSlug } from "@/lib/reviews"
import { relatedFor } from "@/lib/related"
import { JsonLd } from "./JsonLd"
import { Breadcrumbs } from "./Breadcrumbs"
import { DoctorHero } from "./DoctorHero"
import { ServiceGrid } from "./ServiceGrid"
import { SymptomsSection } from "./SymptomsSection"
import { TreatmentSection } from "./TreatmentSection"
import { FaqSection } from "./FaqSection"
import { ClinicInfo } from "./ClinicInfo"
import { ReviewsSection } from "./ReviewsSection"
import { Testimonials } from "./Testimonials"
import { RelatedSection } from "./RelatedSection"
import { WhatsappIcon } from "./WhatsappIcon"

export function SeoLandingPage({ page }: { page: SeoPage }) {
  const pageUrl = `${SITE_URL}/${page.slug}`

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: page.h1, url: pageUrl },
  ]

  const pageReviews = reviewsForSlug(page.slug)
  const related = relatedFor(page.slug)

  const schema: object[] = [
    medicalWebPageSchema(page),
    breadcrumbSchema(breadcrumbs),
    faqPageSchema(page.faqs),
    ...reviewSchemas(pageReviews, `${SITE_URL}/#clinic`),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl space-y-10 md:space-y-14">
          <Breadcrumbs items={breadcrumbs} />

          <DoctorHero h1={page.h1} intro={page.intro} />

          <ServiceGrid heading="What we treat & offer" services={page.services} />

          <SymptomsSection symptoms={page.symptoms} whenToVisit={page.whenToVisit} />

          <TreatmentSection steps={page.treatmentApproach} />

          {pageReviews.length > 0 ? <Testimonials reviews={pageReviews} /> : <ReviewsSection />}

          <FaqSection faqs={page.faqs} />

          <RelatedSection items={related} />

          <ClinicInfo />

          <section className="rounded-lg bg-primary text-primary-foreground p-6 md:p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">{page.ctaHeading}</h2>
            <p className="max-w-2xl mx-auto">{page.ctaSubheading}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link href="/appointment">
                <Button variant="secondary">Book Appointment</Button>
              </Link>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-500 hover:bg-green-600">
                  <WhatsappIcon className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
              <a href={`tel:${clinic.phones[0]}`}>
                <Button variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20">
                  Call {clinic.phones[0]}
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export function buildSeoMetadata(page: SeoPage) {
  const url = `${SITE_URL}/${page.slug}`
  return {
    metadataBase: new URL(SITE_URL),
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      url,
      siteName: "Shanti Nursing Home",
      title: page.title,
      description: page.description,
      locale: "en_IN",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: page.title,
      description: page.description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  }
}
