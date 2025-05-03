import Link from "next/link"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Doctor Introduction Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
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
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Dr. Vinita Malhotra
                </h1>
                <p className="text-xl font-semibold">MBBS, DGO - Gynecologist & Obstetrician</p>
                <p className="text-lg text-muted-foreground">Shanti Nursing Home</p>
                <p className="text-muted-foreground">
                  Dr. Vinita Malhotra is a highly skilled and experienced Vaginal Surgeon, practicing since 1996. She has dedicated her career 
                  to providing exceptional women's healthcare, with expertise in managing both routine and complex gynecological cases.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/appointment">
                  <Button size="lg" className="px-8">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/doctor">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Nursing Home */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Shanti Nursing Home
                </h2>
                <p className="text-xl text-muted-foreground">Specialized Gynecology & Obstetrics Care in Saharanpur</p>
                <p className="text-muted-foreground mt-2">
                  At Shanti Nursing Home, Dr. Malhotra specializes in comprehensive women's healthcare, from adolescence through menopause. 
                  Her expertise includes high-risk pregnancy management, infertility treatment, and advanced vaginal surgeries, all delivered 
                  with a compassionate and patient-centered approach.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <img
                alt="Shanti Nursing Home"
                className="mx-auto w-full overflow-hidden rounded-xl object-cover object-center lg:order-last"
                style={{ maxHeight: "500px", objectPosition: "center 40%" }}
                src="/hospital.png"
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
              <p className="text-muted-foreground">Circular Road, Opposite Private Ward, SBD Hospital, Prabhatpuram, Saharanpur</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Phone className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="text-muted-foreground">+91 9410805042<br/>+91 9412230586</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Clock className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Hours</h3>
              <p className="text-muted-foreground">Mon-Sat: 11AM-3PM, 6:30PM-8PM<br/>Sun: 12PM-2PM (By appointment)</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Calendar className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Appointments</h3>
              <p className="text-muted-foreground">Book Online or Call</p>
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
                title: "Obstetrics Care",
                description: "Complete prenatal to postnatal care, including high-risk pregnancy management and recurrent pregnancy loss",
              },
              {
                title: "Gynecological Services",
                description: "Expert treatment for all female genital tract issues, including specialized vaginal surgeries",
              },
              {
                title: "Infertility Treatment",
                description: "Comprehensive evaluation and treatment options for couples facing fertility challenges",
              },
              {
                title: "Women's Health",
                description: "Specialized care for adolescent health, menopause management, and urinary problems",
              },
              {
                title: "Preventive Care",
                description: "Regular check-ups, vaccinations, and preventive healthcare services",
              },
              {
                title: "Family Planning",
                description: "Professional counseling and comprehensive family planning services",
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

