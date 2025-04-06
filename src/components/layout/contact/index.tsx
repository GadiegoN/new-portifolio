"use client";

import { Mail, Linkedin, Phone, Instagram } from "lucide-react";
import Link from "next/link";
import { INFOS } from "@/data/infos";

export function ContactSection() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    INFOS.whatsapp
  }&text=${encodeURIComponent(INFOS.mensagem)}`;

  return (
    <section
      id="contato"
      className="relative z-10 py-24 px-4 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
        Entre em Contato
      </h2>
      <p className="text-muted-foreground mb-12">
        Se você gostou do que viu e quer conversar sobre projetos, ideias ou
        oportunidades, é só me chamar!
      </p>

      <div className="flex flex-col items-center gap-6">
        <Link
          href={whatsappUrl}
          target="_blank"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
        >
          <Phone size={18} />
          Falar no WhatsApp
        </Link>

        <Link
          href={`mailto:${INFOS.email}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
        >
          <Mail size={18} />
          {INFOS.email}
        </Link>

        <Link
          href={INFOS.linkedin}
          target="_blank"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
        >
          <Linkedin size={18} />
          linkedin.com/in/gadiegon
        </Link>

        <Link
          href={INFOS.instagram}
          target="_blank"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
        >
          <Instagram size={18} />
          @gadiego_front
        </Link>
      </div>
    </section>
  );
}
