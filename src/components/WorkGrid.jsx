export default function WorkGrid() {
  const items = [
    {
      title: 'Velocity',
      desc: 'Naming, Strategy, Identity',
      img: 'https://images.unsplash.com/photo-1520975922219-79da97c3e3a5?q=80&w=1600&auto=format&fit=crop',
      tint: 'from-fuchsia-500/30'
    },
    {
      title: 'Northstar',
      desc: 'Positioning, Messaging, Web',
      img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
      tint: 'from-blue-500/30'
    },
    {
      title: 'Evergreen',
      desc: 'Rebrand, Toolkit, Guidelines',
      img: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1600&auto=format&fit=crop',
      tint: 'from-emerald-500/30'
    }
  ]

  return (
    <section id="work" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
          <a href="#" className="text-white/70 hover:text-white">View all</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <a key={item.title} href="#" className="group relative overflow-hidden rounded-3xl border border-white/10">
              <img src={item.img} alt="" className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${item.tint} via-transparent to-transparent`} />
              <div className="absolute bottom-5 left-5">
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
