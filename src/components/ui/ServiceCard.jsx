import * as Icons from 'lucide-react'

export default function ServiceCard({ icon, title, description }) {
  const LucideIcon = Icons[icon] || Icons.Car

  return (
    <div className="service-card">
      <div className="service-card__icon">
        <LucideIcon size={28} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>

      <style>{`
        .service-card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          transition: var(--transition);
          cursor: default;
        }

        .service-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(200, 168, 101, 0.1);
        }

        .service-card__icon {
          width: 56px;
          height: 56px;
          background: rgba(200, 168, 101, 0.1);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold);
          margin-bottom: 1.25rem;
          transition: var(--transition);
        }

        .service-card:hover .service-card__icon {
          background: var(--color-gold);
          color: #000;
        }

        .service-card__title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 0.75rem;
        }

        .service-card__desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.8;
        }
      `}</style>
    </div>
  )
}