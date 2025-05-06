import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export default function SEO({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = "/images/heroImage.webp",
  ogType = "website",
  twitterCard = "summary_large_image",
}: SEOProps) {
  const siteUrl = "https://gainorg.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${title} | GAiN NGO - Global Academy Intelligence Network`}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="GAiN NGO" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="GAiN NGO" />

      {/* Organization Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "GAiN NGO",
          url: siteUrl,
          logo: `${siteUrl}/gain-logo.svg`,
          sameAs: [
            "https://facebook.com/gainorg",
            "https://twitter.com/gainorg",
            "https://linkedin.com/company/gainorg",
            "https://instagram.com/gainorg",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "75 3rd Ave",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10003",
            addressCountry: "US",
          },
          description:
            "Global Academy Intelligence Network (GAiN) is an NGO dedicated to transforming lives through sustainable humanitarian solutions and cultural exchange.",
        })}
      </script>
    </Helmet>
  );
}
