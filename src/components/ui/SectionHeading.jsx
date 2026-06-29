export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`section-heading ${center ? 'section-heading--center' : ''}`}>

      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}

      <div className={`gold-line ${center ? 'gold-line--center' : ''}`} />

      <h2 className="section-heading__title">{title}</h2>

      {subtitle && (
        <p className="section-heading__subtitle">{subtitle}</p>
      )}

      <style>{`
        .section-heading {
          margin-bottom: 3rem;
        }

        .section-heading--center {
          text-align: center;
        }

        .section-heading__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 600;
          color: var(--color-white);
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .section-heading__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
          max-width: 600px;
        }

        .section-heading--center .section-heading__subtitle {
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .section-heading__title {
            font-size: var(--fs-2xl);
          }
        }
      `}</style>
    </div>
  )
}