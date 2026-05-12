import Link from "next/link"
import Image from "next/image"
import { Video, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { clinic, doctor, reviewsSummary } from "@/lib/clinic"
import { WhatsappIcon } from "./WhatsappIcon"

type Props = {
  h1: string
  intro: string
}

export function DoctorHero({ h1, intro }: Props) {
  return (
    <section className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-center">
        <div>
          <Image
            alt={`${doctor.name} — ${doctor.jobTitle}, ${clinic.name}, Saharanpur`}
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-8 border-white shadow-lg"
            height={260}
            width={260}
            src="/doctor.png"
            sizes="260px"
            priority
            style={{ objectPosition: "center 20%" }}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">{h1}</h1>
          <div className="space-y-1">
            <p className="text-lg font-semibold">{doctor.name}</p>
            <p className="text-base">MBBS, DGO — Obstetrician, Gynaecologist & Vaginal Surgeon</p>
            <p className="text-sm text-muted-foreground">{clinic.name} · Practicing since {doctor.practicingSince}</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">
              {reviewsSummary.ratingValue}/5 · {reviewsSummary.reviewCount}+ patient ratings
            </span>
          </div>

          <p className="text-muted-foreground">{intro}</p>

          <div className="flex items-center gap-2 text-sm">
            <Video className="h-4 w-4 text-primary" />
            <span>In-person and online consultations available</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/appointment">
              <Button className="bg-black text-white hover:bg-gray-800">Book Appointment</Button>
            </Link>
            <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600">
                <WhatsappIcon className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
            <a href={`tel:${clinic.phones[0]}`}>
              <Button variant="outline">Call {clinic.phones[0]}</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
