import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Is Valet Parking Worth It in Dubai?',
    excerpt: 'Discover why more Dubai venues are investing in professional valet services and how it impacts guest satisfaction.',
    date: 'June 10, 2026',
    category: 'Industry Insights',
  },
  {
    id: 2,
    title: 'How Valet Parking Boosts Guest Experience at Hotels',
    excerpt: 'A seamless arrival sets the tone for the entire stay. Here is how valet parking transforms the hotel guest experience.',
    date: 'May 28, 2026',
    category: 'Hotels & Hospitality',
  },
  {
    id: 3,
    title: 'Why Digital QR Ticket Valet Systems Are the Future',
    excerpt: 'Traditional paper tickets are being replaced by smart QR systems. We explore what this means for valet operations in Dubai.',
    date: 'May 15, 2026',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'The Importance of Valet Parking for Dubai Events',
    excerpt: 'Large events require seamless logistics. Professional valet management is no longer a luxury — it is a necessity.',
    date: 'April 30, 2026',
    category: 'Events',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Our Blog</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Valet Parking Insights</h1>
          <p className="page-hero__subtitle">
            Industry news, tips, and guides from Dubai's leading valet parking experts.
          </p>
        </div>
      </section>

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
                to={`/blog/${post.id}`}
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