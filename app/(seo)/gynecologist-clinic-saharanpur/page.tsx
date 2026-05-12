import { SeoLandingPage, buildSeoMetadata } from "@/components/seo/SeoLandingPage"
import { seoPageBySlug } from "@/lib/seo-pages"

const page = seoPageBySlug["gynecologist-clinic-saharanpur"]

export const metadata = buildSeoMetadata(page)

export default function Page() {
  return <SeoLandingPage page={page} />
}
