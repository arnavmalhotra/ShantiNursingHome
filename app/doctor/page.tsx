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
              src="/placeholder.svg?height=400&width=400"
              width="400"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Dr. Vinita Malhotra
            </h1>
            <p className="text-xl font-semibold">Gynecologist & Obstetrician</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-muted-foreground">Highly Rated</span>
            </div>
            <p className="text-muted-foreground">
              Dr. Vinita Malhotra is a dedicated gynecologist and obstetrician with extensive experience in women's
              healthcare. She provides comprehensive care for women of all ages with compassion and expertise.
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
                  <p className="font-medium">MBBS</p>
                  <p className="text-sm text-muted-foreground">Medical College, University Name</p>
                  <p className="text-sm text-muted-foreground">2000 - 2006</p>
                </li>
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">MD (Obstetrics & Gynecology)</p>
                  <p className="text-sm text-muted-foreground">Medical College, University Name</p>
                  <p className="text-sm text-muted-foreground">2006 - 2009</p>
                </li>
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">Fellowship in Reproductive Medicine</p>
                  <p className="text-sm text-muted-foreground">Institute Name</p>
                  <p className="text-sm text-muted-foreground">2009 - 2010</p>
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
                  <p className="text-sm text-muted-foreground">Founder & Chief Gynecologist</p>
                  <p className="text-sm text-muted-foreground">2015 - Present</p>
                </li>
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">City Hospital</p>
                  <p className="text-sm text-muted-foreground">Senior Consultant, Dept. of Obstetrics & Gynecology</p>
                  <p className="text-sm text-muted-foreground">2010 - 2015</p>
                </li>
                <li className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">Medical College Hospital</p>
                  <p className="text-sm text-muted-foreground">Resident Doctor</p>
                  <p className="text-sm text-muted-foreground">2006 - 2010</p>
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
                title: "Obstetrics",
                description: "Comprehensive pregnancy care, from conception to delivery and postpartum care.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Gynecology",
                description: "Diagnosis and treatment of conditions affecting the female reproductive system.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Family Planning",
                description: "Counseling and services for contraception and family planning needs.",
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Infertility Treatment",
                description: "Evaluation and treatment options for couples experiencing fertility issues.",
              },
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "Women's Health",
                description: "Preventive care and treatment for women's health issues at all life stages.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "High-Risk Pregnancies",
                description: "Specialized care for pregnancies with increased health risks.",
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

