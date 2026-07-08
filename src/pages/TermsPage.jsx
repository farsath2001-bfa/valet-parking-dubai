import Seo from '../components/ui/Seo'
import CTABanner from '../components/sections/CTABanner'
import { CONTACT_INFO } from '../utils/constants'

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Solo Heights Valet Parking terms and conditions — rules governing use of our valet parking services in Dubai."
        url="https://valet-parking-dubai.vercel.app/terms"
      />

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Legal</span>
          <div className="gold-line" />
          <h1 className="page-hero__title">Terms & Conditions</h1>
          <p className="page-hero__subtitle">Last updated: July 2026</p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section section--dark">
        <div className="container legal__content">

          <p className="legal__intro">
            By using Solo Heights Valet Parking services or accessing our
            website, you agree to be bound by these Terms and Conditions.
            Please read them carefully before using our services.
          </p>

          <div className="legal__section">
            <h2 className="legal__heading">1. Service Agreement</h2>
            <p className="legal__text">
              Solo Heights Valet Parking provides professional valet parking
              and hospitality services in Dubai, UAE. By handing over your
              vehicle to our attendants, you agree to these terms and
              acknowledge that you have read and understood our policies.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">2. Vehicle Acceptance</h2>
            <p className="legal__text">
              When you hand over your vehicle, our attendant will conduct a
              visual inspection and issue a claim ticket. You are responsible
              for:
            </p>
            <ul className="legal__list">
              <li>Ensuring your vehicle is in roadworthy condition</li>
              <li>Removing all valuables before handing over your vehicle</li>
              <li>Informing our attendant of any existing damage to your vehicle</li>
              <li>Providing accurate vehicle information when requested</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">3. Liability</h2>
            <p className="legal__text">
              Solo Heights Valet Parking maintains a 99.9% incident-free
              operational record. However, our liability is limited to:
            </p>
            <ul className="legal__list">
              <li>Physical damage caused directly by our attendants during parking</li>
              <li>Loss of personal items reported before vehicle handover</li>
              <li>Damage documented and acknowledged at time of vehicle acceptance</li>
            </ul>
            <p className="legal__text">
              We are not liable for pre-existing damage, mechanical failures,
              or items left in the vehicle that were not declared at time of
              handover.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">4. Vehicle Retrieval</h2>
            <p className="legal__text">
              To retrieve your vehicle you must present your original claim
              ticket. In case of lost tickets, you will be required to provide
              valid photo identification and vehicle ownership documents. Solo
              Heights Valet Parking reserves the right to charge an
              administrative fee for lost ticket retrievals.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">5. Payment Terms</h2>
            <p className="legal__text">
              Payment for valet services is due at the time of vehicle
              retrieval unless prior arrangements have been made. We accept
              cash and major credit/debit cards. Corporate clients may be
              subject to separate invoicing terms as agreed in writing.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">6. Unclaimed Vehicles</h2>
            <p className="legal__text">
              Vehicles not collected within 24 hours of the agreed retrieval
              time may be subject to additional storage charges. Solo Heights
              Valet Parking will make reasonable efforts to contact the vehicle
              owner. Vehicles unclaimed after 7 days may be reported to the
              relevant UAE authorities.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">7. Website Use</h2>
            <p className="legal__text">
              The content on our website is for general information purposes
              only. You may not:
            </p>
            <ul className="legal__list">
              <li>Copy or reproduce any content without written permission</li>
              <li>Use our brand name or logo without authorization</li>
              <li>Use our website for any unlawful or fraudulent purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">8. Governing Law</h2>
            <p className="legal__text">
              These Terms and Conditions are governed by the laws of the
              United Arab Emirates. Any disputes arising from these terms
              shall be subject to the exclusive jurisdiction of the courts
              of Dubai, UAE.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">9. Changes to Terms</h2>
            <p className="legal__text">
              Solo Heights Valet Parking reserves the right to update these
              Terms and Conditions at any time. Changes will be posted on
              this page with an updated date. Continued use of our services
              after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">10. Contact Us</h2>
            <p className="legal__text">
              For questions about these Terms and Conditions:
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