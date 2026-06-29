import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'
import { TESTIMONIALS } from '../../utils/constants'

export default function Testimonials() {
  return (
    <section className="section section--darker testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          subtitle="Trusted by hotels, event planners, and private hosts across Dubai and the UAE."
          center
        />

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              role={t.role}
              review={t.review}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .testimonials__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}