import { Award, BookOpen, Heart, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DoctorPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Doctor Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              alt="Dr. Vinita Malhotra"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-8 border-white shadow-lg"
              height="400"
              width="400"
              src="/doctor.png"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Dr. Vinita Malhotra
            </h1>
            <p className="text-xl font-semibold">MBBS, DGO - Obstetrician, Gynaecologist & Vaginal Surgeon</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-muted-foreground">Practicing Since 1996</span>
            </div>
            <p className="text-muted-foreground">
              Dr. Vinita Malhotra is a highly skilled and experienced Vaginal Surgeon with over 25 years of dedicated service 
              in women's healthcare. She specializes in comprehensive gynecological care, high-risk pregnancy management, 
              and advanced vaginal surgeries.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/appointment">
                <Button>Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Qualifications & Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-3">
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">MBBS, DGO</p>
                  <p className="text-sm text-muted-foreground">Medical Qualification</p>
                </li>
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">Specialization</p>
                  <p className="text-sm text-muted-foreground">Obstetrician, Gynecologist and Vaginal Surgeon</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">Shanti Nursing Home</p>
                  <p className="text-sm text-muted-foreground">Gynecologist & Obstetrician</p>
                  <p className="text-sm text-muted-foreground">1996 - Present</p>
                </li>
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">Specialized Expertise</p>
                  <p className="text-sm text-muted-foreground">Vaginal Surgery</p>
                  <p className="text-sm text-muted-foreground">High-Risk Pregnancy Management</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Specializations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "Obstetrics Care",
                description: "Complete prenatal to postnatal care, including high-risk pregnancy management and recurrent pregnancy loss.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Vaginal Surgery",
                description: "Specialized expertise in vaginal surgical procedures with years of experience.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Gynecological Care",
                description: "Treatment for all conditions related to the female genital tract and urinary problems.",
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Infertility Treatment",
                description: "Comprehensive evaluation and treatment options for couples facing fertility challenges.",
              },
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "Preventive Care",
                description: "Regular check-ups, vaccinations, and preventive healthcare services for women.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Family Planning",
                description: "Professional counseling and comprehensive family planning services.",
              },
            ].map((specialization, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 space-y-2">
                <div className="flex items-center gap-3">
                  {specialization.icon}
                  <h3 className="font-semibold">{specialization.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{specialization.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-primary text-primary-foreground p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Schedule Your Appointment Today</h2>
          <p>Take the first step towards better health by scheduling an appointment with Dr. Vinita Malhotra</p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/appointment">
              <Button variant="secondary">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

