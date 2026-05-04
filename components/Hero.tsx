'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Available for work badge */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="font-inter text-xs text-muted tracking-wide">
              Available for work
            </span>
          </div>

          <span className="font-inter text-xs tracking-[0.22em] text-muted uppercase mb-8 block">
            Frontend Developer · React · E-commerce
          </span>

          <h1 className="font-playfair text-[clamp(2.8rem,8vw,6rem)] font-bold text-ink leading-[1.05] mb-8">
            Building interfaces<br />
            that{' '}
            <em className="text-accent not-italic">convert.</em>
          </h1>

          <p className="font-inter text-lg text-muted max-w-[480px] mb-12 leading-relaxed">
            I'm Milan Gopali — a frontend developer who crafts fast, high-converting
            e-commerce experiences with React. Every pixel, interaction, and load
            time is intentional.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="font-inter text-sm bg-ink text-cream px-7 py-4 hover:bg-accent transition-colors duration-200 tracking-wide"
            >
              View My Work
            </a>
            <a
              href="/resume"
              className="font-inter text-sm text-ink border border-border px-7 py-4 hover:border-ink hover:bg-surface transition-all duration-200 tracking-wide"
            >
              Resume ↓
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-24 pt-10 border-t border-border grid grid-cols-3 gap-8 max-w-md"
        >
          {[
            { value: 'React', label: 'Primary stack' },
            { value: '1+', label: 'Projects shipped' },
            { value: 'Open', label: 'For hire' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-playfair text-2xl font-bold text-ink">{stat.value}</div>
              <div className="font-inter text-xs text-muted mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-inter text-[10px] text-muted tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-border" />
      </motion.div>
    </section>
  )
}
