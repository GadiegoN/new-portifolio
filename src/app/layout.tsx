import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-10 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
          {children}
        </main>
      </body>
    </html>
  );
}
