import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = "https://teakwoodcamping.com/hero1.webp",
  type = "website",
}) {
  const fullTitle = title
    ? `${title} | Teakwood Forest Resort & Camp`
    : "Teakwood Forest Resort & Camp - Boutique Farm Stay Near Pune";
  const finalDescription =
    description ||
    "Teakwood Forest Resort and Camp is a boutique eco resort and farm stay near Pune, ideal for weekend getaways, retreats, and family stays.";
  const finalUrl = url || "https://teakwoodcamping.com";

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="author" content="Teakwood Forest Resort and Camp" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Bhor, Pune" />
      <meta name="geo.position" content="18.151;73.848" />
      <meta name="ICBM" content="18.151, 73.848" />
      <link rel="canonical" href={finalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Teakwood Forest Resort and Camp" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={finalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#0f3d2e" />
      <link rel="icon" href="/favicon.ico" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: "Teakwood Forest Resort and Camp",
          image,
          url: "https://teakwoodcamping.com",
          telephone: "+91-9881301029",
          address: {
            "@type": "PostalAddress",
            streetAddress: "S. No. 38, Malegaon-Salawade Road, Bhor",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "412213",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.151,
            longitude: 73.848,
          },
          priceRange: "INR",
          description:
            "Teakwood Forest Resort and Camp is a boutique eco resort and farm stay near Pune, perfect for weekend getaways, yoga retreats, family vacations, and corporate events.",
          sameAs: [
            "https://www.instagram.com/teakwoodforestresort/",
            "https://www.facebook.com/teakwoodforestresort/",
          ],
        })}
      </script>
    </Helmet>
  );
}
