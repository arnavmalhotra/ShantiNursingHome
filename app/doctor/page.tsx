import { Award, BookOpen, Heart, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SITE_URL, clinic, doctor, reviewsSummary } from "@/lib/clinic"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema"
import { FaqSection } from "@/components/seo/FaqSection"
import { ReviewsSection } from "@/components/seo/ReviewsSection"
import { ClinicInfo } from "@/components/seo/ClinicInfo"
import { WhatsappIcon } from "@/components/seo/WhatsappIcon"

const url = `${SITE_URL}/doctor`

export const metadata: Metadata = {
  title: "Dr. Vinita Malhotra — Gynaecologist & Obstetrician in Saharanpur",
  description:
    "Dr. Vinita Malhotra (MBBS, DGO) — senior gynaecologist, obstetrician & surgeon in Saharanpur. Practicing since 1996 at Shanti Nursing Home. Qualifications, experience, reviews.",
  alternates: { canonical: url },
  openGraph: {
    type: "profile",
    url,
    siteName: "Shanti Nursing Home",
    title: "Dr. Vinita Malhotra — Shanti Nursing Home, Saharanpur",
    description:
      "Meet Dr. Vinita Malhotra — senior women's health specialist practicing in Saharanpur since 1996.",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dr. Vinita Malhotra" }],
  },
}

const doctorFaqs = [
  {
    q: "What are Dr. Vinita Malhotra's qualifications?",
    a: "MBBS and DGO — Obstetrician, Gynaecologist and Surgeon.",
  },
  {
    q: "How many years of experience does Dr. Vinita Malhotra have?",
    a: `Over ${doctor.yearsExperience} years — she has been practicing in Saharanpur since ${doctor.practicingSince}.`,
  },
  {
    q: "What is Dr. Vinita Malhotra's area of expertise?",
    a: "Obstetrics (including high-risk pregnancy), gynaecology, vaginal surgery, infertility evaluation, PCOS care and menopause management. She also handles breast and urinary problems in women.",
  },
  {
    q: "Does Dr. Vinita Malhotra take online consultations?",
    a: "Yes — virtual consultations are available by appointment for follow-ups, second opinions and many non-emergency concerns.",
  },
  {
    q: "Where can I find reviews of Dr. Vinita Malhotra?",
    a: "Public ratings are available on Lybrate (118+ ratings) and Justdial (63+ ratings), alongside strong local word-of-mouth in Saharanpur.",
  },
  {
    q: "Where does Dr. Vinita Malhotra practice?",
    a: "Shanti Nursing Home, Circular Road, opposite Private Ward, SBD Hospital, Prakashpuram, Saharanpur 247001.",
  },
]

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Dr. Vinita Malhotra", url },
]

export default function DoctorPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqPageSchema(doctorFaqs)]} />
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                alt={`${doctor.name} — Gynaecologist & Obstetrician, ${clinic.name}, Saharanpur`}
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-8 border-white shadow-lg"
                height={400}
                width={400}
                src="/doctor.png"
                sizes="(max-width: 768px) 280px, 400px"
                priority
                style={{ objectPosition: "center 20%" }}
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                {doctor.name}
              </h1>
              <p className="text-xl font-semibold">MBBS, DGO — Obstetrician, Gynaecologist & Surgeon</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-muted-foreground text-sm">
                  {reviewsSummary.ratingValue}/5 · {reviewsSummary.reviewCount}+ ratings · Practicing since {doctor.practicingSince}
                </span>
              </div>
              <p className="text-muted-foreground">
                {doctor.description} She runs {clinic.name}, a dedicated women's healthcare clinic in central Saharanpur.
              </p>
              <p lang="hi" className="text-sm text-muted-foreground italic">
                डॉ. विनीता मल्होत्रा — वरिष्ठ स्त्री रोग विशेषज्ञ, प्रसूति विशेषज्ञ एवं योनि शल्य चिकित्सक, सहारनपुर।
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/appointment">
                  <Button>Book Appointment</Button>
                </Link>
                <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600">
                    <WhatsappIcon className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
                <a href={`tel:${clinic.phones[0]}`}>
                  <Button variant="outline">Call {clinic.phones[0]}</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Qualifications & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <ul className="space-y-3">
                  <li className="border-l-2 border-primary pl-4 py-1">
                    <p className="font-medium">MBBS, DGO</p>
                    <p className="text-sm text-muted-foreground">Medical Qualification</p>
                  </li>
                  <li className="border-l-2 border-primary pl-4 py-1">
                    <p className="font-medium">Specialisation</p>
                    <p className="text-sm text-muted-foreground">Obstetrician, Gynaecologist & Surgeon</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <ul className="space-y-3">
                  <li className="border-l-2 border-primary pl-4 py-1">
                    <p className="font-medium">{clinic.name}</p>
                    <p className="text-sm text-muted-foreground">Gynaecologist & Obstetrician</p>
                    <p className="text-sm text-muted-foreground">{doctor.practicingSince} – Present</p>
                  </li>
                  <li className="border-l-2 border-primary pl-4 py-1">
                    <p className="font-medium">Special Skills</p>
                    <p className="text-sm text-muted-foreground">Vaginal Surgery</p>
                    <p className="text-sm text-muted-foreground">High-Risk Pregnancy Management</p>
                    <p className="text-sm text-muted-foreground">Breast & Urinary Tract Conditions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Specialisations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: <Heart className="h-6 w-6 text-primary" />,
                  title: "Obstetrics Care",
                  description: "Complete prenatal to postnatal care, including high-risk pregnancy and recurrent loss management.",
                  href: "/pregnancy-care-saharanpur",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Vaginal Surgery",
                  description: "Specialised vaginal-route surgical expertise with decades of practice.",
                  href: "/vaginal-surgery-saharanpur",
                },
                {
                  icon: <BookOpen className="h-6 w-6 text-primary" />,
                  title: "Gynaecological Care",
                  description: "Periods, PCOS, infections, fibroids, breast and urinary issues.",
                  href: "/gynaecologist-saharanpur",
                },
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: "Infertility Treatment",
                  description: "Couple evaluation, hormonal testing and structured treatment plans.",
                  href: "/infertility-treatment-saharanpur",
                },
                {
                  icon: <Heart className="h-6 w-6 text-primary" />,
                  title: "Menopause Care",
                  description: "Symptom management, hormone therapy guidance and bone health.",
                  href: "/menopause-management-saharanpur",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Family Planning",
                  description: "Counselling, contraception and pre-conception planning.",
                  href: "/womens-healthcare-saharanpur",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="rounded-lg border bg-card p-6 space-y-2 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {s.icon}
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                  <span className="text-xs font-medium text-primary">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>

          <ReviewsSection />

          <FaqSection faqs={doctorFaqs} />

          <ClinicInfo />

          <div className="rounded-lg bg-primary text-primary-foreground p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Schedule Your Appointment Today</h2>
            <p>Take the first step towards better health by scheduling an appointment with {doctor.name}.</p>
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
