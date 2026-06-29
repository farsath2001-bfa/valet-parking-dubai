import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'
import { SERVICES } from '../utils/constants'

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">What We Offer</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Our Valet Parking Services</h1>
          <p className="page-hero__subtitle">
            Tailored valet parking solutions for every venue, occasion, and
            industry across Dubai and the UAE.
          </p>
        </div>

        <style>{`
          .page-hero {
            background: var(--color-bg-2);
            padding: 10rem 0 5rem;
            border-bottom: 1px solid var(--color-border);
          }
          .page-hero__inner { max-width: 700px; }
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
        `}</style>
      </section>

      {/* ── All Services ── */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="All Services"
            title="Complete Valet Solutions"
            subtitle="From a single event to a full management contract — we have a solution for every need."
            center
          />
          <div className="services-page__grid">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <style>{`
          .services-page__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          @media (max-width: 968px) {
            .services-page__grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 560px) {
            .services-page__grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <CTABanner />
    </>
  )
}