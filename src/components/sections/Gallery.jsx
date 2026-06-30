import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

import g1 from '../../assets/images/gallery/g1.png'
import g2 from '../../assets/images/gallery/g2.png'
import g3 from '../../assets/images/gallery/g3.png'
import g4 from '../../assets/images/gallery/g4.png'
import g5 from '../../assets/images/gallery/g5.png'
import g6 from '../../assets/images/gallery/g6.png'

const GALLERY_ITEMS = [
  { id: 1, img: g1, label: 'Premium Hotel Valet' },
  { id: 2, img: g2, label: 'VIP Guest Handling' },
  { id: 3, img: g3, label: 'Corporate Event Valet' },
  { id: 4, img: g4, label: 'AI Dispatch in Action' },
  { id: 5, img: g5, label: 'Uniformed Team' },
  { id: 6, img: g6, label: 'Curb Flow Management' },
]
export default function Gallery() {
  return (
    <section className="section section--dark gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Gallery"
          subtitle="A glimpse of our professional valet operations across Dubai's finest venues."
          center
        />

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="gallery__item">
              <img
                src={item.img}
                alt={item.label}
                className="gallery__img"
              />
              <div className="gallery__overlay">
                <span className="gallery__item-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery__cta">
          <Button to="/gallery" variant="outline">View Full Gallery</Button>
        </div>
      </div>

      <style>{`
        .gallery__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .gallery__item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          border: 1px solid var(--color-border);
        }

        .gallery__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .gallery__item:hover .gallery__img {
          transform: scale(1.08);
        }

        .gallery__overlay {
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

        .gallery__item:hover .gallery__overlay {
          opacity: 1;
        }

        .gallery__item-label {
          font-size: var(--fs-sm);
          font-weight: 600;
          color: var(--color-white);
          background: rgba(200, 168, 101, 0.2);
          border: 1px solid var(--color-gold);
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
        }

        .gallery__cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .gallery__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}