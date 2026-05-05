'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'Zipa Image Forge',
    category: 'E-commerce Tool · Next.js + FastAPI',
    problem:
      "Nepal's 30,000+ e-commerce vendors upload raw product photos — inconsistent backgrounds, wrong dimensions, poor lighting — directly to Daraz and Instagram. No affordable automated solution existed for the local market.",
    solution:
      'Full-stack AI pipeline that transforms raw vendor photos into catalog-ready images automatically. Vendors upload a photo, AI detects the product type, removes backgrounds with BRIA RMBG 2.0, reconstructs a photorealistic 3D studio presentation with GPT-image-1.5, and delivers 2000×2000 white-background images formatted for Daraz, SastoDeal, and Instagram — in under 60 seconds per image.',
    outcomes: [
      'Eliminates NPR 500–2000 photography cost per product batch.',
      'First AI product image processing tool built specifically for Nepal\'s fashion e-commerce market.',
      '98% success rate across 260+ processed images in beta.',
    ],
    tech: [
      'Next.js', 'FastAPI', 'Python', 'BRIA AI', 'GPT-image-1.5',
      'OpenCV', 'NumPy', 'Supabase', 'Cloudinary', 'Clerk',
      'Railway', 'Vercel', 'Tailwind CSS', 'Docker',
    ],
    links: { live: 'https://zipastudio.com', github: 'https://github.com/MANGOpali' },
  },
  {
    number: '02',
    title: 'Mirrormandu',
    category: 'E-commerce Tool · Next.js + MongoDB',
    problem:
      "Nepal's premium mirror market had no dedicated online storefront — customers couldn't browse, compare, or inquire about custom mirrors without calling directly. Vendors managed orders manually with no admin visibility.",
    solution:
      "Full-stack e-commerce platform built from scratch for a Nepali mirror brand. Customers browse a product catalog, submit custom mirror inquiries, manage a wishlist, and check out with coupon support. Admins manage products, categories, orders, reviews, banners, and coupons through a custom dashboard — with Cloudinary image uploads and JWT-secured authentication throughout.",
    outcomes: [
      'Replaced manual order tracking with a full order management system.',
      'Custom mirror inquiry flow converts browsing visitors into leads directly.',
      'Admin dashboard covers full business operations: inventory, coupons, reviews, and banners.',
    ],
    tech: [
      'Next.js', 'TypeScript', 'MongoDB', 'Mongoose', 'Tailwind CSS',
      'Cloudinary', 'JWT', 'REST API', 'Vercel',
    ],
    links: { live: 'https://mirrormandu.vercel.app', github: 'https://github.com/MANGOpali' },
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <div>
            <span className="font-inter text-xs tracking-[0.2em] text-muted uppercase mb-3 block">
              Selected Work
            </span>
            <h2 className="font-playfair text-5xl font-bold text-ink">Projects</h2>
          </div>
          <span className="font-inter text-sm text-muted hidden md:block">
            {projects.length} case stud{projects.length === 1 ? 'y' : 'ies'}
          </span>
        </div>

        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-border py-14 grid md:grid-cols-12 gap-8"
            >
              {/* Number */}
              <div className="md:col-span-1 pt-1">
                <span className="font-playfair text-3xl text-border group-hover:text-accent transition-colors duration-300">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-6">
                <span className="font-inter text-xs tracking-[0.18em] text-muted uppercase mb-4 block">
                  {project.category}
                </span>
                <h3 className="font-playfair text-3xl font-bold text-ink mb-5 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="space-y-3 mb-5">
                  <p className="font-inter text-sm text-muted leading-relaxed">
                    <span className="text-ink font-medium">Problem: </span>
                    {project.problem}
                  </p>
                  <p className="font-inter text-sm text-muted leading-relaxed">
                    <span className="text-ink font-medium">Solution: </span>
                    {project.solution}
                  </p>
                </div>

                <ul className="space-y-1.5">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="font-inter text-sm text-accent font-medium">
                      → {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta */}
              <div className="md:col-span-5 flex flex-col justify-between gap-8">
                <div>
                  <p className="font-inter text-xs text-muted uppercase tracking-widest mb-3">
                    Tech Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-inter text-xs text-muted border border-border px-3 py-1.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-ink hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
                  >
                    Live Project →
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-ink hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Placeholder for future projects */}
        <div className="border-t border-border pt-14 pb-2">
          <p className="font-inter text-sm text-muted italic">
            More projects coming soon — currently in stealth.
          </p>
        </div>
      </div>
    </section>
  )
}
