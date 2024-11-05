import React from "react";
import { Metadata } from "next";
import RootLayout from "./RootLayout"; 
import favicon from "../assets/images/eco-mama.png"

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
  return <RootLayout>{children}</RootLayout>;
  
}
