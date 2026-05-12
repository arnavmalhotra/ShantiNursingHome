import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SITE_URL, clinic, doctor } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"

const url = `${SITE_URL}/editorial-policy`

export const metadata: Metadata = {
  title: "Editorial Policy & Medical Review Process | Shanti Nursing Home",
  description:
    "How medical content on shantinursinghome.in is written, reviewed and kept up to date — written and reviewed by Dr. Vinita Malhotra (MBBS, DGO).",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "Editorial Policy — Shanti Nursing Home",
    description: "How our medical content is written and reviewed.",
    locale: "en_IN",
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Editorial Policy", url },
]

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs)]} />
      <div className="container py-10 md:py-14">
        <div className="mx-auto max-w-3xl space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Editorial Policy & Medical Review Process
            </h1>
            <p className="text-muted-foreground">
              Last reviewed: {new Date().toISOString().slice(0, 10)} by {doctor.name}, {doctor.degrees.join(", ")}.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Purpose</h2>
            <p className="text-muted-foreground">
              Medical information on {clinic.name}'s website is patient-focused, evidence-based and reviewed
              by a qualified gynaecologist. The goal is to give Saharanpur patients clear, trustworthy
              answers to common women's health questions — not generic content scraped from elsewhere.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Who writes and reviews our content</h2>
            <p className="text-muted-foreground">
              All clinical articles, FAQs, condition explanations and service descriptions on this site are
              written or reviewed by {doctor.name}, MBBS, DGO — Obstetrician, Gynaecologist & Vaginal Surgeon
              with {doctor.yearsExperience}+ years of practice in Saharanpur. Where editorial support is
              used, every line is reviewed by Dr. Malhotra before publishing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Sources we rely on</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Indian Federation of Obstetric and Gynaecological Societies (FOGSI) clinical guidelines.</li>
              <li>Indian Council of Medical Research (ICMR) recommendations.</li>
              <li>World Health Organization (WHO) women's health publications.</li>
              <li>American College of Obstetricians and Gynecologists (ACOG) committee opinions.</li>
              <li>Royal College of Obstetricians and Gynaecologists (RCOG) green-top guidelines.</li>
              <li>Peer-reviewed journals (BJOG, Obstetrics & Gynecology, The Lancet) for individual topics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">How often we update content</h2>
            <p className="text-muted-foreground">
              Every clinical article has a "Last reviewed" date. Pages are reviewed at least every 12 months,
              or sooner when guidelines change. When we update an article materially, the date is refreshed
              and the substantive change is reflected.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">What we will not do</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Publish fake or paid-for patient reviews.</li>
              <li>Make claims that aren't supported by current guidelines or peer-reviewed evidence.</li>
              <li>Diagnose, prescribe or treat over email, WhatsApp text or website forms.</li>
              <li>Recommend tests or procedures the patient doesn't need.</li>
              <li>Promote unproven supplements, "miracle" cures or alternative therapies in place of medicine.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Corrections</h2>
            <p className="text-muted-foreground">
              If you spot an error or want a clarification on any article, please email{" "}
              <a className="hover:underline text-primary" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
              . Substantive corrections are made promptly and noted with an updated "Last reviewed" date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Advertising & sponsorships</h2>
            <p className="text-muted-foreground">
              We do not accept paid placements, sponsored articles or affiliate links on this site. The
              website exists to inform our patients and the Saharanpur community — not to generate
              advertising revenue.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Patient privacy in content</h2>
            <p className="text-muted-foreground">
              No real patient is identified in our articles. Testimonials, if used, are published only with
              the patient's written consent and may use a first name + initial.
            </p>
          </section>

          <div className="rounded-lg border bg-muted/30 p-4 text-sm space-y-1">
            <p className="font-semibold">Related</p>
            <p className="text-muted-foreground">
              <Link href="/about" className="hover:underline text-primary">About</Link>{" · "}
              <Link href="/medical-disclaimer" className="hover:underline text-primary">Medical Disclaimer</Link>{" · "}
              <Link href="/privacy-policy" className="hover:underline text-primary">Privacy Policy</Link>
            </p>
          </div>

          <div className="rounded-lg bg-primary text-primary-foreground p-6 text-center space-y-3">
            <p>Have a clinical question? Talk to {doctor.name} directly.</p>
            <Link href="/appointment">
              <Button variant="secondary">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
