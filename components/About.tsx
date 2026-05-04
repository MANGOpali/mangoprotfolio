'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-inter text-xs tracking-[0.2em] text-muted uppercase mb-6 block">
            About
          </span>
          <h2 className="font-playfair text-5xl font-bold text-ink mb-8 leading-[1.1]">
            Developer who thinks in systems, ships in pixels.
          </h2>

          <div className="space-y-5 font-inter text-base text-muted leading-relaxed">
            <p>
              I'm Milan Gopali, a frontend developer focused on React and e-commerce.
              I care about the things most developers skip — load times, micro-interactions,
              and whether the checkout button actually gets clicked.
            </p>
            <p>
              My work sits at the intersection of engineering and product thinking.
              I don't just build what's handed to me in a brief — I ask why it exists,
              then build what's actually needed.
            </p>
            <p>
              Currently open to freelance projects and full-time frontend roles,
              particularly in e-commerce, SaaS, and tools that solve tangible problems.
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-border grid grid-cols-3 gap-6">
            {[
              { value: 'React', label: 'Core focus' },
              { value: 'E-com', label: 'Specialty' },
              { value: 'Open', label: 'For hire' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair text-2xl font-bold text-ink">{stat.value}</div>
                <div className="font-inter text-xs text-muted mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-square bg-cream border border-border relative overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Milan Gopali — Mango"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-accent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
