import { CheckCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { CONTACT_INFO, COMPANY } from '../../utils/constants'

const HIGHLIGHTS = [
  'Fully integrated AI system for real-time operations',
  '50+ uniformed, certified valet professionals',
  '99.9% incident-free operational record',
  'Branded black & gold attire for Dubai weather',
  '15% faster wait times through AI dispatch',
  'Based in Business Bay, Al Manara Tower, Dubai',
]

export default function About() {
  return (
    <section className="section section--darker about">
      <div className="container about__inner">

        <div className="about__image-wrap">
          <div className="about__image-box">
            <div className="about__image-placeholder">
              <span>Team Photo</span>
            </div>
          </div>
          <div className="about__badge">
            <span className="about__badge-number">50+</span>
            <span className="about__badge-text">Trained Professionals</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow="About Us"
            title="Excellence in Every Drive"
            subtitle={COMPANY.identity}
          />

          <p className="about__mission">{COMPANY.mission}</p>

          <ul className="about__highlights">
            {HIGHLIGHTS.map((item, i) => (
              <li key={i} className="about__highlight-item">
                <CheckCircle size={18} className="about__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="about__ctas">
            <Button to="/about" variant="primary">Learn More About Us</Button>
            <Button href={'tel:' + CONTACT_INFO.phone} variant="outline">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .about__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about__image-wrap {
          position: relative;
        }

        .about__image-box {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
          aspect-ratio: 4/5;
        }

        .about__image-placeholder {
          width: 100%;
          height: 100%;
          background: var(--color-bg-3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gray);
          font-size: var(--fs-sm);
          min-height: 500px;
        }

        .about__badge {
          position: absolute;
          bottom: -1.5rem;
          right: -1.5rem;
          background: var(--color-gold);
          color: #000;
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          text-align: center;
          box-shadow: 0 8px 30px rgba(200, 168, 101, 0.3);
        }

        .about__badge-number {
          display: block;
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
        }

        .about__badge-text {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .about__mission {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.9;
          margin-bottom: 1.75rem;
          padding-left: 1rem;
          border-left: 2px solid var(--color-gold);
        }

        .about__highlights {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }

        .about__highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
        }

        .about__check {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .about__ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 968px) {
          .about__inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about__badge {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </section>
  )
}