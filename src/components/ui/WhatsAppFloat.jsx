import { MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'

export default function WhatsAppFloat() {
  return (
    
      <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello, I'd like to inquire about valet parking services.`}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="wa-float__tooltip">Chat with us</span>

      <style>{`
        .wa-float {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999;
          width: 58px;
          height: 58px;
          background-color: #25D366;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
        }

        .wa-float:hover {
          background-color: #1ebe5d;
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
        }

        .wa-float__tooltip {
          position: absolute;
          right: 70px;
          background: #111;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .wa-float__tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #111;
        }

        .wa-float:hover .wa-float__tooltip {
          opacity: 1;
        }

        @media (max-width: 480px) {
          .wa-float {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </a>
  )
}