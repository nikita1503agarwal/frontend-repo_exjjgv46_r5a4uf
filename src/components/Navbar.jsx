import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-sm bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-cyan-400"></span>
            <span className="text-sm font-semibold tracking-wide text-white uppercase">Mottoverse</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#insights" className="hover:text-white transition">Insights</a>
            <a href="#contact" className="rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:opacity-90 transition">Start a project</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:hidden">
            <div className="grid gap-3 text-white/80">
              <a href="#work" className="hover:text-white transition">Work</a>
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#insights" className="hover:text-white transition">Insights</a>
              <a href="#contact" className="rounded-full text-center bg-white text-slate-900 px-4 py-2 font-medium hover:opacity-90 transition">Start a project</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
