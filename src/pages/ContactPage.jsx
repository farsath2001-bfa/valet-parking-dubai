import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import QuoteForm from '../components/sections/QuoteForm'
import { CONTACT_INFO } from '../utils/constants'

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT_INFO.phone,
    href: 'tel:' + CONTACT_INFO.phone,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_INFO.email,
    href: 'mailto:' + CONTACT_INFO.email,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: CONTACT_INFO.address,
    href: '#',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: '24/7 — All Days Including Holidays',
    href: '#',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Contact Us</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Get In Touch</h1>
          <p className="page-hero__subtitle">
            Ready to book or have a question? Our team at Solo Heights Valet
            Parking is available 24/7 to assist you with any valet requirement.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="contact-cards">
            {CONTACT_CARDS.map((card, i) => (
              <a key={i} href={card.href} className="contact-card">
                <div className="contact-card__icon">
                  <card.icon size={22} />
                </div>
                <span className="contact-card__label">{card.label}</span>
                <span className="contact-card__value">{card.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <QuoteForm />

      {/* ── Map ── */}
      <section className="section section--dark contact-map">
        <div className="container">
          <div className="contact-map__embed">
            <iframe
              title="Solo Heights Valet Parking Location"
              src="https://maps.google.com/maps?q=Al+Manara+Tower+Business+Bay+Dubai&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: var(--color-bg-2);
          padding: 10rem 0 5rem;
          border-bottom: 1px solid var(--color-border);
        }
        .page-hero__inner { max-width: 700px; }
        .page-hero__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 1rem;
        }
        .page-hero__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .contact-card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .contact-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .contact-card__icon {
          width: 48px;
          height: 48px;
          background: rgba(200, 168, 101, 0.1);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold);
          margin-bottom: 0.5rem;
        }

        .contact-card__label {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-gold);
        }

        .contact-card__value {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.6;
        }

        .contact-map__embed {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .contact-cards { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .contact-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}