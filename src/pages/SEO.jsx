import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = "https://teakwoodcamping.com/hero1.webp",
  type = "website"
}) {
  const fullTitle = title
    ? `${title} | Teakwood Forest Resort & Camp`
    : "Teakwood Forest Resort & Camp – Boutique Farm Stay Near Pune";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="theme-color" content="#0f3d2e" />
      <link rel="icon" href="/favicon.ico" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          "name": "Teakwood Forest Resort and Camp",
          "image": image,
          "url": "https://teakwoodcamping.com",
          "telephone": "+91-9881301029",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "S. No. 38, Malegaon-Salawade Road, Bhor",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "412213",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹",
          "description":
            "Teakwood Forest Resort and Camp is a boutique eco resort and farm stay near Pune, perfect for weekend getaways, yoga retreats, family vacations, and corporate events.",
          "sameAs": [
            "https://www.instagram.com/teakwoodforestresort/",
            "https://www.facebook.com/teakwoodforestresort/"
          ]
        })}
      </script>
    </Helmet>
  );
}