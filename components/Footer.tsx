export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-ink border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-inter text-xs text-muted">
          © {new Date().getFullYear()} Milan Gopali
        </span>
        <span className="font-inter text-xs text-muted">
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  )
}
