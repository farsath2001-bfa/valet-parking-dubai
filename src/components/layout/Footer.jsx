import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { NAV_LINKS, SERVICES, CONTACT_INFO, FOOTER_LINKS } from '../../utils/constants'
import logo from '../../assets/logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        {/* ── Top Grid ── */}
        <div className="footer__grid">

          {/* ── Brand Column ── */}
          <div className="footer__brand">
           <Link to="/" className="footer__logo">
  <img src={logo} alt="Solo Heights Valet Parking" className="footer__logo-img" />
  <div className="footer__logo-text-wrap">
    <span className="footer__logo-text">SOLO HEIGHTS</span>
    <span className="footer__logo-sub">VALET PARKING</span>
  </div>
</Link>
<p className="footer__desc">
  A premier luxury valet brand operating under Solo Heights Group,
  delivering world-class, AI-powered valet parking experiences for
  elite venues, hotels, and corporate clients across Dubai, UAE.
</p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" className="footer__social">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer__social">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="footer__social">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="footer__social">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.213a.75.75 0 00.92.921l5.4-1.463A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.989-1.371l-.358-.214-3.717 1.006 1.028-3.623-.234-.374A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
  {FOOTER_LINKS.map((link) => (
    <li key={link.path}>
      <Link to={link.path} className="footer__link">
        {link.label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* ── Services ── */}
          <div className="footer__col">
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__list">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="footer__link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          {/* ── Contact ── */}
<div className="footer__col">
  <h4 className="footer__heading">Get In Touch</h4>
  <ul className="footer__contact-list">
    <li className="footer__contact-item">
      <MapPin size={16} className="footer__contact-icon" />
      <span>{CONTACT_INFO.address}</span>
    </li>
    <li className="footer__contact-item">
      <Phone size={16} className="footer__contact-icon" />
      
       <a href={'tel:' + CONTACT_INFO.phone}
        className="footer__link"
      >
        {CONTACT_INFO.phone}
      </a>
    </li>
    <li className="footer__contact-item">
      <Mail size={16} className="footer__contact-icon" />
      
       <a href={'mailto:' + CONTACT_INFO.email}
        className="footer__link"
      >
        {CONTACT_INFO.email}
      </a>
    </li>
  </ul>

  {/* ── Map ── */}
  <div className="footer__map">
    <iframe
      title="Solo Heights Valet Parking Location"
      src="https://maps.google.com/maps?q=Al+Manara+Tower+Business+Bay+Dubai&t=m&z=15&output=embed&iwloc=near"
      width="100%"
      height="180"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  </div>

  
    <a href={'https://wa.me/' + CONTACT_INFO.whatsapp}
    target="_blank"
    rel="noreferrer"
    className="btn btn--whatsapp footer__wa-btn"
  >
    WhatsApp Us Now
  </a>
</div>
        </div>

        {/* ── Divider ── */}
        <div className="footer__divider" />

        {/* ── Bottom Bar ── */}
        <div className="footer__bottom">
          <p className="footer__copy">
           © {currentYear} Solo Heights Valet Parking. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="#" className="footer__link">Privacy Policy</Link>
            <Link to="#" className="footer__link">Terms & Conditions</Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer {
          background-color: #080808;
          border-top: 1px solid var(--color-border);
          padding: 5rem 0 2rem;
        }

        /grid ----*/
          .footer__grid {
          display: grid;
          grid-template-columns: 1.6fr 0.9fr 0.9fr 1.6fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        /* ── Brand ── */
        .footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.footer__logo-img {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.footer__logo-text-wrap {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.footer__logo-text {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--color-white);
}

.footer__logo-sub {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: var(--color-gold);
}

        .footer__desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .footer__socials {
          display: flex;
          gap: 0.75rem;
        }

        .footer__social {
          width: 38px;
          height: 38px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gray-light);
          transition: var(--transition);
        }

        .footer__social:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
          background: rgba(200, 168, 101, 0.08);
        }

        /* ── Columns ── */
        .footer__heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border);
        }

        .footer__list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer__link {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          transition: var(--transition);
        }

        .footer__link:hover {
          color: var(--color-gold);
          padding-left: 4px;
        }

        /* ── Contact ── */
        .footer__contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.6;
        }

        .footer__contact-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer__wa-btn {
          font-size: var(--fs-xs);
          padding: 0.65rem 1.25rem;
          display: inline-flex;
          align-items: center;
        }

        /* ── Footer Map ── */
.footer__map {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  margin-bottom: 1.25rem;
  margin-top: 0.5rem;
}

.footer__map iframe {
  display: block;
  filter: grayscale(30%) contrast(1.1);
  transition: var(--transition);
}

.footer__map:hover iframe {
  filter: grayscale(0%) contrast(1);
}

        /* ── Divider ── */
        .footer__divider {
          height: 1px;
          background: var(--color-border);
          margin-bottom: 1.5rem;
        }

        /* ── Bottom ── */
        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer__copy {
          font-size: var(--fs-xs);
          color: var(--color-gray);
        }

        .footer__bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer__bottom-links .footer__link {
          font-size: var(--fs-xs);
          color: var(--color-gray);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .footer__grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer__bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}