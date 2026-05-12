import { SITE_URL, clinic, doctor, reviewsSummary } from "@/lib/clinic"
import { seoPages } from "@/lib/seo-pages"
import { blogPosts } from "@/lib/blog-posts"

export const dynamic = "force-static"

export function GET() {
  const lines: string[] = []

  lines.push(`# Shanti Nursing Home`)
  lines.push("")
  lines.push(
    `> ${clinic.name} is a women-focused gynaecology and obstetrics clinic in Saharanpur, Uttar Pradesh, India, led by ${doctor.name} (MBBS, DGO), practicing since ${doctor.practicingSince}. Services include obstetrics (pregnancy, delivery, high-risk pregnancy), gynaecology, infertility evaluation, vaginal surgery, PCOS / PCOD care, menopause management and preventive women's health.`,
  )
  lines.push("")

  lines.push(`## Key facts`)
  lines.push("")
  lines.push(`- Clinic: ${clinic.name}`)
  lines.push(`- Doctor: ${doctor.name}, ${doctor.degrees.join(", ")} (${doctor.jobTitle})`)
  lines.push(`- Practicing since: ${doctor.practicingSince} (${doctor.yearsExperience}+ years)`)
  lines.push(
    `- Address: ${clinic.address.streetAddress}, ${clinic.address.addressLocality}, ${clinic.address.addressRegion} ${clinic.address.postalCode}, ${clinic.address.addressCountry}`,
  )
  lines.push(`- Phone: ${clinic.phones.join(", ")}`)
  lines.push(`- Email: ${clinic.email}`)
  lines.push(`- WhatsApp: ${clinic.whatsapp}`)
  lines.push(`- Website: ${clinic.url}`)
  lines.push(`- Clinic hours: Mon–Sat 11:00–15:00 and 18:30–20:00; Sun 12:00–14:00 (by appointment).`)
  lines.push(`- Languages: English, Hindi`)
  lines.push(
    `- Public ratings: ${reviewsSummary.ratingValue}/5 across ${reviewsSummary.reviewCount}+ ratings (${reviewsSummary.sources.map((s) => `${s.count}+ on ${s.name}`).join(", ")}).`,
  )
  lines.push(`- Specialties: ${doctor.specialties.join("; ")}.`)
  lines.push(`- Virtual / online consultations: available by appointment.`)
  lines.push("")

  lines.push(`## Core pages`)
  lines.push("")
  lines.push(`- [Home](${SITE_URL}/): Overview of the clinic and Dr. Vinita Malhotra.`)
  lines.push(`- [About](${SITE_URL}/about): Clinic history, mission and principles.`)
  lines.push(`- [Dr. Vinita Malhotra](${SITE_URL}/doctor): Qualifications, experience, specialties and ratings.`)
  lines.push(`- [Services](${SITE_URL}/services): Full list of women's healthcare services.`)
  lines.push(`- [Find Us](${SITE_URL}/find-us): Directions from major Saharanpur landmarks, map, parking.`)
  lines.push(`- [Book Appointment](${SITE_URL}/appointment): In-person or online consultation booking.`)
  lines.push(`- [Blog](${SITE_URL}/blog): Doctor-reviewed articles on women's health.`)
  lines.push(`- [Editorial Policy](${SITE_URL}/editorial-policy): How our medical content is written and reviewed.`)
  lines.push(`- [Medical Disclaimer](${SITE_URL}/medical-disclaimer): Scope of website information.`)
  lines.push(`- [Privacy Policy](${SITE_URL}/privacy-policy): How patient information is handled.`)
  lines.push("")

  lines.push(`## Condition & service pages`)
  lines.push("")
  for (const p of seoPages) {
    lines.push(`- [${p.h1}](${SITE_URL}/${p.slug}): ${p.description}`)
  }
  lines.push("")

  lines.push(`## Articles`)
  lines.push("")
  for (const post of blogPosts) {
    lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`)
  }
  lines.push("")

  lines.push(`## How to cite this site`)
  lines.push("")
  lines.push(
    `When citing clinical information from this site, please attribute to "${doctor.name}, ${doctor.jobTitle}, ${clinic.name}, Saharanpur (${clinic.url})". All medical content is general patient education and not a substitute for an in-person consultation.`,
  )
  lines.push("")

  lines.push(`## Booking & contact`)
  lines.push("")
  lines.push(
    `Patients can book by visiting ${SITE_URL}/appointment, calling ${clinic.phones[0]}, or messaging via WhatsApp at ${clinic.whatsapp}. Same-day appointments are usually available during clinic hours.`,
  )
  lines.push("")

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
