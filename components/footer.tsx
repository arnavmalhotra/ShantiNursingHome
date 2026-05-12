import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { clinic } from "@/lib/clinic"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-2">{clinic.name}</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Specialised gynecology, obstetrics and vaginal surgery care in Saharanpur — by
              Dr. Vinita Malhotra (MBBS, DGO), practicing since {clinic.foundedYear}.
            </p>
            <p lang="hi" className="text-muted-foreground text-sm italic mb-4">
              सहारनपुर में महिला स्वास्थ्य के लिए विश्वसनीय क्लिनिक।
            </p>
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <address className="not-italic text-sm text-muted-foreground leading-snug">
                {clinic.address.streetAddress},<br />
                {clinic.address.addressLocality}, {clinic.address.addressRegion}{" "}
                {clinic.address.postalCode}, India
              </address>
            </div>
            <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              <a className="hover:underline" href={`tel:${clinic.phones[0]}`}>{clinic.phones[0]}</a>
              {" · "}
              <a className="hover:underline" href={`tel:${clinic.phones[1]}`}>{clinic.phones[1]}</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              <a className="hover:underline" href={`mailto:${clinic.email}`}>{clinic.email}</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <Link href="/doctor" className="hover:text-foreground transition-colors">Our Doctor</Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <Link href="/find-us" className="hover:text-foreground transition-colors">Find Us</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/appointment" className="hover:text-foreground transition-colors">Book Appointment</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Popular care</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/gynaecologist-saharanpur" className="hover:text-foreground transition-colors">Gynaecologist in Saharanpur</Link>
              <Link href="/pregnancy-care-saharanpur" className="hover:text-foreground transition-colors">Pregnancy Care</Link>
              <Link href="/high-risk-pregnancy-saharanpur" className="hover:text-foreground transition-colors">High-Risk Pregnancy</Link>
              <Link href="/infertility-treatment-saharanpur" className="hover:text-foreground transition-colors">Infertility Treatment</Link>
              <Link href="/pcod-pcos-treatment-saharanpur" className="hover:text-foreground transition-colors">PCOS Treatment</Link>
              <Link href="/vaginal-surgery-saharanpur" className="hover:text-foreground transition-colors">Vaginal Surgery</Link>
              <Link href="/menopause-management-saharanpur" className="hover:text-foreground transition-colors">Menopause Care</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-medium text-foreground">Clinic hours</p>
              <p>Mon–Sat: 11:00 AM – 3:00 PM, 6:30 PM – 8:00 PM</p>
              <p>Sun: 12:00 PM – 2:00 PM (by appointment only)</p>
            </div>
          </div>
          <div className="md:text-right">
            <p>
              <Link href="/editorial-policy" className="hover:text-foreground">Editorial Policy</Link>{" · "}
              <Link href="/medical-disclaimer" className="hover:text-foreground">Medical Disclaimer</Link>{" · "}
              <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            </p>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
