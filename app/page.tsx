import Link from "next/link"
import { Calendar, Clock, MapPin, Phone, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // WhatsApp link with phone number (country code + number without spaces or +)
  const whatsappLink = "https://wa.me/919410805042?text=Hello%20Dr.%20Vinita%2C%20I%27d%20like%20to%20schedule%20a%20consultation."
  
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
                <p className="text-xl font-semibold">MBBS, DGO - Obstetrician, Gynaecologist & Vaginal Surgeon</p>
                <p className="text-lg text-muted-foreground">Shanti Nursing Home</p>
                <p className="text-muted-foreground">
                  Dr. Vinita Malhotra is a highly skilled Gynecologist, Obstetrician and experienced Vaginal Surgeon, practicing since 1996. She has dedicated her career 
                  to providing exceptional women's healthcare, with expertise in managing both routine and complex cases.
                </p>
                <div className="flex items-center mt-2 text-primary">
                  <Video className="h-5 w-5 mr-2" />
                  <p className="font-medium">Available for in-person and virtual consultations</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/appointment">
                  <Button size="lg" className="px-8">
                    Book Appointment
                  </Button>
                </Link>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="px-8 bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </Button>
                </a>
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
              <p className="text-muted-foreground">Circular Road, Opposite Private Ward, SBD Hospital, Prakashpuram, Saharanpur</p>
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
              <Video className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Virtual Consults</h3>
              <p className="text-muted-foreground">Available by appointment<br/>Convenient online consultations</p>
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
                title: "Virtual Consultations",
                description: "Convenient online appointments for consultations, follow-ups, and certain medical concerns",
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
              <p className="text-sm md:text-base mt-2">
                Choose between in-person visits at our Saharanpur clinic or convenient virtual consultations
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row justify-center">
              <Link href="/appointment">
                <Button size="lg" variant="secondary" className="px-8">
                  Book Appointment
                </Button>
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="px-8 bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

