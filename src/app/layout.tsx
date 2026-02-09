import "./globals.css";

import { Inter } from "next/font/google";

import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Buidlers.tech — Comunidad Web3 en Argentina | Eventos, Builders y Alianzas",
  description:
    "Comunidad Web3 que une builders, proyectos y partners para crear un ecosistema abierto, inclusivo y sostenible. Eventos, oportunidades y colaboración real.",
  keywords: [
    "comunidad web3",
    "buidlers",
    "eventos web3",
    "ethereum argentina",
    "builders",
    "hackathons",
    "alianzas web3",
  ],
  openGraph: {
    title: "Buidlers.tech — Comunidad Web3 en Argentina",
    description:
      "Unimos builders, proyectos y partners para crear oportunidades Web3 reales.",
    images: ["/cursor-intro.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
