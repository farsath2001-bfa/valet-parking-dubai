import Hero         from '../components/sections/Hero'
import TrustBar     from '../components/sections/TrustBar'
import About        from '../components/sections/About'
import Services     from '../components/sections/Services'
import WhyUs        from '../components/sections/WhyUs'
import HowItWorks   from '../components/sections/HowItWorks'
import Stats        from '../components/sections/Stats'
import Leadership   from '../components/sections/Leadership'
import Workforce from '../components/sections/Workforce'
import Gallery      from '../components/sections/Gallery'
import Clients      from '../components/sections/Clients'
import Testimonials from '../components/sections/Testimonials'
import QuoteForm    from '../components/sections/QuoteForm'
import CTABanner    from '../components/sections/CTABanner'
import FAQ          from '../components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Stats />
      <Leadership />
      <Workforce/>
      <Gallery />
      <Clients />
      <Testimonials />
      <QuoteForm />
      <CTABanner />
      <FAQ />
    </>
  )
}