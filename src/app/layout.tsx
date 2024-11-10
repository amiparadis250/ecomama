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
    url: "https://www.ecomma.info",
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
              "@id": "https://www.ecomma.info",
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
