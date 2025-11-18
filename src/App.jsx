import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WorkGrid />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
