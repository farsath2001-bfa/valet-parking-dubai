import SectionHeading from '../ui/SectionHeading'

const CLIENT_NAMES = [
  'Burj Al Arab',
  'Atlantis The Palm',
  'Mall of Emirates',
  "Dubai Int'l Airport",
  'Armani Hotel',
  'Emirates Airlines',
  'Jumeirah Group',
  'DIFC',
  'Address Hotels',
]

export default function Clients() {
  return (
    <section className="section section--darker clients">
      <div className="container">
        <SectionHeading
          eyebrow="Trusted By"
          title="Our Valued Partners"
          subtitle="Proud to serve Dubai's most prestigious hotels, malls, and landmarks."
          center
        />

        <div className="clients__grid">
          {CLIENT_NAMES.map((name, i) => (
            <div key={i} className="clients__item">
              <span className="clients__name">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .clients__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .clients__item {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg);
          transition: var(--transition);
          min-height: 80px;
        }

        .clients__item:hover {
          border-color: var(--color-gold);
          background: rgba(200, 168, 101, 0.05);
        }

        .clients__name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-gray-light);
          text-align: center;
          transition: var(--transition);
        }

        .clients__item:hover .clients__name {
          color: var(--color-gold);
        }

        @media (max-width: 768px) {
          .clients__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .clients__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}