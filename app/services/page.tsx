import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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
              title: "Obstetrics Care",
              description:
                "Expert care throughout your pregnancy journey, specializing in both normal and high-risk pregnancies, with a focus on maternal and fetal well-being.",
              features: [
                "Complete prenatal to postnatal care",
                "High-risk pregnancy management",
                "Care for recurrent pregnancy loss",
                "Regular monitoring and check-ups",
                "Pregnancy counseling and education",
              ],
              image: "/image1.png",
            },
            {
              title: "Vaginal Surgery",
              description:
                "Specialized surgical expertise for various gynecological conditions, performed with precision and years of experience.",
              features: [
                "Advanced surgical techniques",
                "Minimally invasive procedures",
                "Expert post-operative care",
                "Treatment of complex cases",
                "Personalized surgical planning",
              ],
              image: "/image2.png",
            },
            {
              title: "Gynecological Care",
              description:
                "Comprehensive treatment for all conditions related to the female reproductive system and urinary tract.",
              features: [
                "Treatment of infections",
                "Management of menstrual disorders",
                "Urinary problem treatment",
                "Regular health screenings",
                "Preventive care services",
              ],
              image: "/image3.png",
            },
            {
              title: "Family Planning",
              description:
                "Professional counseling and comprehensive services to help you make informed decisions about family planning.",
              features: [
                "Contraception counseling",
                "Family planning education",
                "Fertility awareness guidance",
                "Preconception counseling",
                "Personalized planning options",
              ],
              image: "/image4.png",
            },
            {
              title: "Women's Health",
              description:
                "Specialized care addressing women's health needs at every life stage, from adolescence through menopause.",
              features: [
                "Adolescent health care",
                "Menopause management",
                "Preventive health services",
                "Health education",
                "Regular check-ups",
              ],
              image: "/image5.png",
            },
            {
              title: "Infertility Treatment",
              description:
                "Comprehensive evaluation and treatment options for couples experiencing fertility challenges.",
              features: [
                "Fertility evaluation",
                "Treatment planning",
                "Counseling services",
                "Regular monitoring",
                "Personalized care approach",
              ],
              image: "/image6.png",
            },
          ].map((service, index) => (
            <div key={index} className="rounded-lg border bg-card overflow-hidden">
              <div className="aspect-video w-full overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                  "Dr. Vinita Malhotra brings over 25 years of experience since 1996, with specialized expertise in vaginal surgery.",
              },
              {
                title: "Specialized Care",
                description:
                  "Expert in managing high-risk pregnancies and providing comprehensive women's healthcare services.",
              },
              {
                title: "Established Institution",
                description: "Serving the community since 1996 with a proven track record of quality healthcare.",
              },
              {
                title: "Comprehensive Services",
                description:
                  "From routine check-ups to specialized treatments, including advanced vaginal surgeries and infertility care.",
              },
              {
                title: "Accessible Location",
                description:
                  "Conveniently located on Circular Road, opposite Private Ward, SBD Hospital in Prabhatpuram, Saharanpur.",
              },
              {
                title: "Patient-Centered Approach",
                description: "Dedicated to providing personalized care with empathy and professional excellence.",
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

