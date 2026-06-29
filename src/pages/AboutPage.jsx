import { CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Stats          from '../components/sections/Stats'
import CTABanner      from '../components/sections/CTABanner'

const VALUES = [
  { title: 'Professionalism', desc: 'Every attendant is uniformed, trained, and held to the highest hospitality standards.' },
  { title: 'Trust',           desc: 'We are fully licensed, RTA-approved, and comprehensively insured on every operation.' },
  { title: 'Excellence',      desc: 'We go beyond parking — we deliver an experience that reflects your brand.' },
  { title: 'Reliability',     desc: '24/7 availability, 365 days a year. We are always ready when you need us.' },
]

const TEAM = [
  { name: 'Lesaa', role: 'General Manager' },
  { name: 'Nick',     role: 'Operations Director' },
  { name: 'Willson',   role: 'Client Relations Manager' },
  { name: 'Ibrahim',       role: 'Head of Training' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">About Us</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Dubai's Premier Valet Company</h1>
          <p className="page-hero__subtitle">
            Over a decade of delivering premium valet experiences across the UAE's
            most prestigious venues, hotels, and events.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section section--darker">
        <div className="container about-story">
          <div className="about-story__content">
            <SectionHeading
              eyebrow="Our Story"
              title="Built on Trust & Excellence"
              subtitle="Founded in Dubai with a single mission — to redefine the parking experience through hospitality, professionalism, and precision."
            />
            <p className="about-story__text">
              What began as a small team of dedicated parking professionals has grown
              into one of Dubai's most trusted valet management companies. With over
              10 years of experience serving luxury hotels, world-class events, and
              premier retail destinations, we have built our reputation on one
              foundation: treating every guest, every vehicle, and every venue with
              the highest possible standard of care.
            </p>
            <p className="about-story__text">
              Today we serve 150+ clients across Dubai, Abu Dhabi, and Sharjah —
              from intimate private dinners to large-scale government events. Our
              RTA-licensed team of trained, uniformed professionals handles every
              operation with precision, discretion, and pride.
            </p>
          </div>

          <div className="about-story__image">
            <div className="about-story__image-placeholder">
              <span>Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            center
          />
          <div className="about-values">
            {VALUES.map((v, i) => (
              <div key={i} className="about-values__card">
                <CheckCircle size={28} className="about-values__icon" />
                <h3 className="about-values__title">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <Stats />

      {/* ── Team ── */}
      <section className="section section--darker">
        <div className="container">
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind the Service"
            center
          />
          <div className="about-team">
            {TEAM.map((member, i) => (
              <div key={i} className="about-team__card">
                <div className="about-team__avatar">
                  {member.name.charAt(0)}
                </div>
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <style>{`
        /* ── Page Hero ── */
        .page-hero {
          background: var(--color-bg-2);
          padding: 10rem 0 5rem;
          border-bottom: 1px solid var(--color-border);
        }

        .page-hero__inner {
          max-width: 700px;
        }

        .page-hero__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .page-hero__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
        }

        /* ── Story ── */
        .about-story {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-story__text {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.9;
          margin-bottom: 1rem;
        }

        .about-story__image-placeholder {
          aspect-ratio: 4/5;
          background: var(--color-bg-3);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gray);
          font-size: var(--fs-sm);
          min-height: 400px;
        }

        /* ── Values ── */
        .about-values {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .about-values__card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          text-align: center;
          transition: var(--transition);
        }

        .about-values__card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .about-values__icon {
          color: var(--color-gold);
          margin: 0 auto 1rem;
        }

        .about-values__title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--color-white);
          margin-bottom: 0.5rem;
        }

        .about-values__desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.7;
        }

        /* ── Team ── */
        .about-team {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .about-team__card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          text-align: center;
          transition: var(--transition);
        }

        .about-team__card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .about-team__avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--color-gold);
          color: #000;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .about-team__name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          color: var(--color-white);
          margin-bottom: 0.35rem;
        }

        .about-team__role {
          font-size: var(--fs-xs);
          color: var(--color-gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-values,
          .about-team {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-story {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 560px) {
          .about-values,
          .about-team {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}