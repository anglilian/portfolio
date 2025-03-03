import type { Metadata } from "next";
import { nunito } from "@/components/fonts";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CSPostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Ang Li-Lian",
  description:
    "I hope to leave the world a better place than I found it and build delightful, useful experiences along the way.",
  openGraph: {
    title: "Ang Li-Lian - Portfolio",
    description:
      "I hope to leave the world a better place than I found it and build delightful, useful experiences along the way.",
    type: "website",
    url: "https://anglilian.com",
    siteName: "Ang Li-Lian",
    images: [
      {
        url: "/images/me.jpg",
        width: 1200,
        height: 630,
        alt: "Ang Li-Lian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ang Li-Lian - Portfolio",
    description:
      "I hope to leave the world a better place than I found it and build delightful, useful experiences along the way.",
    images: ["/images/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Ang Li-Lian</title>
        </head>
        <body className={`${nunito.className} antialiased`}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-6">{children}</main>
            <Footer />
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
