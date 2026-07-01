import { Award, TrendingUp, ShieldCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import founderImg from '../../assets/images/founder.jpg'
import { LEADERSHIP } from '../../utils/constants'

const ICONS = [TrendingUp, Award, ShieldCheck]

export default function Leadership() {
  return (
    <section className="section section--darker leadership">
      <div className="container leadership__inner">

        <div className="leadership__image-wrap">
          <img src={founderImg} alt={LEADERSHIP.name} className="leadership__image" />
          <div className="leadership__badge">
            <span className="leadership__badge-text">18+ Years</span>
            <span className="leadership__badge-sub">Hospitality Leadership</span>
          </div>
        </div>

       <div className="leadership__image-wrap reveal reveal--left">
          <SectionHeading
            eyebrow="Leadership"
            title={LEADERSHIP.name}
            subtitle={LEADERSHIP.role}
          />

          <p className="leadership__bio">{LEADERSHIP.bio}</p>

          <div className="leadership__highlights">
            {LEADERSHIP.highlights.map((item, i) => {
              const Icon = ICONS[i] || Award
              return (
                <div key={i} className="leadership__highlight">
                  <Icon size={20} className="leadership__highlight-icon" />
                  <div>
                    <h4 className="leadership__highlight-title">{item.title}</h4>
                    <p className="leadership__highlight-desc">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .leadership__inner {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }

        .leadership__image-wrap {
          position: relative;
        }

        .leadership__image {
          width: 100%;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          object-fit: cover;
          aspect-ratio: 4/5;
        }

        .leadership__badge {
          position: absolute;
          bottom: -1.25rem;
          left: -1.25rem;
          background: var(--color-gold);
          color: #000;
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          box-shadow: 0 8px 30px rgba(200, 168, 101, 0.3);
        }

        .leadership__badge-text {
          display: block;
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1.1;
        }

        .leadership__badge-sub {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .leadership__bio {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.85;
          margin-bottom: 2rem;
        }

        .leadership__highlights {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .leadership__highlight {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          transition: var(--transition);
        }

        .leadership__highlight:hover {
          border-color: var(--color-gold);
        }

        .leadership__highlight-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .leadership__highlight-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 0.4rem;
        }

        .leadership__highlight-desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.7;
        }

        @media (max-width: 968px) {
          .leadership__inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .leadership__image {
            max-width: 320px;
            margin: 0 auto;
            display: block;
          }
        }
      `}</style>
    </section>
  )
}