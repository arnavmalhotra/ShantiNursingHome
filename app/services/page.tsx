import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SITE_URL, clinic } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"
import { WhatsappIcon } from "@/components/seo/WhatsappIcon"

const url = `${SITE_URL}/services`

export const metadata: Metadata = {
  title: "Gynecology & Obstetrics Services | Shanti Nursing Home, Saharanpur",
  description:
    "All women's healthcare services at Shanti Nursing Home, Saharanpur — obstetrics, gynecology, infertility, PCOS, vaginal surgery, menopause and preventive care.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "Gynecology & Obstetrics Services — Shanti Nursing Home",
    description: "Detailed information on women's healthcare services at Shanti Nursing Home, Saharanpur.",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shanti Nursing Home Services" }],
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Services", url },
]

const services = [
  {
    title: "Obstetrics & Pregnancy Care",
    description:
      "Complete pregnancy journey — antenatal, delivery and postnatal — including high-risk pregnancies and recurrent loss management.",
    features: [
      "Antenatal visits & scans",
      "High-risk pregnancy management",
      "Normal delivery & C-section",
      "Postnatal recovery",
      "Lactation support",
    ],
    image: "/image1.png",
    links: [
      { label: "Pregnancy Care", href: "/pregnancy-care-saharanpur" },
      { label: "High-Risk Pregnancy", href: "/high-risk-pregnancy-saharanpur" },
      { label: "Normal Delivery & C-Section", href: "/normal-delivery-c-section-saharanpur" },
    ],
  },
  {
    title: "Vaginal Surgery",
    description:
      "Specialised vaginal-route surgical expertise — vaginal hysterectomy, prolapse repair and reconstructive surgery, with decades of experience.",
    features: [
      "Vaginal hysterectomy",
      "Prolapse repair (cystocele/rectocele)",
      "Reconstructive surgery",
      "Day-care procedures",
      "Detailed preoperative counselling",
    ],
    image: "/image.png",
    links: [
      { label: "Vaginal Surgery", href: "/vaginal-surgery-saharanpur" },
      { label: "Experienced Vaginal Surgeon", href: "/vaginal-surgeon-saharanpur" },
      { label: "Gynaecological Surgery", href: "/gynecological-surgery-saharanpur" },
    ],
  },
  {
    title: "Gynaecological Care",
    description:
      "Comprehensive treatment for the female reproductive system, breast health and urinary problems — from periods to menopause.",
    features: [
      "Period & menstrual disorders",
      "PCOS / PCOD treatment",
      "Vaginal infections & STI care",
      "Breast & urinary problems",
      "Pap smear & cancer screening",
    ],
    image: "/image3.png",
    links: [
      { label: "Gynaecologist Clinic", href: "/gynaecologist-saharanpur" },
      { label: "PCOS Treatment", href: "/pcod-pcos-treatment-saharanpur" },
      { label: "Annual Gynae Checkup", href: "/gynecological-checkup-saharanpur" },
    ],
  },
  {
    title: "Family Planning",
    description: "Counselling and services for contraception, IUCD insertion, family planning and preconception care.",
    features: [
      "Contraception counselling",
      "IUCD insertion & removal",
      "Pre-conception checkup",
      "Permanent contraception advice",
      "Postnatal contraception",
    ],
    image: "/image4.png",
    links: [
      { label: "Women's Healthcare", href: "/womens-healthcare-saharanpur" },
    ],
  },
  {
    title: "Women's Health (All Life Stages)",
    description: "From adolescent first periods through reproductive years to menopause — a single doctor for every life stage.",
    features: [
      "Adolescent care",
      "Reproductive years",
      "Pre- and postnatal support",
      "Perimenopause & menopause",
      "Bone & heart health post-menopause",
    ],
    image: "/image7.png",
    links: [
      { label: "Menopause Management", href: "/menopause-management-saharanpur" },
      { label: "Women's Health Clinic", href: "/womens-health-clinic-saharanpur" },
      { label: "Women's Healthcare", href: "/womens-healthcare-saharanpur" },
    ],
  },
  {
    title: "Infertility Treatment",
    description:
      "Comprehensive infertility evaluation and treatment for couples — both partners assessed, with honest counselling about realistic success.",
    features: [
      "Couple evaluation",
      "Hormonal testing",
      "Ovulation tracking",
      "PCOS-related infertility",
      "Onward IVF referral if needed",
    ],
    image: "/image5.png",
    links: [
      { label: "Infertility Treatment", href: "/infertility-treatment-saharanpur" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs)]} />
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Services</h1>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Comprehensive gynecology and obstetrics care at {clinic.name}, Saharanpur — delivered by Dr. Vinita Malhotra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border bg-card overflow-hidden flex flex-col">
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 mt-auto space-y-1">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Learn more</p>
                    <div className="flex flex-wrap gap-2">
                      {service.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:underline"
                        >
                          {link.label} <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">Why Choose Shanti Nursing Home</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Experienced Doctor", description: "Dr. Vinita Malhotra has been practicing in Saharanpur since 1996 — 25+ years of focused women's healthcare." },
                { title: "Specialist Skills", description: "One of the few clinics in Saharanpur offering vaginal-route surgery alongside complete obstetrics and gynaecology care." },
                { title: "Same-Doctor Continuity", description: "You see the same senior doctor at every visit — no rotating panel, no junior screening first." },
                { title: "Personalised Care", description: "Unhurried consultations with treatment plans built around your life, not a template." },
                { title: "Central Location", description: "Easy to reach on Circular Road, Prakashpuram, Saharanpur." },
                { title: "In-Person + Online", description: "Choose between in-person clinic visits or virtual consultations." },
              ].map((point, index) => (
                <div key={index} className="rounded-lg border bg-muted/50 p-4 space-y-2">
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-primary text-primary-foreground p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Ready to Schedule Your Visit?</h2>
            <p>Book an appointment with Dr. Vinita Malhotra at Shanti Nursing Home today.</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
