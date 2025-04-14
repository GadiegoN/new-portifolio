import { Footer, Header } from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gadiego Nogueira - Portfólio",
  description:
    "Portfólio de Gadiego Nogueira, desenvolvedor front-end e mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased flex flex-col justify-between`}
      >
        <Analytics />
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-10 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
