import { Phone } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'

export default function CTABanner() {
  const waLink = 'https://wa.me/' + CONTACT_INFO.whatsapp
  const telLink = 'tel:' + CONTACT_INFO.phone

  return (
    <section className="ctabanner">
      <div className="container ctabanner__inner">
        <div className="ctabanner__content">
          <span className="eyebrow">Excellence in Every Drive</span>
          <h2 className="ctabanner__title">
            Experience <span className="text-gold">AI-Powered</span> Luxury Valet
          </h2>
          <p className="ctabanner__subtitle">
            Trusted by elite venues and corporate clients across Dubai. Book
            Solo Heights Valet Parking today and discover white-glove service
            backed by a 99.9% incident-free record.
          </p>
        </div>

        <div className="ctabanner__ctas">
          
           <a href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Get Free Quote
          </a>
          
          <a  href={telLink}
            className="btn btn--outline"
          >
            <Phone size={16} />
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>

      <style>{`
        .ctabanner {
          background: linear-gradient(
            135deg,
            rgba(200, 168, 101, 0.12) 0%,
            rgba(200, 168, 101, 0.04) 100%
          );
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 5rem 0;
        }

        .ctabanner__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .ctabanner__content {
          flex: 1;
          min-width: 280px;
        }

        .ctabanner__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .ctabanner__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.7;
          max-width: 520px;
        }

        .ctabanner__ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .ctabanner__inner {
            flex-direction: column;
            text-align: center;
          }
          .ctabanner__ctas {
            justify-content: center;
          }
          .ctabanner__title {
            font-size: var(--fs-2xl);
          }
        }
      `}</style>
    </section>
  )
}