import SectionHeading from '../ui/SectionHeading'
import { HOW_IT_WORKS } from '../../utils/constants'

export default function HowItWorks() {
  return (
    <section className="section section--dark howitworks">
      <div className="container">
        <SectionHeading
          eyebrow="The Process"
          title="How Our Valet Service Works"
          subtitle="A seamless 5-step experience from arrival to departure — handled entirely by our professional team."
          center
        />

        <div className="howitworks__steps">
          {HOW_IT_WORKS.map((item, i) => (
            <div key={i} className="howitworks__step">
              <div className="howitworks__step-number">{item.step}</div>
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="howitworks__connector" />
              )}
              <h3 className="howitworks__step-title">{item.title}</h3>
              <p className="howitworks__step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .howitworks__steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          position: relative;
        }

        .howitworks__step {
          text-align: center;
          padding: 1.5rem 1rem;
          position: relative;
        }

        .howitworks__step-number {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-gold);
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 1rem;
          transition: var(--transition);
        }

        .howitworks__step:hover .howitworks__step-number {
          opacity: 1;
        }

        .howitworks__connector {
          position: absolute;
          top: 2.5rem;
          right: -1rem;
          width: 2rem;
          height: 1px;
          background: var(--color-border);
          z-index: 1;
        }

        .howitworks__step-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 0.5rem;
        }

        .howitworks__step-desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.7;
        }

        @media (max-width: 968px) {
          .howitworks__steps {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
          .howitworks__connector { display: none; }
        }
      `}</style>
    </section>
  )
}