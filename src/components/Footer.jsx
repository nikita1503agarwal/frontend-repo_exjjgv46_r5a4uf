export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-block h-6 w-6 rounded-sm bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-cyan-400" />
          <span className="text-white/70 text-sm">© {new Date().getFullYear()} Mottoverse Studio</span>
        </div>
        <nav className="flex items-center gap-6 text-white/60 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
