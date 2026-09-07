// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
// import { useEffect } from 'react'
// import Navbar from './components/layout/Navbar'
// import Footer from './components/layout/Footer'
// import WhatsAppFloat from './components/ui/WhatsAppFloat'
// import BackToTop from './components/ui/BackToTop'

// import Home         from './pages/Home'
// import AboutPage    from './pages/AboutPage'
// import ServicesPage from './pages/ServicesPage'
// import GalleryPage  from './pages/GalleryPage'
// import ContactPage  from './pages/ContactPage'
// // import BlogPage     from './pages/BlogPage'
// // import BlogPost     from './pages/BlogPost'
// import EventsPage from './pages/EventPage'
// import NotFound from './pages/NotFound'
// import PageLoader from './components/ui/PageLoader'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import TermsPage from './pages/TermsPage'
// import './styles/index.css'

// function ScrollReveal() {
//   const location = useLocation()

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('reveal--visible')
//           }
//         })
//       },
//       { threshold: 0.12 }
//     )

//     const elements = document.querySelectorAll('.reveal')
//     elements.forEach((el) => observer.observe(el))

//     return () => observer.disconnect()
//   }, [location])

//   return null
// }
//  function ScrollToTop() {
//   const location = useLocation()

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'instant' })
//   }, [location])

//   return null
// }

// function App() {
//   return (
//     <BrowserRouter>
//     <PageLoader/>
//       <ScrollReveal />
//       <ScrollToTop/>
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/"         element={<Home />} />
//           <Route path="/about"    element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/gallery"  element={<GalleryPage />} />
//           <Route path="/contact"  element={<ContactPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//           <Route path="/terms"   element={<TermsPage />} />
//         </Routes>
//       </main>
//       <Footer />
//       <WhatsAppFloat />
//       <BackToTop />
//     </BrowserRouter>
//   )
// }

// export default App


import './styles/index.css'
import logo from './assets/logo.png'
import { CONTACT_INFO } from './utils/constants'
import { Phone, Mail, MapPin } from 'lucide-react'

function App() {
  return (
    <div className="coming-soon">

      {/* ── Background Pattern ── */}
      <div className="coming-soon__pattern" />

      {/* ── Content ── */}
      <div className="coming-soon__inner">

        {/* ── Logo ── */}
        <div className="coming-soon__logo">
          <img src={logo} alt="Solo Heights Valet Parking" className="coming-soon__logo-img" />
          <div className="coming-soon__logo-text">
            <span className="coming-soon__logo-name">SOLO HEIGHTS</span>
            <span className="coming-soon__logo-sub">VALET PARKING</span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="coming-soon__line" />

        {/* ── Heading ── */}
        <span className="coming-soon__eyebrow">Excellence in Every Drive</span>
        <h1 className="coming-soon__title">
          Something
          <span className="coming-soon__title-gold"> Premium </span>
          Is Coming
        </h1>
        <p className="coming-soon__subtitle">
          Solo Heights Valet Parking is Dubai's premier AI-powered luxury
          valet service. Our new website is currently under development
          and will be launching very soon.
        </p>

        {/* ── Contact ── */}
        <div className="coming-soon__contact">
          <a href={'tel:' + CONTACT_INFO.phone} className="coming-soon__contact-item">
            <Phone size={16} />
            {CONTACT_INFO.phone}
          </a>
          <a href={'mailto:' + CONTACT_INFO.email} className="coming-soon__contact-item">
            <Mail size={16} />
            {CONTACT_INFO.email}
          </a>
          <div className="coming-soon__contact-item">
            <MapPin size={16} />
            {CONTACT_INFO.address}
          </div>
        </div>

        {/* ── WhatsApp CTA ── */}
        
         <a href={'https://wa.me/' + CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="coming-soon__wa-btn"
        >
          💬 WhatsApp Us Now
        </a>

        {/* ── Footer ── */}
        <p className="coming-soon__copy">
          © {new Date().getFullYear()} Design & Develop by Farsath .Solo Heights Valet Parking. All rights reserved.
        </p>

      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0a0a0a;
          font-family: 'Inter', sans-serif;
          color: #ffffff;
          min-height: 100vh;
        }

        .coming-soon {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
        }

        /* ── Pattern ── */
        .coming-soon__pattern {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(200, 168, 101, 0.04) 0px,
              rgba(200, 168, 101, 0.04) 1px,
              transparent 1px,
              transparent 60px
            );
          pointer-events: none;
        }

        /* ── Inner ── */
        .coming-soon__inner {
          position: relative;
          z-index: 1;
          max-width: 620px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        /* ── Logo ── */
        .coming-soon__logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .coming-soon__logo-img {
          width: 70px;
          height: 70px;
          object-fit: contain;
          mix-blend-mode: lighten;
          animation: logoPulse 2.5s ease-in-out infinite;
        }

        @keyframes logoPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50%       { opacity: 1;    transform: scale(1.05); }
        }

        .coming-soon__logo-text {
          display: flex;
          flex-direction: column;
          text-align: left;
          line-height: 1.2;
        }

        .coming-soon__logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ffffff;
        }

        .coming-soon__logo-sub {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C8A865;
        }

        /* ── Divider ── */
        .coming-soon__line {
          width: 60px;
          height: 2px;
          background: #C8A865;
          border-radius: 2px;
        }

        /* ── Text ── */
        .coming-soon__eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C8A865;
        }

        .coming-soon__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
        }

        .coming-soon__title-gold {
          color: #C8A865;
        }

        .coming-soon__subtitle {
          font-size: 1rem;
          color: #cccccc;
          line-height: 1.8;
          max-width: 500px;
        }

        /* ── Contact ── */
        .coming-soon__contact {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
          padding: 1.5rem 2rem;
          border: 1px solid rgba(200, 168, 101, 0.2);
          border-radius: 12px;
          background: rgba(200, 168, 101, 0.04);
          width: 100%;
          max-width: 400px;
        }

        .coming-soon__contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #cccccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .coming-soon__contact-item:hover {
          color: #C8A865;
        }

        .coming-soon__contact-item svg {
          color: #C8A865;
          flex-shrink: 0;
        }

        /* ── WhatsApp Button ── */
        .coming-soon__wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: #25D366;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .coming-soon__wa-btn:hover {
          background: #1ebe5d;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        /* ── Copyright ── */
        .coming-soon__copy {
          font-size: 0.75rem;
          color: #555555;
          margin-top: 1rem;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .coming-soon__logo-name { font-size: 1.1rem; }
          .coming-soon__contact { padding: 1.25rem; }
        }
      `}</style>
    </div>
  )
}

export default App