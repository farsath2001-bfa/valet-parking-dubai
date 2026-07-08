import { Link } from 'react-router-dom'
import { Home, Phone } from 'lucide-react'
import { CONTACT_INFO } from '../utils/constants'
import Seo from '../components/ui/seo'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__inner">

        {/* ── Gold 404 ── */}
        <div className="notfound__number">404</div>

        {/* ── Divider ── */}
        <div className="gold-line gold-line--center" />

        <span className="eyebrow">Page Not Found</span>

        <h1 className="notfound__title">
          Looks Like This Page
          <br />
          <span className="notfound__title-gold">Took a Wrong Turn</span>
        </h1>

        <p className="notfound__subtitle">
          The page you are looking for doesn't exist or has been moved.
          Let us drive you back to where you need to be.
        </p>
        <Seo
  title="Page Not Found"
  description="The page you are looking for doesn't exist. Return to Solo Heights Valet Parking home page."
/>

        {/* ── CTAs ── */}
        <div className="notfound__ctas">
          <Link to="/" className="btn btn--primary">
            <Home size={16} />
            Back to Home
          </Link>
          
           <a href={'tel:' + CONTACT_INFO.phone}
            className="btn btn--outline"
          >
            <Phone size={16} />
            {CONTACT_INFO.phone}
          </a>
        </div>

        {/* ── Quick Links ── */}
        <div className="notfound__links">
          <span className="notfound__links-label">Quick Links:</span>
          <Link to="/about"    className="notfound__link">About</Link>
          <Link to="/services" className="notfound__link">Services</Link>
          <Link to="/gallery"  className="notfound__link">Gallery</Link>
          <Link to="/contact"  className="notfound__link">Contact</Link>
        </div>
      </div>

      <style>{`
        .notfound {
          min-height: 100vh;
          background: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        /* ── Background Pattern ── */
        .notfound::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(200, 168, 101, 0.03) 0px,
              rgba(200, 168, 101, 0.03) 1px,
              transparent 1px,
              transparent 60px
            );
          pointer-events: none;
        }

        .notfound__inner {
          text-align: center;
          position: relative;
          z-index: 1;
          max-width: 600px;
        }

        /* ── 404 Number ── */
        .notfound__number {
          font-family: var(--font-display);
          font-size: clamp(6rem, 20vw, 12rem);
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 2px var(--color-gold);
          opacity: 0.15;
          line-height: 1;
          margin-bottom: 1rem;
          letter-spacing: -0.05em;
        }

        /* ── Title ── */
        .notfound__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.2;
          margin: 1rem 0;
        }

        .notfound__title-gold {
          color: var(--color-gold);
        }

        /* ── Subtitle ── */
        .notfound__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        /* ── CTAs ── */
        .notfound__ctas {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        /* ── Quick Links ── */
        .notfound__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .notfound__links-label {
          font-size: var(--fs-xs);
          color: var(--color-gray);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .notfound__link {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          transition: var(--transition);
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }

        .notfound__link:hover {
          color: var(--color-gold);
          border-bottom-color: var(--color-gold);
        }

        @media (max-width: 480px) {
          .notfound__title {
            font-size: var(--fs-2xl);
          }
        }
      `}</style>
    </section>
  )
}