import { SeoLandingPage, buildSeoMetadata } from "@/components/seo/SeoLandingPage"
import { seoPageBySlug } from "@/lib/seo-pages"

const page = seoPageBySlug["gynecological-checkup-saharanpur"]

export const metadata = buildSeoMetadata(page)

export default function Page() {
  return <SeoLandingPage page={page} />
}
