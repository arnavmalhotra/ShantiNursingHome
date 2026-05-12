import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { clinic } from "@/lib/clinic"

export function ClinicInfo() {
  return (
    <section
      aria-labelledby="clinic-info-heading"
      className="rounded-lg border bg-card p-6 md:p-8 space-y-4"
    >
      <h2 id="clinic-info-heading" className="text-2xl font-bold">
        Visit Shanti Nursing Home, Saharanpur
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold">Address</p>
            <p className="text-muted-foreground">
              {clinic.address.streetAddress}, {clinic.address.addressLocality},{" "}
              {clinic.address.addressRegion} {clinic.address.postalCode}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold">Phone</p>
            <p className="text-muted-foreground">
              <a className="hover:underline" href={`tel:${clinic.phones[0]}`}>
                {clinic.phones[0]}
              </a>
              {" · "}
              <a className="hover:underline" href={`tel:${clinic.phones[1]}`}>
                {clinic.phones[1]}
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold">Clinic Hours</p>
            <p className="text-muted-foreground">
              Mon–Sat: 11:00 AM – 3:00 PM, 6:30 PM – 8:00 PM
              <br />
              Sun: 12:00 PM – 2:00 PM (by appointment)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold">Email</p>
            <p className="text-muted-foreground">
              <a className="hover:underline" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
