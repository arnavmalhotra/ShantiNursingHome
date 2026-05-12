import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { GoogleAnalytics } from '@next/third-parties/google'
import { JsonLd } from "@/components/seo/JsonLd"
import { medicalClinicSchema, organizationSchema, physicianSchema, websiteSchema } from "@/lib/schema"
import { SITE_URL, clinic } from "@/lib/clinic"

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true })

const whatsappLink = clinic.whatsapp

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shanti Nursing Home — Gynecology & Obstetrics Care in Saharanpur",
    template: "%s | Shanti Nursing Home",
  },
  description:
    "Specialised gynecology, obstetrics, infertility and vaginal surgery care in Saharanpur by Dr. Vinita Malhotra (MBBS, DGO) — practicing since 1996.",
  applicationName: "Shanti Nursing Home",
  generator: "Next.js",
  keywords: [
    "gynecologist Saharanpur",
    "gynaecologist Saharanpur",
    "Dr. Vinita Malhotra",
    "maternity hospital Saharanpur",
    "obstetrician Saharanpur",
    "infertility treatment Saharanpur",
    "PCOS Saharanpur",
    "vaginal surgery Saharanpur",
    "ladies doctor Saharanpur",
    "Shanti Nursing Home",
  ],
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/og-image.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "Shanti Nursing Home",
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: { telephone: true, address: true, email: true },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  // Plug verification codes from Google Search Console / Bing Webmaster / others.
  // See ACTION_ITEMS.md for how to get each code.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
  process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION
    ? {
        verification: {
          ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
            ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
            : {}),
          other: {
            ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
              ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
              : {}),
            ...(process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION
              ? { "facebook-domain-verification": process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION }
              : {}),
          },
        },
      }
    : {}),
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Shanti Nursing Home",
    title: "Shanti Nursing Home — Gynecology & Obstetrics in Saharanpur",
    description:
      "Senior gynecologist & obstetrician in Saharanpur. Dr. Vinita Malhotra — practicing since 1996. In-person and online consultations.",
    locale: "en_IN",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Shanti Nursing Home" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanti Nursing Home — Gynecology & Obstetrics in Saharanpur",
    description:
      "Senior gynecologist & obstetrician in Saharanpur. Dr. Vinita Malhotra — practicing since 1996.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Saharanpur" />
        <meta name="geo.position" content={`${clinic.geo.latitude};${clinic.geo.longitude}`} />
        <meta name="ICBM" content={`${clinic.geo.latitude}, ${clinic.geo.longitude}`} />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <JsonLd
          data={[
            medicalClinicSchema(),
            physicianSchema(),
            websiteSchema(),
            organizationSchema(),
          ]}
        />
      </head>
      <body className={inter.className + " text-black"}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full p-4 bg-green-500 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-31R5XSK07C" />
      </body>
    </html>
  )
}



import './globals.css'