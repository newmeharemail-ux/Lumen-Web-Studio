import content from './data/content.js'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import Proof from './sections/Proof.jsx'
import Process from './sections/Process.jsx'
import About from './sections/About.jsx'
import SolarWebDesign from './sections/SolarWebDesign.jsx'
import FinalCta from './sections/FinalCta.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-52 right-[-12%] h-[780px] w-[780px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(173,235,179,0.24), transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="absolute -left-40 top-8 h-[620px] w-[620px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(173,235,179,0.16), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute left-[-14%] top-[38%] h-[640px] w-[640px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(134,214,148,0.2), transparent 70%)',
            filter: 'blur(85px)',
          }}
        />
        <div
          className="absolute right-[-10%] top-[72%] h-[700px] w-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(173,235,179,0.2), transparent 70%)',
            filter: 'blur(95px)',
          }}
        />
        <div
          className="absolute left-[-8%] top-[108%] h-[600px] w-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(242,239,233,0.09), transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      <div className="relative">
        <Header brand={content.brand} cta={content.global.cta} />
        <main>
          <Hero content={content.hero} cta={content.global.cta} />
          <Services content={content.services} />
          <Proof proof={content.proof} />
          <Process content={content.process} />
          <About content={content.about} />
          <SolarWebDesign content={content.solarWebDesign} cta={content.global.cta} />
          <FinalCta content={content.finalCta} contact={content.contact} cta={content.global.cta} />
        </main>
        <Footer brand={content.brand} contact={content.contact} cta={content.global.cta} />
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 p-3 shadow-[0_-10px_30px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md sm:hidden">
        <a
          href={content.global.cta.href}
          target="_blank"
          rel="noreferrer"
          className="btn flex h-12 w-full items-center justify-center text-base"
        >
          {content.global.cta.label}
        </a>
      </div>
    </div>
  )
}