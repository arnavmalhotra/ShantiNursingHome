export const SITE_URL = "https://www.shantinursinghome.in"

export const clinic = {
  name: "Shanti Nursing Home",
  legalName: "Shanti Nursing Home",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/hospital.png`,
  phones: ["+91-9410805042", "+91-9412230586"],
  whatsapp: "https://wa.me/919410805042?text=Hello%20Dr.%20Vinita%2C%20I%27d%20like%20to%20schedule%20a%20consultation.",
  email: "info@shantinursinghome.in",
  address: {
    streetAddress: "Circular Road, Opposite Private Ward, SBD Hospital, Prakashpuram",
    addressLocality: "Saharanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "247001",
    addressCountry: "IN",
  },
  geo: { latitude: 29.9684, longitude: 77.5454 },
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "11:00", closes: "15:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:30", closes: "20:00" },
    { days: ["Sunday"], opens: "12:00", closes: "14:00" },
  ],
  foundedYear: 1996,
  sameAs: [
    "https://www.lybrate.com/saharanpur/doctor/dr-vinita-malhotra-gynaecologist",
    "https://www.justdial.com",
  ],
} as const

export const doctor = {
  name: "Dr. Vinita Malhotra",
  honorificPrefix: "Dr.",
  givenName: "Vinita",
  familyName: "Malhotra",
  jobTitle: "Obstetrician, Gynaecologist & Vaginal Surgeon",
  degrees: ["MBBS", "DGO"],
  practicingSince: 1996,
  yearsExperience: new Date().getFullYear() - 1996,
  image: `${SITE_URL}/doctor.png`,
  description:
    "Dr. Vinita Malhotra is a highly skilled Gynaecologist, Obstetrician and Vaginal Surgeon practicing since 1996 in Saharanpur. She specializes in high-risk pregnancy management, infertility evaluation, advanced vaginal surgery, and women's health from adolescence through menopause.",
  // External profile URLs for this specific doctor. Paste real profile URLs here
  // (Lybrate doctor page, Practo profile, LinkedIn, Justdial profile, etc.).
  // Leaving array entries empty is fine — only valid URLs are emitted in schema.
  sameAs: [
    // "https://www.lybrate.com/saharanpur/doctor/dr-vinita-malhotra-gynaecologist",
    // "https://www.practo.com/saharanpur/doctor/...",
    // "https://www.justdial.com/Saharanpur/...",
    // "https://www.linkedin.com/in/...",
  ] as readonly string[],
  specialties: [
    "Obstetrics",
    "Gynaecology",
    "High-Risk Pregnancy",
    "Vaginal Surgery",
    "Infertility Evaluation",
    "PCOD / PCOS Treatment",
    "Menopause Management",
    "Adolescent Health",
  ],
  languages: ["English", "Hindi"],
} as const

export const reviewsSummary = {
  ratingValue: 4.8,
  reviewCount: 181,
  sources: [
    { name: "Lybrate", count: 118 },
    { name: "Justdial", count: 63 },
  ],
} as const

/** Saharanpur neighborhoods we routinely serve — used in hyperlocal copy and AreaServed schema. */
export const areasServed = [
  "Prakashpuram",
  "Court Road",
  "Delhi Road",
  "Ambala Road",
  "Dehradun Road",
  "Gangoh Road",
  "Janakpuri",
  "Khalapar",
  "Pathan Pura",
  "Madhav Nagar",
  "Awas Vikas",
  "Kambohan",
  "Rasoolpur",
  "Gandhi Park",
  "Old City / Sadar Bazar",
  "Behat Road",
  "Sarsawa",
  "Nakur",
  "Deoband",
  "Gangoh",
] as const

/** Common directions from major Saharanpur landmarks. */
export const directions = [
  {
    from: "Saharanpur Railway Station",
    text: "~3.5 km. Take an auto-rickshaw or e-rickshaw towards Court Road, then ask for SBD Hospital / Prakashpuram. The clinic is opposite the private ward of SBD Hospital on Circular Road.",
  },
  {
    from: "Saharanpur Bus Stand",
    text: "~2 km. Auto / e-rickshaw direct to Circular Road, opposite SBD Hospital. About 8–10 minutes by road.",
  },
  {
    from: "Court Road",
    text: "~1.5 km. Drive towards SBD Hospital / Prakashpuram. The clinic is on Circular Road, directly opposite the private ward of SBD Hospital.",
  },
  {
    from: "Delhi Road",
    text: "Enter Saharanpur city, head towards SBD Hospital via Circular Road. The clinic is opposite the SBD Hospital private ward — landmark visible from the road.",
  },
  {
    from: "Ambala Road",
    text: "Drive into Saharanpur city, then head towards Prakashpuram / SBD Hospital. The clinic is on Circular Road opposite the SBD Hospital private ward.",
  },
  {
    from: "Dehradun Road",
    text: "Enter Saharanpur city and head to Court Road / SBD Hospital. The clinic is just opposite the private ward on Circular Road.",
  },
] as const

export type Clinic = typeof clinic
export type Doctor = typeof doctor
