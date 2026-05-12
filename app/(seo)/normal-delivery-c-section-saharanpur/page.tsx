import { SeoLandingPage, buildSeoMetadata } from "@/components/seo/SeoLandingPage"
import { seoPageBySlug } from "@/lib/seo-pages"

const page = seoPageBySlug["normal-delivery-c-section-saharanpur"]

export const metadata = buildSeoMetadata(page)

export default function Page() {
  return <SeoLandingPage page={page} />
}
