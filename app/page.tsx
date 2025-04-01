import Link from "next/link"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
                  Shanti Nursing Home
                </h1>
                <p className="text-xl text-muted-foreground">Specialized Gynecology & Obstetrics Care in Saharanpur</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/appointment">
                  <Button size="lg" className="px-8">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <img
                alt="Shanti Nursing Home"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=800"
                width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <MapPin className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-muted-foreground">Saharanpur, Uttar Pradesh</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Phone className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Clock className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Hours</h3>
              <p className="text-muted-foreground">Mon-Sat: 9AM-7PM</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Calendar className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Appointments</h3>
              <p className="text-muted-foreground">Book Online or Call</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <img
                alt="Dr. Vinita Malhotra"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-8 border-white shadow-lg"
                height="400"
                src="/placeholder.svg?height=400&width=400"
                width="400"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Meet Our Doctor
                </h2>
                <p className="text-xl font-semibold">Dr. Vinita Malhotra</p>
                <p className="text-lg text-muted-foreground">Gynecologist & Obstetrician</p>
                <p className="text-muted-foreground">
                  Dr. Vinita Malhotra is a highly skilled and compassionate gynecologist and obstetrician with years of
                  experience in women's healthcare. She specializes in providing comprehensive care for women of all
                  ages, from adolescence through menopause and beyond.
                </p>
                <p className="text-muted-foreground mt-2">
                  At Shanti Nursing Home, Dr. Malhotra offers personalized care in a comfortable and supportive
                  environment, ensuring that each patient receives the attention and treatment they deserve.
                </p>
              </div>
              <div>
                <Link href="/doctor">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Comprehensive women's healthcare services provided with care and expertise
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Prenatal Care",
                description: "Comprehensive care throughout your pregnancy journey",
              },
              {
                title: "Gynecological Exams",
                description: "Regular check-ups and preventive care for women's health",
              },
              {
                title: "Obstetric Services",
                description: "Complete care during pregnancy, labor, and delivery",
              },
              {
                title: "Family Planning",
                description: "Counseling and services for family planning needs",
              },
              {
                title: "Women's Health",
                description: "Addressing women's health concerns at every life stage",
              },
              {
                title: "Consultations",
                description: "Expert advice on gynecological and obstetric matters",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Schedule Your Appointment Today
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Take the first step towards better health by scheduling an appointment with Dr. Vinita Malhotra
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/appointment">
                <Button size="lg" variant="secondary" className="px-8">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

