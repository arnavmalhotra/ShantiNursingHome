import { MapPin } from "lucide-react"
import { areasServed } from "@/lib/clinic"

export function AreasServed() {
  return (
    <section
      aria-labelledby="areas-served-heading"
      className="rounded-lg border bg-card p-6 md:p-8 space-y-4"
    >
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 id="areas-served-heading" className="text-xl font-bold">
          Areas we serve in Saharanpur
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Patients from across Saharanpur and surrounding towns visit Shanti Nursing Home — the clinic is centrally located on Circular Road, Prakashpuram, opposite SBD Hospital.
      </p>
      <ul className="flex flex-wrap gap-2 text-sm">
        {areasServed.map((area) => (
          <li
            key={area}
            className="rounded-full bg-muted px-3 py-1 text-muted-foreground"
          >
            {area}
          </li>
        ))}
      </ul>
    </section>
  )
}
