import { seoPageBySlug } from "./seo-pages"

type Cluster = "pregnancy" | "gynecology" | "surgery" | "fertility" | "wellness" | "doctor"

const CLUSTER_OF: Record<string, Cluster> = {
  // Pregnancy & maternity
  "pregnancy-care-saharanpur": "pregnancy",
  "prenatal-care-saharanpur": "pregnancy",
  "postnatal-care-saharanpur": "pregnancy",
  "high-risk-pregnancy-saharanpur": "pregnancy",
  "maternity-hospital-saharanpur": "pregnancy",
  "maternal-healthcare-saharanpur": "pregnancy",
  "normal-delivery-c-section-saharanpur": "pregnancy",
  "obstetrician-saharanpur": "pregnancy",

  // General gynecology
  "gynaecologist-saharanpur": "gynecology",
  "gynecologist-saharanpur": "gynecology",
  "best-gynaecologist-saharanpur": "gynecology",
  "best-gynecologist-saharanpur": "gynecology",
  "gynecologist-clinic-saharanpur": "gynecology",
  "ladies-doctor-saharanpur": "gynecology",
  "obstetrics-gynecology-saharanpur": "gynecology",
  "gynecological-checkup-saharanpur": "gynecology",

  // Surgery
  "vaginal-surgery-saharanpur": "surgery",
  "vaginal-surgeon-saharanpur": "surgery",
  "gynecological-surgery-saharanpur": "surgery",

  // Fertility & hormones
  "infertility-treatment-saharanpur": "fertility",
  "pcod-pcos-treatment-saharanpur": "fertility",

  // Wellness / life stages
  "menopause-management-saharanpur": "wellness",
  "womens-health-clinic-saharanpur": "wellness",
  "womens-healthcare-saharanpur": "wellness",

  // Doctor profile
  "dr-vinita-malhotra": "doctor",
  "dr-vinita-malhotra-saharanpur": "doctor",
}

// Within-cluster ordering preference (canonical first)
const PRIORITY: Record<string, number> = {
  "pregnancy-care-saharanpur": 1,
  "high-risk-pregnancy-saharanpur": 2,
  "normal-delivery-c-section-saharanpur": 3,
  "obstetrician-saharanpur": 4,
  "prenatal-care-saharanpur": 5,
  "postnatal-care-saharanpur": 6,
  "maternity-hospital-saharanpur": 7,
  "maternal-healthcare-saharanpur": 8,

  "gynaecologist-saharanpur": 1,
  "best-gynaecologist-saharanpur": 2,
  "gynecologist-saharanpur": 3,
  "best-gynecologist-saharanpur": 4,
  "ladies-doctor-saharanpur": 5,
  "gynecologist-clinic-saharanpur": 6,
  "obstetrics-gynecology-saharanpur": 7,
  "gynecological-checkup-saharanpur": 8,

  "vaginal-surgery-saharanpur": 1,
  "vaginal-surgeon-saharanpur": 2,
  "gynecological-surgery-saharanpur": 3,

  "infertility-treatment-saharanpur": 1,
  "pcod-pcos-treatment-saharanpur": 2,

  "menopause-management-saharanpur": 1,
  "womens-health-clinic-saharanpur": 2,
  "womens-healthcare-saharanpur": 3,

  "dr-vinita-malhotra-saharanpur": 1,
  "dr-vinita-malhotra": 2,
}

// Fallback "bridge" pages (cross-cluster) shown when a cluster doesn't fill 4 slots.
const BRIDGE: Record<Cluster, string[]> = {
  pregnancy: ["pcod-pcos-treatment-saharanpur", "infertility-treatment-saharanpur"],
  gynecology: ["pcod-pcos-treatment-saharanpur", "menopause-management-saharanpur", "gynecological-surgery-saharanpur"],
  surgery: ["gynaecologist-saharanpur", "gynecological-checkup-saharanpur"],
  fertility: ["pregnancy-care-saharanpur", "high-risk-pregnancy-saharanpur", "gynaecologist-saharanpur"],
  wellness: ["gynaecologist-saharanpur", "gynecological-checkup-saharanpur", "pcod-pcos-treatment-saharanpur"],
  doctor: ["gynaecologist-saharanpur", "obstetrician-saharanpur", "vaginal-surgery-saharanpur", "infertility-treatment-saharanpur"],
}

export type RelatedLink = {
  slug: string
  title: string
  blurb: string
}

export function relatedFor(currentSlug: string, limit = 4): RelatedLink[] {
  const cluster = CLUSTER_OF[currentSlug] ?? "gynecology"

  const sameCluster = Object.entries(CLUSTER_OF)
    .filter(([slug, c]) => c === cluster && slug !== currentSlug)
    .map(([slug]) => slug)
    .sort((a, b) => (PRIORITY[a] ?? 99) - (PRIORITY[b] ?? 99))

  const picks: string[] = [...sameCluster]
  for (const bridge of BRIDGE[cluster]) {
    if (picks.length >= limit) break
    if (bridge !== currentSlug && !picks.includes(bridge)) picks.push(bridge)
  }

  return picks
    .slice(0, limit)
    .map((slug) => {
      const p = seoPageBySlug[slug]
      return {
        slug,
        title: p.h1,
        blurb: p.description.length > 110 ? p.description.slice(0, 110).trimEnd() + "…" : p.description,
      }
    })
}
