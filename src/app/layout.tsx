import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
        <header className="p-4 border-b border-accent-foreground sticky top-0 bg-background/50 z-50">
          <nav className="max-w-5xl mx-auto flex justify-between">
            <span className="text-lg font-bold">GadiegoN</span>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:text-primary">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-10 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
          {children}
        </main>
      </body>
    </html>
  );
}
