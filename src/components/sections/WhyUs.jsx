import * as Icons from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { WHY_US } from '../../utils/constants'

export default function WhyUs() {
  return (
    <section className="section section--darker whyus">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Valet Dubai Difference"
          subtitle="We combine luxury hospitality standards with professional parking operations — trusted by Dubai's leading hotels, malls, and event organizers."
          center
        />

        <div className="whyus__grid">
          {WHY_US.map((item, i) => {
           const LucideIcon = Icons[item.icon] || Icons.Star
           return (
           <div key={i} className={`whyus__card reveal reveal--delay-${i + 1}`}>
                <div className="whyus__icon">
                  <LucideIcon size={24} />
                </div>
                <h3 className="whyus__title">{item.title}</h3>
                <p className="whyus__desc">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .whyus__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .whyus__card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          transition: var(--transition);
        }

        .whyus__card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .whyus__icon {
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

        .whyus__card:hover .whyus__icon {
          background: var(--color-gold);
          color: #000;
        }

        .whyus__title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 0.75rem;
        }

        .whyus__desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.8;
        }

        @media (max-width: 968px) {
          .whyus__grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .whyus__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}