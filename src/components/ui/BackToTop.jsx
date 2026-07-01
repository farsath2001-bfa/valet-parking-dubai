import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <button
        className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 6rem;
          right: 2rem;
          z-index: 998;
          width: 46px;
          height: 46px;
          background: var(--color-gold);
          color: #000;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(200, 168, 101, 0.4);
        }

        .back-to-top--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .back-to-top:hover {
          background: var(--color-gold-hover);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(200, 168, 101, 0.5);
        }

        @media (max-width: 480px) {
          .back-to-top {
            bottom: 5rem;
            right: 1.5rem;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  )
}