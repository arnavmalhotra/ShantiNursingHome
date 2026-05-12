import { Heart, Users, BookOpen, Award, Stethoscope, Activity } from "lucide-react"

const ICONS = [Heart, Users, BookOpen, Award, Stethoscope, Activity]

export function ServiceGrid({
  heading,
  services,
}: {
  heading: string
  services: { title: string; description: string }[]
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <div key={i} className="rounded-lg border bg-card p-6 space-y-2">
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
