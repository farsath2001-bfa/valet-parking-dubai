import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'
import { EVENTS } from '../utils/constants'
import Seo from '../components/ui/seo'

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Hotel', 'Private', 'Exhibition', 'Restaurant']

export default function EventsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Our Events</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Events We've Served</h1>
          <p className="page-hero__subtitle">
            From intimate private dinners to large-scale exhibitions — Solo Heights
            Valet Parking delivers flawless service at every event across Dubai.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="events__statsbar">
        <div className="container events__statsbar-inner">
          <div className="events__stat">
            <span className="events__stat-number">500+</span>
            <span className="events__stat-label">Events Served</span>
          </div>
          <div className="events__stat-divider" />
          <div className="events__stat">
            <span className="events__stat-number">50,000+</span>
            <span className="events__stat-label">Vehicles Managed</span>
          </div>
          <div className="events__stat-divider" />
          <div className="events__stat">
            <span className="events__stat-number">99.9%</span>
            <span className="events__stat-label">Incident-Free Record</span>
          </div>
          <div className="events__stat-divider" />
          <div className="events__stat">
            <span className="events__stat-number">24/7</span>
            <span className="events__stat-label">Available</span>
          </div>
        </div>
      </section>

      {/* ── Events Grid ── */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Recent Events"
            subtitle="Every event is an opportunity to deliver excellence. Here's a glimpse of our recent valet operations across Dubai."
            center
          />

          {/* ── Category Tags ── */}
          <div className="events__categories">
            {CATEGORIES.map((cat) => (
              <span key={cat} className="events__category-tag">
                {cat}
              </span>
            ))}
          </div>

          {/* ── Events Grid ── */}
          <div className="events__grid">
            {EVENTS.map((event, i) => (
              <div key={event.id} className={`event-card reveal reveal--delay-${(i % 3) + 1}`}>

                {/* ── Premium Visual Header ── */}
                <div className="event-card__header">
                  <div className="event-card__pattern" />
                  <div className="event-card__header-content">
                    <span className="event-card__cat-badge">{event.category}</span>
                    <div className="event-card__header-icon">
                      {event.category === 'Wedding'    && <span>💍</span>}
                      {event.category === 'Corporate'  && <span>🏢</span>}
                      {event.category === 'Hotel'      && <span>🏨</span>}
                      {event.category === 'Private'    && <span>⭐</span>}
                      {event.category === 'Exhibition' && <span>🎪</span>}
                      {event.category === 'Restaurant' && <span>🍽️</span>}
                    </div>
                  </div>
                  <div className="event-card__guests-big">
                    <span className="event-card__guests-number">{event.guests}</span>
                    <span className="event-card__guests-label">Guests</span>
                  </div>
                </div>

                {/* ── Body ── */}
                <div className="event-card__body">
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__desc">{event.description}</p>

                  {/* ── Meta ── */}
                  <div className="event-card__meta">
                    <span className="event-card__meta-item">
                      <MapPin size={13} />
                      {event.location}
                    </span>
                    <span className="event-card__meta-item">
                      <Calendar size={13} />
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Seo
  title="Events"
  description="Solo Heights Valet Parking has served 500+ events across Dubai — weddings, corporate galas, hotel openings, private dinners and exhibitions."
  keywords="event valet parking Dubai, wedding valet Dubai, corporate event valet Dubai, exhibition valet Dubai"
  url="https://valet-parking-dubai.vercel.app/events"
/>

      {/* ── Book Your Event ── */}
      <section className="section section--darker events__book">
        <div className="container events__book-inner">
          <div className="events__book-content">
            <span className="eyebrow">Plan Your Event</span>
            <div className="gold-line" />
            <h2 className="events__book-title">
              Planning an Event?
              <br />
              <span className="text-gold">We Handle the Valet.</span>
            </h2>
            <p className="events__book-text">
              From weddings to corporate galas — Solo Heights Valet Parking
              provides fully managed, AI-powered valet solutions for any event
              size. Get in touch for a custom quote within minutes.
            </p>
          </div>
          <div className="events__book-ctas">
            
              <a href="https://wa.me/971568367272"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              <ArrowRight size={16} />
              Get Event Quote
            </a>
            
             <a href="tel:+971568367272"
              className="btn btn--outline"
            >
              Call Us Now
            </a>
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

        /* ── Stats Bar ── */
        .events__statsbar {
          background: rgba(200, 168, 101, 0.06);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 2rem 0;
        }

        .events__statsbar-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .events__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .events__stat-number {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-gold);
          line-height: 1;
        }

        .events__stat-label {
          font-size: var(--fs-xs);
          color: var(--color-gray-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .events__stat-divider {
          width: 1px;
          height: 40px;
          background: var(--color-border);
        }

        /* ── Categories ── */
        .events__categories {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3rem;
          justify-content: center;
        }

        .events__category-tag {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-gold);
          border: 1px solid var(--color-border);
          padding: 0.4rem 1.25rem;
          border-radius: 100px;
          background: rgba(200, 168, 101, 0.06);
          cursor: pointer;
          transition: var(--transition);
        }

        .events__category-tag:hover {
          background: var(--color-gold);
          color: #000;
          border-color: var(--color-gold);
        }

        /* ── Grid ── */
        .events__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ── Event Card ── */
        .event-card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .event-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(200, 168, 101, 0.12);
        }

        /* ── Premium Header ── */
        .event-card__header {
          height: 160px;
          background: linear-gradient(
            135deg,
            #0d0d0d 0%,
            #1a1400 50%,
            #0d0d0d 100%
          );
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1rem;
        }

        .event-card__pattern {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(200, 168, 101, 0.06) 0px,
              rgba(200, 168, 101, 0.06) 1px,
              transparent 1px,
              transparent 30px
            );
        }

        .event-card__header-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .event-card__cat-badge {
          font-size: var(--fs-xs);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #000;
          background: var(--color-gold);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          display: inline-block;
          width: fit-content;
        }

        .event-card__header-icon {
          font-size: 1.5rem;
        }

        .event-card__guests-big {
          position: relative;
          z-index: 1;
          text-align: right;
        }

        .event-card__guests-number {
          display: block;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-gold);
          line-height: 1;
          opacity: 0.8;
        }

        .event-card__guests-label {
          font-size: var(--fs-xs);
          color: var(--color-gray);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ── Body ── */
        .event-card__body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .event-card__title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-white);
          line-height: 1.4;
        }

        .event-card__desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.75;
          flex: 1;
        }

        /* ── Meta ── */
        .event-card__meta {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border);
        }

        .event-card__meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--fs-xs);
          color: var(--color-gray-light);
        }

        .event-card__meta-item svg {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        /* ── Book Section ── */
        .events__book {
          border-top: 1px solid var(--color-border);
        }

        .events__book-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .events__book-content {
          flex: 1;
          min-width: 280px;
        }

        .events__book-title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .events__book-text {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
          max-width: 520px;
        }

        .events__book-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 968px) {
          .events__grid { grid-template-columns: repeat(2, 1fr); }
          .events__statsbar-inner { gap: 1.5rem; }
          .events__stat-divider { display: none; }
        }

        @media (max-width: 560px) {
          .events__grid { grid-template-columns: 1fr; }
          .events__book-inner { flex-direction: column; }
          .events__book-ctas { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  )
}