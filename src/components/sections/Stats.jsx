import StatCounter from '../ui/StatCounter'
import { STATS } from '../../utils/constants'

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid reveal">
          {STATS.map((stat, i) => (
            <StatCounter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      <style>{`
        .stats {
          background: rgba(200, 168, 101, 0.06);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 4rem 0;
        }

        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          divide-x: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .stats__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}