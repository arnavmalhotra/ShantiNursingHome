import { Check } from "lucide-react"

export function TreatmentSection({ steps }: { steps: string[] }) {
  return (
    <section className="rounded-lg border bg-card p-6 md:p-8 space-y-4">
      <h2 className="text-2xl font-bold">Our Treatment Approach</h2>
      <p className="text-sm text-muted-foreground">
        How Dr. Vinita Malhotra and the Shanti Nursing Home team approach care for this concern.
      </p>
      <ul className="space-y-3">
        {steps.map((step) => (
          <li key={step} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-sm md:text-base">{step}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
