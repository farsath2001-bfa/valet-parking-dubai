import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'

const SLIDES = [
  {
    id: 1,
    eyebrow: 'Excellence in Every Drive',
    title: 'AI-Powered Valet',
    titleGold: '& Hospitality',
    subtitle:
      'Solo Heights Valet Parking delivers world-class valet experiences through precision, professionalism, and fully integrated AI-powered operational excellence.',
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
  },
  {
    id: 2,
    eyebrow: 'Premium Valet Services',
    title: 'Seamless Luxury',
    titleGold: 'For Every Venue',
    subtitle:
      'From hotels to events to premium venues — our 50+ trained professionals deliver white-glove valet parking with unmatched care.',
    bg: 'linear-gradient(135deg, #0d0d0d 0%, #1a0a00 50%, #0d0d0d 100%)',
  },
  {
    id: 3,
    eyebrow: 'AI-Driven Operations',
    title: 'Smart Technology',
    titleGold: 'Flawless Service',
    subtitle:
      'Our fully integrated AI system reduces wait times by 15%, cuts operational costs by 10%, and maintains a 99.9% incident-free record.',
    bg: 'linear-gradient(135deg, #080808 0%, #0a1628 50%, #080808 100%)',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      goNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [current])

  const goNext = () => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => setAnimating(false), 600)
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }

  const goPrev = () => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => setAnimating(false), 600)
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  const slide = SLIDES[current]

  return (
    <section className="hero" style={{ background: slide.bg }}>
      <div className="hero__pattern" />

      <div className={`container hero__content ${animating ? 'hero__content--fade' : ''}`}>

        <span className="eyebrow hero__eyebrow">{slide.eyebrow}</span>
        <div className="gold-line" />

        <h1 className="hero__title">
          {slide.title}
          <br />
          <span className="hero__title-gold">{slide.titleGold}</span>
        </h1>

        <p className="hero__subtitle">{slide.subtitle}</p>

        <div className="hero__badges">
          {['AI-Powered Operations', '50+ Professionals', '99.9% Incident-Free', 'Business Bay, Dubai'].map((badge) => (
            <span key={badge} className="hero__badge">{badge}</span>
          ))}
        </div>

        <div className="hero__ctas">
          
           <a href={'https://wa.me/' + CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Get Free Quote
          </a>
          
            <a href={'tel:' + CONTACT_INFO.phone}
            className="btn btn--outline"
          >
            <Phone size={16} />
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--prev" onClick={goPrev}>
        <ChevronLeft size={24} />
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={goNext}>
        <ChevronRight size={24} />
      </button>

      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          transition: background 1s ease;
        }

        .hero__pattern {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(200, 168, 101, 0.03) 0px,
              rgba(200, 168, 101, 0.03) 1px,
              transparent 1px,
              transparent 60px
            );
          pointer-events: none;
        }

        .hero__content {
          position: relative;
          z-index: 2;
          padding-top: 8rem;
          padding-bottom: 6rem;
          max-width: 780px;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .hero__content--fade {
          opacity: 0;
          transform: translateY(10px);
        }

        .hero__eyebrow {
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: var(--fs-hero);
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .hero__title-gold {
          color: var(--color-gold);
        }

        .hero__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 580px;
        }

        .hero__badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .hero__badge {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-gold);
          border: 1px solid var(--color-border);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          background: rgba(200, 168, 101, 0.06);
        }

        .hero__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero__arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 50px;
          height: 50px;
          border: 1px solid var(--color-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold);
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(8px);
          transition: var(--transition);
          cursor: pointer;
        }

        .hero__arrow:hover {
          background: var(--color-gold);
          color: #000;
          border-color: var(--color-gold);
        }

        .hero__arrow--prev { left: 2rem; }
        .hero__arrow--next { right: 2rem; }

        .hero__dots {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 3;
        }

        .hero__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(200, 168, 101, 0.3);
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .hero__dot--active {
          background: var(--color-gold);
          width: 28px;
          border-radius: 4px;
        }

        .hero__scroll {
          position: absolute;
          right: 2.5rem;
          bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 3;
        }

        .hero__scroll span {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-gray);
          writing-mode: vertical-rl;
        }

        .hero__scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--color-gold), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }

        @media (max-width: 768px) {
          .hero__content { padding-top: 7rem; }
          .hero__arrow { display: none; }
          .hero__scroll { display: none; }
        }
      `}</style>
    </section>
  )
}