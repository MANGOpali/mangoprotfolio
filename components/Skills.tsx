'use client'
import { motion } from 'framer-motion'

const skills: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML / CSS'],
  'E-commerce': ['Shopify', 'WooCommerce', 'Stripe', 'Cart & Checkout UX', 'Product Page Optimization'],
  'Tools & Workflow': ['Git & GitHub', 'Figma', 'Vercel', 'VS Code', 'REST APIs'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <span className="font-inter text-xs tracking-[0.2em] text-muted uppercase mb-6 block">
          Capabilities
        </span>
        <h2 className="font-playfair text-5xl font-bold text-ink mb-20">What I work with</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="font-inter text-xs tracking-[0.2em] text-accent uppercase mb-6 pb-4 border-b border-border">
                {category}
              </h3>
              <ul className="space-y-3.5">
                {items.map((skill) => (
                  <li key={skill} className="font-inter text-base text-ink flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
