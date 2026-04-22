# Amber Clinics Website-V3 — Site Map & Reference Document

> Reference document for code reviews, image QA, and content updates.
> Domain: **amberskinclinics.com** | Last indexed: 2026-04-21

---

## Table of Contents
1. [Directory Tree](#1-directory-tree)
2. [Site Architecture — Page Relationships](#2-site-architecture--page-relationships)
3. [Page → Section Map](#3-page--section-map)
4. [CSS / JS Dependency Map](#4-css--js-dependency-map)
5. [Image Inventory](#5-image-inventory)
6. [JS Component Interaction Map](#6-js-component-interaction-map)
7. [Color & Typography Reference](#7-color--typography-reference)

---

## 1. Directory Tree

```
Website-V3/
├── index.html                          # Homepage
├── skin-services.html                  # Skin treatments page
├── hair-services.html                  # Hair treatments page
├── laser-services.html                 # Laser treatments page
├── anti-aging.html                     # Anti-aging treatments page
├── about-dr-shalini.html               # Doctor biography page
├── book-appointment.html               # Booking & contact page
│
├── style.css                           # Main design system (4,500+ lines)
├── premium.css                         # Micro-interactions & enhancements
├── premium.js                          # Enhanced JS interactions
│
├── sitemap.xml                         # XML sitemap (7 URLs)
├── robots.txt                          # Crawler directives
├── .gitignore
│
├── images/
│   ├── clinic-logo.png                 # Logo (PNG fallback)
│   ├── clinic-logo.webp                # Logo (modern format)
│   ├── Shalini Image.webp              # Dr. Shalini profile photo
│   └── patients/
│       ├── afreen-shah.png
│       ├── arjun-naik.jpg
│       ├── elise-dsilva.png
│       ├── esha-suyavanshi.jpg
│       ├── manorama-dixit.jpg
│       ├── meenal-singh-ambala.jpg
│       └── shabnam-ansari.jpg
│
├── gallery/
│   └── anti-aging/
│       ├── gallery-01.webp
│       ├── gallery-02.webp
│       ├── gallery-03.webp
│       ├── gallery-04.webp
│       ├── gallery-05.webp
│       ├── gallery-06.webp
│       ├── gallery-07.webp
│       └── gallery-08.webp
│
└── Hero Section/
    ├── Hero.webp                       # Homepage hero (desktop)
    ├── Hero-M.webp                     # Homepage hero (mobile)
    ├── Image6.webp                     # General hero variant (desktop)
    ├── Image6-M.webp                   # General hero variant (mobile)
    │
    ├── skin/
    │   ├── Hero.webp                   # Skin page hero (desktop)
    │   ├── Hero-M.webp                 # Skin page hero (mobile)
    │   ├── Hero-Homepage.webp          # Skin card on homepage (desktop)
    │   ├── Hero-Homepage-M.webp        # Skin card on homepage (mobile)
    │   ├── Acne & Acne Scar Treatment.webp
    │   ├── Anti-Aging-Skin-Tightening.webp
    │   ├── Dark Circles & Eye Rejuvenation .webp
    │   ├── Excessive Sweating (Hyperhidrosis).webp
    │   ├── Keloid & Hypertrophic Scar Treatment.webp
    │   ├── Pigmentation Treatment.webp
    │   ├── Skin Biopsy & Clinical Skin Treatments.webp
    │   ├── Skin Lightening Treatment.webp
    │   ├── Skin Rejuvenation Treatment.webp
    │   ├── Skin-Tag-Mole-Wart-Removal.webp
    │   ├── Stretch-Marks-Reduction.webp
    │   ├── Vitiligo-Treatment.webp
    │   └── Before After/
    │       ├── keloid-scar-01.webp
    │       ├── keloid-scar-02.webp
    │       ├── skin-lightening-01.webp
    │       ├── skin-lightening-02.webp
    │       ├── skin-rejuvenation-01.webp
    │       ├── skin-rejuvenation-02.webp
    │       ├── skin-tag-removal-01.webp
    │       └── skin-tag-removal-02.webp
    │
    ├── Hair/
    │   ├── Hero.webp                   # Hair page hero (desktop)
    │   ├── Hero-M.webp                 # Hair page hero (mobile)
    │   ├── Hero-Homepage.webp          # Hair card on homepage (desktop)
    │   ├── Hero-Homepage-M.webp        # Hair card on homepage (mobile)
    │   ├── Image1.webp                 # Hair carousel slide 2 (desktop)
    │   ├── Image1-M.webp               # Hair carousel slide 2 (mobile)
    │   ├── PRP & Growth Factor Concentrate (GFC).webp
    │   ├── Alopecia Areata Management.webp
    │   ├── Androgenetic Alopecia Treatment.webp
    │   ├── Dandruff & Scalp Psoriasis Treatment.webp
    │   ├── Grey Hair Prevention & Treatment.webp
    │   ├── Hair Transplant Consultation & Non-Surgical Restoration.webp
    │   ├── All Clinical Hair Concerns.webp
    │   └── Before After/
    │       ├── hair-result-01.webp
    │       ├── hair-result-02.webp
    │       ├── hair-result-03.webp
    │       ├── hair-result-04.webp
    │       ├── hair-result-05.webp
    │       ├── hair-result-06.webp
    │       ├── hair-result-07.webp
    │       └── hair-result-08.webp
    │
    ├── Laser/
    │   ├── Hero.webp                   # Laser page hero (desktop)
    │   ├── Hero-M.webp                 # Laser page hero (mobile)
    │   ├── Hero-Homepage.webp          # Laser card on homepage (desktop)
    │   ├── Hero-Homepage-M.webp        # Laser card on homepage (mobile)
    │   ├── Laser for Hair Reduction/
    │   │   ├── Beard Shaping.webp
    │   │   ├── Laser Hair Removal for Sensitive Areas.webp
    │   │   └── Triple Wavelength Diode Laser.webp
    │   ├── Laser for Skin Rejuvenation & Anti-Aging/
    │   │   ├── Carbon Laser Peel (Hollywood Peel).webp
    │   │   ├── Fractional CO2 Laser.webp
    │   │   ├── HIFU (High-Intensity Focused Ultrasound).webp
    │   │   ├── Laser Tatto Removal - Q-Switched Nd-YAG Laser.webp
    │   │   ├── Laser Toning (Q-Switched Nd-YAG).webp
    │   │   ├── Microneedling RF.webp
    │   │   └── Stretch Mark Reduction.webp
    │   └── Before After/
    │       ├── hifu-01.webp
    │       ├── hifu-02.webp
    │       ├── hifu-03.webp
    │       ├── laser-hair-removal-01.webp
    │       ├── laser-hair-removal-02.webp
    │       ├── laser-hair-removal-03.webp
    │       ├── laser-hair-removal-04.webp
    │       └── laser-hair-removal-05.webp
    │
    └── Anti Aging/
        ├── Hero.webp                   # Anti-aging page hero (desktop)
        ├── Hero-M.webp                 # Anti-aging page hero (mobile)
        ├── Hero-Homepage.webp          # Anti-aging card on homepage (desktop)
        ├── Hero-Homepage-M.webp        # Anti-aging card on homepage (mobile)
        ├── I-hero.webp                 # Alt standalone hero
        ├── Botox for Wrinkles & Fine Lines.webp
        ├── Chemical Peel.webp
        ├── Dermal Fillers for Volume Restoration & Enhancement.webp
        ├── Hydrafacial.webp
        ├── Jawline & Chin Contouring.webp
        ├── Lip Augmentation & Hydration.webp
        ├── Microneedling with GFC.webp
        ├── Non-Surgical-Nose-Job.webp
        ├── Under-Eye Fillers.webp
        └── Before After/
            ├── before-01.webp
            ├── before-02.webp
            ├── before-03.webp
            ├── after-01.webp
            ├── after-02.webp
            ├── after-03.webp
            ├── after-04.webp
            └── after-05.webp
```

---

## 2. Site Architecture — Page Relationships

```mermaid
flowchart TD
    HOME["🏠 index.html\nHomepage"]
    SKIN["🧴 skin-services.html\nSkin Services"]
    HAIR["💆 hair-services.html\nHair Services"]
    LASER["⚡ laser-services.html\nLaser Services"]
    ANTI["✨ anti-aging.html\nAnti-Aging"]
    ABOUT["👩‍⚕️ about-dr-shalini.html\nAbout Dr. Shalini"]
    BOOK["📅 book-appointment.html\nBook Appointment"]

    HOME -->|"Service card CTA"| SKIN
    HOME -->|"Service card CTA"| HAIR
    HOME -->|"Service card CTA"| LASER
    HOME -->|"Service card CTA"| ANTI
    HOME -->|"Navbar / Hero CTA"| BOOK
    HOME -->|"Doctor section CTA"| ABOUT

    SKIN -->|"Book Now CTA"| BOOK
    HAIR -->|"Book Now CTA"| BOOK
    LASER -->|"Book Now CTA"| BOOK
    ANTI -->|"Book Now CTA"| BOOK
    ABOUT -->|"Book Consultation CTA"| BOOK

    SKIN -->|"Navbar"| HOME
    HAIR -->|"Navbar"| HOME
    LASER -->|"Navbar"| HOME
    ANTI -->|"Navbar"| HOME
    ABOUT -->|"Navbar"| HOME
    BOOK -->|"Navbar"| HOME

    subgraph SHARED["Shared Assets (all pages)"]
        direction LR
        CSS1["style.css"]
        CSS2["premium.css"]
        JS1["premium.js"]
        FONTS["Google Fonts CDN\nPlayfair Display · DM Sans"]
    end

    subgraph FOOTER["Footer links (all pages → all pages)"]
        FL["Quick Links · Services · Contact"]
    end
```

---

## 3. Page → Section Map

```mermaid
flowchart TD
    subgraph INDEX["index.html — Homepage"]
        direction TB
        I1["📢 Announcement Bar\n(Location · Hours · Phone — dismissible)"]
        I2["🧭 Navbar\n(Logo · Links · Phone btn · CTA · Hamburger)"]
        I3["🎠 Hero Carousel\n(5 slides — Dr. Shalini, Skin, Hair, Laser, Anti-Aging)"]
        I4["⭐ Ratings Bar\n(Google · Practo · Justdial — 1300+ reviews)"]
        I5["🏅 Certification Badge Strip\n(USFDA · IADVL · ISDS · MD · Trichology · 17yr)"]
        I6["🗂 Service Categories Grid\n(4 cards: Skin · Hair · Laser · Anti-Aging)"]
        I7["👩‍⚕️ Doctor Section\n(Photo · Bio · Credentials)"]
        I8["✅ Why Amber Clinic\n(6 reason cards)"]
        I9["❓ FAQ Accordion\n(8 questions)"]
        I10["📅 CTA Section\n(Book Appointment)"]
        I11["🦶 Footer"]
        I12["📱 Mobile Sticky CTA Bar"]
        I1-->I2-->I3-->I4-->I5-->I6-->I7-->I8-->I9-->I10-->I11
    end

    subgraph SKIN["skin-services.html"]
        direction TB
        S1["🧭 Navbar"]
        S2["🖼 Full-Bleed Hero\n(skin image + overlay text)"]
        S3["🔗 Breadcrumb\n(Home > Skin Services)"]
        S4["💊 Treatment Cards × 12\n(Acne · Pigmentation · Rejuvenation · Lightening\nTag/Mole/Wart · Keloid · Hyperhidrosis · Vitiligo\nDark Circles · Stretch Marks · Biopsy · Clinical)"]
        S5["📸 Before & After Gallery\n(8 result images + slider)"]
        S6["💬 Patient Reviews\n(auto-scroll carousel)"]
        S7["❓ FAQ Section"]
        S8["🦶 Footer"]
        S1-->S2-->S3-->S4-->S5-->S6-->S7-->S8
    end

    subgraph HAIR["hair-services.html"]
        direction TB
        H1["🧭 Navbar"]
        H2["🎠 Hero Carousel\n(2 slides)"]
        H3["🔗 Breadcrumb\n(Home > Hair Services)"]
        H4["💊 Treatment Cards × 7\n(PRP/GFC · Alopecia Areata · Androgenetic\nDandruff · Grey Hair · Transplant Consult · All Clinical)"]
        H5["📸 Before & After Gallery\n(8 hair result images)"]
        H6["💬 Patient Reviews\n(auto-scroll carousel)"]
        H7["❓ FAQ Section\n(4 questions)"]
        H8["📅 CTA Section"]
        H9["🦶 Footer"]
        H1-->H2-->H3-->H4-->H5-->H6-->H7-->H8-->H9
    end

    subgraph LASER["laser-services.html"]
        direction TB
        L1["🧭 Navbar"]
        L2["🖼 Full-Bleed Hero"]
        L3["🔗 Breadcrumb\n(Home > Laser Services)"]
        L4["💊 Treatment Cards × 10\n(Hair Removal · HIFU · Carbon Peel · Fractional CO2\nTattoo Removal · Toning · Beard Shaping\nSensitive Areas · Stretch Marks · Microneedling RF)"]
        L5["📸 Before & After Gallery\n(8 images: HIFU × 3, Laser Hair Removal × 5)"]
        L6["💬 Patient Reviews"]
        L7["❓ FAQ Section"]
        L8["🦶 Footer"]
        L1-->L2-->L3-->L4-->L5-->L6-->L7-->L8
    end

    subgraph ANTI["anti-aging.html"]
        direction TB
        A1["🧭 Navbar"]
        A2["🖼 Full-Bleed Hero"]
        A3["🔗 Breadcrumb\n(Home > Anti-Aging)"]
        A4["💊 Treatment Cards × 9\n(Botox · Dermal Fillers · HydraFacial · Chemical Peel\nLip Augmentation · Jawline Contouring\nNon-Surgical Nose Job · Under-Eye Fillers\nMicroneedling with GFC)"]
        A5["📸 Before & After Gallery\n(before-01..03, after-01..05)"]
        A6["💬 Patient Reviews"]
        A7["❓ FAQ Section"]
        A8["🦶 Footer"]
        A1-->A2-->A3-->A4-->A5-->A6-->A7-->A8
    end

    subgraph ABOUT["about-dr-shalini.html"]
        direction TB
        AB1["🧭 Navbar"]
        AB2["🖼 About Hero\n(2-col: text + organic-frame photo)"]
        AB3["🏅 Credentials Strip\n(17yr · 700+ reviews · USFDA · MD)"]
        AB4["💡 Philosophy Section\n(Root-cause care + 4 principle cards)"]
        AB5["🎓 Specializations Grid × 6\n(Dermatology · Trichology · Laser · Anti-Aging\nCosmetic Procedures · Cosmetic Gynaecology)"]
        AB6["💬 Patient Reviews × 4"]
        AB7["📅 CTA Section"]
        AB8["🦶 Footer"]
        AB1-->AB2-->AB3-->AB4-->AB5-->AB6-->AB7-->AB8
    end

    subgraph BOOK["book-appointment.html"]
        direction TB
        BK1["🧭 Navbar"]
        BK2["🖼 Booking Hero\n(Title + subtitle)"]
        BK3["📋 2-Column Layout"]
        BK3a["📝 Appointment Form\n(Name · Phone · Treatment · Message\nWhatsApp / Email buttons)"]
        BK3b["📍 Contact Sidebar\n(Address · Phone · Email · Hours)"]
        BK4["🗺 Google Maps Embed"]
        BK5["❓ Have Questions? CTA"]
        BK6["🦶 Footer"]
        BK1-->BK2-->BK3
        BK3-->BK3a
        BK3-->BK3b
        BK3-->BK4-->BK5-->BK6
    end
```

---

## 4. CSS / JS Dependency Map

```mermaid
graph LR
    subgraph PAGES["HTML Pages"]
        P0["index.html"]
        P1["skin-services.html"]
        P2["hair-services.html"]
        P3["laser-services.html"]
        P4["anti-aging.html"]
        P5["about-dr-shalini.html"]
        P6["book-appointment.html"]
    end

    subgraph ASSETS["Local Assets"]
        CSS1["style.css\n(Design system)"]
        CSS2["premium.css\n(Enhancements)"]
        JS1["premium.js\n(Interactions)"]
        ISC["Inline &lt;script&gt;\n(index.html only)\ncarousel · FAQ · navbar-scroll"]
    end

    subgraph CDN["External CDN"]
        GF["Google Fonts CDN\nPlayfair Display + DM Sans"]
        MAPS["Google Maps iframe\n(book-appointment.html only)"]
    end

    P0 --> CSS1 & CSS2 & JS1 & GF & ISC
    P1 --> CSS1 & CSS2 & JS1 & GF
    P2 --> CSS1 & CSS2 & JS1 & GF
    P3 --> CSS1 & CSS2 & JS1 & GF
    P4 --> CSS1 & CSS2 & JS1 & GF
    P5 --> CSS1 & CSS2 & JS1 & GF
    P6 --> CSS1 & CSS2 & JS1 & GF & MAPS
```

### CSS File Responsibilities

| File | Responsibility | Key Sections |
|------|---------------|--------------|
| `style.css` | Full design system | CSS variables, reset, typography, navbar, hero, ratings, stat bars, service cards, doctor section, why-amber, treatment cards, FAQ accordion, reviews carousel, gallery, footer, buttons |
| `premium.css` | Micro-interactions & a11y | Skip link, WCAG contrast fixes, button shimmer, card hover glows, stagger fade-up animations, scroll-to-top button, lightbox modal, before/after slider, mobile tweaks |

### JS File Responsibilities

| File | Responsibility | Key Functions |
|------|---------------|---------------|
| `premium.js` | All enhanced interactions | Announcement bar dismiss, animated stat counters, scroll-to-top toggle, mobile CTA bar, stagger observer, FAQ ARIA IDs, infinite review scroll, lightbox, before/after slider, WhatsApp SVG sprite |
| Inline `<script>` in `index.html` | Core homepage interactions | Navbar scroll class, hamburger menu, hero carousel auto-rotate, FAQ accordion, fade-up IntersectionObserver |

---

## 5. Image Inventory

### 5a. images/ — Logo & Patient Avatars

| Filename | Format | Used In | Purpose |
|----------|--------|---------|---------|
| `clinic-logo.webp` | WebP | All pages (navbar + footer) | Primary logo |
| `clinic-logo.png` | PNG | All pages (fallback `<picture>`) | Logo PNG fallback |
| `Shalini Image.webp` | WebP | index.html, about-dr-shalini.html | Dr. Shalini profile photo |
| `patients/afreen-shah.png` | PNG | Reviews sections | Patient testimonial avatar |
| `patients/arjun-naik.jpg` | JPEG | Reviews sections | Patient testimonial avatar |
| `patients/elise-dsilva.png` | PNG | Reviews sections | Patient testimonial avatar |
| `patients/esha-suyavanshi.jpg` | JPEG | Reviews sections | Patient testimonial avatar |
| `patients/manorama-dixit.jpg` | JPEG | Reviews sections | Patient testimonial avatar |
| `patients/meenal-singh-ambala.jpg` | JPEG | Reviews sections | Patient testimonial avatar |
| `patients/shabnam-ansari.jpg` | JPEG | Reviews sections | Patient testimonial avatar |

### 5b. gallery/ — Anti-Aging Treatment Results

| Filename | Format | Used In | Purpose |
|----------|--------|---------|---------|
| `gallery/anti-aging/gallery-01.webp` | WebP | anti-aging.html | Gallery lightbox image 1 |
| `gallery/anti-aging/gallery-02.webp` | WebP | anti-aging.html | Gallery lightbox image 2 |
| `gallery/anti-aging/gallery-03.webp` | WebP | anti-aging.html | Gallery lightbox image 3 |
| `gallery/anti-aging/gallery-04.webp` | WebP | anti-aging.html | Gallery lightbox image 4 |
| `gallery/anti-aging/gallery-05.webp` | WebP | anti-aging.html | Gallery lightbox image 5 |
| `gallery/anti-aging/gallery-06.webp` | WebP | anti-aging.html | Gallery lightbox image 6 |
| `gallery/anti-aging/gallery-07.webp` | WebP | anti-aging.html | Gallery lightbox image 7 |
| `gallery/anti-aging/gallery-08.webp` | WebP | anti-aging.html | Gallery lightbox image 8 |

### 5c. Hero Section/ — Page Heroes (Desktop + Mobile pairs)

| Filename | Format | Used In | Purpose |
|----------|--------|---------|---------|
| `Hero Section/Hero.webp` | WebP | index.html hero carousel slide 1 | Homepage main hero (desktop) |
| `Hero Section/Hero-M.webp` | WebP | index.html hero carousel slide 1 | Homepage main hero (mobile) |
| `Hero Section/Image6.webp` | WebP | index.html | General hero variant (desktop) |
| `Hero Section/Image6-M.webp` | WebP | index.html | General hero variant (mobile) |

### 5d. Hero Section/skin/ — Skin Page Images

| Filename | Format | Used In | Purpose |
|----------|--------|---------|---------|
| `skin/Hero.webp` | WebP | skin-services.html | Skin page hero (desktop) |
| `skin/Hero-M.webp` | WebP | skin-services.html | Skin page hero (mobile) |
| `skin/Hero-Homepage.webp` | WebP | index.html service card | Skin category card (desktop) |
| `skin/Hero-Homepage-M.webp` | WebP | index.html service card | Skin category card (mobile) |
| `skin/Acne & Acne Scar Treatment.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Anti-Aging-Skin-Tightening.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Dark Circles & Eye Rejuvenation .webp` | WebP | skin-services.html | Treatment card image ⚠️ trailing space in filename |
| `skin/Excessive Sweating (Hyperhidrosis).webp` | WebP | skin-services.html | Treatment card image |
| `skin/Keloid & Hypertrophic Scar Treatment.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Pigmentation Treatment.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Skin Biopsy & Clinical Skin Treatments.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Skin Lightening Treatment.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Skin Rejuvenation Treatment.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Skin-Tag-Mole-Wart-Removal.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Stretch-Marks-Reduction.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Vitiligo-Treatment.webp` | WebP | skin-services.html | Treatment card image |
| `skin/Before After/keloid-scar-01.webp` | WebP | skin-services.html | Before/After slider |
| `skin/Before After/keloid-scar-02.webp` | WebP | skin-services.html | Before/After slider |
| `skin/Before After/skin-lightening-01.webp` | WebP | skin-services.html | Before/After slider |
| `skin/Before After/skin-lightening-02.webp` | WebP | skin-services.html | Before/After slider |
| `skin/Before After/skin-rejuvenation-01.webp` | WebP | skin-services.html | Before/After slider |
| `skin/Before After/skin-rejuvenation-02.webp` | WebP | skin-services.html | Before/After slider |
| `skin/Before After/skin-tag-removal-01.webp` | WebP | skin-services.html | Before/After slider |
| `skin/Before After/skin-tag-removal-02.webp` | WebP | skin-services.html | Before/After slider |

### 5e. Hero Section/Hair/ — Hair Page Images

| Filename | Format | Used In | Purpose |
|----------|--------|---------|---------|
| `Hair/Hero.webp` | WebP | hair-services.html | Hair page hero (desktop) |
| `Hair/Hero-M.webp` | WebP | hair-services.html | Hair page hero (mobile) |
| `Hair/Hero-Homepage.webp` | WebP | index.html service card | Hair category card (desktop) |
| `Hair/Hero-Homepage-M.webp` | WebP | index.html service card | Hair category card (mobile) |
| `Hair/Image1.webp` | WebP | hair-services.html hero carousel | Slide 2 (desktop) |
| `Hair/Image1-M.webp` | WebP | hair-services.html hero carousel | Slide 2 (mobile) |
| `Hair/PRP & Growth Factor Concentrate (GFC).webp` | WebP | hair-services.html | Treatment card image |
| `Hair/Alopecia Areata Management.webp` | WebP | hair-services.html | Treatment card image |
| `Hair/Androgenetic Alopecia Treatment.webp` | WebP | hair-services.html | Treatment card image |
| `Hair/Dandruff & Scalp Psoriasis Treatment.webp` | WebP | hair-services.html | Treatment card image |
| `Hair/Grey Hair Prevention & Treatment.webp` | WebP | hair-services.html | Treatment card image |
| `Hair/Hair Transplant Consultation & Non-Surgical Restoration.webp` | WebP | hair-services.html | Treatment card image |
| `Hair/All Clinical Hair Concerns.webp` | WebP | hair-services.html | Treatment card image |
| `Hair/Before After/hair-result-01.webp` | WebP | hair-services.html | Before/After gallery |
| `Hair/Before After/hair-result-02.webp` | WebP | hair-services.html | Before/After gallery |
| `Hair/Before After/hair-result-03.webp` | WebP | hair-services.html | Before/After gallery |
| `Hair/Before After/hair-result-04.webp` | WebP | hair-services.html | Before/After gallery |
| `Hair/Before After/hair-result-05.webp` | WebP | hair-services.html | Before/After gallery |
| `Hair/Before After/hair-result-06.webp` | WebP | hair-services.html | Before/After gallery |
| `Hair/Before After/hair-result-07.webp` | WebP | hair-services.html | Before/After gallery |
| `Hair/Before After/hair-result-08.webp` | WebP | hair-services.html | Before/After gallery |

### 5f. Hero Section/Laser/ — Laser Page Images

| Filename | Format | Used In | Purpose |
|----------|--------|---------|---------|
| `Laser/Hero.webp` | WebP | laser-services.html | Laser page hero (desktop) |
| `Laser/Hero-M.webp` | WebP | laser-services.html | Laser page hero (mobile) |
| `Laser/Hero-Homepage.webp` | WebP | index.html service card | Laser category card (desktop) |
| `Laser/Hero-Homepage-M.webp` | WebP | index.html service card | Laser category card (mobile) |
| `Laser/Laser for Hair Reduction/Beard Shaping.webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Hair Reduction/Laser Hair Removal for Sensitive Areas.webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Hair Reduction/Triple Wavelength Diode Laser.webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Skin Rejuvenation & Anti-Aging/Carbon Laser Peel (Hollywood Peel).webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Skin Rejuvenation & Anti-Aging/Fractional CO2 Laser.webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Skin Rejuvenation & Anti-Aging/HIFU (High-Intensity Focused Ultrasound).webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Skin Rejuvenation & Anti-Aging/Laser Tatto Removal - Q-Switched Nd-YAG Laser.webp` | WebP | laser-services.html | Treatment card image ⚠️ typo: "Tatto" |
| `Laser/Laser for Skin Rejuvenation & Anti-Aging/Laser Toning (Q-Switched Nd-YAG).webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Skin Rejuvenation & Anti-Aging/Microneedling RF.webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Laser for Skin Rejuvenation & Anti-Aging/Stretch Mark Reduction.webp` | WebP | laser-services.html | Treatment card image |
| `Laser/Before After/hifu-01.webp` | WebP | laser-services.html | Before/After slider |
| `Laser/Before After/hifu-02.webp` | WebP | laser-services.html | Before/After slider |
| `Laser/Before After/hifu-03.webp` | WebP | laser-services.html | Before/After slider |
| `Laser/Before After/laser-hair-removal-01.webp` | WebP | laser-services.html | Before/After slider |
| `Laser/Before After/laser-hair-removal-02.webp` | WebP | laser-services.html | Before/After slider |
| `Laser/Before After/laser-hair-removal-03.webp` | WebP | laser-services.html | Before/After slider |
| `Laser/Before After/laser-hair-removal-04.webp` | WebP | laser-services.html | Before/After slider |
| `Laser/Before After/laser-hair-removal-05.webp` | WebP | laser-services.html | Before/After slider |

### 5g. Hero Section/Anti Aging/ — Anti-Aging Page Images

| Filename | Format | Used In | Purpose |
|----------|--------|---------|---------|
| `Anti Aging/Hero.webp` | WebP | anti-aging.html | Anti-aging page hero (desktop) |
| `Anti Aging/Hero-M.webp` | WebP | anti-aging.html | Anti-aging page hero (mobile) |
| `Anti Aging/Hero-Homepage.webp` | WebP | index.html service card | Anti-aging category card (desktop) |
| `Anti Aging/Hero-Homepage-M.webp` | WebP | index.html service card | Anti-aging category card (mobile) |
| `Anti Aging/I-hero.webp` | WebP | anti-aging.html | Alternate standalone hero |
| `Anti Aging/Botox for Wrinkles & Fine Lines.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Chemical Peel.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Dermal Fillers for Volume Restoration & Enhancement.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Hydrafacial.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Jawline & Chin Contouring.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Lip Augmentation & Hydration.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Microneedling with GFC.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Non-Surgical-Nose-Job.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Under-Eye Fillers.webp` | WebP | anti-aging.html | Treatment card image |
| `Anti Aging/Before After/before-01.webp` | WebP | anti-aging.html | Before/After slider |
| `Anti Aging/Before After/before-02.webp` | WebP | anti-aging.html | Before/After slider |
| `Anti Aging/Before After/before-03.webp` | WebP | anti-aging.html | Before/After slider |
| `Anti Aging/Before After/after-01.webp` | WebP | anti-aging.html | Before/After slider |
| `Anti Aging/Before After/after-02.webp` | WebP | anti-aging.html | Before/After slider |
| `Anti Aging/Before After/after-03.webp` | WebP | anti-aging.html | Before/After slider |
| `Anti Aging/Before After/after-04.webp` | WebP | anti-aging.html | Before/After slider |
| `Anti Aging/Before After/after-05.webp` | WebP | anti-aging.html | Before/After slider |

### Image Counts Summary

| Category | Treatment Images | Before/After | Hero Variants | Total |
|----------|-----------------|--------------|---------------|-------|
| Skin | 12 | 8 | 4 | 24 |
| Hair | 7 | 8 | 6 | 21 |
| Laser | 10 | 8 | 4 | 22 |
| Anti-Aging | 9 | 8 | 5 | 22 |
| Gallery (Anti-Aging) | — | — | 8 | 8 |
| Root Hero | — | — | 4 | 4 |
| Logo & Patients | 2 (logo) | — | 7 (patients) | 9 |
| **Total** | **40** | **32** | **38** | **110** |

---

## 6. JS Component Interaction Map

```mermaid
stateDiagram-v2
    [*] --> PageLoaded

    PageLoaded --> HeroCarousel : index.html only
    HeroCarousel --> AutoRotate : every 5500ms
    AutoRotate --> SlideChange : next slide
    SlideChange --> AutoRotate
    HeroCarousel --> PauseOnHover : mouseenter
    PauseOnHover --> AutoRotate : mouseleave
    HeroCarousel --> ManualNav : prev/next arrow or dot click
    ManualNav --> SlideChange

    PageLoaded --> FAQAccordion : all pages
    FAQAccordion --> Expanded : click item
    Expanded --> Collapsed : click same item
    Collapsed --> Expanded : click item

    PageLoaded --> LightboxGallery : service pages
    LightboxGallery --> ModalOpen : click gallery image
    ModalOpen --> NextImage : ArrowRight / next button
    ModalOpen --> PrevImage : ArrowLeft / prev button
    ModalOpen --> ModalClosed : Escape key / backdrop click

    PageLoaded --> BeforeAfterSlider : service pages
    BeforeAfterSlider --> DragActive : mousedown / touchstart
    DragActive --> ClipPathUpdate : mousemove / touchmove
    ClipPathUpdate --> DragActive
    DragActive --> DragIdle : mouseup / touchend

    PageLoaded --> ReviewCarousel : all pages
    ReviewCarousel --> AutoScroll : continuous translate
    AutoScroll --> Paused : touchstart / page hidden
    Paused --> AutoScroll : touchend / page visible

    PageLoaded --> StatCounters : IntersectionObserver
    StatCounters --> Animating : element enters viewport
    Animating --> Done : count reaches target

    PageLoaded --> ScrollToTop : scroll event
    ScrollToTop --> Visible : scrollY > 400px
    Visible --> Hidden : scrollY <= 400px
    Visible --> [*] : click → smooth scroll top

    PageLoaded --> AnnouncementBar : check localStorage
    AnnouncementBar --> Dismissed : click ✕ button
    Dismissed --> [*] : saved to localStorage
```

---

## 7. Color & Typography Reference

### CSS Color Tokens (`style.css` `:root`)

| Token | Value | Usage |
|-------|-------|-------|
| `--amber` | `#C8986A` | Primary brand color, buttons, accents |
| `--amber-deep` | `#A0754A` | Hover states, dark accents |
| `--amber-light` | `#F5EAD9` | Backgrounds, card tints |
| `--amber-glow` | `rgba(200,152,106,0.15)` | Hover glows, shadows |
| `--cream` | `#FAF8F5` | Page background |
| `--cream-dark` | `#F2EDE6` | Section alternates, cards |
| `--charcoal` | `#1C1917` | Primary text |
| `--muted` | `#6B6560` | Secondary text, captions |
| `--whatsapp` | `#25D366` | WhatsApp button |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Card subtle shadow |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.10)` | Card hover shadow |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` | Modal / lightbox shadow |

### Typography Stack

| Role | Font | Weights | Used For |
|------|------|---------|----------|
| **Heading** | Playfair Display (serif) | 400, 600, 700 | All headings (h1–h4), hero titles, section headings |
| **Body** | DM Sans (sans-serif) | 300, 400, 500, 600 | Body text, nav links, buttons, captions, labels |

### Responsive Breakpoints

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| Mobile | `max-width: 480px` | Single-column layouts, hero text scaling |
| Tablet | `max-width: 768px` | Hamburger menu, 2-col grids, announcement bar simplification |
| Desktop small | `max-width: 1024px` | Adjusted grid columns |
| Desktop | `min-width: 1025px` | Full multi-column layouts |

### Button Variants

| Class | Color | Usage |
|-------|-------|-------|
| `.btn-primary` | Amber fill + white text | Main CTAs |
| `.btn-secondary` | Transparent + amber border + amber text | Secondary actions |
| `.btn-whatsapp` | WhatsApp green | WhatsApp contact |
| `.btn-email` | Dark charcoal | Email contact |
| `.btn-sm` | Smaller padding | Inline / compact contexts |
| `.btn-lg` | Larger padding | Hero section CTAs |

---

## Known Issues / Review Notes

| # | File | Issue | Severity |
|---|------|-------|----------|
| 1 | `Hero Section/skin/Dark Circles & Eye Rejuvenation .webp` | Trailing space in filename — may cause broken `<img src>` on some servers | Medium |
| 2 | `Hero Section/Laser/.../Laser Tatto Removal - Q-Switched Nd-YAG Laser.webp` | Typo: "Tatto" should be "Tattoo" — affects SEO-friendliness of filename | Low |
| 3 | `gallery/` | Only `anti-aging/` subfolder exists — skin, hair, laser have no dedicated gallery folder | Medium |
| 4 | `images/patients/` | Mix of `.png`, `.jpg` formats — consider converting all to `.webp` for consistency | Low |

---

*Generated 2026-04-21 — Re-run this document review after adding new treatment pages or image assets.*
