import ResumeClient from './ResumeClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume — Milan Gopali',
  description: 'Frontend Developer specializing in React and e-commerce.',
}

export default function ResumePage() {
  return <ResumeClient />
}
