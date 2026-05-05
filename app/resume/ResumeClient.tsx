'use client'
import Link from 'next/link'

const skills = {
  Frontend: 'React · Next.js · TypeScript · Tailwind CSS · Framer Motion · HTML/CSS',
  'Backend & AI': 'FastAPI · Python · OpenCV · NumPy · Docker · REST APIs',
  'E-commerce & SaaS': 'MongoDB · Mongoose · JWT · Cloudinary · Supabase · Clerk · Vercel',
  Tools: 'Git · GitHub · Figma · Vercel · Railway · VS Code',
}

const projects = [
  {
    title: 'Zipa Image Forge',
    type: 'Next.js · FastAPI · AI Pipeline',
    tech: 'Next.js · FastAPI · Python · BRIA RMBG 2.0 · GPT-image-1.5 · OpenCV · Supabase · Cloudinary · Clerk · Docker · Railway · Vercel',
    year: '2025',
    live: 'zipastudio.com',
    bullets: [
      "Built for Nepal's 30,000+ e-commerce vendors — the first AI product image tool for the local market.",
      'AI pipeline: product-type detection → BRIA RMBG 2.0 background removal → GPT-image-1.5 3D studio reconstruction → 2000×2000 export for Daraz, SastoDeal, and Instagram. Under 60 seconds per image.',
      'Eliminates NPR 500–2000 photography cost per batch. 98% success rate across 260+ beta images.',
    ],
  },
  {
    title: 'Mirrormandu',
    type: 'Next.js · MongoDB · Full-Stack E-commerce',
    tech: 'Next.js · TypeScript · MongoDB · Mongoose · Tailwind CSS · Cloudinary · JWT · REST API · Vercel',
    year: '2025',
    bullets: [
      "Full-stack e-commerce platform for a Nepali mirror brand — customers browse products, submit custom mirror inquiries, manage a wishlist, and check out with coupon support.",
      'Custom admin dashboard covering full business operations: products, categories, orders, reviews, banners, and coupons — with Cloudinary image uploads and JWT-secured authentication.',
      'Replaced entirely manual order tracking with a structured order management system; custom inquiry flow converts browsing visitors into direct leads.',
    ],
  },
]

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Zipa',
    period: '2024 – Present',
    bullets: [
      'Building and maintaining the frontend for Zipa Image Forge — an AI-powered product image processing tool serving Nepal\'s e-commerce vendors.',
      'Developed the full vendor-facing UI: upload flow, image pipeline status, and Daraz/Instagram export — achieving under 60-second end-to-end processing.',
      'Integrated Clerk authentication, Supabase storage, and Cloudinary delivery into a cohesive Next.js + FastAPI product.',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Currently Pursuing',
    year: 'In Progress',
  },
]

export default function ResumeClient() {
  return (
    <>
      {/* Toolbar — hidden on print */}
      <div className="print:hidden bg-ink py-4 px-6 flex items-center justify-between sticky top-0 z-10">
        <Link
          href="/"
          className="font-inter text-sm text-muted hover:text-cream transition-colors"
        >
          ← Back to Portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="font-inter text-sm bg-accent text-cream px-5 py-2.5 hover:bg-cream hover:text-ink transition-colors duration-200 tracking-wide"
        >
          Download PDF
        </button>
      </div>

      {/* Page wrapper */}
      <div className="min-h-screen bg-[#EBEBEB] py-10 px-4 print:bg-white print:py-0 print:px-0">
        {/* Resume paper */}
        <div className="max-w-[760px] mx-auto bg-white shadow-lg print:shadow-none print:max-w-none">
          <div className="px-12 py-10 print:px-[0.75in] print:py-[0.6in]">

            {/* ── Header ── */}
            <header className="mb-7">
              <h1 className="font-playfair text-4xl font-bold text-ink tracking-tight">
                Milan Gopali
              </h1>
              <p className="font-inter text-base text-muted mt-1 mb-4">
                Frontend Developer
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {[
                  { label: 'milangopali98@gmail.com', href: 'mailto:milangopali98@gmail.com' },
                  { label: 'github.com/MANGOpali', href: 'https://github.com/MANGOpali' },
                  { label: 'milangopali.com.np', href: 'https://milangopali.com.np' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-xs text-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </header>

            <hr className="border-border mb-7" />

            {/* ── Profile ── */}
            <section className="mb-7">
              <SectionLabel>Profile</SectionLabel>
              <p className="font-inter text-sm text-ink leading-relaxed">
                Frontend developer focused on React and e-commerce. I build fast, high-converting
                interfaces — from product pages to checkout — and care about the details most
                developers skip: load times, micro-interactions, and whether the UI actually
                drives action. Open to freelance projects and full-time frontend roles.
              </p>
            </section>

            <hr className="border-border mb-7" />

            {/* ── Skills ── */}
            <section className="mb-7">
              <SectionLabel>Skills</SectionLabel>
              <div className="space-y-1.5">
                {Object.entries(skills).map(([category, list]) => (
                  <div key={category} className="grid grid-cols-[110px_1fr] gap-3">
                    <span className="font-inter text-xs font-semibold text-ink pt-[1px]">
                      {category}
                    </span>
                    <span className="font-inter text-xs text-muted leading-relaxed">{list}</span>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-border mb-7" />

            {/* ── Projects ── */}
            <section className="mb-7">
              <SectionLabel>Projects</SectionLabel>
              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.title}>
                    <div className="flex items-baseline justify-between mb-0.5">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="font-inter text-sm font-semibold text-ink">
                          {project.title}
                        </h3>
                        <span className="font-inter text-xs text-muted">· {project.type}</span>
                        {'live' in project && (
                          <a
                            href={`https://${(project as typeof project & { live: string }).live}`}
                            className="font-inter text-xs text-accent"
                          >
                            {(project as typeof project & { live: string }).live}
                          </a>
                        )}
                      </div>
                      <span className="font-inter text-xs text-muted flex-shrink-0 ml-4">
                        {project.year}
                      </span>
                    </div>
                    <p className="font-inter text-xs text-muted mb-2 leading-relaxed">{project.tech}</p>
                    <ul className="space-y-1">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="font-inter text-xs text-ink leading-relaxed flex gap-2">
                          <span className="text-accent flex-shrink-0 mt-[1px]">–</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-border mb-7" />

            {/* ── Experience ── */}
            <section className="mb-7">
              <SectionLabel>Experience</SectionLabel>
              <div className="space-y-5">
                {experience.map((job) => (
                  <div key={job.role}>
                    <div className="flex items-baseline justify-between mb-0.5">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-inter text-sm font-semibold text-ink">{job.role}</h3>
                        <span className="font-inter text-xs text-muted">· {job.company}</span>
                      </div>
                      <span className="font-inter text-xs text-muted flex-shrink-0 ml-4">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-1 mt-2">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="font-inter text-xs text-ink leading-relaxed flex gap-2">
                          <span className="text-accent flex-shrink-0 mt-[1px]">–</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-border mb-7" />

            {/* ── Education ── */}
            <section>
              <SectionLabel>Education</SectionLabel>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-inter text-sm font-semibold text-ink">{edu.degree}</span>
                      <span className="font-inter text-xs text-muted">· {edu.institution}</span>
                    </div>
                    <span className="font-inter text-xs text-muted flex-shrink-0 ml-4">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Screen-only hint */}
        <p className="print:hidden font-inter text-xs text-center text-muted mt-6">
          Click "Download PDF" → Save as PDF in the print dialog
        </p>
      </div>
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-inter text-[10px] font-semibold tracking-[0.18em] text-accent uppercase mb-3">
      {children}
    </h2>
  )
}
