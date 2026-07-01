import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'
import Clients from '../components/sections/Clients'
import { SERVICES, COMPANY } from '../utils/constants'

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">What We Offer</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Premium Valet & Hospitality Services</h1>
          <p className="page-hero__subtitle">
            Every service we offer is backed by rigorous training, luxury
            hospitality standards, and a fully integrated AI operations platform.
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
            subtitle="Combining luxury hospitality expertise with AI-powered systems — Solo Heights Valet Parking sets a new benchmark for premium valet operations."
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

      {/* ── Clients ── */}
      <Clients />

      {/* ── Our Promise ── */}
      <section className="section section--darker promise">
        <div className="container promise__inner">
          <span className="eyebrow">Our Promise</span>
          <div className="gold-line" />
          <h2 className="promise__title">
            Every Guest Interaction Is An Opportunity To Exceed Expectations
          </h2>
          <p className="promise__text">
            From the moment a vehicle arrives to its safe return, we deliver a
            flawless, white-glove valet experience every single time.
          </p>
        </div>

        <style>{`
          .promise__inner {
            max-width: 750px;
            text-align: center;
            margin: 0 auto;
          }
          .promise__title {
            font-family: var(--font-display);
            font-size: var(--fs-2xl);
            font-weight: 700;
            color: var(--color-white);
            margin-bottom: 1rem;
            line-height: 1.3;
          }
          .promise__text {
            font-size: var(--fs-md);
            color: var(--color-gray-light);
            line-height: 1.8;
          }
          .gold-line {
            margin-left: auto;
            margin-right: auto;
          }
          .eyebrow {
            display: block;
            text-align: center;
          }
        `}</style>
      </section>

      <CTABanner />
    </>
  )
}