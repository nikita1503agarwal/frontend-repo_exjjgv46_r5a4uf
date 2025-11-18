export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-blue-500/10 to-cyan-400/10 pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Ready to build a brand people believe in?
        </h2>
        <p className="mt-5 text-white/80">
          Tell us about your goals. We’ll craft a plan that aligns your team and accelerates your next chapter.
        </p>
        <form className="mt-10 grid gap-3 sm:grid-cols-[1fr_auto]">
          <input type="email" required placeholder="Your email" className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" />
          <button className="rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:opacity-90 transition">
            Start a project
          </button>
        </form>
      </div>
    </section>
  )
}
