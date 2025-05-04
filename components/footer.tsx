import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Shanti Nursing Home</h3>
            <p className="text-muted-foreground mb-4">
              Specialized gynecology and obstetrics care in Saharanpur, Uttar Pradesh.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Circular Road, Opposite Private Ward, SBD Hospital, Prakashpuram, Saharanpur</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">+91 9410805042, +91 9412230586</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">info@shantinursinghome.com</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/doctor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Doctor
              </Link>
              <Link
                href="/appointment"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Clinic Hours</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <span>Monday - Saturday:</span>
                <span>11:00 AM - 3:00 PM<br/>6:30 PM - 8:00 PM</span>
                <span>Sunday:</span>
                <span>12:00 PM - 2:00 PM<br/>(By appointment only)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shanti Nursing Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

