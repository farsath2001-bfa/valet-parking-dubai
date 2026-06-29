import { useParams, Link } from 'react-router-dom'
import CTABanner from '../components/sections/CTABanner'

export default function BlogPost() {
  const { id } = useParams()

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Link to="/blog" className="blog-post__back">← Back to Blog</Link>
          <span className="eyebrow">Blog Post</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">
            Is Valet Parking Worth It in Dubai?
          </h1>
          <p className="page-hero__subtitle">June 10, 2026 · Industry Insights</p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container blog-post__content">
          <p>
            Valet parking has evolved from a luxury perk into an essential
            service for Dubai's hospitality, retail, and events sectors. As the
            city's guest expectations rise, the first impression your venue
            makes — starting at the entrance — has never mattered more.
          </p>
          <h2>Why Valet Parking Matters in Dubai</h2>
          <p>
            Dubai's fast-paced lifestyle means guests value convenience above
            almost everything else. A professional valet service eliminates the
            frustration of finding parking, reduces traffic congestion around
            your venue, and sets an immediate tone of luxury and care.
          </p>
          <h2>The Business Case</h2>
          <p>
            For hotels, restaurants, and event venues, valet parking directly
            impacts guest satisfaction scores, repeat business, and brand
            perception. Venues with professional valet consistently rate higher
            on review platforms and report improved guest retention.
          </p>
          <p>
            The return on investment is clear: a well-managed valet operation
            pays for itself through increased revenue, improved throughput, and
            superior guest experience.
          </p>
        </div>
      </section>

      <CTABanner />

      <style>{`
        .page-hero {
          background: var(--color-bg-2);
          padding: 10rem 0 5rem;
          border-bottom: 1px solid var(--color-border);
        }
        .page-hero__inner { max-width: 800px; }
        .page-hero__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .page-hero__subtitle {
          font-size: var(--fs-sm);
          color: var(--color-gray);
        }

        .blog-post__back {
          display: inline-block;
          font-size: var(--fs-sm);
          color: var(--color-gold);
          margin-bottom: 1.5rem;
          transition: var(--transition);
        }

        .blog-post__back:hover {
          color: var(--color-gold-hover);
        }

        .blog-post__content {
          max-width: 760px;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .blog-post__content p {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.9;
        }

        .blog-post__content h2 {
          font-family: var(--font-display);
          font-size: var(--fs-xl);
          color: var(--color-white);
          margin-top: 1rem;
        }
      `}</style>
    </>
  )
}