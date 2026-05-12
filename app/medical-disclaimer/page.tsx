import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SITE_URL, clinic, doctor } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"

const url = `${SITE_URL}/medical-disclaimer`

export const metadata: Metadata = {
  title: "Medical Disclaimer | Shanti Nursing Home, Saharanpur",
  description:
    "Medical disclaimer for shantinursinghome.in — website content is general patient education and not a substitute for in-person consultation with a qualified gynaecologist.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "Medical Disclaimer",
    description: "Important information about the medical content on this website.",
    locale: "en_IN",
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Medical Disclaimer", url },
]

export default function MedicalDisclaimerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs)]} />
      <div className="container py-10 md:py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Medical Disclaimer</h1>
            <p className="text-muted-foreground text-sm">
              Last updated: {new Date().toISOString().slice(0, 10)}
            </p>
          </header>

          <p className="text-muted-foreground">
            The information on {clinic.name}'s website ({SITE_URL}) is provided for general educational purposes only.
            It is reviewed by qualified medical professionals, but it does not replace a consultation with your own
            doctor.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Not personal medical advice</h2>
            <p className="text-muted-foreground text-sm">
              Every patient is unique. The articles, FAQs, condition pages and service descriptions on this site are
              not personal medical advice and should not be used to self-diagnose, self-treat or change any prescribed
              medication. Symptoms that look similar can have very different causes and treatments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">No doctor–patient relationship through this site</h2>
            <p className="text-muted-foreground text-sm">
              Visiting this website, reading our content, or submitting an appointment-request form does not by itself
              create a doctor–patient relationship between you and {doctor.name} or {clinic.name}. A formal
              relationship begins only when you have a confirmed consultation with the doctor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">In an emergency</h2>
            <p className="text-muted-foreground text-sm">
              If you are experiencing a medical emergency — heavy bleeding, severe abdominal pain, breathing
              difficulty, signs of stroke, suspected miscarriage or any other urgent symptom — do not rely on website
              information. Go to the nearest emergency department, or call our clinic at {clinic.phones[0]}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">External links</h2>
            <p className="text-muted-foreground text-sm">
              Where this site links to external websites (e.g., FOGSI, WHO, ACOG, Lybrate, Justdial), we are not
              responsible for their content. Inclusion of a link is not an endorsement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Accuracy & updates</h2>
            <p className="text-muted-foreground text-sm">
              We make reasonable efforts to keep content accurate and current — see our{" "}
              <Link href="/editorial-policy" className="hover:underline text-primary">Editorial Policy</Link>. Medical
              knowledge changes; the most current standard for any condition is set by your treating clinician at the
              time of care.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Limitation of liability</h2>
            <p className="text-muted-foreground text-sm">
              To the maximum extent permitted by law, {clinic.name} and {doctor.name} are not liable for any loss or
              damage arising from your use of, or reliance on, content on this website where you have not had a
              formal consultation.
            </p>
          </section>

          <div className="rounded-lg bg-primary text-primary-foreground p-6 text-center space-y-3">
            <p>For personal medical advice, please book a consultation.</p>
            <Link href="/appointment">
              <Button variant="secondary">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
