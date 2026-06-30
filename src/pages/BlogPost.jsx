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
            How AI is Transforming Valet Parking in Dubai
          </h1>
          <p className="page-hero__subtitle">June 10, 2026 · Technology</p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container blog-post__content">
          <p>
            At Solo Heights Valet Parking, we believe luxury hospitality and
            cutting-edge technology go hand in hand. Our proprietary AI
            operations platform connects every touchpoint — from curb arrival
            to vehicle retrieval — into one unified, real-time management
            system that drives unmatched efficiency and guest satisfaction.
          </p>
          <h2>Real-Time Optimization</h2>
          <p>
            Our AI continuously analyzes traffic flow, driver availability,
            and lane congestion to dynamically optimize every retrieval —
            cutting wait times by up to 15%. This means guests spend less
            time waiting and more time enjoying their visit.
          </p>
          <h2>Smart Vehicle Tracking</h2>
          <p>
            Every vehicle is logged, tracked, and monitored from arrival to
            retrieval using our AI-enabled platform. Guests receive live
            status updates and estimated retrieval times instantly, with
            zero paperwork involved.
          </p>
          <h2>Predictive Safety Alerts</h2>
          <p>
            Our AI system flags potential incidents before they occur,
            supporting our 99.9% incident-free record and a 25% reduction in
            vehicle damage events. This proactive approach to safety is what
            sets Solo Heights apart in the Dubai valet industry.
          </p>
          <p>
            Combined with our team of 50+ uniformed, certified professionals,
            this AI-powered infrastructure sets a new standard for
            intelligent, luxury valet service under Solo Heights Group.
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