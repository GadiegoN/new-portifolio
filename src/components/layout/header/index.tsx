"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 border-b border-accent-foreground sticky top-0 bg-background/70 backdrop-blur-xs z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold select-none">GadiegoN</span>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
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

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 mt-4 md:hidden text-sm font-medium animate-slide-down">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" onClick={() => setIsOpen(false)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/projetos" onClick={() => setIsOpen(false)}>
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/contato" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
