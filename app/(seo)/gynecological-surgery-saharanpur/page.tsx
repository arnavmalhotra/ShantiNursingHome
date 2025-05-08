import { Award, BookOpen, Heart, Star, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GynecologicalSurgerySaharanpurPage() {
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
                  Gynecological Surgery in Saharanpur
                </h1>
                <p className="text-xl font-semibold mt-2">Dr. Vinita Malhotra</p>
                <p className="text-lg">MBBS, DGO - Obstetrician, Gynaecologist & Vaginal Surgeon</p>
                <p className="text-muted-foreground mt-2">Shanti Nursing Home</p>
              </div>
              
              <p className="text-muted-foreground">
                Dr. Vinita Malhotra is a highly skilled gynecological surgeon with over 25 years of experience.
                At Shanti Nursing Home in Saharanpur, she provides expert surgical care for various gynecological 
                conditions, utilizing modern techniques to ensure optimal outcomes and faster recovery.
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

        {/* About Our Gynecological Surgery Services */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">About Our Gynecological Surgery Services</h2>
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Advanced Surgical Care</h3>
            </div>
            <p className="text-muted-foreground">
              At Shanti Nursing Home, we offer specialized gynecological surgery services performed by Dr. Vinita Malhotra,
              who brings over 25 years of surgical expertise. Our approach focuses on minimally invasive techniques
              when possible, ensuring less discomfort and quicker recovery for our patients.
            </p>
            <p className="text-muted-foreground">
              Each surgical treatment plan is personalized, taking into account your specific condition, health history,
              and personal preferences. We provide comprehensive pre-operative education and attentive post-operative care.
            </p>
          </div>
        </div>

        {/* Gynecological Surgeries Offered */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Gynecological Surgeries Offered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Hysterectomy",
                description: "Surgical removal of the uterus for conditions like fibroids, endometriosis, or cancer.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Myomectomy",
                description: "Removal of uterine fibroids while preserving the uterus for future pregnancy.",
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Ovarian Cyst Removal",
                description: "Surgical treatment for problematic ovarian cysts causing pain or other symptoms.",
              },
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "Pelvic Floor Repair",
                description: "Procedures to address pelvic organ prolapse and restore proper support.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Diagnostic Laparoscopy",
                description: "Minimally invasive procedure to diagnose pelvic pain, infertility, or other conditions.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Hysteroscopy",
                description: "Examination and treatment of issues within the uterine cavity using a thin, lighted scope.",
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
          <h2 className="text-2xl font-bold">Need Gynecological Surgery in Saharanpur?</h2>
          <p>Schedule a consultation with Dr. Vinita Malhotra to discuss your treatment options at Shanti Nursing Home.</p>
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