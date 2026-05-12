import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/clinic"

const url = `${SITE_URL}/appointment`

export const metadata: Metadata = {
  title: "Book Appointment | Shanti Nursing Home, Saharanpur",
  description:
    "Book an appointment with Dr. Vinita Malhotra at Shanti Nursing Home in Saharanpur. Same-day appointments often available. In-person + online consultations.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "Book Appointment — Shanti Nursing Home",
    description: "Easily book your gynecology, obstetrics or fertility appointment online.",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shanti Nursing Home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment — Shanti Nursing Home",
    description: "Easily book your gynecology, obstetrics or fertility appointment online.",
    images: ["/og-image.png"],
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Book Appointment", url },
]

const reserveActionSchema = {
  "@context": "https://schema.org",
  "@type": "ReserveAction",
  target: {
    "@type": "EntryPoint",
    urlTemplate: url,
    inLanguage: "en-IN",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
  result: { "@type": "Reservation", name: "Doctor Appointment" },
  provider: { "@id": `${SITE_URL}/#clinic` },
}

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), reserveActionSchema]} />
      {children}
    </>
  )
}
