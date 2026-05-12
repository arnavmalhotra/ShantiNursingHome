import { SITE_URL, clinic, doctor, reviewsSummary, areasServed } from "./clinic"
import type { SeoPage } from "./seo-pages"

const CLINIC_ID = `${SITE_URL}/#clinic`
const DOCTOR_ID = `${SITE_URL}/#doctor`
const ORG_ID = `${SITE_URL}/#organization`

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: clinic.address.streetAddress,
    addressLocality: clinic.address.addressLocality,
    addressRegion: clinic.address.addressRegion,
    postalCode: clinic.address.postalCode,
    addressCountry: clinic.address.addressCountry,
  }
}

function openingHoursSpecification() {
  return clinic.openingHours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days.map((d) => `https://schema.org/${d}`),
    opens: slot.opens,
    closes: slot.closes,
  }))
}

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalOrganization", "LocalBusiness"],
    "@id": CLINIC_ID,
    name: clinic.name,
    url: clinic.url,
    logo: clinic.logo,
    image: [clinic.image, clinic.logo],
    telephone: clinic.phones,
    email: clinic.email,
    priceRange: "₹₹",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
    medicalSpecialty: ["Gynecology", "Obstetrics"],
    availableService: doctor.specialties.map((s) => ({
      "@type": "MedicalProcedure",
      name: s,
    })),
    foundingDate: `${clinic.foundedYear}-01-01`,
    sameAs: clinic.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewsSummary.ratingValue,
      reviewCount: reviewsSummary.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Saharanpur",
        containedInPlace: { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
      },
      ...areasServed.map((n) => ({
        "@type": "Place",
        name: `${n}, Saharanpur`,
      })),
    ],
    makesOffer: doctor.specialties.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: s,
      },
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "City", name: "Saharanpur" },
    })),
  }
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": DOCTOR_ID,
    name: doctor.name,
    honorificPrefix: doctor.honorificPrefix,
    givenName: doctor.givenName,
    familyName: doctor.familyName,
    image: doctor.image,
    description: doctor.description,
    jobTitle: doctor.jobTitle,
    medicalSpecialty: ["Gynecology", "Obstetrics"],
    knowsAbout: doctor.specialties,
    knowsLanguage: doctor.languages,
    hasCredential: doctor.degrees.map((degree) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: degree,
    })),
    workLocation: { "@id": CLINIC_ID },
    affiliation: { "@id": CLINIC_ID },
    url: `${SITE_URL}/doctor`,
    telephone: clinic.phones[0],
    address: postalAddress(),
    sameAs: doctor.sameAs.length > 0 ? doctor.sameAs : clinic.sameAs,
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: clinic.name,
    publisher: { "@id": CLINIC_ID },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: clinic.name,
    url: clinic.url,
    logo: clinic.logo,
    sameAs: clinic.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: clinic.phones[0],
        contactType: "appointments",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function reviewSchemas(
  reviews: { author: string; rating: number; date: string; body: string }[],
  itemReviewedId: string,
) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": itemReviewedId },
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
  }))
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function articleSchema(post: {
  slug: string
  title: string
  description: string
  publishedDate: string
  updatedDate: string
  keywords: string[]
}) {
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    mainEntityOfPage: url,
    url,
    inLanguage: "en-IN",
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    keywords: post.keywords.join(", "),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    author: { "@id": DOCTOR_ID },
    reviewedBy: { "@id": DOCTOR_ID },
    publisher: { "@id": CLINIC_ID },
    image: clinic.image,
    medicalAudience: ["Patient"],
    audience: { "@type": "PeopleAudience", suggestedGender: "Female" },
    lastReviewed: post.updatedDate,
  }
}

export function medicalWebPageSchema(page: SeoPage) {
  const pageUrl = `${SITE_URL}/${page.slug}`

  // Build a richer `about` node based on the page's medical schema type.
  let about: Record<string, unknown>
  if (page.schemaType === "MedicalCondition") {
    about = {
      "@type": "MedicalCondition",
      name: page.h1,
      signOrSymptom: page.symptoms?.map((s) => ({ "@type": "MedicalSymptom", name: s })),
      possibleTreatment: page.services.map((s) => ({
        "@type": "MedicalTherapy",
        name: s.title,
        description: s.description,
      })),
      ...(page.relatedConditions
        ? {
            associatedAnatomy: page.relatedConditions.map((c) => ({
              "@type": "MedicalCondition",
              name: c,
            })),
          }
        : {}),
    }
  } else if (page.schemaType === "MedicalProcedure") {
    about = {
      "@type": "MedicalProcedure",
      name: page.h1,
      procedureType: "https://schema.org/SurgicalProcedure",
      bodyLocation: "Female reproductive system",
      preparation: page.treatmentApproach[0],
      followup: page.treatmentApproach[page.treatmentApproach.length - 1],
      howPerformed: page.treatmentApproach.join(" "),
    }
  } else if (page.schemaType === "MedicalTherapy") {
    about = {
      "@type": "MedicalTherapy",
      name: page.h1,
      description: page.intro,
    }
  } else {
    about = {
      "@type": "MedicalSpecialty",
      name: page.h1,
      relevantSpecialty: "Gynecology",
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    primaryImageOfPage: clinic.image,
    about,
    audience: { "@type": "PeopleAudience", suggestedGender: "Female" },
    medicalAudience: ["Patient"],
    lastReviewed: new Date().toISOString().slice(0, 10),
    reviewedBy: { "@id": DOCTOR_ID },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  }
}
