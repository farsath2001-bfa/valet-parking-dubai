import { BadgeCheck, Shield, Clock, Star } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: BadgeCheck, label: 'RTA Licensed & Approved' },
  { icon: Shield,     label: 'Fully Insured Operations' },
  { icon: Clock,      label: '24/7 Availability' },
  { icon: Star,       label: '10+ Years Experience' },
]

export default function TrustBar() {
  return (
    <section className="trustbar">
      <div className="container trustbar__inner">
        {TRUST_ITEMS.map((item, i) => (
          <div key={i} className="trustbar__item">
            <item.icon size={20} className="trustbar__icon" />
            <span className="trustbar__label">{item.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        .trustbar {
          background: rgba(200, 168, 101, 0.06);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 1.25rem 0;
        }

        .trustbar__inner {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .trustbar__item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .trustbar__icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .trustbar__label {
          font-size: var(--fs-sm);
          font-weight: 500;
          color: var(--color-gray-light);
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        @media (max-width: 600px) {
          .trustbar__inner {
            gap: 1rem;
          }
          .trustbar__label {
            font-size: var(--fs-xs);
          }
        }
      `}</style>
    </section>
  )
}