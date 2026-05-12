import { SITE_URL } from "./clinic"

export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string; variant?: "info" | "warn" }
  | { type: "faq"; items: { q: string; a: string }[] }

export type BlogPost = {
  slug: string
  title: string
  description: string
  /** Used in card listing as a short hook. */
  excerpt: string
  /** Topic category for filtering/grouping. */
  category: "Pregnancy" | "Gynaecology" | "Fertility" | "Wellness" | "Surgery"
  /** ISO date (YYYY-MM-DD). */
  publishedDate: string
  /** ISO date (YYYY-MM-DD). */
  updatedDate: string
  /** Estimated read time in minutes. */
  readMinutes: number
  /** Slugs of related SEO landing pages (rendered as CTAs at the end). */
  relatedSeoSlugs: string[]
  /** Long-tail keywords this post targets. */
  keywords: string[]
  body: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "pap-smear-saharanpur-what-to-expect",
    title: "Pap Smear in Saharanpur: What to Expect, When You Need It & What the Results Mean",
    description:
      "A clear guide to Pap smear testing in Saharanpur — when to get one, what happens during the test, what abnormal results mean, and where to get screened.",
    excerpt:
      "A Pap smear catches early cell changes in the cervix — long before they become cancer. Here's exactly what to expect, who needs one, and how often.",
    category: "Gynaecology",
    publishedDate: "2026-02-01",
    updatedDate: "2026-05-01",
    readMinutes: 6,
    relatedSeoSlugs: ["gynecological-checkup-saharanpur", "gynaecologist-saharanpur", "womens-health-clinic-saharanpur"],
    keywords: ["pap smear Saharanpur", "cervical cancer screening Saharanpur", "pap test cost", "pap smear age"],
    body: [
      {
        type: "p",
        text: "A Pap smear (also called Pap test or cervical screening) is a simple 5-minute test that looks for abnormal cells on the cervix — the lower part of the uterus that opens into the vagina. It is one of the most effective cancer-screening tests in modern medicine, because it catches cell changes years before they become cancer.",
      },
      {
        type: "p",
        text: "Despite that, cervical cancer remains the second most common cancer among Indian women — largely because screening rates are still low. The good news: a single Pap smear every 3 years catches almost all early changes when they are 100% treatable.",
      },
      { type: "h2", text: "Who needs a Pap smear and how often?" },
      {
        type: "ul",
        items: [
          "Age 21–29: Pap smear every 3 years if previous results were normal.",
          "Age 30–65: Pap smear every 3 years, or Pap + HPV co-test every 5 years.",
          "Age 65+ with three normal results in a row: screening can usually stop, but discuss with your doctor.",
          "Women who have had a hysterectomy for non-cancer reasons usually don't need further Pap tests.",
          "Higher-risk groups (HIV, immune suppression, previous abnormal Pap) need more frequent testing.",
        ],
      },
      { type: "h2", text: "What happens during the test?" },
      {
        type: "ol",
        items: [
          "You lie down on the examination table with knees apart.",
          "The doctor gently inserts a speculum to see the cervix — this can feel like pressure but is not painful.",
          "A small brush takes a few cells from the surface of the cervix. This takes 10–15 seconds.",
          "The sample is sent to a pathology lab. The doctor's part is done.",
        ],
      },
      {
        type: "callout",
        text: "The test is not painful. Some women describe brief mild pressure or cramping that disappears within minutes. Take a deep breath and let the doctor know if you feel discomfort.",
      },
      { type: "h2", text: "How to prepare for a Pap smear" },
      {
        type: "ul",
        items: [
          "Avoid scheduling the test during your period — mid-cycle (10–20 days after period started) is ideal.",
          "Don't use vaginal medicines, douches or spermicides for 48 hours before.",
          "Avoid intercourse for 24 hours before the test.",
          "Empty your bladder before the test for comfort.",
        ],
      },
      { type: "h2", text: "What do the results mean?" },
      {
        type: "h3",
        text: "Normal (negative for intraepithelial lesion or malignancy)",
      },
      {
        type: "p",
        text: "No abnormal cells were found. Continue routine screening at the recommended interval.",
      },
      { type: "h3", text: "ASC-US, LSIL, HSIL, AGC and other abnormal results" },
      {
        type: "p",
        text: "An abnormal result does NOT mean you have cancer. It means some cells looked different and need further evaluation — usually a repeat test, an HPV test, or a colposcopy (a closer look at the cervix with a magnifier). Most abnormal Pap smears resolve on their own or are easily treated.",
      },
      { type: "h2", text: "What does it cost in Saharanpur?" },
      {
        type: "p",
        text: "A standard Pap smear in Saharanpur — including doctor consultation, sample collection and lab processing — is affordable and accessible. Please call or WhatsApp Shanti Nursing Home for current pricing. Many gynaecological checkup packages include the Pap smear as part of a complete annual exam.",
      },
      { type: "h2", text: "Where to get a Pap smear in Saharanpur" },
      {
        type: "p",
        text: "Dr. Vinita Malhotra at Shanti Nursing Home offers Pap smears as part of routine well-woman exams. The same-doctor continuity means any abnormal result is followed up with the same person who knows your history — not a different doctor each visit.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is a Pap smear painful?",
            a: "No — most women describe brief pressure, not pain. The actual cell collection takes 10–15 seconds.",
          },
          {
            q: "Can I have a Pap smear if I'm a virgin?",
            a: "Yes, in select cases — but it's usually not recommended for women who have never been sexually active because the risk of HPV (the main cause of cervical cancer) is very low. Discuss with your doctor.",
          },
          {
            q: "Can I have a Pap smear during pregnancy?",
            a: "Yes — Pap smears are safe during pregnancy, ideally during the first or second trimester. They are part of routine antenatal care if you're due for screening.",
          },
          {
            q: "What if my Pap smear is abnormal?",
            a: "Don't panic — most abnormal Pap smears do not mean cancer. Your doctor will recommend either a repeat test or colposcopy. Early changes are very treatable.",
          },
        ],
      },
    ],
  },
  {
    slug: "pcos-diet-lifestyle-indian-women",
    title: "PCOS Diet & Lifestyle for Indian Women: A Practical Daily Guide",
    description:
      "A real-world PCOS diet and lifestyle guide for Indian women — what to eat, what to limit, exercise that actually works, and when to see a doctor.",
    excerpt:
      "Forget extreme diets. Here's what's actually proven to help PCOS — adapted for everyday Indian meals, North-Indian kitchens, and busy schedules.",
    category: "Gynaecology",
    publishedDate: "2026-01-15",
    updatedDate: "2026-04-10",
    readMinutes: 8,
    relatedSeoSlugs: ["pcod-pcos-treatment-saharanpur", "infertility-treatment-saharanpur", "gynaecologist-saharanpur"],
    keywords: ["PCOS diet Indian women", "PCOD diet plan", "PCOS lifestyle changes", "PCOS exercise", "PCOS treatment without medication"],
    body: [
      {
        type: "p",
        text: "PCOS (Polycystic Ovary Syndrome) affects about 1 in 5 Indian women. The good news: lifestyle changes alone — diet, movement and sleep — can dramatically improve symptoms. Many women come off medication entirely once their habits are stable.",
      },
      {
        type: "callout",
        text: "PCOS is a long-term condition, not a short-term fix. The goal isn't a 'detox' for 30 days. It's small daily habits that you can actually keep.",
      },
      { type: "h2", text: "Why lifestyle matters more than diet pills" },
      {
        type: "p",
        text: "The core problem in PCOS is insulin resistance — your body produces more insulin than it needs. High insulin pushes the ovaries to make more androgens (male hormones), which then causes irregular periods, acne, facial hair and weight gain. Anything that lowers insulin levels helps. That's why lifestyle is more powerful than any single pill.",
      },
      { type: "h2", text: "What to eat — practical Indian guidelines" },
      { type: "h3", text: "Build every meal around three things" },
      {
        type: "ul",
        items: [
          "Protein (palm-sized serving): dal, paneer, eggs, fish, chicken, sprouts, soya, curd.",
          "Vegetables (half the plate): any non-starchy vegetable — palak, lauki, bhindi, gobhi, beans, capsicum.",
          "A small portion of complex carb: 1–2 rotis, ½ cup brown rice, or ½ cup millets (bajra, jowar, ragi).",
        ],
      },
      { type: "h3", text: "Limit (not eliminate) these" },
      {
        type: "ul",
        items: [
          "White rice, maida, biscuits, white bread — they spike insulin hardest.",
          "Sugary tea/coffee, sweetened juices, soft drinks.",
          "Mithai, packaged snacks, deep-fried items more than twice a week.",
          "Processed milk products with added sugar (flavoured yoghurt, sweetened milk drinks).",
        ],
      },
      { type: "h3", text: "Add daily" },
      {
        type: "ul",
        items: [
          "1 fistful of soaked almonds, walnuts or peanuts.",
          "1 tablespoon ground flaxseed (alsi) sprinkled over curd or roti dough.",
          "1 cup curd or buttermilk per day.",
          "Methi seeds (1 tsp soaked overnight, water consumed in the morning) — helps insulin sensitivity.",
        ],
      },
      { type: "h2", text: "Exercise that actually works for PCOS" },
      {
        type: "p",
        text: "The single most underrated PCOS treatment is strength training. Building muscle improves insulin sensitivity more than any cardio. Combine it with daily movement:",
      },
      {
        type: "ul",
        items: [
          "Strength training 2–3 times a week (bodyweight squats, push-ups, resistance bands, basic dumbbells).",
          "30 minutes of brisk walking daily — outdoor or treadmill.",
          "Yoga 2–3 times a week — surya namaskar, gentle flow.",
          "Avoid sitting for more than 60 minutes at a stretch. Stand up, walk 2 minutes, sit again.",
        ],
      },
      { type: "h2", text: "Sleep and stress" },
      {
        type: "p",
        text: "Poor sleep raises insulin and cortisol the next day — undoing the work of a perfect diet. Aim for 7–8 hours, with consistent sleep and wake times. Avoid screens 30 minutes before bed.",
      },
      { type: "h2", text: "Realistic timeline" },
      {
        type: "ul",
        items: [
          "Weeks 1–4: Energy improves, cravings reduce.",
          "Months 2–3: Periods may start becoming more regular.",
          "Months 3–6: Weight and acne start improving.",
          "Months 6–12: Most women see clear improvement in cycles, skin, hair and fertility.",
        ],
      },
      {
        type: "callout",
        text: "If you've been consistent with lifestyle for 3–6 months and aren't seeing improvement, talk to a gynaecologist. PCOS care is individual — sometimes a small dose of metformin or other medication makes everything else work better.",
        variant: "info",
      },
      { type: "h2", text: "When to see a doctor" },
      {
        type: "ul",
        items: [
          "Periods missing for 3+ months.",
          "Trying to conceive without success for 6–12 months.",
          "Severe acne or rapidly worsening facial hair.",
          "Sudden weight gain or skin darkening around neck (acanthosis).",
          "Family history of diabetes — early screening is wise.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Is PCOS curable?",
            a: "PCOS isn't cured but it's very controllable. Most symptoms respond to a combination of lifestyle and targeted medication. Many women lead full lives — with regular periods, healthy weight and successful pregnancies — once they find their rhythm.",
          },
          {
            q: "Will I get pregnant with PCOS?",
            a: "Most women with PCOS do conceive — sometimes naturally, sometimes with help. Even when ovulation is irregular, simple medications can restore it in most cases.",
          },
          {
            q: "Do I have to give up rice and roti?",
            a: "No. Keep portions small, pair them with protein and vegetables, and prefer whole-grain options (brown rice, millets, atta over maida). Total elimination usually backfires.",
          },
          {
            q: "What about supplements like inositol?",
            a: "Myo-inositol has shown promise in PCOS for insulin sensitivity and ovulation. Discuss with your doctor before starting any supplement — quality varies and it's not a substitute for lifestyle.",
          },
        ],
      },
    ],
  },
  {
    slug: "first-trimester-pregnancy-guide-india",
    title: "First Trimester of Pregnancy: A Week-by-Week Guide for Indian Women",
    description:
      "What to expect in the first trimester of pregnancy — symptoms, scans, tests, diet, what to watch for and when to call your doctor.",
    excerpt:
      "The first 12 weeks of pregnancy decide a lot — risk, dating, anomaly screening. Here's the no-nonsense first-trimester plan.",
    category: "Pregnancy",
    publishedDate: "2026-03-05",
    updatedDate: "2026-05-08",
    readMinutes: 7,
    relatedSeoSlugs: ["pregnancy-care-saharanpur", "prenatal-care-saharanpur", "high-risk-pregnancy-saharanpur"],
    keywords: ["first trimester pregnancy India", "early pregnancy guide", "pregnancy first 3 months", "pregnancy tests first trimester"],
    body: [
      {
        type: "p",
        text: "The first trimester is the first 12 weeks of pregnancy — counted from the first day of your last menstrual period (LMP). It's the most important period for foetal development and the time when most pregnancy risks are decided. The right care now sets up the rest of the pregnancy.",
      },
      { type: "h2", text: "What you might feel" },
      {
        type: "ul",
        items: [
          "Missed period and breast tenderness (often the first signs).",
          "Nausea, vomiting or food aversions — especially weeks 6–10.",
          "Tiredness and frequent urination.",
          "Mood swings due to rising hormones.",
          "Mild lower-abdominal cramping (without bleeding) is usually normal.",
        ],
      },
      {
        type: "callout",
        text: "Bleeding, severe pain on one side, or sudden dizziness in early pregnancy is not normal — see your doctor immediately to rule out ectopic pregnancy or miscarriage.",
        variant: "warn",
      },
      { type: "h2", text: "Your first antenatal visit" },
      {
        type: "p",
        text: "Ideally schedule your first visit between 6–8 weeks. At this visit:",
      },
      {
        type: "ul",
        items: [
          "Confirmation of pregnancy and accurate dating.",
          "Detailed medical history — past pregnancies, family history, chronic conditions.",
          "Examination: BP, weight, baseline measurements.",
          "Folic acid (5 mg in India) and iron started or continued.",
          "Vaccination status reviewed (Tdap, flu).",
          "Lifestyle, diet, exercise and travel guidance.",
        ],
      },
      { type: "h2", text: "Tests in the first trimester" },
      {
        type: "ul",
        items: [
          "Blood group, Rh typing, CBC, blood sugar, TSH.",
          "Hepatitis B, HIV, VDRL (syphilis screening).",
          "Urine routine — protein, sugar, infection.",
          "Dating scan (6–9 weeks) to confirm gestational age and viability.",
          "NT (nuchal translucency) scan + double marker at 11–13 weeks for chromosomal screening.",
        ],
      },
      { type: "h2", text: "Diet & lifestyle in the first trimester" },
      {
        type: "ul",
        items: [
          "Eat small, frequent meals to manage nausea.",
          "Stay hydrated — at least 8–10 glasses of water daily.",
          "Folic acid 5 mg daily (already prescribed) — crucial for neural tube development.",
          "Avoid alcohol, tobacco and recreational drugs entirely.",
          "Limit caffeine to under 200 mg/day (about 2 cups of tea).",
          "Avoid papaya, pineapple in large amounts, raw seafood, undercooked meat.",
          "Gentle walking, prenatal yoga — avoid heavy lifting or high-impact exercise.",
        ],
      },
      { type: "h2", text: "When to call your doctor immediately" },
      {
        type: "ul",
        items: [
          "Vaginal bleeding — any amount.",
          "Severe one-sided lower abdominal pain.",
          "Persistent vomiting unable to keep fluids down.",
          "Fever above 38°C / 100.4°F.",
          "Severe headache with vision changes.",
          "Shoulder-tip pain (possible sign of ectopic pregnancy).",
        ],
      },
      { type: "h2", text: "Risk factors that need closer monitoring" },
      {
        type: "p",
        text: "Women with the following often need a more detailed first-trimester plan — see an obstetrician who has handled similar cases:",
      },
      {
        type: "ul",
        items: [
          "Age over 35.",
          "Previous miscarriage(s).",
          "Hypertension, diabetes or thyroid problems.",
          "Twin or multiple pregnancy.",
          "Previous pregnancy with complications.",
          "Family history of genetic conditions.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How often will I have visits in the first trimester?",
            a: "Usually 2–3 visits in the first 12 weeks — the booking visit, a dating scan visit, and the NT scan visit at 11–13 weeks.",
          },
          {
            q: "Is light spotting normal in early pregnancy?",
            a: "A small amount of spotting around the time of the missed period (implantation bleeding) can be normal. Any bleeding heavier than that, or any bleeding after week 6, should be reviewed by your doctor.",
          },
          {
            q: "Can I travel in the first trimester?",
            a: "Short, comfortable travel is usually fine in a low-risk pregnancy. Long flights or rough road travel are best avoided in the first trimester if you have any risk factor. Always check with your doctor first.",
          },
          {
            q: "Can I continue my job?",
            a: "Most office jobs are fine. Jobs involving heavy lifting, prolonged standing, chemical exposure or night shifts may need adjustment — discuss with your doctor.",
          },
        ],
      },
    ],
  },
  {
    slug: "painful-periods-dysmenorrhea-when-to-see-doctor",
    title: "Painful Periods: When It's Normal and When to See a Doctor",
    description:
      "Period pain (dysmenorrhea) is common — but severe pain is not normal. Learn the difference, what conditions cause it, and when to seek help.",
    excerpt:
      "Period cramps are common — but pain that stops you from working, studying or sleeping is not 'just part of being a woman.' Here's how to tell.",
    category: "Gynaecology",
    publishedDate: "2026-02-20",
    updatedDate: "2026-04-25",
    readMinutes: 5,
    relatedSeoSlugs: ["gynaecologist-saharanpur", "pcod-pcos-treatment-saharanpur", "gynecological-checkup-saharanpur"],
    keywords: ["painful periods", "dysmenorrhea treatment", "severe period pain", "endometriosis", "period cramps not normal"],
    body: [
      {
        type: "p",
        text: "Period pain (dysmenorrhea) affects about half of all women at some point. Mild to moderate cramping during the first one or two days of a period — that responds to a painkiller and a hot water bottle — is normal. Pain that stops you from going to school, work, or that wakes you up at night is not.",
      },
      { type: "h2", text: "What's considered normal" },
      {
        type: "ul",
        items: [
          "Mild to moderate cramping for 1–2 days.",
          "Pain centred in the lower abdomen, sometimes radiating to the lower back.",
          "Pain that improves with paracetamol, ibuprofen, or a hot water bottle.",
          "Pain that doesn't stop you from doing your usual activities.",
        ],
      },
      { type: "h2", text: "Signs the pain is NOT normal" },
      {
        type: "ul",
        items: [
          "Severe pain that doesn't respond to standard painkillers.",
          "Pain that lasts longer than 2–3 days.",
          "Pain outside your period (in between periods, with intercourse, with bowel movements).",
          "Pain that gets worse year by year.",
          "Pain accompanied by very heavy bleeding, large clots, or bleeding longer than 7 days.",
          "Pain with infertility, painful urination or rectal pain.",
        ],
      },
      { type: "h2", text: "Common conditions behind severe period pain" },
      { type: "h3", text: "Endometriosis" },
      {
        type: "p",
        text: "Tissue similar to the uterine lining grows outside the uterus — on ovaries, fallopian tubes or pelvic walls. Pain typically worsens over the years and may cause infertility. Diagnosis usually requires ultrasound and sometimes laparoscopy.",
      },
      { type: "h3", text: "Adenomyosis" },
      {
        type: "p",
        text: "Uterine lining grows into the muscle of the uterus, causing heavy, painful periods. More common in women in their 30s and 40s.",
      },
      { type: "h3", text: "Fibroids" },
      {
        type: "p",
        text: "Benign growths in the uterus. Depending on size and location, fibroids can cause heavy bleeding, pelvic pressure and severe cramping.",
      },
      { type: "h3", text: "Pelvic inflammatory disease (PID)" },
      {
        type: "p",
        text: "Infection of the upper genital tract, usually from untreated STIs. Causes pain that doesn't follow the menstrual cycle pattern. Needs prompt antibiotic treatment.",
      },
      { type: "h3", text: "Ovarian cysts" },
      {
        type: "p",
        text: "Most ovarian cysts are harmless and resolve on their own. Large or complex cysts can cause pain and need monitoring.",
      },
      { type: "h2", text: "What you can do at home" },
      {
        type: "ul",
        items: [
          "Heat — hot water bottle or warm shower for 15–20 minutes.",
          "Paracetamol 500 mg or ibuprofen 400 mg every 6–8 hours during pain (with food).",
          "Light exercise — yoga, walking, gentle stretching.",
          "Track your symptoms in a period app — share patterns with your doctor.",
          "Cut down on caffeine and processed sugar in the week before periods.",
        ],
      },
      { type: "h2", text: "When to see a gynaecologist" },
      {
        type: "ul",
        items: [
          "Pain getting worse over time.",
          "Painkillers no longer work.",
          "Period interfering with school, work or sleep.",
          "Heavy bleeding (changing pad/tampon every 1–2 hours).",
          "Trying to conceive without success.",
          "Pain anywhere outside the period itself.",
        ],
      },
      {
        type: "p",
        text: "A gynaecological consultation typically includes a detailed history, an examination, and a pelvic ultrasound. Most causes of severe period pain are treatable — once we know what's behind it.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Are painful periods hereditary?",
            a: "Conditions like endometriosis and fibroids do have a family component. If your mother or sister had severe periods, mention this to your doctor — it shapes the evaluation.",
          },
          {
            q: "Will painful periods affect fertility?",
            a: "Most cases of mild period pain do not affect fertility. But severe pain — especially from endometriosis — can. That's why long-standing severe period pain deserves a proper workup.",
          },
          {
            q: "Are hormonal pills the only treatment?",
            a: "No — treatment depends on the cause. Options include pain medication, hormonal pills, IUCD, lifestyle changes, and in some cases surgery. Many women improve without ongoing medication.",
          },
          {
            q: "Can young teenagers see a gynaecologist for period pain?",
            a: "Absolutely — especially if periods are very painful or irregular from the start. Early evaluation prevents long-term issues. Visits are private and a parent or trusted adult can accompany.",
          },
        ],
      },
    ],
  },
]

export const blogPostBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((p) => [p.slug, p]),
)

export function blogPostUrl(slug: string) {
  return `${SITE_URL}/blog/${slug}`
}
