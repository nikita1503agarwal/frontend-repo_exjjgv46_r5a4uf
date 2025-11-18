import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950 pointer-events-none" />
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Brand Builders for Bold Companies
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] font-semibold tracking-tight text-white">
            Build a brand people rally behind.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We partner with founders and teams to craft standout strategies, verbal identity, and design systems that spark momentum.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:opacity-90 transition">
              See our work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
