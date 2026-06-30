import * as Icons from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { WORKFORCE } from '../../utils/constants'

export default function Workforce() {
  return (
    <section className="section section--dark workforce">
      <div className="container">
        <SectionHeading
          eyebrow="Team & Operations"
          title="Our Workforce"
          subtitle={WORKFORCE.intro}
          center
        />

        {/* ── Top 3 Cards ── */}
        <div className="workforce__cards">
          {WORKFORCE.cards.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.BadgeCheck
            return (
              <div key={i} className="workforce__card">
                <div className="workforce__card-icon">
                  <Icon size={24} />
                </div>
                <h3 className="workforce__card-title">{item.title}</h3>
                <p className="workforce__card-desc">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* ── Staff Training + Operational Discipline ── */}
        <div className="workforce__highlights">
          <div className="workforce__highlight workforce__highlight--gold">
            <h3 className="workforce__highlight-title">{WORKFORCE.staffTraining.title}</h3>
            <p className="workforce__highlight-desc">{WORKFORCE.staffTraining.description}</p>
          </div>
          <div className="workforce__highlight">
            <h3 className="workforce__highlight-title">{WORKFORCE.operationalDiscipline.title}</h3>
            <p className="workforce__highlight-desc workforce__highlight-desc--dark">
              {WORKFORCE.operationalDiscipline.description}
            </p>
          </div>
        </div>

        {/* ── Stats Detail Row ── */}
        <div className="workforce__stats">
          {WORKFORCE.stats.map((stat, i) => (
            <div key={i} className="workforce__stat">
              <h4 className="workforce__stat-title">{stat.title}</h4>
              <p className="workforce__stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .workforce__cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .workforce__card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          transition: var(--transition);
        }

        .workforce__card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .workforce__card-icon {
          width: 52px;
          height: 52px;
          background: rgba(200, 168, 101, 0.1);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold);
          margin-bottom: 1.25rem;
          transition: var(--transition);
        }

        .workforce__card:hover .workforce__card-icon {
          background: var(--color-gold);
          color: #000;
        }

        .workforce__card-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 0.75rem;
        }

        .workforce__card-desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.8;
        }

        /* ── Highlights ── */
        .workforce__highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .workforce__highlight {
          border-radius: var(--radius-md);
          padding: 2.5rem;
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
        }

        .workforce__highlight--gold {
          background: linear-gradient(
            135deg,
            rgba(200, 168, 101, 0.15) 0%,
            rgba(200, 168, 101, 0.05) 100%
          );
          border-color: var(--color-gold);
        }

        .workforce__highlight-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 1rem;
        }

        .workforce__highlight-desc {
          font-size: var(--fs-sm);
          line-height: 1.85;
          color: var(--color-gray-light);
        }

        /* ── Stats Row ── */
        .workforce__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--color-border);
        }

        .workforce__stat-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-gold);
          margin-bottom: 0.6rem;
        }

        .workforce__stat-desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.75;
        }

        @media (max-width: 968px) {
          .workforce__cards,
          .workforce__stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .workforce__highlights {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .workforce__cards,
          .workforce__stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}