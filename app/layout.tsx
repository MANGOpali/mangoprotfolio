import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://milangopali.com.np'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Milan Gopali — Frontend Developer',
  description:
    'Frontend Developer specializing in React and e-commerce. I build fast, high-converting interfaces — from product page to checkout.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'E-commerce Developer',
    'Next.js',
    'Milan Gopali',
    'Nepal Developer',
    'Zipa Image Forge',
  ],
  authors: [{ name: 'Milan Gopali' }],
  openGraph: {
    title: 'Milan Gopali — Frontend Developer',
    description: 'React & e-commerce frontend developer. Building interfaces that convert.',
    type: 'website',
    url: baseUrl,
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
