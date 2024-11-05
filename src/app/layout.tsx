import React from "react";
import { Metadata } from "next";
import RootLayout from "./RootLayout"; 
import favicon from "../assets/images/eco-mama.png";

export const metadata: Metadata = {
  title: {
    default: "Ecomama - Digital Health Platform",
    template: `%s - Ecomama`,
  },
  description: "Ecomama is a comprehensive digital health platform providing accessible and quality healthcare solutions.",
  icons: {
    icon: favicon.src,
  },
  openGraph: {
    title: "Ecomama - Digital Health Platform",
    description: "Ecomama offers innovative healthcare solutions through its digital health platform.",
    url: "https://www.ecomma.info/", 
    siteName: "Ecomama",
    images: [
      {
        url: favicon.src,
        width: 800,
        height: 600,
        alt: "Ecomama Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecomama - Digital Health Platform",
    description: "A digital health platform providing accessible healthcare solutions.",
    images: [favicon.src],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootLayout>{children}</RootLayout>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ecomama",
            url: "https://www.ecomma.info",
            logo: favicon.src,
            description: "Digital health platform providing accessible healthcare solutions.",
            sameAs: [
              "https://x.com/ECOMAMA000",
              "https://www.linkedin.com/in/eco-mama-9212ab332",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-800-555-5555",
                contactType: "Customer Support",
                areaServed: "US",
                availableLanguage: ["English"],
              },
            ],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.ecomma.info/",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.ecomma.info/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            // Define site pages for better indexing
            about: "https://www.ecomma.info/about",
            pageContent: [
              {
                "@type": "WebPage",
                name: "Home",
                url: "https://www.ecomma.info/",
              },
              {
                "@type": "WebPage",
                name: "About",
                url: "https://www.ecomma.info/about",
              },
              {
                "@type": "WebPage",
                name: "Programs",
                url: "https://www.ecomma.info/programs",
              },
              {
                "@type": "WebPage",
                name: "Hubs",
                url: "https://www.ecomma.info/hubs",
              },
              {
                "@type": "WebPage",
                name: "Contacts",
                url: "https://www.ecomma.info/contacts",
              },
            ],
          }),
        }}
      />
    </>
  );
}








// import React from "react";
// import { Metadata } from "next";
// import RootLayout from "./RootLayout";
// import favicon from "../assets/images/eco-mama.png";

// export const metadata: Metadata = {
//   title: {
//     default: "ECO-MAMA - Women's Mental Health & Climate Change Support Platform",
//     template: `%s | ECO-MAMA - Mental Health Support`,
//   },
//   description: "ECO-MAMA empowers African women, especially in Rwanda, to cope with climate change's psychological impact through AI-driven mental health support and telepsychiatry. Join our WOMEN WARRIORS program for community resilience.",
//   keywords: "women's mental health, climate change anxiety, African mental health, Rwanda healthcare, telepsychiatry, AI mental health, women empowerment, climate resilience, psychological support, community mental health, Women Warriors program",
//   authors: [{ name: "ECO-MAMA Healthcare" }],
//   category: "Mental Healthcare",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   icons: {
//     icon: favicon.src,
//     apple: favicon.src,
//     shortcut: favicon.src,
//   },
//   verification: {
//     google: 'your-google-verification-code',
//     yandex: 'your-yandex-verification-code',
//     bing: 'your-bing-verification-code',
//   },
//   alternates: {
//     canonical: 'https://ecomama.info',
//     languages: {
//       'en-US': 'https://ecomama.info',
//       'fr-FR': 'https://ecomama.info/fr',
//       'rw-RW': 'https://ecomama.info/rw', // Kinyarwanda
//     },
//   },
//   openGraph: {
//     title: "ECO-MAMA - Empowering Women's Mental Health During Climate Change",
//     description: "Supporting vulnerable women in Africa with AI-driven mental health assessments and telepsychiatry. Join 50+ women helped across 75+ locations in building climate-resilient communities.",
//     url: "https://ecomama.info",
//     siteName: "ECO-MAMA",
//     images: [
//       {
//         url: favicon.src,
//         width: 800,
//         height: 600,
//         alt: "ECO-MAMA Women's Mental Health Platform",
//       },
//       {
//         url: "/images/women-warriors.jpg",
//         width: 1200,
//         height: 630,
//         alt: "WOMEN WARRIORS Program Impact",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//     countryName: "Rwanda",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "ECO-MAMA - Supporting Women's Mental Health Through Climate Change",
//     description: "Empowering African women with mental health support and community resilience programs. 50+ women helped, 75+ places visited.",
//     images: [favicon.src],
//     creator: "@ECOMAMA000",
//     site: "@ECOMAMA000",
//   },
// };

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <RootLayout>{children}</RootLayout>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             "@id": "https://ecomama.info/#organization",
//             name: "ECO-MAMA",
//             alternateName: ["ECO-MAMA Mental Health Platform", "Women Warriors Program"],
//             url: "https://ecomama.info",
//             logo: {
//               "@type": "ImageObject",
//               url: favicon.src,
//               width: "800",
//               height: "600"
//             },
//             description: "A digital health platform empowering African women to cope with climate change's psychological impact through AI-driven mental health support and community programs.",
//             sameAs: [
//               "https://x.com/ECOMAMA000",
//               "https://www.linkedin.com/in/eco-mama-9212ab332",
//               "https://www.facebook.com/ecomama",
//               "https://www.instagram.com/ecomama_health"
//             ],
//             contactPoint: [
//               {
//                 "@type": "ContactPoint",
//                 telephone: "+250-XXX-XXX-XXX",
//                 contactType: "Mental Health Support",
//                 areaServed: ["Rwanda", "Africa"],
//                 availableLanguage: ["English", "French", "Kinyarwanda"],
//                 hoursAvailable: "Mo,Tu,We,Th,Fr 08:00-18:00"
//               }
//             ],
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Kigali",
//               addressRegion: "Kigali",
//               addressCountry: "RW"
//             },
//             offers: {
//               "@type": "Offer",
//               description: "AI-driven mental health assessments and telepsychiatry support",
//               price: "0",
//               priceCurrency: "RWF",
//               availability: "https://schema.org/InStock"
//             },
//             mainEntityOfPage: {
//               "@type": "WebPage",
//               "@id": "https://ecomama.info"
//             },
//             potentialAction: [
//               {
//                 "@type": "JoinAction",
//                 target: "https://ecomama.info/women-warriors",
//                 name: "Join WOMEN WARRIORS Program"
//               }
//             ],
//             serviceType: [
//               "Mental Health Support",
//               "Telepsychiatry",
//               "AI Mental Health Assessment",
//               "Community Resilience Programs"
//             ],
//             areaServed: {
//               "@type": "Continent",
//               name: "Africa",
//               additionalProperty: {
//                 "@type": "PropertyValue",
//                 name: "Focus Country",
//                 value: "Rwanda"
//               }
//             },
//             pageContent: [
//               {
//                 "@type": "WebPage",
//                 name: "Home",
//                 url: "https://ecomama.info/",
//                 description: "ECO-MAMA: Empowering Women's Mental Health During Climate Change"
//               },
//               {
//                 "@type": "WebPage",
//                 name: "About",
//                 url: "https://ecomama.info/about",
//                 description: "Our mission to support African women's mental health through climate change"
//               },
//               {
//                 "@type": "WebPage",
//                 name: "Women Warriors",
//                 url: "https://ecomama.info/women-warriors",
//                 description: "Join our community program empowering women as mental health advocates"
//               },
//               {
//                 "@type": "WebPage",
//                 name: "Mental Health Support",
//                 url: "https://ecomama.info/support",
//                 description: "Access AI-driven mental health assessments and telepsychiatry services"
//               },
//               {
//                 "@type": "WebPage",
//                 name: "Impact",
//                 url: "https://ecomama.info/impact",
//                 description: "See how we've helped 50+ women across 75+ locations"
//               }
//             ],
//             hasOfferCatalog: {
//               "@type": "OfferCatalog",
//               name: "Mental Health Services",
//               itemListElement: [
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "AI Mental Health Assessment",
//                     description: "Personalized mental health evaluations using AI technology"
//                   }
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Telepsychiatry Sessions",
//                     description: "Remote mental health consultations with qualified professionals"
//                   }
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "WOMEN WARRIORS Program",
//                     description: "Community program training women as mental health resilience advocates"
//                   }
//                 }
//               ]
//             },
//             "aggregateRating": {
//               "@type": "AggregateRating",
//               "ratingValue": "4.8",
//               "reviewCount": "50",
//               "bestRating": "5",
//               "worstRating": "1"
//             },
//             "award": [
//               "Supporting 50+ women in mental health resilience",
//               "Present in 75+ locations across Rwanda",
//               "Community-driven mental health support"
//             ]
//           }),
//         }}
//       />
//     </>
//   );
// }