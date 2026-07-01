import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { FAQS } from '../../utils/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section section--dark faq">
      <div className="container faq__inner">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our valet parking services in Dubai."
          center
        />

        <div className="faq__list reveal">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{item.question}</span>
                <ChevronDown size={20} className="faq__chevron" />
              </button>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq__inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq__list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .faq__item {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--color-bg-2);
          transition: var(--transition);
        }

        .faq__item--open {
          border-color: var(--color-gold);
        }

        .faq__question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          text-align: left;
          font-size: var(--fs-sm);
          font-weight: 500;
          color: var(--color-white);
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
        }

        .faq__chevron {
          color: var(--color-gold);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .faq__item--open .faq__chevron {
          transform: rotate(180deg);
        }

        .faq__answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .faq__item--open .faq__answer {
          max-height: 200px;
        }

        .faq__answer p {
          padding: 0 1.5rem 1.25rem;
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.8;
        }
      `}</style>
    </section>
  )
}