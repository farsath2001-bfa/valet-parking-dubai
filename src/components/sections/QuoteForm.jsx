import { useState } from 'react'
import { Send } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { CONTACT_INFO } from '../../utils/constants'

const SERVICE_OPTIONS = [
  'Event Valet Parking',
  'Hotel Valet Parking',
  'Wedding Valet Parking',
  'Mall Valet Parking',
  'Corporate Valet Parking',
  'Hospital Valet Parking',
  'Airport Valet Parking',
  'Other',
]

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hello! I'd like a quote.%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section className="section section--darker quoteform">
      <div className="container quoteform__inner">

        {/* ── Left ── */}
        <div className="quoteform__info">
          <SectionHeading
            eyebrow="Get A Quote"
            title="Book Your Valet Service Today"
            subtitle="Fill in the form and we'll get back to you within minutes via WhatsApp with a custom quote."
          />

          <div className="quoteform__contact-items">
            <div className="quoteform__contact-item">
              <span className="quoteform__contact-label">Phone</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className="quoteform__contact-value">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="quoteform__contact-item">
              <span className="quoteform__contact-label">Email</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="quoteform__contact-value">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="quoteform__contact-item">
              <span className="quoteform__contact-label">Address</span>
              <span className="quoteform__contact-value">{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>

        {/* ── Form ── */}
        <div className="quoteform__form-wrap">
          {submitted ? (
            <div className="quoteform__success">
              <h3>Thank You! 🎉</h3>
              <p>Your request has been sent via WhatsApp. We'll respond within minutes.</p>
              <button
                className="btn btn--outline"
                onClick={() => setSubmitted(false)}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form className="quoteform__form" onSubmit={handleSubmit}>
              <div className="quoteform__row">
                <div className="quoteform__field">
                  <label className="quoteform__label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="quoteform__input"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="quoteform__field">
                  <label className="quoteform__label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+971 XX XXX XXXX"
                    className="quoteform__input"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="quoteform__field">
                <label className="quoteform__label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="quoteform__input"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="quoteform__field">
                <label className="quoteform__label">Service Type *</label>
                <select
                  name="service"
                  required
                  className="quoteform__input quoteform__select"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="quoteform__field">
                <label className="quoteform__label">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your event, venue, guest count, date..."
                  className="quoteform__input quoteform__textarea"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--primary quoteform__submit">
                <Send size={16} />
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .quoteform__inner {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 5rem;
          align-items: start;
        }

        /* ── Contact Info ── */
        .quoteform__contact-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .quoteform__contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .quoteform__contact-label {
          font-size: var(--fs-xs);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gold);
          font-weight: 600;
        }

        .quoteform__contact-value {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
        }

        /* ── Form ── */
        .quoteform__form-wrap {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
        }

        .quoteform__form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .quoteform__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .quoteform__field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quoteform__label {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-gray-light);
        }

        .quoteform__input {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          font-size: var(--fs-sm);
          color: var(--color-white);
          font-family: var(--font-body);
          transition: var(--transition);
          outline: none;
          width: 100%;
        }

        .quoteform__input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(200, 168, 101, 0.1);
        }

        .quoteform__input::placeholder {
          color: var(--color-gray);
        }

        .quoteform__select {
          cursor: pointer;
        }

        .quoteform__select option {
          background: var(--color-bg-2);
          color: var(--color-white);
        }

        .quoteform__textarea {
          resize: vertical;
          min-height: 110px;
        }

        .quoteform__submit {
          width: 100%;
          justify-content: center;
        }

        /* ── Success ── */
        .quoteform__success {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .quoteform__success h3 {
          font-family: var(--font-display);
          font-size: var(--fs-xl);
          color: var(--color-gold);
        }

        .quoteform__success p {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.7;
        }

        @media (max-width: 968px) {
          .quoteform__inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 560px) {
          .quoteform__row {
            grid-template-columns: 1fr;
          }

          .quoteform__form-wrap {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}