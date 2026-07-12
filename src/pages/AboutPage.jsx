import { CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Stats          from '../components/sections/Stats'
import Leadership     from '../components/sections/Leadership'
import CTABanner      from '../components/sections/CTABanner'
import Workforce      from '../components/sections/Workforce'
import { COMPANY }    from '../utils/constants'
import teamPhoto      from '../assets/images/gallery/g0.png'
// import VideoSection from '../components/sections/VideoSection'

const VALUES = [
  { title: 'AI-Powered Operations',  desc: 'A fully integrated AI system manages vehicle flow, guest wait times, and real-time parking data.' },
  { title: 'Elite Uniformed Team',   desc: "Our trained valet professionals wear premium, weather-appropriate uniforms reflecting Dubai's luxury standard." },
  { title: 'Proven Excellence',      desc: 'A 99.9% incident-free record and consistently elevated guest satisfaction scores define our operational standard.' },
  { title: 'Continuous Development', desc: 'Ongoing coaching, performance reviews, and advanced training keep our team at the forefront of valet excellence.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">About Us</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">{COMPANY.tagline}</h1>
          <p className="page-hero__subtitle">{COMPANY.identity}</p>
        </div>
      </section>

      {/* ── Identity / Mission / Vision ── */}
      <section className="section section--darker">
        <div className="container about-story">
          <div className="about-story__content">
            <SectionHeading
              eyebrow="Our Mission"
              title="Built on Trust & Innovation"
              subtitle={COMPANY.mission}
            />
            <h3 className="about-story__subhead">Our Vision</h3>
            <p className="about-story__text">{COMPANY.vision}</p>

            <h3 className="about-story__subhead">Our People</h3>
            <p className="about-story__text">{COMPANY.people}</p>

            <h3 className="about-story__subhead">Our Commitment</h3>
            <p className="about-story__text">{COMPANY.commitment}</p>
          </div>

          {/* ── Team Photo ── */}
          <div className="about__image-box">
            <img
              src={teamPhoto}
              alt="Solo Heights Valet Parking Team"
              className="about__image"
            />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What We Stand For"
            center
          />
          <div className="about-values">
            {VALUES.map((v, i) => (
              <div key={i} className="about-values__card">
                <CheckCircle size={28} className="about-values__icon" />
                <h3 className="about-values__title">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <Stats />
      {/* <VideoSection/> */}

      {/* ── Leadership ── */}
      <Leadership />

      {/* ── Workforce ── */}
      <Workforce />

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

        /* ── Story ── */
        .about-story {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .about-story__subhead {
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--color-gold);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .about-story__text {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.9;
          margin-bottom: 1rem;
        }

        /* ── Team Photo ── */
        .about__image-box {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
          position: sticky;
          top: 100px;
        }

        .about__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s ease;
        }

        .about__image-box:hover .about__image {
          transform: scale(1.04);
        }

        /* ── Values ── */
        .about-values {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .about-values__card {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          text-align: center;
          transition: var(--transition);
        }

        .about-values__card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
        }

        .about-values__icon {
          color: var(--color-gold);
          margin: 0 auto 1rem;
        }

        .about-values__title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--color-white);
          margin-bottom: 0.5rem;
        }

        .about-values__desc {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.7;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-values { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .about-story {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about__image-box {
            position: static;
          }
        }

        @media (max-width: 560px) {
          .about-values { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}