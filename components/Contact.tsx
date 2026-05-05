'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type Status = 'idle' | 'loading' | 'success' | 'error'

const socials = [
  { label: 'GitHub', href: 'https://github.com/MANGOpali' },
  ]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6 bg-ink">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-inter text-xs tracking-[0.2em] text-muted uppercase mb-8 block">
            Get In Touch
          </span>
          <h2 className="font-playfair text-[clamp(2.4rem,5vw,4rem)] font-bold text-cream leading-[1.05] mb-6">
            Let's build something{' '}
            <em className="text-accent not-italic">real.</em>
          </h2>
          <p className="font-inter text-base text-muted leading-relaxed mb-10">
            Open to freelance projects and full-time frontend roles — especially
            e-commerce and React. I reply within 24 hours.
          </p>
          <a
            href="mailto:milangopali98@gmail.com"
            className="font-inter text-sm text-muted hover:text-cream transition-colors"
          >
            milangopali98@gmail.com
          </a>

          <div className="flex items-center gap-8 mt-12 pt-10 border-t border-white/10">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-muted hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                <span className="text-accent text-xl">✓</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-cream mb-3">Message sent.</h3>
              <p className="font-inter text-sm text-muted leading-relaxed mb-6">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="font-inter text-xs text-muted hover:text-cream transition-colors underline underline-offset-4 self-start"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
              </div>
              <div>
                <label className="font-inter text-[10px] tracking-[0.18em] text-muted uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 text-cream font-inter text-sm px-4 py-3 placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="font-inter text-xs text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-inter text-sm bg-accent text-cream py-4 hover:bg-cream hover:text-ink transition-colors duration-200 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function Field({
  label, name, type, value, onChange, placeholder,
}: {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}) {
  return (
    <div>
      <label className="font-inter text-[10px] tracking-[0.18em] text-muted uppercase block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-white/5 border border-white/10 text-cream font-inter text-sm px-4 py-3 placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  )
}
