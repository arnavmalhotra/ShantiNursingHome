import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { SITE_URL, doctor } from "@/lib/clinic"
import { blogPostBySlug, blogPosts } from "@/lib/blog-posts"
import { seoPageBySlug } from "@/lib/seo-pages"
import { JsonLd } from "@/components/seo/JsonLd"
import { BlogBody } from "@/components/blog/BlogBody"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { ClinicInfo } from "@/components/seo/ClinicInfo"
import { breadcrumbSchema, articleSchema, faqPageSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostBySlug[slug]
  if (!post) return {}
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Shanti Nursing Home",
      title: post.title,
      description: post.description,
      locale: "en_IN",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [doctor.name],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPostBySlug[slug]
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`
  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url },
  ]

  const faqSections = post.body.flatMap((s) => (s.type === "faq" ? s.items : []))
  const schema: object[] = [articleSchema(post), breadcrumbSchema(breadcrumbs)]
  if (faqSections.length) schema.push(faqPageSchema(faqSections))

  const relatedSeo = post.relatedSeoSlugs
    .map((s) => seoPageBySlug[s])
    .filter(Boolean)

  return (
    <>
      <JsonLd data={schema} />
      <article className="container py-8 md:py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-4">
            <div className="text-xs uppercase tracking-wide text-primary font-semibold">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y py-3">
              <span className="font-medium text-foreground">By {doctor.name}, MBBS, DGO</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Medically reviewed
              </span>
            </div>
          </header>

          <BlogBody sections={post.body} />

          {relatedSeo.length > 0 && (
            <section className="space-y-3 border-t pt-8">
              <h2 className="text-xl font-bold">Related services at Shanti Nursing Home</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedSeo.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="rounded-lg border p-4 hover:bg-muted/40 transition-colors flex items-center justify-between gap-3"
                  >
                    <span className="font-medium text-sm">{s.h1}</span>
                    <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          <aside className="rounded-lg border bg-muted/30 p-5 text-sm space-y-2">
            <p className="font-semibold text-foreground">A note on medical advice</p>
            <p className="text-muted-foreground">
              This article is general information, not a substitute for an in-person consultation.
              Every patient is different — please book a visit with {doctor.name} or your own
              gynaecologist before acting on anything you read here.
            </p>
          </aside>

          <div className="rounded-lg bg-primary text-primary-foreground p-6 md:p-8 text-center space-y-3">
            <h2 className="text-2xl font-bold">Have a question? Talk to Dr. Vinita Malhotra</h2>
            <p>Book an in-person or online consultation at Shanti Nursing Home, Saharanpur.</p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <Link href="/appointment">
                <Button variant="secondary">Book Appointment</Button>
              </Link>
            </div>
          </div>

          <ClinicInfo />
        </div>
      </article>
    </>
  )
}
