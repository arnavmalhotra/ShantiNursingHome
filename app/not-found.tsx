import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, Calendar, Stethoscope } from "lucide-react"

export default function NotFound() {
  const popular = [
    { href: "/gynaecologist-saharanpur", label: "Gynaecologist in Saharanpur" },
    { href: "/pregnancy-care-saharanpur", label: "Pregnancy Care" },
    { href: "/high-risk-pregnancy-saharanpur", label: "High-Risk Pregnancy" },
    { href: "/infertility-treatment-saharanpur", label: "Infertility Treatment" },
    { href: "/pcod-pcos-treatment-saharanpur", label: "PCOS Treatment" },
    { href: "/vaginal-surgery-saharanpur", label: "Vaginal Surgery" },
    { href: "/menopause-management-saharanpur", label: "Menopause Care" },
    { href: "/gynecological-checkup-saharanpur", label: "Annual Gynae Checkup" },
  ]

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center space-y-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          We couldn't find that page
        </h1>
        <p className="text-muted-foreground md:text-lg">
          The page you're looking for might have moved or never existed. Try one of these
          instead — or call the clinic on{" "}
          <a className="hover:underline text-primary" href="tel:+919410805042">+91 94108 05042</a>.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/">
            <Button>
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Home
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">
              <Stethoscope className="mr-2 h-4 w-4" aria-hidden="true" />
              Services
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
              Blog
            </Button>
          </Link>
          <Link href="/appointment">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
              Book
            </Button>
          </Link>
        </div>

        <div className="rounded-lg border bg-card p-6 text-left mt-8">
          <p className="text-sm font-semibold mb-3">Popular pages</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {popular.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-primary hover:underline">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
