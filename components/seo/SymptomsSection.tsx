import { AlertCircle, CalendarCheck } from "lucide-react"

export function SymptomsSection({
  symptoms,
  whenToVisit,
}: {
  symptoms?: string[]
  whenToVisit: string[]
}) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {symptoms && symptoms.length > 0 && (
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="text-xl font-bold">Symptoms to watch for</h2>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            {symptoms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={`rounded-lg border bg-card p-6 space-y-4 ${!symptoms || symptoms.length === 0 ? "md:col-span-2" : ""}`}>
        <div className="flex items-center gap-3">
          <CalendarCheck className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 className="text-xl font-bold">When to visit</h2>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
          {whenToVisit.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
