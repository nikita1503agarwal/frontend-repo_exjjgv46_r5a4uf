import { useEffect, useRef } from 'react'

const logos = [
  'Acme Co', 'Nimbus', 'Orbit', 'Helix', 'Quanta', 'Atlas', 'Vertex', 'Pulse', 'Lumen', 'Forge'
]

export default function Marquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf
    const speed = 40 // px/sec

    const step = (ts) => {
      if (!start) start = ts
      const dt = (ts - start) / 1000
      el.style.transform = `translateX(${-dt * speed % el.scrollWidth}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative bg-slate-950 py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap will-change-transform" ref={ref}>
            {[...logos, ...logos, ...logos].map((name, i) => (
              <span key={i} className="text-white/50 text-sm tracking-widest uppercase">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
