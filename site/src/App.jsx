import content from './data/content.js'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import Proof from './sections/Proof.jsx'
import Process from './sections/Process.jsx'
import About from './sections/About.jsx'
import FinalCta from './sections/FinalCta.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <Header brand={content.brand} cta={content.global.cta} />
      <main>
        <Hero content={content.hero} cta={content.global.cta} />
        <Services content={content.services} />
        <Proof proof={content.proof} />
        <Process content={content.process} />
        <About content={content.about} />
        <FinalCta content={content.finalCta} contact={content.contact} cta={content.global.cta} />
      </main>
      <Footer brand={content.brand} contact={content.contact} cta={content.global.cta} />
    </>
  )
}