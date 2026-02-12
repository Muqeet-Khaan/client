import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'Shirazi Dental Care - Expert Dental Care in Rawalpindi',
  description = 'Modern Dentistry • Trusted Excellence • Radiant Smiles - Expert dental care in Rawalpindi. Comfortable, affordable, and trusted dental services. Book your appointment today!',
  keywords = 'dentist, dental clinic, teeth whitening, orthodontics, dental care, Rawalpindi, dental implants, root canal, cosmetic dentistry, Shirazi Dental Care',
  image = '/og-image.jpg',
  url = 'https://shirazidentalcare.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shirazi Dental Care" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Shirazi Dental Care" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Shirazi Dental Care",
          "description": description,
          "url": url,
          "telephone": "+92-300-920-6148",
          "email": "info@shirazidentalcare.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Luxury Dental Care Center",
            "addressLocality": "Rawalpindi",
            "addressRegion": "Punjab",
            "postalCode": "46000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.5651",
            "longitude": "73.0169"
          },
          "openingHours": [
            "Mo-Sa 17:00-21:30"
          ],
          "priceRange": "PKR",
          "image": image,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "100"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dental Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "General Checkup & Cleaning",
                  "description": "Comprehensive dental examination and professional cleaning"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Teeth Whitening",
                  "description": "Professional teeth whitening for a brighter smile"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Orthodontics",
                  "description": "Braces and Invisalign for straighter teeth"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO
