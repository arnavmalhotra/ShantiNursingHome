# SEO & AI Optimization — Your Action Items

The code-side optimization is done. This document is **everything that has to happen outside the codebase** to actually move rankings.

Work top-to-bottom — items are ordered by impact-per-hour.

---

## Canonical NAP (use this exact text everywhere)

Copy-paste this into every directory listing. **Don't paraphrase.**

```
Name:    Shanti Nursing Home
Address: Circular Road, Opposite Private Ward, SBD Hospital,
         Prakashpuram, Saharanpur, Uttar Pradesh 247001, India
Phone:   +91 94108 05042
Alt:     +91 94122 30586
Website: https://www.shantinursinghome.in
Email:   info@shantinursinghome.in
Hours:   Mon–Sat 11:00 AM – 3:00 PM, 6:30 PM – 8:00 PM
         Sun 12:00 PM – 2:00 PM (by appointment)
Doctor:  Dr. Vinita Malhotra, MBBS, DGO
         Obstetrician, Gynaecologist & Vaginal Surgeon
         Practicing since 1996
Primary category: OB-GYN / Gynecologist Clinic
```

> Mismatches between listings (e.g. one says "Shanti Nursing Home Saharanpur", another "Dr. Vinita Malhotra Clinic") confuse Google and downgrade your local rank. Spelling, punctuation, abbreviations — all must match.

---

## 1. Google Business Profile — do this first

This is **the single biggest move you can make.** Free, takes ~20 minutes plus a 2–3 week postcard wait.

- [ ] Go to **[google.com/business](https://www.google.com/business/)** → sign in with the clinic's Gmail.
- [ ] Search "Shanti Nursing Home Saharanpur" — if it exists, click **"Own this business?"**. Otherwise create a new listing.
- [ ] Fill in the canonical NAP exactly as above.
- [ ] Primary category: **Obstetrician-Gynecologist**. Add secondary categories: *Maternity hospital*, *Women's health clinic*, *Fertility clinic*.
- [ ] Add services (copy from the homepage service list).
- [ ] Add **at least 10 photos**:
  - [ ] Building exterior (1–2)
  - [ ] Clinic signage (1)
  - [ ] Reception / waiting area (1–2)
  - [ ] Consultation room (1)
  - [ ] Procedure / examination room (1–2)
  - [ ] Dr. Vinita Malhotra portrait (1)
  - [ ] Equipment / facilities (1–2)
- [ ] Google will mail a postcard with a 6-digit verification code to the clinic address (2–3 weeks). Enter it in your dashboard. **Listing is not fully live until verified.**
- [ ] Once verified, turn on **Messaging**, **Booking**, and **Q&A**.
- [ ] After every patient visit, ask satisfied patients to leave a Google review. Even 5 per month adds up.

---

## 2. Google Search Console + Bing Webmaster Tools

This is how Google tells you what's working and what isn't.

### Google Search Console

- [ ] Go to **[search.google.com/search-console](https://search.google.com/search-console/welcome)**.
- [ ] Add property → **URL prefix** → `https://www.shantinursinghome.in`
- [ ] Choose **HTML tag** verification → copy the `content="..."` value.
- [ ] Create a file `.env.local` at the project root (or update Vercel env vars) with:
      ```
      NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=YOUR_CODE_HERE
      ```
- [ ] Redeploy.
- [ ] Click Verify in GSC.
- [ ] In GSC → Sitemaps → submit `https://www.shantinursinghome.in/sitemap.xml`.
- [ ] Check back weekly. Watch the **Coverage** and **Performance** reports.

### Bing Webmaster Tools

- [ ] Go to **[bing.com/webmasters](https://www.bing.com/webmasters)**.
- [ ] Add site → import from Google Search Console (one-click after step above), **or** add the meta tag via:
      ```
      NEXT_PUBLIC_BING_SITE_VERIFICATION=YOUR_CODE_HERE
      ```
- [ ] Submit the sitemap.

### Facebook domain verification (optional but useful for OG)

- [ ] In **[business.facebook.com](https://business.facebook.com)** → Brand Safety → Domains → add `shantinursinghome.in`.
- [ ] Plug the code into:
      ```
      NEXT_PUBLIC_FB_DOMAIN_VERIFICATION=YOUR_CODE_HERE
      ```

---

## 3. Sync NAP across directories

For each platform: claim the listing, paste the canonical NAP, upload 5+ photos, verify via OTP/phone call.

| Priority | Platform | URL | Notes |
|---|---|---|---|
| 🟥 | Google Business Profile | google.com/business | (Step 1 above) |
| 🟥 | Bing Places | [bingplaces.com](https://www.bingplaces.com) | One-click import from Google |
| 🟥 | Apple Maps | [businessconnect.apple.com](https://businessconnect.apple.com) | iPhone users find clinics via Apple Maps |
| 🟧 | Justdial | [justdial.com](https://www.justdial.com) | You already have 63 ratings — claim the listing |
| 🟧 | Lybrate | [lybrate.com](https://www.lybrate.com) | You already have 118 ratings on Dr. Malhotra's profile |
| 🟧 | Practo | [practo.com/for-doctors](https://www.practo.com/for-doctors) | Free basic profile |
| 🟨 | Sehat | [sehat.com](https://www.sehat.com) | Free listing |
| 🟨 | WhatsApp Business | WhatsApp app → Settings → Business profile | Convert your number to a Business profile |
| 🟨 | Facebook Page | [facebook.com](https://www.facebook.com/pages/create/) | Page → Business Info → match NAP exactly |
| 🟨 | Instagram Business | linked from FB Page | Profile bio with phone, address, website |
| 🟩 | Google Maps "Suggest an edit" | Maps app | If anyone has dropped a pin already, claim it |
| 🟩 | TrueCaller for Business | [truecaller.com/business](https://www.truecaller.com/business) | Stops calls from showing as "Unknown" |
| 🟩 | Sulekha, Apollo247 (lite) | google them | Lower priority — only after the above |

> **Audit:** after a week, Google `"Shanti Nursing Home" Saharanpur` and verify every result shows the **same** phone & address. Fix any outliers.

---

## 4. Get real patient reviews (huge for E-E-A-T)

You currently have 4.8/5 with 181 ratings (Lybrate + Justdial). Google reviews are weighted more heavily by Google itself.

- [ ] Print a small card or sticker for the reception desk with:
      - A short QR code to your Google review link
      - "If we cared for you well, a Google review would mean a lot"
- [ ] Send a WhatsApp template to every patient ~24 hours after their visit:
      > "Thank you for visiting Shanti Nursing Home. If you found the consultation helpful, would you take 30 seconds to leave a Google review? [link]"
- [ ] Once you have **5–10 real reviews with patient consent** (first name + last initial is fine), paste them into:
      `lib/reviews.ts`
      ```ts
      export const reviewsBySlug: Record<string, PatientReview[]> = {
        "pregnancy-care-saharanpur": [
          { author: "Priya S.", rating: 5, date: "2026-04-15",
            body: "Dr. Malhotra...", source: "Google" },
        ],
      }
      ```
- [ ] Respond to **every** Google review — even 1-liner thank-yous. Response rate is a ranking signal.

**Do not fabricate reviews.** Google penalises fake reviews, and Indian Consumer Protection Act (E-Commerce Rules, 2020) explicitly prohibits them. The infrastructure is in place; you just need real ones.

---

## 5. Update doctor profile URLs in code

Once you've claimed the directory profiles, paste the doctor-specific URLs into `lib/clinic.ts`:

```ts
// In the `doctor` object:
sameAs: [
  "https://www.lybrate.com/saharanpur/doctor/dr-vinita-malhotra-gynaecologist",
  "https://www.practo.com/saharanpur/doctor/...",
  "https://www.justdial.com/Saharanpur/...",
  "https://www.linkedin.com/in/...", // if you create one
],
```

And the clinic-level URLs into the same file:

```ts
// In the `clinic` object:
sameAs: [
  "https://g.page/ShantiNursingHomeSaharanpur",   // Google Business Profile share link
  "https://www.facebook.com/...",
  "https://www.instagram.com/...",
  "https://www.justdial.com/Saharanpur/Shanti-Nursing-Home/...",
],
```

These feed straight into the `Physician.sameAs` and `MedicalClinic.sameAs` schema, which Google uses to confirm "this profile + this listing + this directory entry all describe the same entity."

---

## 6. Image upgrades

- [ ] Replace `/public/og-image.png` (currently 1200×630) — make sure it shows clinic name, doctor name, and the building.
- [ ] Create **proper apple-touch-icon** at `/public/apple-touch-icon.png` (180×180 PNG, square, with clinic logo).
- [ ] Optional but ideal: 192×192 and 512×512 PWA icons at `/public/icon-192.png` and `/public/icon-512.png`. Update `app/manifest.ts` to reference them.
- [ ] Use **EXIF-geotagged photos** on Google Business Profile. Lat/long: `29.9684, 77.5454`. Apps like "Photo Stamp Camera" (Android) or "Solocator" (iOS) embed location data automatically. Geotagged photos are a strong local signal.

---

## 7. Build local backlinks

Backlinks from Saharanpur-relevant sites are gold. Cold outreach + a few targeted moves:

- [ ] Get listed in **Saharanpur local news sites** as an "expert source" for women's-health features. Email tips to local journalists with quotes ready to use.
- [ ] **Sponsor a small local event** (school health camp, NGO event) — they'll link back from their site.
- [ ] Partner with **2–3 local pediatricians, GPs, dieticians**: offer mutual cross-referrals; ask if they have a "referral partners" page where you can be linked.
- [ ] If you teach / lecture / present anywhere (FOGSI events, college seminars), make sure your bio includes the website URL.
- [ ] Write a **guest article** for a regional women's health publication or blog — link back in author bio.

---

## 8. Social presence (low effort, real impact)

- [ ] **Instagram Business** with the canonical NAP in the bio, weekly posts (women's-health tips, "fact of the week", behind-the-scenes at the clinic).
- [ ] **Facebook Page** mirror — Indian patient demographics still use FB heavily.
- [ ] **YouTube channel** (even later — 5-min videos on PCOS, pregnancy myths etc. crush long-tail search and feed AI sources). Embed videos in your blog posts → `VideoObject` schema.

Each profile should have:
- Same Name (exact)
- Same primary phone
- Link to `https://www.shantinursinghome.in`
- Hours that match the canonical above

---

## 9. Weekly habits (sustained ranking)

| Frequency | Action |
|---|---|
| Weekly | Post 1 update on Google Business Profile (a service highlight, blog link, or seasonal advisory) |
| Weekly | Respond to any new reviews on Google / Lybrate / Justdial / Practo |
| Weekly | Post 1–2 times on Instagram + Facebook |
| Bi-weekly | Publish 1 new blog post (women's-health topic) — long-tail SEO gold |
| Monthly | Check Google Search Console — what queries are bringing traffic? What's getting impressions but no clicks? |
| Monthly | Update at least 1 existing SEO landing page with fresh content or a new patient review |
| Quarterly | Refresh photos on Google Business Profile |

---

## 10. Things to AVOID (these hurt ranking)

- ❌ Stuffing keywords unnaturally into page text ("best gynecologist Saharanpur best gynecologist Saharanpur").
- ❌ Buying backlinks or paid review services.
- ❌ Creating fake patient testimonials.
- ❌ Hidden text, doorway pages, or AI-generated content with no review.
- ❌ Inconsistent NAP — even a different phone format on one directory hurts.
- ❌ Letting the Google Business Profile go dormant — no posts for 3+ months drops ranking.
- ❌ Ignoring negative reviews. Reply calmly, in public, and offer to resolve offline.

---

## 11. Environment variables to set

Once you have verification codes, set these (in `.env.local` for local dev or in Vercel/your host's env vars for production), then redeploy:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...      # from Google Search Console
NEXT_PUBLIC_BING_SITE_VERIFICATION=...        # from Bing Webmaster Tools
NEXT_PUBLIC_FB_DOMAIN_VERIFICATION=...        # from Facebook Business
```

The codebase already reads these and outputs the right meta tags when present.

---

## 12. Files in this codebase to edit later

| When you have... | Edit this file | What to add |
|---|---|---|
| Real patient reviews + consent | `lib/reviews.ts` | Paste reviews into `reviewsBySlug` |
| Doctor profile URLs (Lybrate, Practo, etc.) | `lib/clinic.ts` | `doctor.sameAs` array |
| Clinic profile URLs (FB, IG, Google Business) | `lib/clinic.ts` | `clinic.sameAs` array |
| Verified Google Business Profile URL | `lib/clinic.ts` | Top of `clinic.sameAs` |
| New blog article ideas | `lib/blog-posts.ts` | Add to `blogPosts` array |
| New service page idea | `lib/seo-pages.ts` + `app/(seo)/<slug>/page.tsx` | Add config + 12-line wrapper |

---

## 13. Tools to bookmark

- **[Google Search Console](https://search.google.com/search-console)** — your dashboard
- **[Google Business Profile](https://business.google.com)** — your local ranking lever
- **[PageSpeed Insights](https://pagespeed.web.dev/)** — paste any URL of your site to test Core Web Vitals
- **[Rich Results Test](https://search.google.com/test/rich-results)** — paste a URL to see what schema Google reads
- **[Schema Markup Validator](https://validator.schema.org/)** — second opinion for JSON-LD
- **[Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)** — confirm mobile UX (Google primarily uses mobile rankings)
- **[Lighthouse in Chrome DevTools](chrome://lighthouse)** — full-site audit, performance + SEO score

---

## 14. Realistic timeline

| Timeframe | What to expect |
|---|---|
| Week 1 | Google Business Profile created (verification pending). Sitemaps submitted. |
| Week 2–4 | Google Business Profile verified. Site shows in Google Search Console. First impressions data arrives. |
| Month 2 | Branded search rankings strong. Non-branded ("gynecologist Saharanpur") starts appearing on page 2–3. |
| Month 3 | 10+ Google reviews ideally. Non-branded rankings begin moving to page 1 for some terms. |
| Month 4–6 | If blog is updated bi-weekly and reviews keep coming, expect strong page-1 presence for "gynecologist in Saharanpur", "best gynecologist Saharanpur", "high-risk pregnancy Saharanpur", and similar local-intent queries. |

SEO is months of consistency, not a one-week sprint. The on-site foundation is done — momentum now depends mainly on the items in this file.

---

## TL;DR — if you only do five things

1. **Claim Google Business Profile**, verify the postcard, upload 10 photos.
2. **Submit `sitemap.xml`** in Google Search Console + Bing Webmaster.
3. **Sync the canonical NAP** across Justdial, Lybrate, Practo, Bing Places, Apple Maps.
4. **Get 10 real Google reviews** in the next 60 days (ask every satisfied patient).
5. **Paste your verified profile URLs** into `lib/clinic.ts` so the schema completes the entity graph.

Everything else compounds on top of these.
