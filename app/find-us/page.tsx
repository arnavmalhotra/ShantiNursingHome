import type { Metadata } from "next"
import Link from "next/link"
import { Navigation, MapPin, Phone, Clock, Car, Bus, Train } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_URL, clinic, directions, areasServed } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"
import { ClinicInfo } from "@/components/seo/ClinicInfo"
import { AreasServed } from "@/components/seo/AreasServed"
import { WhatsappIcon } from "@/components/seo/WhatsappIcon"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"

const url = `${SITE_URL}/find-us`

export const metadata: Metadata = {
  title: "How to Find Shanti Nursing Home in Saharanpur | Directions & Map",
  description:
    "Step-by-step directions to Shanti Nursing Home in Saharanpur — from Court Road, Delhi Road, Ambala Road, Railway Station and Bus Stand. Map, parking and contact details.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "How to Find Shanti Nursing Home in Saharanpur",
    description: "Directions from major Saharanpur landmarks. Map, parking and contact.",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shanti Nursing Home" }],
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Find Us", url },
]

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": `${url}#place`,
  name: clinic.name,
  url,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.streetAddress,
    addressLocality: clinic.address.addressLocality,
    addressRegion: clinic.address.addressRegion,
    postalCode: clinic.address.postalCode,
    addressCountry: clinic.address.addressCountry,
  },
  geo: { "@type": "GeoCoordinates", latitude: clinic.geo.latitude, longitude: clinic.geo.longitude },
  hasMap: `https://www.google.com/maps?q=${clinic.geo.latitude},${clinic.geo.longitude}`,
}

export default function FindUsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), placeSchema]} />
      <div className="container py-10 md:py-14">
        <div className="mx-auto max-w-5xl space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              How to find Shanti Nursing Home
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-3xl">
              Shanti Nursing Home is on Circular Road, opposite the private ward of SBD Hospital,
              Prakashpuram, Saharanpur. Easy to reach from anywhere in the city by car, auto-rickshaw
              or e-rickshaw.
            </p>
          </header>

          {/* Quick facts strip */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-semibold">Address</p>
                <p className="text-muted-foreground">
                  Circular Road, opp. Private Ward, SBD Hospital, Prakashpuram, Saharanpur 247001
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">
                  <a className="hover:underline" href={`tel:${clinic.phones[0]}`}>{clinic.phones[0]}</a>
                  <br />
                  <a className="hover:underline" href={`tel:${clinic.phones[1]}`}>{clinic.phones[1]}</a>
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-semibold">Hours</p>
                <p className="text-muted-foreground">
                  Mon–Sat 11 AM–3 PM, 6:30–8 PM
                  <br />
                  Sun 12–2 PM (by appointment)
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg border bg-card p-4 md:p-6 space-y-3">
            <h2 className="text-xl font-bold">On the map</h2>
            <div className="aspect-[21/9] w-full overflow-hidden rounded-md">
              <iframe
                title="Map of Shanti Nursing Home, Saharanpur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.1536701213997!2d77.55683767620589!3d29.956928274967822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeaa04a268cc7%3A0xbf48d0db6b75cbec!2sShanti%20Nursing%20Home!5e1!3m2!1sen!2sca!4v1746291883106!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps?q=${clinic.geo.latitude},${clinic.geo.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Open in Google Maps
            </a>
          </div>

          {/* Directions from landmarks */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Directions from major landmarks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {directions.map((d) => (
                <div key={d.from} className="rounded-lg border bg-card p-5">
                  <div className="flex items-center gap-2 font-semibold">
                    {d.from.includes("Railway") ? (
                      <Train className="h-4 w-4 text-primary" aria-hidden="true" />
                    ) : d.from.includes("Bus") ? (
                      <Bus className="h-4 w-4 text-primary" aria-hidden="true" />
                    ) : (
                      <Car className="h-4 w-4 text-primary" aria-hidden="true" />
                    )}
                    From {d.from}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{d.text}</p>
                </div>
              ))}
            </div>
          </section>

          <AreasServed />

          <ClinicInfo />

          <div className="rounded-lg bg-primary text-primary-foreground p-6 md:p-8 text-center space-y-3">
            <h2 className="text-2xl font-bold">Need help finding us?</h2>
            <p>Call or WhatsApp the clinic — we'll guide you straight to the entrance.</p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <a href={`tel:${clinic.phones[0]}`}>
                <Button variant="secondary">Call {clinic.phones[0]}</Button>
              </a>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-500 hover:bg-green-600">
                  <WhatsappIcon className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
              <Link href="/appointment">
                <Button variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
