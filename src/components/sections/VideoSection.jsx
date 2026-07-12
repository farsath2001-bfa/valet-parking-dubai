export default function VideoSection() {
  return (
    <section className="section section--darker videosection">
      <div className="container">

        <div className="videosection__heading">
          <span className="eyebrow">See It In Action</span>
          <div className="gold-line gold-line--center" />
          <h2 className="videosection__title">
            Watch How Our
            <span className="text-gold"> AI-Powered System </span>
            Works
          </h2>
          <p className="videosection__subtitle">
            From vehicle arrival to retrieval — our fully integrated AI
            operations platform manages every touchpoint in real time,
            delivering unmatched efficiency and guest satisfaction.
          </p>
        </div>

        <div className="videosection__wrap">
          <div className="videosection__frame">
            <video
              controls
              playsInline
              preload="metadata"
              className="videosection__video"
            >
              <source src="/valet-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="videosection__pills">
          {[
            'AI Dispatch Engine',
            'Smart Vehicle Tracking',
            'Zero-Paper Operations',
            'Real-Time Optimization',
            'Predictive Safety Alerts',
            'Performance Intelligence',
          ].map((pill) => (
            <span key={pill} className="videosection__pill">{pill}</span>
          ))}
        </div>

      </div>

      <style>{`
        .videosection__heading {
          text-align: center;
          margin-bottom: 3rem;
        }

        .videosection__title {
          font-family: var(--font-display);
          font-size: var(--fs-3xl);
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .videosection__subtitle {
          font-size: var(--fs-md);
          color: var(--color-gray-light);
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto;
        }

        .videosection__wrap {
          max-width: 900px;
          margin: 0 auto 3rem;
        }

        .videosection__frame {
          position: relative;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(200, 168, 101, 0.15);
          background: #000;
        }

        .videosection__video {
          width: 100%;
          height: auto;
          display: block;
          max-height: 500px;
          object-fit: cover;
        }

        .videosection__pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .videosection__pill {
          font-size: var(--fs-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-gold);
          border: 1px solid var(--color-border);
          padding: 0.4rem 1.25rem;
          border-radius: 100px;
          background: rgba(200, 168, 101, 0.06);
        }

        @media (max-width: 768px) {
          .videosection__title { font-size: var(--fs-2xl); }
        }
      `}</style>
    </section>
  )
}