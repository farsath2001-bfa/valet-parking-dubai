import { Quote } from 'lucide-react'

export default function TestimonialCard({ name, role, review }) {
  return (
    <div className="testimonial-card">
      <Quote size={32} className="testimonial-card__quote-icon" />
      <p className="testimonial-card__review">{review}</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">
          {name.charAt(0)}
        </div>
        <div>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__role">{role}</p>
        </div>
      </div>

      <style>{`
        .testimonial-card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          transition: var(--transition);
        }

        .testimonial-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .testimonial-card__quote-icon {
          color: var(--color-gold);
          opacity: 0.6;
          margin-bottom: 1rem;
        }

        .testimonial-card__review {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.9;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-card__author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .testimonial-card__avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-gold);
          color: #000;
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .testimonial-card__name {
          font-size: var(--fs-sm);
          font-weight: 600;
          color: var(--color-white);
        }

        .testimonial-card__role {
          font-size: var(--fs-xs);
          color: var(--color-gold);
        }
      `}</style>
    </div>
  )
}