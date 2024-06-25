import type { Metadata } from "next";
import { nunito } from "@/components/fonts";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ang Li-Lian",
  description: "Ang Li-Lian&apos;s portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ang Li-Lian</title>
      </head>
      <body className={`${nunito.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
