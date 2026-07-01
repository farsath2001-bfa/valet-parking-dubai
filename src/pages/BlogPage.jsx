import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Testimonials from '../components/sections/Testimonials'
import CTABanner from '../components/sections/CTABanner'

const BLOG_POSTS = [
  {
    id: 1,
    title: 'How AI is Transforming Valet Parking in Dubai',
    excerpt: 'Discover how Solo Heights Valet Parking uses AI dispatch, smart vehicle tracking, and predictive safety alerts to redefine the guest experience.',
    date: 'June 10, 2026',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Why Hotels Choose AI-Powered Valet Over Traditional Service',
    excerpt: 'A seamless arrival sets the tone for the entire stay. Here is how our AI-driven operations boost guest satisfaction and reduce wait times by 15%.',
    date: 'May 28, 2026',
    category: 'Hotels & Hospitality',
  },
  {
    id: 3,
    title: 'Inside Our Zero-Paper Operations System',
    excerpt: 'Fully digital ticketing, guest records, and reporting eliminate paper waste and accelerate service speed across all Solo Heights operations.',
    date: 'May 15, 2026',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'The Importance of VIP Valet for Premium Dubai Events',
    excerpt: 'Large events require seamless logistics. Discover how our VIP guest handling protocols deliver discreet, personalized service for high-profile arrivals.',
    date: 'April 30, 2026',
    category: 'Events',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Our Blog</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Valet Parking Insights</h1>
          <p className="page-hero__subtitle">
            Industry news, AI innovation, and guides from Solo Heights Valet
            Parking — Dubai's leading AI-powered valet experts.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Latest Articles"
            title="From Our Blog"
            center
          />
          <div className="blog__grid">
            {BLOG_POSTS.map((post) => (
              <Link
                to={'/blog/' + post.id}
                key={post.id}
                className="blog-card"
              >
                <div className="blog-card__image">
                  <span>{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__category">{post.category}</span>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__footer">
                    <span className="blog-card__date">{post.date}</span>
                    <span className="blog-card__read">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <CTABanner />

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
        }
        .page-hero__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
        }

        .blog__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .blog-card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .blog-card__image {
          height: 180px;
          background: var(--color-bg-3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gray);
          font-size: var(--fs-sm);
          font-style: italic;
        }

        .blog-card__body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }

        .blog-card__category {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-gold);
        }

        .blog-card__title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-white);
          line-height: 1.4;
        }

        .blog-card__excerpt {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.7;
          flex: 1;
        }

        .blog-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border);
          margin-top: 0.5rem;
        }

        .blog-card__date {
          font-size: var(--fs-xs);
          color: var(--color-gray);
        }

        .blog-card__read {
          font-size: var(--fs-xs);
          font-weight: 600;
          color: var(--color-gold);
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .blog__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}