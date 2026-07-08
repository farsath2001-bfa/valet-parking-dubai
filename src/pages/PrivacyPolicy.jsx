import Seo from '../components/ui/Seo'
import CTABanner from '../components/sections/CTABanner'
import { CONTACT_INFO, COMPANY } from '../utils/constants'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Solo Heights Valet Parking privacy policy — how we collect, use, and protect your personal information."
        url="https://valet-parking-dubai.vercel.app/privacy"
      />

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Legal</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Privacy Policy</h1>
          <p className="page-hero__subtitle">
            Last updated: July 2026
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section section--dark">
        <div className="container legal__content">

          <p className="legal__intro">
            Solo Heights Valet Parking, operating under Solo Heights Group,
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your personal
            information when you visit our website or use our services.
          </p>

          <div className="legal__section">
            <h2 className="legal__heading">1. Information We Collect</h2>
            <p className="legal__text">
              We may collect the following types of information when you
              interact with our website or contact us:
            </p>
            <ul className="legal__list">
              <li>Full name and contact details (phone number, email address)</li>
              <li>Service enquiry details (event type, venue, date, guest count)</li>
              <li>Vehicle information (make, model, plate number) when using our valet service</li>
              <li>Location data when you use our on-site valet services</li>
              <li>Communications sent to us via WhatsApp, email, or phone</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">2. How We Use Your Information</h2>
            <p className="legal__text">
              We use the information we collect for the following purposes:
            </p>
            <ul className="legal__list">
              <li>To provide and manage our valet parking services</li>
              <li>To respond to your enquiries and booking requests</li>
              <li>To send service confirmations and operational updates</li>
              <li>To improve our services and customer experience</li>
              <li>To comply with applicable UAE laws and regulations</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">3. Data Security</h2>
            <p className="legal__text">
              Solo Heights Valet Parking takes data security seriously. We
              implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. Our AI-powered
              operations platform uses industry-standard encryption to
              protect all vehicle and guest data.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">4. Sharing Your Information</h2>
            <p className="legal__text">
              We do not sell, trade, or rent your personal information to
              third parties. We may share your information only in the
              following circumstances:
            </p>
            <ul className="legal__list">
              <li>With venue partners when required to deliver our valet service</li>
              <li>With our operations team to manage vehicle handling</li>
              <li>When required by UAE law or government authorities</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">5. Cookies</h2>
            <p className="legal__text">
              Our website may use cookies to enhance your browsing experience.
              Cookies are small text files stored on your device that help us
              understand how visitors use our site. You can disable cookies
              through your browser settings, though this may affect some
              website functionality.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">6. Your Rights</h2>
            <p className="legal__text">
              You have the right to:
            </p>
            <ul className="legal__list">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">7. Third-Party Links</h2>
            <p className="legal__text">
              Our website may contain links to third-party websites. We are
              not responsible for the privacy practices or content of those
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">8. Changes to This Policy</h2>
            <p className="legal__text">
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated date.
              We encourage you to review this policy periodically.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">9. Contact Us</h2>
            <p className="legal__text">
              If you have any questions about this Privacy Policy or how
              we handle your personal information, please contact us:
            </p>
            <div className="legal__contact">
              <p><strong>Solo Heights Valet Parking</strong></p>
              <p>{CONTACT_INFO.address}</p>
              <p>Email: <a href={'mailto:' + CONTACT_INFO.email} className="legal__link">{CONTACT_INFO.email}</a></p>
              <p>Phone: <a href={'tel:' + CONTACT_INFO.phone} className="legal__link">{CONTACT_INFO.phone}</a></p>
            </div>
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
        .page-hero__inner { max-width: 700px; }
        .page-hero__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .page-hero__subtitle {
          font-size: var(--fs-sm);
          color: var(--color-gray);
        }

        .legal__content {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .legal__intro {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.85;
          padding: 1.5rem;
          border-left: 3px solid var(--color-gold);
          background: rgba(200, 168, 101, 0.05);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }

        .legal__section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--color-border);
        }

        .legal__section:last-child {
          border-bottom: none;
        }

        .legal__heading {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--color-gold);
        }

        .legal__text {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.85;
        }

        .legal__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-left: 1rem;
        }

        .legal__list li {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          line-height: 1.7;
          position: relative;
          padding-left: 1rem;
        }

        .legal__list li::before {
          content: '→';
          position: absolute;
          left: -0.5rem;
          color: var(--color-gold);
          font-size: var(--fs-xs);
        }

        .legal__contact {
          background: var(--color-bg-2);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .legal__contact p {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
        }

        .legal__contact strong {
          color: var(--color-white);
          font-family: var(--font-display);
        }

        .legal__link {
          color: var(--color-gold);
          transition: var(--transition);
        }

        .legal__link:hover {
          color: var(--color-gold-hover);
        }
      `}</style>
    </>
  )
}