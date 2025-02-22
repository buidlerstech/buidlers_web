import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Formamos el hub de desarrolladores Web3 en español donde la descentralización, calidad y colaboración son parte de nuestra identidad.";

const site = "Buidlẽrs.tech";
const title = "Sinergia de mentes ávidas de conocimiento Web3.";
const image = "https://buidlers.tech/banner.png";

export const metadata: Metadata = {
  title: {
    default: site,
    template: `%s | ${site}`,
  },
  description,
  openGraph: {
    title,
    description,
    url: 'https://buidlers.tech',
    siteName: site,
    images: [{ url: image }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
