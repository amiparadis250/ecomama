"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Modal, Button } from "antd";
import { MessageCircle } from "lucide-react";
import NavHeader from "@/components/layout/header"; // Adjust based on your structure
import FooterComp from "@/components/layout/footer"; // Adjust based on your structure
import Head from "next/head";
import faviicon  from "../assets/images/eco-mama.png"
// Update path as necessary

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleClose = () => setIsModalVisible(false);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={faviicon.src} />
        <title>Eco-mama</title>
        <meta name="description" content="mental health is key" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConfigProvider>
          <div className="relative min-h-screen">
            <NavHeader />
            <AntdRegistry>{children}</AntdRegistry>
            <FooterComp />
            
            {/* Fixed Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
              <Button
                onClick={showModal}
                type="primary"
                size="large"
                shape="circle"
                className="flex h-14 w-14 items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                icon={<MessageCircle className="h-6 w-6" />}
              />
            </div>

            {/* Chat Modal */}
            <Modal
              title="Cody AI Chatbot"
              open={isModalVisible}
              onCancel={handleClose}
              footer={null}
              width="100%"
              style={{ maxWidth: "800px" }}
            >
              <iframe
                src="https://embed.cody.bot/9d54bf22-8e62-4c98-8a90-ad00912fe731"
                title="Cody AI Chatbot"
                style={{ border: 0, width: "100%", height: "600px" }}
                scrolling="no"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
