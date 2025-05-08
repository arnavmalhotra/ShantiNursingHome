import { Award, BookOpen, Heart, Star, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BestGynecologistSaharanpurPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Doctor Profile Section */}
        <div className="rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-center">
            <div>
              <img
                alt="Dr. Vinita Malhotra"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-8 border-white shadow-lg"
                height="300"
                width="300"
                src="/doctor.png"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
            <div className="space-y-5">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Best Gynecologist in Saharanpur
                </h1>
                <p className="text-xl font-semibold mt-2">Dr. Vinita Malhotra</p>
                <p className="text-lg">MBBS, DGO - Obstetrician, Gynaecologist & Vaginal Surgeon</p>
                <p className="text-muted-foreground mt-2">Shanti Nursing Home</p>
              </div>
              
              <p className="text-muted-foreground">
                Dr. Vinita Malhotra is a highly experienced gynecologist serving Saharanpur with over 25 years of 
                dedicated expertise in women's healthcare. At Shanti Nursing Home, she provides comprehensive 
                gynecological services, addressing a wide range of women's health concerns with compassion and precision.
              </p>
              
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <span>Available for in-person and virtual consultations</span>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/appointment">
                  <Button className="bg-black text-white hover:bg-gray-800">Book Appointment</Button>
                </Link>
                <a href="https://wa.me/919410805042?text=Hello%20Dr.%20Vinita%2C%20I%27d%20like%20to%20schedule%20a%20consultation." target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </Button>
                </a>
                <Link href="/doctor">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* About Dr. Vinita Malhotra */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">About Dr. Vinita Malhotra</h2>
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Expert Gynecological Care</h3>
            </div>
            <p className="text-muted-foreground">
              Dr. Vinita Malhotra is widely regarded as one of the best gynecologists in Saharanpur, 
              bringing over 25 years of experience in obstetrics and gynecology. Her practice at 
              Shanti Nursing Home combines medical excellence with a compassionate approach to women's healthcare.
            </p>
            <p className="text-muted-foreground">
              With her extensive training and vast clinical experience, Dr. Malhotra provides expert 
              care for a wide range of gynecological concerns. She is known for her patient-centered 
              approach, taking time to listen to each patient's concerns and providing personalized treatment plans.
            </p>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Our Specialized Gynecological Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Complete Gynecological Care",
                description: "Comprehensive check-ups, screenings, and treatments for women of all ages.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Obstetric Services",
                description: "Expert pregnancy care from preconception through delivery and postpartum.",
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Gynecological Surgeries",
                description: "Advanced surgical procedures performed with precision and care.",
              },
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "PCOD/PCOS Management",
                description: "Specialized care for polycystic ovary syndrome and related conditions.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Infertility Evaluation",
                description: "Thorough assessment and treatment options for couples facing fertility challenges.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Menopausal Care",
                description: "Support and treatment for managing menopausal symptoms and health concerns.",
              },
            ].map((service, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 space-y-2">
                <div className="flex items-center gap-3">
                  {service.icon}
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-primary text-primary-foreground p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Looking for the Best Gynecologist in Saharanpur?</h2>
          <p>Schedule your consultation with Dr. Vinita Malhotra at Shanti Nursing Home today and experience expert gynecological care.</p>
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