import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL, clinic } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"

const url = `${SITE_URL}/privacy-policy`

export const metadata: Metadata = {
  title: "Privacy Policy | Shanti Nursing Home, Saharanpur",
  description:
    "How Shanti Nursing Home collects, uses and protects your personal and medical information. Patient confidentiality, website data and contact information.",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "Privacy Policy",
    description: "How Shanti Nursing Home handles your personal and medical information.",
    locale: "en_IN",
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Privacy Policy", url },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs)]} />
      <div className="container py-10 md:py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">
              Last updated: {new Date().toISOString().slice(0, 10)}
            </p>
          </header>

          <p className="text-muted-foreground">
            This Privacy Policy explains how {clinic.name} ("we", "our", "us") handles personal information collected
            through our website (<a className="hover:underline text-primary" href={SITE_URL}>{SITE_URL}</a>) and our
            in-clinic services. We take patient confidentiality seriously — medical information you share with us is
            protected and never sold.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Appointment form data:</strong> name, age, phone, email, preferred date / time, appointment
                type and reason for visit — entered by you on the booking form.
              </li>
              <li>
                <strong>WhatsApp / phone enquiries:</strong> the contact details and any messages you send us.
              </li>
              <li>
                <strong>Website analytics:</strong> via Google Analytics — anonymised page views, device type,
                approximate location (city level), referring site. No personally identifiable information is sent to
                Google Analytics from form fields.
              </li>
              <li>
                <strong>In-clinic medical records:</strong> history, examination findings, investigations, prescriptions,
                and follow-up notes — collected only during clinical care.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">How we use this information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>To schedule and confirm appointments.</li>
              <li>To deliver clinical care and follow-up.</li>
              <li>To send appointment reminders or reports when requested.</li>
              <li>To improve the website and patient experience (aggregated analytics only).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">What we do NOT do</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>We do not sell, rent or share your personal data with third-party marketers.</li>
              <li>We do not disclose medical records to anyone without your consent, except where required by law.</li>
              <li>We do not run targeted advertising based on your clinic data.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Third-party services</h2>
            <p className="text-muted-foreground text-sm">
              We use Google Analytics (privacy policy:{" "}
              <a className="hover:underline text-primary" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>
              ) for website analytics, and email-delivery providers (Resend / Nodemailer) for appointment-form
              notifications. These providers process limited technical data on our behalf.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Cookies</h2>
            <p className="text-muted-foreground text-sm">
              We use minimal cookies — mainly for Google Analytics. You can disable cookies in your browser settings;
              the site will still work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Data retention</h2>
            <p className="text-muted-foreground text-sm">
              Appointment-form submissions are kept only as long as needed to schedule and follow up on care. Medical
              records are retained in line with Indian medical-record retention norms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Your rights</h2>
            <p className="text-muted-foreground text-sm">
              You can request a copy of your records, correction of any inaccuracies, or deletion of your contact
              information from our systems (where legally permitted). Email us at{" "}
              <a className="hover:underline text-primary" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="text-muted-foreground text-sm">
              {clinic.name}, {clinic.address.streetAddress}, {clinic.address.addressLocality},{" "}
              {clinic.address.addressRegion} {clinic.address.postalCode}.<br />
              Phone: {clinic.phones.join(", ")}. Email: {clinic.email}.
            </p>
          </section>

          <p className="text-xs text-muted-foreground">
            See also:{" "}
            <Link href="/medical-disclaimer" className="hover:underline text-primary">Medical Disclaimer</Link>{" · "}
            <Link href="/editorial-policy" className="hover:underline text-primary">Editorial Policy</Link>
          </p>
        </div>
      </div>
    </>
  )
}
