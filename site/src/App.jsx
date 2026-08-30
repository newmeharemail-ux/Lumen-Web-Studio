import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import content from './data/content.js'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import ProfitCalculator from './components/ProfitCalculator.jsx'
import Mechanism from './sections/Mechanism.jsx'
import Proof from './sections/Proof.jsx'
import Services from './sections/Services.jsx'
import ValueStack from './sections/ValueStack.jsx'
import Process from './sections/Process.jsx'
import Pricing from './sections/Pricing.jsx'
import About from './sections/About.jsx'
import SolarWebDesign from './sections/SolarWebDesign.jsx'
import FAQ from './sections/FAQ.jsx'
import FinalCta from './sections/FinalCta.jsx'
import Footer from './sections/Footer.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogPost from './pages/BlogPost.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LandingPage() {
  return (
    <>
      <Hero content={content.hero} cta={content.global.cta} />
      <ProfitCalculator cta={content.global.cta} />
      <Mechanism content={content.mechanism} />
      <Proof proof={content.proof} />
      <Services content={content.services} />
      <ValueStack content={content.valueStack} />
      <Process content={content.process} />
      <Pricing content={content.pricing} cta={content.global.cta} />
      <About content={content.about} />
      <SolarWebDesign content={content.solarWebDesign} cta={content.global.cta} />
      <FAQ content={content.faq} />
      <FinalCta content={content.finalCta} contact={content.contact} cta={content.global.cta} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
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
          <ScrollToTop />
          <Header brand={content.brand} cta={content.global.cta} />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<BlogList cta={content.global.cta} />} />
              <Route path="/blog/:slug" element={<BlogPost cta={content.global.cta} />} />
            </Routes>
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
    </BrowserRouter>
  )
}
