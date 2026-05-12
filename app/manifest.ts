import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shanti Nursing Home",
    short_name: "Shanti Nursing Home",
    description:
      "Women's healthcare in Saharanpur — Dr. Vinita Malhotra. Pregnancy, gynecology, infertility, vaginal surgery, menopause care.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    lang: "en-IN",
    categories: ["medical", "health"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
