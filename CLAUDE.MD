# CLAUDE.md — Dental Office Website

## Project Overview

A modern, professional website for a local dental office. This is a **real business site** — not a portfolio piece, not a startup landing page. Design and content decisions should reflect that: warm, trustworthy, approachable, and refined. You are an expert web developer, UI/UX expert, and project manager.

## Design Direction

**Aesthetic**: Editorial warmth. Think high-quality lifestyle magazine meets a trusted local healthcare practice. Clean but not sterile. Elegant but not cold. Human.

**Anti-patterns — strictly avoid**:

- Giant hero text + single CTA button + scroll-to-reveal sections
- Glassmorphism, frosted panels, neon accents
- Purple gradients, dark techy backgrounds
- "Backed by" / "Trusted by" logo strips
- Animated particle backgrounds
- Oversized feature cards with icons and one-liners
- Any layout pattern that looks like a SaaS product homepage

**The right feel**: A patient visiting this site should feel they've found a clinic that is professional, nearby, and genuinely caring — not that they've landed on an app.

---

## Tech Stack

- **Framework**: React + TypeScript
- **Styling**: Raw CSS with CSS custom properties (no Tailwind, no CSS-in-JS, no styled-components)
- **Routing**: React Router v6
- **Build tool**: Vite
- **No UI component libraries** — build all components from scratch

---

## Design System

### Typography

```css
/* Import in index.html */
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap");
```

- **Display / headings**: `Cormorant Garamond` — elegant, serif, evokes trust and quality
- **Body / UI**: `DM Sans` — clean, warm, readable at small sizes

### CSS Variables

Define all in `src/styles/variables.css` and import globally:

```css
:root {
  /* Colors */
  --color-bg: #f9f7f4; /* warm off-white page background */
  --color-surface: #ffffff; /* cards, panels */
  --color-surface-alt: #f2efe9; /* subtle section alternation */
  --color-primary: #2c5f5d; /* deep teal — calm, clinical, trustworthy */
  --color-primary-hover: #224a48;
  --color-primary-light: #e8f0ef;
  --color-accent: #c5a880; /* warm gold — welcoming, premium */
  --color-accent-hover: #b09060;
  --color-text: #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-text-light: #999999;
  --color-border: #e5e0d8;
  --color-border-strong: #ccc8c0;

  /* Typography */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", -apple-system, sans-serif;

  /* Type scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.75rem;
  --text-5xl: 3.75rem;

  /* Spacing (8px base unit) */
  --space-1: 0.25rem; /*  4px */
  --space-2: 0.5rem; /*  8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-24: 6rem; /* 96px */

  /* Layout */
  --max-width: 1200px;
  --max-width-text: 680px; /* for prose-heavy sections */
  --content-padding: clamp(1rem, 4vw, 2rem);

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 20px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 4px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 2px 16px rgba(0, 0, 0, 0.06);
  --shadow-lift: 0 6px 28px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

### Layout Conventions

- **Wrapper**: `max-width: var(--max-width); margin: 0 auto; padding: 0 var(--content-padding);`
- **Section padding**: `padding: var(--space-24) 0;` (top and bottom)
- **Alternating sections**: swap between `--color-bg` and `--color-surface-alt` backgrounds
- **Grid**: CSS Grid for multi-column layouts, Flexbox for nav/inline alignment
- **No negative margins**, no fixed pixel widths on content — everything is fluid within max-width

---

## File & Folder Structure

```
dental-website/
├── CLAUDE.md
├── content/
│   ├── home/
│   │   ├── home.md
│   │   └── [images]
│   ├── about/
│   │   ├── about.md
│   │   └── [images]
│   ├── services/
│   │   ├── services-overview.md
│   │   ├── [service-name].md       ← one per service
│   │   └── [images]
│   ├── team/
│   │   ├── team.md
│   │   └── [images]                ← one per team member + group shot
│   ├── contact/
│   │   ├── contact.md
│   │   └── [images]
│   └── shared/
│       └── [logo, icons, etc.]
├── public/
│   └── favicon.ico
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   └── Layout.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── SectionHeader.tsx
    │       ├── ServiceCard.tsx
    │       ├── TeamMemberCard.tsx
    │       └── BookingBanner.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── About.tsx
    │   ├── Services.tsx
    │   ├── service/
    │   │   └── ServiceDetail.tsx
    │   ├── Team.tsx
    │   ├── Contact.tsx
    │   └── NotFound.tsx
    ├── styles/
    │   ├── variables.css
    │   ├── global.css
    │   └── components/
    ├── data/
    │   ├── services.ts
    │   ├── team.ts
    │   └── testimonials.ts
    ├── App.tsx
    └── main.tsx

```

## Content folder: Each subfolder under content/ contains a .md file and whatever images exist alongside it. Do not assume specific image filenames — always read the actual directory contents before referencing any image. If an image is present, use it; if not, render a placeholder <div>.

# YOU DO NOT NEED TO USE THE BANNER IMAGES IF YOU THINK IT DOESN'T FIT.

## Pages & What Goes on Each

### `/` — Home

- **Not** a hero with big text and scroll. Instead: a welcoming, editorial opening with the clinic name, a single warm sentence about the practice, and a clear "Book an appointment" call-to-action — but tasteful, not pushy.
- Brief intro to who they are
- Featured services (3–4) — cards, not icons with bullet lists
- "Why us" section — short, human, no checkmark lists
- Patient testimonials
- Map / address preview + contact nudge
- All content from `content/home.md`

### `/about` — About Us

- Practice history and philosophy
- Mission statement
- Office photos section (if images available)
- Values — written as prose, not bullet points
- All content from `content/about.md`

### `/services` — Services Overview

- Grid of all services with brief description
- Each card links to its detail page
- All content from `content/services.md` + individual `content/services/*.md`

### `/services/:slug` — Service Detail

- Full description of the service
- What to expect, who it's for
- FAQ if applicable
- CTA to book
- Content from `content/services/[slug].md`

### `/team` — Our Team

- Each team member: photo, name, title, short bio
- Warm and personal tone — not a LinkedIn-style card
- Content from `content/team.md`

### `/contact` — Contact & Booking

- Address, phone, hours
- Embedded Google Map
- Contact form (name, email, phone, message, preferred time)
- Content from `content/contact.md`

---

## Content Rules

- **All original content from the old website must be preserved** — use `content/*.md` as the source of truth
- Claude may **add** content where it improves the page (e.g. a brief introductory sentence, an FAQ question, a transition phrase) — use good judgment
- Claude may **not remove** original content without a clear reason noted in a comment
- Tone: warm, professional, clear. No jargon, no corporate-speak, no exclamation points
- Write as if a knowledgeable, caring dentist is speaking — not a marketing team

---

## Images

### Where Images Live

| Location             | Purpose                                                           |
| -------------------- | ----------------------------------------------------------------- |
| `public/images/`     | Open Graph image, any image referenced by URL (e.g. in meta tags) |
| `src/assets/images/` | All images used in components — import them as modules            |

### Image Manifest

All images are registered in `content/images.ts`:

```ts
export const images = {
  hero: {
    src: "/src/assets/images/hero.jpg",
    alt: "Bright dental office reception area",
  },
  teamGroup: {
    src: "/src/assets/images/team-group.jpg",
    alt: "The dental team at [Clinic Name]",
  },
  dr_lastname: {
    src: "/src/assets/images/dr-lastname.jpg",
    alt: "Dr. Lastname, General Dentist",
  },
  // ... add all images here
} as const;
```

Import from this manifest in components — never hardcode image paths directly.

### Placeholder Strategy

If real images are not yet available, use a consistent placeholder approach:

```tsx
// Use aspect-ratio boxes with the clinic's primary color as background
<div
  className="image-placeholder"
  style={{ aspectRatio: "4/3" }}
  aria-label="Photo coming soon"
/>
```

Define `.image-placeholder` in `global.css` with `background: var(--color-primary-light)`.

---

## Component Patterns

### Button

```tsx
// Variants: 'primary' | 'secondary' | 'ghost'
// Sizes: 'sm' | 'md' | 'lg'
<Button variant="primary" size="md">
  Book an appointment
</Button>
```

- Primary: `--color-primary` background, white text
- Secondary: transparent background, `--color-primary` border + text
- Ghost: no border, `--color-text-muted` text — for subtle actions

### SectionHeader

Used at the top of every major section:

```tsx
<SectionHeader
  label="Our services"        // small uppercase label above title (optional)
  title="Care for every smile"
  subtitle="We offer a full range of dental services..."  // optional
  align="left" | "center"
/>
```

- `label`: small, `--color-accent`, letter-spaced, uppercase, `DM Sans`
- `title`: `Cormorant Garamond`, large, `--color-text`
- `subtitle`: `DM Sans`, `--color-text-muted`

### Card

Clean surface card:

```tsx
<Card padding="md" shadow hover>
  {children}
</Card>
```

Hover state: lifts with `--shadow-lift` and very subtle `translateY(-2px)`.

---

## Navbar

- Fixed at top, transparent on scroll-top, white + shadow when scrolled
- Links: Home, About, Services, Our Team, Contact
- Right side: "Book Appointment" button (primary, small)
- Mobile: hamburger → slide-down or full-screen menu
- No mega-menus, no dropdowns (unless Services needs one for sub-pages)

## Footer

- 3–4 columns: clinic info + address, quick links, hours, contact
- Copyright line at bottom
- Same `--color-primary` or a very dark warm tone as background

---

## CSS Architecture

- One CSS file per component, co-located naming convention: `Navbar.css` lives in `src/styles/components/Navbar.css`
- Import component CSS inside the component file: `import '../styles/components/Navbar.css'`
- Use `variables.css` everywhere — never hardcode colors or spacing values
- Global resets and base styles in `global.css`
- BEM-lite class naming: `.navbar`, `.navbar__link`, `.navbar__link--active`
- No `!important`

---

## Accessibility

- All images need `alt` text (defined in `images.ts`)
- All interactive elements keyboard-navigable
- Sufficient color contrast (WCAG AA minimum)
- `<main>`, `<nav>`, `<footer>`, `<section>` landmarks used correctly
- Form inputs have associated `<label>` elements

---

## Do / Don't Quick Reference

| Do                                        | Don't                                     |
| ----------------------------------------- | ----------------------------------------- |
| Use `Cormorant Garamond` for headings     | Use system fonts or Inter/Roboto          |
| Write prose for values/philosophy         | Use bullet point lists for copy           |
| Alternate section backgrounds             | Use the same background for every section |
| Let content breathe with generous padding | Cram content to minimize scroll           |
| Add subtle hover transitions on cards     | Add flashy entrance animations            |
| Keep nav simple and clear                 | Add dropdowns unless strictly needed      |
| Preserve all original content             | Remove anything from the original site    |

---

## Claude Code Workflow Notes

- Always read `content/*.md` before writing a page component — the content is the source of truth
- When building a new page: (1) scaffold the component, (2) add layout/sections, (3) wire in content from the data files, (4) style
- Component CSS goes in `src/styles/components/` — create the CSS file alongside the component
- When uncertain about content, default to what was in the original site
- Prefer small, focused sub-agents per page or feature area rather than one giant build pass

## Sub-Agent Routing Rules

**Parallel dispatch** (all must be true):

- 3+ independent pages or components with no shared files
- No component depends on output from another in the same batch

**Sequential dispatch** (any one triggers it):

- A component is a dependency of pages being built
- Shared state or files are involved (e.g. data/\*.ts, variables.css)

**Use main session** (no sub-agent needed):

- Quick fixes, single file edits
- Questions or planning
- Anything under ~30 lines of change
