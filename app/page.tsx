import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Phone, Video, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { SITE_URL, clinic, doctor, reviewsSummary } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema"
import { FaqSection } from "@/components/seo/FaqSection"
import { WhatsappIcon } from "@/components/seo/WhatsappIcon"

export const metadata: Metadata = {
  title: "Shanti Nursing Home — Dr. Vinita Malhotra, Gynaecologist in Saharanpur",
  description:
    "Senior gynaecologist & obstetrician in Saharanpur — Dr. Vinita Malhotra (MBBS, DGO), practicing since 1996. Pregnancy, infertility, PCOS, vaginal surgery, menopause. Book online or call +91-9410805042.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Shanti Nursing Home",
    title: "Shanti Nursing Home — Dr. Vinita Malhotra, Saharanpur",
    description:
      "Senior gynaecologist & obstetrician in Saharanpur since 1996. Book in-person or online consultation.",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shanti Nursing Home" }],
  },
}

const homeFaqs = [
  {
    q: "Where is Shanti Nursing Home located in Saharanpur?",
    a: "Circular Road, opposite Private Ward, SBD Hospital, Prakashpuram, Saharanpur, Uttar Pradesh 247001. Central Saharanpur — easy to reach by auto, e-rickshaw or car.",
  },
  {
    q: "Who is Dr. Vinita Malhotra?",
    a: "Dr. Vinita Malhotra is a senior gynaecologist, obstetrician and surgeon (MBBS, DGO) who has been practicing in Saharanpur since 1996. She personally handles consultations, surgeries and deliveries at Shanti Nursing Home.",
  },
  {
    q: "What conditions does the clinic treat?",
    a: "Periods & PCOS, pregnancy and delivery (including high-risk), infertility evaluation, vaginal surgery, gynaecological surgery, menopause care, breast and urinary problems in women, and routine well-woman checkups.",
  },
  {
    q: "What are the clinic hours?",
    a: "Monday to Saturday: 11:00 AM – 3:00 PM and 6:30 PM – 8:00 PM. Sunday: 12:00 PM – 2:00 PM by appointment.",
  },
  {
    q: "Do you offer online / virtual consultations?",
    a: "Yes. Virtual consultations are available by appointment for follow-ups, report review, second opinions and many non-emergency concerns.",
  },
  {
    q: "How do I book an appointment?",
    a: "Use the Book Appointment page on this website, call +91-9410805042 or WhatsApp the clinic. Same-day appointments are usually possible during clinic hours.",
  },
]

const SERVICE_LINKS: { title: string; description: string; href: string }[] = [
  {
    title: "Pregnancy Care",
    description: "Complete antenatal & delivery care, including high-risk pregnancies.",
    href: "/pregnancy-care-saharanpur",
  },
  {
    title: "High-Risk Pregnancy",
    description: "BP, diabetes, thyroid, advanced age and recurrent loss management.",
    href: "/high-risk-pregnancy-saharanpur",
  },
  {
    title: "Normal Delivery & C-Section",
    description: "Safe vaginal delivery and C-section when medically indicated.",
    href: "/normal-delivery-c-section-saharanpur",
  },
  {
    title: "Infertility Treatment",
    description: "Couple evaluation, hormonal testing and structured treatment.",
    href: "/infertility-treatment-saharanpur",
  },
  {
    title: "PCOS / PCOD Treatment",
    description: "Periods, weight, skin and fertility care for PCOS.",
    href: "/pcod-pcos-treatment-saharanpur",
  },
  {
    title: "Vaginal & Gynae Surgery",
    description: "Vaginal hysterectomy, prolapse repair and other procedures.",
    href: "/vaginal-surgery-saharanpur",
  },
  {
    title: "Menopause Management",
    description: "Symptom care, hormone therapy guidance and bone health.",
    href: "/menopause-management-saharanpur",
  },
  {
    title: "Annual Gynae Checkup",
    description: "Pap smear, breast exam, ultrasound and preventive screening.",
    href: "/gynecological-checkup-saharanpur",
  },
  {
    title: "Women's Health Clinic",
    description: "Dedicated women's care — adolescence through menopause.",
    href: "/womens-health-clinic-saharanpur",
  },
]

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(homeFaqs),
          breadcrumbSchema([{ name: "Home", url: SITE_URL }]),
        ]}
      />
      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Image
                  alt={`${doctor.name} — Gynaecologist & Obstetrician, Saharanpur`}
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-8 border-white shadow-lg"
                  height={400}
                  width={400}
                  src="/doctor.png"
                  sizes="(max-width: 768px) 280px, 400px"
                  priority
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                    {doctor.name}
                  </h1>
                  <p className="text-xl font-semibold">MBBS, DGO — Obstetrician, Gynaecologist & Surgeon</p>
                  <p className="text-lg text-muted-foreground">{clinic.name} · Saharanpur</p>
                  <div className="flex items-center gap-2 text-sm pt-1">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">
                      {reviewsSummary.ratingValue}/5 · {reviewsSummary.reviewCount}+ patient ratings · Practicing since {doctor.practicingSince}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Dr. Vinita Malhotra is a senior gynecologist, obstetrician and surgeon, practicing in
                    Saharanpur since 1996. She specialises in high-risk pregnancy, infertility evaluation, advanced
                    vaginal surgery and women's health from adolescence through menopause.
                  </p>
                  <p lang="hi" className="text-sm text-muted-foreground italic">
                    सहारनपुर में महिला रोग विशेषज्ञ — डॉ. विनीता मल्होत्रा (MBBS, DGO)। गर्भावस्था, बांझपन, पीसीओएस, मासिक धर्म एवं रजोनिवृत्ति की देखभाल।
                  </p>
                  <div className="flex items-center mt-2 text-primary">
                    <Video className="h-5 w-5 mr-2" />
                    <p className="font-medium">In-person and online consultations available</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="/appointment">
                    <Button size="lg" className="px-8">Book Appointment</Button>
                  </Link>
                  <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="px-8 bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
                      <WhatsappIcon className="mr-2 h-5 w-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <Link href="/doctor">
                    <Button variant="outline" size="lg">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {clinic.name}
                  </h2>
                  <p className="text-xl text-muted-foreground">A dedicated women's healthcare clinic in Saharanpur</p>
                  <p className="text-muted-foreground mt-2">
                    Shanti Nursing Home is a women-focused clinic in central Saharanpur — not a large general hospital. Patients get
                    unhurried consultations and the same senior doctor across every visit, from first scan through delivery, surgery and long-term care.
                    Services span obstetrics, gynaecology, infertility, vaginal surgery and menopause management.
                  </p>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  alt={`${clinic.name} building in Saharanpur`}
                  className="mx-auto w-full overflow-hidden rounded-xl object-cover object-center lg:order-last"
                  style={{ maxHeight: "500px", objectPosition: "center 40%" }}
                  src="/hospital.png"
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <MapPin className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-muted-foreground">Circular Road, Opposite Private Ward, SBD Hospital, Prakashpuram, Saharanpur</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Phone className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold">Contact</h3>
                <p className="text-muted-foreground">
                  <a className="hover:underline" href={`tel:${clinic.phones[0]}`}>{clinic.phones[0]}</a>
                  <br />
                  <a className="hover:underline" href={`tel:${clinic.phones[1]}`}>{clinic.phones[1]}</a>
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Clock className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold">Hours</h3>
                <p className="text-muted-foreground">Mon–Sat: 11 AM–3 PM, 6:30 PM–8 PM<br />Sun: 12 PM–2 PM (by appointment)</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Video className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold">Virtual Consults</h3>
                <p className="text-muted-foreground">Online consultations available by appointment</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Services</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                  Comprehensive women's healthcare in Saharanpur — explore each service in detail.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {SERVICE_LINKS.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex flex-col p-6 bg-muted/30 rounded-lg hover:bg-muted/60 transition-colors border"
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                  <span className="text-sm font-medium text-primary mt-auto">Learn more →</span>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/services">
                <Button variant="outline">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <FaqSection faqs={homeFaqs} />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Schedule Your Appointment Today
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed mx-auto">
                  Take the first step towards better health by scheduling an appointment with Dr. Vinita Malhotra.
                </p>
                <p className="text-sm md:text-base mt-2">
                  Choose between in-person visits at our Saharanpur clinic or convenient virtual consultations.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-center">
                <Link href="/appointment">
                  <Button size="lg" variant="secondary" className="px-8">Book Appointment</Button>
                </Link>
                <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="px-8 bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
                    <WhatsappIcon className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href={`tel:${clinic.phones[0]}`}>
                  <Button size="lg" variant="outline" className="px-8 bg-white/10 text-white border-white/40 hover:bg-white/20">
                    Call {clinic.phones[0]}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
