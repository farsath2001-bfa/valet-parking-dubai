import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description, keywords, url }) {
  const siteName = 'Solo Heights Valet Parking'
  const defaultDesc = 'Premium AI-powered valet parking and hospitality services in Dubai. Excellence in Every Drive — Solo Heights Valet Parking.'
  const defaultKeywords = 'valet parking Dubai, luxury valet Dubai, AI valet parking, Solo Heights valet, hotel valet Dubai, event valet Dubai, Business Bay valet'

  const fullTitle = title ? title + ' | ' + siteName : siteName + ' | Excellence in Every Drive'

  return (
    <Helmet>
      {/* ── Basic ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />

      {/* ── Open Graph (WhatsApp / LinkedIn preview) ── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={url || 'https://valet-parking-dubai.vercel.app'} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />

      {/* ── Geo Tags (Dubai) ── */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.1972;55.2744" />
      <meta name="ICBM" content="25.1972, 55.2744" />
    </Helmet>
  )
}