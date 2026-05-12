import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { SITE_URL } from "@/lib/clinic"
import { blogPosts } from "@/lib/blog-posts"
import { JsonLd } from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/schema"

const url = `${SITE_URL}/blog`

export const metadata: Metadata = {
  title: "Women's Health Blog | Shanti Nursing Home, Saharanpur",
  description:
    "Practical, plain-English articles on pregnancy, gynecology, PCOS, fertility and women's health — written and reviewed by Dr. Vinita Malhotra at Shanti Nursing Home, Saharanpur.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Shanti Nursing Home",
    title: "Women's Health Blog — Shanti Nursing Home",
    description:
      "Practical, doctor-reviewed articles on pregnancy, gynaecology and women's health.",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shanti Nursing Home Blog" }],
  },
}

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Blog", url },
]

const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
)

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${url}#blog`,
            url,
            name: "Shanti Nursing Home — Women's Health Blog",
            description:
              "Practical, doctor-reviewed articles on pregnancy, gynaecology and women's health.",
            publisher: { "@id": `${SITE_URL}/#clinic` },
            inLanguage: "en-IN",
            blogPost: blogPosts.map((p) => ({
              "@type": "MedicalScholarlyArticle",
              headline: p.title,
              url: `${SITE_URL}/blog/${p.slug}`,
              datePublished: p.publishedDate,
              dateModified: p.updatedDate,
            })),
          },
        ]}
      />
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <header className="text-center space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              Women's Health Blog
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-lg">
              Practical, plain-English articles on pregnancy, gynaecology, PCOS, fertility and
              women's health — written and medically reviewed by Dr. Vinita Malhotra.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-lg border bg-card p-6 hover:bg-muted/40 transition-colors flex flex-col"
              >
                <div className="text-xs uppercase tracking-wide text-primary font-semibold">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold mt-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-muted-foreground mt-3 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readMinutes} min read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
