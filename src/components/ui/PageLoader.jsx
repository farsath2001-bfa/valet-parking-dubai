import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1200)

    const hideTimer = setTimeout(() => {
      setLoading(false)
    }, 1700)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, []) // ← empty array = only runs ONCE on first load

  if (!loading) return null

  return (
    <div className={`page-loader ${fadeOut ? 'page-loader--fade' : ''}`}>

      {/* ── Logo ── */}
      <div className="page-loader__logo">
        <img src={logo} alt="Solo Heights" className="page-loader__img" />
      </div>

      {/* ── Brand Name ── */}
      <div className="page-loader__brand">
        <span className="page-loader__name">SOLO HEIGHTS</span>
        <span className="page-loader__sub">VALET PARKING</span>
      </div>

      {/* ── Progress Bar ── */}
      <div className="page-loader__bar-wrap">
        <div className="page-loader__bar" />
      </div>

      {/* ── Tagline ── */}
      <span className="page-loader__tagline">Excellence in Every Drive</span>

      <style>{`
        .page-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          transition: opacity 0.5s ease;
        }

        .page-loader--fade {
          opacity: 0;
          pointer-events: none;
        }

        .page-loader__logo {
          animation: loaderPulse 1.2s ease-in-out infinite;
        }

        .page-loader__img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          mix-blend-mode: lighten;
        }

        @keyframes loaderPulse {
          0%, 100% { transform: scale(1);   opacity: 0.8; }
          50%       { transform: scale(1.08); opacity: 1;   }
        }

        .page-loader__brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .page-loader__name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--color-white);
        }

        .page-loader__sub {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--color-gold);
        }

        .page-loader__bar-wrap {
          width: 180px;
          height: 2px;
          background: rgba(200, 168, 101, 0.15);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 0.5rem;
        }

        .page-loader__bar {
          height: 100%;
          background: var(--color-gold);
          border-radius: 2px;
          animation: loaderBar 1.2s ease-in-out forwards;
        }

        @keyframes loaderBar {
          0%   { width: 0%; }
          60%  { width: 80%; }
          100% { width: 100%; }
        }

        .page-loader__tagline {
          font-family: var(--font-display);
          font-size: var(--fs-sm);
          color: var(--color-gray);
          letter-spacing: 0.1em;
          font-style: italic;
          animation: loaderFadeIn 0.8s ease 0.3s both;
        }

        @keyframes loaderFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}