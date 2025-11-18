export default function Services() {
  const services = [
    { title: 'Brand Strategy', desc: 'Positioning, platforms, and playbooks that align teams and move markets.' },
    { title: 'Verbal Identity', desc: 'Names, taglines, tone, and messaging that sound like no one else.' },
    { title: 'Visual Identity', desc: 'Distinctive systems, art direction, and design languages built to scale.' },
    { title: 'Digital & Launch', desc: 'Site design, go-to-market assets, and campaigns that create momentum.' },
  ]

  return (
    <section id="services" className="bg-slate-950 py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we do</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-white text-xl font-medium">{s.title}</h3>
              <p className="text-white/70 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
