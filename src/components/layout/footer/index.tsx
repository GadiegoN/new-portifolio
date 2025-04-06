"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { INFOS } from "@/data/infos";

export function Footer() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    INFOS.whatsapp
  }&text=${encodeURIComponent(INFOS.mensagem)}`;

  return (
    <footer className="bg-background/50 border-t border-accent-foreground/50 py-10 px-4 z-50 text-center mt-24">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-6 justify-center">
          <Link
            href={whatsappUrl}
            target="_blank"
            className="hover:text-primary transition"
          >
            <Phone size={20} />
          </Link>
          <Link
            href={`mailto:${INFOS.email}`}
            className="hover:text-primary transition"
          >
            <Mail size={20} />
          </Link>
          <Link
            href={INFOS.linkedin}
            target="_blank"
            className="hover:text-primary transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href={INFOS.instagram}
            target="_blank"
            className="hover:text-primary transition"
          >
            <Instagram size={20} />
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gadiego. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
