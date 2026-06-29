import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // ── Scroll detection ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Close menu on route change ────────────────────────────
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <span className="navbar__logo-gold">MY</span>
          <span className="navbar__logo-text">VALET</span>
          <span className="navbar__logo-gold">DUBAI</span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        
         <a href={`tel:${CONTACT_INFO.phone}`}
          className="btn btn--primary navbar__cta"
        >
          <Phone size={15} />
          {CONTACT_INFO.phone}
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
            }
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        
         <a href={`tel:${CONTACT_INFO.phone}`}
          className="btn btn--primary navbar__mobile-cta"
          onClick={closeMenu}
        >
          <Phone size={15} />
          {CONTACT_INFO.phone}
        </a>
      </div>

      <style>{`
        /* ── Base ── */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          background: transparent;
          transition: all 0.4s ease;
        }

        .navbar--scrolled {
          background: rgba(10, 10, 10, 0.96);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── Logo ── */
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .navbar__logo-text {
          color: var(--color-white);
        }

        .navbar__logo-gold {
          color: var(--color-gold);
        }

        /* ── Desktop Links ── */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .navbar__link {
          font-size: var(--fs-sm);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-gray-light);
          position: relative;
          padding-bottom: 4px;
        }

        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-gold);
          transition: width 0.3s ease;
        }

        .navbar__link:hover,
        .navbar__link--active {
          color: var(--color-gold);
        }

        .navbar__link:hover::after,
        .navbar__link--active::after {
          width: 100%;
        }

        /* ── CTA ── */
        .navbar__cta {
          font-size: var(--fs-xs);
          padding: 0.6rem 1.25rem;
          white-space: nowrap;
        }

        /* ── Hamburger ── */
        .navbar__hamburger {
          display: none;
          color: var(--color-white);
          padding: 0.25rem;
        }

        /* ── Mobile Menu ── */
        .navbar__mobile {
          display: none;
          flex-direction: column;
          gap: 0;
          background: rgba(10, 10, 10, 0.98);
          border-top: 1px solid var(--color-border);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .navbar__mobile--open {
          max-height: 500px;
        }

        .navbar__mobile-link {
          padding: 1rem 1.5rem;
          font-size: var(--fs-sm);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-gray-light);
          border-bottom: 1px solid var(--color-border);
        }

        .navbar__mobile-link:hover,
        .navbar__mobile-link--active {
          color: var(--color-gold);
          background: rgba(200, 168, 101, 0.05);
        }

        .navbar__mobile-cta {
          margin: 1rem 1.5rem;
          justify-content: center;
        }

        /* ── Responsive ── */
        @media (max-width: 968px) {
          .navbar__links,
          .navbar__cta {
            display: none;
          }

          .navbar__hamburger,
          .navbar__mobile {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}