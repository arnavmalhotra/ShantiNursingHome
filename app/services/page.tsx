import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Services</h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Comprehensive gynecology and obstetrics services provided by Dr. Vinita Malhotra at Shanti Nursing Home
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Prenatal Care",
              description:
                "Comprehensive care throughout your pregnancy journey, including regular check-ups, ultrasounds, and monitoring of both mother and baby's health.",
              features: [
                "Regular prenatal check-ups",
                "Ultrasound monitoring",
                "Nutritional guidance",
                "Pregnancy risk assessment",
                "Birth planning",
              ],
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              title: "Gynecological Exams",
              description:
                "Regular check-ups and preventive care for women's health, including pap smears, breast exams, and screening for gynecological conditions.",
              features: [
                "Annual well-woman exams",
                "Pap smears and HPV testing",
                "Breast examinations",
                "Pelvic examinations",
                "Preventive health screenings",
              ],
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              title: "Obstetric Services",
              description:
                "Complete care during pregnancy, labor, and delivery, ensuring the health and safety of both mother and baby throughout the process.",
              features: [
                "Labor and delivery care",
                "Postpartum care",
                "High-risk pregnancy management",
                "Cesarean section (when necessary)",
                "Newborn care guidance",
              ],
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              title: "Family Planning",
              description:
                "Counseling and services for family planning needs, including contraception options, fertility awareness, and preconception counseling.",
              features: [
                "Contraception counseling",
                "IUD insertion and removal",
                "Hormonal contraception management",
                "Natural family planning guidance",
                "Preconception counseling",
              ],
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              title: "Women's Health",
              description:
                "Addressing women's health concerns at every life stage, from adolescence through menopause and beyond, with personalized care and treatment.",
              features: [
                "Menopause management",
                "Hormone replacement therapy",
                "Adolescent gynecology",
                "Urinary tract health",
                "Sexual health counseling",
              ],
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              title: "Gynecological Treatments",
              description:
                "Diagnosis and treatment of various gynecological conditions, including infections, disorders, and diseases affecting the female reproductive system.",
              features: [
                "Treatment of infections",
                "Management of PCOS",
                "Endometriosis treatment",
                "Fibroids management",
                "Ovarian cyst treatment",
              ],
              image: "/placeholder.svg?height=300&width=500",
            },
          ].map((service, index) => (
            <div key={index} className="rounded-lg border bg-card overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="rounded-lg border bg-card p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center">Why Choose Shanti Nursing Home</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Experienced Doctor",
                description:
                  "Dr. Vinita Malhotra brings years of experience and expertise in gynecology and obstetrics.",
              },
              {
                title: "Personalized Care",
                description:
                  "We provide individualized attention and care plans tailored to each patient's unique needs.",
              },
              {
                title: "Comfortable Environment",
                description: "Our facility is designed to provide a comfortable and private setting for all patients.",
              },
              {
                title: "Comprehensive Services",
                description:
                  "From routine check-ups to specialized treatments, we offer a full range of women's health services.",
              },
              {
                title: "Patient Education",
                description:
                  "We believe in empowering patients with knowledge about their health and treatment options.",
              },
              {
                title: "Compassionate Approach",
                description: "Our team is committed to providing care with empathy, respect, and understanding.",
              },
            ].map((point, index) => (
              <div key={index} className="rounded-lg border bg-muted/50 p-4 space-y-2">
                <h3 className="font-semibold">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-primary text-primary-foreground p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Schedule Your Visit?</h2>
          <p>Book an appointment with Dr. Vinita Malhotra at Shanti Nursing Home today</p>
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

