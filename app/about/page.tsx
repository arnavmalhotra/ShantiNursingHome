import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Award, Heart, Users, ShieldCheck, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_URL, clinic, doctor } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"
import { ClinicInfo } from "@/components/seo/ClinicInfo"
import { ReviewsSection } from "@/components/seo/ReviewsSection"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"

const url = `${SITE_URL}/about`

export const metadata: Metadata = {
  title: "About Shanti Nursing Home | Women's Healthcare in Saharanpur Since 1996",
  description:
    "About Shanti Nursing Home — a dedicated women's healthcare clinic in Saharanpur led by Dr. Vinita Malhotra (MBBS, DGO). Our mission, history, philosophy and how we care for patients.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "About Shanti Nursing Home",
    description:
      "Women's healthcare clinic in Saharanpur since 1996, led by Dr. Vinita Malhotra (MBBS, DGO).",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Shanti Nursing Home" }],
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "About", url },
]

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${url}#aboutpage`,
  url,
  name: "About Shanti Nursing Home",
  mainEntity: { "@id": `${SITE_URL}/#clinic` },
  inLanguage: "en-IN",
}

const VALUES = [
  {
    icon: Heart,
    title: "Patient-first care",
    body: "Unhurried consultations where patients are heard, not rushed. The same senior doctor at every visit — never a rotating panel.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-based medicine",
    body: "Treatment plans aligned with current Indian and international guidelines. Conservative first, surgical when clearly required.",
  },
  {
    icon: Users,
    title: "Privacy & confidentiality",
    body: "Women-led clinic with female support staff. Examinations are private and judgement-free, regardless of background or age.",
  },
  {
    icon: Stethoscope,
    title: "Continuity of care",
    body: "Same doctor across pregnancy, surgery, postnatal recovery and long-term women's health — full clinical context every time.",
  },
  {
    icon: Award,
    title: "Transparent counselling",
    body: "Honest discussion of risks, alternatives and realistic outcomes — never overselling tests, medications or procedures.",
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[aboutSchema, breadcrumbSchema(breadcrumbs)]} />
      <div className="container py-10 md:py-14">
        <div className="mx-auto max-w-4xl space-y-12">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              About Shanti Nursing Home
            </h1>
            <p className="text-muted-foreground md:text-lg">
              A women's healthcare clinic in Saharanpur — focused, experienced, and built around personal care.
            </p>
          </header>

          <section className="grid md:grid-cols-[1fr_240px] gap-8 items-center">
            <div className="space-y-4 text-foreground">
              <p>
                {clinic.name} was founded in {clinic.foundedYear} by {doctor.name} — at the time a young
                gynaecologist who saw a gap in Saharanpur: women's healthcare that was thorough,
                respectful and consistent. Three decades later, the clinic still runs on those
                principles. We are deliberately small, deliberately women-focused, and intentionally
                run by the same senior doctor that patients first met.
              </p>
              <p>
                Today, {clinic.name} provides comprehensive obstetrics and gynaecology care — pregnancy
                and delivery (including high-risk pregnancies), gynaecological surgery (with niche
                expertise in vaginal-route procedures), infertility evaluation, PCOS / PCOD care,
                menopause management and routine preventive women's health. Many of our patients are
                second-generation — daughters of women who themselves came to Dr. Malhotra in the
                90s and 2000s.
              </p>
            </div>
            <Image
              alt={`${doctor.name}, founder of ${clinic.name}, Saharanpur`}
              src="/doctor.png"
              width={240}
              height={240}
              sizes="240px"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-8 border-white shadow-lg"
              style={{ objectPosition: "center 20%" }}
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Our principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="rounded-lg border bg-card p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <v.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold">{v.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">A note on our scope</h2>
            <p className="text-muted-foreground">
              {clinic.name} is a women's healthcare clinic, not a multispecialty hospital. We do not
              run an in-house NICU or general surgical theatre. For high-risk neonatal needs and
              non-gynaecological surgeries, we coordinate with partner facilities in Saharanpur. This
              focus is intentional — we'd rather do one thing very well than many things adequately.
            </p>
          </section>

          <ReviewsSection />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Meet the doctor</h2>
            <p className="text-muted-foreground">
              {doctor.name}, {doctor.degrees.join(", ")} — {doctor.jobTitle}. Practicing since{" "}
              {doctor.practicingSince} ({doctor.yearsExperience}+ years).
            </p>
            <Link href="/doctor">
              <Button variant="outline">Read Dr. Malhotra's full profile →</Button>
            </Link>
          </section>

          <ClinicInfo />

          <div className="rounded-lg bg-primary text-primary-foreground p-6 md:p-8 text-center space-y-3">
            <h2 className="text-2xl font-bold">Visit Shanti Nursing Home</h2>
            <p>Book a consultation with Dr. Vinita Malhotra in person or online.</p>
            <div className="flex justify-center gap-3 pt-1">
              <Link href="/appointment">
                <Button variant="secondary">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
