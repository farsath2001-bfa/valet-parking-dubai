import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import BackToTop from './components/ui/BackToTop'

import Home         from './pages/Home'
import AboutPage    from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage  from './pages/GalleryPage'
import ContactPage  from './pages/ContactPage'
// import BlogPage     from './pages/BlogPage'
// import BlogPost     from './pages/BlogPost'
import EventsPage from './pages/EventPage'
import NotFound from './pages/NotFound'
import PageLoader from './components/ui/PageLoader'

import './styles/index.css'

function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location])

  return null
}

function App() {
  return (
    <BrowserRouter>
    <PageLoader/>
      <ScrollReveal />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery"  element={<GalleryPage />} />
          <Route path="/contact"  element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App