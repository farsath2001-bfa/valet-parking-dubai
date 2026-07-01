import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import { SERVICES } from '../../utils/constants'

export default function Services() {
  return (
    <section className="section section--dark services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Valet Parking Services"
          subtitle="From luxury weddings to corporate events — we deliver tailored valet solutions for every venue and occasion across Dubai."
          center
        />

        <div className="services__grid reveal">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="services__cta">
          <Button to="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>

      <style>{`
        .services__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .services__cta {
          text-align: center;
        }

        @media (max-width: 1024px) {
          .services__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .services__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}