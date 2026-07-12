import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'
import Seo from '../components/ui/Seo'


import g1  from '../assets/images/gallery/g1.png'
import g2  from '../assets/images/gallery/g2.png'
import g3  from '../assets/images/gallery/g3.png'
import g4  from '../assets/images/gallery/g4.png'
import g5  from '../assets/images/gallery/g5.png'
import g6  from '../assets/images/gallery/g6.png'

const GALLERY_ITEMS = [
  { id: 1,  img: g1,  label: 'Premium Hotel Valet — Business Bay' },
  { id: 2,  img: g2,  label: 'VIP Guest Handling' },
  { id: 3,  img: g3,  label: 'Corporate Event Valet' },
  { id: 4,  img: g4,  label: 'AI Dispatch & Smart Tracking' },
  { id: 5,  img: g5,  label: 'Uniformed Team — Black & Gold' },
  { id: 6,  img: g6,  label: 'Curb Flow Management' },
 
]
export default function GalleryPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Our Work</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Photo Gallery</h1>
<p className="page-hero__subtitle">
  A visual showcase of Solo Heights Valet Parking's AI-powered operations,
  uniformed team, and luxury service across Dubai's finest venues.
</p>
        </div>
      </section>

      {/* ── Featured Video ── */}
<section className="section section--darker">
  <div className="container">
    <div className="gallery-video__heading">
      <span className="eyebrow">Our Team in Action</span>
      <div className="gold-line gold-line--center" />
      <h2 className="gallery-video__title">
        Excellence in
        <span className="text-gold"> Every Drive</span>
      </h2>
      <p className="gallery-video__subtitle">
        Watch Solo Heights Valet Parking's professional team deliver
        world-class valet service across Dubai's finest venues.
      </p>
    </div>

    <div className="gallery-video__wrap">
      <div className="gallery-video__frame">
        <iframe
          src="https://www.youtube.com/embed/9mgZ2RnSe-E?si=UZDE7pdp1uNyWJpc"
          title="Solo Heights Valet Parking — Team in Action"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  </div>

  <style>{`
    .gallery-video__heading {
      text-align: center;
      margin-bottom: 3rem;
    }

    .gallery-video__title {
      font-family: var(--font-display);
      font-size: var(--fs-3xl);
      font-weight: 700;
      color: var(--color-white);
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    .gallery-video__subtitle {
      font-size: var(--fs-md);
      color: var(--color-gray-light);
      line-height: 1.8;
      max-width: 600px;
      margin: 0 auto;
    }

    .gallery-video__wrap {
      max-width: 900px;
      margin: 0 auto;
    }

    .gallery-video__frame {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border);
      box-shadow: 0 20px 60px rgba(200, 168, 101, 0.15);
    }

    .gallery-video__frame iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `}</style>
</section>
     

      {/* ── Gallery Grid ── */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title="Behind the Service"
            center
          />
          <div className="gallery-page__grid">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="gallery-page__item">
                <img
                  src={item.img}
                  alt={item.label}
                  className="gallery-page__img"
                />
                <div className="gallery-page__overlay">
                  <span className="gallery-page__label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <style>{`
        .page-hero {
          background: var(--color-bg-2);
          padding: 10rem 0 5rem;
          border-bottom: 1px solid var(--color-border);
        }

        .page-hero__inner {
          max-width: 700px;
        }

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

        /* ── Grid ── */
        .gallery-page__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .gallery-page__item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          border: 1px solid var(--color-border);
        }

        .gallery-page__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .gallery-page__item:hover .gallery-page__img {
          transform: scale(1.08);
        }

        .gallery-page__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.7) 0%,
            transparent 60%
          );
          display: flex;
          align-items: flex-end;
          padding: 1rem;
          opacity: 0;
          transition: var(--transition);
        }

        .gallery-page__item:hover .gallery-page__overlay {
          opacity: 1;
        }

        .gallery-page__label {
          font-size: var(--fs-xs);
          font-weight: 600;
          color: var(--color-white);
          background: rgba(200, 168, 101, 0.2);
          border: 1px solid var(--color-gold);
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .gallery-page__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery-page__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}