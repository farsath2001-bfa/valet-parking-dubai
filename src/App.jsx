import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

import Home        from './pages/Home'
import AboutPage   from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import BlogPage    from './pages/BlogPage'
import BlogPost    from './pages/BlogPost'

import './styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery"  element={<GalleryPage />} />
          <Route path="/contact"  element={<ContactPage />} />
          <Route path="/blog"     element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}

export default App